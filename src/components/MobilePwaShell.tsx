import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Wifi,
  Signal,
  Battery,
  Lock,
  RotateCw,
  Download,
  Share2,
  Home,
  Search,
  ShoppingBag,
  Clock,
  Store,
  ChefHat,
  Hotel,
  Layers,
  ShieldCheck,
  Plus,
  Bell,
  Sparkles,
  WifiOff,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

interface MobilePwaShellProps {
  children: React.ReactNode;
  onOpenCart: () => void;
  onOpenOrders: () => void;
  onNavigateHome: () => void;
  onNavigateDirectory: (q?: string) => void;
}

export const MobilePwaShell: React.FC<MobilePwaShellProps> = ({
  children,
  onOpenCart,
  onOpenOrders,
  onNavigateHome,
  onNavigateDirectory,
}) => {
  const {
    role,
    setRole,
    mobileDevice,
    mobileOrientation,
    showDeviceFrame,
    cart,
    orders,
    activeBrand,
    setActiveBrandId,
    hotelAccessGranted,
    hotelGuestRoom,
    isOfflineSimulated,
    setIsOfflineSimulated,
    startOnboarding,
    organization,
  } = useApp();

  // Real-time clock for mobile status bar
  const [currentTime, setCurrentTime] = useState<string>('9:41');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formatted = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentTime(formatted);
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const pendingOrders = orders.filter((o) => o.status === 'submitted');
  const activeCustomerOrders = orders.filter(
    (o) => o.status === 'submitted' || o.status === 'accepted' || o.status === 'ready'
  );

  // Dynamic Island status info
  const latestOrder = orders[0];
  const dynamicIslandInfo = latestOrder && (latestOrder.status === 'accepted' || latestOrder.status === 'ready')
    ? {
        text: latestOrder.status === 'ready' ? 'Order Ready!' : 'Preparing order...',
        color: latestOrder.status === 'ready' ? 'text-emerald-400' : 'text-amber-400',
      }
    : null;

  // Device dimension specifications
  const getDeviceDimensions = () => {
    let width = 393;
    let height = 852;

    switch (mobileDevice) {
      case 'iphone15':
        width = 393;
        height = 852;
        break;
      case 'pixel8':
        width = 412;
        height = 915;
        break;
      case 'compact':
        width = 375;
        height = 720;
        break;
      case 'tablet':
        width = 768;
        height = 1024;
        break;
      case 'fluid':
        width = 430;
        height = 880;
        break;
    }

    if (mobileOrientation === 'landscape') {
      const temp = width;
      width = height;
      height = temp;
    }

    return { width, height };
  };

  const { width: devWidth, height: devHeight } = getDeviceDimensions();

  // Dynamic PWA URL for the address bar
  const getPwaUrl = () => {
    if (activeBrand) {
      return `pewa.app/c/${activeBrand.slug}`;
    }
    if (role === 'hotel_guest') {
      return `pewa.app/hotel/room-408`;
    }
    if (role === 'merchant_owner' || role === 'merchant_manager') {
      return `pewa.app/merchant/console`;
    }
    if (role === 'merchant_staff') {
      return `pewa.app/kitchen/station-1`;
    }
    if (role === 'pewa_operator') {
      return `pewa.app/operator/oversight`;
    }
    return `pewa.app/explore`;
  };

  return (
    <div className="w-full flex justify-center items-center py-4 sm:py-8 px-2 overflow-x-auto min-h-[calc(100vh-140px)]">
      {/* Phone Mockup Frame or Borderless Container */}
      <div
        style={{
          width: showDeviceFrame ? `${devWidth}px` : '100%',
          maxWidth: showDeviceFrame ? `${devWidth}px` : `${Math.max(devWidth, 480)}px`,
          height: showDeviceFrame ? `${devHeight}px` : 'auto',
          minHeight: showDeviceFrame ? `${devHeight}px` : '820px',
        }}
        className={`relative flex flex-col bg-zinc-950 text-zinc-100 transition-all duration-300 ${
          showDeviceFrame
            ? 'rounded-[50px] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_0_12px_#1c1c1f,0_0_0_14px_#2c2c30,0_0_0_15px_#101012] border-4 border-zinc-850 ring-1 ring-white/10 overflow-hidden'
            : 'rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden'
        }`}
      >
        {/* Hardware Edge Buttons Simulation (Only when frame is on & in portrait) */}
        {showDeviceFrame && mobileOrientation === 'portrait' && (
          <>
            {/* Silent Switch */}
            <div className="absolute -left-[16px] top-24 w-[4px] h-8 bg-zinc-700 rounded-l-md pointer-events-none" />
            {/* Volume Up */}
            <div className="absolute -left-[16px] top-36 w-[4px] h-12 bg-zinc-700 rounded-l-md pointer-events-none" />
            {/* Volume Down */}
            <div className="absolute -left-[16px] top-52 w-[4px] h-12 bg-zinc-700 rounded-l-md pointer-events-none" />
            {/* Power Button */}
            <div className="absolute -right-[16px] top-40 w-[4px] h-16 bg-zinc-700 rounded-r-md pointer-events-none" />
          </>
        )}

        {/* TOP STATUS BAR (Carrier, Time, Dynamic Island, Battery) */}
        <div className="bg-zinc-950 px-6 pt-3 pb-1 select-none flex items-center justify-between text-xs font-semibold text-zinc-300 z-30 shrink-0">
          {/* Left: Clock */}
          <div className="w-16 flex items-center font-mono text-[13px] tracking-tight">
            <span>{currentTime}</span>
          </div>

          {/* Center: Dynamic Island Pill */}
          <div className="flex-1 flex justify-center">
            <div
              className={`h-7 px-3 bg-black rounded-full flex items-center justify-center gap-2 border border-zinc-800/80 shadow-md transition-all duration-300 ${
                dynamicIslandInfo ? 'min-w-[150px] bg-zinc-900 border-amber-500/40' : 'w-28'
              }`}
            >
              {dynamicIslandInfo ? (
                <div className="flex items-center gap-1.5 text-[11px] font-semibold animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className={dynamicIslandInfo.color}>{dynamicIslandInfo.text}</span>
                </div>
              ) : (
                <>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-blue-950/60 border border-blue-900/40" />
                </>
              )}
            </div>
          </div>

          {/* Right: Cellular 5G, Wi-Fi, Battery */}
          <div className="w-16 flex items-center justify-end gap-1.5 text-[11px] text-zinc-300">
            <Signal className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">5G</span>
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center gap-0.5">
              <div className="w-4 h-2.5 border border-zinc-300 rounded-[3px] p-[1px] flex items-center">
                <div className="h-full w-full bg-emerald-400 rounded-[1px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* PWA WEB APP BROWSER ADDRESS BAR */}
        <div className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800/80 px-3 py-1.5 flex items-center justify-between gap-2 z-20 shrink-0">
          <div className="flex-1 bg-zinc-950/80 rounded-xl px-2.5 py-1 flex items-center justify-between border border-zinc-800 text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="font-mono text-zinc-200 truncate">{getPwaUrl()}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-zinc-500 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="hidden sm:inline">PWA Secure</span>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {/* Install PWA Prompt */}
            <button
              onClick={() => alert('PWA Shell Ready: Add to Mobile Home Screen enabled.')}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-zinc-700 transition"
              title="Add to Home Screen (PWA)"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
            {/* Share / Reload */}
            <button
              onClick={() => window.location.reload()}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 border border-zinc-700 transition"
              title="Refresh PWA Session"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* OFFLINE SIMULATION BANNER INSIDE MOBILE SHELL */}
        {isOfflineSimulated && (
          <div className="bg-rose-950/90 border-b border-rose-500/40 px-3 py-1 text-[11px] text-rose-200 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Offline Mode (Cached Menus)</span>
            </div>
            <button
              onClick={() => setIsOfflineSimulated(false)}
              className="text-[10px] font-bold bg-rose-500 text-black px-1.5 py-0.2 rounded"
            >
              Online
            </button>
          </div>
        )}

        {/* SCROLLABLE MOBILE CONTENT VIEWPORT */}
        <div
          id="mobile-scroll-container"
          className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 pb-24 space-y-4 scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {children}
        </div>

        {/* MOBILE PWA BOTTOM NAVIGATION DOCK (Tailored per Persona) */}
        <div className="absolute bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800/90 px-3 pt-2 pb-1">
          {/* Navigation Items based on Role */}
          <div className="flex items-center justify-around text-[10px] font-medium text-zinc-400">
            
            {/* CUSTOMER PWA BOTTOM DOCK */}
            {role === 'customer' && (
              <>
                <button
                  onClick={() => {
                    setActiveBrandId(null);
                    onNavigateHome();
                  }}
                  className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition ${
                    !activeBrand ? 'text-amber-400 font-bold' : 'hover:text-zinc-200'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </button>

                <button
                  onClick={() => onNavigateDirectory()}
                  className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl hover:text-zinc-200 transition"
                >
                  <Search className="w-4 h-4" />
                  <span>Explore</span>
                </button>

                <button
                  onClick={onOpenCart}
                  className="relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl hover:text-amber-300 transition"
                >
                  <div className="relative">
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-amber-500 text-black font-black text-[9px] px-1 rounded-full animate-bounce">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-amber-300 font-semibold">Cart</span>
                </button>

                <button
                  onClick={onOpenOrders}
                  className="relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl hover:text-zinc-200 transition"
                >
                  <Clock className="w-4 h-4" />
                  {activeCustomerOrders.length > 0 && (
                    <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-emerald-400"></span>
                  )}
                  <span>Orders</span>
                </button>
              </>
            )}

            {/* HOTEL GUEST BOTTOM DOCK */}
            {role === 'hotel_guest' && (
              <>
                <button
                  onClick={() => setActiveBrandId(null)}
                  className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl text-amber-400 font-bold"
                >
                  <Hotel className="w-4 h-4" />
                  <span>In-Room Dining</span>
                </button>

                <button
                  onClick={onOpenCart}
                  className="relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl text-zinc-300 hover:text-amber-400"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[9px] px-1 rounded-full font-bold">
                      {cartCount}
                    </span>
                  )}
                  <span>Room Tray</span>
                </button>

                <button
                  onClick={onOpenOrders}
                  className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl hover:text-zinc-200"
                >
                  <Clock className="w-4 h-4" />
                  <span>Folio Status</span>
                </button>
              </>
            )}

            {/* MERCHANT OWNER & BUSINESS MANAGER BOTTOM DOCK */}
            {(role === 'merchant_owner' || role === 'merchant_manager' || role === 'merchant_admin') && (
              <>
                <button
                  onClick={() => {
                    const el = document.getElementById('tab-orders-btn');
                    if (el) el.click();
                  }}
                  className="relative flex flex-col items-center gap-0.5 py-1 px-2 text-amber-400 font-bold"
                >
                  <div className="relative">
                    <ShoppingBag className="w-4 h-4" />
                    {pendingOrders.length > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white font-black text-[9px] px-1 rounded-full animate-pulse">
                        {pendingOrders.length}
                      </span>
                    )}
                  </div>
                  <span>Orders</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('tab-menu-btn');
                    if (el) el.click();
                  }}
                  className="flex flex-col items-center gap-0.5 py-1 px-2 text-zinc-400 hover:text-white"
                >
                  <ChefHat className="w-4 h-4" />
                  <span>Menu Items</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('tab-units-btn');
                    if (el) el.click();
                  }}
                  className="flex flex-col items-center gap-0.5 py-1 px-2 text-zinc-400 hover:text-white"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Units</span>
                </button>

                <button
                  onClick={() => startOnboarding('cafe')}
                  className="flex flex-col items-center gap-0.5 py-1 px-2 text-teal-400 hover:text-teal-300 font-semibold"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Onboard</span>
                </button>
              </>
            )}

            {/* OPERATIONAL STAFF (KITCHEN) BOTTOM DOCK */}
            {role === 'merchant_staff' && (
              <>
                <button
                  onClick={() => {
                    const el = document.getElementById('tab-orders-btn');
                    if (el) el.click();
                  }}
                  className="relative flex flex-col items-center gap-0.5 py-1 px-3 text-purple-400 font-bold"
                >
                  <div className="relative">
                    <ChefHat className="w-4 h-4" />
                    {pendingOrders.length > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-purple-500 text-white font-black text-[9px] px-1 rounded-full">
                        {pendingOrders.length}
                      </span>
                    )}
                  </div>
                  <span>Kitchen Tickets</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('tab-menu-btn');
                    if (el) el.click();
                  }}
                  className="flex flex-col items-center gap-0.5 py-1 px-3 text-zinc-400 hover:text-white"
                >
                  <Store className="w-4 h-4" />
                  <span>86 / Stock Out</span>
                </button>

                <button
                  onClick={() => alert('Kitchen Chime: Sound alerts active for incoming tickets.')}
                  className="flex flex-col items-center gap-0.5 py-1 px-3 text-amber-400 hover:text-amber-300"
                >
                  <Bell className="w-4 h-4" />
                  <span>Chime On</span>
                </button>
              </>
            )}

            {/* PEWA OPERATOR BOTTOM DOCK */}
            {role === 'pewa_operator' && (
              <>
                <div className="flex items-center gap-2 py-1 px-2 text-rose-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Operator Bounded Console</span>
                </div>
              </>
            )}

            {/* DOCS VIEWER BOTTOM DOCK */}
            {role === 'docs_viewer' && (
              <>
                <div className="flex items-center gap-2 py-1 px-2 text-zinc-400 font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Architecture Documentation & Specs</span>
                </div>
              </>
            )}
          </div>

          {/* HOME SWIPE INDICATOR BAR */}
          <div className="w-32 h-1 bg-zinc-600 rounded-full mx-auto mt-2 mb-0.5 opacity-80" />
        </div>
      </div>
    </div>
  );
};
