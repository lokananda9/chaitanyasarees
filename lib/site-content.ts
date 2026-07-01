export const SITE_CONTENT_DEFAULTS = {
  brand_mark: "CS",
  site_name: "Chaitanya Sarees",
  site_tagline: "Premium saree house",
  site_location_short: "Tadipatri",
  header_nav_visit_label: "Visit",
  header_nav_contact_label: "Contact",
  header_hours_badge: "9 AM - 9 PM",
  header_call_label: "Call us",
  hero_badge: "Premium Saree | Tadipatri",
  hero_title_line1: "Chaitanya",
  hero_title_line2: "Sarees",
  hero_description:
    "Beautiful sarees for weddings, festivals, parties, and everyday elegance.",
  hero_primary_cta: "Visit Store",
  hero_secondary_cta: "WhatsApp Us",
  hero_stat_2_label: "Occasions",
  hero_stat_2_value: "Wedding to Daily",
  hero_stat_3_label: "Location",
  hero_stat_3_value: "Tadipatri",
  hero_stat_4_label: "Hours",
  hero_stat_4_value: "9 AM - 9 PM",
  hero_card_eyebrow: "Chaitanya Sarees",
  hero_card_title: "Draped in tradition, styled for today.",
  hero_visit_label: "Visit Us",
  hero_visit_text: "Chaitanya Sarees, Tadipatri",
  visit_eyebrow: "Visit and Contact",
  visit_title: "Find us, call us, or simply walk in.",
  visit_description:
    "We're conveniently located in Tadipatri. Get directions, call the store, or drop us a message on WhatsApp before you visit.",
  contact_eyebrow: "Contact Information",
  contact_phone_display: "9908220032",
  contact_phone_link: "+919908220032",
  contact_description:
    "Reach us directly for collection enquiries, visit planning, or guidance before you arrive.",
  contact_call_label: "Call",
  contact_whatsapp_label: "WhatsApp",
  contact_whatsapp_url:
    "https://wa.me/919908220032?text=Hi%20Chaitanya%20Sarees%2C%20I%20would%20like%20to%20know%20more%20about%20your%20collections.",
  map_embed_url:
    "https://www.google.com/maps?q=Chaitanya+Sarees,+Tadipatri,+Andhra+Pradesh&output=embed",
  location_badge: "Business Location",
  location_name: "Chaitanya Sarees",
  location_address:
    "flat no: 101, Gokulam Appartment,Sanjeeva Nagar,Tadipatri, Andhra Pradesh 515411",
  location_description:
    "Our store is a welcoming destination for occasion wear, festive shopping, and daily drapes.",
  store_hours_display: "9:00 AM - 9:00 PM",
  hours_eyebrow: "Opening Hours",
  hours_description:
    "Open every day. Walk in for a relaxed, personal saree browsing experience.",
  directions_label: "Get Directions",
  directions_url:
    "https://www.google.com/maps/search/?api=1&query=Chaitanya+Sarees,+Tadipatri,+Andhra+Pradesh",
  footer_message:
    "We'd love to welcome you - come visit us and explore our beautiful saree collection",
  footer_rights_text: "All rights reserved.",
  seo_title: "Chaitanya Sarees | Premium Saree Shop in Tadipatri",
  seo_description:
    "Discover wedding, festival, party wear, and daily wear sarees at Chaitanya Sarees in Tadipatri, Andhra Pradesh.",
  seo_keywords:
    "Chaitanya Sarees, saree shop Tadipatri, wedding sarees, festival sarees, party wear sarees, daily wear sarees, sarees Andhra Pradesh",
  og_title: "Chaitanya Sarees",
  og_description:
    "Your destination for stunning sarees in Tadipatri. Shop wedding, festival, party wear, and daily wear collections.",
  twitter_title: "Chaitanya Sarees",
  twitter_description:
    "Elegant sarees for weddings, festivals, parties, and everyday beauty in Tadipatri.",
  schema_description:
    "Your destination for stunning sarees! We bring you a wide variety of trendy, traditional, and premium sarees at great prices.",
  schema_street_address: "Gokulam Appartment, Flat No: 101",
  schema_address_locality: "Tadipatri",
  schema_address_region: "Andhra Pradesh",
  schema_postal_code: "515411",
  schema_address_country: "IN",
  schema_area_served: "Tadipatri, Andhra Pradesh",
} as const;

export type SiteContentKey = keyof typeof SITE_CONTENT_DEFAULTS;
export type SiteContent = Record<SiteContentKey, string>;

export async function getSiteContent(): Promise<SiteContent> {
  return { ...SITE_CONTENT_DEFAULTS };
}
