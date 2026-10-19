# PEWA-S3-R01 — Business Foundation Requirements

**Status:** DRAFT FOR FOUNDER GITHUB REVIEW — NOT APPROVED  
**Stage:** Stage 3 — Requirements Development and Approval (IN PROGRESS)  
**Date:** 17 October 2026  
**Authoritative source:** [PEWA-S2-PD-001](../01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md), approved [Stage 2 closure](../01-project-home/PEWA-S2-CLOSE-Founder-Disposition-and-Closure.md), [Product Constitution](../01-project-home/PEWA-S1-CONST-001-Product-Constitution.md), F01–F05.  
**Scope:** R01 business onboarding, organisation/brand/service presence, staff authority, Business Workspace and boundary with subscriptions. No architecture, provider choice, access-control mechanism, engineering or release planning.

## 1. Purpose and requirement conventions

R01 defines observable PEWA behaviour for participating organisations from registration through ongoing account management. It supports a single micro-café, delivery-only bakery, multi-venue restaurant or hotel without separate product versions.

Each **R01-###** is a proposed normative requirement. **Acceptance conditions** are product-behaviour examples for review, not a test plan. **Source** identifies the approved product direction. Fields or procedural alternatives expressly marked **OPEN** are not silently approved by inclusion in this draft.

R01 owns business foundations; other workstreams own menu item content and publication specifics (R02), customer discovery (R03), ordering (R04), billing/usage (R05), campaigns (R06), customer privacy/notification specifics (R07) and operator oversight (R08). Cross-cutting rules here are constraints on those future workstreams, not duplicate ownership.

## 2. Core vocabulary and invariants

- **Participating organisation** — accountable subscriber, administrator and payment relationship; may oversee legitimate public brands.
- **Business presence / public brand** — identifiable customer-facing business, distinct from organisation legal identity.
- **Service venue** — optional customer-accessible premises.
- **Registered/administrative address** — administrative fact, not automatically public.
- **Service area** — declared geography served, including delivery.
- **Service context** — meaningful customer interaction context such as dine-in, takeaway, breakfast, bar, room service or business-managed delivery.
- **Menu** — publication configuration connected to permitted business identities and contexts; R02 owns its contents.
- **Staff membership** — an individual with assigned permission within scoped organisation, brand, location and capability authority.
- **Business Workspace** — one organisation-facing experience exposing appropriate capabilities, not a separate app per entitlement tier.

Invariants: a menu belongs to an identifiable supplier; one organisation is commercially accountable for its permitted brands; protected administrative information never becomes public merely because a menu publishes; a subscription lapse does not destroy content/history; PEWA does not infer ownership of multiple brands from matching contact details alone.

## 3. Organisation onboarding and admission

### R01-001 — Begin registration with minimal information
A business representative **shall** be able to initiate an organisation draft without supplying every optional profile and service-context detail.
- Acceptance: a single-location café can start organisation setup before creating a menu, adding a photo, hiring staff or configuring ordering.
- Source: S2 §§3, 10; PD-09A/F, PD-10E.

### R01-002 — Guided and adaptable setup
PEWA **shall** present one guided, comprehensible setup process with relevant branches for venues, delivery areas, multi-brand use and hotel contexts, without forcing irrelevant fields.
- Acceptance: a delivery-only business is not required to enter a public storefront; a hotel may declare multiple service contexts; both use the same PEWA product.
- Source: S2 §§3, 7.

### R01-003 — Save, resume and edit
Authorised organisation representatives **shall** be able to save incomplete setup, resume it, revise nonfinal information, and later use permanent Business Settings to complete or correct their profile.
- Acceptance: a partially configured public brand can be resumed without starting the organisation again.
- Source: S2 §3; PD-09, PD-10.

### R01-004 — Separate lifecycle meanings
PEWA **shall** distinguish account created, publication eligible, subscription active, public brand published, and later restricted/suspended/closed statuses.
- Acceptance: creating a draft organisation does not publish menus or imply a paid entitlement; successfully paying does not override a separate integrity restriction.
- Source: S2 §§3,10; Constitution CP-10–12.

### R01-005 — Essential versus optional profile completion
Only fields necessary for accountable identity, safe administration, selected service mode and truthful publication **shall** block relevant publication eligibility; optional photos, descriptions and expansion details **shall not** by themselves block basic publication.
- Acceptance: omission of an optional cover image does not prevent an otherwise eligible café menu; an unidentifiable supplier cannot publish.
- **OPEN:** precise mandatory field register, country-specific eligibility/verification and public disclosure obligations, for Founder/legal review in Stage 3.
- Source: S2 §§2–3.

### R01-006 — Consent to organisation responsibility
Before activating publication, an authorised representative **shall** explicitly recognise that the participating business supplies and is responsible for its menu/commercial declarations, while PEWA has its own integrity and platform responsibilities.
- Acceptance: business sees the difference between business-declared availability and a PEWA guarantee; PEWA does not present itself as food merchant.
- Source: S2 §§1–2; Constitution CP-03/12.

## 4. Organisation and public brands

### R01-007 — Organisation profile
Authorised administrators **shall** manage an organisation's accountable identity, administration contact, relevant country and necessary billing relationship separately from public brand presentation.
- Acceptance: changing a brand's display name does not silently rewrite the organisation's identity or existing billing history.
- Source: S2 §§2–3.

### R01-008 — Legitimate multi-brand relationships
An authorised organisation administrator **shall** be able to add and manage multiple demonstrably related public business presences without an arbitrary per-menu/per-brand count cap.
- Acceptance: hotel with an independently named restaurant can manage both brands; brand addition does not automatically create another base subscription.
- **OPEN:** objective evidence/verification, dispute/transfer and abuse thresholds for additional brands.
- Source: S2 §§3,10; PD-09B/G, PD-10A/B.

### R01-009 — Public supplier identification
Each published public business presence **shall** clearly identify the business offering its menu and relevant customer-facing contact/service facts. It **shall not** imply PEWA sells or fulfils the food.
- Acceptance: a customer arriving via direct link sees the trading identity; a private registered address is not automatically shown.
- Source: S2 §§1–2,4; Constitution CP-03/11.

### R01-010 — Independent brand presentation
An organisation's different brands **shall** support distinct customer-facing names, descriptions, images, contact paths and relevant menu/service associations, subject to truthful supplier/accountability rules.
- Acceptance: branding one hotel's café does not silently rename the hotel's bar menu or unrelated public business presence.
- Source: S2 §§3–4.

### R01-011 — Prevent fictitious or unauthorised listings
PEWA **shall** apply governed identity and publication-eligibility restrictions to misleading, impersonated, unrelated or otherwise ineligible public presences, with appropriate notice and correction pathways.
- Acceptance: repeated fictitious brands are not automatically accepted as unlimited legitimate subscription inventory; staff cannot create brands outside their scope.
- **OPEN:** detailed proof, complaints, appeals and remedies (R08 and legal/product policy).
- Source: S2 §§2–3,10; Constitution CP-12.

## 5. Venues, service areas and hotel contexts

### R01-012 — Distinct location meanings
PEWA **shall** distinguish administrative address, optional publicly visitable venue, non-public preparation/dispatch location where supplied, and declared customer service area.
- Acceptance: delivery-only bakery is eligible without publicly exposing its preparation address.
- Source: S2 §§3,6.

### R01-013 — Multiple venues and areas
Authorised staff **shall** manage multiple genuine service venues and/or declared service areas associated with appropriate public brands.
- Acceptance: one restaurant brand can be listed at two public venues; another may declare delivery service coverage without a storefront.
- Source: S2 §§3,6.

### R01-014 — Business-declared delivery responsibility
A venue business may also declare delivery service, and a delivery-only business may declare an area; PEWA **shall** present such service descriptions as business declarations, not PEWA delivery commitments.
- Acceptance: customer can distinguish a service location from an area served; PEWA is not presented as dispatch provider.
- Source: S2 §§1,3,6.

### R01-015 — Configurable service contexts
Authorised business managers **shall** configure applicable food-service contexts independently of business category, including restaurant, bar, breakfast, takeaway, room service or declared delivery, within approved PEWA rules.
- Acceptance: a hotel restaurant can have both public dining and guest-specific room service without converting the latter into a universal requirement.
- Source: S2 §§3–4,7.

### R01-016 — Hotel guests follow customer model
A hotel guest **shall** be treated as a customer under PEWA product meaning; the hotel **shall** determine/configure which eligible menus guests may access, what they may order and which manual/structured engagement modes it offers.
- Acceptance: public hotel café can be open to everyone; restricted room menu remains inaccessible through ordinary public discovery and may not demand a universal PEWA guest account merely because it is a hotel.
- **OPEN:** precise guest eligibility, room relationship, expiry and protected access rules (R07).
- Source: S2 §7; Founder refinement.

### R01-017 — Protect administrative and guest details
Business settings and public publication **shall not** expose internal addresses, private room/guest details, billing contacts or staff information solely because a related business presence or menu is public.
- Acceptance: changing service-area visibility never reveals private preparation address automatically.
- Source: S2 §§3,7,13; Constitution CP-11.

## 6. Organisation team, permissions and audit meaning

### R01-018 — Responsibility-based permissions
PEWA **shall** offer understandable assignment of relevant business responsibilities (organisation administration, brand/menu management, permitted order handling, promotions, reporting, billing and read-only access) without forcing identical access on all staff.
- Acceptance: menu editor can manage authorised content but cannot automatically change subscription billing or another brand.
- Source: S2 §§2–3,13; PD-09C/I.

### R01-019 — Scope and least privilege
Authorised administrators **shall** be able to restrict team actions by organisation, public brand, venue/service context and enabled capability as appropriate.
- Acceptance: a venue attendant cannot accept requests from an unrelated venue or view another brand's protected financial information without permission.
- Source: S2 §3; Constitution CP-11.

### R01-020 — Grant, update, revoke
Authorised administrators **shall** be able to add, adjust and remove staff access, with clear confirmation and protections for sensitive responsibilities.
- Acceptance: revoked user can no longer perform management actions; historical actions they legitimately performed remain accurately attributed, subject to privacy policy.
- **OPEN:** owner recovery, delegation limits and exceptional support authority (R07/R08).
- Source: S2 §§3,13; Constitution CP-10.

### R01-021 — No permission expansion by subscription
Enabling ordering, a new brand or a campaign **shall not** automatically grant every staff member authority to use or administer that capability.
- Acceptance: team member who may view menus is not automatically a billing administrator when ordering is activated.
- Source: S2 §§2–3,10; PD-09.

### R01-022 — Accountable change history
PEWA **shall** preserve the attributable meaning of material organisation identity changes, privilege changes, brand linkage or authorised exceptional changes without giving ordinary staff unrestricted access to personal audit data.
- Acceptance: a staff departure does not erase that person's prior valid menu edits.
- Source: S2 §§3,13; Constitution CP-10/12.

## 7. Business Workspace and continuity

### R01-023 — Single coherent workspace
PEWA **shall** offer one comprehensible Business Workspace with only relevant entitlement-enabled operational controls, while retaining essential profile, menu, staff and account access for menu-only users.
- Acceptance: micro-café can manage menus without configuring ordering; ordering control is neither mandatory nor represented as already enabled.
- Source: S2 §§1–3.

### R01-024 — Menu-only remains complete
The basic subscribing organisation **shall** have meaningful business identity, eligible menu publishing, Directory presence, contact/manual engagement, own-menu offers and ordinary profile/management capabilities without having to purchase ordering consumption or Featured Offers.
- Acceptance: owner can publish specials on own menu without buying PEWA Home sponsored exposure.
- Source: S2 §§1,3,10,12.

### R01-025 — Entitlement does not replace business settings
Business administrators **shall** be able to see what commercial capabilities are active, inactive or restricted and access suitable settings or reactivation routes; PEWA **shall not** erase menus/settings because a subscription lapses.
- Acceptance: suspended organisation can review saved profiles and history and restore payment without re-registering, subject to independent enforcement restrictions.
- Source: S2 §§10–11; PD-12; Constitution CP-10.

### R01-026 — Distinguish restriction reasons
The workspace **shall** distinguish business voluntary unpublication, commercial expiry/restriction and platform-enforced limitations so users understand what they may correct or reactivate.
- Acceptance: a business paying a late subscription does not automatically remove a separate fraud restriction.
- Source: S2 §§10,13; Constitution CP-12.

### R01-027 — Business-observed reporting only
Any foundational overview **shall** restrict claims to activity PEWA actually observes and shall not assert external food sales, payment completion or physical fulfilment merely from menu visits or accepted orders.
- Acceptance: a menu-only venue sees menu views but not invented completed-sales revenue.
- Source: S2 §13; PD-09E.

### R01-028 — Operator boundary
Exceptional PEWA support/restriction actions involving business identity or access **shall** be bounded, attributable and distinct from routine business management. PEWA operators **shall not** routinely impersonate a business to decide order acceptance, change commercial prices or claim readiness.
- Acceptance: PEWA may restrict an impersonated brand but does not become the everyday menu editor.
- Source: S2 §§2,13; Constitution CP-08/12. Detailed operator permissions belong to R08.

## 8. Requirement coverage and dependency ledger

| Coverage | Requirements | Downstream owner |
|---|---|---|
| Guided onboarding and admission | R01-001–006 | R05 subscription states; R08 eligibility |
| Organisation and brand accountability | R01-007–011 | R02 publication; R03 Directory; R08 enforcement |
| Service venue/area/hotel context | R01-012–017 | R02 menus; R03 search; R07 protected access |
| Team and permission responsibility | R01-018–022 | R04 order handling; R05 billing; R07 identity; R08 support |
| Workspace, retention and operator boundary | R01-023–028 | R02–R08 |

**Stage 3 product policy questions to resolve with Founder, not guess:** (1) essential publication/verification fields by applicable market; (2) proof for legitimate multi-brand accountability and transfer; (3) detailed business owner recovery and delegation; (4) the non-technical hotel guest eligibility boundary; (5) notice/correction and appeal guarantees for listing restrictions. These do not justify independent architecture or provider selection.

**Accepted commercial matters deferred:** exact local-currency fees, taxes, ordering unit charge and replenishment; R01 does not change the 10 recoverable-unit commitment or impression-based Featured Offers. **Cross-stage matters reserved:** canonical identity/tenant technical design, storage, MWA contracts, providers and engineering.

## 9. Founder review checklist

Please evaluate:
1. Whether the R01 requirements genuinely cover micro-business, delivery-only, hotel and multi-brand cases without unnecessary onboarding burden.
2. Whether the distinction between organisation accountability, public brand, venue and service area is clear.
3. Whether staff permission scopes and billing separation are sufficient at the product level.
4. Whether any R01 requirement incorrectly assumes an unapproved commercial, legal or architecture choice.
5. Whether the five substantive open policy questions should be decided in R01 now or explicitly handled in a later requirements workstream.

**Disposition requested:** approve R01 requirement direction / request bounded corrections. Do not infer Stage 3 overall approval or closure, or commence architecture or engineering.
