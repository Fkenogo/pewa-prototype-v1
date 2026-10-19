# PEWA-S3-R06 — Featured Offers and Campaign Management Requirements

**Status:** DRAFT — FOUNDER REVIEW REQUIRED; NOT APPROVED  
**Date:** 17 October 2026  
**Stage:** Stage 3 — Requirements Development (IN PROGRESS)  
**Authority:** [Stage 2 Product Definition](../01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md), [Constitution](../01-project-home/PEWA-S1-CONST-001-Product-Constitution.md), [R02](PEWA-S3-R02-Menu-and-Offering-Management-Requirements.md), [R03](PEWA-S3-R03-Customer-Experience-Home-Directory-and-Search-Requirements.md), [R05](PEWA-S3-R05-Subscriptions-Consumption-and-Commercial-Entitlements-Requirements.md). Relevant foundation research supplies useful context, not authority over later Founder decisions.

**Scope:** Observable campaign and exposure requirements, not pricing approval, ad-server technology, ranking implementation, interface mockups, payment-provider choice or engineering authorisation.

## 1. Commercial meaning and invariants

**Featured Offers** are a separately purchased service for eligible participating businesses to promote their own public offerings on designated PEWA-owned surfaces, notably **PEWA Home**. They are not part of the base subscription, not a prerequisite for organic visibility, and not a mechanism to purchase organic search rank.

The accepted commercial basis is **qualifying delivered exposure/impressions**, not clicks, orders, food payments, revenue, conversion or guaranteed sales. For PEWA, an impression means a qualifying **opportunity to see** a paid placement actually presented in the relevant visible on-screen context. A scheduled placement, loaded but off-screen creative, hidden content or unrelated page is not, on its own, delivered exposure. Precise viewability, validity and deduplication rules are **OPEN** for later policy approval.

A campaign always identifies the supplying business, respects publication and account eligibility, and distinguishes business-declared content from PEWA's presentation/accounting obligation.

## 2. Business-owned offers versus paid featuring

### R06-001 — Own-menu promotion needs no featured purchase
A business with eligible base-menu publishing **shall** be able to promote specials or offers on its own menus without purchasing Featured Offers.
- **Acceptance:** a bakery publishes a “Weekend Treat” on its own menu while its Featured Offer balance is zero.
- **Source:** S2 §12; R02-018; R05-003.

### R06-002 — Featured exposure is optional and separate
Featured Offer eligibility and purchased exposure **shall** remain separate from base subscription and ordering consumption.
- **Acceptance:** a menu-only café can purchase promotion even if it does not enable structured ordering; buying promotion does not provide order units.
- **Source:** S2 §§10–12; R05-005,034.

### R06-003 — Equal pathway for eligible businesses
An eligible participating business **shall** be permitted to seek paid featuring regardless of optional ordering tier, subject to published eligibility, policy and available exposure capacity.
- **Acceptance:** an eligible small bakery is not excluded solely because it operates in manual-contact mode.
- **Source:** S2 §12.

### R06-004 — No organic ranking purchase
Featured purchases **shall not** alter organic Directory relevance rank, compensate for unpublished content or override independent integrity restrictions.
- **Acceptance:** buying PEWA Home featuring does not make a restaurant rank higher in unpaid search.
- **Source:** S2 §§6,12; R03-026–027; R05-037.

## 3. Campaign authoring and eligibility

### R06-005 — Authorised campaign setup
Appropriately permitted business users **shall** be able to create and manage proposed campaigns for legitimate organisation/brand content.
- **Acceptance:** menu editor without promotion spending permission cannot commit company campaign funds.
- **Source:** S2 §§3,12; R01-018–021; R05-038.

### R06-006 — Eligible promoted destination
Every campaign **shall** identify the public business and relevant eligible published menu, offering or business-owned offer to which it directs customers.
- **Acceptance:** promoted breakfast sends customer to the correct restaurant/menu rather than an unrelated destination.
- **Source:** S2 §§6,12; R03-028.

### R06-007 — Source-of-truth commercial claims
Campaign names, food descriptions, pricing, declared availability and offer terms **shall** remain attributable to the business and aligned with its currently intended eligible published facts.
- **Acceptance:** an outdated price is not knowingly promoted as current when the restaurant has changed its published applicable price.
- **Source:** S2 §§2,4,12; R02-013–019.

### R06-008 — Basic self-service campaign controls
Eligible businesses **shall** be able to define and review their promoted subject, target area/context where allowed, eligible time window, purchased exposure budget/package and campaign status without requiring routine PEWA staff to compose each campaign.
- **Acceptance:** business can prepare and submit a campaign without routine manual operator allocation.
- **OPEN:** precise package format, minimum commitment and surface inventory.
- **Source:** S2 §12; Founder preference for automated self-service.

### R06-009 — Preview and explicit commitment
Before purchasing or activating a campaign, the authorised business **shall** see the destination, presented promotional content, disclosed charge/currency, exposure entitlement, intended audience/time and significant limitations.
- **Acceptance:** a business knows it is buying delivered exposure, not a promised number of food orders.
- **Source:** S2 §§5,12; R05-028–033.

### R06-010 — Campaign lifecycle
A campaign **shall** distinguish draft, pending eligibility, eligible/scheduled, actively delivering, voluntarily paused, policy-paused, exhausted, expired and closed where relevant, without implying a scheduled placement has already delivered impressions.
- **Acceptance:** scheduled-for-tomorrow campaign shows zero delivered today.
- **Source:** S2 §12; R05-034–036.

### R06-011 — Merchant pause and permissible correction
Authorised businesses **shall** be able to pause eligible ongoing campaigns and correct material content/destination errors without falsifying previously delivered exposure.
- **Acceptance:** pausing stops future scheduled delivery but retains prior qualifying impression records.
- **Source:** S2 §12; CP-10.

### R06-012 — Publication, subscription and integrity gating
Campaign delivery **shall** respect current business/public-offering eligibility, commercial suspension and independent platform-integrity restrictions.
- **Acceptance:** suspended public menu does not continue actively receiving paid placements; renewal alone does not remove fraud restrictions.
- **Source:** S2 §§10,12; R05-007–014,036.

## 4. Presentation and customer safeguards

### R06-013 — Clearly identifiable paid placement
PEWA **shall** visibly label each Featured Offer as paid/sponsored and identify the supplying business.
- **Acceptance:** a first-time Home visitor can distinguish a paid feature from a recent menu or ordinary search result.
- **Source:** S2 §§6,12; R03-014,027.

### R06-014 — Preserve Home's primary return purpose
Promoted content **shall** not obscure or unduly displace recents, favourites, Search/Directory access or ordinary navigation.
- **Acceptance:** returning user can still quickly reach a saved café while campaigns are active.
- **Source:** S2 §6; R03-008,013.

### R06-015 — Business supplier and PEWA role
Promoted material **shall** not imply PEWA is the food merchant, order fulfiller or independent guarantor of item quality, price or availability.
- **Acceptance:** promotional content credits the restaurant; PEWA does not claim the meal is independently verified.
- **Source:** S2 §§1–2,12; CP-03/12.

### R06-016 — Protected information cannot be promoted publicly
A publicly featured destination **shall** only disclose intentionally public eligible data; protected hotel menu, guest/room details, private staff records and unpublished items **shall** remain excluded.
- **Acceptance:** guest-only room-service menu does not appear as a public feature.
- **Source:** S2 §§7,12–13; R03-025.

### R06-017 — No compulsory account to view eligible feature
Eligible public promotional placement **shall** be viewable and lead to the corresponding public menu without forcing account creation, PWA installation or WhatsApp.
- **Acceptance:** customer opens featured café offer in a standard web browser.
- **Source:** S2 §§4,6,12; R03-001.

### R06-018 — Language fidelity
Business-authored promotion names and item descriptions **shall** preserve their chosen languages and local wording; PEWA shall not silently force English translation or claim uncertain cultural equivalences.
- **Acceptance:** a French-language promotional item can appear within English-first PEWA Home without altered business text.
- **Source:** S2 §6; R03-035,037–039.

## 5. Exposure delivery, qualification and accounting

### R06-019 — Define delivered exposure as opportunity to see
A campaign shall count a **delivered impression** only when an eligible paid placement was actually presented in the relevant on-screen visible context providing an opportunity to see, not merely assigned, scheduled, fetched, loaded off-screen or hidden.
- **Acceptance:** campaign creative rendered below the customer's untouched viewport is not automatically counted as delivered exposure.
- **Source:** S2 §12; Founder delivered-impression clarification.

### R06-020 — No attention or conversion guarantee
Qualified opportunity-to-see **shall not** be represented as proof the user paid attention, clicked, ordered, bought, collected or consumed an item.
- **Acceptance:** 100 eligible impressions cannot be reported as 100 customers who saw and considered the food, or 100 sales.
- **Source:** S2 §§12–13; CP-10.

### R06-021 — Separate scheduled, eligible and delivered quantities
Business reports **shall** distinguish planned/scheduled placement, available exposure entitlement, delivered qualifying impressions and remaining eligible exposure.
- **Acceptance:** a campaign with 100 purchased impressions and 23 qualified displays does not report all 100 as delivered.
- **Source:** S2 §12; R05-034–036.

### R06-022 — Validity and deduplication safeguards
PEWA **shall** apply intelligible, disclosed rules that exclude disqualified/non-visible or invalid impression events, appropriately handle repeated/reloaded presentations and correct provable overcounting.
- **Acceptance:** reloading a page does not automatically guarantee a fresh billable impression without checking the applicable validity rule.
- **OPEN:** viewability threshold/window, repeat-frequency/cap, deduplication scope, bot/abuse exclusion and audit evidence.
- **Source:** S2 §12; CP-10; R05-035.

### R06-023 — Charge only for qualified delivery
Consumption of a purchased exposure entitlement **shall** correspond to delivered qualifying impressions under the disclosed measurement rules, not click-through or future sales outcomes.
- **Acceptance:** scheduling a feature that never enters a customer's visible context does not exhaust its purchased exposure.
- **Source:** S2 §12; R05-035.

### R06-024 — Understandable reporting
A business **shall** see campaign standing, delivered qualifying exposure and eligible remaining value, with permitted adjustments and explanatory distinctions.
- **Acceptance:** dashboard shows eligible impressions separately from optional click/visit counts.
- **Source:** S2 §§12–13; R05-030,040.

### R06-025 — Correction and historical integrity
Confirmed impression-accounting errors **shall** permit attributable corrections without rewriting original measured and billed history silently.
- **Acceptance:** erroneous delivery count is reversed/adjusted with reason while original report meaning remains reconstructable.
- **Source:** S2 §§12–13; Constitution CP-10/12.

## 6. Allocation, targeting, commercial continuity

### R06-026 — Contextual eligibility
Campaign allocation **shall** respect selected eligible PEWA surfaces, product/food context and valid publication and geographical/time limits, without misrepresenting physical availability.
- **Acceptance:** a local bakery campaign may be targeted to its declared service area, not automatically shown as available nationwide.
- **Source:** S2 §§6,12; R03-022–024.

### R06-027 — No silent behavioural retargeting
User-level behavioural retargeting **shall not** be introduced merely because Home records recent menus or favourites; any such feature requires separate privacy/product authority and suitable customer choices.
- **Acceptance:** visiting a hotel menu does not automatically authorize cross-site personalised ads.
- **Source:** S2 §§6,12–13; CP-11.

### R06-028 — Disclose allocation limitations
Businesses **shall** be told that visibility depends on eligibility, available campaign surfaces, context and other disclosed limits; neither placement timing nor sales impact is guaranteed beyond purchased and properly qualified exposure commitments.
- **Acceptance:** campaign purchase does not promise the number of resulting orders.
- **Source:** S2 §12.

### R06-029 — No routine manual allocation dependency
Campaign allocation **should** ordinarily be self-service/automated under documented product rules; exceptional PEWA oversight **shall** remain authorised, proportionate and attributable.
- **Acceptance:** ordinary compliant bakery campaign need not wait for staff to manually insert every impression.
- **Source:** S2 §12; R08 reserved authority.

### R06-030 — Campaign pause on subscription lapse
Upon applicable commercial subscription suspension, future campaign delivery **shall** pause while delivered qualifying impressions remain accounted and eligible undelivered entitlement remains preserved under disclosed reactivation, expiry or credit terms.
- **Acceptance:** paused campaign is not charged for future invisible scheduled allocations.
- **Source:** S2 §12; R05-036.

### R06-031 — Preserve undelivered value with honest limits
Commercial rules **shall** specify whether undelivered purchased exposure resumes, extends, expires, credits or is corrected; any applicable eligibility condition **shall** be disclosed before purchase and accurately applied.
- **Acceptance:** business sees remaining value and a clear outcome after lapse; PEWA does not silently consume unserved impressions.
- **OPEN:** exact expiry, credit, transfer, refund and reactivation terms.
- **Source:** S2 §12; R05-036.

### R06-032 — Separate fees and currencies
Campaign purchases and exposure accounts **shall** use separately approved business-to-PEWA charge terms and applicable local-currency-first presentation; they **shall not** be mixed with food-order payment or accepted-order units.
- **Acceptance:** paying for an ad does not add ordering credits or process restaurant customer meals.
- **Source:** S2 §§1,5,11–12; R05-028–035.

### R06-033 — No invented rate, package or guaranteed inventory
R06 **shall not** treat a particular impression fee, package amount, duration, allocation promise or minimum campaign budget as approved unless separately determined under Founder commercial authority.
- **Acceptance:** business is not billed at a speculative campaign CPM.
- **Source:** S2 closure outstanding commercial matters; R05 open ledger.

## 7. Operator oversight, trust and integrity

### R06-034 — Business campaign permissions
Only appropriately authorised business members **shall** commit campaign spending, revise material commercial choices or cancel an active campaign.
- **Acceptance:** restaurant staff with menu-edit rights alone cannot authorise ad expenditure.
- **Source:** S2 §§3,12–13; R01-018–021.

### R06-035 — Bounded operator support and enforcement
PEWA operators **may** review suspected misleading promotions, account eligibility, exposure discrepancies or policy violations and restrict/correct them with attribution; routine operator action shall not constitute restaurant order acceptance or menu ownership.
- **Acceptance:** operator may suspend misleading campaign, not change a merchant's recipe/price as though it were merchant staff.
- **Source:** S2 §§2,12–13; R08.

### R06-036 — Advertiser-facing dispute channel
The organisation **shall** have an appropriate way to query qualifying exposure, eligibility restrictions, billing adjustments and undelivered commitments with proportionate review/response.
- **Acceptance:** business can contest duplicate billed impressions without requesting customer private browsing histories.
- **Source:** S2 §§12–13; CP-12.

### R06-037 — Minimise individual customer data
Campaign management/reporting **shall** avoid giving businesses unrelated customers' identities, recents/favourites, browsing trails or protected order records merely because they purchased exposure.
- **Acceptance:** promoter sees aggregate qualified exposure, not individual customers who visited competitors.
- **Source:** S2 §§6,12–13; CP-11.

### R06-038 — Report only platform-observed events
Reporting **shall** distinguish counted exposure from observed clicks/menu visits, PEWA submitted/accepted orders if properly attributable, and externally unobserved physical revenue, fulfilment or customer attention.
- **Acceptance:** no dashboard metric implies paid ad purchase proves offline completed sales.
- **Source:** S2 §13; R05-040.

## 8. Illustrative customer and business journeys

**Micro-bakery, menu only:** maintains its own menu specials under base subscription → separately purchases eligible Home promotion → labelled feature links to public bakery menu → qualified on-screen impression decrements only purchased exposure, not ordering units → Directory organic ranking unchanged.

**Hotel:** publishes public dining menu and private room-service menu → can promote public dining where eligible → never publicly exposes private guest menu or room identifiers through paid feature.

**Campaign interruption:** campaign purchased, 40 of 100 qualifying impressions delivered → subscription moves past grace to suspension → future delivery pauses → 40 stay delivered; remaining eligible 60 are preserved according to disclosed expiry/credit policy; campaign not charged merely for scheduled displays.

**Customer:** opens PEWA Home to reach favourite café → notices clearly marked sponsored bakery item in relevant visible placement → may open supplier menu directly without installing app/account → PEWA never claims a completed sale based on the view.

## 9. Traceability and product-policy decisions

| Requirements | Focus | Handover |
|---|---|---|
| R06-001–004 | Own-menu offers, separate paid campaigns, organic separation | R02/R03/R05 |
| R06-005–012 | Self-service setup, campaign state and eligibility | R01/R05/R08 |
| R06-013–018 | Labelling, prominence, supplier, privacy and language | R03/R07 |
| R06-019–025 | Delivered exposure qualification and corrections | R05/R08 |
| R06-026–033 | Allocation, targeting, expiry, price and continuity | R05/R07 |
| R06-034–038 | Permissions, dispute, PEWA-observed reporting | R07/R08 |

**Decisions requiring later Founder/commercial policy authority:**
1. Eligible surface inventory, promotional placements, quantity units and exposure packages.
2. Exact **qualifying opportunity-to-see** rule: necessary visible area, duration, scrolling, refresh, deduplication, abuse/fraud and correction evidence. A mere off-screen render cannot qualify.
3. Campaign allocation fairness, contextual targeting, geographic/business availability claims and what allocation disclosures merchants need.
4. Campaign local-currency pricing, taxes, length, budget limits, commercial consent, settlement and credit/expiry treatment for undelivered impressions.
5. How pauses and account suspension interact with time-limited exposure packages; preserve delivered versus undelivered distinction.
6. Promotional-content substantiation, complaints and proportionate operator action.
7. Privacy policy governing any future behaviour-based audience targeting; **not authorised** as part of this draft.

**Settled and not reopened:** paid Featured Offers are separate from the base subscription and optional ordering; campaigns pay for qualified delivered exposure, not conversions; ordinary unpaid discovery retains independent relevance; business-authored original languages remain permitted; customer food payments and physical fulfilment are outside PEWA.

## 10. Founder review

Please assess especially: the qualifying delivered impression principle, separation of bought featuring from organic search, self-service rather than routine operator placement, pause/undelivered value treatment, and customer privacy.

**Requested disposition:** approve R06 product requirements or request bounded corrections in GitHub. The seven precise policy areas remain open for separately competent decision, not silently resolved by an illustrative scenario. Stage 3 remains IN PROGRESS; R07–R08 and Stage 3 closure are not authorised by this PR; Stages 4–6 remain NOT STARTED.
