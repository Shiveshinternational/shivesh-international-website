"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type EnquiryFormData = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  whatsapp: string;
  product: string;
  packaging: string;
  quantity: string;
  enquiryType: string;
  message: string;
  companyWebsite: string;
};

const initialFormData: EnquiryFormData = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  whatsapp: "",
  product: "",
  packaging: "",
  quantity: "",
  enquiryType: "",
  message: "",
  companyWebsite: "",
};

const inputClassName =
  "w-full border border-[#173b2a]/15 bg-white/65 px-5 py-4 text-[#173b2a] outline-none transition-all duration-300 placeholder:text-[#4c5f54]/45 focus:border-[#C9A962] focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,169,98,0.10)]";

export default function ContactEnquiryForm() {
  const [formData, setFormData] =
    useState<EnquiryFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry");
      }

         

      setSubmitStatus("success");

      const analyticsWindow = window as Window & {
  gtag?: (...args: unknown[]) => void;
};

if (typeof analyticsWindow.gtag === "function") {
  analyticsWindow.gtag("event", "generate_lead", {
    form_name: "business_enquiry_form",
    lead_source: "website_contact_form",
    product_category: formData.product || "not_selected",
    enquiry_type: formData.enquiryType || "not_selected",
    destination_market: formData.country || "not_provided",
    debug_mode: true,
  });

} else {
  console.warn("GA4 gtag is not available.");
}

      setFormData(initialFormData);
    
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] border border-[#C9A962]/35 bg-[#f5f0e6] p-6 shadow-[0_30px_85px_rgba(0,0,0,0.13)] sm:p-9 lg:p-11"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.companyWebsite}
          onChange={handleChange}
        />
      </div>

      <div className="mb-9">
        <p className="text-[10px] font-bold uppercase tracking-[0.36em] text-[#9f7f36]">
          Business Enquiry Form
        </p>

        <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
          Tell Us about Your Requirement
        </h3>

        <p className="mt-5 max-w-3xl leading-8 text-[#4c5f54]">
          Complete information helps our team understand your enquiry and
          respond with more relevant product, packing and commercial guidance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Full Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Company Name
          </label>

          <input
            id="company"
            name="company"
            type="text"
            maxLength={150}
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company or brand"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Country *
          </label>

          <input
            id="country"
            name="country"
            type="text"
            required
            maxLength={100}
            value={formData.country}
            onChange={handleChange}
            placeholder="Destination country"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Business Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={50}
            value={formData.phone}
            onChange={handleChange}
            placeholder="Include country code"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="whatsapp"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            WhatsApp Number
          </label>

          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            maxLength={50}
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Include country code"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="enquiryType"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Enquiry Type *
          </label>

          <select
            id="enquiryType"
            name="enquiryType"
            required
            value={formData.enquiryType}
            onChange={handleChange}
            className={inputClassName}
          >
            <option value="">Select enquiry type</option>
            <option value="Bulk Supply">Bulk Supply</option>
            <option value="Private Label">Private Label</option>
            <option value="Distributor Enquiry">
              Distributor Enquiry
            </option>
            <option value="Retail Packaging">Retail Packaging</option>
            <option value="Sample Request">Sample Request</option>
            <option value="Technical Documents">
              Technical Documents
            </option>
            <option value="General Business Enquiry">
              General Business Enquiry
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="product"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Product Interested In *
          </label>

          <select
            id="product"
            name="product"
            required
            value={formData.product}
            onChange={handleChange}
            className={inputClassName}
          >
            <option value="">Select product category</option>
            <option value="Natural Henna Powder">
              Natural Henna Powder
            </option>
            <option value="Natural Indigo Powder">
              Natural Indigo Powder
            </option>
            <option value="Natural Henna Hair Colors">
              Natural Henna Hair Colors
            </option>
            <option value="Henna-Based Hair Colors">
              Henna-Based Hair Colors
            </option>
            <option value="Ayurvedic Indian Herbs">
              Ayurvedic Indian Herbs
            </option>
            <option value="Indian Spices">Indian Spices</option>
            <option value="Multiple Product Categories">
              Multiple Product Categories
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="packaging"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Packaging Requirement
          </label>

          <input
            id="packaging"
            name="packaging"
            type="text"
            maxLength={200}
            value={formData.packaging}
            onChange={handleChange}
            placeholder="Example: 100 g metallic pouch"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
          >
            Expected Quantity
          </label>

          <input
            id="quantity"
            name="quantity"
            type="text"
            maxLength={100}
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Example: 5,000 units or 500 kg"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#173b2a]"
        >
          Complete Requirement *
        </label>

        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share product specifications, number of variants, branding needs, target market, documentation requirements and expected order schedule."
          className={`${inputClassName} resize-y`}
        />
      </div>

      <div className="mt-7">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}
          {!isSubmitting && <span className="text-lg">→</span>}
        </button>
      </div>

      {submitStatus === "success" && (
        <p
          role="status"
          className="mt-5 border-l-2 border-[#C9A962] bg-[#ede5d7] px-5 py-4 leading-7 text-[#173b2a]"
        >
          Thank you. Your enquiry has been submitted successfully. Our export
          team will contact you shortly.
        </p>
      )}

      {submitStatus === "error" && (
        <p
          role="alert"
          className="mt-5 border-l-2 border-red-700 bg-red-50 px-5 py-4 leading-7 text-red-800"
        >
          We could not submit your enquiry. Please try again or email us at
          export@shiveshinternational.com.
        </p>
      )}

      <p className="mt-5 text-sm leading-7 text-[#4c5f54]/70">
        Your information will be sent securely to our export team and used only
        to respond to your business enquiry.
      </p>
    </form>
  );
}
