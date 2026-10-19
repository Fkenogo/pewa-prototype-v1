import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  MessageCircle,
  Share2,
  Heart,
  ShieldCheck,
  Clock,
  Plus,
  Check,
  X,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Brand, Offering, OrderItem, ModifierOption } from '../types';

interface MenuDetailViewProps {
  brand: Brand;
  onBack: () => void;
  onOpenCart: () => void;
}

export const MenuDetailView: React.FC<MenuDetailViewProps> = ({ brand, onBack, onOpenCart }) => {
  const { addToCart, favourites, toggleFavourite, cart, hotelAccessGranted, isStructuredOrderingAvailableForBrand } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [customizingOffering, setCustomizingOffering] = useState<Offering | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const orderingCapacity = isStructuredOrderingAvailableForBrand(brand.id);
  const [showContactDrawer, setShowContactDrawer] = useState(false);

  // Modifier modal states
  const [selectedModifiers, setSelectedModifiers] = useState<{
    groupName: string;
    optionName: string;
    priceDelta: number;
  }[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const isFav = favourites.includes(brand.id);

  const categories = ['all', ...brand.categories];

  const visibleOfferings = brand.offerings.filter((off) => {
    // If hidden by merchant, don't show
    if (off.status === 'hidden') return false;

    // Hotel guest protected items check
    if (off.isProtectedGuestOnly && !hotelAccessGranted) return false;

    if (selectedCategory !== 'all' && off.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const handleOpenCustomize = (offering: Offering) => {
    if (offering.status === 'sold_out') return;

    // Pre-populate default required modifiers if any
    const defaultMods: { groupName: string; optionName: string; priceDelta: number }[] = [];
    if (offering.modifierGroups) {
      offering.modifierGroups.forEach((grp) => {
        if (grp.required && grp.options.length > 0) {
          defaultMods.push({
            groupName: grp.name,
            optionName: grp.options[0].name,
            priceDelta: grp.options[0].priceDelta,
          });
        }
      });
    }

    setSelectedModifiers(defaultMods);
    setQuantity(1);
    setSpecialInstructions('');
    setCustomizingOffering(offering);
  };

  const calculateCustomizedPrice = () => {
    if (!customizingOffering) return 0;
    const base = customizingOffering.price;
    const mods = selectedModifiers.reduce((sum, m) => sum + m.priceDelta, 0);
    return (base + mods) * quantity;
  };

  const handleConfirmAddToCart = () => {
    if (!customizingOffering) return;

    const item: OrderItem = {
      offeringId: customizingOffering.id,
      offeringName: customizingOffering.name,
      unitPrice: customizingOffering.price,
      quantity,
      selectedModifiers: [...selectedModifiers],
      itemTotal: calculateCustomizedPrice(),
      notes: specialInstructions.trim() ? specialInstructions.trim() : undefined,
    };

    addToCart(item, brand.id);
    setCustomizingOffering(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.origin + `?brand=${brand.slug}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const cartItemsForThisBrand = cart.filter((item) =>
    brand.offerings.some((o) => o.id === item.offeringId)
  );
  const cartSubtotal = cartItemsForThisBrand.reduce((sum, i) => sum + i.itemTotal, 0);

  return (
    <div className="space-y-6 pb-28">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5 transition"
        >
          ← Back to Directory
        </button>
      </div>

      {/* Hero Banner Header */}
      <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
        <div className="h-48 sm:h-64 w-full relative">
          <img src={brand.coverImage} alt={brand.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

          {/* Persistent destination badge */}
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-700/80 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>pewa.app/m/{brand.slug}</span>
          </div>

          {/* Share & Favourite buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-black/70 backdrop-blur-md hover:bg-black text-zinc-300 hover:text-white border border-zinc-700 transition"
              title="Copy Persistent Menu Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => toggleFavourite(brand.id)}
              className="p-2 rounded-full bg-black/70 backdrop-blur-md hover:bg-black border border-zinc-700 transition text-rose-500"
              title="Save to Favourites"
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Business Info Bar */}
        <div className="p-5 sm:p-7 relative -mt-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-start gap-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-zinc-950 bg-zinc-900 shadow-2xl shrink-0"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">{brand.name}</h1>
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">{brand.tagline}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {brand.address || 'Delivery-Only Service Kitchen'}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">● Kitchen Open</span>
              </div>
            </div>
          </div>

          {/* Direct Manual Engagement Buttons (WhatsApp & Phone) */}
          <div className="flex items-center gap-2 pt-2 md:pt-0">
            <button
              onClick={() => setShowContactDrawer(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition"
              title="Open direct manual engagement drawer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Contact Venue</span>
            </button>
            <a
              href={`https://wa.me/${brand.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(brand.name)}%2C%20I%20am%20viewing%20your%20menu%20on%20PEWA`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Inquire via WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Critical Zero-Units State (§6.H & §11 Acceptance Test 7) */}
      {!orderingCapacity.available && (
        <div className="bg-amber-950/40 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <span>Menu Online • Direct Manual Inquiries Active</span>
                <span className="text-[10px] px-2 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">
                  PEWA-S2-PD-001 §11
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-xl">
                Structured in-app order submission is paused by the merchant. The menu, verified
                dishes, and prices remain 100% active. Please order or inquire directly via WhatsApp or
                phone!
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${brand.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(brand.name)}%2C%20I%20am%20viewing%20your%20menu%20on%20PEWA`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            {cat === 'all' ? 'All Offerings' : cat}
          </button>
        ))}
      </div>

      {/* Offerings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleOfferings.map((offering) => {
          const isSoldOut = offering.status === 'sold_out';

          return (
            <div
              key={offering.id}
              className={`rounded-2xl border transition p-4 flex gap-4 ${
                isSoldOut
                  ? 'bg-zinc-950/40 border-zinc-900 opacity-60'
                  : 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {offering.image && (
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-zinc-950 shrink-0 relative">
                  <img
                    src={offering.image}
                    alt={offering.name}
                    className="w-full h-full object-cover"
                  />
                  {isSoldOut && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-1 text-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-rose-500/40 px-1.5 py-0.5 rounded">
                        Sold Out
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-white text-sm sm:text-base">{offering.name}</h4>
                    <span className="font-mono font-bold text-amber-400 text-sm shrink-0">
                      {offering.currency} {offering.price}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {offering.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {offering.dietaryTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {offering.preparationTimeMins && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {offering.preparationTimeMins}m prep
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-3 pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">
                    {offering.modifierGroups && offering.modifierGroups.length > 0
                      ? 'Customizable options available'
                      : 'Standard preparation'}
                  </span>

                  <button
                    disabled={isSoldOut}
                    onClick={() => handleOpenCustomize(offering)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                      isSoldOut
                        ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                        : 'bg-amber-500 hover:bg-amber-400 text-black shadow-md shadow-amber-500/20'
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{isSoldOut ? 'Sold Out' : 'Select'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Cart Bar (if items added) */}
      {cartItemsForThisBrand.length > 0 && (
        <div className="fixed bottom-14 sm:bottom-4 left-4 right-4 max-w-xl mx-auto z-40 bg-zinc-900 border border-amber-500/40 rounded-2xl p-3 shadow-2xl flex items-center justify-between backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold text-sm">
              {cartItemsForThisBrand.reduce((a, b) => a + b.quantity, 0)}
            </div>
            <div>
              <div className="text-xs text-zinc-400">Order from {brand.name}</div>
              <div className="text-sm font-bold text-white font-mono">
                {brand.currency} {cartSubtotal}
              </div>
            </div>
          </div>
          <button
            onClick={onOpenCart}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition shadow-lg shadow-amber-500/20"
          >
            Review Request →
          </button>
        </div>
      )}

      {/* Modifier & Customization Modal */}
      {customizingOffering && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
          <div className="bg-zinc-900 border border-zinc-700/80 rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-5 sm:p-6 space-y-5">
            <div className="flex items-start justify-between pb-3 border-b border-zinc-800">
              <div>
                <h3 className="font-extrabold text-white text-lg">{customizingOffering.name}</h3>
                <div className="text-xs text-amber-400 font-mono mt-0.5">
                  Base: {customizingOffering.currency} {customizingOffering.price}
                </div>
              </div>
              <button
                onClick={() => setCustomizingOffering(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modifier Groups */}
            {customizingOffering.modifierGroups &&
              customizingOffering.modifierGroups.map((group) => (
                <div key={group.id} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{group.name}</span>
                    <span className="text-zinc-500">
                      {group.required ? '(Required - Pick 1)' : '(Optional)'}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {group.options.map((opt) => {
                      const isSelected = selectedModifiers.some(
                        (m) => m.groupName === group.name && m.optionName === opt.name
                      );

                      return (
                        <div
                          key={opt.id}
                          onClick={() => {
                            if (group.maxSelections === 1) {
                              // Replace within group
                              setSelectedModifiers((prev) => [
                                ...prev.filter((m) => m.groupName !== group.name),
                                { groupName: group.name, optionName: opt.name, priceDelta: opt.priceDelta },
                              ]);
                            } else {
                              // Multiple toggle
                              if (isSelected) {
                                setSelectedModifiers((prev) =>
                                  prev.filter(
                                    (m) => !(m.groupName === group.name && m.optionName === opt.name)
                                  )
                                );
                              } else {
                                setSelectedModifiers((prev) => [
                                  ...prev,
                                  { groupName: group.name, optionName: opt.name, priceDelta: opt.priceDelta },
                                ]);
                              }
                            }
                          }}
                          className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition text-xs ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500/50 text-white'
                              : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected
                                  ? 'border-amber-400 bg-amber-400 text-black'
                                  : 'border-zinc-600'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                            <span className="font-medium">{opt.name}</span>
                          </div>
                          <span className="font-mono text-zinc-400">
                            {opt.priceDelta > 0
                              ? `+${customizingOffering.currency} ${opt.priceDelta}`
                              : 'Included'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

            {/* Special Instructions Note */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white">Special Kitchen Instructions</label>
              <textarea
                rows={2}
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="e.g. Extra hot, dressing on the side, allergies..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white placeholder-zinc-500 focus:border-amber-500 outline-none"
              />
            </div>

            {/* Quantity Selector & Confirm */}
            <div className="pt-2 flex items-center justify-between gap-4 border-t border-zinc-800">
              <div className="flex items-center border border-zinc-800 rounded-xl bg-zinc-950 p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center text-sm font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center font-mono font-bold text-sm text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleConfirmAddToCart}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Add to Order</span>
                <span>•</span>
                <span className="font-mono">
                  {customizingOffering.currency} {calculateCustomizedPrice()}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Manual Contact Drawer (§Slice P1 & AC-03) */}
      {showContactDrawer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
          <div className="bg-zinc-900 border border-zinc-700/80 rounded-t-3xl sm:rounded-3xl w-full max-w-md p-5 sm:p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <img src={brand.logo} alt={brand.name} className="w-8 h-8 rounded-lg object-cover" />
                <div>
                  <h3 className="font-extrabold text-white text-sm">{brand.name}</h3>
                  <p className="text-[11px] text-zinc-400">Direct Manual Contact Options</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactDrawer(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              PEWA enables direct communication without requiring app installation or an order cart.
              Connect directly with the team:
            </p>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${brand.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(brand.name)}%2C%20I%20am%20viewing%20your%20menu%20on%20PEWA`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp (Pre-filled context)</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400">{brand.whatsappNumber}</span>
              </a>

              <a
                href={`tel:${brand.phone}`}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-850 border border-zinc-800 text-zinc-200 text-xs font-semibold transition"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span>Call Venue Direct</span>
                </div>
                <span className="font-mono text-[11px] text-zinc-400">{brand.phone}</span>
              </a>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
              <div className="text-zinc-300 font-bold">Service Modes Supported:</div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {brand.serviceModes.map((m) => (
                  <span key={m} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 capitalize text-[10px]">
                    {m.replace('_', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
