import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Clock,
  MapPin,
  Utensils,
  Truck,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { ServiceMode } from '../types';

interface CartCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderSubmitted: (orderId: string) => void;
}

export const CartCheckoutModal: React.FC<CartCheckoutModalProps> = ({
  isOpen,
  onClose,
  onOrderSubmitted,
}) => {
  const { cart, cartBrandId, brands, updateCartQuantity, removeFromCart, clearCart, submitOrder, isOfflineSimulated } =
    useApp();

  const [customerName, setCustomerName] = useState('Fred Kenogo');
  const [customerContact, setCustomerContact] = useState('+254 712 999 888');
  const [serviceMode, setServiceMode] = useState<ServiceMode>('dine_in');
  const [tableOrRoomNumber, setTableOrRoomNumber] = useState('Table 4');
  const [deliveryAddress, setDeliveryAddress] = useState('Riverside Drive, Block B, Apt 304');
  const [orderNotes, setOrderNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentBrand = brands.find((b) => b.id === cartBrandId);
  const subtotal = cart.reduce((sum, item) => sum + item.itemTotal, 0);

  const hasSoldOutItem = cart.some(
    (it) =>
      it.offeringName.includes('(Sold Out)') ||
      currentBrand?.offerings.find((o) => o.id === it.offeringId)?.status === 'sold_out'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerContact.trim() || cart.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const order = submitOrder({
        customerName: customerName.trim(),
        customerContact: customerContact.trim(),
        serviceMode,
        tableOrRoomNumber: serviceMode === 'dine_in' ? tableOrRoomNumber : undefined,
        deliveryAddress: serviceMode === 'delivery' ? deliveryAddress : undefined,
        notes: orderNotes.trim() || undefined,
      });

      setIsSubmitting(false);
      if (order) {
        onClose();
        onOrderSubmitted(order.id);
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
      <div className="bg-zinc-900 border border-zinc-700/80 rounded-t-3xl sm:rounded-3xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">Your Selection Request</h3>
              <p className="text-xs text-zinc-400">
                {currentBrand ? currentBrand.name : 'No business selected'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto" />
              <div className="text-sm font-semibold text-white">Your selection tray is empty</div>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                Explore our published menus to add items to your selection request.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  <span>Selected Offerings ({cart.length})</span>
                  <button
                    onClick={clearCart}
                    className="text-rose-400 hover:text-rose-300 font-normal lowercase text-[11px]"
                  >
                    clear all
                  </button>
                </div>

                <div className="space-y-2">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm">{item.offeringName}</div>
                        {item.selectedModifiers.length > 0 && (
                          <div className="text-zinc-400 text-[11px] mt-0.5 space-y-0.5">
                            {item.selectedModifiers.map((m, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <span className="text-zinc-500">•</span>
                                <span>{m.optionName}</span>
                                {m.priceDelta > 0 && (
                                  <span className="text-amber-400/90 font-mono">
                                    (+{currentBrand?.currency} {m.priceDelta})
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {item.notes && (
                          <div className="text-[11px] text-zinc-500 italic mt-1">"{item.notes}"</div>
                        )}
                        <div className="font-mono font-bold text-amber-400 mt-1">
                          {currentBrand?.currency} {item.itemTotal}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg p-1 shrink-0">
                        <button
                          onClick={() => updateCartQuantity(index, -1)}
                          className="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(index, 1)}
                          className="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details Form */}
              <form onSubmit={handleSubmit} id="order-form" className="space-y-4 pt-2">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Service & Delivery Details
                </div>

                {/* Service Mode Selector */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'dine_in', label: 'Dine-In', icon: <Utensils className="w-3.5 h-3.5" /> },
                    { id: 'takeaway', label: 'Takeaway', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
                    { id: 'delivery', label: 'Delivery', icon: <Truck className="w-3.5 h-3.5" /> },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setServiceMode(mode.id as ServiceMode)}
                      className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border text-xs font-semibold transition ${
                        serviceMode === mode.id
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {mode.icon}
                      <span>{mode.label}</span>
                    </button>
                  ))}
                </div>

                {/* Location context field */}
                {serviceMode === 'dine_in' && (
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Table / Room Number
                    </label>
                    <input
                      type="text"
                      value={tableOrRoomNumber}
                      onChange={(e) => setTableOrRoomNumber(e.target.value)}
                      placeholder="e.g. Table 4 or Room 302"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>
                )}

                {serviceMode === 'delivery' && (
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Delivery Address & Landmark
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="e.g. 14 Riverside Drive, Apartment 4B"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Alex M."
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Phone / WhatsApp Contact
                    </label>
                    <input
                      type="tel"
                      value={customerContact}
                      onChange={(e) => setCustomerContact(e.target.value)}
                      placeholder="+254 700 000 000"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Special Request Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="e.g. Ring doorbell, no plastic cutlery..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                  />
                </div>

                {/* Sold-Out Item Warning (§SC-12 & AC-12) */}
                {hasSoldOutItem && (
                  <div className="bg-rose-950/70 border border-rose-500/50 p-3 rounded-xl text-xs text-rose-300 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-rose-200">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Item Unavailable (Sold Out)</span>
                    </div>
                    <p>
                      One or more items in your selection tray are currently sold out. Please remove
                      sold-out items using the '-' button before submitting your request.
                    </p>
                  </div>
                )}

                {/* Simulated Offline Warning (§SC-14) */}
                {isOfflineSimulated && (
                  <div className="bg-amber-950/70 border border-amber-500/50 p-3 rounded-xl text-xs text-amber-300 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-amber-200">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Device Offline (Simulated Network Drop)</span>
                    </div>
                    <p>
                      Network connection interrupted. Requests cannot be submitted while offline. Please
                      reconnect or use direct phone contact.
                    </p>
                  </div>
                )}

                {/* PEWA Constitution Commercial Disclosure (PD-001 Section 1 & 8) */}
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-300">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>PEWA Order Lifecycle Terms</span>
                  </div>
                  <p>
                    Submitting this structured request sends your selections directly to{' '}
                    <strong>{currentBrand?.name}</strong>. The merchant must explicitly accept; silence is
                    not acceptance. Food payment is settled directly with the business.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Modal Footer with Total & Submit */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="text-xs text-zinc-400">Disclosed Order Total:</div>
              <div className="text-xl font-black text-amber-400 font-mono">
                {currentBrand?.currency} {subtotal}
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="order-form"
                disabled={isSubmitting || hasSoldOutItem || isOfflineSimulated}
                className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 ${
                  hasSoldOutItem || isOfflineSimulated
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
                    : 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                }`}
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : hasSoldOutItem ? (
                  <span>Remove Sold-Out Item to Submit</span>
                ) : isOfflineSimulated ? (
                  <span>Offline (Network Interrupted)</span>
                ) : (
                  <>
                    <span>Submit Request to Merchant</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
