import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Filter,
  MapPin,
  UtensilsCrossed,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Truck,
  ShoppingBag,
  Coffee,
  X,
  Store,
  Plus,
} from 'lucide-react';
import { ServiceMode, Brand } from '../types';

interface DirectoryViewProps {
  initialSearch?: string;
  onSelectBrand: (brandId: string) => void;
  onBackToHome: () => void;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({
  initialSearch = '',
  onSelectBrand,
  onBackToHome,
}) => {
  const { brands, startOnboarding } = useApp();
  const [search, setSearch] = useState(initialSearch);
  const [selectedServiceMode, setSelectedServiceMode] = useState<ServiceMode | 'all'>('all');
  const [selectedDietaryTag, setSelectedDietaryTag] = useState<string | 'all'>('all');

  const filteredBrands = brands.filter((brand) => {
    if (!brand.isPublished) return false;

    // Service Mode filter
    if (selectedServiceMode !== 'all' && !brand.serviceModes.includes(selectedServiceMode)) {
      return false;
    }

    // Dietary filter
    if (selectedDietaryTag !== 'all') {
      const hasOfferingWithTag = brand.offerings.some((o) =>
        o.dietaryTags.some((t) => t.toLowerCase() === selectedDietaryTag.toLowerCase())
      );
      if (!hasOfferingWithTag) return false;
    }

    // Text search matching brand name, category, or offering
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchBrand =
        brand.name.toLowerCase().includes(q) ||
        brand.tagline.toLowerCase().includes(q) ||
        brand.categories.some((c) => c.toLowerCase().includes(q));

      const matchOffering = brand.offerings.some(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.description.toLowerCase().includes(q) ||
          o.dietaryTags.some((t) => t.toLowerCase().includes(q))
      );

      return matchBrand || matchOffering;
    }

    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={onBackToHome}
            className="text-xs text-amber-400 hover:text-amber-300 font-medium mb-1 inline-flex items-center gap-1"
          >
            ← Back to PEWA Home
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            PEWA Food & Beverage Directory
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Search-first independent discovery for verified venues, kitchens & bakes.
          </p>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by venue name, dish (e.g. flat white, wagyu, sourdough), or category..."
            className="w-full bg-zinc-950 text-white placeholder-zinc-500 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm border border-zinc-700/80 focus:border-amber-500 outline-none transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
          {/* Service Mode Selection */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-zinc-500 text-[11px] font-semibold uppercase mr-1">Mode:</span>
            {[
              { id: 'all', label: 'All Modes' },
              { id: 'dine_in', label: 'Dine-In' },
              { id: 'takeaway', label: 'Takeaway' },
              { id: 'delivery', label: 'Delivery' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedServiceMode(m.id as any)}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  selectedServiceMode === m.id
                    ? 'bg-amber-500 text-black font-semibold'
                    : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Dietary Tag Selection */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-zinc-500 text-[11px] font-semibold uppercase mr-1">Dietary:</span>
            {['all', 'Vegan', 'Vegetarian', 'Gluten-Free', 'Halal', 'Chef Special'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedDietaryTag(tag)}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition ${
                  selectedDietaryTag === tag
                    ? 'bg-zinc-100 text-black font-semibold'
                    : 'bg-zinc-800/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tag === 'all' ? 'Any' : tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
          <span>
            Showing <strong className="text-white">{filteredBrands.length}</strong> matching businesses
          </span>
        </div>

        {filteredBrands.length === 0 ? (
          <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-12 text-center space-y-3">
            <UtensilsCrossed className="w-10 h-10 text-zinc-600 mx-auto" />
            <div className="text-sm font-semibold text-white">No businesses found</div>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              We couldn't find any published menus matching your filters. Try clearing your search or switching service modes.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedServiceMode('all');
                setSelectedDietaryTag('all');
              }}
              className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Cover Image */}
                <div className="relative h-36 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={brand.coverImage}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Service Mode Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {brand.serviceModes.map((mode) => (
                      <span
                        key={mode}
                        className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/20"
                      >
                        {mode.replace('_', ' ')}
                      </span>
                    ))}
                  </div>

                  {/* Delivery-only distinction (PD-001 Section 3) */}
                  {brand.isDeliveryOnly && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-950/80 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                      <Truck className="w-3 h-3" /> Delivery-Only Kitchen
                    </div>
                  )}

                  {/* Logo overlay */}
                  <div className="absolute -bottom-3 left-4 w-12 h-12 rounded-xl border-2 border-zinc-900 bg-zinc-800 overflow-hidden shadow-lg">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 pt-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition">
                        {brand.name}
                      </h3>
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{brand.tagline}</p>

                    <div className="text-[11px] text-zinc-500 mt-2 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                      <span className="truncate">
                        {brand.isDeliveryOnly
                          ? 'Central Dispatch Area (Nairobi Delivery Coverage)'
                          : brand.address}
                      </span>
                    </div>

                    {/* Offerings Preview */}
                    <div className="mt-3 pt-3 border-t border-zinc-800/80">
                      <div className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wider mb-1.5">
                        Popular Items
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {brand.offerings.slice(0, 3).map((off) => (
                          <span
                            key={off.id}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300"
                          >
                            {off.name} • <span className="font-mono text-amber-400">{brand.currency} {off.price}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectBrand(brand.id)}
                      className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition text-center"
                    >
                      View Live Menu
                    </button>
                    <a
                      href={`https://wa.me/${brand.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-400 transition"
                      title="Manual WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Directory Onboarding Footer Banner */}
        <div className="mt-8 p-6 rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900 to-amber-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Store className="w-4 h-4 text-amber-400" /> Are you a local food or beverage producer?
            </h4>
            <p className="text-xs text-zinc-400">
              Publish your offerings to the PEWA Directory without arbitrary per-menu subscription fees.
            </p>
          </div>
          <button
            type="button"
            onClick={() => startOnboarding('cafe')}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-1.5 shrink-0 shadow-md shadow-amber-500/10"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Onboard Your Business</span>
          </button>
        </div>
      </div>
    </div>
  );
};
