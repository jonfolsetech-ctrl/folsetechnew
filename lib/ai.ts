export type LeadRecommendationInput = { goal: string; businessType: string; website?: string };
export type LeadRecommendation = { summary: string; recommendedServices: string[] };

export interface AIProvider {
  generateLeadRecommendation(input: LeadRecommendationInput): Promise<LeadRecommendation>;
}

class DemoProvider implements AIProvider {
  async generateLeadRecommendation(input: LeadRecommendationInput): Promise<LeadRecommendation> {
    const goal = input.goal.toLowerCase();
    const services = goal.includes("rank") || goal.includes("seo")
      ? ["Technical SEO", "SEO Web Design", "Next.js Development"]
      : goal.includes("lead")
      ? ["Conversion Rate Optimization", "AI Lead Generation", "SEO Web Design"]
      : ["Website Redesign", "Conversion Rate Optimization", "Next.js Development"];
    return { summary: `For a ${input.businessType || "growing business"} focused on ${input.goal}, the first priority is a clear search and conversion foundation before adding automation.`, recommendedServices: services };
  }
}

export function getAIProvider(): AIProvider {
  // Add vendor adapters here. Keep provider keys and prompts on the server.
  return new DemoProvider();
}
