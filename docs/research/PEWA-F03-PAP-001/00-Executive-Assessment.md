# PEWA-F03-PAP-001 — Executive Architecture Principles Assessment

**Status:** Proposed for Founder review; no principle is approved by this package.
**Programme:** F03 — Platform Architecture Principles; F02 closed 16 October 2026.
**Scope:** Miledge-level architectural constraints and unresolved questions. No application design or implementation.

## Recommendation

Adopt the principles in [Proposed Principles](01-Proposed-Platform-Architecture-Principles.md) as the decision frame for later F04/F05 work, subject to Founder disposition and any required Miledge authority. They preserve the approved food, beverage and meal-related scope while treating broader structured-offerings reuse as a hypothesis. They separate business authority over supplied offerings from PEWA's candidate responsibility for product logic, and leave canonical data authority, tenant model and persistence ownership unresolved.

Use a secure organisation boundary, least privilege, explicit domain authorization, auditable data lifecycle rules, product-owned domain meaning, and evidence-gated shared dependencies as architectural constraints. Treat WhatsApp as optional and conditional on separately verified contract conformance, operational ownership, availability and PEWA readiness. Web access remains an independent product path.

## Authority and current baseline

- PEWA `main@197a4bd341a411783efeb8c0ee200e8e97ee8018` contains Founder-approved F01 and F02 disposition/closure records. F02 FD-01 is a working reuse hypothesis; FD-02 is a provisional responsibility boundary; FD-03 makes the WhatsApp Adapter conditional; FD-04 requires evidence before calling other candidates shared services; FD-05 approves prospective assessment only.
- Current inspected Miledge canonical `origin/main@cf119f4e42959b40da66363729eef01d32512da7`. MPA-002 v0.3 and MPA-005 v0.2 are Approved; MTAIP-001 v1.0, MV-303 v0.5, MV-206 v0.1 and MV-207 v0.1 are Approved/active as marked in their records. MWA-001 v0.1 is an approved technical contract, not implementation authority; MWA-002 v0.2 is an accepted contract foundation with no implementation authority; MWA-003A v0.2 is an approved engineering plan, explicitly not implementation authority.
- PEWA's F02 source inventory used Miledge `6a34a99…`; this package rechecked the cited governing sources at newer `cf119f4…`. MWA implementation/test artifacts have since expanded in the repository. Their presence is repository evidence, not proof of approval to implement, live Meta connectivity, production deployment, service operations, PEWA access or successful PEWA integration.
- Draft Miledge records, including draft service catalogues and draft domain/platform descriptions, are not treated as binding. The [Authority Traceability Matrix](02-Authority-and-Constraint-Traceability.md) records status, use and limits.

## MPA fit

The proposal fits MPA-002's nine-layer chain and MPA-005 Mode B's left-to-right prospective analysis. The chain is used as a vocabulary and traceability check only. No admission, portfolio classification, Domain, Shared Platform or layer ownership is proposed as decided. Miledge-level principles are distinguished from PEWA-specific proposed constraints; [future-stage allocations](05-Unresolved-Decisions-and-Stage-Allocation.md) preserve the boundary between F03, F04, F05 and later Product Architecture.

## Principal trade-offs

1. **Isolation versus simplicity:** require logical separation and authorization guarantees, but keep the technical tenancy model open until data/access requirements and shared-service evidence are known.
2. **Portability versus delivery cost:** preserve domain authority behind product-owned boundaries where dependency risk is material; do not require multi-provider abstractions or duplicate canonical stores by default.
3. **Reuse versus product focus:** explore reusable structured-offerings capability while keeping food service as the approved initial scope and excluding general commerce.
4. **Shared integration versus resilience:** prefer the approved Miledge WhatsApp boundary when ready, but do not make core web access depend on it.

See [Trade-offs and Alternatives](04-Trade-offs-and-Alternatives.md) for rationale and consequences.

## Founder disposition requested

Review the 12 proposed principles and decide whether to approve, approve with conditions, return for revision, reject or defer. In particular, confirm:

1. the split between business authority over offering meaning/content and PEWA's candidate responsibility for validation, presentation and product behavior, while canonical technical state ownership remains open;
2. the non-negotiable organisation isolation, least-privilege and domain-authorization constraints without choosing an implementation;
3. conditional WhatsApp adoption plus an independent web fallback; and
4. evidence-gated portability and shared-service reuse without provider or hosting selection.

If approved, record any required Miledge-level disposition separately under MPA authority. This proposal is not that disposition and does not close F03. No F04/F05 work is started here.
