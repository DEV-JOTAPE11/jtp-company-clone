import type { JSX } from "react";

export function WhatsAppFloat(): JSX.Element {
  return (
    <>
      <a href="https://wa.me/5575981401481?text=Vim%20pelo%20site,%20tenho%20interesse%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="whatsapp-float fixed z-50 group" style={{ bottom: "1.5rem", right: "1.5rem" }} aria-label="Fale conosco no WhatsApp">
        <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(34, 197, 94, 0.3)" }}></span>
        <span className="absolute rounded-full blur-md group-hover:bg-green-500/40 transition-all duration-300" style={{ inset: "-0.25rem", background: "rgba(34, 197, 94, 0.2)" }}></span>
        <img src="/assets/whatsapp-3d-CHW-Y5IC.webp" alt="WhatsApp" className="relative w-16 h-16 object-contain drop-shadow-whatsapp" />
      </a>
    </>
  );
}
