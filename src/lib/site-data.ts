export type Category = "research" | "consulting" | "venture" | "leadership";

export interface Role {
  slug: string;
  title: string;
  org: string;
  location: string;
  period: string;
  category: Category;
  summary: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
}

export const categoryLabels: Record<Category, string> = {
  research: "Research",
  consulting: "Consulting",
  venture: "Ventures",
  leadership: "Leadership",
};

export const roles: Role[] = [
  {
    slug: "energy-for-growth-hub",
    title: "Mission 300 Project Intern",
    org: "The Energy for Growth Hub",
    location: "Remote",
    period: "May 2026 — Present",
    category: "research",
    summary:
      "Evaluating how the World Bank's Mission 300 initiative is tracking toward electricity access for 300 million people in Sub-Saharan Africa.",
    bullets: [
      "Analyzed 90+ World Bank Mission 300 project documents, evaluating electricity-access targets and technologies across Sub-Saharan Africa.",
      "Synthesized findings presented to the Rockefeller Foundation and the World Bank to assess progress on connecting 300M people to electricity.",
    ],
    metrics: [
      { value: "90+", label: "Project docs analyzed" },
      { value: "300M", label: "People in scope" },
    ],
  },
  {
    slug: "cornell-sustainability-consultants",
    title: "Recruitment Chair & Associate Consultant",
    org: "Cornell Sustainability Consultants",
    location: "Ithaca, NY",
    period: "Feb 2026 — Present",
    category: "consulting",
    summary:
      "Advising local businesses on circular-economy strategy while leading the recruitment pipeline for the next consultant class.",
    bullets: [
      "Advising 3+ local businesses on circular-economy initiatives spanning research, grant writing, marketing, and implementation.",
      "Leading recruitment selection while supporting events and engagement for incoming members across the sustainability industry.",
    ],
    metrics: [
      { value: "3+", label: "Client businesses" },
      { value: "8 wks", label: "CSC training completed" },
    ],
  },
  {
    slug: "digital-marketing-consulting",
    title: "Founder & Content Strategist",
    org: "Digital Marketing & College Consulting",
    location: "Remote",
    period: "Mar 2020 — Present",
    category: "venture",
    summary:
      "A self-built content and advising practice: millions of organic views, brand partnerships, and students placed into the colleges they wanted.",
    bullets: [
      "Generated 8.1M+ organic social media views across 2025–2026 by analyzing platform trends and audiences to drive content strategy.",
      "Secured 5+ brand partnerships, including Princess Polly and HeyHae.",
      "Advised 60+ students on college admissions strategy and application writing.",
    ],
    metrics: [
      { value: "8.1M+", label: "Organic views" },
      { value: "60+", label: "Students advised" },
      { value: "5+", label: "Brand partners" },
    ],
  },
  {
    slug: "akula-energy",
    title: "Project Management Intern",
    org: "Akula Energy Ventures & Biofuel",
    location: "Fort Smith, AR",
    period: "Sep 2022 — Dec 2025",
    category: "research",
    summary:
      "Turning agricultural waste into renewable fuel — from anaerobic technology concept to stakeholder validation.",
    bullets: [
      "Developed an anaerobic-technology commercialization concept converting 100+ tons of rice-hull waste into renewable fuel.",
      "Conducted market and stakeholder research across 15+ government, industry, and academic organizations, including the USDA and DOE.",
    ],
    metrics: [
      { value: "100+ t", label: "Waste feedstock modeled" },
      { value: "15+", label: "Organizations engaged" },
    ],
  },
  {
    slug: "ambitious-ai",
    title: "Founder",
    org: "Ambitious AI",
    location: "Remote",
    period: "June 2026 — Present",
    category: "venture",
    summary:
      "An AI platform that finds and emails students the internships, conferences, and early-career opportunities actually worth their time.",
    bullets: [
      "Building an AI-powered platform that curates and emails internships, conferences, and early-career opportunities by student interest.",
      "Developed an initial MVP and tested personalized recommendations with 6+ early users to inform product development.",
    ],
    metrics: [
      { value: "MVP", label: "Shipped & tested" },
      { value: "6+", label: "Early users" },
    ],
  },
  {
    slug: "bank-of-america-student-leaders",
    title: "Student Leader Intern — Habitat for Humanity",
    org: "Bank of America Student Leaders",
    location: "Little Rock, AR",
    period: "June 2026 — July 2026",
    category: "leadership",
    summary:
      "A selective national program pairing paid nonprofit work with civic leadership training.",
    bullets: [
      "Supported affordable-housing and community-development initiatives through financial planning, marketing, and project execution.",
      "Participated in professional development, civic leadership training, and cross-sector networking at the Leadership Summit in NC.",
    ],
    metrics: [{ value: "National", label: "Selective cohort" }],
  },
  {
    slug: "cornell-ma-club",
    title: "Social Chair",
    org: "Cornell M&A Club",
    location: "Ithaca, NY",
    period: "Sep 2025 — Present",
    category: "leadership",
    summary:
      "Programming for an 85-member finance community, alongside a nine-week deal education curriculum.",
    bullets: [
      "Organizing large-scale dinners and club events for 85 members to deepen professional networking within the finance sector.",
      "Completed 9-week New Member Education on due diligence, deal structuring, legal compliance, and case studies (Tesla, Hilton).",
    ],
    metrics: [
      { value: "85", label: "Members served" },
      { value: "9 wks", label: "Deal education" },
    ],
  },
  {
    slug: "cornell-south-asian-council",
    title: "Executive Board Member",
    org: "Cornell South Asian Council",
    location: "Ithaca, NY",
    period: "Feb 2026 — Present",
    category: "leadership",
    summary:
      "Cultural programming, budgets, and advocacy for a community of a thousand-plus students.",
    bullets: [
      "Planning and hosting large-scale cultural programming engaging 1,000+ students across Cornell's campus.",
      "Managing financial support, retreat planning, and public relations including event promotion and South Asian advocacy.",
    ],
    metrics: [{ value: "1,000+", label: "Students engaged" }],
  },
  {
    slug: "arkansas-deca",
    title: "VP of Career Development (AR State), Marketing & Membership",
    org: "Arkansas DECA",
    location: "Fort Smith, AR",
    period: "Aug 2021 — May 2025",
    category: "leadership",
    summary:
      "Four years running statewide programming, workshops, and service drives for a 1,682-member association.",
    bullets: [
      "Hosted events for a 1,682-member association; spoke at 10 conferences and delivered workshops on marketing and financial literacy.",
      "Led community-service initiatives raising 531 toys for Arkansas Children's Hospital, 500+ letters, and $2K for a cancer nonprofit.",
    ],
    metrics: [
      { value: "1,682", label: "Members" },
      { value: "10", label: "Conferences spoken at" },
    ],
  },
];

export const education = [
  {
    school: "Cornell University",
    detail: "Charles H. Dyson School of Applied Economics and Management",
    line: "B.S. — Finance & International Business · GPA 3.52",
    period: "Expected May 2029",
    honors: [
      "Dyson Leadership Fellows",
      "Meinig National Family Scholars",
      "Henry David Thoreau Planetary Solutions Scholarship",
    ],
  },
  {
    school: "Southside High School",
    detail: "Fort Smith, AR",
    line: "Rank 4/431 · GPA 4.5 · ACT 34",
    period: "Graduated May 2025",
    honors: ["Capstone Diploma", "Honors Diploma"],
  },
];

export const awards = [
  "YC Startup Internship Expo — Selected Participant (2026)",
  "Dyson NYC Consulting Trek — Admittee (2026)",
  "DECA 1st Place, International Business Plan (2025)",
  "DECA 1st Place, Financial Literacy (2024)",
  "FBLA 1st Place, International Business Roleplay (2025)",
  "FBLA 1st Place, Advertising (2023, 2024, 2025)",
  "Upakar Scholarship Recipient — $10,000",
  "ARKTESOL Scholarship Recipient — $4,000",
];

export const toolkit = [
  "Financial Modeling",
  "Market Sizing",
  "Excel",
  "PowerPoint",
  "Google Sheets",
  "Canva",
  "Grant Writing",
  "Content Strategy",
  "Stakeholder Research",
];

export const certifications = [
  "Wall Street Prep — Accounting & Financial Modeling",
  "Wall Street Prep — Spreadsheet Modeling",
  "CSC Consulting — 8-Week Training",
];

export const languages = ["English", "Telugu (Fluent)", "Hindi (Proficient)"];

export const interests = [
  "Bollywood Dance",
  "Tennis & Pickleball",
  "Soccer",
  "Photography",
  "Dystopian Fiction",
  "Painting",
  "Travel",
];

export const contact = {
  email: "at2235@cornell.edu",
  phone: "(479) 353-6473",
  location: "Ithaca, NY",
  linkedin: "https://www.linkedin.com/in/ananya-taggarse",
  tiktok: "https://www.tiktok.com/@ananyat16",
  linktree: "https://linktr.ee/AnanyaTaggarse",
};