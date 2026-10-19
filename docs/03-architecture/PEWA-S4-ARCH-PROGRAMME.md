# PEWA-S4-ARCH-PROGRAMME — Stage 4 Product Architecture and Technical Decisions

**Status:** STAGE 4 FOUNDER INITIATION AUTHORISED — ARCHITECTURE PROGRAMME PROPOSED FOR REVIEW  
**Date:** 18 October 2026  
**Authority:** Independent Founder instruction “proceed” following Stage 3 formal closure, approved PR #41 and merge `e18758fb6fc18fafa0b3f8bf2b5fe5a066bc4c98`.  
**Scope:** Architecture research, comparison, decision records and review only. **No code implementation, infrastructure provisioning, vendor contract, deployment, FEF adoption or engineering work.**

## 1. Authoritative inputs and architecture constraints

Stage 3 closed with [formal Founder disposition](../01-project-home/PEWA-S3-CLOSE-Founder-Disposition-and-Closure.md), **314 numbered requirements R01–R08** and **41 approved policy directions** (COM, ORD, BMP, CPN, POP). Treat approved Product Constitution and Stage 2 Product Definition as superior product authority. Historical F01–F05 research informs options but not an overriding technical mandate.

Non-negotiable product truths:

1. One organisation may operate legitimate brands, venues and many public/protected menus; business authors availability, prices and item claims.
2. Public web/QR works independently; PEWA Home, organic Directory and direct business menu have different meanings; business custom food categories and names in any language remain searchable; PEWA navigation English-first.
3. Manual engagement is valid without an order; structured ordering is optional, explicitly enabled and only one business acceptance creates one consumption unit. Ready optional/business-declared; order payment and physical fulfilment outside PEWA.
4. One standard monthly subscription includes **200 acceptance units** whether ordering is used; unused included units expire at renewal; top-ups carry across periods subject to approved validity; ten recoverable accepted-order units are a separate debt-backed bounded continuity mechanism. Example dollar prices not final.
5. Featured exposure separate from organic ranking and subscribed menu specials; qualifying on-screen impressions rather than impressions assumed from schedule or sales conversions.
6. Protected hotel menus/guest order status require appropriately limited access without compulsory account; private favourites/recents remain undisclosed across merchants; web status primary; opt-in push; no automatic outbound WhatsApp status.
7. Platform operators administer eligibility, usage/advertising corrections, privacy and integrity with scoped attributable authority, not merchant food/order operations.
8. Miledge shared WhatsApp adapter and any media/shared platform capabilities must be assessed against actual Miledge portfolio authority and readiness. Architecture cannot independently select shared providers.

## 2. Workstream sequence, deliverables and gates

### A01 — Architecture drivers and capability decomposition
- Trace product requirements and policy directions to **quality attributes and architectural decisions**: independence, tenant isolation, consistency, correctness of billing/acceptance, business scalability, security/privacy, availability, accessibility and portable delivery.
- Define PEWA-owned functional capability map and boundaries with business/customer/operator experience.
- Produce architecture drivers and decision/problem inventory with high-risk dependencies and explicit unresolved policy details.
- **Gate:** Founder review of complete drivers; no technology/provider selected merely by the map.

### A02 — Domain and data authority architecture
- Model organisation/brand/venue/service context, menus/offerings/prices/availability/publication, guest menu eligibility, request/acceptance/Ready/amendment/cancellation, subscriptions/included/purchased/recoverable units, campaigns/qualifying exposure, privacy/audit.
- Specify invariants and source-of-truth boundaries; distinguish business-asserted data, platform-observed events, public projections and retained evidence.
- Address order-snapshot immutability, multi-context currency, renewal boundaries, last-unit concurrency and explicit attribution. Do not invent fixed TTLs or regulatory retention periods.
- **Gate:** domain and integrity review before selecting a persistence architecture.

### A03 — Application and service architecture options
- Assess modular monolith versus service decomposition with realistic early-stage operations, bounded independent evolution and portability.
- Compare reasonable application/runtime patterns for public menu delivery/search, business back office, order processing and operator console.
- Explain change paths and nonfunctional tradeoffs; do not prematurely deploy services, databases or events.
- **Gate:** Founder selects architecture principle/option; reserved Miledge dependencies reviewed.

### A04 — Identity, tenancy, security and privacy architecture
- Design actor/permission boundary options for organisations, roles, optional customers, guest order access, protected hotel menus and exceptional operator activity.
- Threat-model ID enumeration, guessable order refs, insecure guest links, public/private leakage, cross-tenant access and abuse of acceptance/units.
- Define data-class retention/encryption/audit requirements conditioned on future competent legal/product policy approval; avoid asserting legal compliance.
- **Gate:** independent security/privacy decision review; no unapproved identity provider.

### A05 — Discovery, content and media architecture
- Options for business-authored multilingual search, optional shared categories, geographic/service-area eligibility, organic ranking, recents/favourites and public/protected indexing separation.
- Assess publication versioning, stale data/availability representations, image upload/storage/delivery and provider-neutral interfaces; consult Miledge-approved media guidance before product media choices.
- **Gate:** preserve flexible merchant content and information privacy; no mandatory classification imposed.

### A06 — Commercial, usage and promotion integrity architecture
- Model acceptance-unit consumption from authoritative business acceptance, 200 monthly included units, top-ups, ten-unit outstanding recovery, cancellations/corrections, renewal/lapse and previously admitted-order continuity.
- Evaluate correct concurrency/idempotency and audit patterns without inventing the detailed reset/settlement policy.
- Define qualified visible-impression evidence, deduplication/invalidity, campaign pause/undelivered claims and strict separation from organic ranking.
- **Gate:** explain unresolved commercial and qualifying-impression policy dependencies before engineering authorization.

### A07 — Channels, notifications and Miledge shared-service boundaries
- Keep public web and protected web order status independent of WhatsApp; opt-in push optional; prevent implicit outbound WhatsApp status.
- Assess adapters and dependency contracts for Miledge WhatsApp infrastructure, optional media/shared services and relevant portfolio/platform approvals.
- Specify fallback and failure truth; provider selection deferred until authorised.
- **Gate:** written Miledge dependency disposition, not speculative provider readiness.

### A08 — Delivery/operations architecture and decision consolidation
- Evaluate hosting, database, observability, environments, backups, recovery, CI/CD, media cost/scaling and security operations based on architecture drivers and applicable Miledge preferences, not habitual provider lock-in.
- Produce consolidated architecture decision register, diagrams, interface contracts at architecture level, tradeoff matrix, risk/dependency register and **Stage 4 Founder review pack**.
- Define later Stage 5 FEF review and Stage 6 engineering readiness evidence, without initiating them.
- **Gate:** Founder Stage 4 approval and separate closure; no automatic Stage 5 or 6.

## 3. Decision ownership and guardrails

| Decision area | Owner | Current status |
|---|---|---|
| PEWA-owned domain/application architecture | PEWA Founder Stage 4 | Not selected |
| PEWA authentication/access architectural approach | PEWA Founder with privacy/security review | Not selected |
| Cloud, database, delivery and managed components | PEWA Founder subject to Miledge policies | Not selected |
| Shared WhatsApp capability existence, adapter readiness, ownership | Miledge reserved portfolio/shared-platform authority | Conditional, not assumed |
| Miledge media standards/adoption and common infrastructure | Miledge authority and PEWA fit assessment | Evaluate; do not silently adopt |
| Prices/taxes, legal terms, privacy retention, campaign viewability policy | Founder commercial and competent legal/privacy authorities | Outstanding launch/implementation gates |
| FEF adoption/engineering | Separate stages 5 and 6 | Not started |

## 4. Suggested immediate architectural start

Start **A01 Architecture Drivers and Capability Decomposition** through a document-only assessment against the exact approved R01–R08 and COM/ORD/BMP/CPN/POP records. No provider/stack recommendation until architectural requirements and tradeoffs are mapped. This programme is presented for Founder review; approval of this programme permits continued Stage 4 documentation work only, not implementation.

**Next Founder review requested:** confirm the Stage 4 sequencing and guardrails (A01–A08), or request bounded changes. Stage 4 initiation is already separately authorised by “proceed”; Stage 4 remains IN PROGRESS, Stages 5–6 NOT STARTED.
