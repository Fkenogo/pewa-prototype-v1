# PEWA-S3-R08 — Platform Administration and Operator Console Requirements

**Status:** DRAFT — FOUNDER GITHUB REVIEW; NOT APPROVED  
**Date:** 17 October 2026  
**Stage:** Stage 3 Requirements (IN PROGRESS)  
**Authorities:** [Stage 2 Product Definition](../01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md), [Product Constitution](../01-project-home/PEWA-S1-CONST-001-Product-Constitution.md), approved [R01](PEWA-S3-R01-Business-Foundation-Requirements.md), [R02](PEWA-S3-R02-Menu-and-Offering-Management-Requirements.md), [R03](PEWA-S3-R03-Customer-Experience-Home-Directory-and-Search-Requirements.md), [R04](PEWA-S3-R04-Manual-Engagement-and-Structured-Ordering-Requirements.md), [R05](PEWA-S3-R05-Subscriptions-Consumption-and-Commercial-Entitlements-Requirements.md), [R06](PEWA-S3-R06-Featured-Offers-and-Campaign-Management-Requirements.md), [R07](PEWA-S3-R07-Customer-Protection-Identity-Notifications-and-Privacy-Requirements.md).

**Authority boundary:** Product-level requirements only. No architecture, provider selection, IAM implementation, retention law conclusion, automation technology or engineering authorised. Earlier foundation research is background, superseded where inconsistent with later Founder decisions.

## 1. Role of the Operator Console

The PEWA Operator Console is for **platform integrity, eligibility, commercial support, limited enforcement, privacy and accountable exceptional corrections**. It is not a restaurant POS, kitchen interface, delivery dispatcher, menu editor on behalf of businesses, or food-order arbitrator. PEWA operates the platform; participating businesses remain responsible for their own content, prices, availability, acceptance, preparation and fulfilment.

The Console's **capability is defined now**, alongside other requirements, but its **full experience is assembled last** in the separately authorised eventual implementation programme. This sequencing does not defer the essential policy and integrity requirements, nor authorise engineering. All product operators require proportionate permissions and attributable actions.

## 2. Requirements

### 1. Operator authority and separation

#### R08-001 — Platform remit
PEWA **shall** support controlled administration of business eligibility, commercial standing, abuse, complaints, privacy, exposure accounting and platform integrity without becoming the food merchant. 
- **Acceptance:** An operator can restrict impersonation but cannot routinely accept a restaurant's food request.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-002 — Limited operator roles
PEWA **shall** distinguish staff responsibilities for support, commercial corrections, content-integrity enforcement, privacy handling and sensitive administration. 
- **Acceptance:** Billing support cannot automatically access all guest records.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-003 — Least-privilege scope
PEWA **shall** restrict operator actions and data access to an authorised case, role and necessary purpose. 
- **Acceptance:** Campaign reviewer cannot bulk export unrelated customers' orders.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-004 — No routine merchant impersonation
PEWA **shall** prohibit routine operator editing of business-set prices, menu facts, service availability or customer-specific order acceptance/readiness. 
- **Acceptance:** Operator resolving a complaint cannot mark food Ready.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-005 — Exception safeguards
PEWA **shall** require justified, attributable, reviewable exceptional intervention where legally or operationally necessary rather than informal takeover of merchant authority. 
- **Acceptance:** Emergency access is recorded and proportionate.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-006 — Separation of duties
PEWA **shall** prevent one operator from granting themselves sensitive permissions and then independently approving their own high-impact corrections. 
- **Acceptance:** Sensitive adjustment gets appropriate independent oversight.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

### 2. Organisation eligibility and integrity

#### R08-007 — Organisation case review
PEWA **shall** support review of suspected fictitious or impersonated businesses, unrelated brands or eligibility violations with proportional evidence and reason. 
- **Acceptance:** One fabricated identity may be restricted without banning all legitimate brands automatically.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-008 — Independent enforcement state
PEWA **shall** distinguish integrity restrictions from business-initiated unpublication and subscription suspension. 
- **Acceptance:** Payment reactivation cannot override an impersonation suspension.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-009 — Notice and correction
PEWA **shall** provide understandable business-facing reason and eligible correction or response route for listing restrictions, subject to lawful exceptions. 
- **Acceptance:** Business can correct mistaken contact information and request review.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-010 — Appeal and reconsideration
PEWA **shall** support governed appeal/reconsideration of consequential listing or permission restrictions. 
- **Acceptance:** Merchant can contest an incorrect suspension.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-011 — Scoped restoration
PEWA **shall** restore legitimate eligibility only under applicable authority and preserve historical restriction records. 
- **Acceptance:** Clearing false positive restores menu without rewriting previous case.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-012 — Supplier integrity
PEWA **shall** protect customers against misleading business/food claims without implying PEWA independently verified all ingredients, availability or fulfilment. 
- **Acceptance:** Complaint flagged but operator does not invent revised ingredients.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

### 3. Subscription and order usage support

#### R08-013 — Commercial state view
PEWA **shall** provide authorised operators with accurate organisation subscription, renewal/grace, entitlement and suspended-standing information. 
- **Acceptance:** Operator sees account commercial status without rewriting merchant content.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-014 — Business-to-PEWA payment support
PEWA **shall** support bounded review of PEWA subscription, ordering-unit top-up and advertising payments distinctly from customer meal payments. 
- **Acceptance:** Payment support cannot refund a guest's cash meal purchase through PEWA.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-015 — Accepted-order evidence
PEWA **shall** show eligible acceptance-derived consumption evidence and distinguish submitted, accepted, declined, expired and Ready business-declared outcomes. 
- **Acceptance:** No charge added merely because order was submitted.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-016 — Duplicate/invalid unit adjustment
PEWA **shall** permit governed corrections to demonstrably erroneous, duplicated or unauthorised usage with reason, history and independent review proportionate to impact. 
- **Acceptance:** Duplicate unit reversed without erasing real acceptance.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-017 — Recoverable obligation oversight
PEWA **shall** show ten-unit recoverable allowance consumption, outstanding obligation and authorised collection/correction without treating allowance as free orders. 
- **Acceptance:** Operator can distinguish prepaid credits from recoverable debt.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-018 — Customer-journey continuity
PEWA **shall** protect existing valid order resolution during commercial restrictions and not approve arbitrary deletion as a debt remedy. 
- **Acceptance:** Customer checks a legitimate pending order after merchant lapse.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-019 — Commercial dispute path
PEWA **shall** allow organisation to contest relevant PEWA bills, balances or entitlements through bounded support case handling. 
- **Acceptance:** Merchant can challenge an incorrect top-up charge.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-020 — Rates authority
PEWA **shall** require actual charges, taxes and durations to have separate approved policy before operators can administer them as binding. 
- **Acceptance:** No operator invoices at unapproved illustrative $0.05 rate.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

### 4. Promotions and exposure oversight

#### R08-021 — Campaign eligibility monitoring
PEWA **shall** review campaign compliance, business standing, public promoted destinations and clearly disclosed sponsorship. 
- **Acceptance:** Private hotel room menu is not publicly featured.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-022 — Impression distinction
PEWA **shall** distinguish scheduled, eligible, qualifying delivered and remaining purchased exposure, never claiming impressions from hidden placements. 
- **Acceptance:** Off-screen load not charged as delivered.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-023 — Exposure correction
PEWA **shall** support auditable correction of demonstrably invalid, duplicated or non-qualifying exposure. 
- **Acceptance:** Wrongfully counted impression adjusted with evidence.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-024 — Campaign interruption
PEWA **shall** respect pause/resume and undistributed exposure rights during suspension under approved terms. 
- **Acceptance:** Pause stops further billed delivery but preserves prior delivered count.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-025 — Promotion complaint and remedy
PEWA **shall** allow proportionate intervention against misleading offers while preserving merchant source-of-truth responsibility. 
- **Acceptance:** Operator pauses misleading ad without silently editing restaurant price.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-026 — Organic independence
PEWA **shall** prevent operator campaign controls from purchasing or inserting disguised organic search advantages. 
- **Acceptance:** Advertising package never secretly boosts organic ranking.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

### 5. Customer reports, privacy and support

#### R08-027 — Complaint intake
PEWA **shall** accept relevant public reports of impersonation, misinformation, private-data exposure and platform misuse with triage appropriate to risk. 
- **Acceptance:** Customer can report a suspect listing without account.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-028 — Merchant/customer separation
PEWA **shall** scope case information to the legitimate customer and related merchant without showing competitors' orders or preferences. 
- **Acceptance:** Merchant cannot read competitor-specific reports.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-029 — Order dispute boundaries
PEWA **shall** provide factual platform records and contact/clarification routes, without routine PEWA adjudication of meal quality, delivery or merchant cash refund. 
- **Acceptance:** Operator explains accepted status but does not declare food delivered.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-030 — Privacy-rights workflow
PEWA **shall** support properly authorised personal-data access/correction/deletion/export requests under applicable policy and legal retention. 
- **Acceptance:** Valid deletion request handled while lawful evidence preserved.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-031 — Sensitive incident escalation
PEWA **shall** provide bounded escalation and response pathways for suspected access misuse or data disclosure. 
- **Acceptance:** Exposure of hotel guest information is triaged to authorised privacy operator.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-032 — Customer recovery escalation
PEWA **shall** permit proportionate assistance for protected order-status access loss, without leaking private order data. 
- **Acceptance:** Knowing a restaurant name does not allow recovery of someone else's order.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-033 — Notifications integrity
PEWA **shall** ensure operator-generated notices truthfully distinguish platform restrictions from business-declared order actions and respect marketing consents. 
- **Acceptance:** Suspension notice not described as restaurant order decline.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-034 — Language fidelity
PEWA **shall** preserve merchants' chosen food/menu languages in support handling; do not invent translations or allergen meanings. 
- **Acceptance:** Swahili menu term remains attributed and not translated as verified dietary claim.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

### 6. Audit, reporting and operational boundaries

#### R08-035 — Attributable audit events
PEWA **shall** record material eligibility, role, billing, exposure, privacy, enforcement and exceptional-support actions with meaningful actor/reason/outcome. 
- **Acceptance:** A revoked privilege remains historically attributable.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-036 — Scoped oversight reporting
PEWA **shall** support relevant PEWA-observed service/account/campaign/accepted-order metrics without implying externally verified food revenue or fulfilment. 
- **Acceptance:** Dashboard distinguishes accepted-order usage from actual sales.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-037 — No customer browsing leak
PEWA **shall** do not disclose named customers' recents, favourites or competitor browsing histories in advertiser/operator business reports. 
- **Acceptance:** Ad buyer gets exposure totals, not competitor visits.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-038 — Case lifecycle
PEWA **shall** distinguish newly reported, triaged, awaiting response, resolved, disputed/reopened and closed cases under product policy. 
- **Acceptance:** Closed complaint can be reopened with relevant new evidence.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-039 — Disclosure minimisation
PEWA **shall** make necessary operational evidence available proportionately to affected parties, with customer-private details redacted as appropriate. 
- **Acceptance:** Restaurant sees restriction reason without another customer's private phone.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-040 — Platform maintenance boundaries
PEWA **shall** allow authorised platform-level configuration and service-quality intervention without editing merchant commercial truth or changing approved product authority. 
- **Acceptance:** Operator can suspend feature visibility, not secretly rewrite merchant offerings.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-041 — Staged experience assembly
PEWA **shall** define required Operator Console capabilities alongside R01–R07, but assemble its full product experience last in any separately authorised implementation sequence. 
- **Acceptance:** R08 requirements reviewed now without implying engineering can begin.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

#### R08-042 — No implicit technical adoption
PEWA **shall** leave operator infrastructure, auth architecture, provider, audit storage and integration choices to later stage gates. 
- **Acceptance:** Approval of case-tracking behaviour does not select database or vendor.
- **Source:** Stage 2 §§2–3, 8, 10–13; Constitution CP-03/08/10–12; corresponding approved R01–R07 boundaries.

## 3. Cross-workstream operator journeys

**Impersonation report:** customer flags false restaurant brand → appropriately scoped operator reviews relevant evidence → restriction, notice and appeal pathway → legitimate supplier can correct or contest → integrity action and outcomes remain attributable.

**Duplicate accepted-order unit:** business reports duplicated charge → operator examines PEWA-observed acceptance and usage events → corrects demonstrable duplicate through governed adjustment → preserves real business acceptance and original commercial meaning.

**Featured exposure dispute:** business contests impressions for a hidden placement → operator reviews qualifying opportunity-to-see evidence under approved criteria → corrects invalid counted exposure → undelivered rights remain protected.

**Guest privacy incident:** customer reports hotel room information appearing publicly → authorised privacy/support staff investigate with minimal access → restrict exposure and handle notification/remediation under approved policy → preserve valid existing customer commitments without exposing private case material.

**Subscription suspension:** business overdue beyond grace → public access/new engagement suspended under R05 → account content and valid existing order resolution retained → payment restoration restores eligible presence but not unrelated integrity restrictions.

## 4. Requirement ownership and remaining policy work

| Area | IDs | Primary dependencies |
|---|---|---|
| Operator authority separation | R08-001–006 | R01/R07 |
| Organisation legitimacy/enforcement | R08-007–012 | R01/R02/R07 |
| Subscriptions, charges and continuity | R08-013–020 | R04/R05 |
| Advertising and exposure accounting | R08-021–026 | R03/R06 |
| Complaints and privacy | R08-027–034 | R07 |
| Audit, reporting and implementation boundary | R08-035–042 | R01–R07 |

**Outstanding explicit decisions (not silently resolved):**

1. Organisation verification, anti-impersonation evidence, listing limitation reasons and an appropriate appeals policy.
2. Product operator role model, independent review thresholds, exceptional customer/order-data access, privileged break-glass rules and owner recovery.
3. Business billing dispute periods and correction/remediation authority subject to actual approved PEWA commercial rates.
4. Exact campaign qualification evidence, impression disputes/credits and report-policy disclosures as R06 details are finalised.
5. Legally appropriate privacy retention, response windows, incident notification and lawful deletion/export rights by operating country.
6. Customer versus business food-quality/dispute responsibility, standard PEWA factual-support obligations and exceptional fraud redress.
7. Case visibility, appropriate notice/appeal and proportional enforcement, without allowing an operator to routinely override merchant commercial decisions.
8. Stage 4–6 architecture, technical controls, provider and implementation choices remain separately gated; no FEF adoption presumed.

**Founder review focus:** does R08 give PEWA enough authority to operate and protect its service while firmly separating it from merchants' daily commercial decisions, limiting privileged access and establishing attributable corrections? Full operator experience is deliberately assembled last.

**Disposition requested:** approve R08 requirements or request bounded corrections in GitHub. This alone does not close Stage 3, approve the open policy register, initiate Stage 4 or authorise engineering.
