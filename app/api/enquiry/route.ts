import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkEnquiryRateLimit } from "@/app/lib/enquiryRateLimit";

type EnquiryPayload = {
  name?: unknown;
  company?: unknown;
  country?: unknown;
  email?: unknown;
  phone?: unknown;
  whatsapp?: unknown;
  product?: unknown;
  packaging?: unknown;
  quantity?: unknown;
  enquiryType?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

const getText = (value: unknown, maximumLength: number) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maximumLength);
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isAllowedOrigin = (request: Request) => {
  const origin = request.headers.get("origin");

  if (process.env.NODE_ENV !== "production") {
    if (!origin) {
      return true;
    }

    try {
      const url = new URL(origin);

      return (
        (url.hostname === "localhost" || url.hostname === "127.0.0.1") &&
        (url.protocol === "http:" || url.protocol === "https:")
      );
    } catch {
      return false;
    }
  }

  if (!origin) {
    return false;
  }

  const allowedOrigins = new Set([
    "https://shiveshinternational.com",
    "https://www.shiveshinternational.com",
  ]);
  const deploymentHostname = process.env.VERCEL_URL;

  if (deploymentHostname) {
    allowedOrigins.add(`https://${deploymentHostname}`);
  }

  return allowedOrigins.has(origin);
};

const jsonResponse = (body: object, init?: ResponseInit) => {
  const response = NextResponse.json(body, init);
  response.headers.set("Cache-Control", "no-store");
  return response;
};

const rateLimitResponse = (retryAfter: number) =>
  jsonResponse(
    { error: "Too many enquiries. Please try again later." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfter),
      },
    },
  );

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return jsonResponse(
        { error: "Unable to process enquiry." },
        { status: 403 },
      );
    }

    const body = (await request.json()) as EnquiryPayload;

    if (getText(body.companyWebsite, 200)) {
      return jsonResponse({ success: true }, { status: 200 });
    }

    const enquiry = {
      name: getText(body.name, 100),
      company: getText(body.company, 150),
      country: getText(body.country, 100),
      email: getText(body.email, 200),
      phone: getText(body.phone, 50),
      whatsapp: getText(body.whatsapp, 50),
      product: getText(body.product, 150),
      packaging: getText(body.packaging, 200),
      quantity: getText(body.quantity, 100),
      enquiryType: getText(body.enquiryType, 150),
      message: getText(body.message, 5000),
    };

    if (
      !enquiry.name ||
      !enquiry.country ||
      !enquiry.email ||
      !enquiry.enquiryType ||
      !enquiry.product ||
      !enquiry.message
    ) {
      return jsonResponse(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(enquiry.email)) {
      return jsonResponse(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    let rateLimit;

    try {
      rateLimit = await checkEnquiryRateLimit(request.headers);
    } catch {
      console.error("Enquiry rate-limit service is unavailable.");

      return jsonResponse(
        { error: "Unable to process enquiry." },
        { status: 503 },
      );
    }

    if (!rateLimit.allowed) {
      return rateLimitResponse(rateLimit.retryAfter);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.ENQUIRY_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error("Enquiry email environment variables are missing.");

      return jsonResponse(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const emailText = [
      "NEW INTERNATIONAL BUYER ENQUIRY",
      "",
      `Name: ${enquiry.name}`,
      `Company: ${enquiry.company || "Not provided"}`,
      `Country: ${enquiry.country}`,
      `Business Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone || "Not provided"}`,
      `WhatsApp: ${enquiry.whatsapp || "Not provided"}`,
      `Enquiry Type: ${enquiry.enquiryType}`,
      `Product Interested In: ${enquiry.product}`,
      `Packaging Requirement: ${enquiry.packaging || "Not specified"}`,
      `Expected Quantity: ${enquiry.quantity || "Not specified"}`,
      "",
      "COMPLETE REQUIREMENT",
      enquiry.message,
      "",
      "Submitted from: https://shiveshinternational.com/contact",
    ].join("\n");

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Shivesh International Website <${fromEmail}>`,
      to: ["export@shiveshinternational.com"],
      replyTo: enquiry.email,
      subject: `Buyer Enquiry: ${enquiry.product} — ${enquiry.name}`,
      text: emailText,
    });

    if (error) {
      console.error("Resend enquiry error:", error);

      return jsonResponse(
        { error: "Unable to send enquiry." },
        { status: 502 },
      );
    }

    return jsonResponse(
      { success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return jsonResponse(
      { error: "Unable to process enquiry." },
      { status: 500 },
    );
  }
}
