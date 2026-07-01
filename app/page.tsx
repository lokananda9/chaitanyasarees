import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreDetailsSection } from "@/components/store-details-section";
import { getSiteContent } from "@/lib/site-content";

export default async function HomePage() {
  const content = await getSiteContent();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: content.site_name,
    description: content.schema_description,
    telephone: content.contact_phone_link,
    areaServed: content.schema_area_served
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: content.schema_street_address,
      addressLocality: content.schema_address_locality,
      addressRegion: content.schema_address_region,
      postalCode: content.schema_postal_code,
      addressCountry: content.schema_address_country,
    },
  };
  
  // Safely serialize structured data — escape sequences that could break
  // out of the <script> tag (prevents XSS if content ever becomes dynamic)
  const safeJsonLd = JSON.stringify(structuredData)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <SiteHeader content={content} />
      <main id="main-content" className="relative overflow-hidden">
        <HeroSection content={content} />
        <StoreDetailsSection content={content} />
      </main>
      <SiteFooter content={content} />
    </>
  );
}
