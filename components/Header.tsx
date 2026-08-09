import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return <header className="site-header"><div className="container nav"><Link className="brand" href="/">Folse<span>Tech</span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/work">Work</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link></nav><Link className="button button-small desktop-cta" href="/free-website-audit">Free Website Audit</Link><MobileNav /></div></header>;
}
