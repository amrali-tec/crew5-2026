///Users/editing2/crew5-website/app/data/blog.ts
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
};

export const posts = [
  {
    slug: "good-ux-converts",
    title: "Why Good UX Converts More Than Ads",
    description: "User experience can drive more sales than traditional ads ever will.",
    content: `
Most brands don’t fail because of bad products. They fail because nobody understands what they actually offer.

Good UX removes friction, builds trust, and guides your visitors to action without pushing them.
    `,
    category: "Design & UX",
    date: "2025-12-10",
  },
  {
    slug: "design-systems-big-brands",
    title: "Design Systems: How Big Brands Stay Consistent",
    description: "Why systemized design is the backbone of brand identity.",
    content: `
Design systems ensure consistency across platforms and teams.  
They save time, reduce mistakes, and give your brand a cohesive voice.
    `,
    category: "Design & UX",
    date: "2025-12-11",
  },
  {
    slug: "website-speed-business",
    title: "Why Website Speed Is a Business Decision",
    description: "Speed isn’t just tech, it’s revenue.",
    content: `
Every second your site lags costs you money. Fast websites = better conversion, happier users, higher SEO ranking.
    `,
    category: "Web & Tech",
    date: "2025-12-12",
  },
  {
    slug: "custom-website-need",
    title: "When You Actually Need a Custom Website",
    description: "Not every business needs a custom build. Here's when it does.",
    content: `
Custom websites make sense when your business has unique processes or branding requirements.  
Otherwise, pre-built systems might save time and money.
    `,
    category: "Web & Tech",
    date: "2025-12-13",
  },
  {
    slug: "branding-not-logo",
    title: "Branding Is Not a Logo. Here’s Why",
    description: "Branding is your voice, your promise, and your story.",
    content: `
A logo is just a visual mark. Branding is everything around it: voice, messaging, design, and the experience people have with your company.
    `,
    category: "Branding & Marketing",
    date: "2025-12-14",
  },
  {
    slug: "content-that-sells",
    title: "Content That Sells Without Feeling Like Ads",
    description: "How to craft content that converts without annoying your audience.",
    content: `
Great content educates, entertains, and nudges people toward your services naturally.  
It builds trust first, then sales follow.
    `,
    category: "Branding & Marketing",
    date: "2025-12-15",
  },
];
