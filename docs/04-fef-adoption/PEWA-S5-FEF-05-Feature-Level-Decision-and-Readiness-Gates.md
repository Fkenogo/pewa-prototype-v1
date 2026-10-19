# PEWA-S5-FEF-05 — Feature-Level Security, Commercial, Legal and Launch Gates

**Status:** PROPOSED FOR FOUNDER REVIEW — STAGE 5 ASSESSMENT ONLY  
**Date:** 19 October 2026  
**Authority:** Closed Stage 3 (314 requirements and 41 approved policy directions), closed Stage 4 A01–A08, FEF-01–04, [FEF-EWPCS-001](https://github.com/Fkenogo/founder-engineering-framework/blob/main/docs/engineering/FEF-EWPCS-001-ENGINEERING-WORK-PACKAGE-CLOSURE-STANDARD.md) as amended.  
**Boundary:** Assign exact owners and triggers for unresolved decisions. No choice of price, law, provider, schema, account, implementation, production processing or engineering authority.

## 1. Gate taxonomy

- **G0 — Before work-package authorisation:** A future Stage 6 must first be separately Founder-authorised; the bounded package has governing requirements/architecture, a risk class and no unresolved decision material to the functionality being built. Product or commercial semantics cannot be invented by an engineer.
- **G1 — Before implementing or enabling the affected feature:** Resolve semantics or provider authority where missing would make correct/safe implementation unknowable (e.g. recoverable consumption settlement, guest action proof, paid impression qualification). Unrelated capabilities must not be frozen by a deferred feature's gate.
- **G2 — Before external/pilot data or money:** Complete suitable security/privacy and applicable jurisdictional legal/commercial review, along with representative testing, contractual notices, abuse handling and operational assurance. A local mock/demo does not confer approval to process live personal information or charge customers.
- **G3 — Before production release:** Full relevant Terms/Privacy publication, consent, tax/pricing, provider costs and obligations, observability, backup/restore and go/no-go sign-off. Pilot/prod exposure is never inferred from a passing test or merged PR.

A gate marked later does **not** authorise earlier engineering; only a separately approved Stage 6 work package does that.

## 2. Capability-by-capability gate and owner matrix

| Capability | G0/G1: decision required before affected implementation | G2/G3: external/live-use obligation | Decision owner |
|---|---|---|---|
| Public business organisation/brand/venue onboarding | Approved eligible-business model and scoped permissions; choose technical identity/security only when needed for real accounts | Jurisdiction-specific legitimacy rules, applicable customer/business privacy notices and platform Terms | PEWA Founder product; competent legal/privacy; later PEWA technology selection |
| Published public menus, QR links, manual contact | Publication/versioning, active-subscription eligibility, multilingual/custom categories and truthful manual-contact semantics already approved; controlled media strategy before upload feature | Merchant content warranties, claims, rights/takedown, acceptable-use policy and privacy where applicable | Founder product; legal/content governance |
| **Unit exhaustion** | **Hard invariant already settled:** during active subscription, menus and eligible organic Home/Directory/manual contact persist; disable **new structured-order submissions only** | Product copy must never label the business closed solely because units reached zero | Existing Founder authority; engineering proof later |
| Protected hotel menu / private images | G1 audience-eligibility evidence, revocation, protected media handling and role scopes before access implementation | Local privacy/guest consent, minimised personal-data processing, rights/incident handling | Founder privacy/product/security; competent legal review |
| Guest account-free structured order access | G1 private return-token/access model, action-specific proof, safe recovery and anti-enumeration before implementing protected orders | Privacy terms, retention, complaint/abuse escalation and data-subject treatment | Founder product/security/privacy, legal reviewer |
| Submitted/accepted/Ready orders | Approved one-business-acceptance/one-unit; G1 exact Pending timeouts, time-context eligibility, withdrawal-vs-acceptance ordering and permitted cancellations/amendments for affected workflow | Clear merchant/customer terms and cancellation remedies according to jurisdiction; pilot validation of races/failures | Founder product/commercial; legal where applicable |
| Monthly subscription and 200 included units | Exact renewals, callback idempotency and separation of order-admission from menu visibility; a simulated ledger may be specified without final dollar prices, if charging is disabled | Final local currency, tax, base price, grace, invoices, dispute/collection terms and live payment compliance | Founder commercial/finance/legal; implementation/security |
| Purchased top-up bundles and ten recoverable units | G1 top-up validity, credits/offsets, **10-unit outstanding-liability ceiling**, recovery settlement, reservations and simultaneous last-unit acceptance; no implicit monthly credit grant | Customer-business contractual terms, top-up price and tax, disclosure/debt remedies, financial evidence | Founder product/commercial, legal and security reviewers |
| Paid Featured Offers | Separate paid Home exposure and organic relevance already settled; G1 qualifying on-screen viewability/deduplication/invalid traffic, suspension and credit/expiry terms | Final campaign prices/tax, disclosure/advertising-law review, privacy, truthful advertiser reports | Founder commercial/ads/privacy; competent legal |
| Search, Home, favourites and recents | G1 private/public projection and original-language relevance; basic nontracking search independent of behavioural ad targeting | Marketing and precise location consents independent; privacy notices and rights for account sync | Founder product/security/privacy |
| Optional browser push | Technical consent/revocation, safe private previews and derived-not-authoritative events before enabling | Appropriate notices, subscription/opt-out treatment and jurisdictional privacy obligations | Founder product/privacy, legal |
| Miledge shared WhatsApp and future structured conversation | **Reserved Miledge approval and evidenced actual adapter readiness**; same catalogue/order truth, replay/idempotency, consent; optional independent web fallback | Meta/template/channel operational cost, regional messaging duties, separate customer consent and live messaging authorisation | Miledge shared-platform authority and PEWA Founder |
| Merchant-uploaded images | Businesses presumed to have necessary rights and responsible for published content; G1 authenticated upload and public/protected asset permission, metadata safety and takedown workflow | Rights warranty, IP complaint/removal/appeal process, applicable law and privacy | Founder content policy; legal; PEWA product/security |
| Operator Console, corrections and audit | G1 least privilege, case-based sensitive access, attributable adjustments and prohibition on merchant acceptance by PEWA operators | Lawful retention, access/audit policy, appeal and rights-response deadlines | Founder operator policy/security, competent privacy/legal |
| Provider/runtime/database/CI and releases | G1 separately approved technology/provider fit for affected package, portable domain authority and transactional proof; actual PEWA CI/ruleset availability remains unverified | Security assessment, licensed service accounts, cost ceilings, backup/restore, preproduction and release proof | Founder PEWA architecture, Miledge reserved authorities, FEF/engineering and release leads |

## 3. Sequencing guidance — prevent unnecessary blanket blockers

1. **Potential early, bounded Stage 6 package (only after separate authorisation):** static/mock public catalogue and direct-link menu experience, using approved content/publishing semantics and no real business data, uploads, production auth, payments, privileged guest access or active order acceptance. Final campaign viewability and recoverable-unit debt policy are not prerequisites for such an isolated mock if those functions remain off.
2. **Before real merchant-authored persistent menus:** identity/role security, upload rights and asset protections for any image feature, verified published/public projections and privacy/legal requirements for any real business or customer data collected.
3. **Before real structured ordering:** guest order protection, timing/cancellation model, accepted-order and unit atomicity, last-unit rules and negative race tests; do not enable paid or recoverable consumption as an unreviewed incidental side effect.
4. **Before charging businesses for subscriptions/top-ups/promotions:** final Founder commercial prices/taxes, disclosure/terms, refund/dispute/recovery details, selected compliant business-to-PEWA payment handling and financial audit evidence.
5. **Before any WhatsApp-specific integration:** Miledge's current approved adapter contract, service/identity/cost/security proof and PEWA's separate feature permission; nothing in PEWA prevents independently functioning web menus while this is outstanding.

These are **illustrative future package boundaries**, not a stage 6 start request or preapproved implementation sequence.

## 4. Cross-cutting non-negotiable assurance

- **R2 independent review** for auth, tenant isolation, protected guest order security, transactional acceptance/consumption, billing/corrections, material migrations and live infrastructure.
- One attributed merchant acceptance creates one accountable unit, not a second unit on notification retries or amendments.
- Active business menu remains public/discoverable/contactable at zero units; only new order admission stops.
- Private menu and media cannot leak through stale index, CDN, sponsored placement or guessed URL.
- Consent for optional channels, marketing, GPS and account sync must remain distinct.
- A published business image/content warranty is not a verified legal title or protection from valid takedown claims.
- Miledge architectural guidance does not prove that a shared hosted service or PEWA-specific provider account is ready.

## 5. Reserved decisions by owner and trigger

| Decision packet | Owner | Trigger |
|---|---|---|
| COM detailed rates, credit/renewal/grace, ten-unit settlement, tax | Founder commercial/product, competent legal/tax input | Before affected billing/usage package G1 and live charging G2/G3 |
| ORD times, availability precedence, cancellation/amendment remedies | Founder product, legal for rights | Before affected ordering lifecycle G1 |
| CPN guest/hotel verification, recovery and country privacy specifics | Founder product/security/privacy, legal | Before protected access G1; live sensitive data G2 |
| POP measurable impression and credit/refund validity | Founder ads/commercial/privacy, legal | Before paid campaign measurement G1 and billing G2 |
| Merchant image rights/content Terms and takedown | Founder product/content, legal | Before real uploads/public exposure G1/G2 |
| Provider selection, data-region fit, CI and operational resources | Founder PEWA technology, Miledge where reserved | Before work package dependent on that service G1 |
| WhatsApp shared adapter verified readiness | Miledge shared-service authority | Before any PEWA adapter integration G1 |
| Stage 6 engineering or any launch | Founder separately | Stage initiation G0, individual package approvals and release G3 |

## 6. FEF-05 Founder disposition requested

**FEF05-FD1:** Approve G0–G3 distinction and feature-scoped blocking rather than deferring all engineering until all launch policies are settled.

**FEF05-FD2:** Confirm exact decision owner/trigger allocations, particularly order/unit integrity, guest data, campaign exposure and shared WhatsApp readiness.

**FEF05-FD3:** Allow later Stage 6 isolated mock/public-menu work packages only by **separate explicit Founder authorisation** and without activated gated functions or real customer/business data.

**FEF05-FD4:** Adopt mandatory R2 scrutiny for high-risk implementation while preserving FEF-EWPCS-001-AMD-001 proportionate review elsewhere.

**FEF05-FD5:** Authorise FEF-06 Stage 5 readiness reconciliation and separate closure candidate, **not** Stage 6 initiation or provider procurement.

**Current status:** Stage 5 IN PROGRESS. This proposal does not approve prices, timing figures, legal compliance, operational provider readiness, engineering or deployment.
