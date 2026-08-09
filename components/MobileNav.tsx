"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Work", "/work"],
  ["Insights", "/insights"],
  ["About", "/about"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav">
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)}>{open ? "Close" : "Menu"}</button>
    {open && <div id="mobile-menu" className="mobile-menu">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="button" href="/free-website-audit" onClick={() => setOpen(false)}>Free Website Audit</Link></div>}
  </div>;
}
