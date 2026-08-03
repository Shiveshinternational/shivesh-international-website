export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999774950"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105"
    >
      <span className="text-3xl">💬</span>

      <div className="hidden md:block">
        <p className="text-sm font-semibold text-white">
          WhatsApp Us
        </p>

        <p className="text-xs text-white/80">
          +91-9999774950
        </p>
      </div>
    </a>
  );
}