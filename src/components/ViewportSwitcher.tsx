import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Smartphone,
  Monitor,
  RotateCw,
  Eye,
  EyeOff,
  ChevronDown,
  UtensilsCrossed,
  Hotel,
  Store,
  ChefHat,
  ShieldCheck,
  FileText,
  Layers,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';
import { UserRole, MobileDeviceModel } from '../types';

interface ViewportSwitcherProps {
  onOpenCart?: () => void;
  onOpenOrders?: () => void;
}

export const ViewportSwitcher: React.FC<ViewportSwitcherProps> = ({
  onOpenCart,
  onOpenOrders,
}) => {
  const {
    viewportMode,
    setViewportMode,
    mobileDevice,
    setMobileDevice,
    mobileOrientation,
    setMobileOrientation,
    showDeviceFrame,
    setShowDeviceFrame,
    role,
    setRole,
    setActiveBrandId,
    startOnboarding,
  } = useApp();

  const [showDeviceDropdown, setShowDeviceDropdown] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const devicePresets: Record<MobileDeviceModel, { name: string; width: number; height: number; icon: string }> = {
    iphone15: { name: 'iPhone 15 Pro', width: 393, height: 852, icon: '🍏' },
    pixel8: { name: 'Google Pixel 8', width: 412, height: 915, icon: '🤖' },
    compact: { name: 'Compact Phone', width: 375, height: 720, icon: '📱' },
    tablet: { name: 'iPad Mini / Tablet', width: 768, height: 1024, icon: '📟' },
    fluid: { name: 'Responsive Mobile', width: 420, height: 860, icon: '↔️' },
  };

  const personaOptions: { id: UserRole; label: string; sub: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'customer',
      label: 'Customer PWA',
      sub: 'Mobile ordering without login',
      icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
      color: 'text-emerald-400',
    },
    {
      id: 'hotel_guest',
      label: 'Hotel Guest PWA',
      sub: 'In-room dining & protected lounge',
      icon: <Hotel className="w-3.5 h-3.5" />,
      color: 'text-amber-400',
    },
    {
      id: 'merchant_owner',
      label: 'Merchant Console (Owner)',
      sub: 'Brand, units & catalog control',
      icon: <Store className="w-3.5 h-3.5" />,
      color: 'text-blue-400',
    },
    {
      id: 'merchant_manager',
      label: 'Business Manager',
      sub: 'Live ops, menu items & pricing',
      icon: <Layers className="w-3.5 h-3.5" />,
      color: 'text-teal-400',
    },
    {
      id: 'merchant_staff',
      label: 'Operational Staff (Kitchen)',
      sub: 'Mobile KDS & declare ready',
      icon: <ChefHat className="w-3.5 h-3.5" />,
      color: 'text-purple-400',
    },
    {
      id: 'pewa_operator',
      label: 'PEWA Operator',
      sub: 'Subscriber & campaign oversight',
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      color: 'text-rose-400',
    },
    {
      id: 'docs_viewer',
      label: 'Specs & Architecture Docs',
      sub: 'Foundational specification explorer',
      icon: <FileText className="w-3.5 h-3.5" />,
      color: 'text-zinc-400',
    },
  ];

  return (
    <div className="bg-zinc-950 border-b border-zinc-800/80 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-3 py-2 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Viewport Mode Switcher (Mobile PWA vs Desktop) */}
        <div className="flex items-center gap-2">
          <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider hidden sm:block">
            Layout:
          </div>
          
          <div className="bg-zinc-900 border border-zinc-700/80 rounded-xl p-0.5 flex items-center shadow-inner">
            <button
              onClick={() => setViewportMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                viewportMode === 'mobile'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Switch to Mobile-First PWA Shell"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile PWA</span>
              <span className="hidden md:inline-block text-[10px] font-mono px-1 py-0.2 bg-black/20 rounded">
                Phone
              </span>
            </button>

            <button
              onClick={() => setViewportMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                viewportMode === 'desktop'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Switch to Full Desktop Viewport"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
              <span className="hidden md:inline-block text-[10px] font-mono px-1 py-0.2 bg-black/20 rounded">
                Wide
              </span>
            </button>
          </div>

          {/* Quick Info Pill */}
          <span className="text-[11px] text-zinc-500 hidden lg:inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Mobile-First PWA Architecture</span>
          </span>
        </div>

        {/* Center: Device Controls (Only in Mobile Mode) */}
        {viewportMode === 'mobile' && (
          <div className="flex items-center gap-1.5">
            {/* Device Model Selector */}
            <div className="relative">
              <button
                onClick={() => setShowDeviceDropdown(!showDeviceDropdown)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-700 text-xs font-medium text-zinc-200 transition"
                title="Select Phone/Tablet Model"
              >
                <span>{devicePresets[mobileDevice].icon}</span>
                <span className="font-semibold">{devicePresets[mobileDevice].name}</span>
                <ChevronDown className="w-3 h-3 text-zinc-400" />
              </button>

              {showDeviceDropdown && (
                <div className="absolute top-full left-0 mt-1.5 w-56 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-1.5 z-50">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-2 py-1">
                    Select Target Device
                  </div>
                  {(Object.keys(devicePresets) as MobileDeviceModel[]).map((dKey) => (
                    <button
                      key={dKey}
                      onClick={() => {
                        setMobileDevice(dKey);
                        setShowDeviceDropdown(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition ${
                        mobileDevice === dKey
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'hover:bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{devicePresets[dKey].icon}</span>
                        <span>{devicePresets[dKey].name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {devicePresets[dKey].width}px
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Orientation Rotate Toggle */}
            <button
              onClick={() =>
                setMobileOrientation(mobileOrientation === 'portrait' ? 'landscape' : 'portrait')
              }
              className={`p-1.5 rounded-lg border text-xs transition ${
                mobileOrientation === 'landscape'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border-zinc-700'
              }`}
              title={`Rotate device (Current: ${mobileOrientation})`}
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            {/* Frame Mockup Toggle */}
            <button
              onClick={() => setShowDeviceFrame(!showDeviceFrame)}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-xs font-medium transition ${
                showDeviceFrame
                  ? 'bg-zinc-850 text-zinc-200 border-zinc-700'
                  : 'bg-zinc-900 text-zinc-500 border-zinc-800'
              }`}
              title={showDeviceFrame ? 'Hide Phone Frame Chassis' : 'Show Phone Frame Chassis'}
            >
              {showDeviceFrame ? <Eye className="w-3.5 h-3.5 text-amber-400" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[11px]">
                {showDeviceFrame ? 'Bezel On' : 'Bezel Off'}
              </span>
            </button>
          </div>
        )}

        {/* Right: Quick Persona / App Switcher */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowRoleMenu(!showRoleMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-850 hover:from-zinc-850 hover:to-zinc-800 border border-amber-500/30 text-xs font-semibold text-zinc-100 transition shadow-sm"
            >
              <span className="text-zinc-400 text-[11px] font-normal hidden sm:inline">Active App:</span>
              <span className="text-amber-300">{personaOptions.find((p) => p.id === role)?.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
            </button>

            {showRoleMenu && (
              <div className="absolute top-full right-0 mt-1.5 w-72 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-2 py-1">
                  Switch Persona / Application Shell
                </div>
                {personaOptions.map((p) => {
                  const isSelected = role === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setRole(p.id);
                        if (p.id === 'customer') {
                          setActiveBrandId(null);
                        }
                        setShowRoleMenu(false);
                      }}
                      className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left transition ${
                        isSelected
                          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          : 'hover:bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      <div className={`mt-0.5 ${p.color}`}>{p.icon}</div>
                      <div className="flex-1">
                        <div className="text-xs font-bold flex items-center justify-between">
                          <span>{p.label}</span>
                          {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                        </div>
                        <div className="text-[11px] text-zinc-400 leading-tight mt-0.5">
                          {p.sub}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
