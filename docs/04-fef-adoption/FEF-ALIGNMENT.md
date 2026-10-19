# PEWA — FEF Alignment Profile

**Record:** FEF-ALIGNMENT.md  
**Version:** 0.1 — Founder review draft  
**Assessment date:** 19 October 2026  
**Current baseline:** FEF v1.0 Operational Baseline — APPROVED/ACTIVE, 7 September 2026; FEF-EWPCS-001 v1.0 plus AMD-001  
**Project repository / SSOT:** [Fkenogo/pewa](https://github.com/Fkenogo/pewa) — [Project Home Programme](../01-project-home/PEWA-PROJECT-HOME-PROGRAMME.md)  
**Evidence:** [FEF-01 verified authority inventory](PEWA-S5-FEF-01-Verified-Authority-and-Applicability-Inventory.md), approved Stage 3 closure, approved A01–A08 and Stage 4 closure.  
**Status:** PREPARED — FOUNDER REVIEW PENDING; **FEF FORMAL ADOPTION NOT YET APPROVED**  
**Implementation authority:** None for engineering; Stage 5 assessment/document alignment only.

## 1. Purpose and approach

Use one controlled PEWA alignment record as required by the [FEF Adoption Guide v1.0](https://github.com/Fkenogo/founder-engineering-framework/blob/main/docs/adoption/FEF-ADOPTION-GUIDE.md). FEF establishes engineering governance while PEWA's own repository and Founder remain authoritative for programme state and product/architecture/commercial decisions. Do not create a second programme controller, mirror the FEF repository, impose uniform repo layouts, or convert historical guidance into current mandates.

## 2. PEWA project baseline

- Product-home Stages 1–4 are independently Founder-approved and closed. Stage 5 FEF adoption/readiness is in progress; Stage 6 engineering **not started or authorised**.
- Product baseline: 314 controlled requirements R01–R08 and 41 approved product-policy decisions across COM, ORD, BMP, CPN, POP.
- Approved logical architecture A01–A08: provider-neutral modular monolith, authoritative acceptance/one-unit accounting, PEWA-owned tenancy and permissions, safe public/protected projections, browser-first independent of WhatsApp.
- One standard subscription keeps public menu/organic visibility/manual engagement active throughout its period even when consumption units are exhausted: only new structured order admission stops.
- Businesses represent they have rights to uploaded menu images and are accountable for published content, with PEWA proportionate notice/takedown measures. Legal text remains future work.
- Managed PostgreSQL, auth, Cloudflare media and hosting are options, **not selected providers**. Shared WhatsApp adapter is a Miledge-approved architectural direction, **not a verified deployed service**.

## 3. Alignment summary

| FEF area | Status | Evidence | Assessment |
|---|---|---|---|
| Founder authority | **Aligned** | Stage closures and Founder-approved GitHub PRs | Founder decisions authorise scope and gates; separate engineering authorisation preserved |
| Programme authority / SSOT | **Aligned** | Project Home Programme, PEWA repository | Single project programme controller; FEF does not replace it |
| Decision lifecycle | **Aligned** | Controlled R01–R08, COM/ORD/BMP/CPN/POP, A01–A08, closures | Draft/review/Founder approval/merge distinguishable |
| Evidence and validation | **Partially Aligned** | PR review/merge evidence; no implementation yet | Future engineering evidence/test/proof template not yet established |
| Lifecycle and gates | **Aligned** | Separate Stage 1–5 initiation/closure rules | Stage 6 and live launch remain separate gates |
| Repository integrity | **Partially Aligned** | Canonical GitHub branch/PR/merge practice | Exact-head review known; branch protection/CI and local worktree controls not comprehensively verified |
| Exceptions and unresolved matters | **Partially Aligned** | Stage 3/4 reserved decision lists | FEF-alignment action disposition and engineering-blocker ownership need consolidation, not duplicate register |
| Governance proportionality | **Aligned / Project-Specific** | FEF AMD-001; PEWA stage governance | Use R0/R1/R2 proportional future review; don't impose nonblocking loops |
| Engineering work-package & closure discipline | **Not Applicable yet / Evidence Needed for Stage 6** | Active FEF-EWPCS-001 and AMD-001, Stage 6 not authorised | Prepare a bounded future package template and evidence rules without implementing |

No material normative conflict identified in the records reviewed. This profile is **not** a claim that every FEF provision or PEWA repo setting has been audited.

## 4. Existing strengths

1. Clear Founder authority at stage gates and final GitHub PR merge.
2. Canonical project programme, controlled requirements, architectural handovers and preserved source evidence.
3. Explicit Miledge reserved authority for shared WhatsApp and infrastructure selection, while PEWA owns domain truth.
4. Honest separation of menu publication from order-unit admission, business declaration from platform observation, and operator support from merchant food fulfilment.
5. Proportionate governance preference: substantive review of real risks, with local-first product review under the active FEF amendment.

## 5. Genuine gaps and proportionate proposed actions

| ID | Verified gap or evidence limitation | Risk | Proposed bounded action | Founder action needed |
|---|---|---|---|---|
| FEF02-G01 | No prior consolidated PEWA FEF alignment record | Unclear formal adoption posture | Adopt this **single** `FEF-ALIGNMENT.md` following Founder review | Approve record and controlled alignment |
| FEF02-G02 | Current PEWA branch/CI/review settings not comprehensively audited | Misstated delivery readiness | FEF-04 read-only repository, Miledge CI guidance and provider readiness check; report only material blockers | Accept scope; later approve actual configuration changes separately |
| FEF02-G03 | Future FEF engineering-package proof strategy not yet specified | Unbounded work or unnecessary reviews | FEF-03 concise future work-package template with R0/R1/R2, exact-head evidence, test/review and independent merge controls | Approve drafting, not implementation |
| FEF02-G04 | Critical unresolved product-commercial, privacy/legal, campaign measurement and vendor-selection details | Agent guesses high-impact rules | FEF-05 owner/trigger map per affected feature, reusing existing decision records | Confirm separate decision authority and no invented defaults |
| FEF02-G05 | Miledge WhatsApp shared adapter not verified deployed; media and hosting are only candidates | Incorrect dependency assumption | FEF-04 query actual Miledge shared capability readiness and PEWA architecture fit | Reserved Miledge decision before integration |

No evidence currently justifies a separate deviations register, new implementation repository, FEF repo copy, or Stage 4 reopening.

## 6. Project-specific matters retained under PEWA

- Product organisation/brand/menu structure and any-language merchant content.
- Business acceptance and exactly-one consumption event; included 200 monthly, purchased top-ups and ten bounded debt-backed recoverable units.
- Zero-units means **new ordering off, not menu/contact/discovery off**, throughout eligible subscription.
- Guest access without compulsory customer account, protected hotel content, scoped PEWA operators.
- Featured Offer viewability and organic ranking independence.
- Merchant accountability for image rights/content and future policy drafting.
- External WhatsApp as optional channel through Miledge shared adapter only after its readiness and authority; provider choices remain PEWA/Miledge-governed.

FEF supplies **engineering process**, not replacement substantive domain policy.

## 7. Deviation/conflict review

| Matter | Classification | Disposition proposed |
|---|---|---|
| PEWA own six-stage programme vs FEF Adoption Guide six adoption steps | **Project-Specific; no conflict** | Distinct purposes; retain PEWA programme and use FEF adoption process inside Stage 5 |
| Local-first Founder preview instead of perpetual hosted preview | **Aligned** with FEF-EWPCS-001-AMD-001 | Apply where future UI review warrants; hosted only for material hosting/external-validation needs |
| R0/R1/R2 risk-classified review | **Aligned** with active amendment | Independent technical review required for high-risk R2 work; not automatically for all docs/UI |
| Product/provider authority under MTAIP-001 | **Aligned** | Architecture drives provider selection; no compulsory central platform |

No intentional deviation or material conflict proposed at this stage. New contrary evidence must be escalated rather than assigned a fictional resolution.

## 8. Proposed alignment actions and authority

| Action | Priority | Value | Cost | Owner / gate | Status |
|---|---|---|---|---|---|
| Approve this one alignment profile after Founder review | High | Controlled FEF adoption reference | Low | Founder Stage 5 | Proposed |
| Draft future work-package and review/evidence rubric (FEF-03) | High | Safe, efficient authorised engineering later | Low | Founder Stage 5 review | Proposed |
| Verify relevant CI/portfolio infrastructure status (FEF-04) | High | Honest provider/dependency readiness | Low/moderate | PEWA + Miledge reserved authority | Proposed |
| Gate unresolved policy/terms/privacy/provider decisions by feature (FEF-05) | High | Avoid silent product decisions | Low | Founder, legal, Miledge as allocated | Proposed |
| Close Stage 5 only after FEF-06 readiness/disposition | High | No premature engineering | Low | Separate Founder decision | Proposed |

**No engineering implementation or infrastructure configuration is authorised by acceptance of these proposals.**

## 9. Founder decisions requested

**FEF02-FD1:** Approve this as PEWA's one controlled FEF alignment record, with its current assessment statuses and named evidence limitations.

**FEF02-FD2:** Approve only bounded FEF-03–FEF-06 assessment/document preparation; defer actual engineering controls activation and vendor configuration to later authorisations.

**FEF02-FD3:** Accept the absence of material conflicts in the assessed baseline, subject to escalation if authoritative new evidence contradicts it.

**FEF02-FD4:** Preserve FEF-EWPCS-001 and AMD-001 applicability to **future** engineering work, including R0/R1/R2 proportional review and strong R2 scrutiny for auth, tenant, billing and other high-risk changes.

## 10. Approved actions/deviations

**None yet.** Populate upon separate Founder approval; do not treat this proposed draft as completed formal adoption.

## 11. Framework lessons

No change to FEF requested. Potential lesson for later evaluation: projects with product-first staged authority can map neatly to FEF without creating another programme, provided risk-tiered review and actual deployment evidence are preserved. **Status: observed, not submitted to Framework Evolution.**

## 12. Current alignment and next action

**FEF-02 disposition candidate: PARTIALLY ALIGNED, ready for Founder review of the single-record approach and bounded actions.** FEF adoption is not yet formally confirmed; Stage 5 remains in progress, Stage 6 not started. After Founder disposition, complete FEF-03 engineering governance preparation and FEF-04/05 gates before Stage 5 readiness review.

## 13. Review triggers

Material revision of FEF baseline; separately initiated Stage 6; major change to PEWA architecture or approved product requirements; material audit finding or new Miledge reserved authority affecting PEWA; Founder-directed reassessment. Routine non-blocking documentation edits do not require repeated alignment cycles.
