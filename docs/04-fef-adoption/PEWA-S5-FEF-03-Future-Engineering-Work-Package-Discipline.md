# PEWA-S5-FEF-03 — Future Engineering Work-Package Discipline

**Status:** PROPOSED — FOUNDER REVIEW; DOCUMENT ONLY  
**Date:** 19 October 2026  
**Authority:** Approved [PEWA FEF Alignment Profile](FEF-ALIGNMENT.md); [FEF-EWPCS-001 v1.0](https://github.com/Fkenogo/founder-engineering-framework/blob/main/docs/engineering/FEF-EWPCS-001-ENGINEERING-WORK-PACKAGE-CLOSURE-STANDARD.md) and [AMD-001](https://github.com/Fkenogo/founder-engineering-framework/blob/main/docs/engineering/FEF-EWPCS-001-AMD-001-DEVELOPMENT-PREVIEW-AND-PROPORTIONATE-REVIEW.md), APPROVED–ACTIVE.  
**Scope:** Specify proportional **future** engineering-entry, review, evidence and closure rules. Stage 6 is NOT STARTED; this record creates no implementation, CI/deployment or vendor authority.

## 1. Governing principle

PEWA engineering work will be **authorised → implemented → reviewed/verified → approved → merged/closed**, with each state evidenced separately. A coding agent cannot create product rules, choose previously unapproved providers or settle architecture/policy gaps by assumption: record **DECISION REQUIRED** and stop the affected work. Reuse PEWA's canonical GitHub repo and Project Home Programme; do not copy a parallel governance framework.

## 2. Minimal future work-package entry

Each engineering work package (EW-XX) must state, in its issue/PR or one bounded record:

1. **Authority:** approved Stage 6 initiation; controlling requirement(s) and A01–A08 decisions; applicable product/legal/Miledge gates and their status.
2. **One measurable outcome:** user/business-facing or system-observable capability, precise expected behaviour.
3. **Scope boundary:** in / out / deferred. Never fold in other products' migrations, unapproved provider provisioning or policy decisions.
4. **Repo baseline:** canonical repo and base branch, expected SHA where material, working branch/worktree policy, known dirty/unrelated state.
5. **Dependencies:** outstanding service, provider, commercial/privacy/legal decisions; STOP on a material missing permission or invariant.
6. **Acceptance proof:** behaviour tests, negative/security cases, migration/recovery evidence where needed, UI Founder preview as appropriate.
7. **Risk class:** preassign R0/R1/R2 with reason and named required reviewer/verification route.
8. **Completion conditions:** exact verified head, checks, any review findings/corrections, Founder approval and normal controlled merge; evidence of closure.

**Template for later work-package briefs**

```markdown
# PEWA-EW-XX — [Outcome]
Authority: [Stage 6 authorisation + product/architecture decision]
Repo/base/head: [canonical URL, branch, baseline SHA]
Objective: Implement X so Y is observable, preserving Z
In scope / Out of scope / Deferred: [...]
Dependencies and DECISION REQUIRED gates: [...]
Risk class and justification: R0 / R1 / R2
Acceptance cases and evidence: [...]
Preview/review method: [...]
Completion: implementation report -> verification -> approval -> merge -> closure
```

This is a concise reference; a future package need not duplicate the same facts into many documents.

## 3. Proportionate review classification

| Class | When | Required review/verification | PEWA examples |
|---|---|---|---|
| **R0 — Routine** | Low-risk reversible copy/presentation or behaviour-preserving bounded changes | Focused checks/diff and useful product verification; no independent technical review automatically | Menu copy/localisation, bounded UI polish, docs synchronization |
| **R1 — Targeted** | Meaningful but contained logic/integration/query change not crossing high-risk trust/financial boundary | Targeted technical review of affected concern plus relevant tests | Noncritical presentation query optimisation, bounded non-sensitive search ranking under existing policy |
| **R2 — High-rigor** | Auth, cross-tenant security, authoritative order/usage/billing, identity recovery, destructive migration, production/pilot infrastructure, major provider boundary or potentially serious harm | Independent technical review against exact candidate state plus adversarial tests and necessary Founder approval | Acceptance + one-unit charging, ten-unit debt, tenant isolation, protected hotel media, payment settlement, guest order access |

A small-looking patch is R2 when it changes an R2 invariant. Equally, a trivial typo in an R2 file need not trigger broad re-review if it does not change prior technical evidence. Corrections must close specific material findings; new review cycles need material justification.

## 4. Required PEWA proof by capability

| Future package changes | Minimum test/evidence obligation |
|---|---|
| Ordering/usage | One business acceptance/one charge; pending accept/withdraw races; duplicate retries; 200 monthly renewal exactly once; top-up carry-forward; hard ten-unit outstanding debt ceiling |
| Base subscription/publication | Consumption exhausted while subscription active: menu link, organic Directory/Home eligibility and manual contact continue; **new ordering only** unavailable |
| Multitenancy and staff roles | Cross-organisation denials, publish/spend/order authority separation, operator restrictions and attributable correction |
| Hotel guest/private order | Unregistered protected return, action step-up, revocation and denial of guessed public order IDs; private menus/assets excluded from public caching/indexing |
| Menu content/discovery | Business-language freedom and custom classes; submitted order snapshot unaffected by future edits; no false ingredient/allergen inference |
| Media | Business rights/content representation, audience-suitable public/private delivery, safe derivatives/metadata, complaint/takedown path |
| Paid Featured Offers | Organic search independence, qualifying visible exposure only, duplicate/invalid traffic treatment, correction evidence; viewability values require approval |
| Shared WhatsApp/notifications | Web operates with adapter absent, no automatic outbound WhatsApp status, derived notification cannot change order truth |
| Provider/migration/release | Actual service policy/cost/security/reversibility evidence, safe migrations/rollback, backup and verified restoration at appropriate risk level |

These are requirements to specify tests **when relevant capabilities are authorised**, not tests to implement during Stage 5.

## 5. Preview, CI and repository rules

- **Local-first review:** for material UI/experience changes, developers validate the committed version locally and enable Founder preview; hosted preview only when remote access, hosted-provider integration, environment parity, pre-pilot/deployment or Founder direction makes it necessary.
- **Evidence-based CI:** choose actual workflows later through verified Miledge and PEWA infrastructure authority. A green badge is evidence only if it ran against the relevant exact head and passed the correct gates; local test results are labelled local.
- **Branch hygiene:** isolated bounded branches/worktrees, no unrelated changes, no force-push/rebase of reviewed shared heads without explicit policy and review reconciliation; reconcile changed head before approval or merge.
- **No self-approval:** implementer does not treat their own completion report as Founder approval. Merge only when the authorised review/approval route is satisfied.
- **Closure:** report approved head, normal merge SHA, unresolved risks and whether actual deployment occurred; do not call implemented code live merely because a PR merged.

## 6. Entry blocking versus later gates

**Before an affected EW begins:** stage authority, product acceptance semantics, permission boundaries, critical commercial policy for any implemented charging/debt logic, platform shared-service permission and selected architecture/provider as necessary to that bounded task.

**Before live customer use:** competent jurisdictional Business/Customer Terms, Privacy Notice and content warranties; pricing/tax/payment compliance; incident/privacy procedures, retention rights, campaign impression definitions, production recovery/operations.

An initial public-menu UI slice may be authorised in the future while campaign billing remains unpriced, provided that slice does not implement, activate or falsely imply paid campaigns or other gated functions. **Nothing in this document itself authorises such a slice.**

## 7. FEF-03 Founder decisions requested

**FEF03-FD1:** Approve this lean package-entry and authoritative merge/closure contract for **future** Stage 6.

**FEF03-FD2:** Approve R0/R1/R2 proportional review with mandatory independent technical evidence for genuinely high-risk R2 changes.

**FEF03-FD3:** Approve local-first product previews, with hosted preview only for justified needs.

**FEF03-FD4:** Require work-package-specific gating and exact-head evidence, avoiding duplicate registers and repetitive governance loops.

**FEF03-FD5:** Preserve separate Stage 6 initiation, controlled provider selections, Miledge/shared authority and legal/commercial readiness gates.

**Status:** FEF-03 draft prepared; Stage 5 remains IN PROGRESS; Stage 6 NOT STARTED. After Founder approval, proceed to FEF-04 current Miledge infrastructure/dependency/CI verification.
