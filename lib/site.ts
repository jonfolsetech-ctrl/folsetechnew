export const siteConfig = {
  name: "FolseTech",
  tagline: "Web Design & SEO Built to Generate Leads",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  description: "Professional web design, development and local SEO for businesses in Gonzales and Ascension Parish, Louisiana.",
  email: "[BUSINESS EMAIL]",
  phone: "[BUSINESS PHONE]",
  location: {
    city: "Gonzales",
    state: "Louisiana",
    zip: "70737",
    county: "Ascension Parish",
  },
  founder: {
    name: "Jon Folse",
    title: "Founder & SEO Strategist",
  },
  copyright: {
    owner: "FolseTech",
    year: new Date().getFullYear(),
  },
};
