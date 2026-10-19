# PEWA-S3-REC-001 — Consolidated Requirements Reconciliation and Founder Review

**Status:** Founder-reviewed reconciliation merged via PR #27; commercial refinement PR #28 and COM-D01–D07 decision PR #29 approved and merged; Stage 3 NOT CLOSED.  
**Date:** 17 October 2026  
**Stage:** Project Home Stage 3 — Requirements Development and Approval  
**Repository authority:** Product Constitution, Founder-approved Stage 2 Product Definition and closure, and merged Stage 3 R01–R08 documents. Foundation research (including F02 R01–R04 classification work and F05 experience studies) remains informative; later Founder decisions supersede inconsistent earlier proposals.  
**Purpose:** Reconcile eight approved workstream drafts for coverage, boundary consistency, consequential gaps and unresolved policy decisions. This document neither changes the 311 requirements nor asserts full policy or legal readiness.

## 1. Completed review evidence

| Workstream | Scope | Requirements | Approved merge PR |
|---|---|---:|---|
| [R01](../02-requirements/PEWA-S3-R01-Business-Foundation-Requirements.md) | Business onboarding, organisation, brands, permissions | 28 | [#19](https://github.com/Fkenogo/pewa/pull/19) |
| [R02](../02-requirements/PEWA-S3-R02-Menu-and-Offering-Management-Requirements.md) | Menus, offering identity, price, classification, availability, publication | 42 | [#20](https://github.com/Fkenogo/pewa/pull/20) |
| [R03](../02-requirements/PEWA-S3-R03-Customer-Experience-Home-Directory-and-Search-Requirements.md) | Business menu access, Home, Directory, search, languages | 39 | [#21](https://github.com/Fkenogo/pewa/pull/21) |
| [R04](../02-requirements/PEWA-S3-R04-Manual-Engagement-and-Structured-Ordering-Requirements.md) | Manual contact, order submission, business outcomes, exceptions | 43 | [#22](https://github.com/Fkenogo/pewa/pull/22) |
| [R05](../02-requirements/PEWA-S3-R05-Subscriptions-Consumption-and-Commercial-Entitlements-Requirements.md) | Subscriptions, accepted-order consumption, continuity | 40 | [#23](https://github.com/Fkenogo/pewa/pull/23) |
| [R06](../02-requirements/PEWA-S3-R06-Featured-Offers-and-Campaign-Management-Requirements.md) | Paid features, delivered exposure, campaign management | 38 | [#24](https://github.com/Fkenogo/pewa/pull/24) |
| [R07](../02-requirements/PEWA-S3-R07-Customer-Protection-Identity-Notifications-and-Privacy-Requirements.md) | Protected access, customer identity, notifications, privacy | 39 | [#25](https://github.com/Fkenogo/pewa/pull/25) |
| [R08](../02-requirements/PEWA-S3-R08-Platform-Administration-and-Operator-Console-Requirements.md) | Eligibility, operator oversight, billing correction, complaints | 42 | [#26](https://github.com/Fkenogo/pewa/pull/26) |
| **Total** | | **311** | **All merged** |

This is **workstream approval**, not evidence that every future operating policy, technical choice, regulatory obligation or commercial amount has been approved.

## 2. Cross-workstream consistency

| Topic | Reconciled position | Principal references |
|---|---|---|
| Business supplier versus PEWA | Business authors prices, availability, food and acceptance/Ready declarations; PEWA owns truthful presentation, integrity, consent/access and accountable records. No PEWA merchant/POS/logistics role. | R01-006, R02-013/019, R04-016–019, R08-001–005 |
| Web independence | A public business menu works by direct URL/QR without mandatory app, account or WhatsApp. Miledge WhatsApp Adapter is conditional and not selected for implementation. | R02-005, R03-001, R04-041, R07-001 |
| Public/protected | Business intentionally publishes public content; hotel controls protected guest-menu audiences; guest remains customer without universal PEWA guest account; protected content is never organic/paid public inventory. | R01-016/017, R02-030, R03-006/025, R06-016, R07-005–010 |
| Business categories/search | Categorisation primarily helps customers find food, drinks and businesses. Merchants retain custom categories, collections, local names, language and presentation. Historic F02 34-entry classification is optional reference, not a mandatory schema or fixed catalogue. | R02-010/035–042, R03-017–020/035/038 |
| Interface and business language | PEWA platform navigation English-first; menu names/descriptions/categories may use any language, including mixed vernacular, Swahili, French or English. French navigation is optional future prioritisation. No unverified auto-translation or food-safety inference. | R03-035/037–039, R06-018, R07-039 |
| Manual versus structured | Manual contact need not create PEWA order. Structured requires entitlement **and** business enablement; submitted is not accepted; silence is not acceptance; Ready optional and business-declared. | R03-004/005, R04-001–005/013/016–019 |
| Order changes | Preacceptance withdrawal, postacceptance cancellation requests and material amendments have distinct meanings; history and attributable consent preserved. | R04-023–029, R07-013 |
| Subscription vs ordering balance | Organisation-level base publication is independent of optional accepted-order credits. Empty ordering units block relevant **new orders** but cannot alone unpublish active paid menu; base lapse after grace can restrict new public visibility while retaining content and legitimate existing commitments. | R04-033–037, R05-003/010–013/020–024 |
| Ten-unit continuity | Founder-approved **10 recoverable units per organisation**, not free units; acceptance consumes one eligible unit and incurs visible debt when recoverable. Exact reset/recovery/concurrency remains unresolved. | R04-031–037, R05-015–027 |
| Promotion versus organic | Paid Featured Offers separate from own-menu promotions, subscriptions and accepted-order usage; organic Directory unaffected by payments. Qualified on-screen opportunity to see, not schedule/off-screen load or conversion, drives impression accounting. | R03-013/026/027, R05-034–037, R06-001–004/019–025 |
| Notifications and privacy | Protected web status/inbox primary; push voluntary; outbound WhatsApp status off by default; marketing separately consented; recents/favourites private. | R03-029–032, R04-038–043, R07-017–029 |
| Operator boundary | Operator casework, eligibility, correction, audit and privacy functions are authorised but cannot routinely rewrite merchant commercial facts or make merchant order decisions. Console capability defined now, complete experience assembled last. | R01-028, R07-038, R08-001–006/041 |

**Disposition of broad reconciliation:** No obvious foundational product-level incompatibility requiring reopening the Stage 2 Product Definition was found in the eight merged requirement documents. The policy matters below, however, are material and should not be mistaken for approved operating terms.

## 3. Material outstanding policies and proposed decision ownership

| ID | Unresolved question / decision required | Proposed authority and required timing |
|---|---|---|
| S3-P01 | Minimum organisation identity and publication fields; genuine multi-brand proof/transfer and notice/appeal | Founder product + appropriate legal input; before final eligibility implementation acceptance |
| S3-P02 | Shared-content change propagation; permission to publish versus edit; overlapping availability schedule/manual override precedence | Founder product policy before detailed experience/architecture contract is frozen |
| S3-P03 | Cross-context currency selection, mixed-currency user choices and one-currency order separation | Founder product policy before ordering implementation |
| S3-P04 | Pending order expiry, time windows, conflict handling, after-acceptance business cancellation, amendments and consent deadlines | Founder product policy before implementing order lifecycle |
| S3-P05 | **Ten-unit recovery**: distinguish from the proposed 200 monthly included units and purchased top-ups; admission window, last-unit concurrency, recovery, reset, debt treatment and bounded existing-order resolution | Founder commercial/product policy before production charging |
| S3-P06 | Proposed single standard subscription with 200 monthly included units, purchase of additional bundles, and customised Enterprise terms (see PR #28); exact local subscription and top-up prices, billing/grace/renewal, unit rollover, tax and FX remain open; US$10/month and US$10 for 200 top-up units are illustrative | Founder commercial decision with legal/tax advice as needed before customers are charged |
| S3-P07 | Sponsored surface/package, delivered-view qualification, invalid/repeated impressions, targeting, rates, pause, undelivered credit/expiry | Founder commercial/product/privacy decision before paid campaign release |
| S3-P08 | Hotel guest eligibility, privacy-safe access/recovery, order-specific read/write proof, optional identity and business ownership recovery | Founder product/privacy authority before protected access implementation |
| S3-P09 | Data-class retention, lawful erasure/correction, rights, breach response, age obligations and relevant national/cross-border rules | Competent legal/privacy authority before live personal-data processing |
| S3-P10 | Customer notifications, optional push/privacy-safe previews, operator communications and consent wording; outbound WhatsApp remains off | Founder product/privacy policy before channel release |
| S3-P11 | Food, ingredient/allergen, alcohol-status, free-from/certification claim declaration versus substantiation | Competent product/legal policy before customer-facing safety assertions |
| S3-P12 | Operator roles, privileged case access, commercial correction review, fraud thresholds, appeals and recovery | Founder/operator product policy plus legal input before Console operation |
| S3-P13 | Organic search relevance, mixed/local-language synonyms, complaint/correction and fairness policy without mandatory mapping | Founder product policy before ranking/indexing behaviour fixed |
| S3-P14 | Conditional Miledge WhatsApp Adapter readiness, provider contracts and shared-service boundaries | Miledge reserved authority/Stage 4, only when evidence available |

**Proposed handling:** No placeholder value (number, time, legal requirement, verification mechanism or rate) becomes binding by approving this review. Resolve P01–P13 in bounded Founder decisions and the appropriate requirement amendments **before the relevant capability is approved for engineering or release**. Decisions needed to make Stage 3 requirements sufficiently complete should be concluded as part of Stage 3, rather than deferred without authority. Technical design and Miledge-reserved shared-service matters remain Stage 4 or their legitimate authority's responsibility.

## 4. Founder commercial-model refinement — 18 October 2026

The Founder identified unnecessary selection confusion between a flat subscription and separate unit-based ordering. **Proposed correction:** one standard monthly subscription provides public listing and **200 accepted-order units** for every organisation. Menu-only businesses need not use the included units. Structured ordering still requires explicit business enablement. If included units run out, the organisation can buy **additional unit bundles**, illustratively priced at US$0.05/unit in US$10 bundles (200 units), while the monthly subscription remains required for listing. Enterprise arrangements for larger organisations may use negotiated terms. **All numbers are suggestions, not final approved rates.** The preexisting 10 recoverable units remain a separate bounded continuity/debt rule, not the 200-unit monthly allocation.\n\n**Decision record:** [PR #28](https://github.com/Fkenogo/pewa/pull/28) approved the standard-plus-included-units structure, and [PR #29](https://github.com/Fkenogo/pewa/pull/29) approved the recommended COM-D01–D07 policy directions. Their detailed effect is recorded in R05 and COM-001. The old split between a separate paid ordering plan and the base listing plan is superseded: structured ordering is optionally enabled within an active standard subscription, using included, purchased and bounded recoverable units. Review residual legacy wording when requirements are next amended. Key remaining rules include unused included-unit rollover, renewal assignment, top-up expiry, recovery debt offset, Enterprise parity, grace and whether new order admission is blocked while units are exhausted.\n\n## 5. Targeted corrections and documentation hygiene

- **R02 open-decision formatting:** the current R02 §9 text includes literal backslash-n sequences joining entries 6–8. This is a formatting defect, not a policy disagreement. Correct in a narrowly scoped subsequent edit or with Founder authorisation to fold into this reconciliation.
- **R07/R08 source traceability:** numbered requirements cite broad Stage 2 and R01–R07 boundaries rather than item-by-item pinpoint references. This supports overview but is not yet a full bi-directional traceability matrix. Stage 3 should adopt finer attribution before formal requirements-baseline closure, without inventing new product policy.
- **Acceptance conditions:** existing per-requirement examples are illustrative behavioural checks, not complete test procedures or technical acceptance cases. Do not advertise them as implementation-ready verification without later decomposition.
- **Open issue status:** R01–R08 contain unresolved policies. Founder approval of a workstream accepts its defined baseline and acknowledged open issues; it should not be taken as resolution of those open issues.
- **Foundation reconciliation:** earlier F02 R01–R04 research and related foundation work are information sources. Where conflict exists, the approved Constitution and later Founder Product Definition govern; classification is for findability while merchants retain language and category freedom.

## 6. Proposed next steps and Stage 3 gate

1. Founder reviews this reconciliation, validates the cross-workstream consistency statement and approves or corrects the prioritisation of P01–P14.
2. Address the specific R02 formatting defect and strengthen traceability in a narrow GitHub-reviewed correction as needed.
3. Resolve the subset of P01–P13 essential to complete a coherent normative Stage 3 baseline; explicitly allocate remaining detailed policy/legal approvals to their valid authority and confirm they are not silently approved for engineering.
4. Prepare separate Stage 3 Founder disposition and closure **only after** the above have been reconciled and approved. No automatic Stage 4 start.

**Stage 3: IN PROGRESS. Stages 4–6: NOT STARTED.** This review is neither a closure record nor an architecture/engineering authorisation.


## 7. Order-policy disposition and legal terms handover — 18 October 2026

Founder approved the recommended ORD-D01–D08 policies in [PR #31](https://github.com/Fkenogo/pewa/pull/31), merged as `ba05dad69318ba8d7245a2c9475b79a77c0a5562`. These directions govern Pending expiry, preacceptance withdrawal/decline, attributable postacceptance cancellations, customer requests, bilateral material amendment consent, factual corrections, order terms snapshots, and continuity of previously admitted commitments. Their exact deadlines, remedies and legal wording remain open for competent review. **Founder explicitly directed integration into PEWA Terms and Conditions and platform policies**, rather than treating the requirements as ready-to-publish legal text. See [ORD-001](PEWA-S3-ORD-001-Order-Lifecycle-and-Exception-Policy-Decision-Brief.md) §6. Stage 3 remains open and this is not a Stage 4 start.\n

## 8. Business and menu policy disposition — 18 October 2026

Founder approved BMP-D01–D08 in [PR #33](https://github.com/Fkenogo/pewa/pull/33), merge `d5b29194bbfac2c1be7a36555438315cc16313c3`. These directions establish proportional business verification, legitimately related brands and delivery-only coverage, separated publish authority, minimal authentic item disclosures, optional classification with language freedom, explicit shared-item scope confirmation, specific-over-general availability overrides and bounded operator enforcement with appeals. Detailed legal verification duties, deadline values and availability precedence edge cases remain open for appropriate authority. [BMP-001](PEWA-S3-BMP-001-Business-Eligibility-and-Menu-Publication-Policy-Brief.md) is the approved decision record. Terms and Conditions handover remains required.\n

## 9. Guest protection and notifications disposition — 18 October 2026

Founder approved the CPN-D01–D09 recommended directions in [PR #35](https://github.com/Fkenogo/pewa/pull/35) (merge `7f17dc31a79be4479f6a238fcef3c5eace170564`). Protected hotel-menu eligibility remains context-scoped; account-free order-status recovery must be appropriately authorised; sensitive actions need proportional checks; web/in-app operational status remains primary; push optional; no default outbound WhatsApp status; marketing consent separate; customer data purpose-limited; reports and privacy escalations accountable. Detailed verification mechanisms and jurisdiction-specific legal/data-retention duties remain open. These product rules feed into future Terms and Conditions, privacy notice and operator policies, without themselves certifying compliance. See [CPN-001](PEWA-S3-CPN-001-Guest-Access-Privacy-and-Notification-Policy-Brief.md). Stage 3 remains open.\n

## 10. Promotion and platform oversight disposition — 18 October 2026

Founder approved POP-D01–D09 in [PR #37](https://github.com/Fkenogo/pewa/pull/37), merged `54af8bd5f9549342e3144fd2948d4dd08733f038`. They govern qualifying on-screen promotional exposure, Home placement and organic independence, business self-service, undelivered entitlement, contextual targeting without automatic behavioural retargeting, scoped operator roles, attributable oversight/appeals, honest platform reporting and complaint boundaries. See [POP-001](PEWA-S3-POP-001-Promotion-and-Operator-Oversight-Policy-Decision-Brief.md). Precise viewability thresholds, advertisement fees, package validity, legal response windows and privileged operational implementation remain open for appropriate policy/legal/architecture authority. Approved decisions inform eventual Terms and Conditions and platform policies.\n