"use client";
import { FormEvent, useState } from "react";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/lead", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
    setState(res.ok ? "success" : "error");
  }
  if (state === "success") return <div className="success" role="status"><h2>Thanks — your request is captured.</h2><p>This starter stores no production lead data yet. Connect a database or CRM before launch.</p></div>;
  return <form className="form-card" onSubmit={submit}><div className="field-grid"><label>Name<input name="name" required minLength={2} autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label></div><div className="field-grid"><label>Company<input name="company" autoComplete="organization" /></label><label>Current website<input name="website" inputMode="url" placeholder="https://" /></label></div><label>Main goal<select name="primaryGoal" required defaultValue=""><option value="" disabled>Select one</option><option>Improve Google rankings</option><option>Generate more leads</option><option>Redesign the website</option><option>Improve performance</option><option>Increase online sales</option></select></label>{!compact && <><label>Biggest website challenge<textarea name="challenge" rows={4} /></label><div className="field-grid"><label>Budget range<select name="budgetRange" defaultValue=""><option value="">Not sure yet</option><option>Under $10k</option><option>$10k-$25k</option><option>$25k+</option></select></label><label>Timeline<select name="timeline" defaultValue=""><option value="">Flexible</option><option>ASAP</option><option>1-2 months</option><option>3+ months</option></select></label></div></>}<input type="hidden" name="source" value={compact ? "audit" : "contact"} /><button className="button" disabled={state === "sending"}>{state === "sending" ? "Submitting…" : "Get My Growth Plan"}</button>{state === "error" && <p className="error" role="alert">Please review the form and try again.</p>}</form>;
}
