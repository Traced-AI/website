export const hero = {
  line1: 'Move fast',
  line2Before: 'and',
  line2Strike: 'break things',
  line2Highlight: 'get investigated',
  tooltip: 'EU AI Act Art. 99 · up to €15M / 3% for high-risk violations, €35M / 7% for prohibited practices',
  subheadline: '“You can’t do compliance work with vibes.”',
  body1:
    'August 2, 2026. The high-risk obligations of the EU AI Act start to apply. If your AI system affects credit decisions or employment screening, Annex III already classifies it as high-risk. Decisions made by that system must be logged, explainable, and defensible.',
  body2: 'That standard is harder to meet than most teams expect.',
  ctaPrimary: 'Join the waitlist →',
  ctaSecondary: 'See how it works',
  belowCta: 'No card required. No enterprise sales process.',
};

export interface Stat {
  value: string;
  label: string;
  url: string;
  smallValue?: boolean;
}

export const stats: Stat[] = [
  {
    value: '€35M',
    label:
      'Maximum fine under the EU AI Act (prohibited AI practices, Article 5; up to €15M/3% for high-risk violations)',
    url: 'https://artificialintelligenceact.eu/article/99/',
  },
  {
    value: 'Art. 14',
    label: 'Requires demonstrable human oversight, not just claimed oversight',
    url: 'https://artificialintelligenceact.eu/article/14/',
    smallValue: true,
  },
  {
    value: 'Annex III',
    label: 'Lists the AI use cases already classified high-risk by definition',
    url: 'https://artificialintelligenceact.eu/annex/3/',
    smallValue: true,
  },
  {
    value: 'Aug 2, 2026',
    label: 'Full application of high-risk system requirements per Article 113',
    url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act',
    smallValue: true,
  },
];

export const regulatoryReality = {
  sectionLabel: 'THE DEADLINE IS REAL',
  headline: 'On August 2nd, “the AI decided” stops being an acceptable answer.',
  body: 'The high-risk provisions take full effect on August 2, 2026. If your system handles credit decisions, employment screening, or biometric identification, Annex III classifies it as high-risk. Decisions made by that system must be logged, explainable, and defensible.',
  question: 'When enforcement comes, good intentions don\'t appear in audit logs.',
  questionPunchline: 'Documented evidence does.',
  procurement: {
    heading: 'Enterprise procurement note',
    body: 'Your enterprise customers are already demanding AI governance evidence. Banks, insurers, and public-sector buyers ask what models you use, how decisions are logged, and what audit evidence exists. The deal-blocker is today.',
  },
  sourceAttr:
    'EU AI Act, Regulation EU 2024/1689, Articles 9, 11, 12, 13, 14, 19, 26(6), Annex III, Annex IV. Official text:',
  sourceUrl:
    'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
};

export interface Feature {
  title: string;
  body: string;
}

export const howItWorks = {
  sectionLabel: 'THE MECHANISM',
  headline1: 'Your data never leaves your perimeter.',
  headline2: 'Your compliance record does.',
  intro:
    'Traced AI is the evidentiary and traceability layer for your AI decisions. It does not replace your quality management system or legal counsel. It provides the tamper-evident evidence chain that both depend on.',
  features: [
    {
      title: 'Auto-patching SDK',
      body: 'Two lines of config. The SDK patches your LLM clients (OpenAI, Anthropic, and others) at import time. No manual instrumentation. No restructuring your pipeline.',
    },
    {
      title: 'Local-first architecture',
      body: 'Raw inputs and outputs are written to encrypted storage on your own infrastructure. Only SHA-256 hashes and decision metadata leave your perimeter, never the underlying data, so GDPR data minimization is built in and the logs support your Article 30 records and DPIAs. You hold the source of truth.',
    },
    {
      title: 'Tamper-evident ledger',
      body: 'SHA-256 hashes of every I/O pair, plus structured rationale, flow to an append-only chained ledger in the cloud. Designed to support the logging requirements of Articles 12 and 19, and to feed the post-market monitoring expected under Article 72 across the system’s lifetime.',
    },
    {
      title: 'Auditor-ready exports',
      body: 'Generate structured audit packs aligned to Articles 11, 12, 17, 72, and 86 and the Annex IV technical documentation, formatted so your legal team and external auditors can work with them directly.',
    },
  ] as Feature[],
};

export interface RegistryRow {
  field: string;
  value: string;
  url?: string;
}

export const ruleRegistry = {
  sectionLabel: 'THE MOAT',
  headline1: 'We don’t just log.',
  headline2: 'We know what to log, and why.',
  body: 'The hard part of EU AI Act compliance is not logging infrastructure. It is knowing which Articles apply to your decision type, what format an auditor expects, and tracking every guidance update Brussels publishes.',
  body2:
    'The Traced AI rule registry is a versioned, cryptographically-signed mapping from regulatory text to concrete logging requirements. When new guidance drops, the registry updates. Your evidence posture updates automatically.',
  rows: [
    {
      field: 'Article',
      value: '14, Human Oversight',
      url: 'https://artificialintelligenceact.eu/article/14/',
    },
    {
      field: 'Also maps to',
      value: 'Article 12, Record-Keeping; Article 13, Transparency; Article 72, Post-Market Monitoring',
    },
    { field: 'Risk tier', value: 'High-risk' },
    {
      field: 'Applies to',
      value: 'Credit scoring, clinical decision support, employment screening',
    },
    {
      field: 'Logging required',
      value: 'Decision input hash, output hash, structured rationale, reviewer ID, timestamp',
    },
    { field: 'Last updated', value: '2026-05-18, v3.1, signed' },
  ] as RegistryRow[],
  badges: ['Versioned', 'Signed', 'Always current'],
};

export interface IndustryCard {
  title: string;
  body: string;
}

export const builtFor = {
  sectionLabel: 'WHO IT’S FOR',
  headline:
    'If your AI affects access to money, healthcare, or employment, traceability obligations are already unavoidable.',
  cards: [
    {
      title: 'Fintech',
      body: 'Credit scoring, loan underwriting, fraud detection, AML flags. Traced AI adds AI-Act-ready, tamper-resistant decision logs to existing model-risk governance, without touching raw PII.',
    },
    {
      title: 'Medtech',
      body: 'AI medical devices are certified under MDR/IVDR, and notified bodies expect traceable evidence of AI behavior. Traced AI provides the log layer that aligns with both frameworks and positions your evidence chain for incoming EU AI Act obligations.',
    },
    {
      title: 'HR Automation',
      body: 'Recruitment, hiring, and workforce assessment AI are high-risk under Annex III. Traced AI gives you per-candidate decision trails and structured audit views for regulators, works councils, and litigators.',
    },
  ] as IndustryCard[],
};

export interface PricingFeature {
  text: string;
  accent?: boolean;
}

export interface PricingTier {
  tier: string;
  amount: string;
  amountSuffix?: string;
  cadence: string;
  desc: string;
  features: PricingFeature[];
  badge: string;
  badgeVariant: 'teal' | 'muted';
  featured?: boolean;
}

export const pricing = {
  sectionLabel: 'PLANS',
  headline: 'Start for free. Pay when you’re ready.',
  subheadline:
    'The self-hosted viewer is part of the SDK and free on every plan. Your raw data never reaches our servers.',
  tiers: [
    {
      tier: 'Free',
      amount: '€0',
      cadence: 'Email account required. No credit card.',
      desc: 'Generate an API key, add two lines of config, and start tracing. No card required.',
      features: [
        { text: '10,000 events, 7-day retention' },
        { text: 'Hosted dashboard at traced-ai.com' },
        { text: 'Full SDK access' },
        { text: 'Self-hosted local viewer (always free, all plans)', accent: true },
      ],
      badge: 'Evaluate and integrate',
      badgeVariant: 'muted' as const,
    },
    {
      tier: 'Startup',
      amount: '€100',
      amountSuffix: '/mo',
      cadence: '€1,000/year · 2 months free',
      desc: '250,000 events included per month. Need more? Buy additional packages at €30 per 100k events rather than upgrading tiers.',
      features: [
        { text: '250k events/month (3M/year on annual plan)' },
        { text: '3-year event retention (above the Article 19 and 26(6) minimum of 6 months)' },
        { text: 'Standard rule registry (EU AI Act Articles 9, 12, 13, 14, 72, 86, Annex III)' },
        { text: 'Pay-as-you-go event packages: €30 per 100k' },
        { text: 'Email support' },
        { text: 'Self-hosted local viewer (always free, all plans)', accent: true },
      ],
      badge: 'Series A ready',
      badgeVariant: 'teal' as const,
      featured: true,
    },
    {
      tier: 'Enterprise',
      amount: 'Custom',
      cadence: 'Negotiated per contract',
      desc: 'Same mechanics as Startup, higher limits, dedicated support. Pricing negotiated per contract based on event volume and required compliance frameworks.',
      features: [
        { text: 'Custom event limits' },
        {
          text: 'Event retention for the operational lifetime of the system (aligned with Articles 12, 18, and 19 obligations)',
        },
        { text: 'Custom rule registry entries written alongside your legal team' },
        { text: 'Dedicated support with a named contact' },
        { text: 'GDPR Data Processing Agreement' },
        { text: 'HIPAA Business Associate Agreement (healthcare)' },
        { text: 'EU AI Act compliance documentation package' },
        { text: 'Uptime SLA' },
        { text: 'Self-hosted local viewer (always free, all plans)', accent: true },
      ],
      badge: 'Banks, hospitals, insurers',
      badgeVariant: 'muted' as const,
    },
  ] as PricingTier[],
  selfHostedNote:
    'The local viewer ships with the SDK. Raw AI data never leaves your perimeter, on any plan.',
  selfHostedHeading: 'Self-hosted component',
  readyHeadline: 'Ready to start?',
  featuredTag: 'MOST POPULAR',
  pricingNote:
    '250k events covers approximately 8,000 LLM calls per day. If you are expecting higher volume before launch, reach out.',
};

export const waitlist = {
  sectionLabel: 'JOIN THE WAITLIST',
  headline: 'We’re building for the companies who need this before August 2026.',
  subheadline:
    'Two minutes. Tell us what you’re building and what you can’t yet explain. We’ll respond personally.',
  finePrint:
    "Once you’ve joined, you can book a 30-minute call. Optional, not required.",
};

export const thankYou = {
  headline: 'You’re on the list.',
  body: "We'll respond personally within 48 hours.",
  callBlock: {
    heading: 'Want to talk through your situation before launch?',
    body: 'You can book a 30-minute call directly. We’ll ask you one question upfront about what you’re most concerned with so we come prepared.',
    cta: 'Book a call →',
  },
  finePrint:
    'No pitch. If it’s not relevant to your situation in the first 10 minutes, we stop.',
};

export const footer = {
  tagline: 'Evidentiary infrastructure for AI decisions.',
  navLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'DPA', href: '/dpa' },
  ],
  contactEmail: { label: 'contact@traced-ai.com', href: 'mailto:contact@traced-ai.com' },
  company: {
    name: 'DRIFTWARE DYNAMICS LTD',
    line1: 'Cyprus Ltd · Reg. No. HE 474529 · VAT: 60167558M',
    line2: 'Tefkrou Anthia 63, MEZARINA COURT A, Flat/Office 5, Agia Napa, Famagusta, Cyprus 5330',
  },
  legal:
    'Traced AI does not provide legal advice. This product supports technical compliance documentation. It is not a substitute for a quality management system, legal counsel, or the full set of obligations under the EU AI Act. Consult qualified legal counsel for regulatory advice specific to your jurisdiction and use case.',
};
