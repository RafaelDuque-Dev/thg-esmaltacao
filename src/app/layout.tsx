import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { company } from "@/data/company";
import "./globals.css";

const manrope = localFont({ src: [
  { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2", weight: "400", style: "normal" },
  { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-500-normal.woff2", weight: "500", style: "normal" },
  { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-600-normal.woff2", weight: "600", style: "normal" },
  { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-800-normal.woff2", weight: "800", style: "normal" }
], variable: "--font-manrope", display: "swap" });
const mono = localFont({ src: "../../node_modules/@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2", variable: "--font-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: "THG Esmaltação | Pintura em Resina para Peças Metálicas", template: "%s | THG Esmaltação" },
  description: company.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: company.name, title: "THG Esmaltação — Identidade em cada detalhe.", description: company.description, url: "/", images: [{ url: "/images/compartilhamento.jpg", width: 1200, height: 630, alt: "THG Esmaltação — Detalhes que transformam metal em identidade" }] },
  twitter: { card: "summary_large_image", title: "THG Esmaltação — Identidade em cada detalhe.", description: company.description, images: ["/images/compartilhamento.jpg"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#151514" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${manrope.variable} ${mono.variable}`}><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a>{children}</body></html>;
}
