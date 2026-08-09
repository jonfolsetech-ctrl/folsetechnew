import Link from "next/link";
export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, i) => <span key={item.name}>{i > 0 && <b aria-hidden>›</b>}{item.href ? <Link href={item.href}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}</span>)}</nav>;
}
