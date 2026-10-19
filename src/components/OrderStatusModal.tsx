import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Clock,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  MessageCircle,
  ChefHat,
  PackageCheck,
  ChevronRight,
  Info,
} from 'lucide-react';
import { Order, OrderStatus } from '../types';

interface OrderStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string | null;
}

export const OrderStatusModal: React.FC<OrderStatusModalProps> = ({ isOpen, onClose, orderId }) => {
  const { orders, withdrawOrder, requestOrderCancellation, agreeOrderAmendment, brands } = useApp();
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(orderId);

  if (!isOpen) return null;

  const currentOrder = orders.find((o) => o.id === (selectedOrderId || orderId)) || orders[0];
  const orderBrand = currentOrder ? brands.find((b) => b.id === currentOrder.brandId) : null;

  const getStepStatus = (stepName: 'submitted' | 'accepted' | 'ready') => {
    if (!currentOrder) return 'upcoming';

    if (currentOrder.status === 'declined' || currentOrder.status === 'withdrawn' || currentOrder.status === 'cancelled') {
      return 'terminated';
    }

    if (stepName === 'submitted') {
      return 'completed';
    }
    if (stepName === 'accepted') {
      if (currentOrder.status === 'accepted' || currentOrder.status === 'ready' || currentOrder.status === 'cancellation_requested') {
        return 'completed';
      }
      return 'active';
    }
    if (stepName === 'ready') {
      if (currentOrder.status === 'ready') return 'completed';
      if (currentOrder.status === 'accepted') return 'active';
      return 'upcoming';
    }
    return 'upcoming';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
      <div className="bg-zinc-900 border border-zinc-700/80 rounded-t-3xl sm:rounded-3xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-white text-base">Protected Order Tracker</h3>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                Account-Free PWA
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Live updates directly from business declarations
            </p>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Order Selector (if multiple orders exist) */}
          {orders.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-zinc-500 font-semibold uppercase text-[10px]">Your Orders:</span>
              {orders.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setSelectedOrderId(o.id)}
                  className={`px-3 py-1.5 rounded-lg font-mono font-bold transition whitespace-nowrap ${
                    (selectedOrderId || orderId) === o.id
                      ? 'bg-amber-500 text-black'
                      : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {o.referenceCode} ({o.status})
                </button>
              ))}
            </div>
          )}

          {!currentOrder ? (
            <div className="py-12 text-center text-zinc-500 text-xs">No orders found.</div>
          ) : (
            <>
              {/* Order Overview Banner */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-zinc-500 uppercase font-semibold">Reference</div>
                  <div className="text-lg font-mono font-black text-white">
                    {currentOrder.referenceCode}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">{currentOrder.brandName}</div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-zinc-500 uppercase font-semibold">Total</div>
                  <div className="text-lg font-mono font-black text-amber-400">
                    {currentOrder.currency} {currentOrder.total}
                  </div>
                  <div className="text-[11px] text-zinc-400 capitalize">
                    {currentOrder.serviceMode.replace('_', ' ')}
                  </div>
                </div>
              </div>

              {/* Lifecycle Step Progression (PD-001 Section 8) */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Order Progression
                </div>

                <div className="space-y-3 relative pl-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-zinc-800">
                  {/* Step 1: Submitted */}
                  <div className="relative flex items-start gap-3">
                    <div
                      className={`absolute -left-6 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        getStepStatus('submitted') === 'completed'
                          ? 'bg-emerald-500 text-black'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Request Submitted to Merchant
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {new Date(currentOrder.createdAt).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })} • Awaiting merchant review & decision
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Accepted */}
                  <div className="relative flex items-start gap-3">
                    <div
                      className={`absolute -left-6 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        currentOrder.status === 'accepted' || currentOrder.status === 'ready'
                          ? 'bg-emerald-500 text-black'
                          : currentOrder.status === 'submitted'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500 animate-pulse'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {currentOrder.status === 'accepted' || currentOrder.status === 'ready' ? (
                        '✓'
                      ) : (
                        '2'
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>Merchant Decision (Acceptance)</span>
                        {currentOrder.consumedUnit && (
                          <span className="text-[10px] font-normal px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            1 unit recorded
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {currentOrder.status === 'submitted' && (
                          <span className="text-amber-400 font-medium">
                            Pending business decision. The kitchen is reviewing your request.
                          </span>
                        )}
                        {currentOrder.status === 'accepted' && (
                          <span className="text-emerald-400 font-medium">
                            Accepted by merchant! Preparation in progress.
                          </span>
                        )}
                        {currentOrder.status === 'declined' && (
                          <span className="text-rose-400 font-medium">
                            Declined by merchant: {currentOrder.declineReason || 'Items unavailable'}.
                          </span>
                        )}
                        {currentOrder.status === 'withdrawn' && (
                          <span className="text-zinc-400">Withdrawn by customer before decision.</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Ready */}
                  <div className="relative flex items-start gap-3">
                    <div
                      className={`absolute -left-6 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        currentOrder.status === 'ready'
                          ? 'bg-emerald-500 text-black'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {currentOrder.status === 'ready' ? '✓' : '3'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Business-Declared Ready</div>
                      <div className="text-[11px] text-zinc-400">
                        {currentOrder.status === 'ready' ? (
                          <span className="text-emerald-400 font-semibold">
                            Ready for service / pickup! Declared by kitchen at{' '}
                            {currentOrder.readyAt
                              ? new Date(currentOrder.readyAt).toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })
                              : 'now'}
                            .
                          </span>
                        ) : (
                          'Waiting for kitchen readiness declaration.'
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Summary */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Ordered Items
                </div>
                <div className="bg-zinc-950 rounded-2xl p-3 border border-zinc-800 space-y-2 text-xs">
                  {currentOrder.items.map((it, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="text-zinc-200">
                        <span className="font-bold text-white">{it.quantity}x</span> {it.offeringName}
                        {it.selectedModifiers.length > 0 && (
                          <span className="text-zinc-500 text-[11px] block">
                            {it.selectedModifiers.map((m) => m.optionName).join(', ')}
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-zinc-400">
                        {currentOrder.currency} {it.itemTotal}
                      </div>
                    </div>
                  ))}
                  {currentOrder.tableOrRoomNumber && (
                    <div className="pt-2 border-t border-zinc-900 text-zinc-400 text-[11px]">
                      Destination: <strong className="text-white">{currentOrder.tableOrRoomNumber}</strong>
                    </div>
                  )}
                  {currentOrder.deliveryAddress && (
                    <div className="pt-2 border-t border-zinc-900 text-zinc-400 text-[11px]">
                      Delivery to: <strong className="text-white">{currentOrder.deliveryAddress}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Amendment Proposal Handling (§6.G & PD-001 Section 8) */}
              {currentOrder.status === 'amendment_proposed' && currentOrder.amendment && (
                <div className="bg-amber-950/50 border-2 border-amber-500 rounded-2xl p-4 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                    <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                      Merchant Proposed Amendment
                    </span>
                  </div>
                  <div className="text-xs text-zinc-300 space-y-1">
                    <div>
                      Reason: <strong className="text-white">{currentOrder.amendment.reason}</strong>
                    </div>
                    <div>
                      Substitutions:{' '}
                      <strong className="text-amber-300">{currentOrder.amendment.substitutions}</strong>
                    </div>
                    <div className="pt-1 flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Original Total: {currentOrder.currency} {currentOrder.originalSnapshot?.total || currentOrder.subtotal}</span>
                      <span className="text-white font-bold font-mono">
                        New Total: {currentOrder.currency} {currentOrder.amendment.newTotal}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => agreeOrderAmendment(currentOrder.id)}
                      className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition"
                    >
                      Acknowledge & Agree to Amendment
                    </button>
                    <button
                      onClick={() => withdrawOrder(currentOrder.id)}
                      className="px-3 py-2.5 rounded-xl bg-zinc-800 text-rose-400 hover:text-rose-300 text-xs font-semibold"
                    >
                      Decline & Withdraw
                    </button>
                  </div>
                </div>
              )}

              {/* Customer Actions Based on Lifecycle State (PD-001 Section 8) */}
              <div className="space-y-2 pt-2">
                {currentOrder.status === 'submitted' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => withdrawOrder(currentOrder.id)}
                      className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-rose-400 border border-zinc-700 text-xs font-semibold transition"
                    >
                      Withdraw Request Before Decision
                    </button>
                  </div>
                )}

                {currentOrder.status === 'accepted' && (
                  <div className="space-y-2">
                    <button
                      onClick={() => requestOrderCancellation(currentOrder.id)}
                      className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-rose-400 border border-zinc-700 text-xs font-semibold transition"
                    >
                      Request Cancellation from Merchant
                    </button>
                    <p className="text-[11px] text-zinc-500 text-center">
                      *Cancellation after merchant acceptance requires merchant confirmation.
                    </p>
                  </div>
                )}

                {orderBrand && (
                  <a
                    href={`https://wa.me/${orderBrand.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(orderBrand.name)}%2C%20regarding%20my%20order%20${currentOrder.referenceCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Contact Merchant on WhatsApp</span>
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
