import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function buildMetadata({ title, description, path = "/", noIndex = false }: { title: string; description: string; path?: string; noIndex?: boolean }): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title, description, url, siteName: siteConfig.name, type: "website" },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    alternateName: "FolseTech",
    url: siteConfig.url,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      url: new URL("/about", siteConfig.url).toString()
    },
    areaServed: [
      {
        "@type": "City",
        name: "Gonzales",
        "@context": "https://schema.org"
      },
      {
        "@type": "AdministrativeArea",
        name: "Ascension Parish"
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.zip,
      addressCountry: "US"
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    serviceArea: {
      "@type": "City",
      name: `${siteConfig.location.city}, ${siteConfig.location.state}`
    },
    knowsAbout: [
      "Web Design",
      "Web Development",
      "SEO",
      "Local SEO",
      "Next.js Development",
      "Technical SEO"
    ],
    sameAs: [
      // Add social profiles when available
    ]
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString()
    }))
  };
}
