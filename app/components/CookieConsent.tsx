"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem(
      "shivesh-cookie-consent",
    ) as ConsentChoice | null;

    if (!savedChoice) {
      setVisible(true);
    }
  }, []);

  function saveConsent(choice: ConsentChoice) {
    localStorage.setItem("shivesh-cookie-consent", choice);

    window.gtag?.("consent", "update", {
      analytics_storage: choice,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-[#c8a84e]/40 bg-[#082f24] px-4 py-4 text-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="max-w-4xl">
          <p className="text-base font-semibold text-[#e3c56d]">
            Your Privacy Matters
          </p>

          <p className="mt-1 text-sm leading-6 text-white/90">
            We use optional analytics cookies to understand website traffic and
            improve the experience of international buyers. You can accept or
            reject analytics cookies. Read our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-[#e3c56d] underline underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/cookie-policy"
              className="font-semibold text-[#e3c56d] underline underline-offset-4"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => saveConsent("denied")}
            className="rounded-md border border-white/50 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={() => saveConsent("granted")}
            className="rounded-md bg-[#c8a84e] px-5 py-2 text-sm font-semibold text-[#082f24] transition hover:bg-[#dfc36f]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}