import type { HTMLAttributes } from "react";

import db from "@/lib/db";

export const SITE_CONTENT_DEFAULTS = {
  brand_mark: "CS",
  site_name: "Chaitanya Sarees",
  site_tagline: "Premium saree house",
  site_location_short: "Tadipatri",
  header_nav_about_label: "About",
  header_nav_collections_label: "Collections",
  header_nav_visit_label: "Visit",
  header_nav_contact_label: "Contact",
  header_hours_badge: "9 AM - 9 PM",
  header_call_label: "Call us",
  hero_badge: "Premium Saree Boutique | Tadipatri",
  hero_title_line1: "Chaitanya",
  hero_title_line2: "Sarees",
  hero_description:
    "Beautiful sarees for weddings, festivals, parties, and everyday elegance.",
  hero_primary_cta: "Explore Collections",
  hero_secondary_cta: "WhatsApp Us",
  hero_stat_1_label: "Collections",
  hero_stat_1_value: "5 Curated",
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
  about_eyebrow: "About Chaitanya Sarees",
  about_title: "A saree boutique with a premium difference.",
  about_description:
    "We bring a carefully selected range of traditional and contemporary sarees under one welcoming roof - for every occasion and every family.",
  about_focus_eyebrow: "Our Focus",
  about_focus_title: "Every occasion,\nbeautifully dressed.",
  about_focus_description:
    "From bridal grandeur to comfortable everyday drapes, our collection is curated for women who value quality, variety, and graceful styling.",
  about_card_1_title: "Curated variety",
  about_card_1_text:
    "Fresh colour stories and occasion-ready drapes that still feel timeless.",
  about_card_2_title: "Rich traditional edits",
  about_card_2_text:
    "Elegant borders and ceremonial sarees chosen for depth and presence.",
  about_card_3_title: "Personal service",
  about_card_3_text:
    "A Tadipatri boutique that offers warm guidance and easy accessibility.",
  collections_eyebrow: "Featured Collections",
  collections_title: "Signature edits for every celebration and every day.",
  collections_description:
    "Each collection is carefully crafted to help you find the perfect look for any occasion.",
  collections_card_prefix: "Collection",
  collections_empty_message: "No collections available at the moment.",
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
  collection_back_label: "Back to Collections",
  collection_default_note: "Curated Edit",
  collection_empty_title: "Gallery empty",
  collection_empty_description: "More collection photos coming soon.",
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

export const SITE_CONTENT_KEYS = Object.keys(
  SITE_CONTENT_DEFAULTS,
) as SiteContentKey[];

function isSiteContentKey(value: string): value is SiteContentKey {
  return value in SITE_CONTENT_DEFAULTS;
}

export interface SiteContentField {
  key: SiteContentKey;
  label: string;
  description?: string;
  multiline?: boolean;
  rows?: number;
  type?: "text" | "url" | "tel";
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
}

export interface SiteContentEditorSection {
  id: string;
  title: string;
  description: string;
  fields: SiteContentField[];
}

export const SITE_CONTENT_EDITOR_SECTIONS: SiteContentEditorSection[] = [
  {
    id: "identity",
    title: "Site Identity",
    description: "Core brand details, contact values, and SEO metadata.",
    fields: [
      { key: "brand_mark", label: "Brand mark", placeholder: "CS" },
      { key: "site_name", label: "Site name", placeholder: "Chaitanya Sarees" },
      {
        key: "site_tagline",
        label: "Site tagline",
        placeholder: "Premium saree house",
      },
      {
        key: "site_location_short",
        label: "Short location",
        placeholder: "Tadipatri",
      },
      {
        key: "contact_phone_display",
        label: "Phone number (display)",
        type: "tel",
        inputMode: "tel",
        placeholder: "9908220032",
      },
      {
        key: "contact_phone_link",
        label: "Phone number (tel link)",
        type: "tel",
        inputMode: "tel",
        placeholder: "+919908220032",
      },
      {
        key: "contact_whatsapp_url",
        label: "WhatsApp URL",
        type: "url",
        placeholder: "https://wa.me/...",
      },
      {
        key: "store_hours_display",
        label: "Store hours",
        placeholder: "9:00 AM - 9:00 PM",
      },
      {
        key: "seo_title",
        label: "SEO title",
        placeholder: "Brand | Primary value proposition",
      },
      {
        key: "seo_description",
        label: "SEO description",
        multiline: true,
        rows: 3,
      },
      {
        key: "seo_keywords",
        label: "SEO keywords",
        multiline: true,
        rows: 3,
        description: "Comma separated keywords for metadata.",
      },
      { key: "og_title", label: "Open Graph title" },
      {
        key: "og_description",
        label: "Open Graph description",
        multiline: true,
        rows: 3,
      },
      { key: "twitter_title", label: "Twitter title" },
      {
        key: "twitter_description",
        label: "Twitter description",
        multiline: true,
        rows: 3,
      },
      {
        key: "schema_description",
        label: "Schema description",
        multiline: true,
        rows: 3,
      },
      {
        key: "schema_street_address",
        label: "Schema street address",
      },
      {
        key: "schema_address_locality",
        label: "Schema locality",
      },
      {
        key: "schema_address_region",
        label: "Schema region",
      },
      {
        key: "schema_postal_code",
        label: "Schema postal code",
      },
      {
        key: "schema_address_country",
        label: "Schema country code",
        placeholder: "IN",
      },
      {
        key: "schema_area_served",
        label: "Schema area served",
        placeholder: "Tadipatri, Andhra Pradesh",
      },
    ],
  },
  {
    id: "header-hero",
    title: "Header and Hero",
    description: "Navigation, top CTA labels, and the main landing hero copy.",
    fields: [
      { key: "header_nav_about_label", label: "Header nav: About" },
      {
        key: "header_nav_collections_label",
        label: "Header nav: Collections",
      },
      { key: "header_nav_visit_label", label: "Header nav: Visit" },
      { key: "header_nav_contact_label", label: "Header nav: Contact" },
      { key: "header_hours_badge", label: "Header hours badge" },
      { key: "header_call_label", label: "Header call button" },
      { key: "hero_badge", label: "Hero badge" },
      { key: "hero_title_line1", label: "Hero title line 1" },
      { key: "hero_title_line2", label: "Hero title line 2" },
      {
        key: "hero_description",
        label: "Hero description",
        multiline: true,
        rows: 3,
      },
      { key: "hero_primary_cta", label: "Hero primary CTA" },
      { key: "hero_secondary_cta", label: "Hero secondary CTA" },
      { key: "hero_stat_1_label", label: "Hero stat 1 label" },
      { key: "hero_stat_1_value", label: "Hero stat 1 value" },
      { key: "hero_stat_2_label", label: "Hero stat 2 label" },
      { key: "hero_stat_2_value", label: "Hero stat 2 value" },
      { key: "hero_stat_3_label", label: "Hero stat 3 label" },
      { key: "hero_stat_3_value", label: "Hero stat 3 value" },
      { key: "hero_stat_4_label", label: "Hero stat 4 label" },
      { key: "hero_stat_4_value", label: "Hero stat 4 value" },
      { key: "hero_card_eyebrow", label: "Hero card eyebrow" },
      {
        key: "hero_card_title",
        label: "Hero card title",
        multiline: true,
        rows: 2,
      },
      { key: "hero_visit_label", label: "Hero visit label" },
      {
        key: "hero_visit_text",
        label: "Hero visit text",
        multiline: true,
        rows: 2,
      },
    ],
  },
  {
    id: "about",
    title: "About Section",
    description: "About section heading, focus card, and the three promise cards.",
    fields: [
      { key: "about_eyebrow", label: "About eyebrow" },
      { key: "about_title", label: "About title", multiline: true, rows: 2 },
      {
        key: "about_description",
        label: "About description",
        multiline: true,
        rows: 4,
      },
      { key: "about_focus_eyebrow", label: "Focus card eyebrow" },
      {
        key: "about_focus_title",
        label: "Focus card title",
        multiline: true,
        rows: 3,
      },
      {
        key: "about_focus_description",
        label: "Focus card description",
        multiline: true,
        rows: 4,
      },
      { key: "about_card_1_title", label: "About card 1 title" },
      {
        key: "about_card_1_text",
        label: "About card 1 description",
        multiline: true,
        rows: 3,
      },
      { key: "about_card_2_title", label: "About card 2 title" },
      {
        key: "about_card_2_text",
        label: "About card 2 description",
        multiline: true,
        rows: 3,
      },
      { key: "about_card_3_title", label: "About card 3 title" },
      {
        key: "about_card_3_text",
        label: "About card 3 description",
        multiline: true,
        rows: 3,
      },
    ],
  },
  {
    id: "collections",
    title: "Collections and Detail Template",
    description:
      "Homepage collections intro plus the reusable text around collection detail pages.",
    fields: [
      { key: "collections_eyebrow", label: "Collections eyebrow" },
      {
        key: "collections_title",
        label: "Collections title",
        multiline: true,
        rows: 3,
      },
      {
        key: "collections_description",
        label: "Collections description",
        multiline: true,
        rows: 4,
      },
      { key: "collections_card_prefix", label: "Collection card prefix" },
      {
        key: "collections_empty_message",
        label: "Collections empty message",
        multiline: true,
        rows: 2,
      },
      { key: "collection_back_label", label: "Collection page back label" },
      { key: "collection_default_note", label: "Collection default note" },
      { key: "collection_empty_title", label: "Collection empty title" },
      {
        key: "collection_empty_description",
        label: "Collection empty description",
        multiline: true,
        rows: 2,
      },
    ],
  },
  {
    id: "visit-footer",
    title: "Visit, Contact, and Footer",
    description: "Store details, map links, visit CTAs, and footer text.",
    fields: [
      { key: "visit_eyebrow", label: "Visit section eyebrow" },
      { key: "visit_title", label: "Visit section title", multiline: true, rows: 3 },
      {
        key: "visit_description",
        label: "Visit section description",
        multiline: true,
        rows: 4,
      },
      { key: "contact_eyebrow", label: "Contact eyebrow" },
      {
        key: "contact_description",
        label: "Contact description",
        multiline: true,
        rows: 4,
      },
      { key: "contact_call_label", label: "Contact call button" },
      { key: "contact_whatsapp_label", label: "Contact WhatsApp button" },
      { key: "map_embed_url", label: "Google Maps embed URL", type: "url" },
      { key: "location_badge", label: "Location badge" },
      { key: "location_name", label: "Location name" },
      {
        key: "location_address",
        label: "Location address",
        multiline: true,
        rows: 3,
      },
      {
        key: "location_description",
        label: "Location description",
        multiline: true,
        rows: 3,
      },
      { key: "hours_eyebrow", label: "Hours eyebrow" },
      {
        key: "hours_description",
        label: "Hours description",
        multiline: true,
        rows: 3,
      },
      { key: "directions_label", label: "Directions button" },
      { key: "directions_url", label: "Directions URL", type: "url" },
      {
        key: "footer_message",
        label: "Footer message",
        multiline: true,
        rows: 3,
      },
      { key: "footer_rights_text", label: "Footer rights text" },
    ],
  },
];

export async function getSiteContent(): Promise<SiteContent> {
  const rows = db
    .prepare("SELECT content_key, value FROM site_content")
    .all() as Array<{ content_key: string; value: string }>;

  const content: SiteContent = { ...SITE_CONTENT_DEFAULTS };

  for (const row of rows) {
    if (isSiteContentKey(row.content_key)) {
      content[row.content_key] = row.value;
    }
  }

  return content;
}
