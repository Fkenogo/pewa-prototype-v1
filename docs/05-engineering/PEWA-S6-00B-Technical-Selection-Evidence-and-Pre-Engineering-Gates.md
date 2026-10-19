# PEWA-S6-00B — Technical Selection Evidence and Pre-Engineering Decision Gates

**Status:** FOUNDER REVIEW DRAFT — TECHNICAL PREPARATION ONLY  
**Date:** 19 October 2026  
**Authority:** Approved S6-00A PR #64, merge `3a87649d6b74d6121d409c47478a3f62857276cc`, and earlier Founder-approved product, architecture and FEF baselines.  
**Boundary:** Evaluation criteria, narrowed decision candidates, proof requirements and dependencies. **No framework or provider is finally selected, no prototype is initiated, and no production engineering, provisioning, account changes or deployment is authorised.**

## 1. Binding PEWA experience and sequencing

PEWA is a **mobile-first PWA for all users**. Customers, merchants, organisation owners, managers, staff and administrators must perform their essential journeys on mobile; small enterprises may manage every administrative task exclusively on a phone. Desktop is an *additional* administration option, not a prerequisite. PWA installability should be supported without forcing installation. Precise offline support and caching must be selected deliberately, never at the expense of private content protection or order integrity.

**Gate before any production engineering:** The Founder will separately initiate an interactive prototype **immediately before engineering begins**. It will be iteratively refined to the Founder's satisfaction, explicitly approved and frozen as the Experience Reference. Product Truth then assembles **through** this reference; the prototype itself is neither live software nor a substitute for the authoritative business/transactional engine. No prototype work is authorised by this decision document.

## 2. Preferred architecture and shortlist

The approved architecture remains a provider-neutral modular monolith, with one authoritative transactional boundary for merchant order acceptance and consumption.

| Dimension | Shortlist | Evidence needed before final decision |
|---|---|---|
| Web/PWA framework | **Next.js TypeScript full-stack** versus **Vite/React TypeScript frontend + modular Node API** | Responsive administration, install/update behaviour, SEO of public menus, cache boundaries for protected hotel menus, independent server transactions, locally runnable Founder preview, maintenance cost |
| Relational authority | **PostgreSQL engine** preferred evaluation direction | Acceptance and unit-ledger atomicity with idempotency and concurrent last-unit tests; recovery, constraints, RLS evaluation, migrations and export |
| Managed PostgreSQL | Portable managed PostgreSQL providers with realistic eligible regions and backup/restore | Itemised always-on baseline, connections/pooling, free/paid limits, recovery verification, geographic latency, portability and billing currency |
| Identity | Managed credential provider behind PEWA-owned tenant/role authority | Recovery, MFA for privileged users as appropriate, session revocation, small-user economics, account-free protected guest return, security and export |
| Application hosting | Managed container/application delivery plus edge/public CDN candidates | Support for long-lived transaction server and background jobs, startup/warm behaviour, SSR, Cloudflare alignment, data region, cost and secrets isolation |
| Media | Miledge MV-206: Cloudflare R2 and image delivery as leading candidates, not mandatory | Tenant private media, safe derivative URLs, deletion/revocation, merchant rights/takedown, request/transform costs |
| Search | Source-backed read projection / PostgreSQL search initially, external index only if justified | Kirundi, Kinyarwanda, French, Swahili and other authored-language terms; accents, indexing privacy, geography and paid/organic separation |
| CI | Reproducible local checks then approved hosted CI | PEWA private-repo GitHub Actions eligibility and account status; exact SHA checks, appropriate branch rules, low cost |

### PWA/SEO decision

Do **not** require PWA installation or customer accounts to view public menus. Public QR and business menu URLs should render discoverable information on the standard web. Protected guest and admin content must never be inadvertently emitted through prerendering, SEO metadata, CDN cache or service-worker cache. Offline support, if offered, must be explicit about stale prices, eligibility and inability to perform authorised order acceptance offline.

## 3. Technical proof design, not a claim of performed tests

**Transaction proof for later authorised engineering (R2):** concurrent acceptance requests, same order retry, cancelled/expired race, last ordinary paid unit, bounded ten recoverable units only for eligible pre-existing commitments, renewal exactly once, purchased balance carry-forward, immutable order snapshot, ledger correction attribution and rejection without consumption. These need executable proof after Founder approval; none has been run.

**Security proof for later authorised engineering (R2):** cross-tenant merchant/brand/venue permissions, guest order access without compulsory account, protected hotel menu and asset handling, session revocation, operator access and cache/service-worker denial tests.

**PWA proof for later Founder prototype review:** mobile-only owner setup and administration, customer Browse→menu→manual contact, optional structured order and business acceptance, protected hotel path, zero-unit menu still ONLINE/organic/contactable, small-screen accessibility and slow-network feedback. The prototype will be created **only** on the Founder's later start prompt.

## 4. Material decisions to resolve before actual build

1. **Framework packaging:** Next.js single deployable monolith vs React/Vite + Node API; assess PWA support, public SEO and protected private cache, local preview and domain module integrity against actual supported toolchain versions.
2. **Database engine and persistence pattern:** decide PostgreSQL engine with explicit Founder approval only after accepted transaction test strategy; select managed host/region when needed.
3. **Authentication:** manage credentials externally if fit; PEWA must still own organisation, tenant and role authority. Account-free guests cannot be retroactively turned into registered customers just to simplify a provider integration.
4. **Hosting and CI:** actual GitHub Actions, branch rules and billing remain unverified. Verify before using hosted checks. Miledge temporary CircleCI lessons are not an automatic PEWA choice.
5. **Prototype freeze:** separate Founder prototype prompt, iterative review, formal freeze **before production engineering of engine or experience**.
6. **Product/legal boundaries:** detailed commercial/transaction policy and live data processing must clear feature-specific G0–G3 gates, not be silently invented by agents.

## 5. Recommendation and next controlled actions

**S600B-FD1:** Accept TypeScript and PostgreSQL as the **leading stack direction** while retaining an explicit framework/managed-provider choice gate.

**S600B-FD2:** Accept the PWA, web-accessibility, private-cache and transaction test criteria for future proof and selection.

**S600B-FD3:** Confirm that the **Founder-initiated, iteratively approved and frozen prototype is a mandatory pre-production-engineering condition** for all roles, including full mobile business administration.

**S600B-FD4:** Authorise only a subsequent *final technical decision brief* if necessary, not production scaffolding or infrastructure provisioning. Avoid expanding into repetitive readiness documents if existing evidence supports a concrete Founder choice.

**S600B-FD5:** Keep individual provider cost/region/security review, Miledge shared WhatsApp boundary, FEF R0/R1/R2 controls and Stage 5 G0–G3 gates effective.

**Assessment result:** A defensible shortlist and material proof plan exist, but **neither toolchain nor provider operational validation has been conducted**. The next substantive gate is a Founder decision on concrete framework direction and the later, separately initiated prototype. Engineering remains unstarted.
