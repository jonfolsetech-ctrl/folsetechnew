export type AnalyticsEvent =
  | "lead_form_started"
  | "lead_form_submitted"
  | "audit_started"
  | "audit_completed"
  | "ai_assistant_started"
  | "ai_lead_qualified"
  | "consultation_cta_clicked";

export function trackEvent(name: AnalyticsEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...params });
}
