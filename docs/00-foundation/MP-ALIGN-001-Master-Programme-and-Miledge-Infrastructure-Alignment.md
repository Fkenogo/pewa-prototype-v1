# PEWA-MP-ALIGN-001 — Master Programme and Miledge Infrastructure Alignment

**Status:** Founder disposition recorded under PEWA-MP-ALIGN-001-CLOSE, 16 October 2026. The report records approved programme controls and a bounded future F02 scope; it does not create a Miledge admission, capability/domain/platform position, product design, or implementation approval.

**PEWA baseline inspected:** `main@453ed60336a63482b54449b12b97d7d989f0ef11`
**Miledge canonical main inspected:** `Fkenogo/miledge-ventures@6a34a99e80c64d25b72dfb53a501f043bf74d210`
**FEF canonical main inspected:** `Fkenogo/founder-engineering-framework@c7f297abac10e4ec461c23fd7f4b5d3195ff60ed`

## 1. Authority inventory

| Source | Status and authority | Relevance to this assessment |
|---|---|---|
| PEWA [`FOUNDATION-PROGRAMME.md`](FOUNDATION-PROGRAMME.md) | Approved working programme dated 14 October 2026; project-level stage register linked from PEWA README. | Current PEWA F01–F05 sequence and gate record. No separate PEWA file titled “Master Programme” was found; this is the programme control document. |
| PEWA [`PEWA-F01-Problem-Opportunity-and-Platform-Thesis.md`](PEWA-F01-Problem-Opportunity-and-Platform-Thesis.md) | Founder approved 15 October 2026; F01 closed. | Binding PEWA scope and existing direction, including multi-tenant menu publishing and ordering, business content responsibility, intended shared WhatsApp adapter, and open shared-capability questions. |
| PEWA [`DECISION-REGISTER.md`](../decisions/DECISION-REGISTER.md) | Discussion-level PEWA directions; explicitly does not claim Miledge portfolio-wide authority. | Context only. PEWA local references do not substitute for Miledge decisions. |
| PEWA-F02-R01 assessment/evaluation and approved v0.1 baseline | Completed research and Founder-approved evidence-preparation/practical-reference outputs. | Supporting evidence for F02. They do not establish Miledge capability ownership, admission, domain or platform authority and do not close F02. |
| Miledge `MV-003 — Master Programme` | Current canonical main contains version 0.8 marked **Draft for Founder Review**. | Useful Miledge programme context, but not treated here as an approved current Miledge programme mandate. |
| Miledge `MV-000`, `MV-101`, `MV-201`, `MV-203`, `MV-205` | Present in current canonical main; each is marked **Draft for Founder Review**. | Their architectural descriptions and service list are candidate guidance, not independently approved requirements. |
| Miledge `MPA-002 — Miledge Platform Architecture` | Approved v0.3, MPA Profile 0.1, in current canonical main. | Governs portfolio-level architecture, capability-first analysis, authority boundaries and the Miledge/project/FEF separation. |
| Miledge `MPA-005 — Prospective Infrastructure Alignment Standard` | Approved v0.2 in current canonical main. | Its Mode B procedure is relevant to early-stage alignment. It explicitly does not itself align, admit, classify or reclassify a project, and approval of the standard did not authorize project rollout. |
| Miledge `MV-303 — Infrastructure Portfolio Roadmap` | Approved v0.5 in current canonical main. | Supports capability before product, platform before implementation, shared services before duplication, configuration before customisation, and Miledge/project/FEF separation. It lists Menu-as-a-Service as an expected portfolio evolution, not as proof of an operating platform or project admission. |
| Miledge `MTAIP-001 — Miledge Technical Architecture & Infrastructure Principles` | Approved and active v1.0 in current canonical main. | Architecture should drive provider choices; no provider becomes architecture by precedent; portability boundaries should be proportionate to risk. It is not a provider selection for PEWA. |
| Miledge `MV-206 — Media Storage & Delivery Guidance` | Approved and active v0.1 in current canonical main; preferred evaluation guidance, explicitly not a provider mandate. | Media ownership, isolation and portability considerations may inform later fit assessment. It does not create a shared service, require adoption, select a provider for PEWA, or authorize implementation. |
| FEF `FEF-ADOPTION-GUIDE.md` | Approved and active v1.0 in current canonical main. | Establishes proportionate adoption, Founder review of actions, project repository authority and a future FEF alignment/closure process. It does not authorize engineering or replace PEWA programme authority. |

The current Miledge main contains both approved MPA-002/MPA-005 and draft supporting Miledge documents. This report preserves those individual statuses rather than treating every referenced document as approved. No provider, service availability, shared-service owner, or integration contract is asserted without evidence.

## 2. Programme gap assessment

| Question | Finding | Disposition |
|---|---|---|
| Is the PEWA programme current and authoritative? | The PEWA project identifies its working Foundation Programme as the F01–F05 programme. F01 and the programme agree that F01 is approved and F02 is next. The repository does not have a separate PEWA document titled “Master Programme.” | Retain `FOUNDATION-PROGRAMME.md` as the project programme control. Avoid describing Miledge `MV-003` as PEWA’s programme. |
| Do F01–F05 retain their intended scope? | The stages and sequence remain useful, but the table gives only brief outputs. F04 “Engine Capability Definition” and F05 “Product Configuration & Experience Strategy” can be read as detailed product or engineering design. F02–F05 are not explicitly bounded as Miledge-level foundation/alignment. | Retain stage names and sequence; add stage-level objectives, outputs and explicit scope boundaries. |
| Is F02-R01 correctly treated as research? | The programme does not mention the completed R01 package. F02 remains pending, but the programme does not expressly say research and the approved classification reference are supporting evidence rather than stage completion or a Miledge position. | State this explicitly; preserve the approved R01 evidence and baseline unchanged. |
| Are review and closure gates clear? | The programme says each stage needs Founder review before authority, but does not require a recorded disposition or define stage closure, return/defer outcomes, or an approval record. | Require a recorded Founder disposition for every stage before proceeding or marking it closed. |
| Are scope and sequencing controlled? | F01–F05 order is stated, but changes to stage scope or order have no explicit Founder authorization rule. | Add explicit Founder authorization for changes to scope or sequence. |
| Is project-home execution distinct from Miledge alignment? | The current programme prohibits implementation and some detailed design, but does not define a later project-home handover or FEF readiness gate. | Define a future transition after F05 closure, with approved Miledge baseline, unresolved-item handover, project authority and FEF readiness review before FEF-governed project work. This is not authorization to begin that work. |
| Are navigation labels accurate? | Root and documentation READMEs labelled the Founder-approved F01 document as a draft. | Corrected both labels in this proposal. |

## 3. Miledge infrastructure fit

The following is a candidate fit assessment, not an authorised MPA position. “Candidate” does not mean an existing or provisioned shared capability.

| Capability or boundary | PEWA evidence / candidate fit | Miledge alignment and status | Open evidence or decision |
|---|---|---|---|
| Menu publishing and durable menu access | F01 identifies reusable, multi-tenant publishing and persistent business-menu access. | Candidate PEWA-owned domain capability and reusable platform hypothesis. Approved MV-303 lists Menu-as-a-Service as an expected portfolio evolution; it does not prove an active shared platform or PEWA admission. | Demonstrate recurring need and reuse beyond the first food-service implementation; Founder/Miledge decision on capability and portfolio position remains open. |
| Ordering and customer interaction | F01 separates menu access/manual engagement from enabled digital ordering and assigns menu/order business logic to PEWA. | Candidate PEWA-owned domain rules, with channel transport potentially shared. Do not expand into general commerce, POS, restaurant management or logistics, which F01 excludes. | Establish which responsibilities are enduring/reusable and which belong to food-service implementations; detailed journey design is later project-home work. |
| WhatsApp connectivity | F01 records intended use of Miledge shared WhatsApp infrastructure and no parallel PEWA provider stack. | Strongest stated shared-infrastructure dependency; transport/provider concerns are intended to be shared while PEWA retains domain logic. | Verify service owner, current availability, supported interactions, contract, operating state and dependency path. F01 is an intent, not proof the service is ready for PEWA. |
| Identity, organisation/tenant, authentication and authorization | F01 explicitly leaves shared-vs-PEWA ownership open; “multi-tenant” is a product thesis, not a tenancy model. | MV-203 lists identity/authentication as shared-service candidates but is Draft for Founder Review. | Verify whether services exist, authority and access boundaries, tenant isolation, data ownership and project-specific obligations. Do not adopt a shared service by name alone. |
| Search, discovery, notifications, trust, audit, analytics, documents and integrations | F01 includes discovery/search and identifies analytics among open shared-vs-owned questions. | MV-203 lists these as shared-service candidates, but its draft status means neither availability nor mandatory use is established. | Establish which are needed for F02’s capability fit, which are portfolio services, and whether there is a real service, owner, interface and support commitment. |
| Media | Business-supplied menu content and images are within F01’s publishing context; no PEWA media implementation is approved. | Approved MV-206 is a preferred evaluation guide with product ownership and isolation principles; it does not require a shared media service or provider. | Later assess asset authority, privacy, retention, isolation and delivery needs. No provider choice in F02. |
| Payments, subscriptions and analytics | F01 records commercial direction and unresolved payment/subscription questions. | No ownership or shared-service decision is made by the sources reviewed. | Keep commercial transaction responsibilities and platform services as open cross-project dependencies; do not infer a shared payments capability. |
| Food-service domain content and operations | F01 places food, beverages and meal-related offerings in scope and leaves content, availability and fulfilment with each business. | Food-service and hotel contexts are candidate industry implementations/configurations over reusable capability; business content and fulfilment stay business-responsible. | The breadth of reusable capability across restaurants, cafés, bakeries, hotels and future institutional contexts remains a hypothesis, not validated cross-industry reuse. |

### Infrastructure guardrails and evidence limits

- **Confirmed at Miledge level:** Approved MPA-002/MPA-005 call for prospective alignment before Product Architecture becomes authoritative; approved MV-303 places capabilities before product/implementation and separates Miledge, project and FEF authority; active MTAIP-001 says architecture drives infrastructure/provider choice and requires proportionate portability boundaries. These sources do not decide PEWA’s capability ownership or provider.
- **Tenant and data ownership:** F01 states multi-tenant intent and business responsibility for menu content/service. It does not settle tenant model, technical isolation, legal data ownership, account/identity authority, retention or export. MV-206’s asset-specific guidance cannot be generalized to all PEWA data.
- **Shared service status:** MV-203 is a draft candidate catalogue. The assessed materials do not prove that its listed services are provisioned, production-ready, owned for PEWA, or governed by usable service contracts.
- **Provider neutrality:** MTAIP-001 is active, but provider neutrality is not a requirement to abstract everything. Evaluate real migration/control/security/cost/continuity risk before selecting or adding provider seams. No provider selection is warranted in this task.
- **Miledge alignment mode:** PEWA is early-stage and has no authoritative Product Architecture, so MPA-005 Mode B is the applicable prospective procedure if Founder authorizes a formal project alignment. This report is a preliminary programme and fit assessment only; it does not create an MPA admission disposition or authorised nine-layer position.

## 4. Minimum programme corrections proposed

The accompanying change to [`FOUNDATION-PROGRAMME.md`](FOUNDATION-PROGRAMME.md) keeps F01–F05 names, sequence and approved history. It:

1. states each stage objective and expected output;
2. bounds F02–F05 as Miledge-level foundation/alignment, excluding detailed product design and engineering;
3. requires a recorded Founder disposition for stage completion and Founder authorization for scope/sequence changes;
4. says PEWA-F02-R01 and the approved classification baseline are supporting evidence, not F02 completion or a Miledge position; and
5. defines a later, separately approved PEWA project-home transition and FEF readiness gate.

The two README labels are corrected to reflect the already-approved F01 status. No F01 content, R01 research or classification entry was changed.

## 5. Recommended next F02 activity

Proceed with a **Capability Ownership and Shared Infrastructure Fit Assessment** as a bounded Miledge-level F02 output. It should:

- identify candidate capabilities and distinguish PEWA-owned domain responsibility from genuinely cross-project Miledge service concerns;
- assess reusable capability versus food-service-specific implementation boundaries and material dependencies across Miledge projects;
- verify named service ownership, operational status, contracts and known constraints before calling anything “shared” or “available”;
- use the MPA-002/MPA-005 prospective sequence with every relationship marked as proposed, evidenced, unresolved or not applicable; and
- surface required Founder/Miledge decisions without declaring an admission, domain, platform, provider or architecture outcome.

Exclude menu configuration workflows, ordering journeys, detailed role matrices, schemas, APIs, UI, implementation architecture, classification research expansion, and FEF engineering. F02 should end with a traceable decision package and explicit Founder disposition, not project-level designs.

### Later PEWA project-home transition gate

After F02–F05 are completed and dispositioned, obtain a separate Founder disposition to transition to the PEWA project home. The handover should identify the approved Miledge position, product decisions intentionally left to PEWA, unresolved dependencies, project authority and authorized scope. The later project-home sequence is: establish a Product Governance Foundation/Constitution; complete Product Definition; develop and disposition requirements; then apply the active FEF Adoption Guide proportionately and record readiness before FEF-governed engineering. FEF adoption does not choose product architecture or authorize implementation. Engineering still requires its own explicit authorization. These activities are future work and are not part of this alignment closure.

## Founder disposition recorded

On 16 October 2026, the Founder confirmed:

1. **Approved** the F01–F05 programme-control corrections.
2. **Approved** F02 as a Miledge-level capability ownership and shared infrastructure assessment.
3. **Authorized** MPA-005 Mode B prospective alignment assessment for PEWA. This authorization does not approve admission, classification, architecture or implementation.
4. **Approved** a separate project-home transition gate, including subsequent Product Definition, Product Governance Foundation/Constitution, requirements development and FEF adoption.
5. **Preserved** the existing F01 and F02-R01 approvals.

No F02 assessment work is initiated by this closure. The recommended next activity remains the bounded Capability Ownership and Shared Infrastructure Fit Assessment described above.
