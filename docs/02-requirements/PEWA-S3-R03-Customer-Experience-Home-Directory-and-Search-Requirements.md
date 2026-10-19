# PEWA-S3-R03 — Customer Experience, Home, Directory and Search Requirements

**Status:** DRAFT — FOUNDER GITHUB REVIEW; NOT APPROVED  
**Date:** 17 October 2026  
**Stage:** Stage 3 Requirements — IN PROGRESS  
**Primary authority:** [Founder-approved S2 Product Definition](../01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md), [S2 closure](../01-project-home/PEWA-S2-CLOSE-Founder-Disposition-and-Closure.md), [Constitution](../01-project-home/PEWA-S1-CONST-001-Product-Constitution.md), [R01](PEWA-S3-R01-Business-Foundation-Requirements.md) and [R02](PEWA-S3-R02-Menu-and-Offering-Management-Requirements.md).  
**Foundation research consulted:** [F05 Product Experience Strategy](../research/PEWA-F05-PCES-001/03-Product-Experience-Strategy.md) and [Cross-Context Variation](../research/PEWA-F05-PCES-001/05-Cross-Context-Consistency-and-Variation.md); [F02 classification principles](../research/PEWA-F02-R01-Baseline/01-Baseline-Principles-and-Boundaries.md) and [business extensions](../research/PEWA-F02-R01-Baseline/03-Business-Extensions-and-Governance.md). Earlier research informs requirements but does not override subsequent Founder-approved direction.

**Boundary:** Observable customer-facing product requirements; not a screen mockup, indexing system, ranking algorithm, identity design, analytics implementation, provider choice, architecture or release plan.

## 1. Purpose and scope

PEWA supports three distinguishable customer destinations: **business-specific menu** (business first), **PEWA Home** (rapid return and clearly labelled Featured Offers) and **PEWA Directory** (organic exploration across eligible public business menus and offerings). A customer may enter any of them directly. Optional PWA convenience enhances but never gates web access.

R02 owns which content is published, context-specific availability and optional shared classifications. R03 owns discoverability and customer presentation of intentionally public eligible content. R04 owns structured-order interactions, R06 sponsored exposure, R07 guest identity/privacy and notifications. No discovery behaviour may silently convert a customer browse into a PEWA order or imply verified business outcomes.

**Traceability convention:** R03-### = proposed normative requirement; each has customer-observable acceptance and approved Stage 2 source. OPEN entries are expressly unresolved policies, not decisions.

## 2. Direct business menu experience

### R03-001 — Direct business-first entry
PEWA **shall** let customers reach an eligible intentionally public business menu through its stable web destination, including a QR-originating URL, without first visiting PEWA Home, scanning again, opening WhatsApp, registering or installing an app.
- **Acceptance:** a person returning to a café's saved direct link immediately reaches that café menu; an optional route to PEWA Home exists without forcing navigation away.
- **Source:** S2 §§1,4,6; CP-03/04; F05 XS-03.

### R03-002 — Clear supplier and platform distinction
A business menu **shall** prominently identify the supplying business and relevant service context; PEWA branding **shall** appear as the enabling platform rather than the food merchant.
- **Acceptance:** customer can identify whose food and service the menu describes before using contact or ordering.
- **Source:** S2 §§1–2,4; CP-03; F05 XS-03.

### R03-003 — Faithful offering presentation
The customer-facing menu **shall** present the business-published item name, description, image where supplied, customer-facing category, applicable declared price/currency and availability status consistently with R02.
- **Acceptance:** a business's “Nos plats locaux” remains its label; optional shared classification does not replace it with PEWA terminology.
- **Source:** S2 §§4–6; R02-007–017,019–026,035–042.

### R03-004 — Manual engagement without forced cart
For a subscribed menu-only business, the menu **shall** offer business-configured permitted contact/manual-engagement pathways, without introducing PEWA order placement or implying an order exists.
- **Acceptance:** a visitor can browse and contact the café without shopping cart, a PEWA acceptance state, or a mandatory account.
- **Source:** S2 §§1–2,8; F05 XS-05.

### R03-005 — Ordering capability is explicit and conditional
The menu **shall** expose structured-order entry only when both the business entitlement and enablement permit it and the relevant menu/service context is eligible.
- **Acceptance:** the same public menu remains meaningful when structured ordering is switched off; no disabled ordering control is misrepresented as active.
- **Source:** S2 §§2,8,10; R04/R05 later.

### R03-006 — Public versus protected experiences
Intentionally public menus **shall** remain open as approved; protected hotel/guest menus **shall** not disclose their contents or eligibility details to unauthorised visitors, and shall be reachable only through applicable business-configured access.
- **Acceptance:** hotel public restaurant menu can be visited by anyone; guest-only room offerings cannot be found through a public search.
- **Source:** S2 §7; CP-11; R02-030. Detailed guest verification belongs to R07.

### R03-007 — Honest unavailability and suspension
Customer access **shall** clearly distinguish an item declared unavailable, a business-hidden/unpublished menu, and a commercially suspended public destination. Do not silently send a visitor to an unrelated provider or imply an unavailable item is orderable.
- **Acceptance:** an old direct menu link during subscription suspension shows a neutral unavailable state rather than another business's offerings.
- **Source:** S2 §§4,10; R02-024,031.

## 3. PEWA Home — fast return, personal controls and promoted content

### R03-008 — Home as a return destination
PEWA Home **shall** prioritise convenient access to recently visited eligible business menus, customer-saved favourites, relevant navigation to Directory and eligible paid Featured Offers, without requiring customers to start in Directory.
- **Acceptance:** visitor finds an accessible recently used menu without entering its name again.
- **Source:** S2 §6; PD-07; F05 XS-04.

### R03-009 — Recent menus
PEWA **shall** support automatic recording of eligible recently visited menus in the relevant customer's local experience, subject to appropriate controls and data availability.
- **Acceptance:** reopening Home displays a recently accessed eligible public menu; no record of another person's protected guest menu appears through shared public discovery.
- **Source:** S2 §6; PD-07D/E. R07 owns privacy controls.

### R03-010 — Clear and remove recents
A customer **shall** be able to remove individual recently visited items and clear permitted recents without requiring account registration.
- **Acceptance:** a customer can clear local recents; PEWA does not repopulate erased items merely because a previous link is still known.
- **Source:** S2 §6; PD-07.

### R03-011 — Local favourites without compulsory account
Customers **shall** be able to save and remove favourite eligible menus locally, without registering, while optional verified customer identity may provide permitted multi-device sync.
- **Acceptance:** a guest saves a bakery and later revisits it on the same available local experience; account creation is optional.
- **Source:** S2 §6; PD-07F/G. Identity/recovery scope R07.

### R03-012 — Handle changed favourite eligibility truthfully
If a saved or recent menu becomes unavailable, withdrawn, protected or suspended, Home **shall** not misleadingly represent it as currently browsable or public. The customer may retain/remove a reference subject to privacy controls and permissible access.
- **Acceptance:** subscription-suspended café is not shown as an actively orderable favourite.
- **Source:** S2 §§6,10; CP-10/11.

### R03-013 — Home priorities resist advertisement takeover
Paid Featured Offers **shall** remain visually and semantically separate from Home's rapid-return recents/favourites and essential navigation; paid placement shall not make customer returns unusable.
- **Acceptance:** customer can find favourites despite active campaigns.
- **Source:** S2 §§6,12; F01 §5, F05 XS-04.

### R03-014 — Paid content clearly disclosed
A promoted menu/item appearing in Home **shall** be labelled as sponsored/featured paid exposure and identify its supplying business; paid placement shall not imply endorsement or guaranteed quality.
- **Acceptance:** a featured breakfast menu cannot be mistaken for an unpaid organic result or PEWA-operated food business.
- **Source:** S2 §§6,12; PD-08; R06 owns campaign charging.

## 4. Separate Directory and search

### R03-015 — Separate Directory destination
PEWA **shall** provide a Directory distinct from Home and any individual business menu, organised around prominent search and exploratory routes through food/drink groupings, business types and geography.
- **Acceptance:** a customer reaches a discovery page rather than only an alphabetical list or a paid-offer-only feed.
- **Source:** S2 §6; PD-08.

### R03-016 — Search eligible business brands and menus
The Directory **shall** allow discovery of eligible public business names/identities and their intentionally published public menus.
- **Acceptance:** customer can search a café name and select that café's relevant published menu.
- **Source:** S2 §6; CP-04/11.

### R03-017 — Search eligible individual offerings
Search **shall** cover eligible published menu items and available business-declared offering descriptions, not only business titles.
- **Acceptance:** searching “Fish & Chips” can return relevant item results from multiple eligible restaurants with identifiable suppliers.
- **Source:** S2 §6; PD-08B.

### R03-018 — Business-controlled categories and collections
The Directory **shall** use relevant business-authored item words, menu collections, tags and optional shared classifications as discovery aids without requiring merchants to adopt a single taxonomy or rename display categories.
- **Acceptance:** “Brochettes du Lac” or “Auntie's Fermentation Flights” remains findable in permitted public search whether or not a shared class is selected.
- **Source:** S2 §6; R02-009/010/035–042; F02 classification research interpreted under later product direction.

### R03-019 — No compulsory shared classification
Missing, ambiguous, broad or provisional optional shared classification matches **shall not**, by themselves, remove otherwise eligible business menu content from relevant search.
- **Acceptance:** local food name with no catalogue mapping can still be found by its published spelling.
- **Source:** S2 §§4,6; R02-036–042.

### R03-020 — Conservative synonym and regional handling
PEWA **shall** preserve business-provided food wording and avoid asserting uncertain region-specific synonyms, translations, ingredients or food identities as proven equivalents.
- **Acceptance:** searching “isombe” does not automatically return a fish solely because an old research submission suggested that invalid synonym.
- **Source:** R02-038/040; F02 research caution.

### R03-021 — Category, business type and food exploration
Directory discovery **shall** offer accessible ways to browse public food/drink categories and relevant participating business types, with optional shared vocabulary helping customers find similar offerings across otherwise different merchant labels.
- **Acceptance:** customer can explore bakery pastries across eligible bakeries while each supplier's original product wording is retained.
- **Source:** S2 §6; PD-08.

### R03-022 — Customer-selected geography
Customers **shall** be able to choose a relevant area for discovery, with current-location assistance only after appropriate voluntary permission; denying location access shall not prevent using Directory search.
- **Acceptance:** customer manually searches another city without location consent.
- **Source:** S2 §6; PD-08.

### R03-023 — Genuine venue versus delivery area
Search/geographic discovery **shall** distinguish visitable premises from business-declared delivery coverage and shall not expose nonpublic registered, preparation or dispatch addresses as storefronts.
- **Acceptance:** delivery-only bakery can appear for its declared service area without a fake physical customer venue.
- **Source:** S2 §§3,6; R01-012–014.

### R03-024 — Context and declared availability
Results **shall** make relevant service context and business-declared eligibility clear where appropriate; displayed unavailable items must not appear as immediately available for ordering.
- **Acceptance:** an item marked unavailable can remain visibly listed if business chose this; a hidden item is omitted from public search.
- **Source:** S2 §§4,6; R02-019–025. Requested-service-time rules R04.

### R03-025 — Publication and privacy filters
Public Directory **shall** exclude unpublished, hidden, archived, private or access-restricted menus/items, suspended listings where publication eligibility is absent, and customer/organisation administrative information.
- **Acceptance:** searching a hotel brand reveals public dining but not restricted room menus or guest identifiers.
- **Source:** S2 §§6–7,10,13; CP-11.

### R03-026 — Organic ranking integrity
Organic result ordering **shall** follow intelligible relevance/eligibility principles independent of promotional payment; paid campaigns belong to separately labelled placement.
- **Acceptance:** a non-advertising bakery remains eligible for relevant organic results without buying featuring.
- **Source:** S2 §§6,12; PD-08E/F.
- **OPEN:** precise relevance signals, ambiguity handling and fairness oversight need Founder/R03 policy review; no algorithm selected.

### R03-027 — Paid placement cannot masquerade as organic
Any paid discovery placement **shall** be distinguished from ordinary search results and shall not secretly purchase organic rank.
- **Acceptance:** promoted result is visibly sponsored and does not change a supplier's unpaid ranking by mere payment.
- **Source:** S2 §12; R06 commercial scope.

### R03-028 — Direct discovery to intended menu
Selecting a search result **shall** lead customers to the relevant offering/business menu and service context rather than force unrelated onboarding, account creation, WhatsApp launch or PEWA Home detour.
- **Acceptance:** Fish & Chips result leads to supplying restaurant's appropriate published menu context.
- **Source:** S2 §§1,4,6.

## 5. Optional PWA and communication handoff

### R03-029 — Optional install
PEWA **shall** offer installable-web convenience without requiring installation or registration to browse eligible public menus, save local favourites, search or view a permitted protected guest order.
- **Acceptance:** declining install does not hide a café menu or disable Directory search.
- **Source:** S2 §§6,8–9; PD-07.

### R03-030 — Benefit-led, dismissible invitations
Installation prompts **shall** be understandable, contextual, dismissible and respectful of user choice, emphasising fast return, recents, favourites, offers and supported order access without falsely claiming installation is mandatory.
- **Acceptance:** customer can dismiss an invitation and continue browsing without repeated obstruction.
- **Source:** S2 §6; PD-07.

### R03-031 — Privacy and consent separate from install
PEWA **shall** distinguish local browsing preferences, account identity, device push permission and separate marketing/promotion consent; installing the PWA grants none of the other permissions automatically.
- **Acceptance:** adding PWA to home screen does not subscribe customer to marketing notifications or expose favourites to participating businesses.
- **Source:** S2 §§6,9,13; R07.

### R03-032 — Order-status handoff stays available
Where a customer submits a structured order, the experience **shall** provide a clear route to protected order status without compulsory PWA install, push consent or outbound WhatsApp.
- **Acceptance:** guest closes menu and returns to authorised web order status even if notifications are denied.
- **Source:** S2 §§8–9; R04/R07.

## 6. Cross-cutting trust, language and accessibility

### R03-033 — Observability without fabricated outcomes
PEWA **shall** distinguish a menu view, promotion exposure, customer contact/selection and actual PEWA recorded order acceptance; it shall not imply food purchase, conversion, readiness or physical delivery from a view.
- **Acceptance:** Home impressions are not shown to the customer/business as guaranteed completed meal sales.
- **Source:** S2 §§2,8,12–13; R06.

### R03-034 — Business authenticity, complaints and corrections
Customer experience **shall** identify the business supplier and offer an appropriate way to report misleading or problematic public content, with PEWA handling its platform obligations while preserving business authority over food/service declarations.
- **Acceptance:** reporting a misleading restaurant listing does not silently cause a PEWA operator to modify menu prices or declare order readiness.
- **Source:** S2 §§1–2,13; CP-12; F05 XS-04/07.

### R03-035 — Respect business menu language
Business-supplied names and chosen language **shall** remain visible without automatic unreviewed translation or replacement by shared labels. If PEWA offers search language assistance, uncertainty shall not masquerade as verified equivalence.
- **Acceptance:** original regional dish wording remains visible after search through a broader relevant label.
- **Source:** S2 §4–6; F02 research §Regional humility; R02-038.

### R03-036 — Usable without optional personalization
Home and Directory **shall** remain usable for new visitors, people with empty recents, people who decline location permission and customers who disable optional personalization.
- **Acceptance:** first-time visitor can search food and explore eligible businesses without storing favourites, turning on push or granting GPS access.
- **Source:** S2 §6; CP-04/11.

### R03-037 — English primary platform navigation
PEWA **shall** use English as its primary platform interface language for navigation and platform-authored controls, without requiring business-authored menu information to be in English.
- **Acceptance:** English navigation can present a business category in French, an item name in Kirundi and an item description in Swahili without replacing or rejecting them.
- **Source:** Founder language clarification, 17 October 2026; S2 §§4,6; R02-037–038.

### R03-038 — Unrestricted business-authored menu languages
PEWA **shall** allow businesses to enter and publish their chosen languages, including mixed-language menu names, categories, item names and descriptions, with their original wording preserved. English translation is not a condition of publication.
- **Acceptance:** a menu contains “Brochettes de chèvre”, “Ibiharage” and “Grilled Fish” with different-language descriptions and remains eligible for public browsing and ordinary search.
- **Source:** Founder language clarification; business menu control and flexible classification in S2/R02.

### R03-039 — French platform localisation is optional, not imposed
French-language platform navigation **may** be considered as a separately prioritised product enhancement; this Stage 3 baseline **shall not** require complete French translation of all platform navigation, notifications, onboarding, billing and error messaging as a condition of serving multilingual business menus.
- **Acceptance:** a business can publish French menu content while the PEWA Business Workspace and customer navigation remain English.
- **OPEN:** when and how French platform localisation becomes a requirement needs explicit future product prioritisation; no implementation approach selected.
- **Source:** Founder language clarification, 17 October 2026.

## 7. Journeys, coverage and decision ledger

**Direct customer:** scans restaurant QR → sees business-first public menu → reads food and declared price → contacts restaurant manually or submits structured request only if business enabled it → may later revisit direct link without QR.

**Return visitor:** visits PEWA Home → recent menu or locally saved favourite → returns to business context; optional install is benefit-led and can be dismissed.

**Discovery:** enters Directory → searches “Fish & Chips” or navigates food categories/geography → sees eligible public item and its supplier → opens menu; organic relevance independent of promotional payment.

**Hotel guest:** accesses hotel-approved public or protected menu under hotel-defined permissions; guest remains ordinary PEWA customer, not a mandatory PEWA-specific identity class; protected room-service content is never publicly indexed.

**Delivery-only:** restaurant/bakery declares service area → appears to relevant customer searches without falsely claiming a walk-in site.

**Subscription change:** previously favourited business becomes suspended → Home does not imply current public menu/order eligibility; valid already-admitted order status remains available through protected continuity elsewhere.

| Scope | Requirements | Collaboration |
|---|---|---|
| Business menu display | R03-001–007 | R01/R02, R04 |
| Home recents/favourites/featured | R03-008–014 | R06/R07 |
| Directory/search/location | R03-015–028 | R02/R06/R07 |
| PWA and order-status handoff | R03-029–032 | R04/R07 |
| Trust, language, newcomer access | R03-033–036 | R06/R07/R08 |

**Founder language disposition proposed for this PR:** English remains primary PEWA navigation language; business-authored names, categories and descriptions can be in any language or mixed languages; French platform navigation is a future option rather than a mandatory current requirement. Original business wording is preserved and unverified translations/synonyms are not imposed. Founder confirmation of the R03 revision remains pending.\n\n**Founder-policy matters genuinely open:**
1. Organic relevance principles and transparency: what relevant business/item signals matter, how to address ambiguous queries and low-observation markets, without selling rank.
2. Search handling of incomplete/stale availability declarations, especially distinctions between visible-unavailable and ineligible-for-order, within business authority.
3. Local recents/favourites privacy, retention, recovery and cross-device handling (R07); no compulsory identity.
4. Multi-language search assistance and unknown regional synonyms: strict preservation of original business meaning and correction pathways.
5. Campaign impression qualification when a promoted feature is actually displayed on-screen, preserving Founder's opportunity-to-see rule; R06 owns commercial measurement rather than R03.
6. Protected hotel audience and order access recovery (R07), without a universal guest account.

**Settled controls not for reopening:** organic search distinct from paid exposure; eligible offerings searchable; flexible business categories and optional shared classification; no compulsory PWA/account/location; web independence; customer-order payments excluded; actual fulfilment is business responsibility; no AI-generated business facts.

## 8. Founder review request

Review the 39 proposed R03 requirements for comprehensive customer experience and compatibility with approved R01/R02, particularly: business-first direct menus; Home recents/favourites versus paid placement; organic findability of local/custom categories; separate Directory and geo/service-area logic; guest/privacy and install consent.

**Status stays DRAFT until a separate Founder approval and controlled GitHub merge. Stage 3 continues; Stages 4–6 remain NOT STARTED.**
