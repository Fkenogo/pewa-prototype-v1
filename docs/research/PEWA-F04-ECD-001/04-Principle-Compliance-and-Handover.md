# F03 Principle Compliance, Unresolved Decisions and F05 Handover

## F03 condition compliance

This assessment treats the approved F03 disposition as controlling. It translates its conditions into capability-level boundaries and makes no F03 amendment.

| F03 condition | F04 treatment | Status |
|---|---|---|
| FD-01: Business authority over offering meaning, content, prices, availability and business decisions; PEWA responsibility for truthful behavior; canonical technical authority unresolved. | The responsibility matrix separates business authority from PEWA product behavior and explicitly leaves menu/order canonical technical authority and writers unresolved. Food-service domain meaning stays with PEWA as product logic (PAP-08); business authority is not extended to cancellations, corrections or amendments, which F01 leaves for later definition. | Compliant; no persistence or writer decision made. |
| FD-02: Secure organization isolation, least privilege and product-domain authorization; public business-authorized offerings may be discoverable; tenancy mechanism deferred. | H assigns these as product responsibilities. Public discovery is conditioned on business-authorized publication. No tenant model, identity service or role matrix is selected. | Compliant at capability level. |
| FD-03: Reuse remains a hypothesis; food, beverage and meal-related initial scope; no Miledge capability/domain/platform decision. | Reuse is tested as a hypothesis; initial scope and exclusions are preserved. No Miledge layer or admission decision is claimed. | Compliant. |
| FD-04: WhatsApp conditional; web independent; no integration authorization. | WhatsApp remains optional and readiness-gated; web remains independent. No integration is proposed. | Compliant. |
| FD-05: Architecture-driven infrastructure and proportionate provider neutrality; no selection/design/deployment authority. | No provider, hosting, database, deployment topology or infrastructure design is selected. | Compliant. |
| FD-06: Privacy, lifecycle/export/correction/deletion/retention, auditability, failure isolation, recovery and operational responsibility remain mandatory later topics. | F04 identifies responsible boundary and carries these subjects forward without choosing periods, targets, designs or owners. | Compliant; detailed policies are unresolved. |

## PAP-01–PAP-12 crosswalk

| Principle | Capability-level application | Constraint preserved |
|---|---|---|
| PAP-01 — Organisation is the primary business boundary | Business supplies the business facts and decisions; PEWA owns the correctness of behavior it performs. | No PEWA assumption of merchant or fulfillment authority. |
| PAP-02 — Authorize by domain authority, not identity alone | Product access rules and authorization remain PEWA obligations. | No phone number or channel establishes identity by itself. |
| PAP-03 — Isolate organisations securely; defer the tenancy mechanism | Protect organization data while supporting deliberately published public offerings. | No tenancy mechanism chosen. |
| PAP-04 — Separate business information authority from product record responsibility | Distinguish business authority from product record integrity and truthful presentation. | Menu/order canonical technical authority remains open. |
| PAP-05 — Make data lifecycle explicit before persistence decisions | Identify data responsibilities and carry lifecycle obligations forward. | No retention, export, deletion policy, storage choice or data model. |
| PAP-06 — Keep reusable structured offerings separate from food-service rules | Assess recurring needs and existing Miledge capability/service boundaries before any later allocation. | No Miledge Enduring Capability or architecture position declared. |
| PAP-07 — Prefer configuration before bespoke variation | Keep organization variation bounded at capability level. | No configuration model or customisation mechanism designed. |
| PAP-08 — Products own domain meaning; shared services own only their approved boundary | PEWA retains domain outcomes, including food-service menu, service-mode and ordering semantics, independent of transport events; food-service specialisation is internal to PEWA. | No channel-specific flow or adapter integration. |
| PAP-09 — Integrate through versioned, verified contracts | Shared dependencies require current evidence and separate authority. | MWA is conditional; artifacts do not establish PEWA readiness. |
| PAP-10 — Shared channels are optional and failure-contained | Product access cannot depend on optional messaging infrastructure. | No fallback design or SLO specified. |
| PAP-11 — Let approved requirements drive infrastructure; preserve proportionate portability | State product responsibilities before evaluating infrastructure. | No provider or deployment selected and no blanket abstraction requirement. |
| PAP-12 — Protect data and operate with accountable evidence | PEWA responsibility includes access, integrity and accurate outcome claims. | No production-readiness or operational claim. |

The principle labels above follow the approved F03 proposal and disposition. The controlling F03 disposition is the authority for the six conditions.

## Unresolved decisions and stage allocation

| Decision | Current boundary | Evidence or authority required | Allocation |
|---|---|---|---|
| Canonical technical authority for menu and order records; write and publish responsibility | Business authority and PEWA record integrity are distinct. | Founder decision based on data ownership, access, correction and lifecycle needs; Miledge decision if a portfolio layer/shared capability is implicated. | F04 records boundary; later Product Architecture resolves technical state authority. |
| Organization/tenant model and protected/public access | Isolation and authorization are required; public publication is deliberate. | Access requirements, risk/privacy review and evidence for any shared identity/tenant capability. | F04 identifies; later Product Architecture selects enforcement; Miledge authority for shared-service/layer assignment. |
| Privacy and data lifecycle | Privacy, correction, deletion, export, retention, audit and portability remain required topics. The six data classes and PEWA's proposed responsibility for each are inventoried in the Responsibility document; lifecycle and privacy decisions per class stay open. | Applicable obligations, product requirements, business agreements and service commitments. | F04 identifies data classes/responsibility; later governance and Product Architecture determine policy and design. |
| Order exceptions, cancellation, amendment, payment and acceptance safeguards | Submission is distinct from acceptance; readiness is business-declared. Customer-initiated and business-initiated cancellation, correction and amendment authority is unallocated. | Product/commercial requirements, business authority and applicable legal/payment evidence. | Later product requirements and Product Architecture; no order-state machine or exception workflow in F04. |
| Reporting, moderation and consumer protection | PEWA holds high-level platform accountability for handling reports of misleading or problematic content and applicable consumer-protection obligations; the business remains responsible for the accuracy of its content. | Jurisdiction-specific legal review, governance policy and product requirements. | Later requirements and governance define reporting, moderation, enforcement and appeals; no process in F04. |
| Subscription entitlement and billing | Ordering requires product entitlement and business enablement; PEWA accountable for entitlement meaning at capability level. | Commercial strategy, billing/payment evidence and any shared-service evidence. | Later product requirements and Product Architecture; no plans, tiers, pricing or provider in F04. |
| Food-service reuse extent | Initial scope preserved; cross-sector reuse unvalidated. | Recurring need and stable shared semantics across implementations. | Future portfolio/Founder decision; expansion beyond F01 requires explicit authority. |
| Organization configuration limits | Bounded variation only. | Approved strategy and evidence on actual variation. | F05 sets high-level configuration direction; later product requirements specify behavior. |
| MWA readiness and other shared-service dependencies | WhatsApp optional/conditional; all other candidates evidence-gated. | Owner, scope, versioned contract, conformance, deployment/availability, support, security/privacy terms, cost, access and PEWA readiness. | Miledge for shared-service status; PEWA later Product Architecture for dependency choice; no integration now. |
| Operational recovery and support responsibility | PEWA product behavior must be accountable; no target or service level is set. | Product criticality, owner, dependency commitments and evidence. | Later Product Architecture and operations; Miledge authority for shared-service commitments. |

## Founder disposition and F05 handover

F04 asks the Founder to disposition the capability boundary, responsibility split and conditions for closing the stage. If approved or approved with conditions, carry these constraints to F05:

- Keep configuration strategy at a high level and preserve business-owned facts and decisions.
- Keep food-service as the initial context; any sector expansion is a separately evidenced hypothesis and authority decision.
- Maintain the distinction between persistent web access and optional messaging.
- Do not resolve canonical technical data authority, tenancy mechanism, provider choices or service adoption through F05 unless the Foundation Programme and required authority explicitly permit it.
- Carry forward the open data-lifecycle, privacy, security, recovery, operations and shared-service evidence requirements.
- F05 remains configuration and experience strategy only; it must not define detailed workflows, role matrices, screens, APIs, schemas, implementation components or engineering.

F04 does not authorize F05 by itself. The Foundation Programme requires a recorded Founder disposition before stage closure and transition.
