# PEWA-S6-00C — Application Framework Decision Recommendation

**Status:** FOUNDER REVIEW — PROPOSED FRAMEWORK DIRECTION, NOT EFFECTIVE
**Date:** 19 October 2026
**Authority:** Approved S6-00B PR #65, merge `b6f9960bb89234cbc145e5ae02c283252c682fcb`; PEWA Stage 3–5 authority; approved mobile-first PWA and pre-engineering prototype requirement.
**Boundary:** Framework selection recommendation with explicit residual validation, **not** prototype initiation, product-engine implementation, hosting/identity/database provider selection, CI activation or release permission.

## 1. Decision recommended

**S600C-FD1 — SELECT NEXT.JS APP ROUTER + TYPESCRIPT as PEWA's preferred application-framework direction** for its eventual **single deployable, modular monolith**, contingent on current supported release/security assessment during actual engineering entry. React handles mobile and desktop UI; server code owns authoritative domain boundaries independent of framework-specific request/page actions. **PostgreSQL is the preferred relational engine direction**, but managed vendor, region and service plan are not selected.

This is a concrete framework decision candidate replacing perpetual open-ended Next.js-versus-Vite assessment, not evidence of a working application.

## 2. Evidence-based comparison

| PEWA criterion | Next.js App Router + TypeScript | Vite/React + Node API |
|---|---|---|
| Public, shareable QR/direct-link menus and Directory | Integrated server rendering and metadata conventions in one app, lower packaging complexity | SSR possible, but Vite SSR is lower-level; extra routing/rendering coordination required |
| Customer and merchant PWA on mobile | Official PWA guidance covers web manifest, service-worker and installed behaviour; precise caching and offline implementation remains project-specific | PWA support possible through plugins/custom service-worker; additional integration and security design |
| Full mobile business administration and optional desktop | Responsive React application works for both, without a separate admin app | Same React capability; no intrinsic advantage |
| Consistent order acceptance/one-unit consumption | Must be implemented in independent server-side transactional domain modules; Next.js does not supply transactional correctness | Same independent server-side transaction requirement |
| Protected hotel content, guest order and image security | Explicit dynamic server authorisation plus strict public/private cache segregation; misuse of render/prefetch/cache is a serious risk | Explicit API boundary, but SPA/service-worker cache and SSR integration still need strict separation |
| Team/operational simplicity | One framework/build/runtime and server-rendered public content | Potentially two build/deploy concerns; clear frontend/API separation is a strength where needed |
| Portability | Standard Node-compatible deployment should be verified; isolate domain modules from provider/framework APIs | Often straightforward deploy portability with independently hosted Node API; SSR may raise complexity |

**Official technical references:** [Next.js App Router](https://nextjs.org/docs/app); [Next.js PWA guide](https://nextjs.org/docs/app/guides/progressive-web-apps); [Vite SSR guide](https://vite.dev/guide/ssr). These confirm the capabilities and integration tradeoffs, **not** project-specific benchmarking, vendor selection or verified security.

## 3. Why Next.js fits PEWA now

PEWA serves both discoverable public web menu/directory pages and authenticated merchant administration. Next.js brings public server rendering, routing, document metadata and PWA guidance within one TypeScript application. That reduces initial complexity while respecting the existing modular-monolith direction. Vite/React with a separate Node API remains technically viable and may be reconsidered if measured complexity/security/performance contradicts this choice; no architecture migration is authorised here.

**Non-negotiable boundaries for eventual engineering:**
- Business/entity/order/consumption truth must live in server-owned domain modules, with explicit tenant authorization and one ACID transaction for qualified acceptance plus one unit; UI/server-action abstractions must not become the domain architecture.
- Any public caching, prefetch, ISR, service-worker/offline state or SEO output may contain **only explicitly public material**. Protected hotel menus/orders/private media never enter public caches, URLs/indexes or static output.
- Business owner, staff and administrator can complete essential onboarding, catalogue, settings, roles, order and balance tasks entirely through mobile PWA; desktop is optional.
- A customer can browse a public menu and manually contact a business without installing a PWA, creating an account, using WhatsApp or having structured-order credits.
- If an active subscribed business exhausts acceptance units, menu visibility, organic Home/Directory listing and manual contact remain available; **only new structured submissions stop**.
- Offline capability must not imply offline acceptance, price validity or guaranteed consumption eligibility; submit/accept is server-authoritative.

## 4. Constraints not decided here

- **Next.js and Node exact versions:** pin only after verifying current supported/security releases at authorised implementation entry. Do not assume a specific framework release from a planning document.
- **Managed PostgreSQL:** confirm region, price, concurrency, connection pooling, backup/restore, tenancy and transaction proof plan; engine preference does not select Neon, Supabase, Firebase or any other provider.
- **Authentication:** still evaluate managed credentials + PEWA-owned permissions against security/recovery and account-free guest requirements.
- **Hosting:** compare provider-neutral Node/container deployment and public edge delivery with Miledge guidance and costs.
- **CI:** PEWA private-repo GitHub Actions account/billing and branch checks remain unverified; no CI spending/change implied.
- **Shared WhatsApp/media:** conditional Miledge authority and product choice remain effective.
- **Commercial/legal/security:** Stage 5 G0–G3 and R2 review gates remain in force.

## 5. Experience reference: binding pre-engineering gate

The Founder will **issue a separate prompt immediately before production engineering**, initiating a mock-data interactive prototype. It must cover **mobile-first PWA for every role**, including full mobile-only small-business administration, with optional desktop administration. Iterative Founder review continues until satisfaction; only then will the prototype be explicitly **approved and frozen as the Experience Reference** guiding assembly of the actual engine and interface.

**Do not** start prototype design, scaffold any product code or treat this technology decision as production engineering authorisation. Technical planning and provider cost review may continue before that prompt.

## 6. Founder decisions requested

**S600C-FD1:** Approve **Next.js App Router + TypeScript** as the preferred PEWA application-framework direction, with explicit server-side modular-monolith boundary.

**S600C-FD2:** Preserve **PostgreSQL relational engine** as leading data technology direction, while deferring database host/region, identity, media, cloud and CI selections to separately reviewed, evidence-backed decisions.

**S600C-FD3:** Confirm protected-data cache/PWA security, full phone-only business administration, web independence and ACID acceptance/usage consistency as mandatory implementation proofs.

**S600C-FD4:** Reaffirm the **separate Founder-started, iteratively approved and frozen prototype** as mandatory before all production engineering, not only user-interface assembly.

**S600C-FD5:** Keep S6-01 executable foundation **NOT AUTHORISED**, and require a subsequent bounded Founder approval after prototype freeze and relevant technology/CI entry checks.

**Next:** On Founder approval, record the concrete framework direction and prepare only implementation-entry prerequisites or the Founder's requested prototype-start brief. No code or infrastructure changes.
