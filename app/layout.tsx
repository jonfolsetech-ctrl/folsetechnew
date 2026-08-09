import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "FolseTech | Web Design & SEO in Gonzales, LA", template: "%s | FolseTech" },
  description: "FolseTech provides professional web design, development and local SEO for businesses in Gonzales and Ascension Parish, Louisiana. Build a website designed to rank, convert and generate leads.",
  applicationName: siteConfig.name,
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  authors: [{ name: siteConfig.copyright.owner }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "FolseTech | Web Design & SEO in Gonzales, LA",
    description: "Professional web design, development and local SEO for businesses in Gonzales and Ascension Parish, Louisiana.",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased"><JsonLd data={organizationJsonLd()} /><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
