# PEWA-S4-A02 — Domain and Data Authority Architecture

**Status:** DRAFT — FOUNDER REVIEW; NOT APPROVED  
**Date:** 18 October 2026  
**Programme:** Stage 4 A02, following approved [A01 Architecture Drivers](PEWA-S4-A01-Architecture-Drivers-and-Capability-Decomposition.md).  
**Authority:** Stage 3 closed baseline (314 numbered requirements, 41 approved COM/ORD/BMP/CPN/POP directions), A01 and Product Constitution.  
**Boundary:** Logical domain design, invariant ownership and transactional consistency. No database, ORM, tenancy technique, queue, framework, provider, API implementation, deployment or engineering is selected.

## 1. Architecture disposition proposed

**Use a coherent PEWA-owned authoritative domain with separable bounded responsibilities and controlled read projections.** Authoritative business acts and PEWA commercial events must retain exact historical meaning. Do not equate logical responsibilities with individual deployable services or require distributed transactions. The architecture must allow a modest initial deployment while preserving future separation where justified.

**Data authority** means which actor/capability may create or change a fact and what constitutes evidence—not legal data ownership, a vendor database, a specific schema, or assumed rights to retain personal information.

## 2. Logical domain aggregates, facts and owners

| ID | Conceptual boundary | Authoritative actors / facts | Read or derived projection | Invariants |
|---|---|---|---|---|
| DD-01 | Organisation and brands | Eligible organisation administrators declare organisation, related brands, sites, delivery coverage; PEWA governs verification/eligibility | Public brand and geography card | No automatic charge per legitimate menu/brand; declared delivery zone not fake storefront |
| DD-02 | Organisation permissions | Verified authorised organisation role holders delegate staff actions; PEWA governs exceptional access | Permitted workspace capabilities | Tenant/context scope on every nonpublic read/write; menu editor not necessarily publisher/spender |
| DD-03 | Menu/publication | Business authors menus, customer-facing collections, service contexts and public/protected audience; authorised publisher releases versions | Public menu/document and organic eligibility | Draft/private never public; intentionally public menu only; stable link does not defeat withdrawn eligibility |
| DD-04 | Offering catalogue | Business authors item identity, language, descriptions, variants, attributes, declarations, media refs and reused offering relations | Effective item per published context | Merchant words preserved; optional common classes not mandatory; no inferred allergens/certification |
| DD-05 | Prices/availability | Business authors context/time/currency prices, declarations, schedule/overrides | Effective availability and applicable displayed terms | Business declaration, not PEWA stock observation; order uses requested-time eligibility |
| DD-06 | Discovery index | PEWA controls organic search projection over eligible published content, optional vocabulary and service geography | Home/Directory results | No restricted content or customer data; advertiser spend never alters organic rank |
| DD-07 | Manual engagement | Business declares permitted contact routes; customer initiates external contact | Contact-action record only if properly authorised/observed | A contact click is not an order or food sale |
| DD-08 | Structured request/order | Customer submits expressly; authorised business accepts/declines and optionally declares Ready; authorised parties make exceptions | Customer protected order status, business order view | Submission ≠ acceptance; one acceptance per valid order; snapshots/attribution preserved; no PEWA meal payment |
| DD-09 | Subscription and usage | PEWA recognises business-to-PEWA commercial payment/renewal, allocates included/top-up capacity, records acceptance-derived usage and bounded recoverable debt | Organisation balance, standing, obligations | 200 units per successful standard renewal, expire at period boundary; top-ups persist per policy; one acceptance consumes one unit; ten recoverable cap on outstanding liability |
| DD-10 | Promotion campaign/exposure | Permitted business authorises campaign/subject/budget; PEWA records qualifying observed exposure and correction | Sponsored Home placement, aggregate advertiser reports | Scheduled/off-screen ≠ qualifying delivered view; paid≠organic rank; no conversion guarantee |
| DD-11 | Guest/customer access and preferences | Customer permissions and optional identity; hotel defines protected audience; PEWA evaluates access | Protected menu/order access, private local or account-synced favourites | Order number alone insufficient; guest account not mandatory; no cross-merchant behavioural disclosure |
| DD-12 | Operational communications | Domain events and their attributed actors govern truthful web updates; permissions govern push | Protected customer/business activity feed | External delivery acknowledgment ≠ business acceptance; optional push; outbound WhatsApp status off |
| DD-13 | Integrity/support/audit | Authorised PEWA operators govern listing eligibility, privacy reports, commercial/exposure corrections and appeal resolutions | Case status and scoped audit | Operator doesn't routinely edit merchant pricing or accept/Ready food; original and adjustment both attributable |

The table deliberately permits one logical domain boundary to cooperate with another inside one transactional application if appropriate; no implication of thirteen microservices or separate databases.

## 3. State authority and lifecycle meaning

### 3.1 Menu/publication and protected access
- Business-controlled **Draft → Published** is an authorised, attributable action. A published menu is either intentionally public or protected under the approved context policy.
- Business may withdraw, pause or archive published content; PEWA may independently restrict it on integrity/commercial grounds. These are separate dimensions, not interchangeable state labels.
- Organic and paid public discovery use only eligible intentionally public projections. Protected hotel menus require eligible guest access and are never indexed for the public.
- A business's later item edit, price change or publication withdrawal cannot retroactively replace a customer's captured submitted commercial terms.

### 3.2 Order request and actions
- **Draft selection** is not a submitted request.
- **Submitted/Pending:** customer expressly confirms a snapshot of supplier, relevant context/time, eligible lines/variants, quantities, currency, price/declared charges and material terms. Business has not accepted.
- **Accepted:** one valid authorised explicit business decision; acceptance event is unique and generates **one** chargeable usage event.
- **Declined, Withdrawn, Expired:** attributable alternative terminal outcomes while pending, none creates an acceptance usage event.
- **Ready:** optional subsequent business declaration, not PEWA evidence of pickup/delivery/payment.
- **Cancellation requested, business-cancelled, cancellation declined, amendment proposed/agreed, factual correction:** separate attributed events; historical acceptance and any charge remain visible in their original context. A material amendment requires the affected party's explicit consent; no second usage charge for changing an existing order.

**Critical race:** an order cannot be accepted after a valid earlier withdrawal, decline or expiry merely because two actions arrived nearly simultaneously. A single authoritative decision outcome must be chosen under a defined ordering/consistency rule; no storage or locking mechanism is preselected here.

### 3.3 Organisation subscription / units
- **Standard subscription** is an organisation-level monthly contract with **200 included accepted-order units for every successful eligible renewal**, whether or not ordering is enabled.
- Included units belong to the corresponding subscription period and **expire unused at that period's end**.
- Purchased top-up unit balances **persist across ordinary monthly renewal**, subject to separately approved purchase validity and closure policy.
- Allocation priority is **current included → available purchased → eligible recoverable**.
- The **10 recoverable units are a bounded maximum outstanding organisational liability**, not a fresh monthly reward or free credits. They protect eligible *already admitted* orders under continuity rules.
- Subscription status, public listing eligibility and ordering admission/capacity are distinct. **Founder clarification, 18 October 2026:** exhaustion of ordinary consumption units disables admission of **new structured orders only**; it does **not** suspend or unpublish menus, remove eligible Directory discoverability, or disable manual business contact during an otherwise active monthly subscription. The customer must see ordering as unavailable, not the business as closed. Separately, post-grace **base subscription** suspension may restrict public discovery, while lawful existing-order access and necessary resolution remain protected.
- A renewal, top-up, reversal or correction is attributable and cannot silently double-credit or erase an earlier obligation.

### 3.4 Campaign exposure
- Campaign setup/scheduling/eligibility is not delivery.
- A billable qualifying exposure is an eligible on-screen opportunity to see according to later Founder-approved threshold, repeated-exposure and invalid-traffic rules.
- Campaign pause/expiry preserves recorded delivered views and separates undelivered purchase value; correction is explicit and attributable.
- Organic search scoring does not depend on Featured Offer expenditure. Purchase cannot make a private/unpublished menu publicly eligible.

## 4. Consistency and authority contract

| Invariant | Required domain consistency | Primary write authority |
|---|---|---|
| Exactly one terminal pending decision | No competing Accept/Withdraw/Decline/Expire finalisation of same request | Customer/business actions adjudicated by PEWA order rules |
| Accepted order + one usage record | Both meanings must be mutually reconcilable under retries/failure; never charge twice | Business acceptance, PEWA consumption accounting |
| Unit availability and ten-unit cap | Contending acceptance decisions cannot silently exceed approved credit or create free accepted orders | PEWA usage authorisation bound to order decision |
| Monthly renewal allocations | One successful eligible renewal gives one 200-unit allocation; no double grant on billing callback retry | PEWA subscription lifecycle |
| Published public snapshot / search eligibility | Restricted/unpublished material cannot leak through stale public projection | Business publication authority and PEWA eligibility enforcement |
| Shared menu reuse and price changes | Material cross-context changes require authorised scope approval, with past order snapshots intact | Business editor/publisher and PEWA change validation |
| Protected guest action | Authenticated or otherwise legitimately authorised customer may access/change corresponding order only | Customer permission and PEWA access evaluation |
| Qualifying campaign exposure | No count for off-screen/invalid display; no duplicate charge for retry of same qualifying event | PEWA observation/measurement policy |
| Commercial/integrity corrections | Original event not silently deleted; attribution and authorised correction remain reconstructable | PEWA bounded support/finance/privacy operator |

**Consistency principle:** do not design an architecture that relies on eventually consistent independent states for an acceptance decision and its spend-cap eligibility without a defined failure-safe protocol. The transactional boundary and event protocol are A03/A06 technical decision questions, not resolved by this A02 document.

## 5. Data responsibility and views

- **Business-originating declarations:** names, food descriptions/languages, prices, availability, service locations/areas, claims and acceptance/Ready are business-authored. PEWA may validate structure and apply platform safeguards, but cannot pretend independently to verify their culinary or fulfilment truth.
- **Customer-originating actions:** search preferences (when appropriately permitted), favourites, explicit order submission, withdrawal, cancellation request, amendment consent and voluntary marketing/push choices.
- **Platform-originating observations:** eligible publication state, subscription payment standing, accepted-order unit accounting, campaign view qualification, delivery of PEWA's own messages, scoped moderation/appeals and audit.
- **Public projections:** intended public published menus and eligible business/offerings/geography only, with business-first attribution. Protected hotel menus and order identifiers are never open-index projections.
- **Sensitive views:** orders and contact information are scoped to relevant customer and business actors; billing/support records to permitted organisation administrators/PEWA operators. Merchant advertisers receive aggregated exposure, not identifiable competitor browsing.
- **Historical evidence:** submitted/accepted terms and actor declarations, adjustments and support actions preserve meaning, with correction/deletion governed by competent privacy/retention decisions. Data authority does not itself dictate legal retention.

## 6. Adversarial and failure scenarios for subsequent architecture review

1. Two staff users accept the same pending order simultaneously; only one valid acceptance/usage event results.
2. Customer withdraws just before staff acceptance; no later business acceptance becomes valid without an explicit rule adjudicating concurrency.
3. Subscription renewal is delivered twice; only one 200-unit grant occurs for that period.
4. Last eligible included/top-up unit is contested by two valid order acceptances; approved recoverable allowance is not silently exceeded.
5. Customer has an admitted pending request at subscription lapse; protected status and bounded resolution remain accessible but new public ordering stops as required.
6. Business edits a reusable food item across restaurant/hotel contexts; publication scope is authorised and existing submitted snapshots immutable.
7. Stale public search cache includes a newly protected guest menu; confidentiality fails closed, and a cache invalidation obligation is identified for later design.
8. A public order reference is guessed; no private order details or cancellation privilege follows solely from the identifier.
9. A sponsored creative is fetched off-screen or the same exposure is retried; only a genuinely qualifying distinct visible event may count.
10. Miledge WhatsApp adapter is absent; direct web menus, customer order status and manual external contact still function under eligible options.

## 7. A02 decisions for Founder review and A03–A08 handover

**A02-FD1 — Domain boundaries.** Approve DD-01–DD-13 as logical authority groupings rather than separate services/databases.  
**A02-FD2 — Order consistency.** Approve explicit order outcome arbitration, acceptance-event/usage integrity and immutable submitted snapshots as hard consistency requirements, without prescribing transactions or infrastructure.  
**A02-FD3 — Entitlement truth.** Confirm standard 200 monthly units, purchased carry-forward, ten outstanding recoverable units and allocation priority remain distinct in all architecture options.  
**A02-FD4 — Public/private projection.** Confirm public indexing must fail closed for protected/unpublished content and user history remains private from unrelated merchants.  
**A02-FD5 — Remaining detailed-policy boundaries.** Do not select legal retention periods, request TTLs, guest verification method, impression threshold, tax/currency pricing or provider absent their proper later approvals.

### Handover
- **A03:** Compare application boundaries and transactional architecture choices against order+unit and publication/projection consistency.
- **A04:** Specify identity/access threat boundaries, tenant isolation and guest order recovery options.
- **A05:** Specify projection/indexing and multilingual content/media choices.
- **A06:** Evaluate ledger-like consumption/correction and exposure qualification options; independently gated numerical policies.
- **A07:** Define optional Miledge shared channel contracts and failure independence.
- **A08:** Evaluate operations, storage, cost and portability based on selected architectural principles.

**Disposition requested:** Approve or amend A02-FD1–FD5. **Stage 4 remains IN PROGRESS; Stages 5–6 remain NOT STARTED.**
