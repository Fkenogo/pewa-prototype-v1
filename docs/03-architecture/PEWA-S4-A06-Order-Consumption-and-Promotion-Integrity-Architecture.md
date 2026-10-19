# PEWA-S4-A06 — Order, Consumption and Promotion Integrity Architecture

**Status:** DRAFT — FOUNDER REVIEW; NOT APPROVED  
**Date:** 18 October 2026  
**Authority:** Stage 3 closed baseline (314 requirements; 41 approved policy directions), approved A01–A05, Founder 18 October clarifications.  
**Boundary:** Logical transaction, entitlement and exposure architecture; no database/queue/runtime/provider, code, billing implementation or paid rate selected.

## 1. Architecture principle

PEWA must keep **base-menu visibility** separate from **new structured-order capacity**. An active subscription keeps published menus, direct links, organic discovery and manual contact available even if consumption units are exhausted. Only **new structured-order admission** becomes unavailable. Previously admitted orders remain accessible under the approved bounded continuity policy. The ten recoverable units are debt-backed continuity, not extra ordinary admission credits.

## 2. Order and unit authority

- Customer explicitly submits an immutable business/context/request-time/item/variant/quantity/currency/price snapshot. Submission itself consumes nothing.
- Business alone makes an authorised acceptance decision while the request is still eligible Pending. Decline, preacceptance customer withdrawal and expiry must resolve conflicts without later contradictory acceptance.
- **One successfully committed business acceptance creates exactly one chargeable unit**, never more or less due to retries, duplicate callbacks, multi-device decisions or amendment.
- An acceptance and its unit authorisation must have an indivisible logical outcome: no accepted order with unaccounted unit liability, and no consumption charge without an accepted order. The eventual technical mechanism is reserved for A08.
- Business Ready is a declaration, not PEWA proof of actual preparation, fulfilment, customer payment or delivery.
- Business-cancelled-after-acceptance, mutual material amendments and operator corrections remain attributable; previously consumed units are not automatically erased or recharged. Specific compensating entitlements/remedies need product-commercial/legal approval.

## 3. Subscription and consumption compartments

| Balance / state | Ownership and rule | Independence |
|---|---|---|
| Base organisation subscription | One standard monthly subscription licenses eligible published listing/discovery/manual paths; possible governed grace and expiry | Separate from unit exhaustion |
| Current-period included units | 200 allocated only once per eligible monthly renewal; unused expire at period boundary | Never accumulate as purchased top-ups |
| Purchased top-up units | Acquired in separately approved bundles, usable after included; survive normal renewal subject to disclosed validity | Not substituted by ten recoverable units |
| Recoverable outstanding liability | Hard ceiling of 10 outstanding units at organisation level, only for eligible previously admitted commitments | Debt to recover/settle; not monthly free grant |
| New-order admission | Requires ordering enabled, valid commercial entitlement and allowed capacity at the relevant phase | Disabled when no ordinary admission capacity; never hides paid menu |
| Existing admitted order resolution | Bounded continuity notwithstanding renewal/depletion/grace events | Does not imply unlimited new intake |

**Allocation:** current included first → purchased top-up units → recoverable liability for qualified already admitted commitments only. Full debt settlement, periodic offset, refund correction, provisional reservations, and race semantics are pending detailed Founder product/commercial policies, not presumed by architecture.

## 4. Minimum logical audit/event model

- Subscription-period identity; renewal recognition identity; included allocation; expiry boundary.
- Purchase/top-up receipt and source identity; available, reserved or consumed status as later approved.
- Order identity; submission snapshot and time; authorised business decision with actor/context; deterministic accepted event identity; associated single usage decision and allocation source.
- Recoverable-unit obligation identity, cause, outstanding amount, settlement/offset and dispute/correction trail.
- Campaign identity, purchased exposure entitlement, eligibility/publication state, qualifying observed view identity, rejection reason and exposure correction.
- All sensitive records require actor scopes, reasoned corrections and purpose-limited retention under later privacy/legal approval.

The model describes evidence semantics, not a mandatory append-only infrastructure or unlimited retention of personal data.

## 5. Critical consistency scenarios

| Scenario | Required outcome |
|---|---|
| Two staff click Accept simultaneously | Exactly one terminal acceptance and one associated charge |
| Accept races with customer Withdraw | One defensible ordered final outcome, never both as effective decisions |
| Renewal billing callback repeats | No extra grant of 200 units |
| Two pending orders seek final available unit | Neither double spends ordinary units; ten-unit outstanding recovery ceiling enforced |
| Month turns while pending previously admitted request remains unresolved | Snapshot and valid continuity rules govern; not automatically reclassified as new intake |
| No units available but base subscription current | Menu and manual contact stay online; ordering unavailable; no disguised unpublication |
| Payment/provider callback delayed or retried | No duplicate renewal/top-up entitlements; reconciliation trail |
| Business cancels already accepted order | Original acceptance/usage history remains identifiable; legal/commercial correction governed separately |
| Support corrects mistaken debit | Authorised compensating adjustment with reference, rationale and preserved original evidence |

## 6. Campaign exposure and charging independence

- Campaign creation/purchase/placement eligibility is separate from **delivered qualifying exposure**.
- A qualifying impression requires the particular sponsored placement to have a real visible opportunity-to-see on-screen under later approved viewability, timing, deduplication and invalid-traffic rules.
- Prefetch, off-screen render, schedule, fake traffic and mere click/visit/sale never automatically represent a qualifying delivered view.
- Business receives clear purchased/delivered/remaining aggregate exposure; corrections are traceable; pauses/suspension preserve delivered evidence and treatment of undelivered entitlements follows approved policy.
- Paid exposure cannot buy organic ranking or make protected/private content publicly eligible.
- Advertising attribution must never be represented as verified meal purchase, merchant revenue or PEWA fulfilment.

## 7. Media content responsibility cross-reference

Founder confirmed on 18 October 2026 that businesses are presumed to hold appropriate image permissions and are responsible for images/content they publish. Accordingly, image submission requires a business rights/responsibility representation but not routine PEWA verification of every image licence. PEWA retains notice/reporting, restriction and takedown/escalation authority consistent with its platform-integrity duties and applicable law. See amended [A05](PEWA-S4-A05-Discovery-Content-and-Media-Architecture.md). This principle belongs in future Business Terms/content policies, subject to competent legal review.

## 8. Architecture options reserved for technical evaluation

**Single strong transactional boundary** for acceptance/unit authorisation is the initial preferred design property, within the approved modular monolith direction. Event/outbox-like reliable projection may support nonauthoritative notifications/reporting, but no independent notification or projection can mint a usage event. A future separate billing service must demonstrate correctness under partition/failure and must not make an eventually consistent after-the-fact debit the sole authority for acceptance.

Before A08 technology selection, compare concurrency guarantees, transaction isolation, recovery, reconciliation, durable histories, cost and operational testing evidence. Reject options that cannot prove safety at the last valid unit and period boundary.

## 9. Founder decisions requested

**A06-FD1:** Confirm accepted-order decision and associated one-unit consumption are one strongly consistent logical operation.

**A06-FD2:** Confirm independent base subscription and new-order admission status; exhausted units disable new structured orders only, preserving active published menus, organic discovery and manual business contact.

**A06-FD3:** Confirm included 200/month, purchased carry-forward, ten outstanding recoverable-unit cap and explicit attribution/reconciliation as distinct authoritative balances.

**A06-FD4:** Confirm qualification of paid exposure is based on observed eligible on-screen opportunity-to-see, with deduplication, invalidity and financial correction; never paid organic rank.

**A06-FD5:** Preserve detailed unresolved rates, concurrency settlement, recoverable-unit debt repayment, timing thresholds, legal refunds/rights and ad-view qualification rules for separate appropriate approval before implementation/launch.

**A06-FD6:** Confirm uploading business responsibility for image rights and content, with proportionate PEWA dispute/takedown governance, and ensure eventual Terms/Policies capture it without claiming automatic legal immunity.

**A06-FD7:** Allow A07/A08 to compare implementation strategies under these integrity and failure constraints, without selecting a vendor or starting engineering now.

**Next:** A07 communications and Miledge shared-service boundaries, followed by A08 infrastructure/options consolidation and independent Stage 4 closure. **Stages 5–6 remain NOT STARTED.**
