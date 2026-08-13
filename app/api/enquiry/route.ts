import { NextResponse } from "next/server";
import { Resend } from "resend";

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

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.ENQUIRY_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error("Enquiry email environment variables are missing.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as EnquiryPayload;

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
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(enquiry.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
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

      return NextResponse.json(
        { error: "Unable to send enquiry." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      { error: "Unable to process enquiry." },
      { status: 500 },
    );
  }
}