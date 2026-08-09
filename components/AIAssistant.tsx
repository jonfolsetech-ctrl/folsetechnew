"use client";
import { useState } from "react";

const goals = ["Improve Google rankings", "Generate more leads", "Better design", "Faster performance", "More sales", "Complete redesign", "New website"];
export function AIAssistant() {
  const [goal, setGoal] = useState(""); const [businessType, setBusinessType] = useState(""); const [result, setResult] = useState<{ summary: string; recommendedServices: string[] } | null>(null); const [loading, setLoading] = useState(false);
  async function analyze() { setLoading(true); const res = await fetch("/api/ai", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ goal, businessType }) }); setResult(await res.json()); setLoading(false); }
  return <div className="assistant"><p className="eyebrow">AI WEBSITE ASSESSMENT</p><h2>What would you most like your website to improve?</h2><div className="chips">{goals.map(g => <button key={g} className={goal === g ? "chip active" : "chip"} onClick={() => setGoal(g)}>{g}</button>)}</div><label>What type of business are you growing?<input value={businessType} onChange={e => setBusinessType(e.target.value)} placeholder="SaaS, law firm, home services…" /></label><button className="button" disabled={!goal || loading} onClick={analyze}>{loading ? "Preparing…" : "Get Recommendation"}</button>{result && <div className="recommendation"><h3>Recommended starting point</h3><p>{result.summary}</p><p><strong>Relevant services:</strong> {result.recommendedServices.join(", ")}</p><p className="muted">Demo recommendation engine. Connect a production AI provider only after server-side security, rate limiting, privacy, and monitoring are configured.</p></div>}</div>;
}
