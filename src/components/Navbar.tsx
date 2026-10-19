import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  Bell,
  UtensilsCrossed,
  ShieldCheck,
  Store,
  FileText,
  Hotel,
  Zap,
  Info,
  ChevronDown,
  X,
  ExternalLink,
  Layers,
  WifiOff,
  Plus,
  Smartphone,
  Monitor,
} from 'lucide-react';
import { UserRole } from '../types';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenOrders: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenOrders }) => {
  const {
    role,
    setRole,
    cart,
    notifications,
    markNotificationRead,
    organization,
    activeBrand,
    setActiveBrandId,
    startOnboarding,
    isOfflineSimulated,
    setIsOfflineSimulated,
    viewportMode,
    setViewportMode,
  } = useApp();

  const [showNotifs, setShowNotifs] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showPwaBanner, setShowPwaBanner] = useState(true);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const unreadNotifs = notifications.filter((n) => !n.read).length;

  const roleLabels: Record<UserRole, { label: string; icon: React.ReactNode; desc: string }> = {
    customer: {
      label: 'Customer PWA',
      icon: <UtensilsCrossed className="w-4 h-4 text-emerald-400" />,
      desc: 'Browse menus, search, order without account',
    },
    hotel_guest: {
      label: 'Hotel Guest (Protected)',
      icon: <Hotel className="w-4 h-4 text-amber-400" />,
      desc: 'Room service & lounge verified access',
    },
    merchant_owner: {
      label: 'Merchant Console (Owner)',
      icon: <Store className="w-4 h-4 text-blue-400" />,
      desc: 'Full brand, order, units & campaign administration',
    },
    merchant_admin: {
      label: 'Organisation Admin',
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      desc: 'Multi-brand group, venue & staff administration',
    },
    merchant_manager: {
      label: 'Business Manager',
      icon: <Store className="w-4 h-4 text-teal-400" />,
      desc: 'Menu, pricing & daily operation authority',
    },
    merchant_staff: {
      label: 'Operational Staff (Kitchen)',
      icon: <Store className="w-4 h-4 text-purple-400" />,
      desc: 'Fast order receiver & ready status declaration',
    },
    pewa_operator: {
      label: 'PEWA Operator Console',
      icon: <ShieldCheck className="w-4 h-4 text-rose-400" />,
      desc: 'Bounded subscriber dispute & campaign oversight',
    },
    docs_viewer: {
      label: 'Experience Reference & Specs',
      icon: <FileText className="w-4 h-4 text-zinc-400" />,
      desc: 'Product Truth Binding Map & architecture briefs',
    },
  };

  return (
    <>
      {/* Simulated Offline Network Banner (§SC-14 & AC-12) */}
      {isOfflineSimulated && (
        <div className="bg-rose-950/90 border-b border-rose-500/50 px-3 py-1.5 text-xs text-rose-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <WifiOff className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="font-bold text-rose-100">Offline Simulation Active (SC-14):</span>
            <span className="hidden sm:inline">
              Device disconnected from live network. Displaying local read-only cache.
            </span>
          </div>
          <button
            onClick={() => setIsOfflineSimulated(false)}
            className="text-[11px] font-bold bg-rose-500 text-black px-2.5 py-0.5 rounded transition hover:bg-rose-400"
          >
            Reconnect
          </button>
        </div>
      )}

      {/* Optional Dismissible PWA Install Invitation (PD-001 Section 6) */}
      {showPwaBanner && (
        <div className="bg-gradient-to-r from-amber-950/80 via-zinc-900 to-amber-950/80 border-b border-amber-500/20 px-3 py-1.5 text-xs text-amber-200/90 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-amber-300">PEWA PWA Ready:</span>
            <span className="hidden sm:inline">Add to your home screen for one-tap menu access, recents & status tracking.</span>
            <span className="sm:hidden">Install mobile PWA</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => alert('PWA Install triggered: PEWA can be installed to home screen on supported browsers.')}
              className="text-[11px] font-medium bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-2.5 py-0.5 rounded border border-amber-500/30"
            >
              Install App
            </button>
            <button
              onClick={() => setShowPwaBanner(false)}
              className="text-zinc-400 hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveBrandId(null);
                setRole('customer');
              }}
              className="flex items-center gap-2.5 group text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/10 border border-amber-400/30 group-hover:scale-105 transition">
                <span className="font-black text-black tracking-tight text-lg">P</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold tracking-tight text-white text-base">PEWA</span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                    V0 Ref
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 font-medium hidden sm:block">
                  Food & Beverage Menu Infrastructure
                </div>
              </div>
            </button>
          </div>

          {/* Quick Role Switcher Pill (Demonstrates all persona journeys) */}
          <div className="relative">
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-700/80 text-xs font-medium text-zinc-200 transition shadow-sm"
            >
              {roleLabels[role].icon}
              <span className="max-w-[120px] sm:max-w-none truncate font-semibold">
                {roleLabels[role].label}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {showRoleDropdown && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-zinc-900 border border-zinc-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-2 py-1">
                  Switch Experience Journey
                </div>
                {(Object.keys(roleLabels) as UserRole[]).map((rKey) => (
                  <button
                    key={rKey}
                    onClick={() => {
                      setRole(rKey);
                      setShowRoleDropdown(false);
                      if (rKey === 'customer') {
                        setActiveBrandId(null);
                      }
                    }}
                    className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left transition ${
                      role === rKey
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'hover:bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    <div className="mt-0.5">{roleLabels[rKey].icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">{roleLabels[rKey].label}</div>
                      <div className="text-[11px] text-zinc-400 leading-tight">
                        {roleLabels[rKey].desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Direct Mobile PWA / Desktop Viewport Switcher */}
          <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-700/80 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setViewportMode('mobile')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold transition ${
                viewportMode === 'mobile'
                  ? 'bg-amber-500 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Mobile PWA Layout"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile PWA</span>
            </button>
            <button
              onClick={() => setViewportMode('desktop')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold transition ${
                viewportMode === 'desktop'
                  ? 'bg-amber-500 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Desktop Layout"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
          </div>

          {/* Right Action Icons: Safeguard indicator, Notifications, Cart */}
          <div className="flex items-center gap-2">
            {/* Continuity Units Quick Indicator for Merchant */}
            {(role === 'merchant_owner' || role === 'merchant_staff') && (
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-zinc-400">Units:</span>
                <span className="font-mono font-bold text-white">
                  {organization.remainingStandardUnits}
                </span>
                <span className="text-zinc-500 text-[10px]">
                  (+{organization.recoverableContinuityUnits} cont.)
                </span>
              </div>
            )}

            {/* Onboard Business Button */}
            <button
              onClick={() => startOnboarding('cafe')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition"
              title="Launch Guided Business Onboarding Wizard"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Onboard Business</span>
              <span className="sm:hidden">Onboard</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifs(!showNotifs)}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 transition relative"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadNotifs > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-black font-bold text-[10px] rounded-full flex items-center justify-center">
                    {unreadNotifs}
                  </span>
                )}
              </button>

              {/* Notification Popover */}
              {showNotifs && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-zinc-900 border border-zinc-700/80 rounded-xl shadow-2xl p-3 z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5 text-amber-400" /> In-App Protected Inbox
                    </span>
                    <button
                      onClick={() => setShowNotifs(false)}
                      className="text-zinc-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="mt-2 space-y-2 max-h-72 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="text-xs text-zinc-500 text-center py-4">No notifications yet</div>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          onClick={() => {
                            markNotificationRead(n.id);
                            if (n.orderId) onOpenOrders();
                          }}
                          className={`p-2 rounded-lg text-left cursor-pointer border transition ${
                            n.read
                              ? 'bg-zinc-950/50 border-zinc-850 text-zinc-400'
                              : 'bg-zinc-800/70 border-amber-500/30 text-zinc-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-amber-400">{n.title}</span>
                            <span className="text-[10px] text-zinc-500">{n.timestamp}</span>
                          </div>
                          <p className="text-[11px] mt-0.5 leading-tight">{n.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-md shadow-amber-500/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order</span>
              {cartCount > 0 && (
                <span className="bg-black text-amber-400 px-1.5 py-0.2 rounded-full text-[11px] font-mono">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
