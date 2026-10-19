# PEWA-S4-A01 — Architecture Drivers and Capability Decomposition

**Status:** DRAFT — FOUNDER REVIEW; NOT APPROVED  
**Date:** 18 October 2026  
**Programme:** [Stage 4 Architecture Programme](PEWA-S4-ARCH-PROGRAMME.md), A01.  
**Authority:** Stage 3 Founder closure and the 314 approved R01–R08 requirements; 41 approved COM/ORD/BMP/CPN/POP policy directions. Foundation research is subordinate where later Founder-approved decisions supersede it.  
**Boundary:** Architecture *drivers, capability ownership and evaluation questions* only. This does not select technology, deployment, authentication vendor, database, provider, components, schemas or engineering work.

## 1. Architecture objective

Define a system structure that can reliably publish business-controlled menus, let customers browse without an account, optionally submit structured requests, respect attributed business acceptance, account accurately for subscriptions and exposure, and protect customer/business data, while keeping PEWA independent of WhatsApp and unrelated Miledge provider choices.

The architecture must favour a coherent, economically viable initial service and future capability expansion without overbuilding. It must preserve portable domain authority and avoid premature coupling of order processing, content search, guest access, billing and advertising.

## 2. Architectural drivers (ranked, provisional)

| ID | Driver | Why it matters | Architecture acceptance / evidence |
|---|---|---|---|
| ADRIV-01 | **Authoritative commercial and order integrity** | Only valid business acceptance counts one unit; balances include monthly 200, purchased units, ten recoverable debt; retries, corrections and concurrent actions must not double-charge | Show single authoritative acceptance event, idempotent processing, atomic/consistent unit eligibility, audit correction and race/failure outcomes |
| ADRIV-02 | **Protected cross-tenant and guest access** | Multi-brand organisations, scoped staff, protected hotel menus, guest status without mandatory PEWA account; public/hidden content must never leak | Explicit authorisation boundaries and attack cases for every private read/change |
| ADRIV-03 | **Independent public web access** | Direct QR/URLs and Home/Directory must work without WhatsApp, install, customer registration or push | Demonstrate full public browse/manual path and web order path with optional channels unavailable |
| ADRIV-04 | **Business-owned menu truth and publication** | Multi-menu reuse, scheduled availability, price/currency and content snapshots; seller owns claims, PEWA displays them honestly | Versioned effective publication and order snapshot; context-aware price/time and no silent cross-menu propagation |
| ADRIV-05 | **Subscription continuity and recoverability** | Base listing subscription distinct from acceptance units; overdrawn bounded prior commitments must not vanish | State transitions for renewal/grace/suspension, prepaid versus recoverable usage and legitimate pending status |
| ADRIV-06 | **Discovery without merchant taxonomy lock-in** | Local-language/custom food names, business categories, optional shared vocabulary and geographical service coverage | Relevant items searchable even without standard class; protected/private menus absent from public indexing |
| ADRIV-07 | **Independent organic discovery vs qualified paid exposure** | Paid Featured Offers buy valid on-screen opportunities, not organic rank or offscreen placement | Separation of placement, organic relevance, qualifying impression evidence and corrections |
| ADRIV-08 | **Observability, attribution and bounded intervention** | PEWA must distinguish own platform observations from seller claims and exceptional operator decisions | Trace who submitted/accepted/cancelled/altered, correction reason and appropriate scoped operator oversight |
| ADRIV-09 | **Privacy and lawful data lifecycle** | Customer accounts optional, local recents/favourites, consent separation, order recovery, region-specific law unresolved | Data-class minimisation, purpose, retention gates, correction/deletion and non-disclosure paths |
| ADRIV-10 | **Portability and cost discipline** | Affordable standard subscription with 200 included units requires efficient operations; avoid unnecessary service/provider complexity | Cost drivers, reversible coupling, capacity growth and failure isolation documented before choice |

These drivers are ranked by impact on the core business/customer promise rather than as quantitative service-level targets. **No uptime, latency, throughput, data residency or cost ceiling is yet fixed.**

## 3. Capability decomposition and ownership

| ID | Capability | PEWA-owned responsibilities | Boundary / other owner |
|---|---|---|---|
| ACAP-01 | Organisation, legitimacy and roles | Organisation, related brands/outlets, context, business scoped permissions, platform eligibility | Verification law, business legal status and Miledge shared identity policy not presumed |
| ACAP-02 | Menu catalogue/publication | Offerings, modifiers, prices/currencies, business collections, visibility, contextual availability, public version history | Food content claims from business; technical storage TBD |
| ACAP-03 | Public menu experience | Stable web/QR access, public/protected surface distinction, current business menu presentation | PWA optional, business contact destinations external |
| ACAP-04 | Home, Directory and search | Recent/favourite navigation, organic search, geography and optional classification mappings | No forced English/menu taxonomy; personal recents not merchant data |
| ACAP-05 | Manual customer engagement | Configured click/contact access without order state | Conversation and merchant sale external; WhatsApp shared adapter conditional |
| ACAP-06 | Structured request and order lifecycle | Submitted request, snapshot, business action, withdrawals, amendments, statuses and protected customer read | Merchant accepts/prepares/fulfils; no PEWA customer food payments |
| ACAP-07 | Subscription and consumption | 200 per monthly subscription, top-ups, 10-unit recovery/debt, accepted-order charging, lapse/reactivation | Real charges/taxes/payment provider TBD |
| ACAP-08 | Paid Featured Offers | Campaign eligibility, clearly sponsored Home placement, qualified impression counts, credits/corrections | Never controls organic rank; food sales conversion not guaranteed |
| ACAP-09 | Guest identity, access and preferences | Optional account, protected hotel audience, order return/recovery, consents and local preferences | Identity technical provider undecided; legal retention open |
| ACAP-10 | Operational notification | Protected web records; optional opt-in push; no outbound WhatsApp status by default | Push/provider/channel infrastructure TBD |
| ACAP-11 | Platform support, moderation and audit | Eligibility restrictions, appeals, complaint cases, billing/exposure corrections, scoped operator authority | Cannot make routine merchant order decisions; full Console UX later |
| ACAP-12 | Cross-cutting delivery, evidence and security | Availability, monitoring, incident handling, backups, permission checks, evidence, migration/reversibility | Infrastructure/provider selection future A03–A08 |

**Decomposition is a logical map, not a mandate for twelve microservices or separate databases.** Capability boundaries can be implemented together if consistency, ownership and future evolution are maintained.

## 4. Most consequential event/data consistency questions

1. **Accepted-order charging:** How to prove a single accepted transition and one consumption event even when device retries, concurrent staff, customer withdrawal or connection failures occur? What happens if allowance runs out between submit and acceptance?
2. **Month boundary:** How to atomically issue 200 units on valid renewal, expire previous included units, preserve top-ups, prevent new admissions during suspension and preserve already-admitted pending requests under ten recoverable continuity units?
3. **Menu snapshot:** How are business-authored price, modifiers, currency, service context, requested time and consent meaning frozen as submitted even when a shared item or current availability is edited afterward?
4. **Public projection:** How does publication/unpublication change search and Home eligibility without leaking protected hotel offerings or stale public/private state?
5. **Qualified exposure:** What event counts when a paid placement becomes visible, without inventing viewability/deduplication values before Founder policy approval?
6. **Identity boundary:** What verified right is required to view order status versus cancel/amend it without mandating a universal PEWA account?
7. **Operator actions:** Which exceptions may operators correct, and how are the original event and correction both preserved without giving operators merchant acceptance authority?
8. **WhatsApp failure:** How does every critical user path operate when the shared adapter is absent, refused or delayed?

## 5. Architecture quality attributes and tests

**Integrity:** no double acceptance/charge; no money-bearing entitlement silently created or destroyed.  
**Isolation:** deny cross-organisation disclosure and access to hidden guest menus; prevent unsafe cross-role grants.  
**Truthfulness:** no inferred Ready, paid meal, delivery, allergen safety, translated ingredient or ad conversion.  
**Availability:** business-first direct menu and independent web status remain usable without optional integrations.  
**Correctness under change:** old accepted orders reflect agreed snapshots, not retroactive menu/current-price revisions.  
**Evolvability:** add legitimate brands/menus and future French UI or new categories without migrating business-authored wording.  
**Operability:** inspect a disputed unit, campaign impression or protected-access issue with attributable, privacy-scoped evidence.  
**Affordability:** evaluate realistic hosting, media, search, transactional processing and third-party messaging expense before selection.  
**Reversibility:** identify migration surfaces, contractual lock-in and split points before finalising storage/runtime/vendor.

## 6. Architecture decision inventory and subsequent allocation

| Decision | Lead workstream | Status / dependency |
|---|---|---|
| Domain entities, invariants and write authority | A02 | Not selected; prioritise consistency of acceptance/consumption |
| Persistence and multi-tenant enforcement | A02/A03/A04 | Not selected; security and transaction constraints first |
| App decomposition and runtime | A03 | Compare modular monolith vs justified services |
| Customer/business/operator auth and guest access | A04 | Evaluate alternatives; no provider selected |
| Public projections, search, local languages and media | A05 | Optional taxonomy, privacy gates, Miledge media standards |
| Credits, renewals, ten recoverable units and impression accounting | A06 | Approved principles; exact policy/measurement unresolved |
| WhatsApp adapter and notification boundaries | A07 | Miledge authority; web independently functional |
| Cloud delivery, data location, backup, operational cost | A08 | Evaluate with Miledge guidance; no provider selected |

## 7. Founder decisions requested for A01

**A01-FD1:** Approve these ranked drivers as the architecture priorities, allowing A02–A08 to revisit ranking if concrete evidence changes it.  
**A01-FD2:** Approve ACAP-01–12 as **logical** ownership boundaries, explicitly *not* physical service boundaries.  
**A01-FD3:** Confirm one business acceptance/one unit, guest privacy and independent web as hard architecture invariants before any stack recommendation.  
**A01-FD4:** Carry unresolved detailed policy/operating numbers to their proper Founder/legal/Miledge decision gates rather than inventing them in architecture.

**A01 output request:** Approve, revise or reject the drivers/decomposition through this PR. Once reviewed, proceed to **A02 Domain and Data Authority Architecture** in a separate Founder-reviewed document. Stage 4 stays IN PROGRESS; Stages 5–6 remain NOT STARTED.
