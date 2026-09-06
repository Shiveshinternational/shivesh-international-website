import type { NextConfig } from "next";

const contentSecurityPolicyReportOnly = [
  "default-src 'self';",
  "base-uri 'self';",
  "object-src 'none';",
  "frame-ancestors 'none';",
  "form-action 'self';",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;",
  "style-src 'self' 'unsafe-inline';",
  "img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com;",
  "font-src 'self';",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com;",
  "frame-src 'none';",
  "manifest-src 'self';",
  "upgrade-insecure-requests;",
].join(" ");

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicyReportOnly,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
