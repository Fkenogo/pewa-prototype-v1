# PEWA-S4-CLOSE — Founder Disposition and Stage 4 Closure Record

**Status:** FOUNDER APPROVED — STAGE 4 CLOSED WITH CONDITIONS, 19 October 2026; PR #52 merge `6e92303ae4d6a8390ccee06c77fb251d8c5409ea`  
**Prepared:** 18 October 2026  
**Stage:** Project Home Stage 4 — Product Architecture and Technical Decisions  
**Founder disposition:** Stage 4 closed with conditions on 19 October 2026, **without initiating FEF adoption, engineering, vendor procurement or deployment**.

## 1. Authority and completed architecture work

Stage 4 was initiated through the Founder's separate “proceed” instruction on 18 October 2026, after the controlled Stage 3 closure. A01–A08 have all been individually reviewed, approved and merged in PRs #43–#50. A08 was merged as `9ab9781d408a8c10443d7f3f48252d72b12d5879`. The Founder also approved the [cross-workstream architecture reconciliation and conditional closure-readiness recommendation](PEWA-S4-REC-001-Architecture-Reconciliation-and-Closure-Readiness.md), merged in [PR #51](https://github.com/Fkenogo/pewa/pull/51), `c21c5ead10147ba8ae47264d253294372f11e0dc`, and confirmed that the approach aligns with Miledge architectural practices.

Authoritative product inputs remain the Stage 3 baseline of **314 requirements R01–R08** and **41 Founder-approved COM/ORD/BMP/CPN/POP directions**. Neither older research assumptions nor provider habit supersede the product baseline.

## 2. Founder-approved disposition

By explicit Founder approval of PR #52 on 19 October 2026:

1. **Close Stage 4 with conditions** based on A01–A08 and REC-001 as the approved PEWA product-architecture direction.
2. **Adopt a modular monolith as the preferred application architecture**, with PEWA-owned authoritative domain/permissions, logical module isolation, a strongly consistent order-acceptance/one-unit-consumption decision and separately guarded public/read projections. A logical domain boundary is not a mandate for its own service/database.
3. **Preserve independent, web-first menu access**, account-free public browsing and proportionately secured guest access, optional web ordering and messaging, and business-first ownership of item declarations and commercial food/fulfilment actions.
4. **Preserve base subscription versus order-capacity independence:** zero accepted-order consumption units disables **new structured ordering only**. Throughout an eligible active base subscription, direct published menus, Home/organic Directory eligibility and manual engagement remain available. Previously admitted orders follow bounded continuity rules; subscription lapse after governed grace is a different restriction.
5. **Preserve order and commercial integrity:** one authorised business acceptance, one attributable consumption unit; 200 monthly included units, purchased carry-forward and ten bounded recoverable outstanding obligations are distinct. Detailed debt settlement, last-unit races and time windows remain reserved for proper policy and technical review.
6. **Preserve content and audience controls:** merchants may author content in any language; shared categories are optional; protected hotel menus and images cannot leak into public discovery; sponsored exposure is visibly labelled and separate from organic rank.
7. **Accept merchant responsibility for uploaded images/content**, with merchant representation of appropriate image rights and proportional PEWA reporting/restriction/takedown safeguards, subject to eventual legally reviewed business terms.
8. **Record candidates, not adopted providers:** managed PostgreSQL, managed authentication behind PEWA-owned authorisation, Cloudflare/Miledge-aligned media and delivery, source-backed search and managed background facilities remain evaluation options requiring current security, price, residency, portfolio-policy and portability evidence before any final choice.
9. **Preserve Miledge reserved authority:** future structured WhatsApp conversational features may only integrate with Miledge's separately approved shared adapter, reusing the same PEWA menu and order truth. WhatsApp, push and PWA are not prerequisites for web journeys; outbound WhatsApp status stays off without separate consent and authorisation.
10. **Do not initiate Stage 5 FEF adoption, Stage 6 engineering, provider accounts, contracts, production processing or deployment** by virtue of architecture closure. Each requires its separately authorised gate.

## 3. Reserved obligations and handover

| Reserved area | Required later evidence and authority |
|---|---|
| Product-commercial specifications | Final subscription/top-up/campaign rates, tax/currency, renewals/grace, top-up validity, ten-unit settlement and concurrency reservation policy: Founder commercial/product authority before live charging and detailed affected implementation |
| Guest identity and privacy | Secure account-free order access/recovery, hotel audience proof, data-class retention, response duties and local legal compliance: Founder plus competent privacy/security/legal review before live sensitive data |
| Customer-order policy | Exact expiry bounds, requested-time precedence, amendment and cancellation rights, remedies: Founder product and applicable legal review before detailed implementation |
| Advertising qualification | Qualifying viewability, invalid/repeat views, unused campaign exposure credit/expiry, privacy: Founder campaign/commercial authority before paid advertising |
| Provider and infrastructure fit | Regional availability, costs, portability, backups/restore, security, identity and transactional correctness, media privacy and operator recovery: future controlled evidence-based architecture/procurement reviews with Miledge constraints |
| Miledge shared integration | Actual shared WhatsApp adapter readiness/interface/cost and approvals; other Miledge media/shared responsibilities: reserved Miledge authority |
| Terms and privacy documents | Business and Customer Terms, Privacy Notice, merchant image/content policy, operating/appeals rules: competent legal review and Founder approval before binding publication/live use |
| Build, validation and operational readiness | Implementation plans, test suites, observability, SLO/RPO/RTO, CI, secrets, deployment, recovery tests and go-live readiness: separate FEF and engineering/release authorities |

**Conditional closure is not technical implementation readiness or a finding that selected candidate vendors meet requirements.** Significant architecture conflicts discovered later must be returned for Founder disposition, not silently resolved through provider defaults.

## 4. Current status and Founder approval gate

Founder approved this separate formal disposition on 19 October 2026. Stage 4 is **CLOSED — FOUNDER APPROVED WITH CONDITIONS**, PR #52 merge `6e92303ae4d6a8390ccee06c77fb251d8c5409ea`. The Project Home Programme is aligned separately; Stages 5 and 6 remain NOT STARTED.

**Founder approval received:** formal closure effective 19 October 2026. This disposition does not authorise Stage 5 or 6.
