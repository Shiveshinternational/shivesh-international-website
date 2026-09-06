import "server-only";

import { createHash } from "node:crypto";
import { isIP } from "node:net";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type EnquiryRateLimitResult = {
  allowed: boolean;
  retryAfter: number;
};

let rateLimiters:
  | {
      burst: Ratelimit;
      daily: Ratelimit;
    }
  | undefined;

const getRateLimiters = () => {
  if (rateLimiters) {
    return rateLimiters;
  }

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error("Upstash Redis environment variables are missing.");
  }

  const redis = new Redis({ url, token });

  rateLimiters = {
    burst: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "10 m"),
      prefix: "enquiry:burst",
      analytics: false,
    }),
    daily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, "24 h"),
      prefix: "enquiry:daily",
      analytics: false,
    }),
  };

  return rateLimiters;
};

const stripAddressDecorations = (value: string) => {
  const candidate = value.trim();

  if (candidate.startsWith("[")) {
    const closingBracket = candidate.indexOf("]");

    if (closingBracket > 0) {
      return candidate.slice(1, closingBracket);
    }
  }

  const ipv4WithPort = candidate.match(/^([^:]+):\d+$/);

  if (ipv4WithPort) {
    return ipv4WithPort[1];
  }

  return candidate.replace(/^::ffff:/i, "");
};

const getClientIdentifier = (headers: Headers) => {
  const forwardedAddress =
    headers.get("x-vercel-forwarded-for") ??
    headers.get("x-forwarded-for") ??
    headers.get("x-real-ip") ??
    "";
  const candidate = stripAddressDecorations(
    forwardedAddress.split(",")[0] ?? "",
  );
  const normalizedAddress = isIP(candidate) ? candidate.toLowerCase() : "unknown";

  return createHash("sha256").update(normalizedAddress).digest("hex");
};

const getRetryAfter = (result: { reset: number }) =>
  Math.max(1, Math.ceil((result.reset - Date.now()) / 1000));

export const checkEnquiryRateLimit = async (
  headers: Headers,
): Promise<EnquiryRateLimitResult> => {
  const identifier = getClientIdentifier(headers);
  const { burst, daily } = getRateLimiters();
  const burstResult = await burst.limit(identifier);

  if (!burstResult.success) {
    return {
      allowed: false,
      retryAfter: getRetryAfter(burstResult),
    };
  }

  const dailyResult = await daily.limit(identifier);

  if (!dailyResult.success) {
    return {
      allowed: false,
      retryAfter: getRetryAfter(dailyResult),
    };
  }

  return {
    allowed: true,
    retryAfter: 0,
  };
};
