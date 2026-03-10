import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Chaitanya Sarees | Premium Saree Shop in Tadipatri",
  description:
    "Discover wedding, festival, party wear, and daily wear sarees at Chaitanya Sarees in Tadipatri, Andhra Pradesh.",
  keywords: [
    "Chaitanya Sarees",
    "saree shop Tadipatri",
    "wedding sarees",
    "festival sarees",
    "party wear sarees",
    "daily wear sarees",
    "sarees Andhra Pradesh",
  ],
  applicationName: "Chaitanya Sarees",
  authors: [{ name: "Chaitanya Sarees" }],
  category: "shopping",
  creator: "Chaitanya Sarees",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    title: "Chaitanya Sarees",
    description:
      "Your destination for stunning sarees in Tadipatri. Shop wedding, festival, party wear, and daily wear collections.",
    locale: "en_IN",
    siteName: "Chaitanya Sarees",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Sarees",
    description:
      "Elegant sarees for weddings, festivals, parties, and everyday beauty in Tadipatri.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fff8f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#2d1d16] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
