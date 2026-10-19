import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  ChevronUp,
  ChevronDown,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Play,
  Layers,
  Info,
  Store,
  Coffee,
  Truck,
  Hotel,
  ArrowRight,
} from 'lucide-react';
import { ScenarioPreset } from '../types';

export const ScenarioControlPanel: React.FC = () => {
  const { currentScenario, loadScenario, resetAllScenarios, organization, startOnboarding } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const scenarioDefinitions: {
    id: ScenarioPreset;
    title: string;
    description: string;
    tag: string;
  }[] = [
    {
      id: 'default',
      title: 'Default Baseline',
      description: 'Standard active state with 3 diverse businesses and active menus.',
      tag: 'Baseline',
    },
    {
      id: 'new_cafe',
      title: 'SC-01: New Café Quickstart',
      description: 'Unconfigured account, zero menus -> mobile onboarding to first published menu.',
      tag: 'Onboarding',
    },
    {
      id: 'established_restaurant',
      title: 'SC-02: Established Restaurant',
      description: 'Multi-category menu, active lunch rush, staff order queue, fast 86-ing (sold out).',
      tag: 'Merchant',
    },
    {
      id: 'multibrand',
      title: 'SC-03: Multi-Brand Hospitality Group',
      description: '1 Org, 3 Brands (Bistro, Pizza, Dessert) -> brand switching & org-level admin.',
      tag: 'Org Admin',
    },
    {
      id: 'hotel',
      title: 'SC-04: Luxury Hotel Context',
      description: 'Public terrace bar + protected in-room dining, room verification, zero data leakage.',
      tag: 'Protected',
    },
    {
      id: 'delivery_kitchen',
      title: 'SC-05: Ghost / Delivery Kitchen',
      description: 'Delivery-only operation, no storefront, service area radius without public address.',
      tag: 'Ghost Kitchen',
    },
    {
      id: 'active_units',
      title: 'SC-06: Active Units (Normal Flow)',
      description: '142 / 200 units remaining -> standard order submission, acceptance, and -1 unit balance.',
      tag: 'Standard Order',
    },
    {
      id: 'zero_units',
      title: 'SC-07: Critical Zero Units Exhaustion',
      description: '0 / 200 units, 0 top-ups, active sub -> menu stays live, direct contact active, checkout paused.',
      tag: 'Test §6.H',
    },
    {
      id: 'subscription_expired',
      title: 'SC-08: Expired Subscription',
      description: 'Subscription expired > 14 days -> grace period expiration banner and recovery flow.',
      tag: 'Lapse',
    },
    {
      id: 'inflight_continuity',
      title: 'SC-09: In-Flight Order Continuity',
      description: 'Order submitted while units drop to 0 -> in-flight order accepted under debt buffer.',
      tag: 'Continuity',
    },
    {
      id: 'duplicate_accept',
      title: 'SC-10: Duplicate Accept Race',
      description: 'Repeated accept attempts: 1 acceptance state, exactly 1 unit deducted (idempotency).',
      tag: 'Idempotency',
    },
    {
      id: 'withdrawal_conflict',
      title: 'SC-11: Customer Withdrawal Conflict',
      description: 'Customer withdraws while merchant reviews -> withdrawal takes precedence, 0 units deducted.',
      tag: 'Conflict',
    },
    {
      id: 'sold_out_cart',
      title: 'SC-12: Sold-Out Item in Cart',
      description: 'Item marked unavailable while in cart -> cart alerts customer with honest messaging.',
      tag: 'Availability',
    },
    {
      id: 'price_update',
      title: 'SC-13: Price Update During Review',
      description: 'Merchant edits price before customer submit -> order snapshot integrity & amendment.',
      tag: 'Amendment',
    },
    {
      id: 'offline_network',
      title: 'SC-14: Simulated Offline Network',
      description: 'Device loses connection mid-session -> persistent offline banner & read-only cache.',
      tag: 'Offline',
    },
    {
      id: 'unauthorized_guest',
      title: 'SC-15: Unauthorized Guest Access',
      description: 'Unauthenticated user visits room menu URL -> access blocked cleanly without leakage.',
      tag: 'Security',
    },
    {
      id: 'sponsored_campaign',
      title: 'SC-16: Sponsored Campaign Live',
      description: 'Active Featured Offer on Home -> clear "Sponsored" tag and separate metrics.',
      tag: 'Campaign',
    },
  ];

  return (
    <aside
      aria-label="Prototype Scenario Engine"
      className="fixed bottom-3 right-3 z-50 max-w-sm sm:max-w-md w-full shadow-2xl"
    >
      <div className="bg-zinc-900/95 border-2 border-amber-500/60 rounded-2xl backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/80">
        {/* Panel Header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 cursor-pointer flex items-center justify-between hover:bg-zinc-850 transition"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-500 text-black flex items-center justify-center font-bold text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-white tracking-tight">
                  Scenario Engine (§7)
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  {currentScenario.replace('_', ' ')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetAllScenarios();
              }}
              className="p-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[11px] font-semibold flex items-center gap-1 px-2 transition"
              title="Reset all data to baseline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
            <button
              aria-label={isOpen ? "Collapse scenario panel" : "Expand scenario panel"}
              className="text-zinc-400 hover:text-white"
            >
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Panel Content */}
        {isOpen && (
          <div className="p-3.5 space-y-3 max-h-[70vh] overflow-y-auto border-t border-zinc-800 text-xs">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span>Select test scenario to simulate domain state:</span>
              <span className="font-mono text-amber-400">
                Units: {organization.remainingStandardUnits} (+{organization.recoverableContinuityUnits})
              </span>
            </div>

            {/* Onboarding Scenario Spotlight */}
            <div className="bg-gradient-to-br from-amber-500/15 via-zinc-950 to-zinc-950 border border-amber-500/40 rounded-2xl p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-amber-400" />
                  <span>Onboarding & Admission Scenarios</span>
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  R01 & BMP-001
                </span>
              </div>
              <p className="text-[11px] text-zinc-300 leading-tight">
                Simulate proportionate fast-path onboarding across 4 distinct hospitality operating archetypes:
              </p>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    startOnboarding('cafe');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-amber-500/20 border border-zinc-800 hover:border-amber-500/50 text-left transition"
                >
                  <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-bold text-[11px] text-white truncate">Specialty Café</div>
                    <div className="text-[9px] text-zinc-400">Dine-in & takeaway</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    startOnboarding('delivery_kitchen');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-emerald-500/20 border border-zinc-800 hover:border-emerald-500/50 text-left transition"
                >
                  <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-bold text-[11px] text-white truncate">Ghost Kitchen</div>
                    <div className="text-[9px] text-zinc-400">Private prep address</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    startOnboarding('hotel');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-blue-500/20 border border-zinc-800 hover:border-blue-500/50 text-left transition"
                >
                  <Hotel className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-bold text-[11px] text-white truncate">Hotel Dining</div>
                    <div className="text-[9px] text-zinc-400">Terrace & room service</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    startOnboarding('bakery');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-purple-500/20 border border-zinc-800 hover:border-purple-500/50 text-left transition"
                >
                  <Store className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-bold text-[11px] text-white truncate">Artisan Bakery</div>
                    <div className="text-[9px] text-zinc-400">Pre-order loaves</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              {scenarioDefinitions.map((sc) => {
                const isSelected = currentScenario === sc.id;
                return (
                  <div
                    key={sc.id}
                    onClick={() => {
                      loadScenario(sc.id);
                      setIsOpen(false);
                    }}
                    className={`p-2.5 rounded-xl border cursor-pointer transition text-left flex items-start justify-between gap-2 ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-white'
                        : 'bg-zinc-950/70 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:bg-zinc-950'
                    }`}
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-white truncate">{sc.title}</span>
                        <span className="text-[9px] font-mono uppercase px-1.5 rounded bg-zinc-800 text-zinc-400">
                          {sc.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-tight">{sc.description}</p>
                    </div>

                    <button
                      aria-label={`Simulate scenario: ${sc.title}`}
                      className={`shrink-0 p-1 rounded-md text-[10px] font-bold ${
                        isSelected
                          ? 'bg-amber-500 text-black'
                          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-500 flex items-center justify-between">
              <span>Deterministic mock state transitions</span>
              <span>PEWA Experience Reference</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
