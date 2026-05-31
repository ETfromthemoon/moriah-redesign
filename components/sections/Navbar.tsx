"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#casos", label: "Casos" },
  { href: "#metodo", label: "Método" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Moriah"
            width={140}
            height={36}
            priority
            className={cn(
              "h-9 w-auto object-contain transition-[filter] duration-500",
              scrolled ? "" : "brightness-0 invert"
            )}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-[var(--color-fg-secondary)] hover:text-[var(--color-fg-primary)]"
                  : "text-white/80 hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/56995412163"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border transition-colors",
              scrolled
                ? "border-[var(--color-border-default)] text-[var(--color-fg-secondary)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]"
                : "border-white/30 text-white/85 hover:border-white hover:text-white"
            )}
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Button asChild>
            <a href="#contacto">Solicitar cotización</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "grid h-10 w-10 place-items-center rounded-md border md:hidden",
            scrolled
              ? "border-[var(--color-border-default)] text-[var(--color-fg-primary)]"
              : "border-white/30 text-white"
          )}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-[var(--color-fg-primary)] hover:bg-[var(--color-bg-elevated)]"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-3 w-full">
              <a href="#contacto" onClick={() => setOpen(false)}>
                Solicitar cotización
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
