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
};

const inputClassName =
  "w-full border border-[#173b2a]/15 bg-white/65 px-5 py-4 text-[#173b2a] outline-none transition-all duration-300 placeholder:text-[#4c5f54]/45 focus:border-[#C9A962] focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,169,98,0.10)]";

export default function ContactEnquiryForm() {
  const [formData, setFormData] =
    useState<EnquiryFormData>(initialFormData);

  const [isSubmitted, setIsSubmitted] = useState(false);

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

    setIsSubmitted(false);
  };

  const createMessage = () => {
    return [
      "Hello Shivesh International,",
      "",
      "I would like to submit a business enquiry.",
      "",
      `Name: ${formData.name}`,
      `Company: ${formData.company || "Not provided"}`,
      `Country: ${formData.country}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `WhatsApp: ${formData.whatsapp || "Not provided"}`,
      `Enquiry Type: ${formData.enquiryType}`,
      `Product Interested In: ${formData.product}`,
      `Packaging Requirement: ${
        formData.packaging || "Not specified"
      }`,
      `Expected Quantity: ${formData.quantity || "Not specified"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");
  };

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = encodeURIComponent(createMessage());

    window.open(
      `https://wa.me/919999774950?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );

    setIsSubmitted(true);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      `Business Enquiry from ${formData.name || "Website Visitor"}`,
    );

    const body = encodeURIComponent(createMessage());

    window.location.href =
      `mailto:shiveshinternational@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleWhatsAppSubmit}
      className="rounded-[30px] border border-[#C9A962]/35 bg-[#f5f0e6] p-6 shadow-[0_30px_85px_rgba(0,0,0,0.13)] sm:p-9 lg:p-11"
    >
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
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share product specifications, number of variants, branding needs, target market, documentation requirements and expected order schedule."
          className={`${inputClassName} resize-y`}
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-3 border border-[#C9A962] bg-[#C9A962] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E4C878] hover:shadow-[0_18px_45px_rgba(201,169,98,0.28)]"
        >
          Send through WhatsApp
          <span className="text-lg">→</span>
        </button>

        <button
          type="button"
          onClick={handleEmailClick}
          className="inline-flex flex-1 items-center justify-center gap-3 border border-[#173b2a]/25 bg-transparent px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#173b2a] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962] hover:bg-[#173b2a] hover:text-[#F5F0E6]"
        >
          Send through Email
          <span className="text-lg">→</span>
        </button>
      </div>

      {isSubmitted && (
        <p
          role="status"
          className="mt-5 border-l-2 border-[#C9A962] bg-[#ede5d7] px-5 py-4 leading-7 text-[#4c5f54]"
        >
          Your enquiry has been prepared in WhatsApp. Please review the message
          and press Send to deliver it to our team.
        </p>
      )}

      <p className="mt-5 text-sm leading-7 text-[#4c5f54]/70">
        This form opens WhatsApp or your email application. Information is not
        automatically stored on the website.
      </p>
    </form>
  );
}