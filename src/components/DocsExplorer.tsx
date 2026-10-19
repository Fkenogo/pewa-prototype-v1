import React, { useState } from 'react';
import {
  FileText,
  BookOpen,
  CheckCircle,
  Shield,
  Layers,
  Terminal,
  ChevronRight,
  ExternalLink,
  Map,
  Compass,
  AlertCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface DocItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  path: string;
  status: string;
  date: string;
  keyPoints: string[];
  summary: string;
  details?: { heading: string; body: string }[];
}

const docsList: DocItem[] = [
  {
    id: 'product-truth-brief',
    category: 'Deliverable D',
    title: 'Product Truth Comprehension Brief',
    subtitle: 'Core Thesis, Actors, Operating Modes & Non-Negotiable Boundaries (§2 & §12.D)',
    path: 'Brief §2 / docs/01-project-home/PEWA-S2-PD-001.md',
    status: 'FOUNDER ALIGNED',
    date: '19 October 2026',
    keyPoints: [
      'PEWA is NOT the food merchant, kitchen controller, or courier dispatcher.',
      'No food payments, escrow, or commission splits: customers settle food orders directly with the business.',
      'Two coexisting modes: Menu visibility & manual contact (WhatsApp/phone) + optional structured PEWA ordering.',
      'Acceptance consumes exactly 1 unit: only explicit merchant acceptance triggers a consumption event, never submission or decline.',
      '10-Unit Continuity Safeguard: 10 recoverable units allow in-flight orders to complete without abruptly taking menus offline.',
      'Zero arbitrary menu count caps: legitimate organisations can host multiple brands, locations, and menus under one base subscription ($10/mo ceiling).',
    ],
    summary:
      'Executive reconciliation of governing Product Truth across F01–F05 and S1–S6. Clarifies exact merchant sovereignty, customer discovery rights, and platform operational boundaries.',
    details: [
      {
        heading: '1. Product Proposition & Authority',
        body: 'PEWA provides reusable multi-tenant menu publishing, persistent web destinations, discovery, and customer engagement. Food merchants retain 100% pricing and commercial sovereignty.',
      },
      {
        heading: '2. Commercial Entitlement & Continuity Boundaries',
        body: 'Prepaid consumption is usage-driven (~$0.05 / 20 orders per $1). When prepaid credits hit zero, the public menu, direct links, and manual WhatsApp/phone contact remain active. Only new structured in-app order requests pause.',
      },
    ],
  },
  {
    id: 'binding-map',
    category: 'Deliverable D',
    title: 'Product Truth Binding Map',
    subtitle: 'Interaction-to-Clause Governance & Simulation Distinction (§12.D)',
    path: 'Brief §12.D / docs/02-requirements/ & 03-architecture/',
    status: 'SPECIFICATION BINDING',
    date: '19 October 2026',
    keyPoints: [
      'Customer Discovery → Bound to S3-R03 & S4-A05: Organic search relevance is 100% independent of paid promotions.',
      'Manual Engagement → Bound to S3-R04: Direct WhatsApp and phone contact functional without requiring PEWA ordering.',
      'Structured Ordering → Bound to S2-PD-001 §8 & S3-R04: Customer submission is a request, not merchant acceptance. Silence is not acceptance.',
      'Merchant Acceptance & Idempotency → Bound to S2-PD-001 §11 & S4-A06: Exactly one unit consumed upon acceptance; second acceptance attempts deduplicated.',
      'Zero-Units Exhaustion → Bound to S2-PD-001 §11 & S6-PRE-ENG-001 §1: Menus remain online with manual contact; no false "Closed" states.',
      'Hotel Protected Access → Bound to S2-PD-001 §7 & S4-A04: Guest is a customer with hotel-configured room access; protected items excluded from public Directory.',
      'Operator Console → Bound to S3-R08: Platform operator handles disputes and oversight with bounded authority; cannot modify merchant food prices or accept orders.',
    ],
    summary:
      'Defines the normative mapping between every interactive prototype screen and its governing Product Constitution, Stage 3 requirements, and Stage 4 architecture decisions.',
    details: [
      {
        heading: 'Simulated vs Production Truth',
        body: 'All client-side state transitions, unit deduction ledgers, and room authentications operate deterministically on in-memory models. They demonstrate real product behaviour without implementing production PostgreSQL or billing gateways.',
      },
    ],
  },
  {
    id: 'experience-map',
    category: 'Deliverable C',
    title: 'Experience & Persona Map',
    subtitle: 'Roles, Navigation Flows, Mobile-First PWA Journeys (§12.C)',
    path: 'Brief §12.C / docs/05-engineering/PEWA-S6-00A.md',
    status: 'COMPLETE REFERENCE',
    date: '19 October 2026',
    keyPoints: [
      'Customer: Discovers via Home/Directory or direct QR → browses menu → contacts manually via WhatsApp OR submits structured order request → tracks status without registration.',
      'Hotel Guest: Opens hotel menu → enters room number and pass code → unlocks protected 24/7 in-room dining and breakfast trays.',
      'Merchant Owner: Configures organisation, brands, menus, and offerings → sets pricing/availability → reviews orders and consumption ledger → launches sponsored campaigns.',
      'Merchant Staff (Kitchen): Scoped order station view → reviews items → accepts request (1 unit deducted) → declares order Ready.',
      'PEWA Operator: Investigates subscriber cases, consumption disputes, and ensures campaign integrity without interfering with merchant operations.',
    ],
    summary:
      'Comprehensive journey mapping covering mobile PWA and desktop responsive viewport expectations across all primary actors.',
  },
  {
    id: 'founder-review-guide',
    category: 'Deliverable F',
    title: 'Founder Review & Verification Guide',
    subtitle: 'Step-by-Step Test Scenarios for Acceptance Criteria (§11 & §12.F)',
    path: 'Brief §11 & §12.F / S6 Handover',
    status: 'REVIEW READY',
    date: '19 October 2026',
    keyPoints: [
      'Test 1: Use Scenario Engine → Select "New Café Onboarding (§6.C)" → Complete 3-step mobile setup → Verify immediate publication.',
      'Test 2: Switch to Customer role → Open The Daily Grind → Add Single Origin Flat White to cart → Submit request → Verify "Submitted / Awaiting decision" state.',
      'Test 3: Switch to Merchant Console → Accept the order → Verify 1 unit deducted in ledger.',
      'Test 4: Attempt second acceptance on the same order → Verify idempotency error (no duplicate unit consumed).',
      'Test 5: Use Scenario Engine → Select "Critical Zero-Units State (§6.H)" → Open menu → Verify menu and WhatsApp remain ONLINE while structured checkout is paused.',
      'Test 6: Switch to Hotel Guest role → Enter room 408 + code AZURE2026 → Verify protected champagne breakfast tray unlocks.',
    ],
    summary:
      'Walkthrough scripts enabling the Founder to systematically test every requirement clause and scenario transition in this interactive Experience Reference.',
  },
  {
    id: 'acceptance-matrix',
    category: 'Plan §3',
    title: 'Acceptance Criteria Matrix (AC-01 – AC-15)',
    subtitle: 'Traceability Matrix for Prototype Experience Verification',
    path: 'Implementation Plan §3 (AC-01 to AC-15)',
    status: 'FOUNDER APPROVED',
    date: '19 October 2026',
    keyPoints: [
      'AC-01: Small café owner joins, builds, and publishes menu entirely on mobile phone.',
      'AC-02: Customer opens menu via direct QR/link without registration or app install.',
      'AC-03: Customer contacts business manually (WhatsApp/call) without creating an order.',
      'AC-04: Customer submits order request and clearly sees it is pending merchant decision.',
      'AC-05: Merchant accepts order and exactly 1 unit is deducted from balance.',
      'AC-06: Duplicate accept attempts do not deduct duplicate units (idempotency enforced).',
      'AC-07: Subscribed business with 0 units remains discoverable and contactable on web.',
      'AC-08: Hotel demonstrates public vs. guest-protected menus without data leakage.',
      'AC-09: Multi-venue admin manages operations on both mobile and desktop viewports.',
      'AC-10: Role-scoped staff member cannot access billing or owner controls.',
      'AC-11: Sponsored offer clearly labelled and isolated from organic discovery ranking.',
      'AC-12: Usable under empty, loading, error, and simulated offline conditions.',
      'AC-13: Consistent mock balances when switching between Customer and Merchant views.',
      'AC-14: Clear feedback and understandable next step for every major user action.',
      'AC-15: Zero contradictions with approved PEWA Product Truth.',
    ],
    summary:
      'The 15 canonical acceptance criteria defined in Section 3 of the Implementation Plan, establishing the pass/fail baseline for the Experience Reference.',
  },
  {
    id: 'scenario-library',
    category: 'Plan §5',
    title: 'Master Scenario Library (SC-01 – SC-16)',
    subtitle: '16 Deterministic Scenario Fixtures for Experience Validation',
    path: 'Implementation Plan §5 (SC-01 to SC-16)',
    status: 'EXECUTABLE FIXTURES',
    date: '19 October 2026',
    keyPoints: [
      'SC-01 New Café Quickstart: Mobile onboarding to first published menu in under 3 minutes.',
      'SC-02 Established Restaurant: Multi-category menu, active rush, staff order queue.',
      'SC-03 Multi-Brand Group: 1 Org, 3 Brands, multi-brand switching & permissions.',
      'SC-04 Luxury Hotel Context: Public bar + protected room service, room verification.',
      'SC-05 Ghost / Delivery Kitchen: Service area radius without public storefront address.',
      'SC-06 Active Units: 142/200 units remaining, standard order and -1 unit deduction.',
      'SC-07 Zero Units Exhaustion: 0 units, active sub, menu remains online, checkout paused.',
      'SC-08 Expired Subscription: Subscription suspended >14 days past grace.',
      'SC-09 In-Flight Continuity: Order accepted under 10-unit continuity debt buffer.',
      'SC-10 Duplicate Accept Race: Idempotent execution preventing double billing.',
      'SC-11 Customer Withdrawal Conflict: Withdrawal takes precedence before decision.',
      'SC-12 Sold-Out Item in Cart: Cart detects unavailable item with clear warning.',
      'SC-13 Price Update During Review: Original snapshot preserved with amendment flow.',
      'SC-14 Simulated Offline Network: Network dropped, local read-only cache active.',
      'SC-15 Unauthorized Guest Access: Room URL blocked without room pass code.',
      'SC-16 Sponsored Campaign Live: Active Featured Offer with qualifying view metrics.',
    ],
    summary:
      'Catalog of the 16 deterministic scenario fixtures pre-wired in the Scenario Control Panel, covering all operational and edge-case journeys.',
  },
  {
    id: 'open-decisions',
    category: 'Deliverable G',
    title: 'Open Decisions & Assumptions Register',
    subtitle: 'Consolidated Technical, Commercial & Legal Decision Gaps (§12.G)',
    path: 'Brief §12.G / docs/decisions/DECISION-REGISTER.md',
    status: 'GOVERNING TRACKER',
    date: '19 October 2026',
    keyPoints: [
      'Commercial: Precise local currency conversion rates and tax inclusions beyond the $10/mo and $0.05/order reference ceilings.',
      'Technical: Selection of managed PostgreSQL host and pooling infrastructure before Stage 6 production engineering.',
      'Security: Final production token issuance and revocation model for hotel guest room verification.',
      'Integration: Operational readiness and contract sign-off for the Miledge WhatsApp shared-service adapter.',
    ],
    summary:
      'Single consolidated register of unfinalised items. Avoids premature engineering assumptions and documents open policy areas awaiting future Founder settlement.',
  },
  {
    id: 's6-pre-eng',
    category: '05 Engineering',
    title: 'PEWA-S6-PRE-ENG-001',
    subtitle: 'Technical Decisions and Prototype-to-Engineering Handover',
    path: '/docs/05-engineering/PEWA-S6-PRE-ENG-001-Technical-Decisions-and-Prototype-Handover.md',
    status: 'FOUNDER REVIEW DRAFT — PROTOTYPE HANDOVER',
    date: '19 October 2026',
    keyPoints: [
      'Mobile-first PWA for every role (customer, business owner, staff, hotel guest).',
      'Architecture: provider-neutral modular monolith, Next.js / React + TypeScript.',
      'Ordering consumption: only merchant acceptance consumes 1 attributed unit.',
      'Continuity safeguard: 10 recoverable units allow in-flight orders to complete without unpublishing active menus.',
      'Direct browser/QR independent entry without mandatory customer registration.',
    ],
    summary:
      'Provides the single actionable pre-engineering handover. Mandates prototype validation with mock data across all role journeys before any production engineering commences.',
  },
  {
    id: 's2-pd',
    category: '01 Project Home',
    title: 'PEWA-S2-PD-001',
    subtitle: 'Consolidated Product Definition',
    path: '/docs/01-project-home/PEWA-S2-PD-001-Consolidated-Product-Definition.md',
    status: 'FOUNDER-REVIEWED PRODUCT DIRECTION',
    date: '17 October 2026',
    keyPoints: [
      'PEWA is NOT the food merchant, kitchen controller, or courier dispatcher.',
      'No food order payments, escrow, or commission splits through PEWA.',
      'Business menus remain business-branded and persistent at permanent web destinations.',
      'Hotel guest is a customer, not an exceptional merchant role; hotel configures protected room menus.',
      'Single guided onboarding accommodating micro-cafes, hotels, and delivery-only kitchens.',
    ],
    summary:
      'Governs the core product proposition, actors, responsibilities, operating modes, pricing boundaries, directory discovery, and order lifecycle.',
  },
  {
    id: 's1-const',
    category: '01 Project Home',
    title: 'PEWA-S1-CONST-001',
    subtitle: 'Product Constitution',
    path: '/docs/01-project-home/PEWA-S1-CONST-001-Product-Constitution.md',
    status: 'APPROVED CONSTITUTION',
    date: '16 October 2026',
    keyPoints: [
      'Accuracy-as-presented principle: merchant is commercial authority of items, prices, and status.',
      'Zero arbitrary menu count caps for subscribed organisations.',
      'Organic relevance in search is independent of paid promotional prominence.',
      'No silent propagation of price or availability changes.',
    ],
    summary:
      'Constitutional rules establishing merchant sovereignty, customer discovery rights, and platform operational boundaries.',
  },
];

export const DocsExplorer: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string>(docsList[0].id);

  const activeDoc = docsList.find((d) => d.id === selectedDocId) || docsList[0];

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-amber-400 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>F01–F05 Foundation & S1–S6 Engineering Governance</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          PEWA Specifications & Experience Reference Hub
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
          Browse Product Truth deliverables (§12.A–H), governing technical briefs, constitutional
          decisions, and pre-engineering handovers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Document Index Sidebar */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 px-1">
            Governing Documentation & Deliverables
          </div>
          <div className="space-y-1.5">
            {docsList.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition flex items-center justify-between gap-3 ${
                  selectedDocId === doc.id
                    ? 'bg-amber-500/15 border-amber-500/50 text-white shadow-lg shadow-amber-500/5'
                    : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">
                    {doc.category}
                  </div>
                  <div className="text-xs font-bold text-white truncate">{doc.title}</div>
                  <div className="text-[11px] text-zinc-400 truncate">{doc.subtitle}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Document Content Viewer */}
        <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-zinc-800 pb-4 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase font-mono bg-amber-500 text-black">
                {activeDoc.status}
              </span>
              <span className="text-xs text-zinc-500">• {activeDoc.date}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">{activeDoc.title}</h2>
            <h3 className="text-sm font-semibold text-amber-400">{activeDoc.subtitle}</h3>
            <div className="text-xs font-mono text-zinc-500 pt-1">Authority Source: {activeDoc.path}</div>
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Executive Abstract
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80">
                {activeDoc.summary}
              </p>
            </div>

            {activeDoc.details && (
              <div className="space-y-3">
                {activeDoc.details.map((dt, idx) => (
                  <div key={idx} className="bg-zinc-950/60 p-4 rounded-2xl border border-zinc-850 space-y-1">
                    <h5 className="text-xs font-bold text-amber-300">{dt.heading}</h5>
                    <p className="text-xs text-zinc-300 leading-relaxed">{dt.body}</p>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Key Product Principles & Verifications
              </h4>
              <div className="space-y-2">
                {activeDoc.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 text-xs text-zinc-300 bg-zinc-950/60 p-3 rounded-xl border border-zinc-850"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>PEWA Experience Reference Prototype</span>
              <span className="text-amber-400 font-medium">Stage Authority Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
