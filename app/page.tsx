import { AboutSection } from "@/components/about-section";
import { FeaturedCollections } from "@/components/featured-collections";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreDetailsSection } from "@/components/store-details-section";
import { getCollections } from "@/app/actions/collection-actions";
import { getSiteContent } from "@/lib/site-content";

export default async function HomePage() {
  const [collections, content] = await Promise.all([
    getCollections(),
    getSiteContent(),
  ]);

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
    makesOffer: {
      "@type": "OfferCatalog",
      name: content.collections_eyebrow || "Featured Collections",
      itemListElement: collections.slice(0, 4).map((collection) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: collection.title },
      })),
    },
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader content={content} />
      <main id="main-content" className="relative overflow-hidden">
        <HeroSection content={content} />
        <AboutSection content={content} />
        <FeaturedCollections collections={collections} content={content} />
        <StoreDetailsSection content={content} />
      </main>
      <SiteFooter content={content} />
    </>
  );
}
