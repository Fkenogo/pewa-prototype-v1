# PEWA-S4-A04 — Identity, Tenant Isolation, Security and Privacy Architecture

**Status:** DRAFT — FOUNDER REVIEW; NOT APPROVED  
**Date:** 18 October 2026  
**Authority:** Closed Stage 3 requirements (314 IDs), approved COM/ORD/BMP/CPN/POP policy directions, approved A01/A02/A03.  
**Boundary:** Logical trust, identity and authorisation model, threat analysis and provider-evaluation criteria. Does **not** select an identity provider, authentication protocol implementation, storage technology, hosting, legal retention periods or deploy any controls.

## 1. Foundational security propositions

1. PEWA has distinguishable **business staff**, **organisation administrators**, **optional identified customers**, **account-free customer guests**, **authorised hotel guests**, and **scoped PEWA operators**. Their credentials, roles, claims and audience qualifications must not be conflated.
2. Authentication answers *who or what is presenting a credential*. **Authorisation** independently evaluates organisation membership, role, permitted brand/venue/service context, object ownership, restricted-menu audience and specific sensitive action at the moment of use.
3. Public menus/organic discovery/manual contact are account-free. Guest order-status access is protected without making registration, WhatsApp, push or PWA installation mandatory.
4. Business-authored declarations and accepted-order actions require attributable business authority. PEWA operators cannot implicitly accept/Ready/cancel merchant orders; exceptional platform support actions are distinct and audited.
5. Subscription is separate from available acceptance units: **exhausted units prevent new structured ordering only**. During an active subscription, published menus, organic discovery and manual contact persist. Security design must not disguise depletion as unpublication.

## 2. Actor, resource and permission matrix

| Actor | Public menus / Directory | Business draft and publish | Order reads and decisions | Commercial / paid campaigns | Restricted hotel menu | Operator powers |
|---|---|---|---|---|---|---|
| Unregistered visitor | Public eligible content | None | Only protected access proven for their own order | No business spend | Only with context-approved guest eligibility | None |
| Optional identified customer | Public eligible content | None | Own legitimately linked orders; stronger proof for consequential actions | Customer consent only | Eligibility as actually granted, not by account alone | None |
| Hotel-authorised guest | Public eligible content | None | Their own authorised order status/actions | None | Context-, audience- and time-limited access | None |
| Business staff / menu editor | Public eligible content | Scoped draft edits | Scoped operational view; only delegated specific decisions | No implicit spending permission | Business-facing management only if authorised | None |
| Business publisher / order manager | Public eligible content | Scoped publication actions | Explicitly delegated acceptance/decline/Ready/cancellation | None by default | Scoped publish and audience configuration | None |
| Organisation commercial administrator | Public eligible content | Only if separately granted | No universal order/customer read | Organisation subscription/top-ups/campaign spending per grant | No automatic guest-private access | None |
| PEWA support/integrity operator | Public eligible content | Restriction/case disposition, no silent seller rewrite | Minimum evidence for authorised case; no merchant decision rights | Bounded billing/exposure correction as explicitly granted | Sensitive guest data only via case-scoped escalation | Attributable least-privilege powers |
| PEWA privileged administrator | Public eligible content | Controlled administrative powers | No ordinary blanket access by title alone | Controlled policy/roles, monitored exceptional elevation | Exceptional auditable necessity only | Privilege separation and independent review |

**Permissions are additive only when the actor holds the necessary separate grants.** This matrix proposes logical roles, not prescriptive UI role names or a claim that all business staff require distinct login methods. Cross-organisation memberships need deliberate context selection and cannot implicitly union unrelated rights.

## 3. Protected guest and account-free order access

**Restricted menu admission:** hotel/business governs the permitted context and eligibility; an unguessable bare URL is not by itself proof of unlimited audience entitlement. Require bounded contextual grant, ability to revoke and renewed evaluation for protected reads. Do not expose room numbers, guest names, link tokens or protected offerings in public search/caches, analytics or ordinary logs.

**Order submission:** an account-free customer may submit through an eligible published menu; PEWA issues a protected return path separate from a human-readable order reference. Possession-only read access may be acceptable for limited data if the credential is adequately protected; consequential actions (withdrawal, material amendment, cancellation request, sensitive contact changes) require proportionately stronger verification.

**Optional customer account:** enrolling or signing in must not automatically import another person's historical order merely because a phone number, display name or device superficially matches. Explicit account linking requires appropriate historical-order ownership evidence.

**Recovery:** lost access must have a safe bounded recovery/escalation path, preventing enumeration and social-engineering takeover. Detailed proof methods, expiry and support rights require further product/privacy consideration before implementation.

**Manual engagement:** ordinary public contact actions never produce a PEWA order object, consumer account requirement or an accepted-order unit charge.

## 4. Tenant and resource boundary rules

- An authenticated business member acts within an explicitly selected eligible organisation and legitimate subordinate brand/venue/menu; switching context cannot retain incompatible cached authorisation.
- Enforce nonpublic data access at authoritative server/domain boundaries, not merely frontend route visibility.
- Publication authority, commercial-spending authority, account/role delegation, order-decision authority and sensitive customer-data access remain separable capabilities.
- Externally supplied IDs, route parameters and embedded tenant claims are insufficient without fresh object- and relationship-level checks.
- Public projections contain only deliberately public and currently eligible menu material; restricted hotel menus are excluded from public search, promotional campaigns, unprotected feeds, crawler metadata and CDN public caches.
- Revocation, organisation suspension, staff departure, eligibility change and protected-menu withdrawal must have documented propagation and stale-credential behavior. Sensitive access should fail closed where authority is unknown.

## 5. Priority threat model

| Threat | Required control property | Verification example |
|---|---|---|
| Cross-organisation ID enumeration | Server-side owner/context checks, denial-by-default and nonleaky errors | Staff at Org A cannot read Org B orders by guessing ID |
| Guessed order reference | Separate protected credential/ownership proof and rate-limited entry | Knowing display order number is insufficient for status or cancel |
| Shared hotel link persists indefinitely | Restricted contextual grant, revocation and bounded expiry | Former guest loses restricted access while public dining menu remains accessible |
| Privilege escalation via membership changes | Distinct permission grants, self-approval controls, revocation/audit | Menu editor cannot self-assign campaign purchasing or publisher rights |
| Accepted-order forgery or replay | Attributed authenticated business decision, idempotent transaction semantics | Replaying accept doesn't create another acceptance/unit |
| Stale public search / CDN leak | Audience classification, cache isolation and fail-closed authoritative eligibility | Protected publication never appears in public Home/Directory |
| Token leakage in URLs, logs or analytics | Minimal sensitive metadata, disciplined token transport/log sanitisation | Internal support logs do not expose reusable guest access proof |
| Phishing/social-engineering recovery | Controlled evidence, rate limits, operator review and step-up | Matching order name alone cannot transfer ownership |
| Operator overreach | Scoped reasons, case-based elevation, independent audit and review | Ad-review staff cannot inspect hotel guest contact records |
| Consent or notification creep | Separate marketing, push, preferences and operational communications | Opting into push does not enable promotional outreach |
| Retention and data-subject risk | Classified purpose, legal review, deletion/correction strategy with immutable limited lawful evidence | Preference removal does not falsify acceptance accounting history |
| Denial-of-service & brute force | Throttling/abuse defenses for protected reads, recovery and order submit | Automated probing cannot reveal valid private identifiers |

Threat coverage is provisional; formal abuse-case testing and security/privacy review are required before live handling of protected personal data.

## 6. Identity and credential architecture alternatives

**Option 1 — Managed identity behind PEWA-owned authorisation adapter:** provider handles credential verification/recovery where appropriate; PEWA owns tenant graph, business grants, order ownership and guest audience policy. *Preferred evaluation direction* for business/operator/optional customer identities, provided costs, recovery, region, portability and admin safeguards meet requirements.

**Option 2 — PEWA-managed credential service:** broad direct control but significant password/secret, recovery, abuse, support and compliance burden. Not preferred without compelling constraint.

**Option 3 — External identities with delegated application authorisation:** may work if identities are interoperable, but dangerous if provider roles or external tenant model become authoritative for PEWA subscription, organisation grants or protected menus.

**Guest protected order access is a separate capability, not an assumed identity-provider login flow.** The choice of an identity provider cannot supersede product-approved guest-first requirements.

No provider is selected. Evaluate cost at PEWA's standard-subscription economics, regional availability, MFA/admin recovery, business invitations, revocation, auditability, account-linking proof, privacy/export, rate limiting and portability before selection.

## 7. Data privacy/security architecture requirements

- **Data classes:** public business content; restricted business/hotel content; customer contact and orders; customer local or linked favourites; subscription/commercial evidence; campaign aggregates; authentication/recovery credentials; access logs/operator case notes.
- **Purpose limitation:** a business gets only relevant order/contact information and aggregate own-campaign exposure, not identifiable cross-business search or favourite histories.
- **Consent:** marketing, optional push, location and optional account sync are independent; declining any optional consent must not block public browsing or eligible structured order access.
- **Protection:** encryption, secrets handling, least-privilege service credentials, scoped audit access and breach readiness require later concrete design and threat evaluation.
- **Lawful duration:** retention, deletion/portability, legal bases, minors and cross-border duties are *unresolved by architecture* and require competent jurisdiction-specific legal/privacy review before live processing. A02 event/audit history is not blanket permission to retain personal data forever.

## 8. Founder architectural decisions requested

**A04-FD1:** Confirm PEWA's authentication and authorisation separation, and PEWA-owned tenant/permission truth.

**A04-FD2:** Confirm guest protected-menu and order access are account-free, contextual, revocable and action-sensitive.

**A04-FD3:** Confirm publication, order actions, staff delegation, commercial spending and operator-case authority are separately scoped capabilities.

**A04-FD4:** Adopt the listed security/privacy threat properties as architectural review obligations, including public-projection fail-closed behavior.

**A04-FD5:** Approve managed identity **behind a PEWA-owned authorisation adapter as the leading evaluation option**, without choosing any provider or granting identity providers control over tenants/orders/consumption.

**A04-FD6:** Require later competent product/legal/privacy review for identity recovery proof, regulated data treatment, precise retention, incident windows and country-specific privacy obligations.

## 9. Handover

A05 applies the public/protected visibility and multilingual data constraints to discovery/media. A06 details acceptance/consumption integrity and promotion accounting. A07 resolves optional-channel boundary, subject to Miledge shared-service authority. A08 evaluates hosting, operational controls, recovery and provider fit against these properties, with no automatic deployment or FEF/engineering authorisation.

**Disposition:** Founder to approve, reject or amend A04-FD1–FD6. **Stage 4 remains IN PROGRESS; Stages 5–6 NOT STARTED.**
