import Link from "next/link";
export function CTA({ title = "Turn your website into a stronger acquisition asset.", text = "Get a practical growth plan built around search visibility, performance, and conversion." }) {
  return <section className="cta"><div className="container"><p className="eyebrow">READY TO IMPROVE?</p><h2>{title}</h2><p>{text}</p><div className="actions"><Link className="button" href="/free-website-audit">Get Your Free Website Growth Plan</Link><Link className="button button-ghost" href="/contact">Start Your Project</Link></div></div></section>;
}
