import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Hotel,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  LogOut,
  Moon,
  Wine,
  Utensils,
  Lock,
} from 'lucide-react';

interface HotelGuestViewProps {
  onSelectBrand: (brandId: string) => void;
}

export const HotelGuestView: React.FC<HotelGuestViewProps> = ({ onSelectBrand }) => {
  const {
    hotelAccessGranted,
    verifyHotelAccess,
    revokeHotelAccess,
    hotelGuestRoom,
    brands,
  } = useApp();

  const [roomInput, setRoomInput] = useState('408');
  const [accessCodeInput, setAccessCodeInput] = useState('AZURE2026');
  const [errorMsg, setErrorMsg] = useState('');

  const hotelBrand = brands.find((b) => b.businessType === 'hotel') || brands[1];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const success = verifyHotelAccess(roomInput, accessCodeInput);
    if (!success) {
      setErrorMsg('Invalid guest pass code. Please verify with reception (Default demo pass: AZURE2026)');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Informative Header referencing Foundation Principle */}
      <div className="bg-gradient-to-r from-blue-950/40 via-zinc-900 to-amber-950/30 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
          <Hotel className="w-3.5 h-3.5 text-blue-400" />
          <span>PEWA-S2-PD-001 §7 — Hotel Guest Protected Access</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
          Grand Azure Hotel In-Room Dining & Bar
        </h1>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
          A hotel guest is a customer without a compulsory PEWA account. The hotel configures protected
          in-room menus, midnight service and breakfast trays that remain unindexed by public search engines.
        </p>
      </div>

      {!hotelAccessGranted ? (
        /* Guest Pass Code Gate */
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 max-w-lg mx-auto space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
              <KeyRound className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-white">Guest Room Authentication</h2>
            <p className="text-xs text-zinc-400">
              Enter your room number and the access key provided on your keycard pocket or bedside QR.
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Room Number
              </label>
              <input
                type="text"
                value={roomInput}
                onChange={(e) => setRoomInput(e.target.value)}
                placeholder="e.g. 408"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none font-mono"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Guest Access Pass Code
              </label>
              <input
                type="text"
                value={accessCodeInput}
                onChange={(e) => setAccessCodeInput(e.target.value)}
                placeholder="e.g. AZURE2026"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none font-mono"
                required
              />
              <span className="text-[11px] text-zinc-500 mt-1 block">
                Demo code: <strong className="text-amber-400">AZURE2026</strong> (or any 4+ chars)
              </span>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition shadow-lg shadow-amber-500/20"
            >
              Verify & Unlock Guest Menus →
            </button>
          </form>

          <div className="text-[11px] text-zinc-500 text-center flex items-center justify-center gap-1.5 pt-2 border-t border-zinc-800">
            <Lock className="w-3.5 h-3.5 text-zinc-400" />
            <span>Room and guest identity never exposed to public indexes</span>
          </div>
        </div>
      ) : (
        /* Verified Hotel Guest Space */
        <div className="space-y-6">
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-300">
                  Guest Access Verified: {hotelGuestRoom}
                </div>
                <div className="text-xs text-zinc-300">
                  Exclusive In-Room Dining & 24/7 Midnight Service unlocked.
                </div>
              </div>
            </div>

            <button
              onClick={revokeHotelAccess}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white text-xs font-medium transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Change Room / Sign Out</span>
            </button>
          </div>

          {/* Protected Menus Showcase */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Hotel Guest Exclusive Offerings
              </h2>
              <span className="text-xs text-amber-400 font-semibold">Priority Delivery to {hotelGuestRoom}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hotelBrand.offerings
                .filter((o) => o.isProtectedGuestOnly)
                .map((offering) => (
                  <div
                    key={offering.id}
                    className="bg-zinc-900 border border-amber-500/30 rounded-2xl p-4 flex gap-4 hover:border-amber-500/60 transition"
                  >
                    {offering.image && (
                      <img
                        src={offering.image}
                        alt={offering.name}
                        className="w-24 h-24 rounded-xl object-cover border border-zinc-800 shrink-0"
                      />
                    )}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-white text-sm">{offering.name}</h4>
                          <span className="font-mono font-bold text-amber-400 text-sm">
                            {offering.currency} {offering.price}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                          {offering.description}
                        </p>
                        <div className="flex gap-1 mt-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300">
                            Hotel Guest Only
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectBrand(hotelBrand.id)}
                        className="mt-3 py-1.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Open Hotel Menu</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <div className="pt-4 text-center">
              <button
                onClick={() => onSelectBrand(hotelBrand.id)}
                className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs border border-zinc-700 transition"
              >
                View Full Grand Azure Menu (Public & Protected Items) →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
