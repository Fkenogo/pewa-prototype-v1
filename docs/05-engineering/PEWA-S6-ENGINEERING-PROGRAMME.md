# PEWA-S6-ENGINEERING-PROGRAMME — Stage 6 Engineering Initiation and Execution Plan

**Status:** FOUNDER REVIEW CANDIDATE — PLANNING INITIATED; NO IMPLEMENTATION PACKAGE APPROVED  
**Date:** 19 October 2026
**Authority:** Separate Founder “proceed” following explicit approval/merge of Stage 5 closure PR #61, merge `e8f80dfd9ef5bfbe10d98e03dfc55a6c1f02cef1`.
**Scope:** Establish an evidence-led sequence of separately approved implementation packages under the current [FEF Alignment Profile](../04-fef-adoption/FEF-ALIGNMENT.md), [FEF-03 work-package discipline](../04-fef-adoption/PEWA-S5-FEF-03-Future-Engineering-Work-Package-Discipline.md) and [FEF-05 gates](../04-fef-adoption/PEWA-S5-FEF-05-Feature-Level-Decision-and-Readiness-Gates.md). **This plan does not authorise coding, accounts, payments, live customer data, provider selection or deployment.**

## 1. Delivery doctrine

Build **domain engine → business onboarding → catalogue configuration/publication → customer discovery and engagement → protected structured ordering → acceptance/consumption → paid commercial and optional messaging** in coherent validated slices. The approved mobile-first and web/QR-independent experience must be reviewed early, not left until all backend work is finished. Prototype/experience reference may be approved before substantial interface assembly, consistent with applicable Miledge experience assembly practices; do not assume a PEWA prototype already exists.

The canonical repo remains `Fkenogo/pewa`. Product truth is the 314 Stage 3 requirements/41 policy decisions and A01–A08, not inferred stack convenience. A provider-neutral modular monolith is the preferred architecture; the technical stack is unselected pending bounded evidence. Business author remains authority over menu declarations, order acceptance and fulfilment.

## 2. Proposed engineering gates and work packages

| Order | Proposed package | Outcome and dependency | Review baseline |
|---|---|---|---|
| S6-00 | **Engineering Entry and Technical Decision Proof** | Read-only/verifiable repo controls, actual CI/private-repo availability, current FEF standards, constraints, minimum app stack and transactional database/region/cost shortlist; produce explicit Founder technology choices before implementation that depends on them | R1 documentation; R2 for consequential provider/security decisions |
| S6-01 | **Executable Domain Foundation** | After S6-00 and its decisions: isolated app and test harness, tenant/business boundaries, approved catalogue domain and lifecycle, audit primitives without real payments/production services | R2 for tenant/identity authority; otherwise targeted |
| S6-02 | **Business Setup and Catalogue Configuration** | Governed multi-brand/venue/menu authoring, optional media, language freedom, scoped business roles, limited real-data use only when G2 cleared | R2 for auth/tenant/private media |
| S6-03 | **Public Web Menu and Discovery** | QR/direct links, Home/organic Directory, searchable published menus, manual contact, safely separate protected scopes; no unit spending needed to display public menus | R1, R2 where audience/cache privacy touched |
| S6-04 | **Structured Order Foundation** | Account-free customer path, immutable quote/order snapshot, business accept/decline/Ready; exact timing/cancellation and guest protection G1 decisions before relevant implementation | R2 |
| S6-05 | **Subscription and Consumption Integrity** | Exactly one attributable unit on authorised acceptance; included 200/month, purchased top-ups, bounded 10 recoverable commitments, concurrency/renewal/debt tests; full necessary commercial semantics approved first | R2 |
| S6-06 | **Commercial Operations and Promotions** | Business-to-PEWA subscription/top-up billing, sponsored Featured Offers with qualified exposure and verifiable reporting; commercial/legal/privacy decisions before implementation or activation | R2 for accounting/billing |
| S6-07 | **Optional Channels and Shared Adapter** | Notifications/consent and optional structured WhatsApp through separately verified/authorised Miledge shared adapter; web remains complete without it | R2 for trust/integration boundary |
| S6-08 | **Operational and Release Readiness** | Recoverability, privacy/legal compliance, monitoring, security review, measured performance and authorised pilot/release go/no-go | R2 |

**This ordering is a candidate decomposition, not an automatic sequence of approvals.** Packages may be split/reordered upon substantive evidence; no need for bureaucratic approval loops on minor nonblocking changes. Critical domain consistency tests should begin from the first affected executable slice, not deferred to S6-08.

## 3. Recommended first bounded next step

**S6-00 technical entry assessment only**, without changing code or account settings:
- Confirm PEWA repo `main`, clean implementation baseline, branch/review/rulesets and actual hosted CI/billing status (FEF-04 could not verify Actions status).
- Compare constrained app/runtime and managed transactional persistence options with atomic last-unit order acceptance, tenancy, data export, availability, region, total operating cost and Miledge MTAIP-001.
- Compare identity and guest token/security capabilities against A04 before choosing any provider.
- Determine whether a standalone experience reference/prototype should be Founder-reviewed as early preparation for mobile web onboarding and menu experiences.
- Identify privacy/security requirements for public vs protected menu/media and product data before testing with real merchants.
- Produce a small option/decision sheet and **one bounded implementation-package brief** for S6-01, each subject to separate Founder review and approval.

S6-00 is not permission to provision hosted environments, assume GitHub Actions works, buy accounts, initialise an unapproved stack, or implement API/database migrations.

## 4. Mandatory implementation invariants

1. **Exactly one consumed unit per authorised merchant acceptance**, not per submission/Ready/retry.
2. Active subscribed menus, eligible organic discovery and manual contact remain available when structured-order units run out; **only new structured submission is disabled**.
3. 200 monthly included units are not purchased carry-forward; bounded recoverable 10 are not recurring free consumption.
4. Guest orders protected without mandatory account; tenant/operator privilege constraints and protected hotel content/images fail closed.
5. Menu prices/modifiers/time/currency are snapshotted at order submission; business edits do not retrospectively rewrite submitted terms.
6. Business-authored text may use any language; media rights/content responsibility assigned to merchant with PEWA lawful response safeguards.
7. Paid offer exposure separate from organic ranking and only qualified, on-screen opportunities count when ad feature is authorised.
8. Browser-based PEWA works without WhatsApp/notification provider; no independent PEWA WhatsApp backend selected.
9. High-risk identity, accounting, payments, order and tenant boundaries get independent R2 review, preserving exact-head verification and Founder merge authority.
10. Provider choices require explicit fit evidence; Stage 6 initiation is not G2 pilot/G3 production launch clearance.

## 5. Founder decision requested

**S6-FD1:** Accept Stage 6 **planning initiation** and this proposed sequencing, keeping individually authorised work-package entry gates.

**S6-FD2:** Authorise next **S6-00 read-only engineering-entry and technical-options assessment**, with no code or infrastructure activation.

**S6-FD3:** Require a Founder-reviewed choice for first app/runtime, transactional persistence, tenancy/auth architecture and early experience reference before the affected implementation starts.

**S6-FD4:** Preserve all Stage 5 G0–G3 security, commercial, Miledge shared-service, consent/legal and release gates, with R0/R1/R2 review proportionate to actual risk.

**Next:** Founder review of this plan, then S6-00 documentary technical-entry assessment. No software has been implemented under this programme.
