import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moriah SPA — Hospedaje y equipos para faenas mineras del norte de Chile",
  description:
    "Operamos donde Chile produce. Hospedaje corporativo y arriendo de equipos para minería e industria pesada en Calama y la Región de Antofagasta. 18+ años, 2.400 camas, 150+ equipos.",
  metadataBase: new URL("https://moriah.cl"),
  openGraph: {
    title: "Moriah SPA — Operamos donde Chile produce",
    description:
      "Hospedaje corporativo y arriendo de equipos para faenas mineras en el norte de Chile.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[var(--color-bg-base)] text-[var(--color-fg-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
