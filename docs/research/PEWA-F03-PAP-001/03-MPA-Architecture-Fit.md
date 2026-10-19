# PEWA-F03-PAP-001 — MPA-002 / MPA-005 Architecture Fit

**Authority:** MPA-002 v0.3 (Approved, MPA Profile 0.1) and MPA-005 v0.2 (Approved). Miledge source checked at `origin/main@cf119f4e42959b40da66363729eef01d32512da7`.

## Directly supported by approved Miledge authority

- Start with recurring need and test capability reuse before product/industry implementation; distinguish capability, platform, services and modules precisely (MPA-002 §§3.1–3.3, 4–5; MV-303).
- Prefer existing capability/platform reuse and configuration before customisation; require evidence before expansion (MPA-002 §§3.3–3.6; MV-303).
- Keep Miledge portfolio architecture, project Product Architecture and FEF engineering authority distinct; repository artifacts do not prove availability or maturity (MPA-002 §§2, 3.8, 10–13).
- In Mode B, apply the nine-layer sequence left to right before Product Architecture is authoritative; mark unapproved mappings proposed or unresolved and test extension of existing layers before proposing new ones (MPA-005 §§3.2–3.3, 4).
- Let approved architecture drive infrastructure choice and assess provider dependency/portability according to actual risk, without speculative abstraction (MTAIP-001 §§2–6).
- Treat media and messaging as boundaries with product-owned access/authority concerns; guidance/contract does not itself create a provider mandate or operating shared service (MV-206; MV-207; MWA-001/002).

## PEWA-specific proposed constraints

The following translate the approved PEWA F01/F02 boundary into candidates for Founder review; they are not independently mandated Miledge rules:

- business authority over offered content and business outcomes remains distinct from PEWA responsibility for its own validation, presentation and product behavior;
- require organisation isolation and domain authorization while deferring tenancy and identity mechanisms;
- preserve the approved food/beverage/meal scope and exclusions while examining reusable structured-offerings capability as a hypothesis;
- keep WhatsApp optional and conditional, with independent web access and truthful business outcomes;
- require lifecycle, privacy, audit, recovery and operational responsibility to be addressed by later decisions.

The principle IDs are PAP-01–PAP-12 in [the principles proposal](01-Proposed-Platform-Architecture-Principles.md). The [traceability matrix](02-Authority-and-Constraint-Traceability.md) records exact source status and limitations.

## Nine-layer test

| MPA-002 layer | Evidence / F03 treatment | Decision boundary |
|---|---|---|
| 1. Human or Organisational Need | F01 identifies business offering management/publishing and customer access needs. | PEWA thesis is authoritative for PEWA scope; no Miledge admission decision here. |
| 2. Enduring Human or Organisational Capability | F02 FD-01 approves a sector-neutral structured-offerings capability only as a working hypothesis. | No Miledge capability catalogue disposition is made. |
| 3. Infrastructure Domain | No approved PEWA domain mapping identified. | Unresolved; no Domain proposed or classified. |
| 4. Shared Platform | Product thesis uses “platform”; MPA terminology distinguishes product/platform from Miledge Shared Platform. | No Shared Platform position is made. |
| 5. Shared Services | MWA is an intended conditional dependency; other services are candidates requiring evidence. | No service availability, ownership or PEWA eligibility inferred. |
| 6. Capability Modules | No decomposition in approved F01/F02. | Deferred; no modules or implementation parts proposed. |
| 7. Industry Implementation | F01 food-service and hotel contexts are initial scope. | Not a Miledge layer allocation or industry implementation definition. |
| 8. Organisation Configuration | MPA configuration-before-customisation is relevant as a principle. | No configuration model or scope defined. |
| 9. End-User Experience | F01 sets high-level destinations and access direction. | No screen, user journey or experience design in F03. |

## Mode B conclusion

MPA-005 Mode B is the correct prospective lens because PEWA has no authoritative Product Architecture and F03 precedes F04/F05. It supports a proposal that preserves unresolved mappings and separates earlier product thesis from future architecture. It does **not** itself authorize PEWA alignment, admit or classify PEWA, allocate any of the nine layers, create a Domain or Shared Platform, or authorize Product Architecture or engineering. Those remain for the applicable Founder/Miledge authority and later project stages.
