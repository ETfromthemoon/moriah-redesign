"use client";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/56995412163?text=Hola%20Moriah%2C%20necesito%20cotizar%20un%20servicio."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(14,26,31,0.25)] transition-transform duration-300 hover:scale-110 hover:bg-[#1FB955] md:bottom-8 md:right-8"
      style={{ animation: "pulse-slow 2.5s ease-in-out infinite" }}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
