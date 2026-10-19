# PEWA-F03-PAP-001 — Miledge Authority and Constraint Traceability

**Source snapshot:** PEWA `main@197a4bd341a411783efeb8c0ee200e8e97ee8018`; Miledge canonical `origin/main@cf119f4e42959b40da66363729eef01d32512da7` (rechecked 16 October 2026). The PEWA F02 assessment originally inspected Miledge `6a34a99…`; this package checked current canonical main because it is newer.

The source citations below identify canonical Miledge repository paths under `docs/miledge-ventures-knowledge/`. Status is taken from each record at the stated source snapshot. MPA-002 is controlling architecture authority; individual draft sources do not become binding through their citation here.

| Authority | Status/version at snapshot | Supported constraint used here | Limit / affected proposals |
|---|---|---|---|
| PEWA F01, `docs/00-foundation/PEWA-F01-Problem-Opportunity-and-Platform-Thesis.md` §§2–11 | Founder approved 15 Oct 2026 | Food/beverage/meal scope; business as provider and content/fulfilment authority; persistent web access; optional channels; PEWA domain behavior; stated exclusions and unresolved items. | Product thesis, not technical architecture or market validation. Basis for PAP-01/04/06/08/10/12. |
| PEWA F02, `docs/00-foundation/PEWA-F02-COIF-001-Founder-Disposition-and-Closure.md`, FD-01–05 | Founder approved; F02 closed 16 Oct 2026 | Reuse remains a hypothesis; responsibility boundary provisional; MWA conditional; other shared-service candidates evidence-gated; prospective MPA assessment only. | Explicitly leaves canonical data authority, tenancy and layer positions unresolved. |
| PEWA Foundation Programme and Decision Register | Programme approved with controls. At the proposal baseline F03 had not yet begun; the Founder explicitly authorized it on 16 October 2026 and has since approved/closed it by the [F03 disposition](../../00-foundation/PEWA-F03-PAP-001-Founder-Disposition-and-Closure.md). F04 is next eligible and not started. Decision Register is discussion context, not Miledge authority. | F03 approval conditions; F04/F05 and later project-home boundary. | The supporting proposal is not itself the disposition; the linked Founder record controls. |
| MPA-002, `00-governance/MILEDGE-PLATFORM-ARCHITECTURE.md` | Approved v0.3; MPA Profile 0.1 | Nine layers; capability before product; reuse before duplication; configuration before customisation; truthful maturity; Miledge/project/FEF authority boundaries; Mode B principles. | Does not itself admit or realign PEWA or settle PEWA mappings. Basis for PAP-06–09/12 and the MPA fit review. |
| MPA-005, `00-governance/MPA-005-PROSPECTIVE-INFRASTRUCTURE-ALIGNMENT-STANDARD.md` | Approved v0.2 | Mode B applies left-to-right before authoritative Product Architecture; unapproved mappings remain proposed/unresolved; tests existing Domain/Platform extension first. | Procedure only: does not align, admit or classify PEWA; does not alter MPA Profile 0.1. |
| MTAIP-001, `00-governance/MTAIP-001-MILEDGE-TECHNICAL-ARCHITECTURE-AND-INFRASTRUCTURE-PRINCIPLES.md` | Approved active v1.0 | Architecture drives infrastructure choice; domain authority/provider identity separation; provider lock-in and portability assessed proportionately; no unnecessary abstraction or duplicate authoritative store; authentication distinct from product authorization. | Guidance, not PEWA provider selection or specific data/tenant architecture. Basis for PAP-02/03/05/11/12. |
| MV-303, `03-portfolio/MV-303-Infrastructure-Portfolio-Roadmap.md` | Approved v0.5 | Capability-before-product, reuse-before-duplication, configuration-before-customisation, infrastructure before implementation. Menu-as-a-Service appears as expected portfolio evolution. | Expected evolution is not proof an operating service exists, or PEWA classification/admission. Basis for PAP-06/07. |
| MV-206, `02-architecture/MV-206-Media-Storage-and-Delivery-Guidance.md` | Approved active v0.1; evaluation guidance, not provider mandate | Product authority for asset ownership/access; privacy for personal media; isolation, least privilege, portable IDs/keys; no speculative central service. | Asset guidance does not define all menu/order data policy or establish a shared media service. Basis for PAP-03/05/11/12. |
| MV-207, `02-architecture/MV-207-WhatsApp-and-Conversational-Access-Guidance.md`; MV-FD-002 | Approved active v0.1; Founder disposition recorded | WhatsApp is optional alongside QR/web; adapter direction is reusable; PEWA is a candidate consumer subject to product maturity/decisions; preserve product-owned truth and fallback/cost/security controls. | Approves direction and assessment/proof planning, not product implementation, hosted service or production launch. Basis for PAP-02/08–10. |
| MWA-001, `02-architecture/MWA-001-WhatsApp-Adapter-Technical-Contract.md` | Approved technical contract v0.1; not implementation authority | Versioned JSON contract boundary; adapter handles transport concerns while product owns domain decisions; no premature central runtime/service. | Contract does not prove operational deployment or PEWA readiness. Basis for PAP-08–10. |
| MWA-002, `02-architecture/MWA-002-Shared-Adapter-Contract-Foundation.md` | Accepted contract foundation v0.2; Founder review complete; no implementation authority | `mwa.v1` contracts/fixtures; product-versus-adapter boundary; behavior specifications and static contract validation are distinct from runtime evidence. | No hosted service; contract foundation and fixture validation do not prove behavior, production availability or integration. Basis for PAP-09/10. |
| MWA-003A, `02-architecture/MWA-003A-Reusable-WhatsApp-Adapter-Core-Engineering-Plan.md` | Approved engineering plan v0.2; explicitly not implementation authority | Defines intended bounded core, ports, test approach and remaining 003B scope; explicitly no Graph client in planned 003A. | Current repo contains implementation/test artifacts, but the plan is not implementation authorization and artifacts do not prove deployment or PEWA readiness. See maturity note below. |
| Draft Miledge records (e.g., MV-203 service catalogue, MV-200 domain architecture, MV-205 capability architecture where marked Draft for Founder Review) | Draft at current source snapshot | None treated as binding solely by inclusion in a source inventory. | Context only; cannot prove a service, mandate a layer or determine PEWA classification. |

## Nine-layer and Mode B test

MPA-002's chain is: **Need → Enduring Capability → Infrastructure Domain → Shared Platform → Shared Services → Capability Modules → Industry Implementation → Organisation Configuration → End-User Experience.** For this F03 proposal, the chain is a completeness/terminology lens, not a set of allocations:

| Layer | F03 treatment |
|---|---|
| Need | F01 organisational and customer needs are approved PEWA thesis. |
| Enduring Capability | Sector-neutral structured-offerings reuse remains F02 working hypothesis; no Miledge disposition requested here. |
| Infrastructure Domain | Unresolved; no Domain is proposed as approved. |
| Shared Platform | Unresolved; PEWA/product identity must not be equated with this Miledge layer. |
| Shared Services | Reuse only when actual owner, scope, contract, maturity and availability are evidenced; MWA is conditional. |
| Capability Modules | No module decomposition or allocation in this package. |
| Industry Implementation | Food-service is the approved initial reference scope, not a Miledge implementation classification. |
| Organisation Configuration | Configuration-before-customisation is a constraint; no configuration model is designed. |
| End-User Experience | F01 high-level access destinations remain thesis; no user journeys, screens or UX decisions. |

Mode B supports examining the chain prospectively before Product Architecture. It does not authorize any of the classifications above. The proposed constraints here are PEWA-specific candidates within Miledge principles, pending Founder and any applicable Miledge authority.

## Current MWA evidence boundary

At Miledge `cf119f4…`, `contracts/mwa/v1/`, `adapters/mwa-python/`, tests and CI workflows exist, and the history includes recent adapter code/test changes. The approved documents still characterize MWA-001 as contract only, MWA-002 as contract foundation only, and MWA-003A as a plan without implementation authority; MWA-003A also states that the package has no Graph client and that MWA-003B owns real provider transport and other deferred behavior. The current source checkout has no evidence in these approved records of an authorized PEWA integration, a deployed hosted service, operational support commitment or live-provider readiness. Therefore PAP-09/10 require current dependency evidence before adoption; they do not assert that no code exists.

## Trace to proposals

| Proposal group | Principles |
|---|---|
| Business authority, identity and isolation | PAP-01–03 |
| Data authority and lifecycle | PAP-04–05 |
| Reuse and scope | PAP-06–07 |
| Integration and resilience | PAP-08–10 |
| Portability, security and operations | PAP-11–12 |
