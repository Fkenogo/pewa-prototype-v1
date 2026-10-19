# PEWA-F02-COIF-001 — Authority and Evidence Baseline

**Purpose:** source index and status key for the prospective capability ownership and shared infrastructure fit assessment. **Disposition:** research recommendation only; no MPA layer or project position is authorised here.

## Repository snapshots

- PEWA main: `f6f0004887bf7d722e57abc33dff0e180737288e` (the branch baseline used for this assessment).
- Miledge Ventures main: `6a34a99e80c64d25b72dfb53a501f043bf74d210`.
- FEF main: `c7f297abac10e4ec461c23fd7f4b5d3195ff60ed`.

Repository evidence describes committed records at these snapshots. It does not establish service deployment, availability, operational ownership, external account readiness, or successful live integration.

## Authority inventory

| Source | Version/status at inspected snapshot | Use and limit |
|---|---|---|
| PEWA `docs/00-foundation/FOUNDATION-PROGRAMME.md` | Founder-approved programme controls; F01 closed, F02 pending | F02 output is an assessed capability/infrastructure position and open-decision record. Stage closure requires a separate Founder disposition. |
| PEWA `docs/00-foundation/PEWA-F01-Problem-Opportunity-and-Platform-Thesis.md` | Founder-approved F01, 15 Oct 2026 | Authoritative PEWA thesis, boundaries, channel direction and open shared-capability questions. F01 does not decide canonical menu/order data authority or technical storage/publishing responsibility; those are proposals for F02/Miledge disposition. Hypotheses are not market validation. |
| PEWA `docs/00-foundation/MP-ALIGN-001-Master-Programme-and-Miledge-Infrastructure-Alignment.md` | Founder disposition recorded under CLOSE, 16 Oct 2026 | Authorises this bounded F02 assessment and prospective Mode B analysis; no admission, classification, architecture or implementation. |
| PEWA `docs/decisions/DECISION-REGISTER.md` | PEWA-local discussion directions | Context only; not Miledge-wide architecture authority. |
| PEWA F02-R01 assessment, evaluation, baseline | Completed; v0.1 baseline Founder-approved as practical reference | Supports menu-domain context; does not allocate Miledge capabilities or complete F02. |
| Miledge `MILEDGE-PLATFORM-ARCHITECTURE.md` (MPA-002) | Approved v0.3; MPA Profile 0.1 | Canonical nine-layer model, reuse-first and authority boundaries. |
| Miledge `MPA-005-PROSPECTIVE-INFRASTRUCTURE-ALIGNMENT-STANDARD.md` | Approved v0.2 | Procedure for Mode B. It does not align, admit, classify or reclassify PEWA by itself. |
| Miledge `MV-303-Infrastructure-Portfolio-Roadmap.md` | Approved v0.5 | Capability-before-product and reuse-before-duplication direction; lists Menu-as-a-Service as expected portfolio evolution, not an available service or PEWA position. |
| Miledge `WP-05-Infrastructure-Domains.md` | Approved v0.1 work package | Portfolio domain work-package record; not a PEWA domain classification. |
| Miledge `MV-302-Core-Infrastructure-Portfolio.md` | Draft for Founder Review v0.3 | Candidate portfolio inventory only; not approved availability or membership evidence. |
| Miledge `MV-200-Infrastructure-Domain-Architecture.md` | Draft for Founder Review v0.6 | Context only where the approved MPA governs; not treated as separate approved domain authority. |
| Miledge `MEI-004-Infrastructure-Pages-Implementation.md` | Complete — Awaiting Founder Review v0.1 | Infrastructure-page implementation report; does not establish operating shared services or PEWA access. |
| Miledge `MTAIP-001-MILEDGE-TECHNICAL-ARCHITECTURE-AND-INFRASTRUCTURE-PRINCIPLES.md` | Approved, active v1.0 | Provider-neutral architecture and proportionate portability principles; no provider selection here. |
| Miledge `MV-206-Media-Storage-and-Delivery-Guidance.md` | Approved, active v0.1; guidance, not provider mandate | Media authority/isolation considerations; no shared media service availability demonstrated. |
| Miledge `MV-207-WhatsApp-and-Conversational-Access-Guidance.md` | Approved, active v0.1 | Optional WhatsApp channel and reusable adapter boundary; product-specific adoption and deployment remain separate. |
| Miledge `MWA-001-WhatsApp-Adapter-Technical-Contract.md` | Approved technical contract v0.1; not implementation authority | Contract boundary and security expectations; runtime/deployment/operations deferred. |
| Miledge `MWA-002-Shared-Adapter-Contract-Foundation.md` | Accepted contract foundation v0.2, Founder review complete; no implementation authority | `mwa.v1` schemas/fixtures and specified behavioral cases; no hosted service, provisioning or deployment. |
| Miledge `MWA-003A-Reusable-WhatsApp-Adapter-Core-Engineering-Plan.md` | Approved engineering plan v0.2; explicitly NOT implementation authority | Defines intended core and limitations. It records no Graph client and MWA-003B as later scope. |
| Miledge `MV-203-Shared-Service-Catalogue.md` | Draft for Founder Review in inspected main | Candidate service concepts only; not evidence of approved or operating shared services. |
| Miledge `MV-003`, `MV-101`, `MV-201`, `MV-205` | Draft for Founder Review in inspected main | Not treated as independently binding standards; where their concepts are reflected in approved MPA-002/MV-303, those approved sources govern. |
| FEF `FEF-ADOPTION-GUIDE.md` | Approved, active v1.0 | Future project adoption/readiness process; no FEF engineering authorization is implied by F02. |

## Evidence labels used in this package

- **Approved direction/contract:** an approved Miledge or PEWA document authorises a direction or boundary, not necessarily a running capability.
- **Repository artifact:** a committed schema, source file, test, or workflow exists at the cited SHA.
- **Static validation:** a repository workflow or validator is configured; this is not proof that the latest run passed.
- **Behaviorally tested:** only used when a recorded run or report proves execution of the relevant behavior on the required profile.
- **Deployed/operational:** requires current deployment and accountable operations evidence; not inferred from code or CI.
- **Available to PEWA:** requires an approved product relationship plus actual access/integration readiness; not inferred from a shared contract.

## Current MWA maturity caveat

At Miledge main `6a34a99…`, `contracts/mwa/v1/` contains JSON schemas, fixtures, validators and a harness specification; `adapters/mwa-python/` contains implementation source and tests; `.github/workflows/mwa-contract.yml` and `mwa-adapter.yml` configure CI. This is committed repository and test infrastructure evidence. MWA-003A says its package plan is not implementation authority and that it contains no Graph HTTP client; MWA-002 says no behavioral case has been executed and CI evidence is static contract checking, while MWA-003A itself describes later behavioral implementation gates. No deployment, production account, live provider connectivity, operational owner, PEWA credentials, successful live interaction, or PEWA integration is evidenced by the inspected repository. The discrepancy between implementation artifacts and planning/authority wording must be dispositioned by Miledge authority before treating the package as an approved operational service.

## Source locations

PEWA evidence is in the canonical PEWA paths named above. Canonical Miledge paths are under `docs/miledge-ventures-knowledge/00-governance/`, `01-strategy/`, `02-architecture/`, and `03-portfolio/`; the MWA contract artifacts are under `contracts/mwa/v1/`, adapter artifacts under `adapters/mwa-python/`, and workflow definitions under `.github/workflows/`. The source repository and commit are recorded above so exact source lines can be recovered without copying the Miledge library into PEWA.
