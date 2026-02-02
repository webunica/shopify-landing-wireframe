import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Fonts optimization
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// SEO Metadata Global
export const metadata: Metadata = {
  title: {
    template: "%s | Shopify Themes Premium",
    default: "Omnisend Clone - Email & SMS Marketing Automation",
  },
  description: "Plataforma de marketing automatizado para e-commerce. Incrementa tus ventas con Email y SMS marketing integrado.",
  keywords: ["shopify themes", "email marketing", "sms marketing", "ecommerce automation", "plantillas shopify"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Shopify Premium Themes",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="antialiased bg-white text-bg-dark selection:bg-primary-green selection:text-bg-dark">
        {children}
      </body>
    </html>
  );
}
