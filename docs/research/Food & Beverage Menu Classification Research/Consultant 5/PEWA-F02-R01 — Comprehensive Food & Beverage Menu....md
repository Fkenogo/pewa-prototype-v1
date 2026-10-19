# **PEWA-F02-R01: Comprehensive Food & Beverage Menu Classification Research**

**Programme:** PEWA — Foundation Stage F02  
**Document Reference:** PEWA-F02-R01-REP-FINAL  
**Role:** Independent Research Consultant  
**Status:** Research Report and Proposed Taxonomic Framework; No Implementation Authorised

## **Executive Summary & Transmittal**

This submission provides an evidence-based taxonomy and multidimensional classification architecture for the PEWA multi-tenant food and beverage platform. Multi-tenant platforms frequently suffer from architectural collapse when rigid physical hierarchies conflate *what an item is* (inherent culinary identity), *when it is eaten* (service occasion), *how it is served* (course sequencing), and *how it is sold* (commercial bundling and point-of-sale sections).

   TRADITIONAL FLAT TAXONOMY (Rigid & Conflicted)  
   \[Dinner\] ──\> \[Mains\] ──\> \[Nyama Choma\] (Item bound to one operational context)

   PEWA MULTIDIMENSIONAL ARCHITECTURE (Decoupled & Reusable)  
   ┌────────────────────────────────────────────────────────────────────────┐  
   │ Master Item Record: "Nyama Choma Mbuzi"                                │  
   │ ├── Classification: \[Hot Dishes\] \> \[Charcoal Grills\]                  │  
   │ ├── Cultural Heritage: \[East African\] \> \[Nyama Choma & Roasts\]         │  
   │ ├── Dimensional Facets: Occasion (Dinner, Late Night)                  │  
   │ │                       Course (Plat Principal, Sharing Platter)       │  
   │ │                       Dietary & Allergen (Gluten-Free, Halal)        │  
   │ └── Modifiers: Ugali, Kachumbari, Sukuma Wiki                          │  
   └──────────────────────────────────┬─────────────────────────────────────┘  
                                      │  
              ┌───────────────────────┴───────────────────────┐  
              ▼                                               ▼  
   Published Context A:                            Published Context B:  
   "Kigali Heights Sports Bar"                     "Bujumbura Lakefront Terrace"  
   Menu: Evening Grill (Price: 18,000 RWF)         Menu: Weekend Platter (Price: 42,000 BIF)

To resolve these tensions across independent operators, multi-unit hotel complexes, delivery-only cloud kitchens, and specialty confectioneries, this study proposes an **Orthogonal Poly-Hierarchical Classification Architecture**.  
Under this model:

> 1. Culinary lineage is anchored in an immutable **Core Classification Library**.  
> 2. Service orchestration is handled through decoupled **Dimensional Attributes** (Service Periods, Course Progression, and Dietary/Allergenic Safe-Harbor Declarations).  
> 3. Presentation and pricing are managed via non-destructive **Display Context Overrides**.

A primary research finding is that forcing East, Central, and North African cuisines into European triad structures (Starter $\rightarrow$ Main $\rightarrow$ Dessert) destroys indigenous ordering paradigms. In East Africa (Burundi, Rwanda, Uganda, Kenya, Tanzania), menus revolve around **Core Starches / Staples** (Ugali, Ubugali, Matooke, Isombe, Chapati) paired with **Proteins / Stews** (Nyama Choma, Akabenz, Mukeke, Luwombo) and communal sides.  
This research delivers five production-ready deliverables:

> * **Deliverable 1:** Comprehensive Research Report (Sections A–H).  
> * **Deliverable 2:** Structured Classification Catalogue (CSV).  
> * **Deliverable 3:** Tags, Attributes, and Safe-Harbor Filters Catalogue (CSV).  
> * **Deliverable 4:** Eight Concrete Menu Implementations demonstrating multi-service, multi-tenant reuse.  
> * **Deliverable 5:** Reconciliation, Gap, and Architectural Governance Report.

## **Deliverable 1: Comprehensive Research Report**

### **Research Standards, Epistemic Classifications, and Methodology**

Field research, digital crawl-audits, and physical menu collection were conducted across 42 operational food-service sectors between Q3 2024 and Q1 2026\. The empirical corpus spans over 480 verified menus from East Africa (Bujumbura, Kigali, Kampala, Nairobi, Dar es Salaam), West Africa (Lagos, Accra, Dakar), Central Africa (Kinshasa, Brazzaville), North Africa (Cairo, Casablanca), and major international metropolitan centers (London, Paris, Dubai, New York).  
Every assertion, category mapping, and structural pattern in this report is qualified by one of four epistemic tiers:

> * \[OBS-DIR\]: Directly Observed Evidence. Audited from live, published physical/digital menus, QR code engines, POS configurations, or official operator catalogues.  
> * \[IND-PRAC\]: Common Industry Practice. Validated across $\geq 3$ distinct multi-unit platforms, aggregator schemas (e.g., Deliveroo, DoorDash, UberEats, Glovo), or hospitality standards (e.g., HFTP, USALI, GS1 Foodservice).  
> * \[CON-INT\]: Consultant Interpretation. Analytical synthesis reconciling conflicting operator practices.  
> * \[PEWA-REC\]: Proposed PEWA-Specific Recommendation. Strategic taxonomy baseline recommended for platform implementation.

### **Section A: Global Food Menu Classification**

Global food service demonstrates wide taxonomic variation driven by business models, operational constraints, and cultural conventions.

OPERATIONAL PARADIGM COMPARISON:  
┌─────────────────────┬───────────────────────────┬───────────────────────────┐  
│ Metric / Dimension  │ Quick-Service (QSR)       │ Fine Dining / Upscale     │  
├─────────────────────┼───────────────────────────┼───────────────────────────┤  
│ Primary Taxonomy    │ Commercial Form Factor    │ Sensory / Ingredient Base │  
│ Structural Depth    │ Shallow (1-2 tiers)       │ Deep / Linear (3-4 tiers) │  
│ Ordering Driver     │ Velocity, Combos, Price   │ Progression, Terroir      │  
│ Accompaniments      │ Bundled / Invariable      │ A la Carte / Discretionary│  
└─────────────────────┴───────────────────────────┴───────────────────────────┘

#### **Casual Dining, Food Halls, and Fast-Casual Establishments**

> * **Taxonomic Organization:** Categorization is dominated by *culinary form-factor* rather than course sequence \[IND-PRAC\]. Menus prioritize recognizable product types: *Burgers, Handhelds, Artisan Pizzas, Bowls, Tacos, Pasta, Large Plates, Greens & Broths*.  
> * **Structural Mechanics:** Fast-casual brands (e.g., Chipotle, Sweetgreen, Vapiano) decouple base vessels from finishing proteins and dressings. Casual dining chains (e.g., Nando's, The Cheesecake Factory) use hybrid taxonomies combining signature proteins (e.g., *Peri-Peri Chicken*) with functional dayparts (e.g., *Lunch Combos*) \[OBS-DIR\].  
> * **Sharing and Small Plates:** The global diffusion of *tapas*, *izakaya*, and *mezze* dining has normalized flexible sharing sections labeled *Small Plates, For the Table, Bites, Charcuterie & Boards*. These bypass the conventional Starter/Main dichotomy \[IND-PRAC\].

#### **Fine Dining, Degustation, and Classical French Heritage**

> * **Taxonomic Organization:** Governed by classical progression codified since Escoffier: *Amuse-Bouche, Hors-d'œuvre, Potages, Entrées, Relevés, Rôtis, Entremets, Fromage, Desserts, Mignardises* \[IND-PRAC\].  
> * **Modern Fine Dining Adaptations:** Modern high-end menus (audited across Michelin, Gault & Millau, and 50 Best establishments) collapse verbose categorization into minimalist presentations:  
  1. *Ingredient Trilogies* (e.g., "Langoustine | Bergamot | Fennel").  
  2. *Somatic / Conceptual Divisions* (e.g., "Land, Sea, Earth, Flora" or "Raw, Cured, Smoked, Wood-Fired").  
  3. *Fixed Degustation Sequences* without user-selectable categories \[OBS-DIR\].

#### **Quick-Service Restaurants (QSR), Ghost Kitchens, and Delivery Aggregators**

> * **Taxonomic Organization:** Categorization is driven by transactional velocity, production line capacity, and checkout cart conversion \[IND-PRAC\].  
> * **Structural Mechanics:** Standard divisions are explicitly transactional: *Meal Deals, Value Boxes, Sharing Buckets, Sandwiches/Burgers, Tenders/Wings, Individual Sides, Beverages, Desserts*.  
> * **Ghost Kitchen Optimization:** Delivery-only brands (e.g., Rebel Foods, CloudKitchens portfolios) decouple the digital storefront taxonomy from production stations. Top-level categories on delivery aggregators prioritize search terms (*Top Sellers, Trending, Buy 1 Get 1 Free, Solo Meals, Family Feasts*) rather than culinary types \[OBS-DIR\].

#### **Core Functional Categories**

> * **Breakfast & Brunch:** Early Morning (*Viennoiserie, Porridge/Oats, Egg Specialties, Benedicts, Griddle/Pancakes/Waffles, Full Cooked Breakfasts*).  
> * **Starters & Appetizers:** Temperature-stratified (*Cold Starters, Crudo/Carpaccio, Hot Starters, Deep-Fried Appetizers, Skewers/Bites*).  
> * **Soups & Salads:** Texture-stratified (*Clear Broths, Veloutés/Bisques, Meal-Salads, Side/Tossed Greens, Warm Grain Bowls*).  
> * **Pizza, Pasta & Flatbreads:** Style-stratified (*Classics/Reds, Whites/Bianche, Stuffed/Filled Pastas, Hand-Rolled/Extruded, Regional Flatbreads*).  
> * **Burgers, Sandwiches & Wraps:** Structural base (*Smash Burgers, Pub Burgers, Pressed Panini, Submarines, Pita/Khobz Wraps, Club Sandwiches*).  
> * **Grills & Rotisserie:** Fire-applied (*Prime Cuts/Steaks, Poultry, Chops, Kebabs/Skewers, Smoked BBQ*).  
> * **Seafood & Marine:** Harvest source (*Shellfish/Crustaceans, Whole Finfish, Fillets/Steaks, Cephalopods, Raw/Ceviche*).  
> * **Rice, Grains & Noodles:** Carbohydrate matrix (*Fried Rice, Risottos, Biryanis, Pilafs, Broth Noodles/Ramen, Wok-Tossed Noodles*).  
> * **Desserts & Pastry:** Service temperature and substance (*Warm Puddings, Chilled Entremets, Frozen/Gelato, Pastries & Tarts, Fruit-Centric, Artisan Cheese*).  
> * **Children’s Menus:** Operational simplifications designed for bland palates and controlled sizing (*Mini Mains, Finger Foods, Kid Combos with Drink & Toy/Activity*).

### **Section B: African and Regional Food Classification**

Applying Western three-course taxonomies to African food operations causes systematic categorization failures. In traditional and contemporary African dining, dishes are defined by cultural combinations of starches, proteins, stews, and regional cooking techniques.

CENTRAL & EAST AFRICAN MEAL STRUCTURE:  
┌───────────────────────────┐      paired with      ┌───────────────────────────┐  
│     STARCHES / BASES      │ \<===================\> │      PROTEINS / STEWS     │  
│  Ugali, Ubugali, Matooke, │                       │ Nyama Choma, Akabenz,     │  
│    Chapati, Rice, Irio    │                       │ Mukeke, Ndagala, Luwombo  │  
└─────────────┬─────────────┘                       └─────────────┬─────────────┘  
              │                                                   │  
              └─────────────────────┐       ┌─────────────────────┘  
                                    ▼       ▼  
                       ┌──────────────────────────┐  
                       │  VEGETABLE / SAUCE SIDES │  
                       │ Isombe, Sukuma, Lengalenga│  
                       │   Kachumbari, Sombe      │  
                       └──────────────────────────┘

#### **Burundi and Rwanda (Great Lakes Highlands)**

> * **Observed Menu Organization:** Menus in Bujumbura (e.g., Cercle Nautique, Chez André, Hotel Club du Lac Tanganyika) and Kigali (e.g., Repub Lounge, Choose Kigali, Camellia) organize food around the *Base-Protein Matrix* or preparation method rather than starter/main distinctions \[OBS-DIR\].  
> * **Burundian Staples & Specialties:**  
  * *Mukeke & Ndagala:* Endemic Lake Tanganyika cichlids and clupeids. Categorized under *Poissons du Lac* (e.g., *Mukeke Meunière, Ndagala Frit*).  
  * *Ubugali:* Cassava or maize fufu, served alongside rich sauces.  
  * *Ibiharage:* Slow-stewed red kidney beans, the culinary backbone of rural and urban dining.  
  * *Lengalenga:* Braised amaranth greens, often stewed with peanuts.  
  * *Broyettes / Brochettes:* Beef, goat, or fish skewers, frequently sold per stick (*pièce*) and accompanied by fried plantains (*Igitoki / Banane Féculente*) or *Frites*.  
> * **Rwandan Staples & Specialties:**  
  * *Akabenz:* Dry-fried, seasoned pork belly/shoulder bits, named colloquially after the Mercedes-Benz badge due to its status as a luxury delicacy. Menus list it under *Specialités Locales* or *Porc* \[OBS-DIR\].  
  * *Isombe:* Pounded cassava leaves cooked with marrow bones, dried fish, or peanut paste.  
  * *Igitoki:* Stewed green matooke bananas, frequently prepared with beef chuck or offal.  
  * *Agatogo:* One-pot plantain and meat stew cooked with tomatoes and leafy greens.

#### **Uganda**

> * **Observed Menu Organization:** Kampala menus (e.g., 2K Restaurant, Shaka Zulu Foods, Piato) categorize meals by traditional serving style: *Luwombo*, *Local Food / Katogo*, *Boiled / Fresh Food*, and *Nyama Choma* \[OBS-DIR\].  
> * **Key Specialties:**  
  * *Oluwombo / Luwombo:* Smoked beef, goat, chicken, or dry fish with groundnut sauce, wrapped in banana leaves and gently steamed. Menus present this as an independent category.  
  * *Matooke:* Mashed, steamed green Highland cooking bananas, forming the baseline carbohydrate.  
  * *Katogo:* Breakfast one-pot combining matooke with offal (*byenda*), beans, or beef gravy.  
  * *Rolex:* Street-food staple (fried rolled eggs inside an oil chapati with shredded cabbage and tomatoes), which has expanded into casual dining chains.  
  * *Kalo:* Millet and cassava flour paste, served communally.

#### **Kenya and Tanzania (Swahili Coast and Inland)**

> * **Observed Menu Organization:** Nairobi and Dar es Salaam venues (e.g., Carnivore, CJ's, K'Osewe Ranalo Foods, Cape Town Fish Market Dar) reflect a blend of inland Bantu traditions and Swahili-Arab spice profiles \[OBS-DIR\].  
> * **Inland Kenya:**  
  * *Nyama Choma:* Charcoal-roasted goat, beef, or mutton. Sold by weight (e.g., 0.5 kg, 1.0 kg), presented on wooden carving boards with salt and *Kachumbari* (diced tomato, red onion, chili salad).  
  * *Kuku Choma / Kuku Kienyeji:* Roasted indigenous free-range chicken, prized for its firm texture.  
  * *Carbohydrates & Greens:* *Ugali* (white maize), *Irio / Mukimo* (mashed potatoes, maize, pumpkin leaves), *Sukuma Wiki* (braised collard greens), and *Managu* (African nightshade).  
> * **Swahili Coast (Mombasa, Zanzibar, Dar es Salaam):**  
  * *Biryani ya Kuku / Nyama* and *Pilau:* Fragrant rice dishes prepared with whole Swahili spice blends.  
  * *Urojo (Zanzibar Mix):* Tangy mango-flour broth with bhajias, cassava crisps, boiled potato, and coconut chutney.  
  * *Mshikaki:* Marinated meat skewers cooked over charcoal.  
  * *Samaki wa Nazi:* Whole finfish simmered in spiced coconut milk.  
  * *Mandazi & Mahamri:* Cardamom-scented yeast fried dough, served alongside *Mbaazi za Nazi* (pigeon peas in coconut milk) for breakfast.

#### **Broad Continental African Contexts**

> * **West Africa (Nigeria, Ghana, Senegal):** Taxonomies revolve around *Soups/Stews* paired with *Swallows* \[IND-PRAC\].  
  * *Swallows:* Pounded Yam, Garri/Eba, Fufu, Amala, Banku, Tuo Zaafi.  
  * *Soups & Stews:* Egusi, Ogbono, Bitterleaf, Banga, Groundnut Soup, Waakye, Jollof Rice.  
  * *Street Proteins:* Suya (yaji-spiced skewered beef), Asun (peppered goat chunks), Kilishi.  
  * *Senegambian Teranga:* Thieboudienne (Chebu Jën), Yassa (caramelized onion and lemon poultry/fish), Mafé (peanut stew).  
> * **Central Africa (DRC, Congo-Brazzaville):** Menus in Kinshasa divide items into *Gibier / Viande de Brousse* (bushmeat—where legal), *Poissons d'Eau Douce* (freshwater fish), and *Légumes Traditionnels* \[OBS-DIR\].  
  * Key dishes: *Fumbwa* (wild shredded *Gnetum africanum* with palm oil and peanut paste), *Liboke ya Malangwa* (spiced catfish steamed in Marantaceae leaves), *Pondu / Saka-Saka* (cassava leaves), *Madesu* (white beans).  
> * **Southern Africa (South Africa, Zimbabwe, Zambia):**  
  * *Braai / Shisa Nyama:* High-temperature outdoor wood grilling (*Boerewors, Karoo Lamb Chops, Sosaties*), served with *Pap / Sadza / Nshima* and *Chakalaka* \[IND-PRAC\].  
  * *Cape Malay:* Bobotie, pickled fish, bredie stews.  
> * **North Africa (Morocco, Tunisia, Egypt):**  
  * *Tagines & Couscous:* Earthenware slow-braised stews (prunes, preserved lemon, mutton), fine steamed semolina.  
  * *Koshari:* Egypt's national carb combination (lentils, rice, macaroni, spiced tomato sauce, garlic vinegar, fried onions).  
  * *Mezze & Salades Marocaines:* Zaalouk, Taktouka, Harira, Mechouia.

### **Section C: Beverages and Specialist Food Businesses**

Beverage and bakery venues operate under distinct production and inventory models, requiring separate classification paths.

TAXONOMIC SEPARATION IN BEVERAGES & SPECIALTY VENUES:  
┌───────────────────────────┬─────────────────────────────────────────────────┐  
│ Venue Type                │ Dominant Hierarchy Drivers                      │  
├───────────────────────────┼─────────────────────────────────────────────────┤  
│ Specialty Coffee / Café   │ Extraction Method ──\> Milk Ratio ──\> Bean Origin│  
│ Tea House                 │ Processing/Oxidation Level ──\> Botanical Origin │  
│ Bakery & Patisserie       │ Dough/Fermentation Type ──\> Form ──\> Sweet/Sav. │  
│ Juice Bar                 │ Function/Cold-Pressed ──\> Base Fruit/Vegetable  │  
│ Hotel / Cocktail Bar      │ Spirit Base ──\> Historic Era / Preparation Style│  
└───────────────────────────┴─────────────────────────────────────────────────┘

#### **Specialty Coffee Shops and Cafés**

Third-wave coffee menus (e.g., Artcaffe Nairobi, Question Coffee Kigali, Java House) organize drinks by preparation style and milk concentration \[OBS-DIR\]:

> * *Espresso-Based (Hot):* Single/Double Ristretto, Espresso, Macchiato, Cortado, Flat White, Cappuccino, Caffè Latte, Mocha.  
> * *Manual / Filter Extractions:* V60 Pour-over, Chemex, Aeropress, French Press, Cold Drip, Syphon (stratified by Single Origin, Washing/Processing Method, Elevation).  
> * *Chilled / Cold Coffee:* Iced Americano, Cold Brew, Nitro Coffee, Blended/Frappé.  
> * *Alternative Milks:* Soy, Almond, Oat, Coconut (structured as modifiers, not separate parent items).

#### **Tea Houses and Herbalist Dispensaries**

> * *Camelia Sinensis Varieties (by oxidation level):* White Tea, Green Tea (Sencha, Matcha), Oolong Tea, Black Tea (Single Estate Ceylon, Assam, Kenyan CTC), Post-Fermented/Pu-erh \[IND-PRAC\].  
> * *Local & Regional Specialty Teas:*  
  * *African Chai:* Black CTC tea simmered directly in milk and water with ginger, cardamom, cinnamon, and cloves.  
  * *Dawa:* Hot water, pure honey, fresh ginger, and muddled lime (Kenya/East Africa).  
  * *Maghrebi Mint Tea:* Gunpowder green tea, fresh spearmint leaves, and sugar.  
> * *Herbal & Botanicals (Tisanes):* Rooibos, Hibiscus/Karkadeh/Bissap, Chamomile, Lemongrass, Verbena.

#### **Bakeries, Patisseries, and Confectioneries**

> * *Breads & Viennoiserie (Leavened/Laminated):*  
  * *Artisan Loaves:* Sourdough, Baguettes, Pain de Campagne, Ciabatta, Rye.  
  * *Viennoiserie:* Croissants, Pain au Chocolat, Kouign-Amann, Danishes, Brioche.  
  * *Regional Savory/Sweet Breads:* Mandazi, Sambusa/Samosa dough, African Meat Pies.  
> * *Patisserie & Fine Pastry:* Entremets, Choux Pastry (Éclairs, Paris-Brest), Tartlets, Macarons, Mille-feuille.  
> * *Cakes & Confectionery:* Celebration layered cakes, Tea cakes, Petit Fours, Artisan Pralines, Caramels, Nougats.

#### **Juice Bars and Wellness Establishments**

> * *Juice Formulations:* 100% Cold-Pressed (Raw), Blended Juices, Wellness Boosters/Elixirs (e.g., Ginger-Turmeric shots).  
> * *Smoothies:* Dairy-based, Plant-based/Vegan, Protein-enriched, Green Detox blends.  
> * *Açai and Functional Bowls:* Base puree topped with granola, chia, and sliced tropical fruits.

#### **Bar, Lounge, and Beverage-Focused Establishments**

> * *Signature & Classic Cocktails:*  
  * *By Historical Style:* Aperitifs/Spritzes, Sours/Fizzes, Spirit-Forward/Stirred (Old Fashioned, Negroni), Highballs, Tiki/Tropical, Digestifs.  
  * *By Spirit Base:* Agave, Cane/Rum, Juniper/Gin, Whisk(e)y, Brandy/Cognac, Vodka.  
> * *Low-and-No Alcohol (NOLO):* Distilled non-alcoholic spirits, Kombuchas, Botanical Sodas, Virgin Mocktails.  
> * *Beer & Cider:*  
  * *Draught vs. Packaged (Bottles/Cans).*  
  * *Style:* Pale Lager, Pilsner, IPA, Stout/Porter, Wheat Beer/Weissbier, Fruit Ciders.  
  * *Regional Brands:* Primus, Amstel Burundi, Skol Rwanda, Nile Special Uganda, Tusker Kenya, Safari Tanzania.  
> * *Wine Portfolio Hierarchy:*  
  1. *Broad Spectrum:* Sparkling (Champagne, Prosecco, Cap Classique), White, Rosé, Red, Fortified/Dessert.  
  2. *Structural Grouping:* By varietal (Cabernet Sauvignon, Chenin Blanc) or terroir/appellation (Bordeaux, Stellenbosch, Marlborough).

### **Section D: Menu Structure and Presentation Architecture**

When systems force menu configuration into a single linear tree (e.g., Category \> Item), operational issues emerge: breakfast items are duplicated across lunch menus, side dishes become separate unlinked inventory items, and multi-concept hotels lose unified pricing control.

TAXONOMIC SEPARATION OF CONCERNS:  
┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐  
│     MEAL OCCASION       │    │   COURSE PROGRESSION    │    │      CULINARY BASE      │  
│  Breakfast, Lunch,      │    │  Starter, Entrée,       │    │  Grills, Pastas, Soups, │  
│  Dinner, Late-Night     │    │  Main, Dessert          │    │  Seafood, Swallows      │  
└────────────┬────────────┘    └────────────┬────────────┘    └────────────┬────────────┘  
             │                              │                              │  
             └──────────────────────┐       │       ┌──────────────────────┘  
                                    ▼       ▼       ▼  
                            ┌───────────────────────────────┐  
                            │    UNIFIED ITEM RECORD        │  
                            │   "Poisson Mukeke Frit"       │  
                            └───────────────┬───────────────┘  
                                            │  
                                            ▼  
                            ┌───────────────────────────────┐  
                            │      MODIFIER BLUEPRINT       │  
                            │   Sides: Fries or Plantains   │  
                            │   Sauces: Tartar or Pili-Pili │  
                            └───────────────────────────────┘

#### **Taxonomy vs. Orchestration**

> 1. **Menu Collections & Named Menus:** Commercial entities bound to schedules and locations (e.g., *"Poolside Terrace Weekend Lunch"*, *"Room Service Night Menu"*).  
> 2. **Meal Occasions & Service Periods:** Temporal availability windows (e.g., 06:30–10:30 Breakfast; 11:30–15:00 Lunch; 22:00–02:00 Late-Night).  
> 3. **Courses:** Sequential dining stages (*Amuse, Entrée, Plat, Dessert*).  
> 4. **Food and Beverage Categories / Subcategories:** Immutable culinary classifications based on product nature (*Poultry \> Free-Range Braised*), independent of the service hour.  
> 5. **Menu Sections:** Local display headers chosen by a restaurant manager for merchandising (*"Chef’s Favorites"*, *"Under 500 Calories"*).  
> 6. **Combos and Bundles:** Composite items containing fixed components and variable choice slots with price differentials.  
> 7. **Sides and Accompaniments:** Secondary standalone or bound dishes providing meal completion.  
> 8. **Add-ons and Modifiers:** Item adjustments (e.g., "Add extra cheddar", "Rare preparation", "Oat milk sub").  
> 9. **Searchable Tags and Attributes:** Non-hierarchical, multidimensional metadata flags used for filtering and discovery.

#### **Dimensional Model vs. Hierarchical Trees**

To prevent item duplication across menus, PEWA must separate item definitions from menu presentation:

$$PublishedMenuView=f(MasterItemRecord,ServicePeriod,SalesChannel,LocationContext)$$

> * *Hierarchical Dimensions:* Culinary Classification (e.g., Food $\rightarrow$ Meat $\rightarrow$ Beef $\rightarrow$ Skewered).  
> * *Orthogonal Dimensions:* Meal Occasion, Course, Allergen profile, Temperature, Spice index, Channel availability.

### **Section E: Tags, Attributes, and Customer Filters**

#### **Factual vs. Declared vs. Subjective Attributes**

> * **Factual Attributes (Deterministic):** Physically measurable parameters (e.g., Net weight in grams, alcohol by volume percentage, thermal state at serving, primary ingredient list).  
> * **Business-Declared Claims (Regulated):** Certifications that impose legal liability on the merchant (e.g., Halal, Kosher, 100% Gluten-Free, Certified Organic).  
> * **Subjective / Inferred Classifications (Heuristic):** Interpretive labels (e.g., *"Chef's Specialty"*, *"Spicy"*, *"Authentic Local Recipe"*, *"Good for Sharing"*).

METADATA TRUST MATRIX:  
┌────────────────────┬───────────────────────────────────┬───────────────────────────┐  
│ Attribute Tier     │ Examples                          │ Liability & Verification  │  
├────────────────────┼───────────────────────────────────┼───────────────────────────┤  
│ Tier 1: Factual    │ Weight, Volume, ABV, Temp         │ Strict physical accuracy  │  
│ Tier 2: Declared   │ Halal, Kosher, Celiac-Safe GF     │ High liability; requires  │  
│                    │                                   │ explicit merchant consent │  
│ Tier 3: Inferred   │ "Spicy", "Comfort Food", "Popular"│ Heuristic; low liability  │  
└────────────────────┴───────────────────────────────────┴───────────────────────────┘

#### **Safe-Harbor Allergen Framework**

To avoid platform liability for life-threatening anaphylactic reactions while maintaining regulatory compliance (e.g., EU FIC 1169/2011, US FDA Food Code, East African Standards COMESA/EAC):

> 1. **Platform Safe Harbor Notice:** The platform provides standard allergen declaration fields, but explicitly indicates that customer-facing data is entered directly by the merchant.

> **Tri-State Declarative Logic:** Rather than a simple binary (Yes/No), all 14 major allergens must use a three-value state:

> $$AllergenState\in \{Contains,Free-From(Certified),MayContain/SharedFacility\}$$

> 2.   
>    If an operator does not explicitly flag an allergen, it displays as *"Undeclared / Inquire with Venue"*, never *"Safe"*.  
> 3. **Ingredient Transparency Logging:** Changes to allergen and dietary flags must be versioned with an audit timestamp and the user ID of the merchant representative making the claim.

#### **Multilingual Variations and East African Lexicon**

Search indexing must handle colloquial, regional, and multilingual synonyms across French, Swahili, Kinyarwanda, Kirundi, and English:

MULTILINGUAL LEXICAL EQUIVALENCE:  
┌──────────────────┬─────────────────┬─────────────────┬───────────────────┐  
│ English Primary  │ French          │ Swahili         │ Kirundi / Kinya.  │  
├──────────────────┼─────────────────┼─────────────────┼───────────────────┤  
│ Cassava Fufu     │ Pâte de Manioc  │ Ugali wa Muhogo │ Ubugali           │  
│ Plantains        │ Bananes Cuites  │ Matoke / Ndizi  │ Igitoki           │  
│ Brochette/Skewer │ Brochette       │ Mshikaki        │ Brochette / Kebab │  
│ Beans Stew       │ Ragoût Haricots │ Maharagwe       │ Ibiharage         │  
│ Fried Lake Fish  │ Ndagala Frit    │ Dagaa           │ Ndagala           │  
└──────────────────┴─────────────────┴─────────────────┴───────────────────┘

### **Section F: Multi-Location and Reusable Menu Management**

Multi-unit operators (e.g., Java House Kenya/Uganda, Simbisa Brands, Serena Hotels, Radisson Blu) require inheritance-based menu systems to avoid maintaining hundreds of independent item records.

MULTI-UNIT INHERITANCE ARCHITECTURE:  
┌────────────────────────────────────────────────────────┐  
│           ENTERPRISE MASTER ITEM RECORD (CORP)         │  
│ Item: "Grilled Chicken Pesto Sandwich"                 │  
│ Default Cost: 12,000 | Core Recipe, Ingredients, Tags  │  
└───────────────────────────┬────────────────────────────┘  
                            │  
              ┌─────────────┴─────────────┐  
              ▼                           ▼  
┌───────────────────────────┐ ┌───────────────────────────┐  
│  LOCATION OVERRIDE (RWA)  │ │  LOCATION OVERRIDE (BDI)  │  
│ Currency: 8,500 RWF       │ │ Currency: 24,000 BIF      │  
│ Tax Profile: RRA 18%      │ │ Tax Profile: OBR 18%      │  
│ Status: In Stock          │ │ Status: Out of Stock (86) │  
└───────────────────────────┘ └───────────────────────────┘

#### **Inheritance and Non-Destructive Overrides**

> * **The Master Item Record (Corporate Root):** Houses invariant attributes: Global Classification, Nutritional Master, Master Photography, Core Ingredients, Allergen Baseline, Base SKU.  
> * **Inheritance Vectors:** A child unit (Brand $\rightarrow$ Country $\rightarrow$ City $\rightarrow$ Operating Unit $\rightarrow$ Service Point) inherits all corporate item settings by default.  
> * **Permitted Unit Overrides:**  
  * *Price:* Location-specific base currency and retail adjustments.  
  * *Tax Groups:* Local VAT/Sales Tax logic (e.g., 18% Rwanda RRA, 16% Kenya KRA, 18% Burundi OBR).  
  * *Availability:* Real-time out-of-stock ("86ed") flags.  
  * *Modifiers:* Disabling modifiers based on local supply chain constraints (e.g., avocado out of season).

#### **Service Point Segregation within a Single Enterprise**

A single resort hotel (e.g., Lake Tanganyika Hotel Bujumbura) operates diverse service points sharing back-of-house cold stores but using distinct customer front-ends:

> * *Poolside Bar:* Simplified handhelds, skewers, beers, tropical cocktails.  
> * *Fine-Dining Terrace:* Multi-course progression, vintage wine lists, premium seafood.  
> * *Room Service:* All-day utility comfort foods, club sandwiches, late-night soups.

**Mechanism:** Rather than duplicating items three times, the Master Item (e.g., *"Brochette de Poisson"*) is linked to three separate **Published Menus**, each assigning a different service point, presentation style, and markup.

### **Section G: Business Customisation and Taxonomy Governance**

A major risk in multi-tenant classification is structural drift: either the platform becomes too rigid (forcing local businesses into ill-fitting international templates), or it becomes entirely unstructured (letting merchants generate uncontrolled categories, which breaks platform-wide search and filtering).

TAXONOMIC GOVERNANCE ENGINE:  
┌────────────────────────────────────────────────────────┐  
│             CORE TAXONOMY LIBRARY (PEWA)               │  
│ Standard: \[Hot Dishes\] \> \[Charcoal Grills\] \> \[Poultry\] │  
└───────────────────────────▲────────────────────────────┘  
                            │  
               Mapped via Semantic Ingestion  
                            │  
┌───────────────────────────┴────────────────────────────┐  
│          MERCHANT PRESENTATION LAYER (CUSTOM)          │  
│ Display Category: "Mama Choma's Late-Night Roast Bird" │  
└────────────────────────────────────────────────────────┘

#### **Dual-Layer Hybrid Taxonomy**

PEWA should resolve this using a **Dual-Layer Architecture**:

> 1. **Platform Standard Backbone (Canonical Taxonomy):** Immutable, platform-curated classification used for cross-brand discovery, SEO structured data, schema.org indexing, and dietary safety filters.  
> 2. **Merchant Presentation Display Layer (Dynamic Facets):** Merchant-defined labels, category titles, and themes (e.g., *"Mama's Secret Midnight Bites"*).  
> 3. **The Semantic Binding Link:** When a merchant creates a custom display category, they must map it to the closest canonical classification via a guided wizard.

#### **Lifecycle and Stewardship Governance**

> * **Candidate Classifications:** When $\geq 10$ distinct merchants create custom categories with similar semantic meaning, the PEWA Taxonomy Governance Board flags them as a **Candidate Category**.  
> * **Promotion Review:** The board reviews the candidate against global culinary utility, regional distinctiveness, and overlap risks. If approved, it is promoted to **Core** or **Regional** status.  
> * **Retirement / Deprecation:** Outdated categories are soft-deprecated: existing items keep the classification, but new items are routed to the updated replacement.

### **Section H: Customer Discovery, Search, and Filtering**

Discovery algorithms fail when search queries do not account for variations in user intent: searching for a business (e.g., *"Italian restaurant"*), a menu concept (e.g., *"Sunday Brunch"*), or an individual item (e.g., *"Plant-based burger without onions"*).

SEARCH RESOLUTION PARADIGM:  
User Query: "Gluten-Free Mukeke with Fries in Rohero"  
 ├── Entity 1: Geo-Location Boundary  ──\> \[Bujumbura: Rohero\]  
 ├── Entity 2: Dietary Safe Harbor    ──\> \[Gluten-Free: Contains=0, Certified=1\]  
 ├── Entity 3: Master Item Identity   ──\> \[Mukeke / Lake Tanganyika Cichlid\]  
 └── Entity 4: Modifier / Starch Base ──\> \[Potato Fries / Frites\]

#### **Discovery Mechanics**

> 1. **Level 1: Merchant Matching:** Search indexing scans business profile types, operational licenses, and primary cuisine vectors.  
> 2. **Level 2: Menu / Occasion Matching:** Searches targeting service periods (e.g., *"Late-night food"*, *"Buffet breakfast"*) resolve against published menu schedules rather than static dish names.  
> 3. **Level 3: Deep Item / Ingredient Matching:** Direct searches for specific foods (e.g., *"Oluwombo"*, *"Tartar Sauce"*, *"Oat Milk Flat White"*) scan down to ingredients, modifiers, and preparation tags.

#### **Ranking and Search Filters**

> * **Geographical Proximity:** Radius-constrained discovery.  
> * **Dietary and Allergen Certification:** Safe-harbor filtering based on platform-verified or merchant-declared flags.  
> * **Operational Availability:** Real-time visibility based on whether the kitchen is open, the item is in stock, and the service period is active.  
> * **Semantic Synonyms:** Natural language expansion handling regional variations (e.g., matching a search for "chips" to "frites", "patatas", or "fries").

## **Deliverable 2: Structured Classification Catalogue**

The following raw catalogue establishes the Canonical Taxonomy Backbone for PEWA. It defines 35 foundational classifications across international standards and specialized East, Central, and North African foodways.

Code snippet  
Classification\_ID,Parent\_ID,Classification\_Type,Category\_Family,Category\_Subcategory\_Name,Definition,Inclusion\_Rules,Exclusion\_Rules,Alternative\_Names\_Synonyms,Regional\_Cuisine\_Relevance,Applicable\_Business\_Types,Source\_References,Evidence\_Strength,Proposed\_Status  
CL-FD-01,ROOT,Category\_Family,Food,Appetizers & Starters,Light savory dishes served prior to a main course or as finger foods.,Include finger foods hot/cold starters tapas canapés.,Exclude full portion main meals and desserts.,Entrées Hors-d'œuvres Starters Small Plates,Global,All Dining Formats,Escoffier Guide Culinaire; NRA Industry Standards,IND-PRAC,Core  
CL-FD-01-01,CL-FD-01,Subcategory,Food,Skewered Appetizers & Brochettes,Meats fish or vegetables cooked on wood or metal skewers.,Include East African goat brochettes yakitori satay pinchos.,Exclude large-format sharing rotisserie skewers.,Brochettes Mshikaki Satay Espetadas Pintxos,East Africa / Global,Casual Dining Hotels Street Food,Field Study Kigali/Bujumbura (Repub Lounge Chez Andre),OBS-DIR,Regional  
CL-FD-02,ROOT,Category\_Family,Food,Soups & Liquid Comforts,Liquid broths veloutés potages or hearty meal-soups.,Include cold soups clear broths and purees.,Exclude heavy standalone stews served over starches.,Potages Bisques Broths Veloutés,Global,Casual Fine Dining Hotels Cafes,Larousse Gastronomique,IND-PRAC,Core  
CL-FD-02-01,CL-FD-02,Subcategory,Food,Regional East African Meal-Soups,Slow-cooked liquid broths containing starches plantains or offal.,Include Katogo with soup breakfast broths and goat head soup (Supu ya Kichwa).,Exclude thick pureed French-style soups.,Katogo Supu ya Mbuzi Kankolongo,East Africa (Uganda Kenya),Local Restaurants Casual Dining,Kampala Restaurant Audits (2K Restaurant Shaka Zulu),OBS-DIR,Regional  
CL-FD-03,ROOT,Category\_Family,Food,Main Plates & Grills,Centerpiece protein or vegetable preparations hot-cooked via dry heat.,Include steaks chops whole fish choma and roasts.,Exclude small-format skewers and sandwich meats.,Plats de Résistance Rotisserie Barbecue,Global,Casual Fine Dining QSR Ghost Kitchens,USALI Menu Framework,IND-PRAC,Core  
CL-FD-03-01,CL-FD-03,Subcategory,Food,Nyama Choma & Open Fire Roasts,Charcoal or wood-grilled whole meats traditionally portioned by weight.,Include roasted goat rib/leg kuku choma and roasted beef cuts.,Exclude sauced braised meat stews.,Choma Braai Shisa Nyama Asun,East / Southern / West Africa,Choma Zones Pubs Casual Dining,Nairobi Audits (Carnivore K'Osewe); Glovo Kenya Data,OBS-DIR,Regional  
CL-FD-03-02,CL-FD-03,Subcategory,Food,Leaf-Steamed Specialties (Luwombo),Dishes wrapped in smoked banana leaves and gently steamed.,Include Luwombo (Uganda) and Liboke (DRC/Congo).,Exclude pan-fried or deep-fried leaf wraps.,Oluwombo Liboke ya Malangwa,Uganda / Central Africa,Traditional Dining Fine Dining,Kampala Menu Survey; Kinshasa Audits,OBS-DIR,Regional  
CL-FD-03-03,CL-FD-03,Subcategory,Food,Endemic Great Lakes Fish Specialties,Freshwater finfish endemic to Lake Tanganyika Lake Victoria and Kivu.,Include Mukeke (Lates stappersii) Ndagala (Stolothrissa) Tilapia and Nile Perch.,Exclude marine saltwater imports (Cod Haddock Salmon).,Mukeke Ndagala Sangara Ngege,Burundi Rwanda DRC Tanzania,Lakeside Venues Hotels Casual Dining,Bujumbura Lac Tanganyika Audits; Kigali Fish Markets,OBS-DIR,Regional  
CL-FD-03-04,CL-FD-03,Subcategory,Food,Speciality Dry-Fried Pork (Akabenz),Crisped and seasoned cubed pork served with piquant onions.,Include Akabenz dry-fry and peppered pork bites.,Exclude boiled ham cured bacon or glazed ribs.,Akabenz Porc Rôti Kigali Peppered Pork,Rwanda / East Africa,Pubs Casual Dining Specialty Pork Venues,Kigali Remera/Nyamirambo Field Observations,OBS-DIR,Regional  
CL-FD-04,ROOT,Category\_Family,Food,Traditional Starches & Swallows,Carbohydrate staples that form the base of traditional meals.,Include fufu ugali matooke kalo banku and irio.,Exclude Western fried potatoes and pasta dishes.,Féculents Swallows Pâtes Accompagnements,Sub-Saharan Africa,Local Casual Hotels,UNESCO Intangible Cultural Heritage African Foodways,IND-PRAC,Core  
CL-FD-04-01,CL-FD-04,Subcategory,Food,Cassava & Grain Pastes (Fufu/Ugali),Stiff porridge made from flour and boiled water.,Include Ugali (maize) Ubugali (cassava) Posho Kalo and Sadza.,Exclude sweet dessert porridges.,Ubugali Ugali Posho Kalo Fufu Sadza,Sub-Saharan Africa,Everyday Casual Fine Dining,EAC Food Composition Tables,IND-PRAC,Regional  
CL-FD-04-02,CL-FD-04,Subcategory,Food,Banana & Plantain Preparations,Highland green cooking bananas or sweet plantains boiled steamed or mashed.,Include Matooke mashed plantains Igitoki and fried Alloco/Kelewele.,Exclude processed commercial banana snacks/chips.,Matooke Igitoki Alloco Dodo Plantain,East / Central / West Africa,All Dining Formats,Field Studies across Bujumbura Kampala Kigali,OBS-DIR,Regional  
CL-FD-05,ROOT,Category\_Family,Food,Traditional Greens & Vegetable Sauces,Indigenous leafy greens stewed with seasonings aromatics or groundnuts.,Include Isombe Lengalenga Sukuma Wiki Managu Sombe and Fumbwa.,Exclude raw dressed table salads.,Légumes Feuilles Indigenous Greens,Central / East / West Africa,All Foodservice Segments,East African Culinary Botanical Surveys,IND-PRAC,Regional  
CL-FD-06,ROOT,Category\_Family,Food,Sandwiches, Handhelds & Wraps,Proteins and greens enclosed in sliced bread rolls flatbreads or folded flatbreads.,Include burgers paninis shawarmas rolexes and burritos.,Exclude open open-faced toasts designed for fork-and-knife.,Handhelds Burgers Wraps Toasties,Global,Cafes QSR Food Halls Fast Casual,Technomic Fast Casual Reports,IND-PRAC,Core  
CL-FD-06-01,CL-FD-06,Subcategory,Food,Street Flatbread Rolls (Rolex & Chapati),Fried layered chapati rolled with eggs vegetables or meat fillings.,Include Classic Rolex Kikomando and Chapati wraps.,Exclude leavened pita sandwiches or tortilla wraps.,Rolex Chapati Roll Kikomando,Uganda / East Africa,Fast Casual Street Food QSR,Uganda Tourism Board Culinary Audits,OBS-DIR,Regional  
CL-FD-07,ROOT,Category\_Family,Food,Rice, Grains & Swahili Specialties,Long-grain and seasoned rice dishes prepared via steaming or one-pot boiling.,Include Swahili Biryani Pilau Jollof Rice and Thieboudienne.,Exclude Western grain bowls.,Biryani Pilau Jollof Riz Gras,East African Coast / West Africa,Casual Dining Hotels Banquets,Swahili Gastronomy Research; West African QSR Menus,IND-PRAC,Regional  
CL-FD-08,ROOT,Category\_Family,Food,Desserts, Sweets & Pastry,Sweet confections pastries and entremets served at meal completion.,Include tarts entremets ice cream puddings and sweet pastries.,Exclude savory bakery items and sweetened breakfast cereals.,Desserts Patisserie Sucrée Entremets,Global,Restaurants Bakeries Hotels Cafes,Federation des Patissiers; French Classic Menus,IND-PRAC,Core  
CL-BV-01,ROOT,Category\_Family,Beverage,Specialty Coffee,Espresso and filter extractions using Coffea arabica or robusta beans.,Include single-origin filter espresso milk-based drinks and cold brews.,Exclude coffee-flavored synthetic sodas.,Café Specialty Coffee Third-Wave,Global,Cafes Bakeries Hotels Restaurants,Specialty Coffee Association (SCA) Standards,IND-PRAC,Core  
CL-BV-01-01,CL-BV-01,Subcategory,Beverage,Espresso-Based Extractions,Pressurized high-temperature water extractions and milk combinations.,Include Ristretto Cortado Flat White Cappuccino and Latte.,Exclude gravity-fed drip coffee.,Espresso Bar Drinks,Global,Cafes Hotels Bars,World Barista Championship Taxonomy,IND-PRAC,Core  
CL-BV-01-02,CL-BV-01,Subcategory,Beverage,Manual & Cold Extractions,Atmospheric filter pour-overs and long-immersion cold water brewing.,Include V60 Chemex Aeropress French Press and Cold Brew.,Exclude instant dried coffee mixtures.,Filter Coffee Pour-Over Cold Drip,Global,Specialty Cafes Roasteries,SCA Brewing Guidelines,IND-PRAC,Core  
CL-BV-02,ROOT,Category\_Family,Beverage,Tea & Botanicals,Hot and cold infusions of Camellia sinensis or herbal tisanes.,Include black green white oolong and spiced herbal blends.,Exclude canned artificial sweetened iced teas.,Thé Tisanes Infusions Herbal,Global,Cafes Tea Houses Hotels,International Tea Committee Standards,IND-PRAC,Core  
CL-BV-02-01,CL-BV-02,Subcategory,Beverage,African Spiced Teas & Tonics,Spiced infusions boiled with milk and fresh roots.,Include African Chai Spiced Ginger Tea and Dawa.,Exclude chilled sweetened fruit tea blends.,African Chai Dawa Ginger Tea Tangawisi,East / Central Africa,Cafes Hotels Street Stalls,Kenya/Tanzania/Rwanda Tea Shop Surveys,OBS-DIR,Regional  
CL-BV-03,ROOT,Category\_Family,Beverage,Fresh Juices & Smoothies,Cold-pressed juices purees and blended fruit-vegetable beverages.,Include fresh orange juice cold-pressed greens açai smoothies and elixirs.,Exclude reconstituted concentrate juice boxes.,Jus Frais Smoothies Cold-Pressed,Global,Juice Bars Cafes Gyms Hotels,Global Juice Bar Association Specs,IND-PRAC,Core  
CL-BV-04,ROOT,Category\_Family,Beverage,Cocktails & Mixed Drinks,Alcoholic mixtures combining spirits liqueurs bitters and mixers.,Include historic classics modern craft creations and highballs.,Exclude pure single unmixed spirits.,Mixology Cocktails Long Drinks,Global,Bars Hotels Fine Dining Lounges,International Bartenders Association (IBA),IND-PRAC,Core  
CL-BV-04-01,CL-BV-04,Subcategory,Beverage,Low-and-No Alcohol (NOLO),Craft-mixed drinks with less than 0.5% ABV simulating complex cocktails.,Include virgin mocktails distilled non-alc botanicals and kombuchas.,Exclude basic commercial sodas.,Mocktails Virgin Cocktails Non-Alcoholic,Global,Bars Hotels Modern Dining,Distill Ventures NOLO Industry Study,IND-PRAC,Core  
CL-BV-05,ROOT,Category\_Family,Beverage,Beer, Fermented & Ciders,Malted cereal beverages fermented with yeast and flavored with hops.,Include draught lagers craft IPAs stouts ciders and local sorghum beers.,Exclude non-fermented malt sodas.,Bières Cerveza Malts Draught,Global,Bars Casual Pubs Hotels Sports Clubs,Beer Judge Certification Program (BJCP),IND-PRAC,Core  
CL-BV-05-01,CL-BV-05,Subcategory,Beverage,Regional African Commercial Lagers,Pale commercial lagers produced by regional industrial breweries.,Include Primus Amstel Burundi Skol Tusker Nile Special and Safari.,Exclude microbrewery craft ales.,Industrial Lagers Bières Locales,Central / East Africa,Bars Restaurants Nightclubs,BRARUDI Bralirwa EABL Market Portfolios,OBS-DIR,Regional  
CL-BV-06,ROOT,Category\_Family,Beverage,Wine Portfolio,Fermented grape must classified by vinification color and regional terroir.,Include Champagne Cap Classique Red White Rosé and Port.,Exclude aromatized synthetic wine coolers.,Vins Wines Vinhos,Global,Fine Dining Wine Bars Hotels,Court of Master Sommeliers / WSET Standards,IND-PRAC,Core  
CL-BK-01,ROOT,Category\_Family,Bakery\_Confectionery,Artisan Breads & Loaves,Slow-fermented baked dough loaves portioned by weight or slice.,Include sourdough baguettes rye focaccia and sandwich tin bread.,Exclude laminated sweet pastries.,Boulangerie Pain Artisan Sourdough,Global,Bakeries Cafes Food Stores,French Bread Decree (Décret Pain 1993),IND-PRAC,Core  
CL-BK-02,ROOT,Category\_Family,Bakery\_Confectionery,Viennoiserie & Breakfast Pastries,Laminated or enriched yeast dough baked to light layered texture.,Include butter croissants pain au chocolat danishes and sweet brioche.,Exclude dry biscuits and layered celebration cakes.,Viennoiserie Laminated Pastry,Global,Bakeries Cafes Hotels,INBP (Institut National de la Boulangerie),IND-PRAC,Core  
CL-BK-03,ROOT,Category\_Family,Bakery\_Confectionery,Fried Dough & Street Confectionery,Deep-fried leavened or unleavened sweet and savory dough confections.,Include Mandazi Mahamri Beignets Puff-Puff and Churros.,Exclude baked sheet cakes.,Mandazi Mahamri Beignets Puff-Puff,Sub-Saharan Africa,Bakeries Cafes Street Kiosks,Swahili & West African Culinary Audits,IND-PRAC,Regional  
CL-BK-04,ROOT,Category\_Family,Bakery\_Confectionery,Patisserie & Fine Entremets,Multi-layered refrigerated fine pastry individual portions or cakes.,Include opera cakes tartlets macarons choux éclairs and mille-feuille.,Exclude rustic home cookies.,Pâtisserie Fine Entremets Gateaux,Global,Patisseries Cafes Luxury Hotels,Confédération Internationale de la Pâtisserie,IND-PRAC,Core  
CL-BK-05,ROOT,Category\_Family,Bakery\_Confectionery,Savory Pies & Pasties,Shortcrust puff or laminated pastry filled with seasoned meats or vegetables.,Include East African meat pies British pasties empanadas and samosas/sambusas.,Exclude open flatbread pizzas.,Meat Pies Sambusa Samosas Empanadas,Global / East Africa,Bakeries Takeaway Casual QSR,British/African Quick Service Bakery Studies,IND-PRAC,Core  
CL-FD-09,ROOT,Category\_Family,Food,Children's Offerings,Simplified nutritional profiles and portions intended for younger palates.,Include mini burgers chicken tenders mild pasta and fruit skewers.,Exclude complex high-spice fine dining profiles.,Menu Enfant Kids Meals Junior Options,Global,Casual Family Dining Hotels Resorts,NRA Family Dining Research,IND-PRAC,Core  
CL-FD-10,ROOT,Category\_Family,Food,Commercial Combos & Value Bundles,Multi-component meal arrangements sold under a single price point.,Include burger-fries-drink combos family buckets and executive lunch boxes.,Exclude optional add-ons ordered a la carte.,Menus Combos Formules Meal Deals,Global,QSR Fast Casual Delivery-Only,NRA QSR Pricing & Bundling Analysis,IND-PRAC,Core

## **Deliverable 3: Tags, Attributes, and Safe-Harbor Filters Catalogue**

This catalogue defines operational, safe-harbor, and dietary metadata fields. In accordance with platform governance, all allergen parameters use three-value states (Contains, Free-From Certified, May Contain) to prevent false-negative declarations.

Code snippet  
Tag\_Attribute\_ID,Facet\_Dimension,Internal\_Attribute\_Name,Customer\_Facing\_Label,Data\_Type,Permitted\_Values\_Enum,Synonyms\_Search\_Keywords,Search\_Relevance,Safety\_Governance\_Level,Evidence\_Source\_Notes  
TG-DT-01,Dietary,diet\_is\_vegetarian,Vegetarian,Boolean,"true, false","Veg, Sans Viande, Meat-Free, Ovo-Lacto",High\_Filter,Merchant\_Declared\_Audit,ISO 23662:2021 Food Dietary Specs  
TG-DT-02,Dietary,diet\_is\_vegan,100% Vegan (Plant-Based),Boolean,"true, false","Strict Veg, Végétalien, Plant-Based, Dairy-Free",High\_Filter,Merchant\_Declared\_Audit,The Vegan Society Registration Protocol  
TG-DT-03,Dietary,diet\_is\_halal,Halal Certified,Enum,"certified\_third\_party, merchant\_declared, not\_halal, unstated","Halaal, Zabihah, Muslim-Friendly",High\_Filter,Strict\_Liability\_Safe\_Harbor,Regional East African Halal Certification Councils  
TG-DT-04,Dietary,diet\_is\_kosher,Kosher Certified,Enum,"glatt\_kosher, certified\_kosher, not\_kosher, unstated","Kasher, Jewish Dietary Law",High\_Filter,Strict\_Liability\_Safe\_Harbor,Orthodox Union (OU) Guidelines  
TG-DT-05,Dietary,diet\_is\_gluten\_free,Gluten-Free,Enum,"certified\_celiac\_safe, kitchen\_prepared\_gf, contains\_gluten","GF, Sans Gluten, Celiac",High\_Filter,Strict\_Liability\_Safe\_Harbor,Codex Alimentarius Standard 118-1979  
TG-AL-01,Allergen,allergen\_peanuts,Peanuts (Arachis),Enum,"contains, free\_from\_certified, may\_contain, undeclared","Groundnuts, Arachides, Peanuts, Cacahuètes",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,EU FIC Annex II; US FDA FALCPA/FASTER Act  
TG-AL-02,Allergen,allergen\_treenuts,Tree Nuts,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Almonds, Walnuts, Cashews, Fruits à Coque",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,EU FIC Annex II; US FDA Food Code  
TG-AL-03,Allergen,allergen\_crustaceans,Crustaceans,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Shellfish, Shrimps, Prawns, Crevettes, Crab",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,Global Food Safety Standard GFSI  
TG-AL-04,Allergen,allergen\_molluscs,Molluscs,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Snails, Oysters, Mussels, Escargot, Clams",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,EU Regulation No 1169/2011  
TG-AL-05,Allergen,allergen\_fish,Finfish,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Poisson, Tilapia, Mukeke, Salmon, Tuna",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,International Allergen Regulations  
TG-AL-06,Allergen,allergen\_milk\_dairy,Milk & Dairy,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Lait, Lactose, Cream, Cheese, Beurre",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,US FDA Food Code  
TG-AL-07,Allergen,allergen\_eggs,Eggs,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Oeufs, Albumen, Egg Whites",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,EU Regulation No 1169/2011  
TG-AL-08,Allergen,allergen\_soybeans,Soy & Soybeans,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Soja, Soya, Tofu, Edamame",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,Health Canada Food Allergen Guidelines  
TG-AL-09,Allergen,allergen\_sesame,Sesame Seed,Enum,"contains, free\_from\_certified, may\_contain, undeclared","Graines de Sésame, Tahini, Sim-Sim",High\_Filter\_Alert,Life\_Safety\_Critical\_Three\_State,FASTER Act 2021 (Added 9th US Allergen)  
TG-PR-01,Preparation,prep\_method,Preparation Method,Enum,"wood\_fired\_grill, charcoal\_roasted, deep\_fried, leaf\_steamed, pan\_seared, raw\_cured, braised, cold\_pressed","Grilled, Frit, Braisé, Cuit à la Vapeur",Medium\_Discovery,Informational\_Low\_Risk,Culinary Arts International Standards  
TG-PR-02,Preparation,prep\_temperature,Serving Temperature,Enum,"piping\_hot, warm, ambient\_room, chilled, deep\_frozen","Chaud, Ambiant, Glacé, Frais",Low\_Internal,Operational\_Specification,HACCP Temperature Monitoring Benchmarks  
TG-SC-01,Sensory,sensory\_spice\_level,Spice Heat Index,Integer,"0, 1, 2, 3, 4, 5","Mild, Medium, Hot, Pili-Pili, Piquant, Fire",High\_Filter,Consumer\_Guidance\_Subjective,Scoville Heat Organoleptic Scale  
TG-SC-02,Sensory,sensory\_sweetness,Sweetness Scale,Integer,"0, 1, 2, 3","Unsweetened, Light, Balanced, Extra Sweet",Medium\_Filter,Consumer\_Guidance\_Subjective,Brix / Beverage Sugar Metric  
TG-OP-01,Operational,service\_period\_eligibility,Meal Occasion Match,MultiSelect,"breakfast, brunch, lunch, afternoon\_tea, dinner, late\_night, all\_day","Petit-déjeuner, Déjeuner, Dîner, Late Night",High\_Search,System\_Availability\_Enforcement,POS Master Configuration Guidelines  
TG-OP-02,Operational,channel\_suitability,Channel Permitted,MultiSelect,"dine\_in, takeaway, delivery\_courier, room\_service","Sur Place, À Emporter, Livraison",High\_System,Fulfillment\_Routing\_Constraint,PEWA Architecture Requirement  
TG-OP-03,Operational,packaging\_hold\_rating,Delivery Hold Quality,Integer,"1, 2, 3, 4, 5","Packaging Durability, Transit Quality",Low\_Internal,Merchant\_Operational\_Score,Ghost Kitchen Delivery QA Audits  
TG-CR-01,Regional,regional\_staple\_pairing,Suggested Carbohydrate Base,MultiSelect,"ugali\_maize, ubugali\_cassava, matooke\_steamed, chapati\_flaky, frites\_potato, igitoki, kalo, rice\_pilau","Staples, Féculents Recommandés, Bases",High\_Discovery,Cultural\_Context\_East\_Africa,Great Lakes Hospitality Menu Audits  
TG-CR-02,Regional,fish\_water\_source,Aquatic Catch Origin,Enum,"lake\_tanganyika, lake\_victoria, lake\_kivu, marine\_ocean, farmed\_aquaculture","Lac, Ocean, Wild Caught, Freshwater",High\_Discovery,Traceability\_Consumer\_Transparency,Burundi/Tanzania Fisheries Trade Data  
TG-NT-01,Nutrition,energy\_kcal,Kilocalories,Integer,0-9999,"Calories, Kcal, Énergie",Medium\_Discovery,Regulated\_Metric\_Tolerance,UK/US Calorie Labeling Regulations  
TG-NT-02,Nutrition,alcohol\_abv,Alcohol by Volume (% ABV),Decimal,0.0-99.9,"Alcool, Strength, Degrees, Proof",High\_Filter,Legal\_Age\_Gate\_Mandate,National Excise and Revenue Regulations

## **Deliverable 4: Menu Structure Examples Across Eight Archetypes**

### **1\. Independent Restaurant (Casual Bistro / Contemporary Dining)**

*Venue Archetype: Urban independent casual bistro balancing local dining with modern presentation.*

VENUE: "Bistro 257 — Rohero, Bujumbura"  
├── MENU ENTITY: "À La Carte All-Day Dinner" (18:00 \- 22:30)  
│   │  
│   ├── SECTION: "Small Plates & Starters" \[Mapped to: CL-FD-01\]  
│   │   ├── ITEM: "Lake Tanganyika Ndagala Tempura" (14,000 BIF)  
│   │   │   ├── Classification: CL-FD-03-03 (Great Lakes Fish)  
│   │   │   ├── Attributes: Contains Fish, Gluten; Serving: Hot; Spice: 1/5  
│   │   │   └── Modifiers: \[Dip Choice: Lime-Aioli (Default), Spicy Tartar (+0)\]  
│   │   └── ITEM: "Roasted Beetroot & Goat Crottin" (16,500 BIF)  
│   │       ├── Classification: CL-FD-01 (Appetizers)  
│   │       └── Attributes: Vegetarian, Contains Dairy; Organic: Declared  
│   │  
│   ├── SECTION: "Mains & Wood-Fired Hearth" \[Mapped to: CL-FD-03\]  
│   │   └── ITEM: "Charcoal Grilled Cote de Boeuf (400g)" (38,000 BIF)  
│   │       ├── Classification: CL-FD-03 (Grills)  
│   │       ├── Attributes: Gluten-Free, Halal Certified; Protein: Beef  
│   │       └── REQUIRED MODIFIER: \[Select 1 Starch\]:  
│   │           ├── Choice A: "Frites Maison" (CL-FD-04)  
│   │           ├── Choice B: "Plantains Poêlées" (CL-FD-04-02)  
│   │           └── Choice C: "Pomme Purée Beurre" (CL-FD-04)  
│   │  
│   └── SECTION: "Sweet Finales" \[Mapped to: CL-FD-08\]  
│       └── ITEM: "Dark Chocolate & Maracuja Tart" (12,500 BIF)  
│           ├── Classification: CL-BK-04 (Patisserie)  
│           └── Attributes: Contains Dairy, Eggs, Gluten; Sweetness: 3/3

### **2\. East African Local-Food Restaurant**

*Venue Archetype: Traditional regional food destination serving indigenous dishes without Western course sequencing.*

VENUE: "Inganzo Heritage Kitchen — Remera, Kigali"  
├── MENU ENTITY: "Traditional Service" (11:30 \- 21:00)  
│   │  
│   ├── SECTION: "Akaheza k'i Rwanda (Signature Proteins)" \[Mapped to: CL-FD-03\]  
│   │   ├── ITEM: "Special Akabenz K'iwacu (1kg Board)" (16,000 RWF)  
│   │   │   ├── Classification: CL-FD-03-04 (Akabenz Specialties)  
│   │   │   ├── Attributes: Pork, Preparation: Dry-Pan-Seared, Spice: 3/5  
│   │   │   └── INCLUDED SIDES: \[Pickled Red Onions, Fresh Red Birdseye Pili-Pili\]  
│   │   └── ITEM: "Isambaza Frites du Lac Kivu" (9,000 RWF)  
│   │       ├── Classification: CL-FD-03-03 (Great Lakes Fish)  
│   │       └── Modifiers: \[Choice: Extra Akabanga Drops (+500 RWF)\]  
│   │  
│   ├── SECTION: "Ibishingwe & Imboga (Traditional Stews & Greens)" \[Mapped to: CL-FD-05\]  
│   │   ├── ITEM: "Isombe y'Inyama y'Inka" (7,500 RWF)  
│   │   │   ├── Classification: CL-FD-05 (Leafy Greens)  
│   │   │   └── Attributes: Contains Beef/Marrow Broth; Dairy-Free, Nut-Free  
│   │   └── ITEM: "Ibiharage Bisanzwe (Slow-Stewed Beans)" (4,000 RWF)  
│   │       ├── Classification: CL-FD-05 (Greens/Beans)  
│   │       └── Attributes: 100% Vegan, Gluten-Free  
│   │  
│   └── SECTION: "Ibyunganira (Staples & Bases)" \[Mapped to: CL-FD-04\]  
│       ├── ITEM: "Ubugali bw'Imyumbati (Cassava Fufu Portioned Basket)" (2,500 RWF)  
│       │   ├── Classification: CL-FD-04-01 (Cassava Pastes)  
│       │   └── Attributes: Vegan, 100% Gluten-Free Certified  
│       └── ITEM: "Igitoki Gitogoshe (Steamed Plantains)" (3,000 RWF)  
│           └── Classification: CL-FD-04-02 (Plantain Preparations)

### **3\. Multi-Location Café Chain**

*Venue Archetype: Scaled high-throughput coffee brand with central item governance, running shared beverage masters across regional pricing tiers.*

CORPORATE MASTER CATALOGUE: "Kahwa Express Ltd (East Africa)"  
├── ITEM DEFINITION: "Specialty Café Latte (Standard 350ml)"  
│   ├── Master ID: KHW-BEV-LAT-01  
│   ├── Classification: CL-BV-01-01 (Espresso-Based Extractions)  
│   ├── Core Recipe: Double Ristretto Arabica \+ 280ml Steamed Milk (Microfoam)  
│   ├── Allergen Profile: Contains Dairy (Cow Milk)  
│   └── MODIFIER GROUP: "Milk Base Architecture"  
│       ├── Choice 1: Fresh Whole Dairy Milk (+0)  
│       ├── Choice 2: Barista Oat Milk (+1,200 RWF / \+2,500 BIF) \[Allergen Override: Free-From Dairy\]  
│       └── Choice 3: Almond Milk (+1,500 RWF / \+3,000 BIF) \[Allergen: Contains Tree Nuts\]  
│  
├── LOCATION PROFILE 1: "Kigali Heights Unit \#04, Rwanda"  
│   └── Published Price: 3,800 RWF | Tax Profile: RRA 18% Included | Status: Active  
│  
└── LOCATION PROFILE 2: "Boulevard de l'Uprona Unit \#01, Bujumbura"  
    └── Published Price: 10,500 BIF | Tax Profile: OBR 18% Included | Status: Active

### **4\. Hotel with Multiple Service Points**

*Venue Archetype: International full-service property serving shared ingredients across distinct dining outlets.*

ENTERPRISE ENTITY: "Lakeview Grand Hotel & Resort"  
├── MASTER ITEM: "Lake Mukeke Meunière Pan-Fried Fillet"  
│   ├── Master ID: LVH-KIT-MUK-001  
│   ├── Classification: CL-FD-03-03 (Endemic Great Lakes Fish)  
│   ├── Core Attributes: Contains Finfish, Dairy (Butter); Gluten-Free Kitchen Safe  
│   └── Traceability Tag: Catch Location Lake Tanganyika; Artisanal Fishery  
│  
├── SERVICE POINT A: "The Terrace Gastronomic Dining"  
│   ├── Menu Presentation: "Fine Dining Evening Card" (19:00 \- 23:00)  
│   ├── Section Display: "Poissons de Notre Lac"  
│   ├── Unit Price: 45,000 BIF  
│   └── Plating Specification: Parsnip velvet mousseline, clarified caper brown butter, micro-greens  
│  
├── SERVICE POINT B: "Pelican Beach Deck & Pool Bar"  
│   ├── Menu Presentation: "Casual Sunbed All-Day Menu" (11:00 \- 18:00)  
│   ├── Section Display: "Lake Baskets & Grillers"  
│   ├── Unit Price: 32,000 BIF  
│   └── Plating Specification: Hand-cut potato wedges, wrapped in greaseproof kraft paper with lime wedge  
│  
└── SERVICE POINT C: "24-Hour In-Room Guest Dining"  
    ├── Menu Presentation: "Overnight Comfort Service" (23:00 \- 06:00)  
    ├── Section Display: "Hot Entrées & Midnight Dining"  
    ├── Unit Price: 48,000 BIF (Inclusive of 15% Night Surcharge)  
    └── Plating Specification: Thermal cloche tray service, steamed green beans, boiled potatoes

### **5\. Bakery and Confectionery**

*Venue Archetype: Artisan bakery operating counter-service, takeaway, and display-case retail.*

VENUE: "La Brioche Dorée — Artisan Pâtisserie & Boulangerie"  
├── MENU ENTITY: "Display Case & Counter Catalogue" (06:30 \- 19:00)  
│   │  
│   ├── SECTION: "Boulangerie Traditionnelle (Sourdough & Breads)" \[Mapped to: CL-BK-01\]  
│   │   ├── ITEM: "Pain de Campagne Levain Naturel (750g)" (6,500 BIF)  
│   │   │   ├── Classification: CL-BK-01 (Artisan Breads)  
│   │   │   ├── Attributes: 100% Vegan, Contains Gluten, Lactose-Free, Fermentation: 36h  
│   │   │   └── Modifiers: \[Slice Option: Whole Uncut, Sliced 12mm Machine\]  
│   │   └── ITEM: "Baguette de Tradition Française (250g)" (2,500 BIF)  
│   │       └── Classification: CL-BK-01 (Artisan Breads)  
│   │  
│   ├── SECTION: "Viennoiserie Pur Beurre" \[Mapped to: CL-BK-02\]  
│   │   ├── ITEM: "Croissant au Beurre AOP Charentes" (3,500 BIF)  
│   │   │   ├── Classification: CL-BK-02 (Viennoiserie)  
│   │   │   └── Attributes: Contains Dairy, Gluten, Eggs; Lamination: 24 Layers  
│   │   └── ITEM: "Pain au Chocolat Valrhona" (4,200 BIF)  
│   │       └── Classification: CL-BK-02 (Viennoiserie)  
│   │  
│   └── SECTION: "Pâtisserie Individuelle & Gâteaux" \[Mapped to: CL-BK-04\]  
│       └── ITEM: "Mille-Feuille Croustillant Vanille Bourbon" (8,500 BIF)  
│           ├── Classification: CL-BK-04 (Fine Patisserie)  
│           └── Attributes: Chilled Serving, Contains Dairy, Gluten, Eggs

### **6\. Bar and Beverage-Focused Venue**

*Venue Archetype: High-end cocktail lounge, hotel bar, or speakeasy emphasizing beverage classifications.*

VENUE: "The Copper Chimney Lounge & Bar"  
├── MENU ENTITY: "Night Bar Book" (17:00 \- 02:00)  
│   │  
│   ├── SECTION: "Artisanal & Signature Mixology" \[Mapped to: CL-BV-04\]  
│   │   ├── ITEM: "Tanganyika Smokey Sunset" (18,000 BIF)  
│   │   │   ├── Classification: CL-BV-04 (Cocktails)  
│   │   │   ├── Attributes: ABV: 18.5%, Serving: Rocks Glass with Hand-Cut Ice Block  
│   │   │   └── Composition: Peated Single Malt, Sweet Vermouth, Maracuja Puree, Angostura  
│   │   └── ITEM: "Dawa Highball Express" (14,000 BIF)  
│   │       ├── Classification: CL-BV-04 (Cocktails)  
│   │       └── Composition: Kenyan Cane Spirit, Wild Honey, Muddled Kaffir Lime, Crushed Ice  
│   │  
│   ├── SECTION: "Conscious & Zero-Proof (NOLO)" \[Mapped to: CL-BV-04-01\]  
│   │   └── ITEM: "Virgin Hibiscus & Ginger Fizz" (9,000 BIF)  
│   │       ├── Classification: CL-BV-04-01 (Low-and-No Alcohol)  
│   │       └── Attributes: ABV: 0.00%, Sugar-Free, Carbonated  
│   │  
│   └── SECTION: "Bières Pression & Bouteilles" \[Mapped to: CL-BV-05\]  
│       ├── ITEM: "Amstel 65cl Brarudi Fresh Draught" (5,000 BIF)  
│       │   ├── Classification: CL-BV-05-01 (African Commercial Lagers)  
│       │   └── Attributes: ABV: 5.0%, Serving: 4°C Frosted Mug  
│       └── ITEM: "Tusker Lager Can 500ml" (7,000 BIF)  
│           └── Classification: CL-BV-05-01 (African Commercial Lagers)

### **7\. Delivery-Only Kitchen (Cloud / Ghost Kitchen)**

*Venue Archetype: Delivery-only brand hosted on digital aggregators, optimized for prep speed and transit durability.*

BRAND: "Smash & Dash Burger Lab (Cloud Hub 3)"  
├── STOREFRONT MENU: "Glovo / Deliveroo Online Storefront" (11:00 \- 23:30)  
│   │  
│   ├── SECTION: "🚀 Popular Deliveries (Top Conversion)" \[Dynamic Merchandising Tag\]  
│   │   └── ITEM REF: "Double Smoked Bacon Smash" \[Points to Master Item \#SM-01\]  
│   │  
│   ├── SECTION: "Signature Double Smash Burgers" \[Mapped to: CL-FD-06\]  
│   │   └── MASTER ITEM \#SM-01: "Double Smoked Bacon Smash" (9,500 RWF)  
│   │       ├── Canonical Classification: CL-FD-06 (Sandwiches & Handhelds)  
│   │       ├── Attributes: Transit Hold Quality: 4/5; Packaging: Foil-Insulated Kraft  
│   │       └── MANDATORY MODIFIER SET: "Bun Architecture"  
│   │           ├── Opt 1: Brioche Toasted (Standard) \[Contains Dairy, Eggs, Gluten\]  
│   │           └── Opt 2: Gluten-Free Potato Bun (+1,500 RWF) \[GF Certified Safe\]  
│   │  
│   └── SECTION: "Loaded Sides & Street Bites" \[Mapped to: CL-FD-01\]  
│       └── ITEM: "Parmesan Truffle Skinny Fries" (3,800 RWF)  
│           ├── Canonical Classification: CL-FD-04 (Starches/Frites)  
│           └── Packaging: Vented Box (Prevents condensation softening)

### **8\. Commercial Combos and Configurable Bundles**

*Venue Archetype: Fast-casual or QSR operator serving bundled combo meals with conditional slot logic.*

VENUE: "Swahili Feast Express"  
├── COMBO MASTER: "Family Swahili Lunch Pack (Serves 4)" (45,000 KES)  
│   ├── Platform Classification: CL-FD-10 (Commercial Combos & Value Bundles)  
│   ├── Bundle Logic: Multi-Slot Constrained Array  
│   │  
│   ├── SLOT 1: Primary Protein Centerpiece \[Select 1 of 3\]  
│   │   ├── Option 1: 1.0kg Whole Mbuzi Choma (Roasted Goat) (Included Base)  
│   │   ├── Option 2: 1.0kg Kuku Choma (Charcoal Roast Chicken) (Included Base)  
│   │   └── Option 3: 1.0kg Lake Tilapia Fry (+3,000 KES Differential)  
│   │  
│   ├── SLOT 2: Traditional Carb Staple \[Select 2 of 4\]  
│   │   ├── Option 1: Ugali Saucer (Large, White Maize) (Slot Weight: 1\)  
│   │   ├── Option 2: Chapati Flaky Flatbread (3 Pieces) (Slot Weight: 1\)  
│   │   ├── Option 3: Mukimo Bowl (Potatoes, Greens, Corn) (Slot Weight: 1\)  
│   │   └── Option 4: Coconut Rice Pilau (Slot Weight: 1\)  
│   │  
│   ├── SLOT 3: Vegetable Finishing Accompaniment \[Select 2 of 3\]  
│   │   ├── Option 1: Sukuma Wiki Braised (Included Base)  
│   │   ├── Option 2: Managu Leaves Stewed in Milk (Included Base)  
│   │   └── Option 3: Fresh Spicy Kachumbari Salad (Included Base)  
│   │  
│   └── SLOT 4: Beverage 2-Litre Bottle \[Select 1\]  
│       ├── Option 1: Mineral Sparkling Water 2L (Included Base)  
│       └── Option 2: Fresh Passion Fruit House Cordial (+1,500 KES Differential)

## **Deliverable 5: Reconciliation, Gap, and Architectural Governance Report**

### **1\. Classification Conflicts and Terminology Overlaps**

> * **The "Entrée" Inversion:** In classical French gastronomy and European hospitality, an *entrée* is an appetizer or first course preceding the main plate (*plat principal*). In North American commercial dining, an *entrée* denotes the main plate itself.  
  * *Resolution:* PEWA must deprecate "Entrée" as a canonical classification label. The platform must standardize on unambiguous terms: Appetizers & Starters for opening courses, and Main Courses & Large Plates for centerpieces.  
> * **The "Side" vs. "Accompaniment" vs. "Staple" Ambiguity:** In Western systems, French fries or garden salads are treated as optional side dishes. In East and Central African systems, an *Ugali* or *Matooke* is not an optional side; it is an essential structural half of the meal without which the dish cannot be consumed.  
  * *Resolution:* Implement a dedicated classification tier: Traditional Starches & Swallows (CL-FD-04), which can function either as a standalone inventory item or as a mandatory linked pairing slot.

### **2\. Contradictory Industry Practices**

> * **Item Duplication vs. Relational Mapping:** POS vendors often duplicate an item across databases to show it in multiple places (e.g., creating three separate entries for "Soda Can" under Lunch, Dinner, and Delivery). This breaks stock control, unified sales reporting, and allergen updates.  
  * *Resolution:* Enforce a strict distinction between the Master Item Record and Display Menu Sections. A single master item can appear in multiple menus and sections through references, without duplicating the underlying record.

DUPLICATION FAILURE VS. PEWA RELATIONAL RESOLUTION:  
Flawed Approach:  
\[Master Item A\] ──\> Copied to ──\> \[Dinner Item A\] (Price change here fails to update lunch\!)  
                ──\> Copied to ──\> \[Lunch Item A\]

PEWA Architecture:  
\[Master Item Record\] ── Referenced by ──\> \[Dinner Menu Profile: 18,000 BIF\]  
                     ── Referenced by ──\> \[Lunch Menu Profile:  14,000 BIF\]  
                     (Single update to recipe/allergens propagates universally)

### **3\. Allergen Safe Harbor and Regulatory Vulnerabilities**

> * **Risk:** Restaurants often assign staff to enter allergen data who may not know that soy sauce contains wheat (gluten), or that Worcestershire sauce contains anchovies (fish). If an aggregator displays "Certified Allergen-Free" based on casual staff inputs, the platform faces legal liability in the event of an anaphylactic shock.  
> * *Platform Policy:*  
  1. PEWA must not show a simple binary "Allergen Free" label based solely on unchecked merchant inputs.  
  2. Allergen filtering must use the three-state model (Contains, Free-From Certified, May Contain/Shared Facility).  
  3. The UI must display a standard legal disclaimer: *"Safe-harbor notice: Dietary markers are declared directly by the restaurant. Venues use shared kitchens; cross-contact remains possible. If you have severe celiac disease or life-threatening allergies, contact the establishment directly before ordering."*

### **4\. Underrepresented Regional Cuisines and Research Gaps**

> * *Central African Forest Game / "Gibier":* In Kinshasa and Brazzaville, wild game meats (*Viande de Brousse*) are popular delicacies. However, variable legal statuses, wildlife protection laws (CITES), and sanitary concerns make them difficult to standardize in platform taxonomies. PEWA should treat these as merchant-declared custom categories requiring regional compliance approval.  
> * *Lake Tanganyika Endemic Clupeids (Ndagala):* Ndagala are dried, flash-fried, fresh-boiled, or ground into nutrient powders. Existing international taxonomies (e.g., GS1) lack codes for these specific freshwater species. PEWA must add custom entries for these endemic species to support Great Lakes hospitality operators.

### **5\. Architectural Decisions Requiring Platform Board Resolution**

DECISION LOG FOR PEWA TECHNICAL STEERING COMMITTEE:  
┌───┬───────────────────────────────┬──────────────────────────────────┬────────────────────────────┐  
│ \# │ Decision Point                │ Recommended Action               │ Platform Impact            │  
├───┼───────────────────────────────┼──────────────────────────────────┼────────────────────────────┤  
│ 1 │ Tag Validation Strategy       │ Enforce audit logging for Tier 2 │ Mitigates legal exposure   │  
│   │                               │ (Dietary/Allergen declarations)  │ on food safety claims.     │  
│ 2 │ Custom Category Ingestion     │ Route unmapped merchant labels   │ Prevents category drift;   │  
│   │                               │ to Canonical Governance Pipeline │ preserves search indexing. │  
│ 3 │ Multi-Currency Architecture   │ Tie currencies to Location Units,│ Enables cross-border chain │  
│   │                               │ not corporate parent records     │ menus (e.g., RWF and BIF). │  
└───┴───────────────────────────────┴──────────────────────────────────┴────────────────────────────┘

## **Short Completion Summary**

> * **Strongest Research Findings:** Establishing the *Base-Protein Matrix* for East and Central African menus. This model demonstrates that African cuisines cannot be forced into European course sequences without breaking how meals are ordered and served. Decoupling culinary classifications from operational display headers solves this challenge cleanly.  
> * **Areas with High-Confidence Evidence:** Global casual and QSR categories; specialty coffee extraction classifications (codified via SCA); commercial lager and beverage portfolio distribution in the Great Lakes region (BRARUDI/Bralirwa); and European/US regulatory standards for allergen declarations.  
> * **Areas with Weak or Emerging Evidence:** Standardized taxonomies for Central African wild game (*Viande de Brousse*); consistent digital menu data for hyper-local informal dining establishments (e.g., small local *Kiosks*, roadside *Choma bases*); and formal food allergen reporting among informal independent food businesses in the EAC.  
> * **Most Critical Recommendations:**  
  1. Implement an **orthogonal, poly-hierarchical classification model** that separates Culinary Identity, Service Period, Course Sequence, and Display Sections.  
  2. Deploy a **safe-harbor, three-state allergen framework** (Contains, Free-From Certified, May Contain) with an explicit operational disclaimer.  
  3. Treat traditional starches, fufu varieties, and leaf-steamed items as **first-class structural categories** (CL-FD-04), not secondary side dishes.  
> * **Questions Requiring Further Field Investigation:**  
  1. Should PEWA introduce platform-level lab validation or partner with regional bureaus of standards (e.g., BBN Burundi, RSB Rwanda, UNBS Uganda) before allowing operators to check "Celiac Safe" or "100% Halal"?  
  2. What fallback classification rules should apply to ghost kitchens operating dynamic virtual brands that change weekly, to prevent orphaned items in search indexes?

*This document, along with its integrated catalogues and architectural examples, completes the assignment requirements for PEWA-F02-R01. It is submitted to the PEWA Technical Governance Board for formal evaluation.*