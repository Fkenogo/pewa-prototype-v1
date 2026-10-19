# PEWA-S4-A08 — Infrastructure Options and Architecture Consolidation

**Status:** FOUNDER REVIEW CANDIDATE — NOT APPROVED; STAGE 4 NOT CLOSED  
**Date:** 18 October 2026  
**Authority:** Approved PEWA A01–A07; 314 requirements across R01–R08 and 41 Stage 3 product-policy directions. Miledge infrastructure and media guidance are evaluation inputs subject to their verified current authority.  
**Boundary:** Proposed technical architecture direction, technology-selection criteria, unresolved evidence and review gates. **No deployment, credentials, production provision, provider contract, implementation, FEF adoption or engineering authorisation.**

## 1. Consolidated architectural baseline

The A01–A07 direction is **a provider-neutral modular monolith** with explicit domain modules and a strongly consistent accepted-order/consumption decision boundary. Customer-facing public web/direct menus, organic discovery and optional protected guest access use appropriately isolated projections. PEWA's menu catalogue is business-authored and multilingual; search labels need not follow a mandatory English food taxonomy. Subscription, order admission and publication are distinct. A subscribed merchant whose acceptance units are depleted still has public menus, discovery and manual contact; only **new structured orders are disabled**. Order snapshots and consumption evidence remain historically attributable.

Identity verification may be managed behind PEWA-owned tenancy and permission checks; no identity provider has been chosen. PEWA web is authoritative without WhatsApp, push or install. The conditional WhatsApp integration uses the Miledge shared adapter, not a separate PEWA provider platform. Images remain optional; uploading businesses represent that they hold necessary rights and remain responsible for their uploaded content, with PEWA notice-and-action safeguards as applicable.

## 2. Infrastructure decision dimensions

| Layer | Preferred architecture property | Candidate approach(es) for evaluation | What remains unselected |
|---|---|---|---|
| Application/runtime | Cohesive modular monolith with bounded modules, portable interfaces, independent public-read scalability | Managed app/container hosting; provider-neutral Node or other suitable runtime after build-fit study | Framework, language, host, deployment pattern |
| Transactional storage | Atomic acceptance + allocation, strong concurrency, relational integrity, durable audit/corrections, structured query and export | **Managed PostgreSQL is leading evaluation candidate**; compare other relational/transactional managed alternatives against invariant proofs | Database/provider/region/service plan |
| Public menu delivery | Fast web/QR direct links, CDN-friendly deliberately public representations, revocation and protected fail-closed boundary | CDN/edge cache of eligible public material backed by authoritative eligibility checks; provider-neutral | CDN, edge provider, caching semantics/TTL |
| Directory/search | Multilingual raw business terms, optional category maps, geography, privacy-safe published index | Begin evaluation with indexed source-backed search plus controlled read projection; dedicated engine if measured language/search limits warrant | Search product and ranking implementation |
| Authentication | Managed credentials with tenant roles and grants owned by PEWA, guest-safe protected order capability | Compare appropriate managed identity products against admin recovery, cost, regional operation and portability | Auth provider, sign-in factors, protocol |
| Media storage/delivery | Business-associated optional images, derivatives/metadata hygiene, access-compatible protected assets, portable identifiers | Evaluate Cloudflare R2 + Images under MV-206 as preferred candidates; compare storage/CDN derivative designs | Provider, image sizing/cost, moderation implementation |
| Async delivery | Reliable event-to-projection/notification propagation without granting messaging transactional authority | Durable outbox-like pattern and bounded workers; broker only if warranted | Queue, event service and exact retries |
| Business-to-PEWA payments | Accurate subscription/top-up/campaign settlement with idempotent externally sourced confirmations; separate from food payments | Provider-neutral settlement adapter; local-currency, regulatory, tax and cost fit research | Merchant billing provider and final tariffs |
| Observability/operations | Scoped audits, job health, latency/errors, backups and restore proof, abuse monitoring and low operational overhead | Managed operational services with documented data export/migration | Monitoring vendors, SLOs, RPO/RTO |
| Delivery/CI and environments | Reproducible builds, secret isolation, acceptance/unit race tests and reversible migration | Later portfolio-approved CI and preview delivery patterns | CI vendor, accounts, resources and production region |

**Evidence note:** This matrix makes **architecture candidate choices**, not verified live provider capabilities/prices, or a purchase approval. Before later final selection, confirm current available product features, regional operation, privacy terms, costs and Miledge policy fit.

## 3. Three deployability options

### I — Portable modular monolith + managed transactional database + edge public delivery (recommended evaluation baseline)

- One coherent domain application for business/admin/order/consumption authority; separate read projection/cache and bounded background work as needed.
- Managed PostgreSQL *candidate* for strict transactional invariants and portable SQL/domain ownership.
- Public delivery cached only for intentionally public eligible content; protected/guest content evaluated by current access authority.
- Managed authentication credentials behind PEWA-owned authorisation, and optional portable media service.
- **Strengths:** direct integrity proof, low team overhead, manageable costs, service-extraction options, straightforward evidence and recovery.
- **Tradeoffs:** deliberate modularity discipline, guarded public cache invalidation, managed-service limits need confirmation.

### II — Provider-heavy serverless/functions-first

- Separate functions and managed backend components own many flows.
- **Strengths:** managed burst capacity and little server operation.
- **Risks:** fragmented acceptance/usage transaction authority, event retry races, provider coupling, privilege sprawl, unpredictable invocation cost.
- **Disposition:** do not lead with this unless a concrete transactional architecture demonstrates safety and materially better cost/security.

### III — Multi-service distributed platform from inception

- Dedicated menu, orders, consumption, ads, identity and index services.
- **Strengths:** independent scaling/failure domains at large scale.
- **Risks:** operational complexity, coordination cost, cross-service consistency hazards and weak justification for early product scale.
- **Disposition:** reject as default; reconsider only on proven traffic, team ownership, compliance or independent resilience requirements.

## 4. Non-negotiable architecture verification scenarios

1. Concurrent acceptance and withdrawal select one outcome; exactly one unit associates with a valid acceptance.
2. Two orders racing for last ordinary unit cannot silently overspend; ten recoverable units cannot become an automatically refreshed monthly allowance.
3. Duplicate eligible renewal events allocate monthly 200 units once; prior unused included units expire, purchased units persist under policy.
4. Unit exhaustion during an active subscription disables **new** order submissions but leaves public menus, Home/Directory eligibility, QR links and manual contact intact.
5. Public/protected hotel-menu transition cannot leak content or images through stale search, cache, SEO metadata or open media URLs.
6. An account-free guest retrieves their authorised order without another user's public reference granting disclosure or action rights.
7. Merchant updates item price after submission; accepted event refers to the immutable original commercial snapshot.
8. Outage of WhatsApp, push, image derivation or ads pipeline cannot stop eligible plain-text web menu reading or change order truth.
9. Sponsored content is clearly separate from organic; prefetch/offscreen placements cannot be mistaken for delivered qualified views.
10. Operator support correction preserves original accounting/event and attributable reason, without acquiring routine merchant acceptance privileges.
11. Data export, backups and independently verified restore preserve essential business, order and entitlement evidence within later legally approved retention limits.
12. Growth/cost test includes many small subscribed businesses with mostly menu viewing and few accepted orders, not only high-frequency ordering merchants.

## 5. Outstanding policy decisions and ownership

| Item | Owner and next gate |
|---|---|
| Subscription/top-up/Featured Offer amounts, tax, currency, expiry/grace and commercial recovery | Founder product/commercial and competent financial/legal review prior to live billing |
| Recoverable ten-unit settlement, concurrent reservation semantics, acceptance expiration timing | Founder product/commercial decisions before engineering finalisation of these state machines |
| Guest-menu admission/recovery proof, lawful retention, incident response and country processing duties | Founder product, security and competent privacy/legal review before sensitive live processing |
| On-screen viewability threshold, repeat/invalid traffic and undelivered campaign credit | Founder commercial/advertising policy before campaign implementation |
| Miledge shared WhatsApp adapter service/readiness and inter-product charges | Miledge reserved portfolio/shared-platform authority; no assumption of readiness |
| Media guidance/provider fit, exact cost/rights and private asset policy | PEWA selection after current Miledge MV-206 guidance verification |
| Chosen cloud/region/identity provider/database, cost ceilings, backup objectives and CI | Later evidence-based PEWA architectural decision; Miledge policy checked; no procurement authorisation here |
| Business/customer Terms and Conditions and content responsibility policy | Founder approval after competent jurisdictional legal review, before live use |
| Stage 5 FEF readiness, Stage 6 engineering and deployment | Independent Founder gates; NOT STARTED |

## 6. Proposal: A08 architecture disposition

**A08-FD1:** Confirm **Option I** as PEWA's preferred *architecture evaluation baseline*: provider-neutral modular monolith, managed strongly transactional authoritative store, separate safe public delivery/read projections, optional background channels.

**A08-FD2:** Confirm managed PostgreSQL as a **leading candidate for later technical evaluation**, not a selected service/provider/region. Final data technology must demonstrate accepted-order/consumption atomicity, tenancy security, safe migrations, backup/restore, region and cost fit.

**A08-FD3:** Confirm public cache/CDN and media choices are conditioned on fail-closed private-content visibility and revocation. Cloudflare R2/Images and related edge services are **candidates** under Miledge policy, not automatically adopted.

**A08-FD4:** Confirm managed auth behind PEWA-owned authorisation, with provider comparison before selection, and mandatory account-free protected guest flows.

**A08-FD5:** Confirm no independent WhatsApp provider/backend for PEWA: Miledge shared adapter is separately gated; web independently complete.

**A08-FD6:** Confirm the twelve verification scenarios and the explicit unresolved decision owner/gate register as the required proof and handover basis.

**A08-FD7:** Authorise a **bounded final Stage 4 architecture reconciliation and Founder closure-readiness assessment** after A08 approval, without selecting vendors by assumption or automatically initiating Stage 5/6.

## 7. Stage 4 handover recommendation

A01–A07 were Founder-approved through individual PRs; A08 is proposed. Following approval, reconcile their decisions into one technical decision register and check cross-workstream contradictions, including the explicit new-order-only restriction under unit exhaustion and business responsibility for uploaded image rights. Assess whether any provider selection is truly required to **close architecture** versus better handled by independently authorised later procurement/implementation. Produce separate Founder Stage 4 closure disposition.

**No Stage 4 closure is claimed by this document. Stages 5 and 6 remain NOT STARTED.**
