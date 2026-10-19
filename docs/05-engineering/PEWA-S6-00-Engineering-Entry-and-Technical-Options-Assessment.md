# PEWA-S6-00 — Engineering Entry and Technical Options Assessment

**Status:** FOUNDER REVIEW — READ-ONLY ASSESSMENT, NO ENGINEERING IMPLEMENTATION APPROVED
**Assessment date:** 19 October 2026
**Authority:** Founder-approved Stage 6 planning PR #62, merge `69ef267e7a27aec245d69c1c090fd50bd679a3ad`. Approved Stage 3 requirements, Stage 4 architecture, Stage 5 FEF governance.
**Decision posture:** No runtime, database host, identity provider, cloud provider or CI provider selected. All recommendations below are candidate evaluation directions.

## 1. Repository and engineering-entry evidence

- Canonical [Fkenogo/pewa](https://github.com/Fkenogo/pewa), private; default branch `main`. Current root has `README.md` and `docs/` only; no source/runtime application or `.github/` folder was present in the retrieved root listing.
- Documentary GitHub branch/PR/Founder approval/merge practice is demonstrated through PR #62; do not interpret this as proof of configured protection rules, required status checks, working runners or verified billing.
- Actual private-repo GitHub Actions entitlement and execution remain **unverified** through available read interface. GitHub's documentation specifies plan-based included minutes for private repos and billing/exhaustion conditions; this neither diagnoses PEWA's account nor authorises CI spending. Source: https://docs.github.com/en/billing/concepts/product-billing/github-actions
- Miledge temporary CircleCI pilot guidance is cross-project history, **not PEWA's provider selection or implementation instruction**.
- FEF-EWPCS-001 v1.0 and active AMD-001 govern **future** work; classify identity/tenant/authoritative accounting and material provider changes as R2 and require exact-head independent review. Routine local UI review is permissible.

**Result:** Governance and requirements are ready for a bounded first implementation *decision*, but repository technical entry/CI and environment readiness are not yet evidenced.

## 2. Technical option evaluation criteria

Mandatory selection requirements: strongly consistent merchant order acceptance and one-unit ledger evidence; bounded tenant/role authority; portable domain data; public/private menu isolation; local mobile-first preview; low baseline subscription economics; independently working web; regional service availability and applicable privacy; sustainable backup/export; bounded CI costs. Maintainability by a small engineering team weighs heavily. No stack selected solely due to another project's usage.

### App/runtime shortlist — evaluation only

| Candidate | Fit | Material caveat |
|---|---|---|
| **TypeScript full-stack modular monolith** (e.g. Next.js application/server or equivalent Node web app with explicit modules) | Coherent web, business UI and domain/server implementation; shared type contracts; likely practical low-overhead starting point | Framework may incentivise mixing UI and authoritative domain logic; require explicit server-side transaction module, background-job boundary and portable DB access |
| **Python server modular monolith + separate web UI** | Mature web/server and strong business transaction implementation options | Additional cross-language/API boundary and UI integration/operations cost; may be justified by team competency |
| **Provider-heavy serverless functions-first** | Can reduce dedicated server operation | Distributed acceptance/ledger transactions and vendor affinity are disproportionately risky absent concrete proof |

**Provisional recommendation:** Evaluate a TypeScript modular monolith first **without approving Next.js, Node version or hosting** in this report. Compare maintained framework versions, dependencies and team workflow at selection time.

### Transactional data

**Managed PostgreSQL** remains leading candidate, not yet selected. Native ACID transactions, relational constraints, uniqueness and row locking or serializable transactions are plausible foundations for unit spend/accounting. A correct implementation must define retry/idempotency/locking; PostgreSQL SERIALIZABLE operations can abort and require transaction retry, so choosing SQL does not by itself prove no double-charge. Technical source: https://www.postgresql.org/docs/current/transaction-iso.html

Before provider selection compare two or three provider+region plans (managed Postgres with portable exports, backups, restore/point-in-time recovery, connection limits, concurrent write latency, cost at low usage). Verify transactionally inseparable acceptance+unit allocation and failure recovery with tests. Neither a particular provider nor region is authorised here.

### Identity and authorisation

Evaluate managed credential verification behind PEWA-owned tenant/role enforcement. Decision criteria include admin recovery, account-free customer guest access, support impersonation safeguards, password/session lifecycle, regional operation, cost per business/user and vendor exit. **Do not use vendor-native roles as sole authority for PEWA tenants**. Provider options remain unranked until capability/current-cost checks, particularly because guest orders do not require customer accounts.

### Edge, media and search

- Public menus may be CDN cached only with deliberate eligibility and invalidation; private hotel menus, guest order data, associated images and metadata must fail closed.
- Cloudflare edge, R2 storage and Images are **Miledge-guided candidates**, not imposed components or free media delivery. Evaluate signed/private asset fit, egress, processing, regional and lifecycle constraints.
- Search should initially be measured against original merchant language, category optionality, business/item/venue queries and privacy separation. Database-backed index/read projection is a reasonable *candidate*, with external search engine deferred until measured requirements justify it.
- Web/QR must work without optional WhatsApp adapter. MV-207 is portfolio architecture guidance, not evidence of a deployed service.

## 3. Experience reference gate

Before substantial UI assembly, prepare one mobile-first PEWA Experience Reference for Founder review covering:
1. business organisation/brand/venue/menu author journey;
2. published web menu/direct-QR browsing, language-neutral merchant content, organic Home/Directory and manual contact;
3. optional structured-order customer journey, immutable quote/snapshot, merchant accept/Ready view;
4. simple but explicit distinction between a visible online menu and unavailable **new structured ordering** after unit exhaustion;
5. account-free protected hotel guest and order-retrieval experiences.

This experience reference is **proposed**; no design/prototype work is authorised by this assessment. Test accessibility and low-connectivity assumptions during experience validation; do not make a PWA, push or WhatsApp mandatory.

## 4. Outstanding proofs and who resolves them

| Required evidence | Timing | Authority |
|---|---|---|
| Actual GitHub private-repo Actions settings, billing eligibility, required checks, branch protection and locally reproducible tests | Before reliance on hosted checks or implementation closure | PEWA engineering/Founder; Miledge CI guidance |
| Runtime/framework current support, local developer tooling, deployment portability, maintainability and baseline spend | Before first executable project scaffold | PEWA technology decision; R2 review if material architecture boundary |
| Managed transactional DB service/region, durable test and backup/export | Before persistent order/unit implementation; production recovery before pilot | PEWA architecture with relevant Miledge authority |
| Managed auth choice and PEWA-owned access controls | Before real account/tenant identity implementation | PEWA security/Founder; R2 |
| Cancellation, accept/withdraw ordering, recoverable debt settlement | Before affected live order/ledger state machine implementation | Founder product/commercial |
| Guest/hotel audience evidence and privacy/retention | Before protected real-data functionality | Founder product/security and legal |
| Media rights/user Terms, payment/taxes and campaign viewability | Before affected product feature and real external exposure | Founder commercial/legal as appropriate |
| WhatsApp adapter concrete Miledge interface, approval and operational availability | Before integration | Miledge shared-platform approval; PEWA feature approval |

These gaps **must not become blanket blockers to isolated, mock-data, authorised preparatory code**. No such code is approved here.

## 5. Recommendation and Founder decision gates

**S600-FD1:** Accept PEWA as *governance-ready, technically unprovisioned*: no actual CI or infrastructure readiness claim.

**S600-FD2:** Approve the **TypeScript modular-monolith + managed PostgreSQL** direction as the leading *evaluation shortlist*, **not** as final selected framework, database vendor or hosting.

**S600-FD3:** Approve a bounded follow-on technical selection/experience reference proposal before an executable domain foundation package. The technical decision brief must contain provider cost/security/region and transaction/idempotency proof plans.

**S600-FD4:** Retain PEWA-owned authorisation, protected guest journeys, independently functioning web and Miledge conditional integration as non-negotiable selection criteria.

**S600-FD5:** Reserve **separate first implementation work-package Founder approval**, CI configuration, provisioning, real-data pilots and releases.

**Disposition:** S6-00 documentary engineering-entry assessment complete; recommend a narrow next technology and mobile-first experience reference Founder decision, not immediate implementation or procurement.
