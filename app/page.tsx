import { AboutSection } from "@/components/about-section";
import { FeaturedCollections } from "@/components/featured-collections";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreDetailsSection } from "@/components/store-details-section";
import { getCollections } from "@/app/actions/collection-actions";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Chaitanya Sarees",
  description:
    "Your destination for stunning sarees! We bring you a wide variety of trendy, traditional, and premium sarees at great prices.",
  telephone: "+91-99082-20032",
  areaServed: ["Tadipatri", "Andhra Pradesh"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gokulam Appartment, Flat No: 101",
    addressLocality: "Tadipatri",
    addressRegion: "Andhra Pradesh",
    postalCode: "515411",
    addressCountry: "IN",
  },
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Featured Saree Collections",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Wedding Sarees" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Festival Sarees" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Party Wear Sarees" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Daily Wear Sarees" },
      },
    ],
  },
};

export default async function HomePage() {
  const collections = await getCollections();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main id="main-content" className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <FeaturedCollections collections={collections} />
        <StoreDetailsSection />
      </main>
      <SiteFooter />
    </>
  );
}
