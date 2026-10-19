# PEWA-S3-R04 — Manual Engagement and Structured Ordering Requirements

**Status:** DRAFT — FOUNDER GITHUB REVIEW REQUIRED; NOT APPROVED  
**Date:** 17 October 2026  
**Programme:** Project Home Stage 3 — Requirements Development (IN PROGRESS)  
**Authority:** [S2 Product Definition](../01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md), [Stage 2 closure](../01-project-home/PEWA-S2-CLOSE-Founder-Disposition-and-Closure.md), [Product Constitution](../01-project-home/PEWA-S1-CONST-001-Product-Constitution.md); approved [R01](PEWA-S3-R01-Business-Foundation-Requirements.md), [R02](PEWA-S3-R02-Menu-and-Offering-Management-Requirements.md), [R03](PEWA-S3-R03-Customer-Experience-Home-Directory-and-Search-Requirements.md). Earlier F04/F05 foundation research provides context, not superior authority where later Founder direction differs.  
**Boundary:** Product behaviours and acceptance examples, not schemas, state-machine implementation, UI layout, infrastructure, provider selection, technical delivery or testing plans.

## 1. Scope and invariants

PEWA enables (A) business-controlled **manual engagement**, which may conclude outside PEWA without an order record; and (B) **optional structured ordering**, which requires subscription entitlement, business enablement and context eligibility. Customer submission is a **request**; explicit business acceptance is a distinct event. PEWA records attributed declarations and protects historical meaning, but does not accept/prepare/deliver meals or process customer food-order payments.

**Terms:** Submitted = customer expressly transmitted request; Pending = awaiting business decision; Accepted = business expressly agreed to request; Declined = business expressly refused; Ready = business declared readiness, not independently verified fulfilment; Withdrawn = customer withdrew before acceptance; Expired = unanswered request reached approved limit; Cancellation Requested = post-acceptance request pending business decision; Cancelled = permitted cancellation concluded; Amendment Proposed/Agreed = documented material change requiring affected-party consent.

An accepted order may end its PEWA primary reported journey at **Accepted**. Ready is optional as a later business declaration. A chargeable acceptance never silently becomes a physical sale or completion guarantee.

**Responsibility separation:** R02 owns offer facts/availability/currency; R03 menu/contact entry; R05 subscription and consumption policy including the ten recoverable units; R07 guest-access/notifications/privacy; R08 exceptional operator interventions. R04 owns the order product journey and applicable behaviour when those boundaries intersect.

## 2. Manual engagement and mode choice

### R04-001 — Complete manual engagement mode
An entitled menu-only business **shall** offer permitted business-configured customer-contact paths without requiring a PEWA order basket, order submission or customer account.
- **Acceptance:** customer uses café's published phone/contact path, and PEWA does not automatically create an accepted order.
- **Source:** S2 §§1–2,8; F04 operating modes.

### R04-002 — Distinguish manual from structured
Customer-facing interaction **shall** make clear whether a chosen action merely contacts the business or submits a PEWA structured request.
- **Acceptance:** a WhatsApp contact link cannot be labelled as a PEWA-confirmed order.
- **Source:** S2 §§2,8–9; Constitution CP-10.

### R04-003 — Manual engagement remains business-owned
Outside-PEWA communications, pricing arrangements and resulting sales **shall not** be inferred or represented as verified PEWA order outcomes.
- **Acceptance:** business does not receive fictitious PEWA order consumption from a menu contact click.
- **Source:** S2 §§1–2,13.

### R04-004 — Separate mode eligibility per context
Where entitled, a business **shall** select which supported menu and service contexts offer structured orders, manual engagement or both, respecting public/protected audience rules.
- **Acceptance:** hotel permits room-service structured ordering while public bar menu remains manual-contact only.
- **Source:** S2 §§3,7–8; R01-015–016.

## 3. Structured selection and submission

### R04-005 — Explicit two-part activation
PEWA **shall** admit structured requests only where **both** organisation entitlement and explicit business enablement are active and the selected menu/context is eligible.
- **Acceptance:** purchasing an ordering entitlement alone does not switch every venue menu to ordering.
- **Source:** S2 §§2,8; F04.

### R04-006 — Transparent offering selection
An eligible customer **shall** be able to select authorised offerings, quantities and applicable structured variants/add-ons/options under the business's published rules.
- **Acceptance:** meal and allowed additions appear as customer-selected choices, not inferred recipe inventory.
- **Source:** S2 §§4,8; R02-008,016.

### R04-007 — Required and optional choices
A structured order **shall** distinguish required customer decisions from optional add-ons and shall not submit an unresolved mandatory choice as though it were complete.
- **Acceptance:** an item requiring size selection shows the selected size before submission.
- **Source:** S2 §§4,8; PD-04.

### R04-008 — Repeated order lines and quantities
The customer **shall** be able to select multiple eligible items, including repeated occurrences of an item with different valid choices, with selections faithfully preserved.
- **Acceptance:** two coffees with different milk choices remain distinguishable rather than silently merged into an incorrect line.
- **Source:** PD-04; S2 §8.

### R04-009 — One coherent order currency
Before submission PEWA **shall** show one explicit order currency, the applicable submitted line prices, additional charges as declared, and a coherent total. It **shall not** silently combine separate currencies.
- **Acceptance:** BIF and USD contexts cannot be combined into an unexplained numeric sum.
- **Source:** S2 §5; R02-014–017.

### R04-010 — Relevant context and requested time
The submission **shall** clearly identify the applicable business, brand/menu, venue/service context, and requested service timing where the business offers such choice. Eligibility **shall** reflect business-declared rules applicable to the requested time.
- **Acceptance:** a breakfast-only item is not eligible for a declared late-night request solely because it was browsable earlier.
- **Source:** S2 §§3–4,8; R02-020–025.

### R04-011 — Business-selected modes and order information
PEWA **shall** request only the customer details needed for the selected service context and legitimate handling of that request, subject to privacy policy; guest registration cannot be a universal precondition.
- **Acceptance:** takeaway is not forced to enter a hotel room number; hotel room menu can request permitted service information.
- **Source:** S2 §§7–8,13; R07.

### R04-012 — Submit explicitly, never silently
Customer **shall** explicitly confirm the assembled request and presented commercial terms before PEWA records its submission.
- **Acceptance:** viewing an offering, pressing a contact link or leaving a draft selection does not create a submitted order.
- **Source:** S2 §8; PD-05.

### R04-013 — Submission confirmation means pending
PEWA **shall** communicate that a successfully submitted request is **awaiting the business's decision**, not accepted, confirmed for preparation or paid.
- **Acceptance:** submit acknowledgement never uses unqualified “Order accepted.”
- **Source:** S2 §8; Constitution CP-10.

### R04-014 — Duplicate-request safeguards
PEWA **shall** protect against accidental duplicate recorded submissions when the customer repeats a submission action in uncertainty, without suppressing deliberately distinct customer orders.
- **Acceptance:** retrying the same action after an unclear response cannot silently generate duplicate accepted-order charges; deliberate second separate order remains possible.
- **Source:** S2 §§8,11; Constitution CP-10.

## 4. Business decision and lifecycle

### R04-015 — Relevant business staff visibility
Only authorised business users scoped to the relevant organisation/brand/context **shall** view and act on its order requests.
- **Acceptance:** an employee of another outlet cannot accept a hotel's private room-service order.
- **Source:** S2 §§2–3,8,13; R01-018–021.

### R04-016 — Explicit acceptance
A pending request **shall** become Accepted only after an authorised business actor explicitly accepts it; passage of time or delivery/read status alone shall not do so.
- **Acceptance:** unseen pending order never moves to Accepted automatically.
- **Source:** S2 §8; PD-05; CP-10.

### R04-017 — Explicit decline
An authorised business actor **shall** be able to decline a pending request; the result **shall** be attributed, accurately visible to customer/business and not counted as an accepted order.
- **Acceptance:** decline message does not imply acceptance or readiness.
- **Source:** S2 §8; PD-05.

### R04-018 — Business-declared Ready
After acceptance, an authorised business actor **may** declare Ready; PEWA **shall** distinguish this from independently verified customer pickup, delivery, settlement or fulfilment.
- **Acceptance:** “Ready — declared by restaurant” is not “Delivered by PEWA.”
- **Source:** S2 §8; CP-03/10.

### R04-019 — Ready not required
PEWA **shall not** require Ready, customer pickup or delivery evidence to preserve a valid Accepted order or its consumption event.
- **Acceptance:** restaurant never declares Ready; order correctly remains Accepted with no invented completion.
- **Source:** S2 §§8,11; PD-05.

### R04-020 — Pending expiry and no silent outcome
Pending requests **shall** have a governed, communicated expiry policy; expiry **shall** be distinguishable from business decline or acceptance.
- **Acceptance:** unanswered pending request expires with truthful reason; no acceptance charge.
- **OPEN:** duration, extensions, reminders and different service contexts require Founder product rules.
- **Source:** S2 §8; PD-05.

### R04-021 — Customer view of status and attribution
Customer **shall** be able to see the latest permitted order outcome, the relevant actor declaration and material changes through protected order-specific access.
- **Acceptance:** customer can distinguish “submitted,” “business accepted” and “business declared ready.”
- **Source:** S2 §§8–9; PD-11C/12C.

### R04-022 — Business view of prior and current commitments
Authorised business users **shall** access relevant pending and historical PEWA order commitments for permitted ongoing resolution, subject to appropriate retention.
- **Acceptance:** subscription expiry does not erase a valid previously accepted order or pending decision.
- **Source:** S2 §§10–11; CP-10.

## 5. Withdrawal, cancellation, amendment and correction

### R04-023 — Pre-acceptance customer withdrawal
Customer **shall** be able to withdraw their pending request before business acceptance under clearly stated timing/authority rules; PEWA **shall** record Withdrawn rather than Declined or Accepted.
- **Acceptance:** timely withdrawal ends request without accepted-order consumption.
- **Source:** S2 §8; PD-05.

### R04-024 — Post-acceptance cancellation request
After acceptance, customer cancellation **shall** be a request subject to business disposition, not an automatic deletion or reversal of the original Accepted event.
- **Acceptance:** customer sees “Cancellation requested” rather than an unearned “Cancelled” finality.
- **Source:** S2 §§8,11; PD-05.

### R04-025 — Business cancellation disposition
The authorised business **shall** be able to grant or decline a post-acceptance cancellation request and communicate the outcome; PEWA **shall** preserve the original acceptance and later disposition separately.
- **Acceptance:** accepted then cancelled order remains historically accepted and chargeable unless separately authorised usage correction.
- **Source:** S2 §§8,11; PD-05/06.

### R04-026 — Business-originated cancellation
An authorised business **may** propose or declare a permitted cancellation under governed customer notice and any applicable acknowledgement obligation; PEWA **shall** distinguish it from customer withdrawal, decline and system expiry.
- **OPEN:** when unilateral business cancellation is allowed, notice/consent requirements and policy remedies.
- **Source:** S2 §8; Constitution CP-10/12.

### R04-027 — Material amendments require consent
Material post-submission changes to selected offerings, quantities, price, currency or other commercially significant terms **shall** be proposed and require the affected party's explicit agreement before replacing the operative agreed terms.
- **Acceptance:** business cannot silently increase price after customer's submission; customer cannot silently substitute another item after acceptance.
- **Source:** S2 §§5,8; PD-05.

### R04-028 — Non-material corrections remain attributable
PEWA **shall** permit authorised correction of demonstrable errors with accountable reason and preservation of prior event meaning, distinct from a consensual change of commercial terms.
- **Acceptance:** correction of obvious typo in administrative note does not erase prior quoted price or acceptance.
- **Source:** S2 §§8,11; Constitution CP-10.

### R04-029 — Amendment proposal and resolution
The customer and authorised business **shall** see whether a proposed material amendment is pending, accepted or refused, with original terms retained until consent rules are satisfied.
- **Acceptance:** declined amendment leaves prior valid order meaning intact unless separately cancelled.
- **Source:** S2 §8; PD-05.

### R04-030 — No food-order payment event
PEWA **shall not** require or record its own food-order payment confirmation, capture, refund or settlement as an intrinsic step between customer submission and business acceptance.
- **Acceptance:** business can accept a request without PEWA processing meal payment; PEWA cannot imply payment occurred.
- **Source:** S2 §§1,8; Founder commercial exclusion.

## 6. Ordering usage and existing-journey continuity

### R04-031 — Accepted-order charge meaning
Exactly one valid explicit business acceptance **shall** create one eligible consumption event, independent of item quantity, food price, originating channel, later Ready or physical fulfilment.
- **Acceptance:** a basket containing three items produces one acceptance usage event, not three.
- **Source:** S2 §11; PD-05/06.

### R04-032 — No automatic post-cancellation usage reversal
Post-acceptance cancellation or absence of readiness **shall not** automatically refund consumption; governed duplicate, invalid or erroneous usage corrections remain available.
- **Acceptance:** accepted-then-cancelled order keeps original event and separately documented correction if one is justified.
- **Source:** S2 §11; CP-10.

### R04-033 — Insufficient units block new requests
When the organisation lacks sufficient ordinary ordering units and permitted recoverable allowance, PEWA **shall** prevent admission of **new** structured requests without removing an otherwise-active paid base menu or valid existing requests.
- **Acceptance:** an active menu remains browsable; new ordering is clearly unavailable, while earlier valid requests remain visible.
- **Source:** S2 §§10–11; PD-10G, PD-11A, PD-12A.

### R04-034 — Ten recoverable units
PEWA **shall** apply the approved **ten recoverable consumption units per organisation** solely as a bounded continuity mechanism: valid outstanding commitments may use these units on acceptance, and incurred shortfall is recoverable rather than free.
- **Acceptance:** an organisation with zero prepaid units can still accept an already-admitted eligible request under an available portion of ten recoverable units; new admission restrictions and consumption accounting are governed by R05.
- **OPEN:** replenishment/reset rules, concurrency at the last recoverable unit, debt-collection steps and grace windows belong to R05.
- **Source:** S2 §11; Founder 17 October refinement.

### R04-035 — Existing engagements survive lapse
A subscription suspension or consumption depletion **shall not** abruptly terminate a customer's already-admitted valid PEWA ordering engagement or prevent protected order-status retrieval/necessary resolution actions within approved bounded continuity.
- **Acceptance:** customer who submitted before lapse can check status; business can resolve that request within bounded rules without reopening unrelated new customer engagement.
- **Source:** S2 §§10–11; PD-12A.

### R04-036 — Distinguish subscription versus order credit
Exhaustion of ordering units alone **shall not** unpublish an otherwise-active base menu; expiration of the base subscription after governed grace may restrict new menu visibility/engagement but shall preserve lawful business content/history and existing-order continuity.
- **Acceptance:** customer can still browse menu-only features if base subscription active but order units depleted; account renewal restores eligible publication without recreation.
- **Source:** S2 §§10–11; Founder reconciliation.

### R04-037 — Restrict exceptional continuity scope
The ten-unit allowance **shall not** be interpreted as indefinite free subscription, permission to admit unlimited new orders, cancellation of incurred usage debt, or permission to override an independent integrity restriction.
- **Acceptance:** accepted-order debt remains visible and owed; fraud restriction not lifted merely by top-up.
- **Source:** S2 §§10–11; Constitution CP-10/12.

## 7. Protected customer access, channels and communications

### R04-038 — Guest-first protected order access
A customer **shall** be able to submit and revisit a PEWA order without a mandatory full PEWA account; reading and sensitive actions shall use appropriate order-specific protection and verification.
- **Acceptance:** possessing a bare guessable reference is insufficient authority to change an order; the customer can still retrieve legitimate status without installing PWA.
- **Source:** S2 §§8–9,13; PD-11C/12C. Detailed identity controls R07.

### R04-039 — Communication independent of optional push
The order journey **shall** provide an accessible protected status view regardless of web-push permission, PWA installation or availability of outbound WhatsApp.
- **Acceptance:** guest who denies push can return to permitted web status and see business-declared outcome.
- **Source:** S2 §9; R07.

### R04-040 — Channel-neutral domain outcomes
Equivalent web- and permitted WhatsApp-originated structured requests **shall** use the same order meanings, business authority, consent, protection and accepted-order charge semantics, without silently changing currency or context.
- **Acceptance:** valid acceptance is chargeable once regardless of entry channel; WhatsApp customer contact alone is not a structured acceptance.
- **Source:** S2 §§5,8–9,11; CP-04.

### R04-041 — Optional WhatsApp integration remains conditional
PEWA structured ordering **shall** remain available through its independent web product without relying on Miledge WhatsApp Adapter deployment; any WhatsApp conversational order path is conditional on later authorised shared integration readiness.
- **Acceptance:** absence of an adapter does not invalidate web menu or order meaning.
- **Source:** S2 §9; F02/F04 approved dependency boundary.

### R04-042 — Operational messages versus marketing
PEWA **shall** distinguish necessary order-state communications from opt-in marketing/promotional messages. Outbound WhatsApp status messages remain disabled by default; optional push cannot become a requirement for ordering.
- **Acceptance:** customer declines marketing and still has permitted order-status access.
- **Source:** S2 §9; PD-07, PD-12C.

### R04-043 — Business and customer privacy separation
Only the relevant customer, appropriately scoped authorised business roles and bounded authorised PEWA support may access corresponding order details; a business cannot access the customer's unrelated PEWA activity.
- **Acceptance:** hotel attendant cannot inspect the guest's orders with unrelated restaurants, location browsing or favourites.
- **Source:** S2 §§2,7–9,13; CP-11.

## 8. Journeys and product acceptance summary

**Menu-only:** browse published item → select business contact → external/manual exchange may occur → no PEWA order or acceptance charge.

**Structured guest:** choose eligible items/options → see context, one currency, price/total and any terms → submit expressly → Pending → business Accepts or Declines → optional business-declared Ready → protected return access; meal payments remain outside PEWA.

**Withdrawal:** Pending → customer withdraws before acceptance → Withdrawn and no acceptance unit.

**Cancellation:** Accepted → customer requests cancellation → business grants/declines; original acceptance and usage history remain true.

**Amendment:** either affected party proposes material change → counterpart agrees or refuses → only agreed terms take effect, original record remains attributable.

**Balance/lapse:** valid pending request admitted before exhaustion → base subscription/units subsequently restricted → protected existing-journey resolution continues using bounded recoverable unit where needed → no unlimited admission of new requests, no erasure of history.

**Hotel:** guest follows ordinary customer semantics, hotel controls guest menu audience and offered modes, PEWA applies protections without inventing a universal hotel-guest identity class.

## 9. Coverage and cross-workstream allocation

| Area | Requirements | Other owner |
|---|---|---|
| Manual/contact modes | R04-001–004 | R01, R03 |
| Customer selection/submission | R04-005–014 | R02, R07 |
| Business statuses | R04-015–022 | R01, R05, R07 |
| Withdrawals/cancellations/amendments | R04-023–030 | R07, R08 |
| Usage/ten-unit continuity | R04-031–037 | R05 |
| Protected access/channels | R04-038–043 | R07, conditional Miledge dependency |

### Founder-review policy matters

1. **Pending-request expiry**: duration, expiry awareness, service-context variation and authorised extension.
2. **Cancellation authority**: circumstances in which businesses may cancel after acceptance, and remedies/communication without PEWA processing food refunds.
3. **Amendment boundaries**: which changes are material, consent rules, expiry of proposals and conflicting customer/business actions.
4. **Ten recoverable units**: how allowance is replenished, reset and bounded when multiple prior valid requests compete; R05 owns rules. Current approved allowance remains 10, not an open number.
5. **Guest status/access recovery**: privacy-sensitive identity proof and appropriate retained availability; R07 owns it.
6. **Future requested-service time**: business-set request windows, rejection/expiry and timing representations.
7. **Operational communications**: accessible in-PEWA web records, no mandatory push, no automatic outbound WhatsApp; R07 defines detailed notification policy.

These are detailed policies for conscious Founder or competent later approval, not permission to reopen the fundamental meaning of Submitted, Accepted, Ready or the excluded customer-food payment pathway.

**Review disposition requested:** approve R04 as a Stage 3 requirements baseline or request bounded changes in this PR. Stage 3 remains IN PROGRESS; R05–R08 are not started; no product architecture, provider selection, FEF adoption or engineering is authorised.
