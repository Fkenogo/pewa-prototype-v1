import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Heart,
  Clock,
  Sparkles,
  ArrowRight,
  MapPin,
  Utensils,
  Coffee,
  Pizza,
  Hotel,
  ShieldCheck,
  ChevronRight,
  Flame,
  Store,
  X,
  Trash2,
  Phone,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  Tag,
  Info,
} from 'lucide-react';
import { Brand, SponsoredCampaign } from '../types';

interface CustomerHomeProps {
  onSelectBrand: (brandId: string) => void;
  onNavigateToDirectory: (query?: string) => void;
  onOpenOrders: () => void;
}

export const CustomerHome: React.FC<CustomerHomeProps> = ({
  onSelectBrand,
  onNavigateToDirectory,
  onOpenOrders,
}) => {
  const {
    brands,
    favourites,
    toggleFavourite,
    recents,
    removeRecent,
    clearRecents,
    orders,
    campaigns,
    recordCampaignClick,
    startOnboarding,
    isStructuredOrderingAvailableForBrand,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [confirmClearRecents, setConfirmClearRecents] = useState(false);
  const [activeCampaignIndex, setActiveCampaignIndex] = useState(0);

  // Active public brands for recents
  const recentBrands = recents
    .map((id) => brands.find((b) => b.id === id))
    .filter((b): b is Brand => Boolean(b && b.isPublished));

  // Active public brands for favourites
  const favouriteBrands = favourites
    .map((id) => brands.find((b) => b.id === id))
    .filter((b): b is Brand => Boolean(b && b.isPublished));

  // Active sponsored campaigns (PEWA-S3-R06 & R03-013/014)
  const activeCampaigns = campaigns.filter((c) => c.status === 'active');
  const primaryCampaign = activeCampaigns[activeCampaignIndex] || null;
  const campaignBrand = primaryCampaign ? brands.find((b) => b.id === primaryCampaign.brandId) : null;

  // Fallback to brand.featuredOffer if no campaign object active
  const fallbackFeaturedBrand = brands.find((b) => b.featuredOffer);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigateToDirectory(searchQuery);
  };

  const handleCampaignClick = (brandId: string, campaignId?: string) => {
    if (campaignId) {
      recordCampaignClick(campaignId);
    }
    onSelectBrand(brandId);
  };

  // Find active customer orders for the live tracker alert
  const activeCustomerOrders = orders.filter(
    (o) =>
      o.status === 'submitted' ||
      o.status === 'accepted' ||
      o.status === 'ready' ||
      o.status === 'amendment_proposed'
  );

  return (
    <div className="space-y-8 pb-16">
      {/* 1. SEARCH & HERO HEADER (§R03-001 & §R03-008) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-5 sm:p-8 text-center shadow-lg">
        <div className="max-w-2xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Tenant Food & Beverage Menu Infrastructure</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Discover menus, craft & revisit your favourites.
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Business-controlled, accurate-as-presented menus. Browse without registration, contact directly or submit structured order requests.
          </p>

          {/* Quick Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative mt-5 max-w-xl mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, specialty coffee, sourdough, wagyu..."
              className="w-full bg-zinc-900/90 hover:bg-zinc-900 focus:bg-zinc-900 text-white placeholder-zinc-500 rounded-2xl pl-10 pr-24 py-3 border border-zinc-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-xs sm:text-sm transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-20 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1"
                title="Clear input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition shadow-md shadow-amber-500/10"
            >
              Search
            </button>
          </form>

          {/* Quick Category Discovery Pills (§R03-021) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 text-xs">
            <span className="text-zinc-500 font-medium text-[11px]">Popular:</span>
            {[
              { label: 'Specialty Coffee', query: 'Coffee', icon: <Coffee className="w-3 h-3 text-amber-400" /> },
              { label: 'Artisan Bakery', query: 'Bakery', icon: <Utensils className="w-3 h-3 text-emerald-400" /> },
              { label: 'Sourdough Pizza', query: 'Pizza', icon: <Pizza className="w-3 h-3 text-red-400" /> },
              { label: 'Hotel Dining', query: 'Hotel', icon: <Hotel className="w-3 h-3 text-blue-400" /> },
              { label: 'Chef Specials', query: 'Chef Special', icon: <Flame className="w-3 h-3 text-purple-400" /> },
            ].map((cat) => (
              <button
                key={cat.label}
                onClick={() => onNavigateToDirectory(cat.query)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white text-[11px] transition"
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ACTIVE ORDERS QUICK TRACKER ALERT (Account-Free Live Tracking) */}
      {activeCustomerOrders.length > 0 && (
        <section className="bg-gradient-to-r from-amber-950/60 via-zinc-900 to-amber-950/40 border border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
              {activeCustomerOrders[0].status === 'ready' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <Clock className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-300">
                  Active Order {activeCustomerOrders[0].referenceCode}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    activeCustomerOrders[0].status === 'ready'
                      ? 'bg-emerald-500 text-black'
                      : activeCustomerOrders[0].status === 'amendment_proposed'
                      ? 'bg-purple-500 text-white animate-pulse'
                      : 'bg-amber-500/20 text-amber-300'
                  }`}
                >
                  {activeCustomerOrders[0].status.replace('_', ' ')}
                </span>
              </div>
              <div className="text-xs text-zinc-300 mt-0.5">
                {activeCustomerOrders[0].brandName} • {activeCustomerOrders[0].serviceMode.replace('_', ' ')}
                {activeCustomerOrders[0].status === 'ready' && (
                  <span className="text-emerald-400 font-semibold ml-1.5">Ready for pickup!</span>
                )}
                {activeCustomerOrders[0].status === 'amendment_proposed' && (
                  <span className="text-purple-300 font-semibold ml-1.5">Action needed: review amendment</span>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={onOpenOrders}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
          >
            <span>Track Live Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      )}

      {/* 3. FEATURED PROMO / SPONSORED OFFER (§R03-013, §R03-014, §R06-001–015 & SC-16) */}
      {/* Visually and semantically isolated with explicit attribution & disclaimer */}
      {(primaryCampaign && campaignBrand) || (fallbackFeaturedBrand && fallbackFeaturedBrand.featuredOffer) ? (
        (() => {
          const title = primaryCampaign ? primaryCampaign.title : fallbackFeaturedBrand!.featuredOffer!.title;
          const desc = primaryCampaign ? primaryCampaign.description : fallbackFeaturedBrand!.featuredOffer!.description;
          const badge = primaryCampaign ? primaryCampaign.badgeText : fallbackFeaturedBrand!.featuredOffer!.badgeText;
          const targetBrand = primaryCampaign && campaignBrand ? campaignBrand : fallbackFeaturedBrand!;
          const campaignId = primaryCampaign ? primaryCampaign.id : undefined;

          return (
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950/70 via-zinc-900 to-amber-900/40 border-2 border-amber-500/40 p-5 sm:p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  {/* Paid & Supplier Attribution Header (§R06-013 & §R06-015) */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-500 text-black shadow-sm">
                      <Tag className="w-3 h-3" />
                      {badge}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-medium">
                      Paid Merchant Promotion
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="text-[10px] text-zinc-500 hidden sm:inline">
                      Independent from organic Directory ranking (§R03-026)
                    </span>
                  </div>

                  {/* Offer Headline and Details */}
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                    {desc}
                  </p>

                  {/* Attributed Supplying Merchant Badge */}
                  <div className="flex items-center gap-2 pt-1">
                    <img
                      src={targetBrand.logo}
                      alt={targetBrand.name}
                      className="w-5 h-5 rounded-full object-cover border border-zinc-700"
                    />
                    <span className="text-xs font-bold text-amber-300">
                      Supplied by {targetBrand.name}
                    </span>
                    <span className="text-zinc-500 text-xs">•</span>
                    <span className="text-[11px] text-zinc-400">{targetBrand.address || 'Local Delivery'}</span>
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="flex flex-col items-start sm:items-end gap-1.5 w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => handleCampaignClick(targetBrand.id, campaignId)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition shadow-lg shadow-amber-500/20"
                  >
                    <span>View Menu & Offer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] text-zinc-500 text-center sm:text-right">
                    Non-endorsement disclosure (§R06-015)
                  </span>
                </div>
              </div>

              {/* Multi-campaign indicators if more than 1 active campaign */}
              {activeCampaigns.length > 1 && (
                <div className="flex items-center justify-end gap-1.5 pt-3 border-t border-zinc-800/60 mt-3">
                  <span className="text-[10px] text-zinc-500 mr-1">Featured Offers ({activeCampaigns.length}):</span>
                  {activeCampaigns.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCampaignIndex(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        activeCampaignIndex === idx ? 'bg-amber-400 w-4' : 'bg-zinc-700 hover:bg-zinc-500'
                      }`}
                      title={`View Offer ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })()
      ) : null}

      {/* 4. RECENTLY VISITED MENUS (§R03-008, §R03-009, §R03-010 & §R03-012) */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span>Recently Visited Menus</span>
            </h2>
            {recentBrands.length > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                {recentBrands.length}
              </span>
            )}
          </div>

          {/* Individual & Bulk Recents Controls (§R03-010) */}
          {recentBrands.length > 0 && (
            <div className="flex items-center gap-2">
              {confirmClearRecents ? (
                <div className="flex items-center gap-1.5 animate-in fade-in">
                  <span className="text-[11px] text-rose-300">Clear all recents?</span>
                  <button
                    onClick={() => {
                      clearRecents();
                      setConfirmClearRecents(false);
                    }}
                    className="px-2 py-0.5 rounded bg-rose-500 hover:bg-rose-400 text-black text-[10px] font-bold transition"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setConfirmClearRecents(false)}
                    className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmClearRecents(true)}
                  className="text-xs text-zinc-400 hover:text-rose-400 flex items-center gap-1 transition"
                  title="Clear all recent menus (§R03-010)"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Clear Recents</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Recents Content Grid */}
        {recentBrands.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-6 text-center space-y-2">
            <Clock className="w-7 h-7 text-zinc-600 mx-auto" />
            <div className="text-xs font-semibold text-zinc-400">No recent menus saved</div>
            <p className="text-[11px] text-zinc-500 max-w-sm mx-auto">
              Menus you browse will be recorded locally for one-tap return on your mobile phone without requiring an account (§R03-009).
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {recentBrands.map((b) => {
              const capacity = isStructuredOrderingAvailableForBrand(b.id);
              const isFav = favourites.includes(b.id);

              return (
                <div
                  key={b.id}
                  onClick={() => onSelectBrand(b.id)}
                  className="group relative cursor-pointer rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-3.5 flex items-center gap-3 transition hover:shadow-xl hover:shadow-black/50"
                >
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="w-13 h-13 rounded-xl object-cover border border-zinc-800 shrink-0 group-hover:scale-105 transition"
                  />
                  <div className="flex-1 min-w-0 pr-6">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-xs sm:text-sm truncate">
                        {b.name}
                      </span>
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate">{b.tagline}</div>
                    
                    {/* Status & Service Modes */}
                    <div className="text-[10px] text-zinc-500 mt-1 flex items-center gap-1.5">
                      <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 font-mono">
                        {b.currency}
                      </span>
                      <span>•</span>
                      <span className="truncate">
                        {capacity.available ? 'Direct & In-App' : 'WhatsApp Contact'}
                      </span>
                    </div>
                  </div>

                  {/* Actions: Direct Remove from Recents (§R03-010) & Chevron */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeRecent(b.id);
                      }}
                      className="p-1 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition"
                      title="Remove from recents (§R03-010)"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. SAVED FAVOURITES (§R03-008, §R03-011 & §R03-012) */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Saved Favourites</span>
            </h2>
            {favouriteBrands.length > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/10 text-rose-300 border border-rose-500/30">
                {favouriteBrands.length}
              </span>
            )}
          </div>
          <span className="text-[11px] text-zinc-500">Local offline storage (§R03-011)</span>
        </div>

        {/* Favourites Content Grid */}
        {favouriteBrands.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-6 text-center space-y-2">
            <Heart className="w-7 h-7 text-zinc-600 mx-auto" />
            <div className="text-xs font-semibold text-zinc-400">No saved favourites yet</div>
            <p className="text-[11px] text-zinc-500 max-w-sm mx-auto">
              Tap the heart icon on any restaurant, café, or bakery menu to bookmark it here for instant one-tap return on your mobile phone.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {favouriteBrands.map((b) => {
              const capacity = isStructuredOrderingAvailableForBrand(b.id);

              return (
                <div
                  key={b.id}
                  onClick={() => onSelectBrand(b.id)}
                  className="group relative cursor-pointer rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-4 transition hover:shadow-xl hover:shadow-black/50 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={b.logo}
                        alt={b.name}
                        className="w-12 h-12 rounded-xl object-cover border border-zinc-800 shrink-0 group-hover:scale-105 transition"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-white text-sm truncate group-hover:text-amber-400 transition">
                            {b.name}
                          </h4>
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        </div>
                        <p className="text-xs text-zinc-400 truncate">{b.tagline}</p>
                      </div>
                    </div>

                    {/* Direct Heart Toggle to Remove Favourite (§R03-011) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(b.id);
                      }}
                      className="p-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-800 text-rose-500 transition shrink-0"
                      title="Remove from favourites"
                    >
                      <Heart className="w-4 h-4 fill-rose-500" />
                    </button>
                  </div>

                  {/* Manual Contact Options Shortcut (§R03-004: Manual Engagement Without Forced Cart) */}
                  <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${b.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(b.name)}%2C%20I%20am%20viewing%20your%20menu%20on%20PEWA`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 border border-emerald-500/30 transition"
                        title="Chat directly on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`tel:${b.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
                        title="Call Venue Direct"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-[11px] text-zinc-500 truncate">
                        {b.offerings.length} dishes
                      </span>
                    </div>

                    <span className="text-amber-400 font-bold text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition">
                      <span>View Menu</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 6. EXPLORE DIRECTORY CTA (§R03-015) */}
      <section className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-sm sm:text-base font-bold text-white">Explore Full Organic PEWA Directory</h3>
          <p className="text-xs text-zinc-400">
            Search all {brands.length} published businesses across dietary tags (Vegan, Halal, Gluten-free) and service modes.
          </p>
        </div>
        <button
          onClick={() => onNavigateToDirectory()}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-white font-bold text-xs border border-zinc-700 transition shrink-0"
        >
          <span>Open Directory</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* 7. BUSINESS ONBOARDING CALLOUT (§R01-001 & BMP-001) */}
      <section className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-900 p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg shadow-amber-500/5">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
            <Store className="w-3 h-3" /> Food & Beverage Merchant Infrastructure
          </div>
          <h3 className="text-base sm:text-lg font-black text-white">
            Run a café, restaurant, hotel, or delivery kitchen?
          </h3>
          <p className="text-xs text-zinc-300 max-w-xl">
            Publish your live digital menu with a permanent QR link in 3 minutes. Includes 200 monthly ordering units with 10-unit continuity safeguard.
          </p>
        </div>
        <button
          onClick={() => startOnboarding('cafe')}
          className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 shrink-0"
        >
          <span>Start Business Onboarding</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
