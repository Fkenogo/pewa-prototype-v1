# PEWA-S3-R02 — Menu and Offering Management Requirements

**Status:** DRAFT — FOUNDER GITHUB REVIEW REQUIRED; NOT APPROVED  
**Date:** 17 October 2026  
**Stage:** Stage 3 Requirements (IN PROGRESS)  
**Baseline:** [Approved Stage 2 Product Definition](../01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md), [Stage 2 closure](../01-project-home/PEWA-S2-CLOSE-Founder-Disposition-and-Closure.md), [Product Constitution](../01-project-home/PEWA-S1-CONST-001-Product-Constitution.md), [R01 Business Foundation](PEWA-S3-R01-Business-Foundation-Requirements.md)  
**Foundation research and reconciliation context:** [Founder-approved F02-R01-C principles](../research/PEWA-F02-R01-Baseline/01-Baseline-Principles-and-Boundaries.md), [34-entry starter catalogue](../research/PEWA-F02-R01-Baseline/02-Starter-Classification-Catalogue.md), [business extensions/governance](../research/PEWA-F02-R01-Baseline/03-Business-Extensions-and-Governance.md) and [worked examples](../research/PEWA-F02-R01-Baseline/04-Worked-Menu-Examples.md). These F02-R01 materials are foundational research and a previously accepted practical reference, not a blanket approval of all earlier R01–R04 research or an authority to override later Founder Product Definition decisions. Later approved product decisions control where inconsistent; retain useful classification/search/safety insights and reconcile contradictions explicitly. This is not a mandatory taxonomy or schema.\n**Authority boundary:** Defines observable product requirements only. No data schema, user-interface design, provider, architecture, engineering or release scope is selected.

## 1. Purpose, ownership and terms

R02 defines the business-authorised creation, organisation, configuration, publication and lifecycle of food-service menus and offerings. It must be valuable for **menu-only** subscribers, without compelling PEWA structured ordering.

**Organisation / public brand / venue / service area / service context** are governed by R01. R02 owns the published menu and offering behaviour attached to those entities. R03 owns customer discovery/Directory and presentation; R04 ordering configuration and submitted order meaning; R05 entitlements and usage; R06 Featured Offers; R07 protected customer identity; R08 operator exceptions.

**Menu:** an independently governed, recognisable presentation of offerings for authorised business/service contexts. **Offering:** a business-declared food/beverage item; may be a single composite meal. **Category or collection:** business-created, customer-facing grouping, with business-selected names, language, sequencing and presentation, distinct from optional PEWA shared classification. **Shared food/beverage classification:** optional, non-exclusive discovery guidance; the historical 34-entry v0.1 catalogue is a useful initial reference, not a closed hierarchy, mandatory menu scheme or universal synonym dictionary. **Shared offering content:** explicitly reusable descriptive content; **contextual declaration:** context-specific price, currency, eligibility and availability. **Published:** intentionally exposed according to public/protected reachability; not merely saved.

Each requirement uses **R02-###** and includes an observable acceptance condition and Stage 2 source. "OPEN" means a policy requires an explicit later decision; it is not implicitly approved.

**Reconciliation rule:** The earlier F02 R01–R04 foundation research is input, not a substitute for later Founder product authority. Requirements should preserve useful discoveries while giving precedence to subsequent Stage 2 approvals. Menu categorisation primarily improves **customer searchability, browsing and findability**; businesses retain flexible custom groupings, naming and presentation; shared suggestions cannot restrict publication. Safety-related caution is retained without silently adopting a legal or regulatory policy.

## 2. Menu foundations and contextual ownership

### R02-001 — Create multiple menus
An authorised business user **shall** be able to create, name, maintain and independently manage multiple menus within legitimate organisation/public-brand relationships.
- **Acceptance:** a café can have breakfast, lunch and drinks menus without an additional per-menu base subscription; one hotel's restaurant, bar and room service can have separate menus.
- **Source:** Stage 2 §§3–4, 10; PD-02B.

### R02-002 — Associate menus with authorised contexts
Every menu **shall** identify its accountable public business and permitted applicable brand, venue/service area and service-context associations; changes shall respect user authority and not silently alter unrelated contexts.
- **Acceptance:** bar edits do not silently reassign restaurant or guest menus; a delivery-only bakery can maintain a menu without a public venue.
- **Source:** Stage 2 §§2–4, 7; R01-008,012–016.

### R02-003 — Independent configuration
A business **shall** configure each menu's categories, offerings, visibility, permitted customer mode, contextual pricing and service eligibility separately, subject to business enablement and PEWA product rules.
- **Acceptance:** same organisation can publish a public café menu and restricted room-service menu with independently controlled prices and eligibility.
- **Source:** Stage 2 §§4–5,7; PD-02C–I.

### R02-004 — Public/protected/unpublished lifecycle
A menu **shall** distinguish intentionally public, appropriately protected/restricted and unpublished states; unpublished and protected content shall not enter public search or Directory merely by being saved.
- **Acceptance:** room-only menu does not appear in public Directory; draft menu never appears in public search.
- **Source:** Stage 2 §§4,6–7; Constitution CP-04/11.

### R02-005 — Stable business-specific access
An eligible public published menu **shall** have a persistent business-specific web destination independent of QR scanning, WhatsApp and customer account registration.
- **Acceptance:** returning customer can open that business menu by its web link without restarting an external channel.
- **Source:** Stage 2 §§4,6; Constitution CP-04. Link technical form is not specified.

### R02-006 — Menu status clear to its administrator
Authorised managers **shall** distinguish draft, published, hidden/unpublished, restricted, business-archived and commercially suspended states, including a clear reason when PEWA entitlement or enforcement prevents exposure.
- **Acceptance:** manager does not confuse a manually hidden menu with a subscription-suspended public presence.
- **Source:** Stage 2 §§4,10; R01-025–026.

## 3. Offerings, grouping and content reuse

### R02-007 — Offering descriptive content
An authorised user **shall** manage offering name, meaningful description, relevant images, business-supplied identifiers and categories/tags necessary for honest menu presentation.
- **Acceptance:** item can be clearly identified without a photo; public description never claims independent PEWA food verification.
- **Source:** Stage 2 §§2,4.

### R02-008 — Composite offerings
An offering **shall** support a composite meal or set as one business-supplied item and one customer-facing offering without requiring recipe, ingredient stock or inventory management.
- **Acceptance:** a Big Breakfast combining eggs, toast and drink can appear as one priced offering.
- **Source:** Stage 2 §4; PD-03A.

### R02-009 — Business-configurable menu categories
Authorised staff **shall** create, name, arrange and maintain meaningful menu categories and assign eligible offerings to relevant categories, including reuse where configured.
- **Acceptance:** beverage appears in breakfast and drinks groupings without requiring duplicate independent pricing records for every placement.
- **Source:** Stage 2 §§4,6; PD-04A.

### R02-010 — Business categories distinct from optional shared classification
PEWA **shall** preserve business-authored customer-facing menu categories, collections, names, ordering, nesting, language and presentation, regardless of whether any optional PEWA shared classification applies. An optional mapping to one or more shared classes **may** support discovery; it **shall not** rename, recategorise or block publication of an unmapped business item.
- **Acceptance:** a café publishes a customer-facing “Auntie’s Fermentation Flights” collection with no approved shared match; another business uses its own “Local Plates” label while optionally mapping relevant dishes to a shared food class; both remain searchable by their own words under R03.
- **Source:** Stage 2 §§4,6; PD-08B/G; F02-R01-C Principles §§1–4 and Business Extensions §Business menu control.

### R02-011 — Explicit cross-menu reuse
A business **shall** be able to reuse offering descriptive content across authorised menus, with clear indication of which fields are shared versus independently configured.
- **Acceptance:** updating shared item description identifies which published menu presentations will be affected; one menu's price does not silently change another.
- **Source:** Stage 2 §4; PD-02D, PD-03H.

### R02-012 — Predictable change propagation
PEWA **shall** make the scope and effect of a shared-content change understandable before publication and preserve unaffected contextual declarations.
- **Acceptance:** a business can publish a typo correction in a reused description without unintentionally changing availability or price in other locations.
- **Source:** Stage 2 §4; Constitution CP-10.

### R02-013 — Content attribution and correction
PEWA **shall** distinguish business-supplied content from platform rules and preserve appropriate change attribution and legitimate corrective publication without falsifying historic transactions.
- **Acceptance:** menu price correction changes prospective display but never silently updates amounts previously submitted in orders.
- **Source:** Stage 2 §§2,4,8; Constitution CP-03/10.

## 4. Price, currency and customer truth

### R02-014 — Business-declared applicable prices
The responsible business **shall** set prices for offerings applicable to permitted menu, venue and service contexts, and PEWA **shall** present those as business-supplied prices.
- **Acceptance:** same offering has one price for takeaway and another for room service where configured, without silent substitution.
- **Source:** Stage 2 §§2,4–5; PD-02F.

### R02-015 — Business-configured currency by pricing context
A business **shall** select a supported currency for a relevant menu/pricing context, and eligible displayed item prices **shall** be unambiguous about currency.
- **Acceptance:** hotel may display BIF in one context and USD in another if supported; customer is never shown an unexplained mixed-currency total.
- **Source:** Stage 2 §5; Founder final reconciliation.

### R02-016 — Distinguish menu presentation from order totals
Public display of declared menu prices **shall not** require ordering enablement or an interactive item configurator. When ordering is enabled, R04 shall establish one explicit order currency and a coherent resolved total before submission.
- **Acceptance:** menu-only café shows prices without a cart; entitled ordering context does not silently sum BIF and USD.
- **Source:** Stage 2 §§4–5,8; PD-04B/C.

### R02-017 — Declare context price changes prospectively
Business price edits **shall** affect applicable future publication and eligibility without rewriting prior order selection and submitted-price history.
- **Acceptance:** editing displayed Fish & Chips price leaves an already submitted customer's original amount intact; any material post-submission change follows R04 amendment consent.
- **Source:** Stage 2 §§4–5,8; Constitution CP-10.

### R02-018 — Distinguish standard price from offers
Businesses **shall** be able to publish eligible offers/specials on their own menu under core subscription capability, with sufficient declared terms to avoid misleading price or eligibility claims.
- **Acceptance:** a bakery can display a seasonal offer on its own page free of separate PEWA Home promotional purchase.
- **Source:** Stage 2 §12; PD-07C/D. R06 owns separately paid exposure.

## 5. Availability, periods and declarations

### R02-019 — Business-owned availability
Availability **shall** be a business declaration; PEWA **shall** apply presentation and eligibility rules but **shall not** claim real-world stock confirmation or automatically infer kitchen fulfilment.
- **Acceptance:** "Available" means business-declared; no automatic "Ready" state from time passing.
- **Source:** Stage 2 §§2,4,8; Constitution CP-03/12.

### R02-020 — Context-sensitive availability
Businesses **shall** declare availability independently by applicable menu, location and service context rather than making a forced global all-or-nothing choice.
- **Acceptance:** lunch item is unavailable in breakfast menu while available in lunch menu.
- **Source:** Stage 2 §4; PD-02G, PD-03D/E.

### R02-021 — Recurring and bounded schedules
The menu capability **shall** support recurring time windows, explicit date ranges and seasonal periods for declared item/menu availability, plus appropriate manual exceptions.
- **Acceptance:** weekend breakfast or seasonal drinks can be scheduled without indefinite manual daily toggles.
- **Source:** Stage 2 §4; PD-03D.

### R02-022 — Immediate business corrections
Authorised users **shall** be able to update declared availability promptly without mandatory republication of every descriptive field.
- **Acceptance:** restaurant marks an item unavailable immediately while a longer description rewrite remains a draft.
- **Source:** Stage 2 §4; PD-03F.

### R02-023 — Time-bounded manual overrides
A business **shall** be able to set a manual availability override with an understandable defined end or controlled until-reversed rule, and PEWA **shall** distinguish it from recurring baseline conditions.
- **Acceptance:** temporarily unavailable item reverts under the chosen rule; no ambiguous permanent override hidden from business.
- **Source:** Stage 2 §4; PD-03G.
- **OPEN:** permitted precedence of overlapping date/time and override declarations should be resolved in R02 policy, not guessed by implementation.

### R02-024 — Visible unavailable versus hidden
A business **shall** choose between displaying an unavailable offering with a truthful unavailable indication and hiding it from public menu presentation.
- **Acceptance:** customer cannot interpret displayed unavailable item as eligible for submission; hidden item cannot be found in ordinary public offering results.
- **Source:** Stage 2 §4; PD-03C.

### R02-025 — Service-time eligibility
Where ordering supports a requested future service time, applicable declared menu/item eligibility **shall** be evaluated for that requested time and clearly communicated, without promising supply or fulfilment.
- **Acceptance:** item unavailable during selected service window cannot be silently ordered based solely on its current-day availability.
- **Source:** Stage 2 §§4,8; PD-03J. R04 owns requested-service-time order behavior.

### R02-026 — Current and historic truth separation
A later item unavailability declaration, menu edit, unpublication or archive **shall not** alter an already submitted order's recorded offered terms or business-declared outcomes.
- **Acceptance:** order for now-hidden item remains visible in protected history with the correct recorded details.
- **Source:** Stage 2 §§4,8,10; Constitution CP-10.

## 6. Publishing, archive, access and channel safeguards

### R02-027 — Draft-and-publish for substantive edits
PEWA **shall** let business users prepare substantive descriptive/menu edits before making them public, with a clear publish action and visibility of affected contexts.
- **Acceptance:** editing shared item text in draft does not unexpectedly appear on public menus before intended publication.
- **Source:** Stage 2 §4; PD-03F.

### R02-028 — Authorized publication and unpublication
Only authorised business actors or bounded authorised platform restrictions **shall** change public publication eligibility, with distinguishable reasons and historical meaning.
- **Acceptance:** ordinary staff may edit drafts without automatically publishing; PEWA-enforced suspension remains separate from business voluntary hide.
- **Source:** Stage 2 §§3–4,10,13; R01-018–026.

### R02-029 — Reversible archive
Authorised business users **shall** be able to archive and restore menu/offering content where permitted, without creating a false historic absence.
- **Acceptance:** archived drink restored for later seasonal sale retains appropriate context while already accepted orders still show prior selections.
- **Source:** Stage 2 §4; PD-03I.

### R02-030 — Protected menus and hotel selections
A protected menu **shall** only be viewable/engageable within the business-configured permitted customer audience and access conditions, while ensuring that public hotel menus remain independently public if selected.
- **Acceptance:** room-service menu is not indexed publicly, while hotel's public restaurant menu remains accessible to everyone; guest is a customer, not a mandatory separate platform identity.
- **Source:** Stage 2 §7; R01-016. Exact protected guest eligibility/verification is **OPEN** for R07.

### R02-031 — Subscription changes and retained content
When base subscription lapses beyond grace, new public publication and relevant engagement **shall** be restricted according to commercial policy, while organisation menus, drafts, media references and content history remain available to authorised business account holders subject to lawful retention.
- **Acceptance:** expired business can reactivate its established menu instead of rebuilding; a valid previously admitted order remains resolvable under R04/R05 rules.
- **Source:** Stage 2 §§10–11; PD-11/12.

### R02-032 — Third-party channel consistency
An offering's name, selected pricing context and business-declared eligibility **shall** retain equivalent product meaning in independent web and any permitted WhatsApp interactive menu channel; PEWA **shall not** invent missing channel facts.
- **Acceptance:** WhatsApp selection cannot silently alter currency or permit ordering an item that the same applicable web ordering context disallows.
- **Source:** Stage 2 §§4–5,8–9; Constitution CP-04. Adapter and channel mechanics deferred to competent future stage.

### R02-033 — Public discovery integrity
Eligible public published offerings **shall** be available for ordinary PEWA Directory discovery according to R03 relevance rules; publishing alone **shall not** imply paid search rank or PEWA endorsement.
- **Acceptance:** eligible Fish & Chips appears as searchable content; purchasing Featured Offers does not boost its organic relevance rank.
- **Source:** Stage 2 §§6,12.

### R02-034 — Privacy and public content boundaries
Publication **shall** expose only intended menu/business-facing information and **shall not** disclose administrative addresses, room data, private staff/contact records or confidential customer information.
- **Acceptance:** business can display a service area without publishing a private kitchen/dispatch location.
- **Source:** Stage 2 §§3,7,13; Constitution CP-11.

## 7. Foundation-informed, later-decision-governed classification and safety requirements

### R02-035 — Multi-dimensional menu meaning
PEWA **shall** preserve the useful distinction between eight product concepts, where applicable, instead of forcing one universal category tree: (1) food/beverage identity, (2) business category/collection, (3) meal occasion, (4) course/role, (5) sellable/composite item, (6) modifier/option, (7) attribute/declaration, and (8) search/discovery terminology.
- **Acceptance:** grilled fish may be optionally classified as fish/grilled food while appearing under a business's “Lake Favourites,” offered at lunch, used as a sharing plate, and supporting separately described options; none of these meanings automatically becomes the other's parent category.
- **Source:** F02-R01-C Principles §Eight separate menu dimensions; worked restaurant and hotel examples.

### R02-036 — Flexible optional classification reference
PEWA **shall** support optional broad, partial, multiple, provisional or absent shared food/beverage classification matches as aids to discovery. The historical 34-entry v0.1 catalogue **may inform** the initial suggestions but **shall not** become a mandatory, exhaustive or fixed platform classification policy by virtue of its former foundation status. Its document-local FD/BV references **shall not** become compulsory implementation identifiers or business-menu hierarchy.
- **Acceptance:** a dish may reasonably map to more than one starter entry or none; a business can publish without selecting a PEWA class; later shared changes do not block publishing.
- **Source:** F02-R01-C Starter Catalogue §§How to read; Approved v0.1; Business Extensions §Optional mappings.

### R02-037 — Business extensions without central approval
Businesses **shall** be able to create and publish their own menu groupings, local terms, sections and relevant display concepts without waiting for PEWA-wide classification approval, within ordinary truthfulness and integrity rules.
- **Acceptance:** a bakery can create “Friday Treat Box” or a hotel “Poolside” collection even if there is no shared catalogue equivalent.
- **Source:** F02-R01-C Business Extensions §§Business menu control, Presentation versus shared governance; Worked Examples §§3–5.

### R02-038 — Preserve regional vocabulary and uncertainty
PEWA **shall** retain the terms and spelling supplied by a business. Provisional regional examples, translations and synonyms **shall not** be asserted as verified equivalents or silently merged into an item identity. Discovery assistance may use scoped, confidence-qualified suggestions without altering the business's display text.
- **Acceptance:** isombe is not inferred as fish; matooke is not equated with cassava; mukeke, ndagala and isambaza are not automatically equivalent menu items.
- **Source:** F02-R01-C Principles §Regional humility; Catalogue §Provisional regional examples; Worked Examples §1.

### R02-039 — Shared classification improvement without menu disruption
When PEWA evolves optional shared classifications, changes **shall** be evidence-led, reviewable and as non-destructive to business names, placements and existing mappings as practical. Splits, merges or retirement **shall not** force incorrect one-to-one remapping. Avoid imposing automatic merchant-count thresholds or fixed review cycles without a later product decision.
- **Acceptance:** a renamed shared entry does not silently rename a business's “Nos plats locaux”; uncertain old mapping can remain flagged for review rather than reassigned incorrectly.
- **Source:** F02-R01-C Principles §Grows through use; Business Extensions §§Shared library and growth, Change without breaking business menus.

### R02-040 — Ingredient, allergen and cross-contact truth
PEWA **shall** distinguish business-supplied ingredient/allergen declarations from unknown/unprovided information and from business-facing category names. **Peanuts and tree nuts shall remain distinct** wherever allergen information is represented. “Contains,” “may contain/cross-contact” and “unknown/not supplied” shall not be conflated. PEWA **shall not** infer ingredient, allergen absence or cross-contact from dish names, cuisine, shared classification or stereotypes.
- **Acceptance:** “almond croissant” without supplied ingredient evidence does not automatically receive a verified almond allergen declaration or “nut-free” assertion; unknown never displays as “does not contain.”
- **Source:** F02-R01-C Principles §Minimal safety boundaries; Worked Examples §§2, Safety.

### R02-041 — Dietary, alcohol, certification and free-from claims
Dietary, religious, organic, allergy-safe, free-from, alcohol-status or certification statements **shall** remain attributable business claims unless substantiated under applicable product/legal policy; a label, collection or optional shared class does **not** independently verify them.
- **Acceptance:** “vegan,” “halal-certified,” “gluten-free” or “non-alcoholic fermented drink” is not shown as independently PEWA-verified merely because it appears in a tag or category.
- **OPEN:** applicable jurisdiction-specific disclosure and substantiation rules belong to competent later policy review; no global regulatory regime is invented here.
- **Source:** F02-R01-C Principles §Safety claims; Starter Catalogue BV-08–BV-12; Worked Examples §Safety.

### R02-042 — Meaningful discovery without compulsory mapping
Business-authored menu text and terms **shall** remain eligible for permitted public search even without shared classification mapping. R03 discovery **shall** differentiate explicit business wording from unverified inferred synonyms and shall not silently exclude otherwise eligible items solely because a shared class is missing.
- **Acceptance:** a user can find the business's own local item spelling even if no catalogue equivalent exists; protected content remains undiscoverable to public search.
- **Source:** Stage 2 §6; F02-R01-C Business Extensions §Optional mappings; Principles §Search and discovery terminology.

## 8. Product journeys and cross-workstream contract

**Menu-only business journey:** authorised user creates public brand/context in R01 → creates menu and categories → adds food/drink offerings, declared prices and service availability → reviews scope → publishes to business-specific web destination → optionally publishes business-owned offers → edits or archives as appropriate. No structured ordering, card payment or paid featuring required.

**Multi-context hotel journey:** administrator creates distinct brand/service contexts → configures public restaurant menu and optional restricted guest/room menu → assigns relevant menus/prices/currency/eligibility → confirms restricted audience → publishes as selected → customers see only authorised menus. No hotel-specific PEWA customer class is imposed.

**Shared offering journey:** editor reuses offering description across authorised menus → sees shared descriptive fields and context-specific price/availability separately → updates description in draft → publishes intended contexts → historic order records and other pricing contexts remain unchanged.

**Short-notice unavailability journey:** authorised manager declares a single item unavailable in a specific context → relevant menu reflects choice to mark or hide → current allowed order eligibility is consistent → past orders remain intact.

**Continuity boundary:** subscription lapse and insufficient ordering units are separate: an otherwise valid paid base menu is not removed only because ordering units are zero; base subscription suspension can restrict public visibility, but valid previously admitted customer engagements/order commitments have bounded continuity, including the approved **10 recoverable consumption units** governed by R05.

## 9. Coverage and decision handover

| Approved Stage 2 direction | Requirements | Downstream owner |
|---|---|---|
| Multiple menus and service contexts | R02-001–006 | R01; R03; R07 |
| Offering, categories, reuse and F02 shared-classification safeguards | R02-007–013, R02-035–042 | R03; R04 |
| Prices, one-currency order, offers | R02-014–018 | R04; R05; R06 |
| Business-declared availability | R02-019–026 | R03; R04 |
| Publishing, archive, access | R02-027–034 | R03; R07; R08 |

### Material open decisions requiring deliberate review

1. **Essential public offering information:** confirm minimum item identity/publication information; business-controlled categorisation and optional discovery assistance are the current product direction; earlier catalogue entries remain reference material rather than an immutable approved list.
2. **Shared changes:** specify which shared descriptive changes require explicit cross-menu confirmation, versus routine local corrections.
3. **Availability precedence:** confirm customer-visible interpretation of overlapping schedules, exceptions and open-ended overrides; ensure staff understand intended result.
4. **Publication authority:** confirm whether draft publication needs a separately granted role or may be bundled with menu edit privileges at business discretion.
5. **Currency diversity:** exact allowed mixed-currency user-selection experience and whether cross-context items require separate order requests; one explicit order currency is already settled.
6. **Hotel restricted-menu audience:** R07 must define protected access and appropriate guest verification without inventing a universal hotel-guest account.
7. **Safety-claim policy:** competent product/legal review must define the scope of business declaration and any substantiation/consumer disclosure obligations by applicable jurisdiction; F02 forbids ungrounded ingredient/allergen/certification inference.
8. **Shared reference governance:** any process for optional shared entries should stay evidence-led and non-disruptive but must be reconciled with the current Product Definition rather than treating past research as permanently binding.

These do **not** reopen settled F01–F05 product authority. No unapproved pricing, payment handling, platform delivery or technical/provider selection is implied.

## 10. Founder review and disposition

Review R02-001–042 (including F02-R01-C additions R02-035–042) for substantive completeness across single-menu micro-businesses, multi-location and hotel contexts, delivery-only offerings and manual versus ordering modes. Particular review focus: explicit reuse semantics, context-specific availability, prices/currencies, protected versus public publication and subscription continuity.

**Requested disposition:** approve the R02 requirements or identify bounded corrections on this GitHub PR. Approval of R02 is not Stage 3 closure; R03–R08 remain separate requirements workstreams. No architecture, engineering, FEF adoption, provider selection or deployment is authorised.
