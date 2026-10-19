# PEWA-S6-00A — Technical Stack Decision Gate and Mobile-First Experience Reference Brief

**Status:** FOUNDER REVIEW — DECISION CANDIDATE, NOT ENGINEERING AUTHORITY
**Date:** 19 October 2026
**Authority:** S6-00 assessment approved in PR #63, merge `781fbcd2716d5ef71c889cf8821e6ec5b1100c76`; Stage 3 product baseline, Stage 4 A01–A08, Stage 5 FEF work-package and G0–G3 controls.
**Founder clarification (19 October 2026):** PEWA targets a **mobile-first PWA experience for every user and role**. Business administrators, including those in small enterprises operating exclusively on phones, must be able to perform their full essential administrative workflows on mobile. Desktop is an additional option for business-organisation administrators, never a prerequisite. A separate prototype will be initiated by a Founder-issued prompt **immediately before engineering begins**, refined until the Founder is satisfied, and formally frozen as the Experience Reference guiding assembly of Product Truth and the rest of the experience.\n**Boundary:** Recommend a bounded first technical baseline and an independent Founder-reviewed experience-reference brief. **No executable code, cloud account, credentials, CI activation, real customer data or hosted preview is authorised here.**

## 1. Decisions now versus later

The product architecture **is already decided**: provider-neutral modular monolith, strongly consistent acceptance/consumption authority, guarded public/private projections, web-first paths, conditional Miledge WhatsApp integration. The exact framework, language/runtime, provider, database plan and interface experience **are not yet selected**.

Select technologies only for material portability, operational cost, team efficiency, concurrency, security, region and verified feature fit. Avoid imposing other Miledge projects' specific infrastructure by precedent.

## 2. Proposed first-stack direction

| Layer | Recommended **decision candidate** | Validation required prior to approved implementation |
|---|---|---|
| Web and application | **TypeScript end-to-end** with one modular server application and mobile-first web UI; compare **Next.js full-stack** and **Vite/React with a separately hosted Node service in one deployment unit** | Current maintained releases and security advisories; forms/auth/session story; SSR/public SEO/indexing, cache control, local preview, background jobs, deployment and operating cost |
| Domain boundaries | Explicit business organisation, merchant identity/permissions, catalogue/publishing, order snapshots/state, consumption ledger, subscription entitlements, promotion, discovery, channel adapter modules | Module dependency and transaction ownership design; R2 review for auth/order/usage |
| Relational authority | **PostgreSQL** as recommended **database engine candidate**; managed PostgreSQL hosting/provider **not chosen** | Atomic accepted-order + one-unit event and ledgers; locks/retry/idempotency; tenancy/query isolation; export and verified restore; costs/region/connections |
| DB access | Explicit transactional repository/unit-of-work with migrations and typed schemas; compare thin SQL access / ORM against critical transaction behaviour | Capability to express precise isolation/locks, schema evolution, portability, migration tests |
| Authentication | Managed authentication behind PEWA-owned role/tenant access control | Admin recovery, magic-link/passkey/password policy as appropriate, guest orders without compulsory account, cost and portability; no provider preference presumed |
| Media/edge | Portable application-owned media IDs and scoped object access; CDN for **approved public content only** | Evaluate Miledge MV-206 R2/Images candidates, protected hotel assets, transformations, rights/takedown, cost and revocation |
| Search | Begin with measured relational/source-backed projection as candidate; external index if justified | Any-language merchant text, business/menu/item/venue queries, public visibility and organic-vs-paid separation |
| Background operations | Durable outbox-like domain events and bounded workers | Notification/channel failures cannot change order truth; replay and retries safe |
| CI and environments | Local reproducible checks first; later hosted CI only on verified account, private-repo cost and exact-head proof | GitHub settings/branch restrictions and current Miledge CI conditions still unverified |

**Proposed S6-00A technical decision:** accept TypeScript modular-monolith + PostgreSQL **engine** as preferred technology direction, subject to bounded framework and managed-provider proof. This is narrower than choosing an actual production stack/vendor; reserve those detailed selections for separately reviewed implementation-entry work. Do not silently substitute Firebase/Firestore authority for transaction invariants.

## 3. Short comparison to close before first code

Evaluate these two viable web packaging alternatives against the same minimal prototype obligations:

- **A — Next.js full-stack modular monolith:** one web/server application with guarded server actions/API boundaries, publicly eligible SSR pages and independently testable domain modules. Advantages: unified framework and page metadata/discovery. Risks to verify: cache invalidation, request/session security, version/platform portability, nonrequest background work.
- **B — Vite/React web + Node modular API in one controlled deployment architecture:** more explicit frontend/backend separation and independent API transaction boundary. Advantages: domain server separation and flexible delivery. Risks to verify: SSR/SEO for public menu/directory, build/deployment complexity and duplicative contracts.
- **C — Python server + React web:** fallback only if demonstrable team/implementation advantage outweighs dual-runtime overhead; not rejected as a matter of policy.

Use a small evidence sheet: current version/support, local development, feature security, tenant isolation, public SEO, cost at small subscriber scale, one-unit transaction design, deployment portability and preview. **No provider selection by documentation assertion.**

## 4. Founder-reviewed PEWA Experience Reference — separate deliverable

**Timing and initiation gate:** The Founder will issue a **separate prototype-start prompt just before engineering starts**. Do not begin prototype creation from this architecture decision alone. The prototype must be iteratively refined to the Founder's satisfaction and then frozen/approved as the assembly reference **before implementation of the production engine or substantial product experience**. No engineering execution is authorised until that sequence and the separate engineering gate are satisfied.\n\nCreate an **experience reference** distinct from product logic and infrastructure. It is a constrained design/prototype artefact (not production source), reviewed and frozen before substantial UI assembly. Its job is to prove navigation, content hierarchy, role journeys, onboarding simplicity, ordering clarity and mobile-first ergonomics against product truth.

Required screens/journeys:

1. **Customer Home / Directory:** search merchant, venue, item and menu; recents/favourites if used; clearly marked paid Featured Offers, never disguised as organic rank.
2. **Business setup:** organisation, legitimate brands, venues and author/editor roles with minimal steps and mobile manageability.
3. **Catalogue configuration:** one reusable menu engine for items, categories, optional modifiers, price/currency, availability, images and merchant-authored text in any language.
4. **Direct QR/web menu:** fast public read, manual contact; clear business source attribution, eligible organic publication independent of order-unit availability.
5. **Structured web order:** guest (no mandatory customer registration) chooses items/modifiers, reviews immutable quote and submits; business receives, declines/accepts/marks Ready; status is authoritative in PEWA web, not notifications.
6. **Unit-exhaustion state:** menu stays ONLINE/visible/searchable and manual contact works during active subscription; **only new structured order submission becomes unavailable**, never misleadingly “business closed”.
7. **Protected hotel guest path:** audience-appropriate protected menu visibility, private media and safe return to a specific guest order without disclosing other guests.
8. **Business management:** tenant/venue-scoped dashboard with published menus, submitted/accepted orders and visibly distinguishable consumption balances; support exceptions without granting platform operator merchant acceptance powers.

**PWA, mobile-first experience is mandatory for every role**, including business owners, managers, staff, customers and organisation administrators. All essential business administration—onboarding, brands/venues, menus, roles, orders, consumption and settings—must be fully usable on phones because some small enterprises will operate entirely on mobile. **Desktop is optional additional access for business-organisation administrators**, not an administration-only requirement or a prerequisite for any essential business workflow. PWA behaviour (responsive layouts, installability, updates, connection handling and justified offline boundaries) must be demonstrated and reviewed. Include loading, empty/error, poor-network and accessibility states in review; PWA installability must be available without requiring installation; do not force push, WhatsApp, a native app or account creation for ordinary guest browsing.

**Non-negotiables:** distinguish manual contact from PEWA structured ordering; merchant acceptance consumes exactly one order unit; no hidden unit charge on submission/Ready; approved monthly-included vs purchased vs bounded outstanding units; protected context never appears in public Home/Directory; no invented legal/allergen claims.

## 5. Proportionate work segmentation

**S6-00B — Technology proof/selection report (documents and controlled nonproduction proof only if subsequently authorised):** verify framework options and current technical limitations, outline acceptance transaction design and host/identity/database screening, propose exact stack decision and S6-01 entry. R1 for documentation; R2 for material architecture/security decisions.

**S6-XR-01 — PWA mobile-first Experience Reference package (separate Founder prompt immediately before engineering):** develop a working interactive prototype using mock data only, covering complete mobile operations for all roles with an optional desktop administration view. Iterate under Founder review **until satisfactory**, then explicitly approve and freeze it as the binding experience assembly reference for the production engine and all connected user journeys. This must occur **before any production engineering starts**, not merely before substantial UI assembly; technical-option research may continue beforehand. Prototype is not an undeclared production application.

**S6-01 — Executable Domain Foundation:** remains separate and **NOT AUTHORISED** until S6-00B technical decision, security/CI entry gates and an approved bounded implementation work package.

## 6. Founder choices requested

**S600A-FD1:** Approve TypeScript modular monolith and PostgreSQL engine as **preferred technical direction** only; decide exact framework/hosting/managed database and identity with evidence before their implementation.

**S600A-FD2:** Authorise bounded follow-on **S6-00B technical proof/selection assessment**, no procurement or implementation under this PR.

**S600A-FD3:** Approve the **PWA mobile-first for all roles, fully mobile business administration, optional admin desktop** Experience Reference scope. The Founder will separately initiate S6-XR-01 with a prompt immediately before engineering; iteratively refine and approve/freeze the prototype **before the production engine or other product engineering begins**. Do not presume a prototype already exists.

**S600A-FD4:** Retain gated CI/provider choice, FEF R0/R1/R2 reviews, strong order/consumption consistency, merchant media rights, web independence and privacy/commercial rules.

**S600A-FD5:** Keep production application development, account creation and deployment behind future, explicit engineering authorisation.

**Next action after approval:** continue narrowly scoped technical-choice verification without engineering execution. Prepare the prototype execution brief, but **do not start prototype creation until the Founder's separate prompt immediately before engineering**. Founder review/refinement and freezing of the prototype precede separately approved production engineering. No executable implementation begun.
