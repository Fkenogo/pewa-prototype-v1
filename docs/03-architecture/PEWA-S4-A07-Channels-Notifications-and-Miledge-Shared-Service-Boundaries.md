# PEWA-S4-A07 — Channels, Notifications and Miledge Shared-Service Boundaries

**Status:** DRAFT — FOUNDER REVIEW; NOT APPROVED  
**Date:** 18 October 2026  
**Authority:** Closed Stage 3 (314 requirements, 41 approved policy directions); approved A01–A06.  
**Boundary:** Logical channels, events, integration contracts, failure containment and authority allocation. No WhatsApp adapter deployment, Meta provider selection, credentials, outbound messaging, cloud selection, FEF adoption or engineering implementation is authorised.

## 1. Architectural position

**PEWA is web-first, channel-independent product infrastructure.** Public business menus, QR/direct links, PEWA Home/Directory, optional structured ordering, protected customer order status, subscription/consumption and paid promotion must operate without WhatsApp. Business-controlled manual contact is available through an eligible configured route even when structured ordering is disabled or acceptance units have run out. A live standard subscription continues displaying and distributing its menu independently of unit balance.

WhatsApp may add a manual contact route and, only with subsequent separate approval, a structured conversational ordering capability. It is not the authoritative menu catalogue, business-order acceptance ledger or entitlement source. **PEWA must integrate only with the Miledge shared WhatsApp infrastructure/adapter if and when its actual service contract and deployment readiness are confirmed by the appropriate Miledge authority.** PEWA must not independently build a competing WhatsApp provider platform or assume shared infrastructure is ready.

## 2. Channel and capability matrix

| Customer/business capability | Direct web / QR | External manual contact | Optional push | Future shared WhatsApp adapter |
|---|---|---|---|---|
| Public menu browsing | **Primary, complete** | Merchant may share a web link | Not needed | May return authoritative web links or approved menu views |
| Home, favourites, organic Directory | **Primary, complete** | Not a replacement | Not needed | Not a replacement |
| Protected hotel menu | Web with governed audience eligibility | No automatic unrestricted forwarding | Not needed | Only if explicitly authorised protected flow |
| Manual engagement | Web exposes configured merchant contact route | Business handles conversation; no PEWA order unit | Not needed | Permitted as separate external contact/deep link where available |
| Structured order creation | Web-native, business-enabled, capacity-gated | No automatic PEWA acceptance | Not required | Future optional structured intake routed to same PEWA order truth |
| Merchant acceptance/decline/Ready | Authorised PEWA business workspace | External communications not automatically authoritative | Optional alerts | Must be authenticated/attributed to same PEWA business decision if separately built |
| Customer protected order status | **Primary, account-free capable** | Not relied upon | Consent-based supplemental notice | Outbound status disabled by default |
| Subscription, usage and campaigns | PEWA authoritative workspace | No authority | Not required | No independent consumption or commercial truth |

**Manual conversation is never a PEWA accepted order.** Channel integrations must not infer or mint one accepted-order unit from a chat message.

## 3. Event authority and messaging semantics

- Source-of-truth business/order events include **Submitted, Accepted, Declined, Expired, Withdrawn, amendment proposal/consent/outcome, cancellation requests/outcomes and business-declared Ready**, each with actor and context.
- PEWA maintains a protected web-visible record of relevant status events. A notification is a **projection or delivery attempt** from an existing authoritative event; its sending, arrival, read receipt or transport acknowledgment cannot alter order state or consume an order unit.
- Browser push, when available, is optional and requires platform/device permission and the customer's applicable opt-in. Notification previews may omit sensitive order/customer details on shared devices.
- Outbound WhatsApp status updates are **OFF by default**; future opt-in, opt-out, identity matching, template and jurisdictional messaging duties require separate business/customer consent and Miledge transport approval.
- Optional notification failures must be observable and retryable under bounded policy, without resubmitting the order, re-accepting, double-charging units or blocking the authoritative web status.

## 4. Shared WhatsApp contract requirements (not an assertion of readiness)

Any later adapter should be evaluated for:
1. **Portfolio authority:** Miledge-approved ownership, provider/channel policies, tenancy contract, service availability, security and commercial cost allocation.
2. **Stable PEWA boundary:** provider-specific messages, templates, identifiers and webhooks handled behind a PEWA integration interface; no direct provider coupling in core order/catalogue rules.
3. **Tenant and user correlation:** distinguish organisation, authorised business actor, actual customer order, contact channel and consent; phone-number matching alone cannot grant existing-order ownership.
4. **Structured conversation semantics:** category, list, button and modifier selections resolve to PEWA's governed catalogue and validated order snapshot; free-form AI interpretation cannot silently substitute for business-defined structured choices.
5. **Safe ingestion:** verified source, replay protection, idempotent event identity, message ordering and bounded duplicates/delays; no external message alone implies merchant acceptance.
6. **Consent and outbound controls:** opt-in and content minimisation for status messaging, customer revocation, template/regional restrictions and channel expense observability.
7. **Fallback and cancellation:** if WhatsApp fails, the web path remains authoritative and available; outstanding chat state cannot force unapproved acceptance or double charge.
8. **Portability:** adapter can be replaced/disabled without rewriting accepted order semantics, menu ownership or subscription/consumption truth.

This contract is a **requirements handover to Miledge**, not an authorisation to change its adapter, select Meta BSP services, provision phone numbers or send live messages.

## 5. Failure and protection scenarios

| Scenario | Expected behavior |
|---|---|
| Shared WhatsApp adapter not built, unavailable or disapproved | Public/direct web, Directory, structured web orders and manual configured contact still function |
| Customer denies push and has no PEWA account | Public browsing and guest-protected web order status remain functional |
| Repeated delivery callback for business acceptance alert | No duplicate acceptance or consumption; notifications remain derived |
| Incoming chat selection is malformed or outdated | Recheck current governed offering and context; request clarification or route to web, never fabricate availability/price |
| Chat user knows public order number but has no protected authorisation | No disclosure or cancellation of another person's order |
| Business's acceptance units exhausted during active subscription | Menu, organic discovery and manual contact remain; **new structured ordering unavailable**, including through chat |
| Business accepts via an authorised future chat interface | Same unique PEWA accepted transition and one consumption unit; channel does not create separate order ledger |
| Hotel restricted menu link forwarded outside permitted guest audience | Authoritative protected-access check denies unintended public browsing |
| Outbound WhatsApp consent absent | No automatic order-status WhatsApp message or silent fallback |
| WhatsApp delivery delayed/out of order | Customer web history still shows accurate authoritative sequence, not delivery-order guesses |

## 6. Integration and operational contracts

- **Observability:** attribute channel initiation, authoritative event correlation, delivery attempts/results, stale/duplicate messages and consent transitions without revealing guest tokens or excessive personal information.
- **Security:** verify ingress origin/signature as applicable; enforce tenant isolation, message replay limits, rate/abuse controls and minimal credential scope. No sensitive identifier in public logs/analytics.
- **Recovery:** customer can return to PEWA web with appropriately protected order access when optional channels fail; an unguarded URL must not confer sensitive order-change authority.
- **Commerce:** external business-to-PEWA subscription/top-up/promotional payment rail (to be separately selected) may send settlement confirmations; it does not determine restaurant meal payments or create accepted orders.
- **Media:** optional merchant images and public/protected delivery respect approved A05 controls. Businesses are responsible for image rights/content in their menus, with proportional PEWA infringement/takedown governance.

## 7. Miledge dependency and decision register

| Dependency | PEWA position | Owner / next evidence |
|---|---|---|
| Shared WhatsApp adapter | **Conditional integration only**, not assumed operational | Miledge shared platform authority; verified interface/security/readiness |
| WhatsApp provider/number, outbound templates | Not selected/authorised by PEWA | Miledge authorised provider/channel governance and future product consent |
| Media delivery guidance MV-206 | Evaluate options, maintain portable/public/protected boundaries | Miledge guidance + PEWA A08 fit assessment |
| Shared identity/hosting architecture | No automatic inheritance of unreviewed provider model | PEWA A08 with Miledge architecture authority where reserved |
| Legal/privacy terms for notifications | Future customer/business policy and jurisdiction-specific review | Founder product/commercial and competent legal/privacy authority |

## 8. Founder architectural decisions requested

**A07-FD1:** Confirm web/QR/PEWA Home/Directory and protected web order status as fully independent, authoritative customer channels, without WhatsApp/PWA/push dependency.

**A07-FD2:** Confirm notifications are derivatives of PEWA order/business events and cannot themselves create accepted orders, usage charges or truthful business Ready claims.

**A07-FD3:** Keep browser push opt-in and outbound WhatsApp status OFF unless separately authorised and consented, with privacy-safe fallback to protected web.

**A07-FD4:** Reserve PEWA WhatsApp integration to the **Miledge shared adapter** following verified portfolio approval and technical readiness; no direct PEWA provider selection or standalone WhatsApp backend.

**A07-FD5:** A future structured conversation must reuse the same menu/catalogue engine, customer snapshot, business acceptance and consumption authority as web; AI-assisted/free-form interpretation is a separately gated later capability, not a prerequisite.

**A07-FD6:** Accept the explicit failure/security/consent contract and allocate external integration costs, supported functions and evidence to later Miledge/PEWA decisions rather than presuming them now.

**Disposition:** Approve or amend A07-FD1–FD6. A08 will evaluate infrastructure and provider options only after approved architecture drivers and reserved Miledge dependencies are accounted for. **Stage 4 remains IN PROGRESS; Stages 5–6 NOT STARTED.**
