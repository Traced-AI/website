# Recruitment AI compliance brief

**Use case:** HR automation — a Slack agent (or similar pipeline) that sources, assesses, ranks candidates, and schedules interviews.
**Prepared by:** Traced AI (https://www.traced-ai.com/)
**Basis:** Regulation (EU) 2024/1689 (EU AI Act), as amended by the Digital Omnibus provisional agreement of 7 May 2026.
**Status:** Informational summary, not legal advice.

---

## Classification

A recruitment AI system of this kind is **very likely a high-risk AI system** under [Annex III, point 4(a)](https://artificialintelligenceact.eu/annex/3/): AI for the recruitment or selection of natural persons, in particular to analyse and filter applications and evaluate candidates. The Annex language is explicit; whether a specific product lands in scope still turns on its intended purpose and any [Article 6](https://artificialintelligenceact.eu/article/6/) considerations, so this reads as very likely rather than absolute.

Two roles carry obligations:

- **The provider** builds the system and places it on the market.
- **Each customer running it in their hiring flow is a deployer.**

The high-risk regime applies to the provider even if based outside the EU, as long as the system is placed on the EU market or its outputs are used in the Union.

---

## Timeline and exposure

Under the AI Act as adopted, stand-alone Annex III high-risk obligations apply from **2 August 2026**. On 7 May 2026 the Council and Parliament reached a provisional political agreement on the Digital Omnibus that defers these obligations to **2 December 2027** (and AI embedded in regulated products under Annex I to 2 August 2028). The deferral takes legal effect only once the Omnibus is formally adopted and published in the Official Journal, expected before 2 August 2026.

Recruitment AI is a stand-alone Annex III system, so **2 December 2027 is the planning baseline once adopted**; until then, 2 August 2026 stands as written. Either way the obligations are unchanged, only the dates move.

Fines for high-risk breaches reach **EUR 15M or 3% of worldwide annual turnover**, whichever is higher ([Article 99(4)](https://artificialintelligenceact.eu/article/99/)). The EUR 35M / 7% tier ([Article 99(3)](https://artificialintelligenceact.eu/article/99/)) applies only to prohibited practices under [Article 5](https://artificialintelligenceact.eu/article/5/), which does not apply here.

---

## Provider obligations

- **Risk management and data governance** as ongoing processes, not one-off documents ([Article 9](https://artificialintelligenceact.eu/article/9/), [Article 10](https://artificialintelligenceact.eu/article/10/)).
- **Quality management system** documented in writing ([Article 17](https://artificialintelligenceact.eu/article/17/)), and **technical documentation** kept up to date per [Annex IV](https://artificialintelligenceact.eu/annex/4/). Simplified form allowed for SMEs and startups ([Article 11](https://artificialintelligenceact.eu/article/11/)).
- **Record-keeping and logging.** The system must technically allow automatic logging over its lifetime so each decision is traceable, supporting post-market monitoring and oversight ([Article 12](https://artificialintelligenceact.eu/article/12/)). Article 12 does not enumerate specific fields for recruitment systems; it prescribes detailed log fields only for remote biometric identification. Defensible traceability in practice means capturing at least timestamps, inputs, outputs, the model version involved, and any human reviewer linked to the decision. Keep provider-side logs at least six months ([Article 19](https://artificialintelligenceact.eu/article/19/)).
- **Transparency to deployers.** Ship clear instructions for use covering purpose, accuracy, limitations, and human-oversight measures ([Article 13](https://artificialintelligenceact.eu/article/13/)).
- **Human oversight by design.** Build interfaces so a person can understand, override, and halt the system ([Article 14](https://artificialintelligenceact.eu/article/14/)).
- **Accuracy, robustness, cybersecurity** appropriate to the purpose ([Article 15](https://artificialintelligenceact.eu/article/15/)).
- **Conformity assessment, EU declaration of conformity, CE marking, EU database registration** before going to market ([Article 16](https://artificialintelligenceact.eu/article/16/), [Article 43](https://artificialintelligenceact.eu/article/43/), [Article 47](https://artificialintelligenceact.eu/article/47/), [Article 48](https://artificialintelligenceact.eu/article/48/), [Article 49](https://artificialintelligenceact.eu/article/49/)).

---

## Deployer obligations

- **Keep the system's logs** for at least six months, where under their control ([Article 26(6)](https://artificialintelligenceact.eu/article/26/)).
- **Assign competent human oversight** to named people with authority and training ([Article 26(2)](https://artificialintelligenceact.eu/article/26/)).
- **Data protection impact assessment** under [GDPR Article 35](https://gdpr-info.eu/art-35-gdpr/) where the processing is high-risk, using the provider's [Article 13](https://artificialintelligenceact.eu/article/13/) documentation. A separate Fundamental Rights Impact Assessment under [Article 27](https://artificialintelligenceact.eu/article/27/) applies only to certain deployers (public bodies, private entities providing public services, and specified Annex III point 5 systems), so it will often not apply to a private-sector recruiter.

### Priority: candidate and worker-facing duties (highest fine exposure)

These are the obligations HR automation teams most often miss. They protect the person being assessed by the AI, and skipping them is what draws complaints and regulator attention.

- **Inform workers and their representatives** before a high-risk AI system is used in the workplace ([Article 26(7)](https://artificialintelligenceact.eu/article/26/)).
- **Inform candidates and other affected persons** that their evaluation involves a high-risk AI system, including its purpose and their right to an explanation ([Article 26(11)](https://artificialintelligenceact.eu/article/26/), [Recital 93](https://artificialintelligenceact.eu/recital/93/)).
- **Honour the right to explanation.** An affected person may obtain clear and meaningful explanations of the AI system's role in the decision and the main elements behind it ([Article 86](https://artificialintelligenceact.eu/article/86/)). The precise scope is still debated, so build to provide the explanation rather than to argue its limits.

---

## Where Traced AI fits

Most of the above is governance and paperwork the provider owns. **The logging obligation is the most engineering-intensive piece**: [Article 12](https://artificialintelligenceact.eu/article/12/) traceability over the system lifetime, reinforced by [Article 19](https://artificialintelligenceact.eu/article/19/) (provider) and [Article 26(6)](https://artificialintelligenceact.eu/article/26/) (deployer). The Act specifies automatic logging and minimum retention; it does not mandate tamper-evident or hash-chained logs. Those are engineering choices, increasingly expected by auditors and enterprise buyers as the most defensible way to evidence each decision over time.

**Build it once, or buy the layer.** Building this in-house means per-decision event capture, tamper-resistant storage, retention, override tracking, and audit-formatted exports, then maintaining it as the rules evolve. Traced AI delivers that layer: a drop-in SDK, raw candidate data never leaves the provider's systems, only hashes plus rationale reach the independent ledger, and every export is shaped to the article it answers to.

**It does not make the provider compliant on its own.** It covers the evidentiary layer ([Article 12](https://artificialintelligenceact.eu/article/12/), [Article 19](https://artificialintelligenceact.eu/article/19/), [Article 26(6)](https://artificialintelligenceact.eu/article/26/), and support for the [Article 86](https://artificialintelligenceact.eu/article/86/) explanation trail). The QMS, conformity assessment, and CE marking remain the provider's.

**The law keeps moving, and we move the format with it.** The Omnibus deferral is a recent example: dates and expectations shift. Traced AI's versioned rule registry tracks the legislation and the emerging harmonised standards and keeps the required logging shape current, so exports stay audit-ready as the rules change, without re-reading the regulation every time it moves. That ongoing maintenance is the subscription, not a one-time integration.

### A note on the export format, stated plainly

Traced AI's current logging schema and export shape are our best working interpretation of what the AI Act and auditors will require. They are not yet confirmed by a regulator or an EU-recognised conformity body. We track the legislation and the emerging harmonised standards and translate them into versioned logging instructions, with the aim of having that mapping reviewed and validated by qualified EU-law expertise, and over time recognised as a trusted third-party layer for AI Act evidence. Treat the schema as a maintained, improving bet, not a guarantee of acceptance.

---

## Next to Vanta

| Vanta and similar | Traced AI |
| --- | --- |
| Attests that controls and processes exist (SOC 2, ISO 42001). Verifies the process is in place. | The evidence inside those controls: the actual per-decision record an auditor or a rejected candidate's lawyer asks to see. |

One verifies the process is in place. The other is the proof the process produced.
