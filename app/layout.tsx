import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { getSiteContent } from "@/lib/site-content";

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

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();

  return {
    title: content.seo_title || content.site_name,
    description: content.seo_description,
    keywords: content.seo_keywords
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean),
    applicationName: content.site_name,
    authors: [{ name: content.site_name }],
    category: "shopping",
    creator: content.site_name,
    formatDetection: {
      telephone: true,
      address: true,
      email: false,
    },
    openGraph: {
      title: content.og_title || content.site_name,
      description: content.og_description || content.seo_description,
      locale: "en_IN",
      siteName: content.site_name,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: "summary_large_image",
      title: content.twitter_title || content.site_name,
      description: content.twitter_description || content.seo_description,
    },
  };
}

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
