# Proposed Business Configuration Strategy

Strategic subjects only. This document names *what kinds of things* a business may control and *who governs* each. It does not define settings, schemas, defaults, options or administration flows.

## Configuration principles

| ID | Principle | Basis |
|---|---|---|
| CS-01 | Configuration before customization: variation between businesses is expressed as bounded configuration over shared product meaning, not bespoke development. | F03 PAP-07; MPA-002 |
| CS-02 | A business configures only its own organisation's information and choices; configuration never crosses organisation boundaries. | F03 PAP-01, PAP-03 |
| CS-03 | Business-declared information is the business's statement; PEWA presents it faithfully and does not certify it. | F01 §7; F04 |
| CS-04 | Configuration cannot change shared meaning: what Place Order, Order Accepted and Order Ready mean, what is public versus protected, and what PEWA will claim. | F01 §6; F04 area D, H |
| CS-05 | Capabilities a business may switch on are bounded by its subscription entitlement; enablement never exceeds entitlement. | F01 §6, §9; F04 area C |
| CS-06 | The business remains identifiable as the provider on its own destination. | F01 §11 |
| CS-07 | Each configurable subject needs a recorded reason (recurring business need) before it is admitted; the set is expected to be small. | Proportionality; reuse hypothesis |

## Four-way separation

| Subject | Business-controlled information | Subscription-governed capability | Product-controlled rule | Reserved for Product Definition |
|---|---|---|---|---|
| **Business identity and presentation** | Name, description, branding, how the business wants to be recognised. | Whether presentation options beyond a base level exist. | The business must be identifiable; PEWA branding position; no pretending PEWA is the merchant; content must not mislead; report handling. | Which identity fields are required, branding limits, verification of identity, multi-location semantics. |
| **Offerings, categories, menus and publication** | Offering content, descriptions, categories, grouping, images, prices; which offerings and menus to publish and when. | Limits on menus or offerings, if any (unapproved, undefined). | Publication is an explicit business act; published state is visible and truthful; draft is not public; validation is not verification; reports of misleading content are handled. | Multi-menu organisation semantics (F01 open), versioning, scheduling, correction and removal of published offerings, media rules, readiness-to-publish conditions. |
| **Permitted service-context variations** | Which contexts the business serves (for example dine-in, takeaway, hotel room, business-managed delivery) and how it describes them. | Whether a context is available for ordering. | Contexts are business descriptions; PEWA operates no logistics and verifies no fulfilment; context cannot alter status meaning. | The permitted list of contexts per business type, how they combine with menus, per-context availability rules. |
| **Availability and business-declared information** | Availability, opening-related and similar declarations, order acceptance and readiness declarations. | None proposed. | PEWA does not observe stock or kitchen state, and reports only what was declared and when; Accepted and Ready are business-declared. | Freshness expectations, scheduled availability, declared-information labelling. |
| **Engagement mode** | The business's choice of mode(s) to offer, and for ordering whether to enable it. | Manual engagement is entitlement-governed; structured ordering requires entitlement and business enablement. | Both conditions are enforced; manual engagement never records an order in PEWA; ordering is never enabled outside entitlement. | Entitlement lapse, downgrade, grace and suspension behaviour (historical order outcomes are never silently rewritten), mode transitions, what a business sees when a capability is unavailable, plan content. |
| **Customer contact and channel preferences** | Which approved contact pathways the business offers customers (for example ordinary WhatsApp or other contact), and preferences within approved options. | Whether optional channels are available to a tier. | Web access is always independent; WhatsApp is optional and conditional on MWA readiness; channel events are inputs, not business outcomes; no provider chosen. | The approved pathway set, preference granularity, channel-specific behaviour. |

## Boundary of configuration

- Not configurable by a business: truthful status meaning, isolation, authorization rules, entitlement enforcement, public/protected defaults, PEWA report handling, platform consumer-protection obligations.
- Not designed here: setting names, screens, admin roles, approval chains, bulk tools, defaults.
- Open and carried forward: who in a business may configure what (role matrix), the data lifecycle of configuration records, and which differences are configuration versus product change (test in [document 5](05-Cross-Context-Consistency-and-Variation.md)).
