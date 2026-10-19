# PEWA-S4-A03 — Application and Service Architecture Options

**Status:** DRAFT — FOUNDER REVIEW; NOT APPROVED  
**Date:** 18 October 2026  
**Authority:** Stage 3 closed baseline, approved [A01](PEWA-S4-A01-Architecture-Drivers-and-Capability-Decomposition.md) and [A02](PEWA-S4-A02-Domain-and-Data-Authority-Architecture.md), including Founder's 18 October clarification: **unit depletion never removes an active subscription's menu visibility, organic discovery or manual engagement; only new structured ordering becomes unavailable**.  
**Scope:** Compare application/service decomposition patterns and propose a preferred architectural direction. No code, deployment, vendor selection, database selection, identity-provider selection or engineering authorisation.

## 1. Decision context

PEWA needs an economical, dependable public web product with business workspace, protected guest access, occasional structured orders, acceptance-based consumption, purchased exposure and bounded operator tools. Logical boundaries in A02 do not imply physical microservices. The difficult consistency boundary is **business acceptance together with one eligible order-unit consumption**, under retries, multi-actor races and month boundaries. Public browsing and organic search can use read-optimised projections, but must never disclose protected content.

**Critical independent commercial dimensions:** active monthly base subscription controls eligibility to keep the menu published/searchable and manual contact; order consumption balance/permissions control *new order admission only*. Depleting 200 included and any eligible top-up units does **not** take the menu offline. Previously admitted commitments have separate bounded recovery rules; the ten recoverable units cannot be treated as an unlimited refill or menu renewal.

## 2. Alternatives

| Criterion | Option A — Modular monolith | Option B — Early service decomposition | Option C — Functions-first independent backends |
|---|---|---|---|
| Ownership boundaries | Internal modules with explicit interfaces and shared transactional consistency where needed | Independent services with explicit network contracts | Multiple independently deployed functions and managed integrations |
| Acceptance + usage atomicity | More straightforward within a cohesive transactional boundary | Cross-service coordination, idempotency and compensation need careful proof | Retries/partial failures across functions must be actively constrained |
| Public traffic isolation | Cache/projection/delivery boundaries can scale independently without business services split | Native separation but higher operational surface | Managed burst capacity, varying request-coldness/limits |
| Small-team delivery cost | Lower initial operations/observability burden | Higher deployments, runbooks, version coordination | Lower server maintenance but elevated integration/coupling risks |
| Data-authority independence | Enforced by module contracts, tests and ownership rules | Strong logical enforcement if integration is correct | Strong only if each function respects ownership; risks fragmented truth |
| Growth/reversibility | Modules can later extract behind stable interfaces | Explicit service boundary, but early operational lock-in | Migration effort depends on managed-service coupling |
| PEWA fit now | **Best default candidate** | Not justified without evidence of separate scale/regulatory need | Possible for selected edge/background workloads, weak as default ownership model |

**Proposed A03 preference: Option A — Modular monolith, with deliberate external read/delivery projections and optional isolated background processing.** This is an application-structure recommendation, not a framework, hosting, datastore or cloud decision. Distinct needs may later justify separate deployments, subject to evidence.

## 3. Proposed logical runtime responsibilities

**Core authoritative application:** organisation and business roles; menu authoring/publication authority; submitted request and authorised business decisions; accepted-order consumption, included/purchased/recoverable balances; campaign eligibility and exposure accounting decisions; scoped operator cases and audit. Modules own their rules even if initially sharing a process and durable transactional store.

**Public read/delivery:** stable business-menu destinations and optional installable web access; intentionally public menu snapshots; eligibility-aware organic Directory; PEWA Home favourites/recents (privacy separated); labelled sponsored content. Public projections should be efficient but always fail closed where audience restrictions are uncertain.

**Background/derived work:** public index updates, customer-facing operational inbox updates, optional consented push, campaign aggregate reporting and media processing—none may independently decide merchant acceptance or mint consumption units.

**External conditional dependencies:** optional Miledge shared WhatsApp adapter, permitted payment rail for *business-to-PEWA* subscriptions/top-ups/promotions, and potential Miledge media guidance. No external rail is allowed to be authoritative for food order acceptance, guest-private content or PEWA consumption meaning.

## 4. Core application interaction contracts

1. **Menu publishing:** authorised publisher approves a scoped menu revision; the authoritative publication state changes; public/read/search projections converge under a fail-closed eligibility guard. Public QR URL remains stable while eligibility can change.
2. **Structured submission:** validate active subscription, enabled context and new-admission capacity; preserve immutable submitted terms and record one Submitted event, not Accepted. No customer food payment processing is required.
3. **Acceptance and unit consumption:** authorised business action claims the still-Pending request, checks available current included units, purchased units, then permitted bounded recoverable liability for a previously admitted request; yields exactly one accepted event plus its eligible usage event, or a truthful rejection. Retry of the same acceptance cannot duplicate charge.
4. **Customer withdrawal versus staff acceptance:** concurrent actions must have one authoritative ordering/decision. Inconsistent independently committed outcomes are unacceptable.
5. **Monthly renewal:** one eligible business-to-PEWA renewal creates exactly one new 200-unit monthly allocation; previous unused included units expire at boundary. Purchased top-ups carry under disclosed validity; ten-unit debt is not reset by renewal.
6. **Exhausted consumption:** ordering controls and **new** submissions are unavailable; menus, eligible organic discovery and manual contact remain available throughout the active subscription. The customer sees “ordering currently unavailable,” not “business closed.”
7. **Commercial suspension:** after governed base-subscription grace, restrict new public listing/engagement; preserve saved business content, lawful order history and bounded earlier commitments. This is distinct from unit exhaustion.
8. **Sponsored presentation:** sponsored eligible public offer can appear on Home; only qualified visible opportunity-to-see events may consume purchased exposure after approved validity/deduplication rules; none influence organic rank.
9. **Protected hotel guest access:** audience conditions govern reads independent of URLs or guessed order references; public projections categorically exclude restricted material.
10. **Optional channel failure:** public web, normal manual contact and protected web order-status records remain functional when WhatsApp or push providers are unavailable.

## 5. Architecture risks and mitigations to evaluate

| Risk | Required design response, not prescribed technology |
|---|---|
| Monolith becomes tangled | Enforce explicit module ownership, interface contracts, dependency directions and domain-level tests |
| Acceptance billed twice after retry | Atomic or equivalently proven acceptance/consumption coupling, immutable event identity, idempotency |
| Last recoverable unit overspent | Serialisable/controlled decision over organisation allowance with honest failure outcomes |
| Stale public read projection leaks hotel content | Authoritative eligibility check/fail-closed public access, targeted invalidation and no protected data in public index |
| Public demand harms order-decision reliability | Cache/read scaling and rate/isolation policy independent of authoritative writes |
| Business unit balance misread as subscription status | Distinct subscription eligibility and order-admission decision boundaries, tested exhaust scenarios |
| Provider lock-in | Portable core domain, replaceable adapters, documented data/export path and vendor-specific dependency isolation |
| PWA or WhatsApp becomes mandatory inadvertently | Contract tests for full web-only customer/biz journeys |
| Operator privilege leakage | Server-authoritative scoped checks and auditable exceptional actions |
| Ad impression overcount | Governed viewability and invalid/repeat treatment, evidence-backed correction and separate organic search |

## 6. Decision gates and proposed proof obligations

**A03-FD1 — Architecture shape:** Prefer modular monolith as initial logical application architecture, unless a separately justified service-extraction driver is evidenced. No prescribed deploy shape.

**A03-FD2 — Core consistency:** Merchant acceptance and eligible consumption must be reconciled as one domain decision with reliable retry/concurrency semantics. Do not allow an independently eventual charge after an unproven acceptance.

**A03-FD3 — Read delivery separation:** Public menus and Directory may use projections, caching and scalable read delivery, but protected/unpublished content fails closed and public discoverability respects publication/eligibility.

**A03-FD4 — Commercial independence:** Explicitly separate current subscription listing eligibility from order admission/consumption: exhausted units disable **new structured ordering only**. Active menu browsing/manual contact remains unaffected.

**A03-FD5 — Provider-neutrality:** Select no database, auth, cloud runtime, queue, messaging provider or hosted architecture in A03. Evaluate technologies later against these constraints and the applicable Miledge architecture guidance.

**A03-FD6 — Extraction criteria:** A future split requires demonstrated independent scaling, availability, team ownership, compliance or workload isolation benefit outweighing coordination cost; logical A02 modules alone are insufficient justification.

## 7. Handover to A04–A08

- **A04:** threat models, multitenant scopes, guest/protected access and operator privileges.
- **A05:** public publication projection, search, multilingual content and media.
- **A06:** acceptance/unit concurrency, top-ups, renewals, recoverable debt and qualified exposure accounting.
- **A07:** independent web and optional shared WhatsApp/push adapter boundaries.
- **A08:** infrastructure/runtime, datastore, portability, observability, cost and migration decision comparisons after required architectural evidence.

**Requested Founder disposition:** Approve or adjust A03-FD1–FD6. These recommendations select a conceptual application structure only, not a technology/provider nor an engineering work package. **Stage 4 IN PROGRESS; Stages 5–6 NOT STARTED.**
