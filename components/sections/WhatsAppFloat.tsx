"use client";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/56995412163?text=Hola%20Moriah%2C%20necesito%20cotizar%20un%20servicio."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-copper)] text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-copper-hover)] md:bottom-8 md:right-8"
      style={{ animation: "pulse-slow 2.5s ease-in-out infinite" }}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
