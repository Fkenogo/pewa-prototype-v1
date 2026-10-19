# PEWA-S4-A05 — Discovery, Content and Media Architecture

**Status:** DRAFT — FOUNDER REVIEW; NOT APPROVED  
**Date:** 18 October 2026  
**Authority:** Stage 3 closed baseline and approved A01–A04, including independent web, language freedom, organic/paid distinction and protected-context fail-closed access.  
**Boundary:** Logical content, projection, discovery and media architecture. Does **not** select search engine, object storage, image processor, cloud vendor, pricing, paid impression measurement rules or implementation.

## 1. Architectural position proposed

PEWA has one merchant-controlled authoritative content catalogue with purpose-specific published views: direct public menus, eligible Home/Directory discovery, sponsored placements, and permission-gated restricted menus. **Publication is not identical to search indexing**, and content being stored does not mean it is visible. Merchant declaration remains authoritative on food identity, ingredients, prices and availability; PEWA may enforce structural rules without inventing claims.

Customers can discover menus and items by **business and menu names, categories, food/item descriptions, geography/service area and food type**, while business-authored descriptions may be in English, French, Kirundi, Kinyarwanda, Swahili or any other language. English-first PEWA navigation does not force translated menu entries or a fixed taxonomy. Optional category/reference mappings aid discovery only.

## 2. Visibility/eligibility dimensions — do not collapse into one status

| Dimension | Meaning | Controls |
|---|---|---|
| Content lifecycle | Draft, published version, withdrawn or archived business document | Merchant with publish permission |
| Audience scope | Public versus explicitly eligible protected context, e.g. hotel guest | Merchant configuration plus PEWA authorisation |
| Base subscription eligibility | Whether paid menu listing is within active subscription / governed grace | PEWA commercial rules |
| Business/context availability | Merchant-provided service schedules and explicit overrides | Merchant |
| New structured-order enablement | Whether orders are enabled and consumption admission allowed | Merchant setting + PEWA consumption rules |
| Organic discovery eligibility | Whether a published public menu meets legitimate public inclusion rules | PEWA organic index policy |
| Sponsored eligibility | Whether an independently purchased campaign may feature eligible public content | Campaign/billing eligibility and safeguards |

**Founder-confirmed invariant:** if a business's accepted-order consumption units reach zero while the base subscription remains active, the menu **stays online, directly accessible, eligible for organic Directory/Home discovery and open for manual contact**. Only new structured-order submission becomes unavailable. Show a truthful “ordering unavailable” state, not “menu unavailable” or “business closed.” An order-admission projection must never drive a public-menu deletion.

Protected hotel content cannot become organic or paid-public eligible merely because the merchant has an active subscription.

## 3. Content and publication pipeline

1. **Author:** Business creates/reuses offerings, custom category labels, descriptions, images, modifiers, context-specific price/currency, schedules and availability. The authoritative catalogue retains business wording and item identity without PEWA claiming ingredient knowledge.
2. **Scope:** Link offerings to one or more brands/venues/menus, with explicit approval before material shared-item changes propagate across multiple published contexts.
3. **Publish:** A separately authorised publisher fixes a publishable version and public/protected audience class. A stable public menu link resolves the current **eligible published** representation, not every draft update.
4. **Project:** Produce safe, version-labelled representations for direct public menu, organic search and eligible sponsored placements. A restricted menu is absent from public projection entirely; protected access re-evaluates current eligibility.
5. **Update/withdraw:** Revise/withdraw the authoritative publication and invalidate cached/indexed public material. Fail closed against public exposure if audience status is missing or conflicts. Old submitted order snapshots remain meaningful.
6. **Observe and repair:** Log non-sensitive projection version and propagation outcomes; provide bounded reindex/rollback, not an operator right to change a merchant's food claims.

**Architecture acceptance:** switching an item/menu from public to protected must remove it from all unprotected outputs, including search snippets, suggestions, metadata, image derivatives intended for public access and third-party exposure as far as technically controllable. Exact freshness and invalidation targets require later service-level requirements.

## 4. Discovery and ranking architecture

**Direct menu access** resolves merchant-specific stable links/QR destinations and does not depend on Directory index inclusion. **Home** provides user-controlled recents/favourites plus clearly labelled Featured Offers; personal browsing data stays private. **Directory** supports deliberate organic query discovery across business/menu/item words, category mappings, relevant locality/service area and public eligibility.

- Index merchant-provided language/script as authored; evaluate language-aware tokenisation and normalisation, accent-insensitive matching, spelling/variant support and opt-in translation aids **without fabricating official translations or food/allergen data**.
- Preserve optional custom labels and multiple legitimate business categories; a food item can be found even if it has no governed shared category.
- Separate **business-declared geography/service area** from precise device location permission; public discovery must work without GPS consent.
- Organic relevance and clarity are PEWA product decisions; **paid advertising never purchases organic ranking**.
- Use ranking rules transparent enough to investigate complaints or bias; avoid merchant-visible lists of customer-specific searches, recents or favourites.
- Separate search result evidence for “menu exists/published” from “new structured orders currently enabled”; zero consumption does not remove an otherwise eligible listing.
- Sponsored units on Home may reference only intentionally public, currently eligible business content and carry unmistakable sponsorship labelling.

## 5. Media capability architecture

### Media roles
Merchant images can cover brand identities, venue/menu covers, individual offerings and qualifying sponsored creatives. Media references must belong to an authorised business context; media may have different permitted audiences than the merchant itself. Images are **optional** and must not be required for menu publication.

### Media lifecycle and trust requirements
- **Founder clarification (18 October 2026):** the uploading business is presumed to hold the necessary rights or permissions for images it uploads and is responsible for the images and other content it publishes in its menus. PEWA does not need to independently pre-verify every image's copyright or licence as a routine publication condition. Business upload terms should require rights/permissions and accept responsibility for its content. PEWA retains proportionate reporting, restriction, takedown, repeat-abuse and dispute response capability where required by policy or applicable law; the presumption is not a legal immunity or proof of ownership.
- Uploaded originals, resized/optimised renditions, moderation results and authoritative business-content associations are distinguished; media byte storage is not the menu's source of truth.
- Prefer on-demand or stored derivatives supporting responsive web delivery, mobile bandwidth, predictable cost and suitable formats; do not assume a mandatory service or proprietary transformation endpoint.
- Public assets may use cache/CDN delivery. Private hotel-menu media needs audience-compatible delivery or safe distinct media policy; merely hiding the HTML is insufficient when the image URL remains public.
- Media revocation, deletion/replacement, stale-cache and signed-link handling need explicit treatment. Future legal retention/copyright/takedown duties depend on competent policy.
- Store portable identifiers and asset metadata, allowing an approved later provider switch without rewriting order snapshots or merchant catalogue meaning.
- Assess malicious uploads, metadata leakage (including embedded location), personal information in images, virus scanning/format validation, abuse, resize failures and cost limits.
- **Miledge MV-206 media guidance** must be verified and assessed as a preferred candidate/guideline, not silently treated as compulsory PEWA selection. Cloudflare R2 and Cloudflare Images are **candidates to evaluate**, not selected services. Hosting/provider architecture remains governed by A08.

## 6. Architecture alternatives for search/public reads

| Option | Benefits | Risks/conditions | Proposed position |
|---|---|---|---|
| Source-backed query with modest indexes and a clean public read projection | Operationally economical at early scale; fewer authoritative copies | Need tested multilingual quality, text/geography scale and protected exclusion | **Preferred starting evaluation baseline**, not a selected database |
| Dedicated full-text/geospatial search engine | Sophisticated search, scoring and facets as demand grows | Separate service/cost, eventual consistency, reindexing and privacy leakage risk | Evaluate when data volume, language relevance and product metrics justify |
| Third-party hosted search/content service | Fast feature breadth and managed indexing | Cross-border data control, privacy/cost, coupling and public/private boundary risks | Conditional option only with portability and lawful handling |

Full technology assessment must compare actual traffic, corpus sizes, language samples and customer search expectations rather than selecting a provider by habit.

## 7. Failure and adversarial proofs

| Scenario | Required outcome |
|---|---|
| Business publishes a Kirundi-only menu with custom food categories | Names/items findable under suitable original-language queries without forced English mapping |
| Hotel room-service menu changes from public to protected | No unprotected result, snippet, metadata or image fetch reveals restricted content |
| Subscription active; 200 included units spent, no eligible top-up or new-admission capacity | Direct URL, Home/Directory organic appearance and manual contact persist; **new structured orders disabled** |
| Business updates shared item with different venue-specific pricing | Explicit authorised scope; no retroactive price changes to submitted orders |
| Offer image contains sensitive EXIF metadata | Public derivative strips inappropriate metadata under approved media controls |
| Merchant revokes an offering image | Authorised published references and public derivatives/cache invalidation follow defined propagation policy |
| Business buys Featured Offers | Clearly sponsored eligible placement; no boost to organic rankings |
| Customer declines precise-location permission | Still searches declared local/service-area menus manually |
| Public index is stale during suspension or content withdrawal | Eligibility verification fails closed under defined bounded invalidation behavior |
| Image provider or optional media processing unavailable | Text-based menu remains readable and direct web browse remains functional |

## 8. Founder architecture decisions requested

**A05-FD1:** Approve the explicit visibility/eligibility dimensions and guarantee that zero order units affects **new ordering only**, not active-menu publication, discovery or manual engagement.

**A05-FD2:** Approve merchant-authoritative multilingual content and optional classification/index mappings, with no required translations/ingredient inference.

**A05-FD3:** Approve separate direct, Home, organic Directory, protected and sponsored read projections and fail-closed private-content boundaries.

**A05-FD4:** Approve an economical source-backed/public-projection search baseline for later evaluation, with evidence-based escalation to dedicated search; no product/vendor selected.

**A05-FD5:** Approve the media lifecycle, permission and portability constraints; evaluate Miledge MV-206 candidates in A08, with optional images and protected-media enforcement, without preselecting Cloudflare or other provider.

**A05-FD6:** Carry visibility freshness, indexing relevance tests, image sizes, media costs, copyright and legal retention to later detailed specifications and proper approval gates.

## 9. Handover

A06 formalises ordering/consumption and qualifying paid exposure under concurrency and retries. A07 documents optional notification/WhatsApp dependencies and independent web fallback. A08 assesses hosting, persistence, search, storage and media candidates against these approved constraints, legal/policy gates and Miledge guidance.

**Decision requested:** Approve or amend A05-FD1–FD6. No engineering, service configuration, provider selection, FEF adoption or deployment authority is implied. **Stage 4 IN PROGRESS; Stages 5–6 NOT STARTED.**
