import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";

// Single industrial grotesque superfamily: display in heavy weights,
// body in regular/medium. Engineered character, not editorial serif.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moriah SPA · Hospedaje y equipos para faenas mineras del norte de Chile",
  description:
    "Operamos donde Chile produce. Hospedaje corporativo y arriendo de equipos para minería e industria pesada en Calama y la Región de Antofagasta. 18+ años, 2.400 camas, 150+ equipos.",
  metadataBase: new URL("https://moriah.cl"),
  openGraph: {
    title: "Moriah SPA · Operamos donde Chile produce",
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
      className={`${archivo.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[var(--color-bg-base)] text-[var(--color-fg-primary)] antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
