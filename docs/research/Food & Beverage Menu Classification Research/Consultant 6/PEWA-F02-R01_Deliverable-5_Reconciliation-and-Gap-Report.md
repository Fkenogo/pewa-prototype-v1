# PEWA-F02-R01 — Deliverable 5: Reconciliation and Gap Report

Companion to Deliverable 1 (Research Report), Deliverable 2 (Classification Catalogue), Deliverable 3 (Tags and Filters Catalogue) and Deliverable 4 (Menu Structure Examples).

Source references use the `S[n]` convention and resolve against the Source Key sheet included in each workbook and in `PEWA-F02-R01_Source-Key.csv`.

---

## 1. Duplicate and overlapping classifications

Six overlaps were found that would produce duplicate or ambiguous nodes if adopted naively.

| Overlap | Candidates | Resolution recommended | Basis |
| --- | --- | --- | --- |
| Staple sold as a dish vs staple as a base | FAM-05 Starches & Staples vs FAM-06 Stews, Curries & Sauces | Keep separate. The staple is the base, the stew is the liquid component; observed menus sell each as its own priced line | S[19], S[20] |
| Raw relish vs salad | FAM-03 Salads & Greens vs FAM-04 Relishes, Pickles & Accompaniments | Keep separate. Kachumbari is placed in the salad position on one menu and functions as a mandatory accompaniment on another | S[19], S[35] |
| Beans as pulse dish vs beans as sauce | FAM-07 Beans, Pulses & Legumes vs FAM-06 Stews, Curries & Sauces | Keep separate. Ibiharage (beans as principal) and groundnut sauce (pulse as sauce vehicle) are different functions | S[34], S[4] |
| Grilled vs braised vs stew | FAM-08 Grills vs FAM-06 Stews vs FAM-02 Soups | Keep separate. The same observation recurs across all markets: braai in the south, mishikaki in the east, potjiekos as a braised dish | S[23], S[19], S[22] |
| Frozen dessert vs sweet dessert | FAM-28 Ice Cream & Frozen Desserts vs FAM-26 Desserts | Keep separate only if the business distinguishes them; otherwise collapse into FAM-26 with an attribute. Weak evidence, candidate status | S[34] |
| Bakery sweet items vs restaurant desserts | FAM-29 Pastries & Confectionery vs FAM-26 Desserts | Do not force a merge. A bakery's "Sweets" and a restaurant's "Desserts" have different scopes and both are observed in East African use | S[24], S[19], S[35] |

Two further overlaps are recorded as intentional non-merges and should be protected in governance:

- **Pasta (FAM-14) vs Noodles (FAM-15).** Both are starch-based principal dishes and both are usually served with sauce. They are retained separately because businesses and customers treat them as distinct lines and because the Asian noodle dishes observed in East African hotel menus are not pasta in any sense.
- **Grilled (FAM-08) vs Skewers (FAM-09).** Brochettes are grilled. They are retained separately because the skewered form is a distinct structural preparation carrying its own unit of sale (a stick, a portion, a weight) and its own cultural meaning.

---

## 2. Conflicting terminology

Conflicts below are preserved rather than resolved, because resolving them by assertion would misrepresent the evidence.

### 2.1 Same name, different referent (dangerous to merge)

| Term | Divergent meanings observed | Recommended handling |
| --- | --- | --- |
| Koeksister | Afrikans twisted doughnut; Cape Malay spiced braided pastry | Two separate items with a shared search term, never a synonym merge |
| Ugali / ubugali | Maize meal in most sources; cassava-flour dough in at least one source | Region and ingredient scoped, not merged |
| Say "egg" | Omitted from some menus entirely; occasionally used for tomato and onion salad | Low value as a search term; do not rely on it |
| Zobo | Used as a generic label for a prepared African drink; the specific preparation varies by business | Treat as a family label, resolve to a specific preparation where the business can |

### 2.2 Same referent, divergent naming (safe to merge as synonyms)

| Canonical | Variants observed |
| --- | --- |
| Maize staple | Ugali, posho, bugali, ubugali, ubugari, pap, sadza, akume, walla, kimea |
| Brochettes | Brochettes, brochette, mishikaki, mshikaki, mishkaki, brochettes mixtes |
| Plantain | Agatoke (also a place name), renga renga, ilenga lenga, matoke |
| Samosa | Samosa, samosas, samoosa, samsao, samsa, mashal |
| Chapati | Chapati, chapatti, chapati roll |
| Fritter | Mandazi, amandazi, vitumbua, mahambri |
| Sandwich roll | Rollex, egg roll, chapati roll, uvu, wagon |
| Fish stew | Isombe, sombe, nsamba, mungo |

### 2.3 English usages that collide with local usage

| English term | Local usage observed | Risk |
| --- | --- | --- |
| Hotel | "Hoteli" denotes a local eatery in Kiswahili across Kenya, Uganda and Tanzania | A filter for "hotel" food could return local eateries, and vice versa. Requires business-type disambiguation, not a naming change |
| Bar | Used for both a drinking venue and, loosely, for a counter service | Low; resolve with business-type attribute |
| Set | "Set" used for a fixed-price meal, a meal set and a spice level | Medium; disambiguate by attribute |
| Special | Used for daily specials, chef's specials, seasonal specials and promotional items | Medium; three distinct meanings require three separate attributes |
| Cake | Used for a slice, a whole cake and a fried sweet item | Medium |
| Curry | Applied to a wide range of preparations with no shared technique | Low as a search term |

### 2.4 Regional national-dish claims (recorded, not encoded)

Claims were encountered for matoke (Uganda), nyama choma (Kenya), chipsi mayai (Tanzania), brochettes (Rwanda) and bobotie (South Africa). PEWA should not encode any national-dish designation in the library, and should not present one to customers.

---

## 3. Uncertain classifications

| Item | Status | Reason |
| --- | --- | --- |
| Children's meals (FAM-25) | Candidate | Not observed in any East African menu reviewed |
| Waterpipe and tobacco (FAM-40) | Candidate | Common in hospitality venues but no observed menu section was located |
| Kosher (TAG-04) | Candidate | Low relevance in the priority markets; no observed declaration found |
| North African flatbreads and pastries (FAM-R19) | Regional, weak | Dish inventories are strong; observed menu structure is not |
| Central African cuisine | Absent | Not researched to a comparable depth; no classification proposed |
| Energy and nutrition per item (TAG-54) | Optional | Regional nutrition standards attach to prepackaged food; per-item values for served food are voluntary and basis-sensitive |
| Ethiopian and Eritrean injera-based structure | Absent | Relevant to the region but not researched; injera is noted as a synonym only |
| Sri Lankan, Indian and Bangladeshi restaurant menus in East Africa | Absent | Very visible in Nairobi, Kampala and Dar es Salaam but not researched; a significant likely gap in a commercial library |
| Tea house and traditional tea house structures | Absent | Not researched despite spiced teas appearing on observed menus |
| Charity, institutional and staff-canteen menus | Absent | Outside the stated business scope but likely relevant to hotel in-room and staff feeding |

---

## 4. Underrepresented cuisines and markets

Ranked by likely commercial impact on PEWA's priority markets.

1. **Indian, Pakistani, Bangladeshi and Sri Lankan menus.** Ubiquitous in Nairobi, Kampala, Dar es Salaam and Kigali and likely high-volume on any delivery platform. Not researched in this study. This is the single largest catalogue gap.
2. **Ethiopian and Eritrean.** Injera-based menus have a structural logic distinct from the staple-and-sauce model and would require their own families. Not researched.
3. **Congolese, Cameroonian and Angolan.** Central Africa beyond the Great Lakes was not researched.
4. **Nigerian and Ghanaian diaspora menus in the UK and North America.** Partially observed through West African restaurant menus in London and Canada but not researched systematically.
5. **Malagasy, Comorian and Réunion Creole cuisines.** Present in East African metros, not researched.
6. **Southern African beyond South Africa.** Namibia, Botswana and Zimbabwe were not researched beyond the South African evidence.
7. **Burundi menu structure.** Dish evidence is adequate; published menu structure was not located. This is a depth gap rather than an absence, but it sits inside a market the brief weights most heavily.

---

## 5. Weaknesses in the evidence base

**Class quality of sources varies sharply.** Vendor product documentation is reliable about vendor behaviour and silent about best practice. Restaurant menus are direct but transient and self-selected. Menu-design consultancies and bar-menu vendors dominate the search space for bar and buffet structure and were treated as practice only where three or more independent sources converged.

**Two regions rest on thin structure evidence.** North African menu structure rests on a single secondary source describing a conventional sequence. Central Africa is unrepresented.

**No standard exists for the governance questions PEWA must answer.** No external authority governs override authority, versioning, change control or the retirement of shared items. Section 10 of the research report is therefore interpretive in its entirety. The one governance precedent located, a hotel group's mandated core buffet menu with a bounded regional favourite slot [S28], comes from a single branded chain.

**No East African instrument specific to restaurant menu claims was located.** Regional standards address nutrition and health claims for labelling [S6]; none addresses dietary claims made on served menus. The distinction between business-declared and verifiable claims is therefore a PEWA proposal without external precedent.

**Allergen data is the least reliable content in any menu ecosystem.** Observed evidence of data quality failure is concrete: a Rwandan guesthouse menu carries an isombe description against an item named "Fish" [S20], a Ugandan menu prints "Platers to Share" [S21], and a coded multi-letter notation on a hotel menu requires a legend that customers must learn [S35]. PEWA should assume low accuracy at adoption and design the attribute layer to degrade safely.

**Observed menus change without notice.** Every observed menu in this study carries an October 2026 observation date and should be re-verified before being used as a design baseline.

---

## 6. Matters requiring PEWA decisions

Decisions are listed in the order the programme would need to take them.

1. **Adopt the seven-dimension model, or adopt a reduced version.** The recommendation is the full model. A reduced version that merges menu type into menu occasion will work initially and will fail for hotels and multi-service-point businesses.
2. **Decide whether staples are first-class families or subcategories of sides.** This is the single most consequential East African decision. A library that puts staples under sides will be rejected by the businesses it most needs to serve.
3. **Set the default depth cap and whether it varies by channel.** Deliveroo's two-level constraint [S4] and Toast's online-ordering flattening [S2] both argue for a per-channel cap rather than a global one.
4. **Decide how many regional sets ship at launch, and how a business opts into more than one.** Burundi, Rwanda, Uganda, Kenya and Tanzania can plausibly share one East African set with local subcategories; West, Southern and North African sets should not be merged into it.
5. **Set the allergen governance rule.** The minimum defensible position is that no allergen value is published without recorded provenance and a review date, and that the customer interface distinguishes a kitchen declaration from a recipe-derived fact.
6. **Decide whether "Unknown" is a permitted value for allergens.** It should be. Allowing a filter to return only items with confirmed values is a customer-facing trap in a market where many menus carry no allergen data at all.
7. **Set the language model.** Evidence supports at minimum English, French, Kiswahili, Kinyarwanda and Kirundi, with per-language synonyms. PEWA must decide whether synonym records are per-language or per-term.
8. **Decide the change-control authority.** Who may rename, remap, retire or promote a classification, and what the review cadence is. No external precedent exists, so this is a pure design decision.
9. **Decide whether businesses may publish local-only categories.** The recommendation is yes, bounded, parented and reviewable; the alternative is that practice goes underground into display names.
10. **Decide the scope of the first release.** The recommendation is a Core set, a Regional East African set, and a populated Candidate backlog, with the Indian subcontinent and Ethiopian sets commissioned as the next research tranche.

---

## 7. Recommended next research tranche

Ordered by commercial impact.

1. Indian, Pakistani, Bangladeshi and Sri Lankan menus in Nairobi, Kampala, Dar es Salaam and Kigali, with menu structure evidence.
2. Ethiopian and Eritrean injera-based menu structure.
3. Direct fieldwork in Bujumbura to obtain published menu structure.
4. North African menu structure from named venues in Cairo, Marrakech and Tunis.
5. Central African menus in Douala, Kinshasa and Luanda.
6. Chain and franchise governance: named franchise disclosure documents, brand standards and central-versus-local override rules.
7. Tea house and traditional beverage structures in East Africa.

---

## 8. Completion summary

**Strongest research findings.** Menu classification is a set of independent dimensions rather than one taxonomy, evidenced by three incompatible commercial decompositions [S1][S3][S5] and by vendor documentation that separates courses [S2] and categories from menus [S3]. East African menus are organised on a staple-stew-sauce logic that a course-based template cannot represent, evidenced across all four markets where menus were located [S19][S20][S21][S22]. Allergen obligations in PEWA's target markets attach to prepackaged labelling and not to freshly prepared served food [S6][S7][S12], which places PEWA ahead of the regulatory floor and makes the governance burden self-imposed.

**Areas of high-confidence evidence.** Commercial platform structures; the EAC and national labelling frameworks; East African dish inventory and staple-led meal structure; the reuse rule that items are shared while groupings are not; the separation of cuisine as an attribute rather than a category.

**Areas of weak or incomplete evidence.** Burundi menu structure; North African menu structure; Central Africa; bar and buffet category practice; multi-location override authority and versioning; dietary claim rules for East African restaurants; Indian subcontinental and Ethiopian cuisines.

**Most important recommendations.** Adopt the seven-dimension model; make staples first-class families in the East African set; separate the stored record from every published name in every language; assign items at the placement level rather than duplicating them; record provenance on every allergen value; ship the Regional status tier as a visible feature.

**Questions requiring further investigation.** Whether injera and other flatbread-based meal systems need their own structural primitive; whether delivery-platform depth constraints apply uniformly across aggregators in the priority markets; whether the "hoteli" collision between local eatery and hotel is material to discovery behaviour; whether a published price in francs should be compared across markets at all in the same filter.