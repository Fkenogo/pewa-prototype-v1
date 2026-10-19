# PEWA-S6-PRE-ENG-001 — Technical Decisions and Prototype-to-Engineering Handover

**Status:** FOUNDER REVIEW DRAFT — NO PROTOTYPE OR PRODUCTION ENGINEERING STARTED  
**Date:** 19 October 2026  
**Authority:** PR #66 approved and merged as `cad35baf002fb5a5e0bc90c883584befa5216196`; governing Stage 3–5 records and S6-00 through S6-00C.  
**Purpose:** One actionable pre-engineering handover, avoiding another broad architecture-review cycle.

## 1. Settled decisions

- **Product:** PEWA provides reusable multi-industry business-authored menus, discoverability, optional manual contact and structured ordering; merchant is seller/acceptance authority and PEWA is not the merchant of food.
- **Experience:** mobile-first **PWA for every role**. Business owners, administrators and staff can operate every essential workflow entirely on a phone; desktop is optional for organisation administrators. Public access requires neither app installation nor customer registration.
- **Architecture:** provider-neutral modular monolith, **Next.js App Router + TypeScript** preferred application framework direction, strong server-side authority boundaries; **PostgreSQL** preferred relational engine direction. Neither vendor nor production configuration has been selected.
- **Ordering:** only merchant acceptance consumes one attributed unit; included monthly 200, purchased carry-forward and bounded ten recoverable outstanding units remain distinct. If subscription active but consumption depleted, public menus, organic Directory/Home access and manual contact remain; new structured orders stop.
- **Channels and media:** browser/QR independently functional; Miledge WhatsApp adapter is a conditional shared-service direction, not verified operational. Merchant is responsible for image rights and content; private content/media must not enter public caches or indexes.
- **Governance:** FEF-EWPCS-001 and AMD-001 apply to authorised future packages, with risk-classified R0/R1/R2 and exact-head approval/merge discipline.

## 2. Mandatory sequence and independent gates

1. **Technical research and options:** Allowed as bounded documentary work; technology choice does not entitle engineering execution.
2. **Founder issues the separate prototype initiation prompt immediately before engineering.** Until then, **no prototype building, visual implementation or production code**.
3. **Prototype with mock data:** Demonstrate all-role mobile-first PWA journeys, fully functional mobile business administration, optional desktop administration, public menu and discovery, manual contact, protected hotel flows and account-free structured ordering; do not claim real backend truth.
4. **Founder iterative review/refinement:** Continue until explicitly satisfactory. **Approve and freeze an Experience Reference**, with a documented reference/version and what is binding versus illustrative.
5. **Implementation entry:** Verify actual PEWA private-repo CI/billing/branch constraints, development toolchain support, database/identity/security/provider decisions to the degree required for the first slice, and relevant FEF risk review. Authorise a specific bounded engineering work package separately.
6. **Build product truth through the frozen experience reference:** Modular domain engine and web/PWA experiences assembled together with acceptance/security tests; prototype never silently becomes authoritative backend.
7. **External data, money, pilot and production:** Separate G2/G3 security/commercial/legal/release permission.

**Stop:** No S6-01 production build may begin before steps 2–5 are satisfied. A technical decision or merged governance PR never bypasses that sequence.

## 3. Decision backlog — only substantive remaining items

| Decision | When truly needed | Minimum evidence and owner |
|---|---|---|
| Exact supported Next.js/Node/TypeScript and PWA/service-worker toolchain | Before first executable scaffold | Current security/support, mobile UX, safe caching strategy; PEWA technical authority |
| Managed PostgreSQL host and region | Before persisted domain transactions that depend on it | Pricing at small-merchant scale, ACID acceptance/ledger concurrency test design, pooling, backup/restore/export, residency; Founder technical choice |
| PEWA account auth | Before real business tenants/roles | Credentials and recovery, tenant/role owned by PEWA, no mandatory guest account, costs and revocation; R2 review |
| Repo protection and hosted CI | Before relying on hosted verification or merge automation | Actual GitHub private Actions/billing, workflows, branch/rulesets; separate approved settings change |
| Media/storage provider | Before image upload implementation | Miledge MV-206 candidate evaluation and rights/takedown, protected asset delivery and cost |
| Ordering/credits fine semantics | Before the relevant order/consumption package | Founder settlement, timeouts/cancellation, race rules; no agent-made product policy |
| Miledge WhatsApp adapter | Before integration | Miledge verified approved contract/operational readiness and PEWA authorisation |
| Legal/real charging/release | Before live data or paid features | G1–G3 policy, privacy, tax, terms, recovery and security evidence |

Avoid using unresolved unrelated features as blanket reasons to defer an otherwise independent authorised basic-menu capability.

## 4. Prototype initiation brief: ready for the Founder's later prompt

**Working title:** PEWA Mobile-first PWA Experience Reference, v0 prototype candidate.

**Role journeys:** customer browse/search/manual contact; merchant owner organisation→brands→venues→menu/item/modifier→publish→orders and unit balances; staff scoped operations; organisation admin desktop **and fully equivalent essential mobile**; account-free guest protected hotel access. Include zero-unit state without menu unpublishing, public/private distinctions, loading/offline/network feedback, and labelled sponsored content.

**Acceptance:** every essential admin function demonstrably navigable on phone; responsive desktop option; coherent flow before and after order submission and merchant acceptance; no mandatory install/push/WhatsApp/customer account; merchant authored any-language content; private assets not publicly visible; accurate consent/availability messaging.

**Start condition:** explicit **new Founder prototype prompt**. Prototype must be refined to satisfaction and separately frozen before any production-engineering authorisation. **Do not create prototype, UI mocks or code from this brief alone.**

## 5. Recommended Founder disposition

**PREENG-FD1:** Accept this handover as the consolidated state after approval of PR #66; stop repeating framework comparisons.

**PREENG-FD2:** Preserve technology candidates and evidence obligations above as entry checks tied to affected work, rather than pretending to have verified CI, managed service pricing or transaction tests.

**PREENG-FD3:** Preserve the separate Founder prototype start, iterative refinement, explicit experience freeze and subsequent independently authorised bounded engineering package as hard sequence gates.

**PREENG-FD4:** No production implementation, hosted environment, vendor purchase, CI activation, live data or prototype execution through this PR.

**Next:** Founder may separately initiate the prototype when ready. Documentary technical decisions may be made in parallel when concrete evidence materially improves a pending choice; no further generic readiness loops are required.
