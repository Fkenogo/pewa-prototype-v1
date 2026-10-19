# PEWA-S3-ORD-001 — Order Lifecycle and Exception Policy Decision Brief

**Status:** FOUNDER APPROVED — ORD-D01–D08, 18 October 2026, PR #31; subject to specified open implementation and legal-policy details.  
**Date:** 18 October 2026  
**Stage:** Stage 3 IN PROGRESS  
**Authority:** Approved Product Definition; [R04](PEWA-S3-R04-Manual-Engagement-and-Structured-Ordering-Requirements.md), [R05](PEWA-S3-R05-Subscriptions-Consumption-and-Commercial-Entitlements-Requirements.md), [R07](PEWA-S3-R07-Customer-Protection-Identity-Notifications-and-Privacy-Requirements.md); [COM-001](PEWA-S3-COM-001-Subscription-and-Consumption-Policy-Decision-Brief.md) (COM-D01–D07 approved). This is a product policy proposal, not engineering specification.

## 1. Settled invariants not reopened

- Manual contact does not itself create an order; structured ordering requires active eligible subscription/context and explicit business enablement.
- Customer **Submitted** is a request, not merchant **Accepted**. Only a valid expressly authorised business acceptance consumes one unit, regardless of basket value/size. **Ready** is optional and business-declared, not verified collection/delivery.
- Customer food payment/refunds occur outside PEWA; PEWA can only reflect business/customer declarations within approved bounds.
- One standard monthly subscription includes 200 accepted-order units; add-on units may be purchased; 10 recoverable units per organisation protect eligible already-admitted commitments but create debt. Included → purchased → eligible recoverable consumption order approved.
- Commercial depletion or lapse must not erase order history or improperly sever already-admitted valid commitments. Guest order status stays available via protected web access without compulsory account, push or WhatsApp.
- The business remains the authority for accepting, preparing and fulfilling food orders; PEWA is responsible for accurate status and platform integrity.

## 2. Founder-approved policy directions

### ORD-D01 — Pending request response deadline
**Approved direction:** Every structured request has a clear pending-response limit tied to the business's declared service context. The customer is told the deadline or understandable expected response window at submission. Once the limit expires without acceptance, the request becomes **Expired**, with no accepted-order unit consumed. A business may configure a bounded permitted window, within PEWA safeguards; absence of configuration uses a separately approved conservative default, **not an invented number**.
- **Alternative:** One uniform PEWA-defined deadline regardless of business context.
- **Need to confirm:** default, minimum/maximum windows, advance-order timing, notice and any permitted extension before expiry.
- **Acceptance:** a café request unanswered past its displayed deadline becomes Expired, never silently Accepted.

### ORD-D02 — Business decline and pre-acceptance customer withdrawal
**Approved direction:** Before acceptance, the business may explicitly Decline and the customer may explicitly Withdraw while Pending. Each is final for that submitted request, attributable, distinct from expiry and nonchargeable. A changed mind requires a new request, not reopening the historical declined/withdrawn order.
- **Alternative:** Controlled reopen before deadline; adds complexity and audit/duplicate risks.
- **Acceptance:** withdrawal before merchant acceptance creates no consumption unit.

### ORD-D03 — Business unilateral cancellation after acceptance
**Approved direction:** An authorised business may cancel an already Accepted order only with a reason and prompt customer notice, preserving original acceptance, charge and cancellation history. Cancellation cannot falsely assert customer agreement or automatic refund. PEWA offers a complaint route for demonstrably misleading business action.
- **Alternative:** Require customer consent before all post-acceptance cancellation; may prevent businesses from honestly reporting inability to fulfil.
- **Need to confirm:** policy grounds, support/escalation and whether special circumstances require consent.
- **Acceptance:** restaurant unable to prepare an accepted dish records business-cancelled with reason; PEWA never claims meal refund or preparation.

### ORD-D04 — Customer cancellation after acceptance
**Approved direction:** The customer may **request cancellation** after acceptance; only explicit business disposition changes it to Cancelled or Cancellation Declined. Until then, original Accepted commitment remains operative and transparently labelled alongside the pending request. A cancellation does not automatically refund the accepted-order unit.
- **Alternative:** Merchant-configured pre-preparation auto-cancel windows; only if later authorised and disclosed.
- **Acceptance:** customer pressing “Request cancellation” cannot make a merchant order disappear silently.

### ORD-D05 — Material amendments
**Approved direction:** Changes to line items, quantities, options affecting product, price, currency, service location/method or requested time are material when they affect commercial terms. A proposal is not effective until the affected other party expressly agrees. Pending change retains original submitted/accepted commitment. Changes must not silently change order currency or create a second consumption event for the same accepted order.
- **Alternative:** Auto-approve certain nonmaterial business-declared substitutions under customer-preauthorised bounds; defer unless explicitly defined.
- **Need to confirm:** acceptable proposal expiry; handling if both parties propose concurrently; changes that require a new order because of changed supplier/context.
- **Acceptance:** unilateral price increase cannot replace the customer-agreed amount.

### ORD-D06 — Mistake corrections versus commercial amendments
**Approved direction:** Typo or factual/administrative corrections that do not change agreed commercial obligations may be made by authorised actors with attributable reasons and preserved prior meaning. Commercial changes require D05 consent. Erroneous or duplicate accepted-order units use governed R05/R08 correction, not deletion of acceptance history.
- **Acceptance:** correction of a harmless comment does not rewrite accepted price, supplier or time.

### ORD-D07 — Time-dependent menu eligibility and order snapshots
**Approved direction:** At submission, validate business-declared eligibility against the **requested service time**, preserve the submitted offering/options/price/currency/context as the request snapshot, and show material changes to both parties. Later menu edits cannot secretly reprice or erase an outstanding valid commitment. Business still may decline a request.
- **Need to confirm:** overlapping recurring schedules, manual override precedence and timed reservations/preorders; R02 owner.
- **Acceptance:** an accepted breakfast pre-order retains the customer's agreed terms even if the business revises tomorrow's menu afterward.

### ORD-D08 — Boundaries when units or subscription lapse mid-journey
**Approved direction:** New structured request admission follows valid subscription, business enablement and sufficient permitted admission capacity. Already-admitted valid Pending requests may still be Accepted or Declined within bounded continuity and COM-D04 recoverable rules; expired/depleted businesses must not take unlimited new orders. Existing protected status, lawful cancellation, amendments and notice remain available as needed without falsely suggesting the subscribed public menu is still active.
- **Need to confirm:** the last recoverable-unit concurrency, terminal nonchargeable actions after all units are exhausted and detailed fallback policy when business cannot validly accept.
- **Acceptance:** existing guest can check status and ask cancellation even after the restaurant's monthly subscription becomes overdue.

## 3. Conflict and exception checks

| Event | Customer message | Business authority | Unit consequence |
|---|---|---|---|
| Submitted | Request sent, awaiting business decision | Not yet accepted | 0 |
| Declined / Withdrawn / Expired | Explicit attributed outcome | Business decline / customer withdrawal / governed expiry | 0 |
| Accepted | Business agreed to submitted terms | Explicit authorised business action | 1 |
| Ready | Business says ready (not independently delivered) | Business declaration | 0 additional |
| Cancellation requested | Request pending disposition; original acceptance persists | Customer initiates, business decides | No automatic reversal |
| Business-cancelled | Business could not/will not fulfil with reason | Authorised business | No automatic reversal |
| Amendment proposed | Proposed terms not operative | Either party proposes; affected party must consent | No duplicate acceptance unit |
| Corrected duplicate unit | Correction separately reasoned | Scoped PEWA financial correction | Explicit adjustment only |

## 4. Policy still requiring numerical or operational specification

These cannot be assumed merely through ORD-D01–D08 approval: precise request timeout and configuration bounds; deadline extension; time-window/schedule conflict precedence; consent-proposal expiry and concurrent revision priority; reasons for unilateral business cancellation; optional customer remedy; guest authentication/recovery proof; commercial last-unit races and recovery debt; applicable legal disclosures. Assign to Founder product/commercial/privacy authority before dependent capability implementation, not as guesses in architecture.

## 5. Stage 3 handover and requested disposition

If recommended ORD-D01–D08 are approved, a follow-up controlled PR should record the disposition in this decision brief, harmonise R02/R04/R05/R07/R08 where needed, and update [Stage 3 REC-001](PEWA-S3-REC-001-Consolidated-Requirements-Reconciliation.md). Other decision clusters still remain (guest protection/privacy, campaign validity, business eligibility, etc.). **This PR is not a Stage 3 closure, architecture authorisation, provider choice or engineering start.**

**Founder disposition (18 October 2026):** Approved the recommended ORD-D01–D08 directions in PR #31 and directed that these policies be reflected in PEWA's Terms and Conditions and platform policies. Alternatives were not selected. Exact response deadlines, local consumer-protection obligations, cancellation remedies and enforceable wording remain subject to separate product/legal determination. These approved product policies are not themselves published legal terms or customer consent. Stage 3 remains open.


## 6. Terms and Conditions / platform-policy handover

Founder instruction: **incorporate approved ORD-D01–D08 into PEWA's future business-facing and customer-facing Terms and Conditions and applicable platform policies**, with legally competent drafting and jurisdiction-specific review before publication. The legal-policy package must faithfully explain: (1) requests versus merchant acceptance, expiry and attribution; (2) customer pre-acceptance withdrawal and business decline; (3) post-acceptance business cancellation and customer cancellation requests, reasons, notice and potential remedies; (4) bilateral material amendment consent; (5) correction of noncommercial errors; (6) pricing/menu snapshots and requested service time; (7) existing-order continuity through subscription/unit changes; (8) meal payment/refunds and fulfilment remaining with merchant; and (9) one valid business acceptance consuming one unit, with no automatic unit reversal upon later cancellation.\n\n**Do not conflate** customer-facing food-order terms, participating-business commercial/subscription terms, privacy notice/consents, and PEWA operator enforcement policy. Publish no unapproved numerical deadlines, refund promises, jurisdictional legal representations or chosen technical mechanisms. Terms need intelligible language and a separately authorised effective date/acceptance process.\n