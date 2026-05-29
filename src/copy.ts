export const hero = {
  line1: 'Move fast',
  line2Before: 'and',
  line2Strike: 'break things',
  line2Highlight: 'get investigated',
  tooltip: 'EU AI Act Art. 99 · up to €15M / 3% for high-risk violations, €35M / 7% for prohibited practices',
  subheadline: '“You can’t do compliance work with vibes.”',
  body1:
    'August 2, 2026. The EU AI Act begins full enforcement. If your AI system affects credit decisions, employment screening, or functions as a medical device, Annex III already classifies it as high-risk. Decisions made by that system must be logged, explainable, and defensible.',
  body2: 'Most companies are not ready.',
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
  body: 'The high-risk provisions take full effect on August 2, 2026. If your AI system is involved in credit decisions, employment screening, biometric identification, or clinical decision support, Annex III most likely classifies it as high-risk. Not every AI system touching people is in scope, but the specific categories your legal team cares about almost certainly are.',
  question: 'The question your legal team will ask is not “were you compliant?”',
  questionPunchline: 'It is “can you prove it?”',
  procurement: {
    heading: 'Enterprise procurement note',
    body: 'Your enterprise customers are already sending AI governance questionnaires before regulators do. Procurement reviews from banks, insurers, and public-sector buyers now routinely ask: what models are used, how decisions are logged, whether AI outputs are reviewable, and what audit evidence exists. That pain is immediate. The regulatory deadline adds urgency, but the deal-blocker is today.',
  },
  footnote:
    'Note: As of May 2026, the EU Council and Parliament reached a provisional agreement under the “Digital Omnibus” package that may extend the deadline for high-risk AI embedded in regulated products. Until formally adopted, August 2, 2026 remains the legally binding date. Enterprise procurement requirements do not wait for regulators.',
  footnoteUrl:
    'https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/',
  sourceAttr:
    'EU AI Act, Regulation EU 2024/1689, Articles 9, 12, 13, 14, 19, 26(6), Annex III. Official text:',
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
      body: 'Raw inputs and outputs are written to encrypted storage on your own infrastructure. No sensitive data crosses your perimeter. You hold the source of truth.',
    },
    {
      title: 'Tamper-evident ledger',
      body: 'SHA-256 hashes of every I/O pair, plus structured rationale, flow to an append-only chained ledger in the cloud. Cryptographically verifiable. Immutable by design. Designed to support the logging requirements of Articles 12 and 19 of the EU AI Act.',
    },
    {
      title: 'Auditor-ready exports',
      body: 'Generate structured audit packs aligned to Articles 12, 17, 72, and 86. Formatted so your legal team and external auditors can work with them directly, without building a separate data procurement process.',
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
  body: 'The hardest part of EU AI Act compliance is not building logging infrastructure. It is knowing exactly which Articles apply to your decision type, what evidence format satisfies an auditor, and how that changes with every guidance document Brussels publishes.',
  body2:
    'The Traced AI rule registry is a versioned, cryptographically-signed mapping from regulatory text to concrete logging requirements. When new guidance drops, the registry updates. Your evidence posture updates automatically.',
  body3:
    'This reduces the repetitive interpretation work your legal and compliance teams otherwise spend on every model update, every new use case, every new guidance note, so they can focus on decisions that actually require their judgment.',
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
      body: 'Credit scoring, loan underwriting, fraud detection, AML flags. Banks have model-risk machinery but not AI-Act-ready, tamper-resistant decision logs tied to per-decision explanations. Traced AI plugs into existing governance without touching raw PII.',
    },
    {
      title: 'Medtech',
      body: 'AI-enabled medical devices are currently certified under MDR/IVDR. Notified bodies expect traceable evidence of AI behavior and incident linkage. The EU AI Act’s direct obligations for medical devices remain in active legislative revision as of 2026. Traced AI provides a neutral log layer that aligns with MDR/IVDR technical file and post-market surveillance requirements, and positions your evidence chain for whichever framework applies.',
    },
    {
      title: 'HR Automation',
      body: 'Recruitment, hiring scores, performance assessment, and workforce management AI are high-risk under Annex III. Most HR vendors do not yet have serious model governance. Traced AI gives you per-candidate decision trails plus structured audit views you can show to regulators, works councils, and litigators.',
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
    'The local viewer is always free and ships as part of the SDK. Your raw AI inputs and outputs never leave your perimeter, on any plan.',
  rationaleNote:
    'Rationale text is stored as structured fields, not free-form strings. This protects against accidental capture of personal data, prompt leakage, or confidential reasoning chains. Field-level configuration lets you control exactly what enters the rationale record. Full documentation in the SDK guide.',
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
    'The call is for companies actively evaluating whether Traced AI fits their situation. If you’re still exploring, the waitlist email is the right next step.',
};

export const footer = {
  tagline: 'Evidentiary infrastructure for AI decisions.',
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'DPA', href: '/dpa' },
    { label: 'contact@traced-ai.com', href: 'mailto:contact@traced-ai.com' },
  ],
  company: {
    name: 'DRIFTWARE DYNAMICS LTD',
    line1: 'Cyprus Ltd · Reg. No. HE 474529 · VAT: 60167558M',
    line2: 'Tefkrou Anthia 63, MEZARINA COURT A, Flat/Office 5, Agia Napa, Famagusta, Cyprus 5330',
  },
  legal:
    'Traced AI does not provide legal advice. This product supports technical compliance documentation. It is not a substitute for a quality management system, legal counsel, or the full set of obligations under the EU AI Act. Consult qualified legal counsel for regulatory advice specific to your jurisdiction and use case.',
};
