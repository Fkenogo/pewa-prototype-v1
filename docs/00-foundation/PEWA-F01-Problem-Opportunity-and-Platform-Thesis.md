# PEWA-F01 — Problem, Opportunity and Platform Thesis

**Status:** Founder approved  
**Date:** 15 October 2026  
**Programme:** PEWA Foundation (F01 of F05)  
**Authority:** Founder approval of PR #1, 15 October 2026; authoritative PEWA F01 foundation thesis.  
**Implementation:** Not authorised.

## 1. Purpose and status

This Founder-approved document consolidates PEWA foundation discussions prior to defining capability boundaries, architecture or the domain engine. It distinguishes approved F01 direction from design and commercial questions still open. PEWA remains in product foundation/discovery.

## 2. Platform thesis

PEWA is **reusable, multi-tenant menu publishing and ordering infrastructure** for food, beverages and meal-related offerings, capable of serving multiple products, organisations and food-service environments. It is not a general commerce marketplace.

The agreed organisation-side proposition:

> Organisations need a dependable way to define, publish and manage their available offerings, and enable customers or authorised users to make selections or place orders against those offerings, across different channels and operating environments.

The user-side proposition:

> People need a simple, familiar place to find and return to food and beverage menus from participating businesses, explore offerings and, where supported, make selections or place orders without installing a separate app for each business.

PEWA provides access and interaction infrastructure; each listed business remains the recognisable provider and owner of its content, customer interaction and fulfilment.

## 3. Problem definition

**For organisations:** Physical menus, fragmented links, isolated apps and separate communication channels make it difficult to maintain dependable, current menu access and translate published offerings into customer interaction. Even businesses with their own apps may struggle to achieve routine customer usage for a single venue.

**For users:** Customers should not have to scan the same code repeatedly, retrieve an old chat or install a separate app every time they want a menu. They need continuity of access, short paths back to familiar menus and a means to engage the appropriate business.

**Cross-industry opportunity:** Restaurants, cafés, bakeries and hotels share recurring menu publishing/access needs even where their operating contexts differ. PEWA should provide common infrastructure without presuming identical fulfilment workflows.

These are product hypotheses for subsequent validation, not measured market findings.

## 4. Core domain and markets

The core domain remains **food, beverages and meal-related menus**. PEWA must not broaden into an unrestricted product/service catalogue or general e-commerce engine.

**Initial rollout:** restaurants, cafés, bakeries, confectioneries, hotels and comparable food-service businesses. Hotels are included from the beginning: restaurants, bars, room menus and room-service access fit the domain. One organisation may publish multiple menus in different service contexts.

**Future candidates, not initial scope:** hospitals, schools and corporate cafeterias, especially where end users can choose between offerings. Their eligibility, scheduling and standardised-service requirements must not be assumed as initial-product requirements.

## 5. Persistent access and discovery

Each participating business has a persistent web-accessible menu destination, independently reachable after initial access. QR codes, direct web links and WhatsApp are entry and interaction channels, not dependencies for subsequent visits.

**Two complementary destinations:**
- **Business menu:** Business identity prominent; direct access, ongoing return visits and business-specific engagement/order options.
- **PEWA Home:** Prioritises recently accessed menus, optional saved favourites and rapid re-entry; includes search and a route to the separate full directory.
- **PEWA Directory:** Separate destination for exploring or finding participating businesses and their menus.

Customers may first discover PEWA through a particular business and later navigate to other menus. Persistent access does not require repeatedly scanning a QR code or launching WhatsApp. An account is not presumed necessary merely to revisit a stable URL. Mechanics of recents, favourites, cross-device persistence and discovery remain for later definition.

## 6. Two business-enabled modes

The platform supports both, governed by subscription entitlements:

1. **Menu access and manual engagement:** Customer browses and contacts the attendant or business (including ordinary WhatsApp), without recording an order in PEWA. The PEWA journey can end there.
2. **Digital ordering:** Customer places an order; business declares **Order Accepted**, then **Order Ready**. PEWA records and communicates these user actions but does not supervise preparation or physical fulfilment.

Ordering can be initiated in advance of arrival, for dine-in or takeaway, where enabled by the business. Hotel room service and business-managed delivery may be described by the business; PEWA does not operate logistics. 'Ready' is a business-declared status; it must not imply physical delivery has been independently verified.

Customer/biz actors: **Customer → Place Order**; **Business → Order Accepted → Order Ready**. Necessary declines, cancellation, corrections and payment/acceptance safeguards require later engine definition; do not interpret the three primary actions as eliminating exceptions.

## 7. Boundary of responsibility

**PEWA:** hosts/presents menus as supplied, provides persistent access and discovery, facilitates customer engagement, accurately transmits and records enabled orders and declared statuses, and operates platform security, reliability, governance and appropriate reporting mechanisms.

**Business:** remains identifiable as the provider; owns and maintains menu descriptions, prices, availability, images, customer relationship, acceptance, preparation, food quality and safety, table service, collection, hotel service and delivery/fulfilment.

PEWA does **not** independently guarantee business content or food quality. This position does not waive PEWA's own platform-security, consumer-protection, privacy, transaction-integrity or other applicable legal obligations; precise terms and jurisdiction-specific responsibilities require subsequent review.

## 8. Channels and shared infrastructure position

PEWA must not be architected as a WhatsApp bot. Web, QR and WhatsApp are complementary channels backed by PEWA-owned menu and ordering domain capabilities.

The Miledge shared WhatsApp infrastructure/adapter is the intended messaging integration. PEWA should **not** independently build a parallel provider connectivity stack. Shared infrastructure owns transport/provider concerns; PEWA owns menu and order business logic and domain conversation state. Integration contracts and actual supported interactive formats require F02/F03 assessment.

Initial automated conversations should be **structured and deterministic** (categories, lists/buttons where supported, selections, modifiers and predictable ordering). AI-assisted conversations are deferred. No AI should authoritatively invent menu facts, prices, availability or orders.

Other shared-vs-PEWA-owned capabilities—including identity, tenant standards, media, subscriptions, payments and analytics—must be assessed in F02 rather than assigned prematurely. Existing Miledge media guidance MV-206 is a reference, not a PEWA implementation decision.

## 9. Commercial direction

- Business subscriptions enable progressively greater capability: menu publishing, structured engagement, ordering and possibly later AI assistance.
- Existing illustrative Basic/Standard prices are **not approved pricing**.
- Flat subscription/no commission is the working commercial preference, to be tested against messaging and platform economics.
- Where enabled later, payments may occur during **Place Order**; payment confirmation and business acceptance must remain distinct.
- PEWA Home may include **clearly labelled featured menus/items** purchased by participating businesses, as a potential revenue stream separate from subscription. Promotions must not obscure fast access to recents/favourites or misrepresent the business as PEWA.
- Advertising mechanics, promotional pricing, subscription levels, usage limits and payment-provider choices remain open.

## 10. Explicit exclusions

PEWA is not intended to operate:
- A general goods/services marketplace, cross-business checkout or delivery fleet.
- A full restaurant POS, inventory, ingredient purchasing, staff scheduling, kitchen-control or restaurant management system.
- Physical fulfilment, delivery coordination or independent verification of kitchen/transport operations.
- A general-purpose restaurant review network in its initial release.

Potential future **menu accuracy/fulfilment feedback** may be assessed for trust and accountability, but ratings are not an approved implementation feature.

## 11. Identity and trust

On a business menu the **business is primary**: name/identity and responsibility for content and service should be immediately clear. PEWA is visible as the enabling platform, not a merchant pretending to supply the food. PEWA Home/Directory can be platform-branded.

PEWA must maintain appropriate platform rules and integrity controls. Publishing by the business does not remove platform obligations to handle reports, misleading content or applicable legal requirements.

## 12. Approved foundation sequence

| Stage | Subject | Position |
| --- | --- | --- |
| F01 | Problem, Opportunity and Platform Thesis | Founder approved 15 October 2026 |
| F02 | Capability and Domain Boundaries | Not started |
| F03 | Platform Architecture Principles | Not started |
| F04 | Engine Capability Definition | Not started |
| F05 | Product Configuration and Experience Strategy | Not started |

**Sequence:** discuss → challenge → refine → agree → document → proceed. The domain engine comes **after** the platform's problem, boundaries and architectural principles. Customer experience and conversational flow design come **after** engine definition.

## 13. Decisions and questions carried forward

**Founder-approved F01 direction:** narrow menu domain; two-sided proposition; initial food-service/hotel rollout; business-owned content/fulfilment; persistent per-business access; PEWA Home with recents/favourites and separate directory; manual and automated subscription modes; three primary order actions; common WhatsApp adapter; no PEWA-owned logistics; sponsored menu placement opportunity.

**Open for validation or later decision:** actual market evidence; multi-menu organisation semantics; guest/account model; privacy and retention for recents/favourites; order exceptions and payment handling; location/search indexing; business moderation and accountability; advertising controls; shared capability contracts; provider/infrastructure selection; tier names, prices, limits and rollout stages.

## 14. Founder disposition

**Approved:** Founder reviewed and approved PR #1 on 15 October 2026. F01 is closed as the authoritative foundation thesis. F02 discussion and capability-boundary assessment may now begin. This approval does **not** authorise implementation, deployments, provider selection, or premature F03–F05 design.
