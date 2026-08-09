import { buildMetadata } from "@/lib/seo";
import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About FolseTech | Web Design & SEO in Gonzales, LA",
  description: "FolseTech, founded by Jon Folse, builds high-performance websites and local SEO strategies designed to generate leads for professional service businesses in Gonzales and Ascension Parish, Louisiana.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container content">
          <p className="eyebrow">ABOUT FOLSETECH</p>
          <h1>Web Design & SEO Built to Generate Leads for Local Businesses</h1>
          <p className="lead">
            FolseTech combines professional web design, technical SEO, and local search optimization to help professional service businesses in Gonzales, Ascension Parish and South Louisiana get found on Google and generate qualified leads.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <h2>Our Approach</h2>
          <p>
            Most underperforming websites aren't missing one magic feature. They have disconnected architecture, content, performance, search optimization, and measurement.
          </p>
          <p>
            FolseTech builds integrated systems where design, search visibility, development, and conversion work together. We design around your customers' search behavior, build for performance and crawlability, optimize for conversions, and measure what actually matters to your business.
          </p>

          <h2>Founded by Jon Folse</h2>
          <p>
            FolseTech was founded by <strong>Jon Folse</strong>, an experienced web developer and SEO strategist based in Gonzales, Louisiana. Jon brings years of expertise in:
          </p>
          <ul>
            <li>Modern web development using Next.js and React</li>
            <li>Technical SEO and local search optimization</li>
            <li>Building high-performance websites for professional services</li>
            <li>Creating systems that connect search visibility to business results</li>
            <li>Local business growth in South Louisiana</li>
          </ul>
          <p>
            Jon works directly with professional service businesses—law firms, accounting practices, consultants, insurance agencies, real estate professionals, and other service-based companies—to build digital foundations that generate consistent leads and improve their online authority.
          </p>

          <h2>Why We're Different</h2>
          <p>
            FolseTech doesn't separate web design from SEO or development from strategy. Everything is built around one goal: <strong>turning Google searches into customers for your business</strong>.
          </p>
          <ul>
            <li><strong>Local Focus:</strong> We specialize in serving Gonzales, Ascension Parish, and South Louisiana businesses</li>
            <li><strong>Technical Excellence:</strong> Modern development practices produce fast, secure, maintainable websites</li>
            <li><strong>SEO-First Architecture:</strong> Search visibility is built into the site structure, not added as an afterthought</li>
            <li><strong>Conversion Design:</strong> Every page is designed around clear visitor actions and business objectives</li>
            <li><strong>Measurable Results:</strong> We track rankings, traffic, leads, and conversions</li>
          </ul>

          <h2>Our Core Philosophy</h2>
          <p>
            Your website should be engineered as an acquisition system, not decorated as a brochure. Whether someone finds you through Google Search, Google Maps, or direct navigation, your site should make it easy for them to understand what you do, trust your expertise, and contact you.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
