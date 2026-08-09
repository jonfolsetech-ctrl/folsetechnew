import { buildMetadata } from "@/lib/seo";
import { CTA } from "@/components/CTA";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Web Design Geismar LA | Professional Web Design & Local SEO",
  description: "FolseTech provides professional web design, development and local SEO services for businesses in Geismar, Louisiana and Ascension Parish. Build a website designed to rank, convert and generate leads.",
  path: "/web-design-geismar-la",
});

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container content">
          <p className="eyebrow">WEB DESIGN IN GEISMAR, LA</p>
          <h1>Web Design in Geismar Built to Generate Leads</h1>
          <p className="lead">
            FolseTech provides professional web design, development and local SEO services for businesses in Geismar, Louisiana and throughout Ascension Parish.
          </p>
          <p className="lead">
            We build fast, modern websites optimized for Google search visibility, local ranking, and lead conversion.
          </p>
          <div className="actions">
            <Link className="button" href="/free-website-audit">
              Get Your Free Website Growth Plan
            </Link>
            <Link className="button button-ghost" href="/contact">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <h2>Professional Web Design for Geismar Businesses</h2>
          <p>
            A professional website establishes credibility and helps prospective customers find your business on Google.
          </p>
          <p>
            Our web design services include responsive design, fast performance, mobile optimization, conversion-focused UX, and SEO-first architecture built to help your Geismar business get found and generate qualified leads.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container content">
          <h2>Local SEO for Geismar & Ascension Parish</h2>
          <p>
            Local SEO helps your business appear when people in Geismar, Ascension Parish, and nearby areas search for services you provide on Google and Google Maps.
          </p>
          <p>
            We optimize your Google Business Profile, build local citations, improve your website's local search visibility, and help you rank higher for searches in your area.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <h2>Why Choose FolseTech for Your Geismar Website</h2>
          <ul>
            <li><strong>Local Focus:</strong> We specialize in serving Geismar and Ascension Parish businesses</li>
            <li><strong>Results-Oriented:</strong> We measure rankings, traffic, and leads</li>
            <li><strong>Modern Development:</strong> Built with Next.js for speed and performance</li>
            <li><strong>SEO-First:</strong> Search visibility is built into the architecture</li>
            <li><strong>Transparent:</strong> You understand what we're doing and why</li>
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
