export const hero = {
  line1: 'Move fast and',
  line2Before: '',
  line2Strike: 'break things',
  line2Highlight: 'get investigated',
  tooltip: 'EU AI Act Art. 99 · up to €15M / 3% for high-risk violations, €35M / 7% for prohibited practices',
  subheadline: '“You can’t do compliance work with vibes.”',
  body1:
    'August 2, 2026. The high-risk obligations of the EU AI Act start to apply. If your AI system affects credit decisions or employment screening, Annex III already classifies it as high-risk. Decisions made by that system must be logged, explainable, and defensible.',
  body2: 'Traced AI is the witness to those decisions: it records the why behind each one and the human who signed off, tamper-evident, so you can prove what happened later. Whether you comply stays your call.',
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
  body: 'The high-risk provisions take full effect on August 2, 2026. If your system handles credit decisions, employment screening, or biometric identification, Annex III classifies it as high-risk. Decisions made by that system must be logged, explainable, and defensible. A provisional political agreement in May 2026 (Digital Omnibus) may defer standalone Annex III obligations to December 2027 once formally adopted. The obligations are unchanged; the date may move.',
  question: 'When enforcement comes, good intentions don\'t appear in audit logs.',
  questionPunchline: 'Documented evidence does.',
  procurement: {
    heading: 'Enterprise procurement note',
    body: 'Your enterprise customers are already demanding AI governance evidence. Banks, insurers, and public-sector buyers ask what models you use, how decisions are logged, and what audit evidence exists. You do not have to be the regulated party to need this. If you sell into one, their procurement gate is the deal-blocker, and it is today.',
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
    'Traced AI is the witness to your AI decisions. Think of it as a dash-cam that knows which moments matter legally: it records the why behind each decision and the name of the human who approved it, in a form nobody can edit after the fact. A lawyer-supervised rule registry decides what is worth recording under the EU AI Act, so the evidence holds up when an auditor or a procurement team asks.',
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

export interface BoundaryItem {
  title: string;
  body: string;
}

export const boundaries = {
  sectionLabel: 'WHERE THE LINE IS',
  heading: 'What Traced AI is not',
  items: [
    {
      title: 'Not a compliance product',
      body: 'You decide whether you comply; your legal counsel and quality management system own that judgment. Traced AI makes what your AI actually did provable, which is the part nobody can produce after the fact.',
    },
    {
      title: 'Not a guardrail',
      body: 'It never blocks, changes, or approves a decision in flight. Your system runs exactly as it did before. Traced AI records the decision and the human who approved it, it does not intervene in either.',
    },
    {
      title: 'Not an eval tool',
      body: 'It does not score quality, accuracy, or sentiment. A witness reports what happened, it does not grade it. That is also why your raw prompts and outputs never leave your perimeter: proving a decision needs only its hash and its signer, not the underlying data.',
    },
  ] as BoundaryItem[],
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
      body: 'Recruitment, hiring, and workforce assessment AI are high-risk under Annex III. Candidates have a right to know AI assessed them and to receive an explanation on request (Art. 26(11), Art. 86). Traced AI gives you the per-candidate decision trail that makes both answerable, plus structured audit views for regulators, works councils, and litigators.',
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
    'Two minutes. Tell us what you’re building and what you can’t yet explain. You’ll hear back from me personally.',
  finePrint:
    "Once you’ve joined, you can book a 30-minute call. Optional, not required.",
};

export const thankYou = {
  headline: 'You’re on the list.',
  body: "I'll respond personally within 48 hours.",
  callBlock: {
    heading: 'Bring your messiest AI decision.',
    body: '30 minutes, you talk first. Tell me what’s actually broken: an incident, an audit you couldn’t answer, a procurement questionnaire that made your team scramble. I’ll map one EU AI Act logging requirement to your stack.',
    cta: 'Book a call →',
  },
  finePrint:
    'No pitch. If it’s not relevant to your situation in the first 10 minutes, I’ll stop.',
};


export const about = {
  vision: {
    sectionLabel: 'VISION',
    heading: 'The layer the whole system trusts',
    paragraphs: [
      'A future where no AI decision about a person’s life is a black box.',
      'Where a regulator, an auditor, or the person who got rejected can pull up the record and see exactly what was decided, on what basis, and who stood behind it. Where “the algorithm did it” stops being an excuse, because the trail is there and it can’t be rewritten after the fact.',
      'In that world, audit trails for AI are not a nice-to-have a few careful companies bolt on. They’re the floor. Being able to prove your AI’s reasoning is as ordinary as keeping financial books. And the place everyone plugs into to check that proof, the companies logging it and the auditors verifying it, is Traced AI.',
      'That’s the destination. Not a tool a few teams use. The layer the whole system trusts.',
    ],
  },
  mission: {
    sectionLabel: 'MISSION',
    heading: 'The line I won’t cross',
    paragraphs: [
      'When an AI makes a call about a person’s life, a human signs their name to it. No exceptions.',
      'This is the line I won’t cross for any amount of money. Not a slogan about “responsible AI”, a hard rule: if a model shapes someone’s career, their loan, their treatment, their future, a named human reviewed it and is on the hook for it. The point isn’t to slow AI down. It’s to make sure that when it touches a human fate, a human is still answerable for it.',
      'Plenty of money will be made building AI that decides fast and explains nothing. I’m building the opposite. Every day, the work is the same: make the human accountable, make the decision provable, and never let “the system chose” become an answer nobody can challenge.',
      'That’s what I’m fighting for. The vision is where it leads. This is what I refuse to betray to get there.',
    ],
  },
  theBet: {
    sectionLabel: 'THE BET',
    heading: 'Before it’s obvious',
    founderName: 'Cosmin',
    openingAfter: ', one person. There’s no salary to offer yet, no equity, no options, and I’m not changing that to bring someone on.',
    paragraphs: [
      'What I can offer is a cut. The company’s profit gets split into fair shares between me and the right one helping build this, paid monthly against invoices, straight from the books. The books are open to you. Some months that share is real money. Some months it’s zero, because the product isn’t live and revenue is whatever it is. I won’t pretend otherwise.',
      'So this is a bet, not a job. If you believe AI needs a witness and you want to help build it before it’s obvious, talk to me. If you need a paycheck, this isn’t it yet, and I’d rather tell you that now than waste your time.',
    ],
    cta: 'Talk to me',
  },
};

export interface NavLinkItem {
  label: string;
  to: string;
}

export const mainNav: NavLinkItem[] = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];

// Legal entity values. Canonical authority is the footer legal block in CLAUDE.md
// hard rules; keep these in sync with it. Verbatim from the incorporation docs.
const company = {
  name: 'DRIFTWARE DYNAMICS LTD',
  regNumber: 'ΗΕ 474529',
  vat: 'CY60167558M',
  address: [
    'Tefkrou Anthia, 63',
    'MEZARINA COURT A, Flat/Office 5',
    'Agia Napa, 5330, Famagusta, Cyprus',
  ],
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
    ...company,
    registration: `Cyprus Ltd · Reg. No.: ${company.regNumber} · VAT: ${company.vat}`,
  },
  legal:
    'Traced AI does not provide legal advice. This product supports technical compliance documentation. It is not a substitute for a quality management system, legal counsel, or the full set of obligations under the EU AI Act. Consult qualified legal counsel for regulatory advice specific to your jurisdiction and use case.',
  regulatoryNote:
    'Regulatory information on this site was last reviewed against Regulation (EU) 2024/1689 (EU AI Act) and the Digital Omnibus provisional agreement: 15 June 2026.',
  copyright: 'Traced AI. All rights reserved.',
};
