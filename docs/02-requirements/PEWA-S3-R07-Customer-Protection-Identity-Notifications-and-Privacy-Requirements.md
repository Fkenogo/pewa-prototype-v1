# PEWA-S3-R07 — Customer Protection, Identity, Notifications and Privacy Requirements

**Status:** DRAFT — FOUNDER REVIEW REQUIRED; NOT APPROVED  
**Date:** 17 October 2026  
**Stage:** Project Home Stage 3 — IN PROGRESS  
**Authorities:** [Approved Stage 2 definition](../01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md), [Constitution](../01-project-home/PEWA-S1-CONST-001-Product-Constitution.md), [R01](PEWA-S3-R01-Business-Foundation-Requirements.md), [R02](PEWA-S3-R02-Menu-and-Offering-Management-Requirements.md), [R03](PEWA-S3-R03-Customer-Experience-Home-Directory-and-Search-Requirements.md), [R04](PEWA-S3-R04-Manual-Engagement-and-Structured-Ordering-Requirements.md), [R05](PEWA-S3-R05-Subscriptions-Consumption-and-Commercial-Entitlements-Requirements.md), [R06](PEWA-S3-R06-Featured-Offers-and-Campaign-Management-Requirements.md). Earlier foundation research informs but does not override later Founder decisions.

**Boundary:** Observable product requirements only. No selected authentication provider, technical mechanism, legal conclusion, jurisdictional retention period, notification transport implementation, architecture or engineering.

## Principles

Eligible intentionally public menus need no account. Hotel guests are customers, not a separate mandatory identity type; hotels govern guest audience and service mode, subject to PEWA protection rules. Order-status access requires appropriate order-specific authorisation, but not compulsory account registration. The primary operational message record is protected PEWA web/in-app; browser push is optional; unsolicited outbound WhatsApp order-status notifications remain disabled. User-level retargeting is not authorised. Business commercial truth and PEWA platform accountability remain distinct.

## 1. Public and optional identity

### R07-001 — Public without login
PEWA **shall** eligible public menus and Directory are accessible without registration, location permission, PWA install or push; optional identity only enhances convenience.
- **Acceptance:** An anonymous visitor searches and browses a café menu.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-002 — Separate choices
PEWA **shall** optional account, local favourites, preference sync, push, location and marketing consent are independently controllable.
- **Acceptance:** Creating an account never opts the customer into advertising.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-003 — Customer isolation
PEWA **shall** merchants access only their own relevant customer/order information, never cross-business history or favourites.
- **Acceptance:** A café cannot inspect a guest's hotel orders.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-004 — Staff access
PEWA **shall** private customer information is accessible only to legitimately scoped business staff and bounded PEWA support.
- **Acceptance:** A venue employee cannot view another venue's guest data.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

## 2. Protected hotel menus

### R07-005 — Hotel-managed eligibility
PEWA **shall** the hotel configures its permitted guest menu audiences and service modes; no universal PEWA guest identity class is required.
- **Acceptance:** Public restaurant remains accessible while room-service menu is restricted.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-006 — Protected publication
PEWA **shall** restricted menus and guest details cannot leak into public Directory, search or paid exposure.
- **Acceptance:** Search does not list private room-service offerings.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-007 — Proportionate verification
PEWA **shall** protected access requires adequate verification, duration and revocation appropriate to context, without prescribing technology.
- **Acceptance:** An expired permission cannot reveal private room data.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-008 — Minimum guest data
PEWA **shall** collect/display only appropriate room/contact details for chosen service; public venues do not demand room numbers.
- **Acceptance:** Takeaway visitor enters no hotel-room field.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-009 — Access revocation
PEWA **shall** ending menu eligibility does not erase or prevent lawful resolution of a preexisting valid order.
- **Acceptance:** Guest can check legitimate existing order after guest-menu access expires.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

## 3. Order-specific customer protection

### R07-010 — Account-free return
PEWA **shall** customer can return to a protected order status view without an account, push or PWA.
- **Acceptance:** Guest declines push, revisits pending order on web.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-011 — No bare-ID privilege
PEWA **shall** an order reference alone does not convey unrestricted read, cancellation or amendment authority.
- **Acceptance:** Guessed order ID reveals no private order.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-012 — Sensitive actions
PEWA **shall** withdrawal, cancellation, amendment consent and account linkage require adequate authorisation.
- **Acceptance:** Viewing limited order status does not permit changing it.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-013 — Bounded recovery
PEWA **shall** legitimate order access recovery protects identity and limits disclosure; detailed proof rules are open.
- **Acceptance:** Knowledge of business and time is insufficient to steal order access.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-014 — Attributable truth
PEWA **shall** protected status differentiates submission, business acceptance, decline, optional Ready and exception events.
- **Acceptance:** Customer does not see Ready inferred from elapsed time.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-015 — Optional history sync
PEWA **shall** linking orders to optional accounts requires evidence, not mere matching name/contact claims.
- **Acceptance:** A same-name account cannot import another guest's history.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

## 4. Notifications and channels

### R07-016 — Web record primary
PEWA **shall** pEWA provides protected web/in-app operational updates independent of external messaging.
- **Acceptance:** Without push, customer reads acceptance in protected view.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-017 — Truthful operational events
PEWA **shall** messages faithfully attribute submission, acceptance, decline, Ready, expiry, amendments and cancellations.
- **Acceptance:** Cancellation requested is not presented as cancelled/refunded.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-018 — Scoped delivery
PEWA **shall** only intended customer and authorised business recipients receive protected updates.
- **Acceptance:** Unrelated merchant cannot receive alert.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-019 — Push opt-in
PEWA **shall** web push is optional, consented, revocable and support-dependent, never a condition for ordering.
- **Acceptance:** Customer refusing push can still order.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-020 — No WhatsApp default
PEWA **shall** outbound WhatsApp status messages remain off absent separate approval; no fallback merely because push unavailable.
- **Acceptance:** Push denied does not result in WhatsApp message.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-021 — Marketing separated
PEWA **shall** marketing/promotion consent is separate from necessary operational order records.
- **Acceptance:** Promotional opt-out does not block order updates.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-022 — Preview privacy
PEWA **shall** device-visible alerts avoid sensitive room/customer/order detail until authenticated view.
- **Acceptance:** Lock-screen alert does not expose hotel room number.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-023 — Conditional channel
PEWA **shall** later WhatsApp integration cannot change actor-declared order meanings or make independent web unavailable.
- **Acceptance:** Channel delivered receipt is not business acceptance.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

## 5. Privacy and customer rights

### R07-024 — Public vs protected classes
PEWA **shall** public menu information remains separate from organisation admin, billing, customer identity, orders, preferences, and audit records.
- **Acceptance:** Directory reveals no business billing contact.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-025 — Data minimisation
PEWA **shall** pEWA asks only for information needed for chosen interaction and applicable policy.
- **Acceptance:** Menu search works without phone number.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-026 — Local preferences control
PEWA **shall** customers can remove individual recents/favourites and clear them without cancelling orders.
- **Acceptance:** Delete favourite does not delete accepted order.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-027 — No cross-business disclosure
PEWA **shall** advertisers and merchants do not receive identifiable competitor browsing/favourites.
- **Acceptance:** Purchased impressions yield no customer browsing roster.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-028 — Independent permission controls
PEWA **shall** optional location, sync, marketing and push permissions can be separately changed.
- **Acceptance:** Revoking marketing leaves status view intact.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-029 — Retention classes
PEWA **shall** retention is purpose-based and lawful with distinct access/retention duration and deletion exceptions; exact law/periods remain open.
- **Acceptance:** Expired access route does not imply record is public or erased.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-030 — Correction and removal
PEWA **shall** appropriate personal-data corrections and lawful deletions preserve legitimate historic event meaning where permitted.
- **Acceptance:** Contact correction does not rewrite recorded prices.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-031 — User rights pathways
PEWA **shall** users can seek disclosure, correction, deletion and privacy issue resolution under applicable obligations.
- **Acceptance:** Customer can report room-data exposure.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-032 — Recovery disclosure safety
PEWA **shall** account/order recovery and error messages do not disclose another person's existence or private order.
- **Acceptance:** Invalid recovery cannot enumerate customers.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-033 — No automatic behavioural ads
PEWA **shall** recents, favourites, GPS and search are not automatic permission for retargeting.
- **Acceptance:** Restaurant visitor not added to targeted ad audience by default.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

## 6. Integrity and accountability

### R07-034 — Content complaint path
PEWA **shall** customers can report misleading provider identities, safety claims or privacy risks; PEWA handles bounded platform obligations.
- **Acceptance:** Report impersonation without PEWA pretending to be food merchant.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-035 — No invented food claims
PEWA **shall** names, local words and classifications do not prove ingredients, allergens or dietary/certification claims; unknown is not safe/free-from.
- **Acceptance:** Kirundi dish name not automatically declared allergen-free.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-036 — Accurate exception wording
PEWA **shall** order expiry, withdrawal, cancellation and amendment stages remain honest and protected.
- **Acceptance:** Cancellation request is not claimed to be a refund.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-037 — Bounded operator access
PEWA **shall** operator intervention for support, billing, fraud and privacy is scoped and attributable, not routine editing/acceptance.
- **Acceptance:** Billing correction cannot become merchant order acceptance.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-038 — Change accountability
PEWA **shall** material customer-access, role, permission and correction events keep proportionate attributable evidence subject to retention law.
- **Acceptance:** Revocation prevents new access without erasing legitimate prior actions.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

### R07-039 — Business-language freedom
PEWA **shall** english-first PEWA navigation permits business-authored names/descriptions in any language; privacy/safety protections remain consistent.
- **Acceptance:** Swahili menu name never forcibly mistranslated into an allergen guarantee.
- **Source:** Stage 2 §§2–13; Constitution CP-03/10/11/12 and linked R01–R06 requirements as applicable.

## 7. Cross-workstream acceptance journeys

**Public browsing:** anonymous customer uses Directory, reads a Swahili/Kirundi/French business menu and saves a local favourite without sharing other visits with the merchant.

**Hotel guest:** public restaurant menu remains available; private room menu is accessible only to the hotel's configured eligible audience; access is revocable without deleting legitimate already-admitted order commitments.

**Order:** guest submits a structured request, receives a protected return route without an account, rejects push, later checks business-declared outcome on web; sensitive cancellation/amendment requires stronger proof than simply knowing order ID.

**Privacy control:** customer clears recent menus, declines targeted marketing, raises correction/deletion request, and retains access to permitted protected order commitments within lawful retention boundaries.

## 8. Outstanding policy and legal decisions

1. Protected hotel guest audience eligibility proof, shared-room/group access, expiry and revocation, without a universal guest identity account.
2. Order-specific status return and recovery: proportional verification and separate read/write authorisation; abuse handling and availability window.
3. Optional customer identity and business-account recovery: delegation, voluntary syncing and exception controls; no selected provider or mechanism.
4. Country-specific data rights, retention/deletion windows, lawful preservation, privacy notice, age considerations, sensitive incident handling and cross-border compliance — requires competent legal/product review.
5. Notification details: necessary operational coverage, optional push, privacy-safe preview, failed-delivery meanings, and marketing consent.
6. Substantiation and display rules for allergens, dietary and certification claims; do not infer truth from foreign-language labels or category names.
7. Platform complaint handling, abuse/fraud appeals and operator escalation under R08 authority.
8. Customer-level behavioural ad targeting is explicitly not authorised; later adoption would require separate privacy and product approval.

## 9. Founder review and disposition

**Review focus:** lightweight public access, hotel guest restrictions without forced identity, protected guest-order recovery and sensitive actions, operational notifications without WhatsApp dependency, privacy rights and lawful retention, cross-business isolation, and truthful business-provided menu content.

**Disposition requested:** approve R07 or request bounded corrections via this PR. Approval does not approve R08, Stage 3 closure, product architecture, FEF adoption or engineering.
