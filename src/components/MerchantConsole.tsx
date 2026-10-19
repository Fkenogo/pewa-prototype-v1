import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Store,
  Check,
  X,
  AlertTriangle,
  Clock,
  Plus,
  Zap,
  TrendingDown,
  Eye,
  EyeOff,
  History,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Layers,
  ChefHat,
  RefreshCw,
  Camera,
  Upload,
  Save,
  Link as LinkIcon,
} from 'lucide-react';
import { AvailabilityStatus, Order, Brand } from '../types';

export const MerchantConsole: React.FC = () => {
  const {
    organization,
    brands,
    orders,
    acceptOrder,
    declineOrder,
    markOrderReady,
    proposeOrderAmendment,
    toggleOfferingStatus,
    addOfferingToBrand,
    togglePublishBrand,
    purchaseUnits,
    consumptionLogs,
    campaigns,
    createCampaign,
    role,
    setRole,
    startOnboarding,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'orders' | 'menu' | 'units' | 'brands' | 'campaigns'>('orders');
  const [selectedBrandId, setSelectedBrandId] = useState<string>(brands[0].id);
  const [declineOrderId, setDeclineOrderId] = useState<string | null>(null);
  const [declineReason, setDeclineReason] = useState('Kitchen at peak capacity');
  const [amendOrderId, setAmendOrderId] = useState<string | null>(null);
  const [amendReason, setAmendReason] = useState('Substituted with seasonal roast batch');
  const [amendNewTotal, setAmendNewTotal] = useState<number>(500);
  const [amendSubstitutions, setAmendSubstitutions] = useState('SL28 Beans -> Yirgacheffe Reserve');
  const [acceptFeedback, setAcceptFeedback] = useState<{ id: string; msg: string; error?: boolean } | null>(null);

  // Add Offering Modal & Image Upload State
  const [showAddOfferingModal, setShowAddOfferingModal] = useState(false);
  const [newOfferingName, setNewOfferingName] = useState('');
  const [newOfferingCategory, setNewOfferingCategory] = useState('');
  const [newOfferingPrice, setNewOfferingPrice] = useState<number>(450);
  const [newOfferingDescription, setNewOfferingDescription] = useState('');
  const [newOfferingImage, setNewOfferingImage] = useState(
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'
  );
  const [newOfferingPrepTime, setNewOfferingPrepTime] = useState<number>(10);
  const [newOfferingDietary, setNewOfferingDietary] = useState<string[]>(['Freshly Prepared']);
  const [newOfferingImageMethod, setNewOfferingImageMethod] = useState<'upload' | 'preset' | 'url'>('upload');
  const [newOfferingCustomUrl, setNewOfferingCustomUrl] = useState('');

  const selectedBrand = brands.find((b) => b.id === selectedBrandId) || brands[0];
  const brandOrders = orders.filter((o) => o.brandId === selectedBrand.id);

  const pendingOrders = brandOrders.filter((o) => o.status === 'submitted');
  const activeOrders = brandOrders.filter((o) => o.status === 'accepted' || o.status === 'cancellation_requested');
  const completedOrders = brandOrders.filter((o) => o.status === 'ready' || o.status === 'declined' || o.status === 'withdrawn');

  const handleAccept = (orderId: string) => {
    const res = acceptOrder(orderId);
    setAcceptFeedback({ id: orderId, msg: res.message, error: !res.success });
    setTimeout(() => setAcceptFeedback(null), 4000);
  };

  const handleConfirmDecline = () => {
    if (!declineOrderId) return;
    declineOrder(declineOrderId, declineReason);
    setDeclineOrderId(null);
  };

  const handleNewOfferingImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('File size exceeds 8MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setNewOfferingImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveNewOffering = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOfferingName.trim() || !newOfferingCategory.trim() || !newOfferingPrice) {
      alert('Please provide offering name, category, and price.');
      return;
    }
    addOfferingToBrand(selectedBrand.id, {
      name: newOfferingName.trim(),
      category: newOfferingCategory.trim(),
      price: Number(newOfferingPrice),
      currency: selectedBrand.currency,
      description: newOfferingDescription.trim() || `Freshly crafted ${newOfferingName.trim()}`,
      image: newOfferingImage || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
      status: 'available',
      dietaryTags: newOfferingDietary.length > 0 ? newOfferingDietary : ['Freshly Prepared'],
      preparationTimeMins: Number(newOfferingPrepTime),
    });
    setAcceptFeedback({
      id: 'new-offering',
      msg: `Offering "${newOfferingName}" saved to ${selectedBrand.name} with photo!`,
    });
    setTimeout(() => setAcceptFeedback(null), 4000);
    setShowAddOfferingModal(false);
    setNewOfferingName('');
    setNewOfferingDescription('');
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Merchant Header Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
              {role === 'merchant_owner'
                ? 'Organisation Owner'
                : role === 'merchant_manager'
                ? 'Business Manager'
                : role === 'merchant_staff'
                ? 'Operational Staff (Kitchen Station)'
                : 'Organisation Admin'}
            </span>
            <span className="text-zinc-500 text-xs">•</span>
            <span className="text-xs text-zinc-400">{organization.legalName}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            {role === 'merchant_staff' ? 'Kitchen Station (KDS)' : 'Merchant Workspace'}
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            {role === 'merchant_staff'
              ? 'Mobile-first kitchen ticket receiver, timer tracking & ready status declaration.'
              : 'Mobile-first administration for multi-tenant brands, real-time orders & unit accounting.'}
          </p>
        </div>

        {/* Brand Selector Pill */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-zinc-400 font-medium">Brand:</span>
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBrandId(b.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedBrandId === b.id
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <img src={b.logo} alt={b.name} className="w-4 h-4 rounded-full object-cover" />
              <span className="max-w-[120px] truncate">{b.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Workspace Sub-tabs */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 overflow-x-auto">
        {[
          {
            id: 'orders',
            label: role === 'merchant_staff' ? 'Kitchen Tickets' : 'Live Orders',
            badge: pendingOrders.length > 0 ? pendingOrders.length : undefined,
            icon: <ShoppingBag className="w-4 h-4" />,
          },
          { id: 'menu', label: 'Menu & Offerings', icon: <ChefHat className="w-4 h-4" /> },
          {
            id: 'units',
            label: 'Units & Safeguard',
            badge: organization.remainingStandardUnits === 0 ? '⚠️ Low' : undefined,
            icon: <Zap className="w-4 h-4" />,
          },
          { id: 'brands', label: 'Organisation & Brands', icon: <Layers className="w-4 h-4" /> },
          { id: 'campaigns', label: 'Featured Offers (§6.J)', icon: <Sparkles className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}-btn`}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-zinc-100 text-black shadow-md'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.badge && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-black font-mono">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* FEEDBACK BANNER */}
      {acceptFeedback && (
        <div
          className={`p-3.5 rounded-2xl text-xs font-medium border flex items-center justify-between animate-in fade-in ${
            acceptFeedback.error
              ? 'bg-rose-950/80 border-rose-500/40 text-rose-300'
              : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
          }`}
        >
          <span>{acceptFeedback.msg}</span>
          <button onClick={() => setAcceptFeedback(null)} className="text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TAB 1: LIVE ORDERS DISPATCH */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          {/* Pending Orders (Awaiting Acceptance) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                Pending Customer Requests ({pendingOrders.length})
              </h2>
              <span className="text-[11px] text-zinc-500">
                1 acceptance = 1 attributed consumption unit
              </span>
            </div>

            {pendingOrders.length === 0 ? (
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 text-center text-zinc-500 text-xs">
                No pending requests. Incoming orders will flash here in real-time.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pendingOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-zinc-900 border-2 border-amber-500/60 rounded-2xl p-4 space-y-3 shadow-xl shadow-amber-500/5 animate-in fade-in"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-base text-white">
                          {order.referenceCode}
                        </span>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                          {order.serviceMode.replace('_', ' ')}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-amber-400 text-sm">
                        {order.currency} {order.total}
                      </span>
                    </div>

                    <div className="text-xs text-zinc-300 space-y-1">
                      <div>
                        Customer: <strong className="text-white">{order.customerName}</strong> (
                        {order.customerContact})
                      </div>
                      {order.tableOrRoomNumber && (
                        <div>
                          Destination: <strong className="text-amber-300">{order.tableOrRoomNumber}</strong>
                        </div>
                      )}
                      {order.deliveryAddress && (
                        <div>
                          Delivery to: <strong className="text-white">{order.deliveryAddress}</strong>
                        </div>
                      )}
                    </div>

                    {/* Ordered items */}
                    <div className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 text-xs space-y-1">
                      {order.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between text-zinc-300">
                          <span>
                            {it.quantity}x {it.offeringName}
                          </span>
                          <span className="font-mono text-zinc-400">
                            {order.currency} {it.itemTotal}
                          </span>
                        </div>
                      ))}
                      {order.notes && (
                        <div className="text-[11px] text-amber-300/80 italic pt-1 border-t border-zinc-900">
                          Note: "{order.notes}"
                        </div>
                      )}
                    </div>

                    {/* Acceptance Actions */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => handleAccept(order.id)}
                        className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20"
                      >
                        <Check className="w-4 h-4" />
                        <span>Accept Request (-1 Unit)</span>
                      </button>
                      <button
                        onClick={() => {
                          setAmendOrderId(order.id);
                          setAmendNewTotal(order.total);
                        }}
                        className="px-3 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 font-semibold text-xs transition"
                        title="Propose price or substitution amendment"
                      >
                        Amend
                      </button>
                      <button
                        onClick={() => setDeclineOrderId(order.id)}
                        className="px-3 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-rose-400 font-semibold text-xs transition"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Active Preparation Orders */}
          <div className="space-y-3 pt-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-emerald-400" />
              Kitchen In-Progress ({activeOrders.length})
            </h2>

            {activeOrders.length === 0 ? (
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 text-center text-zinc-500 text-xs">
                No orders currently being prepared.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-white">{order.referenceCode}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 uppercase">
                        {order.status === 'cancellation_requested'
                          ? 'Cancellation Requested by Customer'
                          : 'Accepted / Cooking'}
                      </span>
                    </div>

                    <div className="text-xs text-zinc-300">
                      {order.customerName} • {order.tableOrRoomNumber || order.serviceMode}
                    </div>

                    <div className="bg-zinc-950 p-2 rounded-xl text-xs text-zinc-400">
                      {order.items.map((it, idx) => (
                        <div key={idx}>
                          {it.quantity}x {it.offeringName}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => markOrderReady(order.id)}
                      className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-emerald-400 font-bold text-xs border border-emerald-500/30 transition flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Declare Order Ready</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: MENU & OFFERINGS */}
      {activeTab === 'menu' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-white">
                Menu Management: {selectedBrand.name}
              </h2>
              <p className="text-xs text-zinc-400">
                Instantly adjust availability (In Stock / Sold Out / Hidden) without full republication cycles.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setNewOfferingCategory(selectedBrand.categories[0] || 'Main Dishes');
                  setShowAddOfferingModal(true);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Offering</span>
              </button>

              <span className="text-xs text-zinc-400">Public Visibility:</span>
              <button
                onClick={() => togglePublishBrand(selectedBrand.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  selectedBrand.isPublished
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {selectedBrand.isPublished ? (
                  <>
                    <Eye className="w-3.5 h-3.5" /> Published (Live)
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5" /> Unpublished (Draft)
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ADD OFFERING MODAL / FORM */}
          {showAddOfferingModal && (
            <div className="bg-zinc-900 border border-amber-500/50 rounded-3xl p-5 sm:p-6 space-y-4 animate-in fade-in shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Add New Offering to {selectedBrand.name}</h3>
                    <p className="text-[11px] text-zinc-400">Upload dish photo, set price, and save to menu</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAddOfferingModal(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSaveNewOffering} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Offering Name
                    </label>
                    <input
                      type="text"
                      value={newOfferingName}
                      onChange={(e) => setNewOfferingName(e.target.value)}
                      placeholder="e.g. Avocado Toast with Poached Egg"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Price ({selectedBrand.currency})
                    </label>
                    <input
                      type="number"
                      value={newOfferingPrice}
                      onChange={(e) => setNewOfferingPrice(Number(e.target.value))}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Menu Category
                    </label>
                    <input
                      type="text"
                      value={newOfferingCategory}
                      onChange={(e) => setNewOfferingCategory(e.target.value)}
                      placeholder="e.g. Breakfast & Brunch"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Preparation Time (mins)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={newOfferingPrepTime}
                      onChange={(e) => setNewOfferingPrepTime(Number(e.target.value))}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Description & Flavor Profile
                  </label>
                  <textarea
                    rows={2}
                    value={newOfferingDescription}
                    onChange={(e) => setNewOfferingDescription(e.target.value)}
                    placeholder="e.g. Sourdough slice with smashed Haas avocado, chili flakes, sea salt, and soft-poached free-range egg."
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none resize-none"
                  />
                </div>

                {/* Offering Image Upload Component */}
                <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5" />
                      <span>Offering Dish Photo</span>
                    </span>
                    <span className="text-[11px] text-zinc-400">Preview & attachment</span>
                  </div>

                  <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setNewOfferingImageMethod('upload')}
                      className={`flex-1 py-1 rounded-lg font-semibold flex items-center justify-center gap-1 text-[11px] transition ${
                        newOfferingImageMethod === 'upload' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Upload className="w-3 h-3" />
                      <span>Upload File</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewOfferingImageMethod('preset')}
                      className={`flex-1 py-1 rounded-lg font-semibold flex items-center justify-center gap-1 text-[11px] transition ${
                        newOfferingImageMethod === 'preset' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Presets</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewOfferingImageMethod('url')}
                      className={`flex-1 py-1 rounded-lg font-semibold flex items-center justify-center gap-1 text-[11px] transition ${
                        newOfferingImageMethod === 'url' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <LinkIcon className="w-3 h-3" />
                      <span>URL</span>
                    </button>
                  </div>

                  {newOfferingImageMethod === 'upload' && (
                    <label className="border-2 border-dashed border-zinc-700 hover:border-amber-500 rounded-xl p-3 text-center block cursor-pointer bg-zinc-900/50 transition">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleNewOfferingImageFile}
                        className="hidden"
                      />
                      <Upload className="w-4 h-4 mx-auto text-amber-400 mb-1" />
                      <div className="text-[11px] font-semibold text-white">Click to select photo from device</div>
                    </label>
                  )}

                  {newOfferingImageMethod === 'preset' && (
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: 'Brunch Toast', url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80' },
                        { label: 'Burger', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80' },
                        { label: 'Cappuccino', url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80' },
                        { label: 'Healthy Bowl', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80' },
                      ].map((p, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setNewOfferingImage(p.url)}
                          className={`relative rounded-lg overflow-hidden aspect-video border text-left p-1 ${
                            newOfferingImage === p.url ? 'border-amber-500 ring-2 ring-amber-500/50' : 'border-zinc-800'
                          }`}
                        >
                          <img src={p.url} alt={p.label} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40" />
                          <span className="relative z-10 text-[9px] font-bold text-white block truncate">{p.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {newOfferingImageMethod === 'url' && (
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={newOfferingCustomUrl}
                        onChange={(e) => setNewOfferingCustomUrl(e.target.value)}
                        placeholder="https://..."
                        className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-2 text-xs text-white outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (newOfferingCustomUrl.trim()) {
                            setNewOfferingImage(newOfferingCustomUrl.trim());
                            setNewOfferingCustomUrl('');
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl bg-zinc-800 text-xs font-semibold text-white"
                      >
                        Apply
                      </button>
                    </div>
                  )}

                  {/* Thumbnail Preview */}
                  {newOfferingImage && (
                    <div className="flex items-center gap-3 bg-zinc-900 p-2 rounded-xl border border-zinc-800">
                      <img
                        src={newOfferingImage}
                        alt="Preview"
                        className="w-12 h-12 rounded-lg object-cover border border-zinc-700"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-white block truncate">
                          {newOfferingName || 'Selected Photo'}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-semibold">Image Ready ✓</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddOfferingModal(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Offering to Menu</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedBrand.offerings.map((offering) => (
              <div
                key={offering.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex gap-4 items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {offering.image && (
                    <img
                      src={offering.image}
                      alt={offering.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-zinc-800"
                    />
                  )}
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-sm truncate">{offering.name}</h4>
                    <div className="text-xs text-amber-400 font-mono">
                      {offering.currency} {offering.price}
                    </div>
                    <div className="text-[11px] text-zinc-500 truncate">{offering.category}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {(['available', 'sold_out', 'hidden'] as AvailabilityStatus[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => toggleOfferingStatus(selectedBrand.id, offering.id, status)}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold capitalize transition ${
                        offering.status === status
                          ? status === 'available'
                            ? 'bg-emerald-500 text-black'
                            : status === 'sold_out'
                            ? 'bg-rose-500 text-white'
                            : 'bg-zinc-700 text-white'
                          : 'bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {status.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: UNITS & CONTINUITY SAFEGUARD (Founder Refinement from S2-PD-001 Section 11) */}
      {activeTab === 'units' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-950/60 via-zinc-900 to-amber-950/40 border border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>PEWA-S2-PD-001 §11 — Bounded Continuity Safeguard</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white">
              Organisation Consumption & Continuity Ledger
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
              PEWA charges an affordable organization base ($10/mo reference ceiling). Ordering is
              charged per merchant acceptance (~$0.05 / 20 orders per $1). To protect businesses and
              customers from abrupt cutoffs, PEWA includes <strong>10 recoverable continuity units</strong>{' '}
              before ordering is locked.
            </p>

            {/* Gauges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {/* Card 1: Standard Units */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                <div className="text-[11px] text-zinc-500 uppercase font-semibold">
                  Standard Prepaid Units
                </div>
                <div className="text-3xl font-mono font-black text-white mt-1">
                  {organization.remainingStandardUnits}
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Out of {organization.includedMonthlyUnits} monthly quota
                </div>
              </div>

              {/* Card 2: 10 Recoverable Continuity Units */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-amber-500/40">
                <div className="text-[11px] text-amber-400 uppercase font-semibold flex items-center justify-between">
                  <span>10-Unit Continuity Safeguard</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                </div>
                <div className="text-3xl font-mono font-black text-amber-400 mt-1">
                  {organization.recoverableContinuityUnits} / 10
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  {organization.recoverableContinuityUnits === 10
                    ? 'Full buffer available'
                    : `${10 - organization.recoverableContinuityUnits} units drawn in continuity debt`}
                </div>
              </div>

              {/* Card 3: Base Subscription Status */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                <div className="text-[11px] text-zinc-500 uppercase font-semibold">
                  Organisation Subscription
                </div>
                <div className="text-xl font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="capitalize">{organization.subscriptionStatus}</span>
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  {organization.baseCurrency} ${organization.baseMonthlyFee}/mo base
                </div>
              </div>
            </div>

            {/* Interactive Simulation Controls */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-white">Test Scenarios:</span>

              <button
                onClick={() => purchaseUnits(50)}
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition"
              >
                + Replenish 50 Units ($2.50)
              </button>

              <button
                onClick={() =>
                  useApp().acceptOrder(orders[0]?.id)
                }
                className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs border border-zinc-700 transition"
              >
                Trigger Sample Acceptance
              </button>
            </div>
          </div>

          {/* Consumption History Log */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <History className="w-4 h-4 text-zinc-400" />
              Event Audit Ledger
            </h3>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="divide-y divide-zinc-800 text-xs">
                {consumptionLogs.map((log) => (
                  <div key={log.id} className="p-3.5 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-white">
                          Order {log.orderReference}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            log.unitType === 'standard_credit'
                              ? 'bg-zinc-800 text-zinc-300'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {log.unitType === 'standard_credit'
                            ? 'Standard Quota'
                            : '10-Unit Continuity Debt'}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">{log.note}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono font-bold text-amber-400">
                        {log.previousBalance} → {log.newBalance}
                      </span>
                      <div className="text-[10px] text-zinc-500">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ORGANISATION & BRANDS */}
      {activeTab === 'brands' && (
        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3">
            <h3 className="text-base font-bold text-white">Participating Organisation</h3>
            <p className="text-xs text-zinc-400 max-w-xl">
              Under PEWA constitution, one accountable subscriber organisation manages legitimately
              related brands and menus. Multi-brand groups operate under one base subscription.
            </p>
            <div className="pt-2 text-xs text-zinc-300 space-y-1">
              <div>
                Legal Entity: <strong className="text-white">{organization.legalName}</strong>
              </div>
              <div>
                ID: <code className="text-amber-400">{organization.id}</code>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Managed Brands ({brands.length})</h3>
              <button
                type="button"
                onClick={() => startOnboarding('cafe')}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Onboard New Brand</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {brands.map((b) => (
                <div
                  key={b.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="w-12 h-12 rounded-xl object-cover border border-zinc-800"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-sm truncate">{b.name}</h4>
                      <div className="text-[11px] text-zinc-400 capitalize">
                        {b.businessType.replace('_', ' ')}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400">
                    Offerings: <strong className="text-white">{b.offerings.length}</strong> items
                  </div>
                  <div className="text-xs text-zinc-400">
                    Status:{' '}
                    <span
                      className={`font-semibold ${
                        b.isPublished ? 'text-emerald-400' : 'text-zinc-500'
                      }`}
                    >
                      {b.isPublished ? 'Publicly Published' : 'Draft / Unpublished'}
                    </span>
                  </div>
                </div>
              ))}

              {/* Add New Brand Onboarding Card */}
              <button
                type="button"
                onClick={() => startOnboarding('cafe')}
                className="group border-2 border-dashed border-zinc-800 hover:border-amber-500/50 rounded-2xl p-6 text-center transition flex flex-col items-center justify-center gap-2 bg-zinc-950/40 hover:bg-zinc-900/50"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 flex items-center justify-center transition">
                  <Plus className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-amber-400 transition">
                  Onboard Related Brand
                </div>
                <div className="text-[11px] text-zinc-500 max-w-[200px] leading-tight">
                  Add another venue, kitchen or brand under {organization.legalName}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: FEATURED CAMPAIGNS & PROMOTIONS (§6.J) */}
      {activeTab === 'campaigns' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-950/40 via-zinc-900 to-amber-950/20 border border-amber-500/30 rounded-3xl p-6 sm:p-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PEWA-S2-PD-001 §6 & §10 — Paid Featured Offers</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Sponsored Promoted Campaigns
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
              Paid featured offers appear on PEWA Home and category highlights with strict{' '}
              <strong className="text-amber-400">"PAID SPONSORED OFFER"</strong> labelling. Organic
              Directory search rankings remain completely independent of paid campaigns (S1-CONST-001 §3).
            </p>
          </div>

          {/* Active Campaigns List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Active Campaigns ({campaigns.length})</h3>
              <button
                onClick={() => {
                  createCampaign({
                    brandId: selectedBrand.id,
                    brandName: selectedBrand.name,
                    title: `${selectedBrand.name} Weekend Special`,
                    description: `Exclusive tasting combo with priority service`,
                    badgeText: 'PAID SPONSORED OFFER',
                    targetCategory: selectedBrand.categories[0] || 'Specialty',
                    budgetAllocatedUSD: 20,
                    costPerClickUSD: 0.12,
                    status: 'active',
                    startDate: new Date().toISOString().split('T')[0],
                    endDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
                  });
                }}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Launch New Campaign</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campaigns.map((camp) => (
                <div
                  key={camp.id}
                  className="bg-zinc-900 border border-amber-500/30 rounded-2xl p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-black">
                      {camp.badgeText}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold capitalize">
                      ● {camp.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-base">{camp.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{camp.description}</p>
                    <div className="text-[11px] text-zinc-500 mt-1">
                      Promoting: <strong className="text-white">{camp.brandName}</strong> • Target: {camp.targetCategory}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase">Qualifying Views</div>
                      <div className="font-mono font-bold text-white text-sm mt-0.5">
                        {camp.impressionsDelivered}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase">Interactions</div>
                      <div className="font-mono font-bold text-amber-400 text-sm mt-0.5">
                        {camp.clicksCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase">Budget</div>
                      <div className="font-mono font-bold text-zinc-300 text-sm mt-0.5">
                        ${camp.budgetAllocatedUSD}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Decline Order Reason Modal */}
      {declineOrderId && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 max-w-md w-full space-y-4">
            <h3 className="text-base font-bold text-white">Decline Order Request</h3>
            <p className="text-xs text-zinc-400">
              Provide a clear reason for the customer. Declining does not consume a unit.
            </p>
            <input
              type="text"
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              placeholder="e.g. Items sold out, kitchen closed..."
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-amber-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeclineOrderId(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDecline}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold"
              >
                Confirm Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Propose Amendment Modal (§6.G & §7) */}
      {amendOrderId && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 max-w-md w-full space-y-4">
            <h3 className="text-base font-bold text-white">Propose Order Amendment</h3>
            <p className="text-xs text-zinc-400">
              Propose an updated price or substitution to the customer. The original order snapshot
              remains preserved until the customer acknowledges.
            </p>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Amendment Reason
              </label>
              <input
                type="text"
                value={amendReason}
                onChange={(e) => setAmendReason(e.target.value)}
                placeholder="e.g. Origin beans depleted, proposing reserve batch..."
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Substitutions / Modification Details
              </label>
              <input
                type="text"
                value={amendSubstitutions}
                onChange={(e) => setAmendSubstitutions(e.target.value)}
                placeholder="e.g. SL28 Flat White -> Yirgacheffe Reserve Flat White"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                New Disclosed Total ({selectedBrand.currency})
              </label>
              <input
                type="number"
                value={amendNewTotal}
                onChange={(e) => setAmendNewTotal(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-amber-500 font-mono"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setAmendOrderId(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  proposeOrderAmendment(amendOrderId, amendReason, amendNewTotal, amendSubstitutions);
                  setAmendOrderId(null);
                }}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold"
              >
                Dispatch Proposed Amendment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
