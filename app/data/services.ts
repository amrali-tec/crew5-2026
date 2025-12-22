///Users/editing2/crew5-website/app/data/services.ts
export type Service = {
  slug: string
  title: string
  description: string
  category: string
  icon: string // iconify icon name
}


export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Design & Development",
    description:
      "Modern, fast, and scalable websites built to convert visitors into clients.",
    category: "Web & Digital Experience",
    icon: "mdi:web",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design that delivers smooth, intuitive digital experiences.",
    category: "Web & Digital Experience",
    icon: "mdi:vector-square",
  },
  {
    slug: "branding-identity",
    title: "Branding & Visual Identity",
    description:
      "Strategic branding systems that create clarity, consistency, and impact.",
    category: "Branding & Identity",
    icon: "mdi:palette-outline",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Content-driven social strategies that grow engagement and brand awareness.",
    category: "Social Media & Content",
    icon: "mdi:account-group-outline",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    description:
      "Scroll-stopping visuals and copy designed to tell your brand story.",
    category: "Social Media & Content",
    icon: "mdi:pen-tool",
  },
  {
    slug: "visual-production",
    title: "Visual Production",
    description:
      "High-quality video and photo production that elevates your brand.",
    category: "Media Production",
    icon: "mdi:video-outline",
  },
  {
    slug: "audio-effects",
    title: "Audio Effects & Sound Design",
    description:
      "Professional sound design that adds depth and emotion to your content.",
    category: "Media Production",
    icon: "mdi:waveform",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Strategy",
    description:
      "Data-driven marketing strategies focused on real business growth.",
    category: "Marketing & Growth",
    icon: "mdi:chart-line",
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    description:
      "Performance-focused ad campaigns built to maximize ROI.",
    category: "Marketing & Growth",
    icon: "mdi:bullhorn-outline",
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    description:
      "Comprehensive brand strategies that define your voice, vision, and positioning.",
    category: "Branding & Identity",
    icon: "mdi:compass-outline",
  },
  {
    slug: "seo-optimization",
    title: "SEO & Analytics",
    description:
      "Optimized search engine strategies to drive organic growth and measurable results.",
    category: "Web & Digital Experience",
    icon: "mdi:magnify",
  },
  {
    slug: "campaign-management",
    title: "Campaign Management",
    description:
      "End-to-end management of marketing campaigns across digital channels.",
    category: "Marketing & Growth",
    icon: "mdi:layers-triple-outline",
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    description:
      "Connect your brand with the right influencers to amplify reach and trust.",
    category: "Social Media & Content",
    icon: "mdi:star-outline",
  },
  {
    slug: "creative-consulting",
    title: "Creative Consulting",
    description:
      "Expert guidance to craft impactful campaigns and innovative content strategies.",
    category: "Consulting & Strategy",
    icon: "mdi:lightbulb-outline",
  },
];
