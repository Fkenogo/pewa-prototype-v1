# Shared Infrastructure Readiness and Dependencies

## Readiness scale

**Direction/contract approved** → **repository artifacts** → **validated behavior** → **deployed and operated** → **available to PEWA** are separate evidence levels. A later level cannot be inferred from an earlier one.

## Priority relationship: Miledge WhatsApp Adapter

| Dimension | Evidence at Miledge main `6a34a99e80c64d25b72dfb53a501f043bf74d210` | Assessment |
|---|---|---|
| Strategic/channel direction | MV-207 v0.1 approved active. WhatsApp optional, complementary to web/QR; product owns tenant routing, rules and outcomes; no central hosted service assumed. | Approved direction, not a deployment. |
| Contract | MWA-001 v0.1 approved technical contract; MWA-002 v0.2 accepted foundation; JSON `mwa.v1` schemas/fixtures and behavioral specifications exist. | Contract/repository maturity. Contract acceptance does not prove full conformance. |
| Core code artifacts | `adapters/mwa-python/` includes package source, in-process interfaces, store and ingress/dispatch/outbound components, and tests. | Committed implementation artifacts observed. MWA-003A describes an engineering plan only and excludes real Graph client, Meta resources, product changes and deployment. No architecture authority for PEWA integration follows. |
| CI configuration | `.github/workflows/mwa-contract.yml` and `mwa-adapter.yml` present. Adapter workflow specifies Python versions, static checks, unit/store/PostgreSQL suites, harness reports, mutation checks and installation validation. | Workflow configuration exists. This assessment did not establish latest workflow-run result; do not say checks passed. |
| Behavioral conformance | MWA-002 §9 says G9 harness is specified, not built/executed in its described state; MWA-003A identifies 45 cases and coverage stages. Source tree now contains harness/driver artifacts and CI configuration. | Artifact state appears to have advanced beyond document maturity statements. Actual run reports and accepted conformance gate were not verified. Requires Miledge disposition of document/code status. |
| Provider connectivity | MWA-003A §2 says no Graph HTTP client; MWA-002 states live Meta assumptions require verification. | Not evidenced; no live provider path may be assumed. |
| Deployment/operations | MV-207 and MWA-001 defer deployment, Meta account/number, operating ownership and production activation to separate approval. No deployment manifests, production records, runbooks or PEWA access evidence were identified in the inspected source scope. | Not established. |
| PEWA availability | PEWA F01 §8 records the intended shared adapter direction; no PEWA integration, credentials, approved product plan or confirmed operational service access appears in PEWA baseline. This intended boundary does not establish integration readiness. | Not available to PEWA on evidence inspected. Keep dependency conditional. |

### MWA dependency conditions

Before PEWA depends on the adapter, the appropriate Miledge and product authorities need to establish: (1) current authoritative implementation status relative to MWA-001/002/003A; (2) accountable service/package owner and support boundary; (3) which interactions are implemented and tested, including failure/fallback behavior; (4) provider/Meta resource readiness and policy verification at execution time; (5) product-specific isolation, access and operating arrangements; (6) PEWA contract compatibility and separately approved product integration; and (7) deployment, cost and operational evidence. This assessment selects no provider and defines no integration design.

## Other candidate dependencies

| Area | Current authority/evidence | Reuse test and gap |
|---|---|---|
| Media | MV-206 approved active v0.1 is preferred evaluation guidance, not provider mandate. | Confirm a real shared capability, asset authority/deletion, tenant isolation, portability, operating owner and availability. Otherwise retain a PEWA-owned responsibility boundary without selecting technology. |
| Identity / tenancy | MPA-002 and MTAIP-001 provide architectural principles; MV-203 service catalogue is draft. MV-207 says channel sender/phone is not product identity. | Verify current shared identity or tenant capability and its contract/owner before mapping. No identity master/service assumed. |
| Search / discovery | PEWA F01 includes directory/search direction; no approved shared search service proven in inspected sources. | Test whether an existing Miledge Domain/platform/service covers reusable indexing/discovery and whether menu-specific semantics remain PEWA-owned. |
| Subscription / entitlements | F01 has a subscription direction but prices/tier mechanics remain open. | Verify whether Miledge provides operating billing/entitlement capability; separate product plan meaning from shared transaction rails. |
| Analytics / audit / notifications | Candidate reusable needs; no operating shared capability evidence from approved source set; MV-203 draft only. | Confirm actual scope, data authority, retention, access, cost and owner before proposing dependency. |

## Overall dependency status

The MWA is the highest-priority candidate relationship because it has approved portfolio direction, accepted contract artifacts and committed implementation artifacts. Its **current conformance, operational support, deployment and PEWA readiness are unverified**. The plan/documentation versus committed-artifact mismatch is an external Miledge reconciliation item, not automatically a blocker to PEWA F02 closure when MWA is recorded as conditional and unresolved. Other relationships remain discovery questions. No shared capability in this report is declared operationally available.
