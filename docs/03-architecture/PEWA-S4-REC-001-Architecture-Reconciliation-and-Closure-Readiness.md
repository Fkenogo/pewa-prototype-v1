# PEWA-S4-REC-001 — Architecture Reconciliation and Closure-Readiness Assessment

**Status:** FOUNDER REVIEW CANDIDATE — STAGE 4 OPEN; NOT A CLOSURE DISPOSITION
**Date:** 18 October 2026
**Basis:** Founder-approved A01–A08, closed Stage 3 requirements (314) and 41 product-policy directions, approved A08-FD7 bounded final reconciliation. A08 PR #50 merged at `9ab9781d408a8c10443d7f3f48252d72b12d5879`.

## 1. Reconciliation result

**Recommendation: CONDITIONAL READY for a separate formal Stage 4 closure disposition.** A01–A08 form a coherent **logical architecture**: a provider-neutral modular monolith, PEWA-controlled tenant and domain authority, strongly consistent business acceptance and one-unit consumption, isolated public/protected read projections, account-free guest access, and web-first operation independent of optional Miledge WhatsApp infrastructure.

This is a direction and decision baseline, **not a deployable architecture specification**. A08 deliberately describes managed PostgreSQL, managed identity, media storage/delivery and edge providers as candidates, not selections. Neither provider procurement nor engineering is authorised.

## 2. Cross-workstream architecture decision index

| Workstream | Approved governing architecture principle | Required downstream proof |
|---|---|---|
| A01 — Drivers/capabilities | Integrity, isolation, web independence, honest business truth, low-cost reversibility; logical capability groups | Architecture-to-requirement traceability, constraints and quality verification |
| A02 — Domain and data | Organisation, menu, ordering, entitlements, ads, protected access, operations have explicit authoritative actors and durable meanings | Snapshot correctness, lifecycle arbitration, tenancy and event evidence |
| A03 — Application | Provider-neutral modular monolith with separate safe public read projections; services only if justified by evidence | Module boundaries, acceptance/unit transaction semantics and projection invalidation |
| A04 — Security/privacy | PEWA owns permissions/tenant membership; managed identity behind adapter candidate; guest order access without compulsory registration | Threat model, step-up, revocation, secure recovery, operator privilege isolation |
| A05 — Discovery/media | Business-authored any-language content; optional categories/images; no restricted search/media leak; no paid organic ranking | Search relevance/local languages, media scope rights, cache and takedown proof |
| A06 — Commercial integrity | Only business acceptance consumes exactly one unit; 200 monthly included, purchased carry-forward, 10 bounded recoverable outstanding; qualified visible paid exposure | Last-unit/renewal races, corrections/ledger consistency and viewability policy |
| A07 — Channels/shared services | Web/QR/order status independent; push optional; outbound WhatsApp status off; conditional Miledge shared adapter | Adapter-readiness authorisation, replay/privacy/consent tests and failure fallback |
| A08 — Infrastructure/options | Managed transactional core and portable public read delivery as preferred evaluation baseline; PostgreSQL leading candidate, not selected | Current provider fit, costs, region, portability, backup/restore, operational proof |

## 3. Founder clarifications preserved without ambiguity

1. **Consumption depletion does not unpublish menus:** a business with an active monthly subscription remains publicly listed/accessible through direct links and eligible organic Home/Directory and retains manual contact; only **new structured ordering** is disabled when eligible ordinary consumption capacity is exhausted. Already admitted commitments follow bounded continuity rules. By contrast, underlying subscription lapse after disclosed grace may restrict new public exposure.
2. **Image rights/content responsibility:** businesses uploading their own menu images are presumed to hold the required permissions and are responsible for displayed content. PEWA does not routinely verify each licence, but retains proportionate reporting/takedown/integrity powers and must include business warranties/responsibility in future legally reviewed terms.
3. **One shared menu catalogue:** business-web menu and future structured WhatsApp ordering use the same authoritative catalogue and order acceptance/consumption rules; channel delivery cannot establish merchant acceptance.
4. **No mandatory customer account:** protected hotel menus and guest order return use proportionate scoped protection; registration, push, GPS and WhatsApp are not prerequisites for ordinary public browsing.
5. **Advertising is not organic promotion:** paid Featured Offers count approved qualifying on-screen opportunities to see, not mere scheduling, impressions inferred from offscreen loads or sales; cannot purchase organic search rank.

## 4. Bounded consistency findings

- **No material conflict identified** among the approved architecture directions and the above Founder clarifications.
- **Potential detail needing care:** A06 allocation language says recoverable units may be used only for eligible previously admitted commitments, while product entitlement materials also require capacity checking at ordering admission. Final transactional reservation/eligibility rule has **not** been fixed; this is an explicit implementation-critical Founder commercial/product decision, not permission to infer an unlimited credit line or silently reject previously accepted eligible commitments.
- **Potential security delivery detail:** A05 permits read projections/caches while A04 requires fail-closed restricted data. Cache strategies must honour *current* access eligibility; A08 has not authorised a concrete mechanism.
- **Potential policy ambiguity:** “published” does not mean “always discoverable”: publication, protected audience, base subscription, order availability, organic indexing and advertising eligibility are distinct controls.
- **Provider authority:** the Miledge shared WhatsApp adapter's real readiness and interface have not been independently verified by this PEWA architecture document. Cloudflare-related delivery and media, and PostgreSQL/managed identity, are evaluation candidates only. No provider selection is implied.

## 5. Reserved decisions, owners and timing

| Gate | Reserved work | Required authority |
|---|---|---|
| Commercial policy before live billing and applicable detailed engineering | Final subscription/top-up/ad rates, local currency, tax, grace, top-up validity, recoverable debt settlement/last-unit reservations | Founder product/commercial; competent financial/legal input |
| Orders before detailed implementation | Submission expiry/time windows, cancellation rights, concurrency policy and time-context availability priority | Founder product decision and legal review as needed |
| Personal information before live use | Guest/hotel eligibility proof and recovery, rights/retention, regional processing, incident rules | Founder product/security plus competent privacy/legal review |
| Advertising before paid campaigns | Qualifying viewability threshold, deduplication, invalid traffic, expiry/credit and refund handling | Founder commercial/promotion/privacy policy |
| Provider fit before technology selection/procurement | Current region and feature availability, pricing, failure controls, costs, data-export, media/provider policy and security | PEWA architecture authority, Miledge reserved guidance/approvals |
| Miledge WhatsApp integration | Shared adapter readiness, responsibility split, security and costs | Miledge shared-platform authority; PEWA product interface review |
| Engineering and release | API/schema detail, test strategy, environments, CI, SLO/RPO/RTO and restore evidence | Separately initiated Stage 5 FEF, Stage 6 engineering and release authorities |
| Contractual launch | Business/Customer Terms, Privacy Notice, content/image responsibility, platform moderation and appeals | Founder approval after competent applicable legal review |

These are assigned future gates, **not silently approved** decisions. A new material contradiction to the closed product baseline returns to Founder product governance, rather than being fixed through unrecorded implementation assumptions.

## 6. Closure-readiness assessment and Founder choice

**Option A (recommended):** Declare Stage 4 architecture principles **conditionally ready for formal closure review**. Approve this reconciliation and commission a distinct Stage 4 Founder closure disposition, preserving the selected modular-monolith architecture *direction* and the evaluated-but-not-selected technologies. Do not begin Stage 5 or 6 automatically.

**Option B:** Hold architecture open for actual cloud/database/auth provider selections and detailed timing/finance/privacy policy. This mixes the conceptual architecture stage with later FEF readiness, technical implementation and launch gates. Select B only if a concrete Stage 4 architecture-level decision cannot otherwise be evaluated.

**Founder action requested:** Approve Option A or name a bounded architecture contradiction requiring correction. **Stage 4 is currently IN PROGRESS; Stages 5–6 NOT STARTED.**
