import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  company: z.string().max(120).optional().default(""),
  website: z.string().max(300).optional().default(""),
  businessType: z.string().max(100).optional().default(""),
  primaryGoal: z.string().min(2).max(120),
  challenge: z.string().max(500).optional().default(""),
  budgetRange: z.string().max(80).optional().default(""),
  timeline: z.string().max(80).optional().default(""),
  source: z.string().max(80).default("website")
});

export type Lead = z.infer<typeof leadSchema>;

export function scoreLead(lead: Lead) {
  let score = 0;
  if (["$10k-$25k", "$25k+"].includes(lead.budgetRange)) score += 30;
  if (["ASAP", "1-2 months"].includes(lead.timeline)) score += 25;
  if (lead.website) score += 15;
  if (lead.challenge.length > 40) score += 15;
  if (lead.primaryGoal) score += 15;
  return Math.min(score, 100);
}
