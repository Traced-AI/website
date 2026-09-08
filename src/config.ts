export const TALLY_FORM_ID = 'xXvOJk';

/**
 * The waitlist form is rendered natively (see `src/sections/WaitlistForm.tsx`) and
 * POSTed straight to Tally, rather than embedded as an iframe. Tally's embed is
 * cross-origin and bakes its own palette in, so it could never follow the site theme.
 *
 * These UUIDs are Tally's internal block identifiers, read from the form definition.
 * They are the contract between our fields and Tally's columns: if a field is added,
 * removed, or reordered in the Tally dashboard, the UUIDs must be re-read here or
 * submissions will land in the wrong column. Re-read them from
 * `https://tally.so/embed/<id>` (the `__NEXT_DATA__` blob, `props.pageProps.blocks`,
 * using each block's `groupUuid`).
 */
export const TALLY_SUBMIT_URL = `https://api.tally.so/forms/${TALLY_FORM_ID}/respond`;

export const TALLY_FIELDS = {
  email: '650acce8-c72a-4299-8a91-91c534fc31fd',
  company: '7ab8e551-0b18-4f48-966b-fe8b3ffb1cd3',
  role: '1fb220fa-0f27-40f6-a322-4f916378fc6b',
  useCase: '0b8a4e51-cec2-4191-89bb-1b4cb1ae2b6f',
} as const;

/** Role is a dropdown: Tally expects an array of the selected option's UUID. */
export const TALLY_ROLE_OPTIONS = [
  { id: 'b8749454-7dfd-4da2-8a46-34bde19067d8', label: 'Founder or C-suite' },
  { id: 'b83d3d9c-6ce7-4c49-9497-863b55e44aa1', label: 'Engineering or Technical lead' },
  { id: '9ccafe05-3112-4332-97db-40c769c03aa6', label: 'Compliance, Risk, or Legal' },
] as const;
export const CAL_BOOKING_URL = 'https://www.cal.eu/traced-ai/discovery';
export const ANNEX_III_APPLICATION_DATE = '2027-12-02';
export const DOMAIN = 'https://www.traced-ai.com';
export const CONTACT_EMAIL = 'contact@traced-ai.com';
export const EC_TIMELINE_URL =
  'https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act';
export const EU_AI_ACT_OFFICIAL_URL =
  'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689';
