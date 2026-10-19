import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Brand,
  Offering,
  Order,
  OrderItem,
  Organization,
  UserRole,
  ServiceMode,
  AvailabilityStatus,
  ConsumptionLog,
  InAppNotification,
  SponsoredCampaign,
  OperatorCase,
  ScenarioPreset,
  OnboardingData,
  OnboardingCompletionResult,
  ViewportMode,
  MobileDeviceModel,
  MobileOrientation,
} from '../types';
import {
  initialBrands,
  initialOrganization,
  sampleInitialOrders,
  sampleConsumptionLogs,
  sampleCampaigns,
  sampleOperatorCases,
} from '../mockData';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  organization: Organization;
  brands: Brand[];
  activeBrand: Brand | null;
  activeBrandId: string | null;
  setActiveBrandId: (id: string | null) => void;
  cart: OrderItem[];
  cartBrandId: string | null;
  addToCart: (item: OrderItem, brandId: string) => void;
  removeFromCart: (index: number) => void;
  updateCartQuantity: (index: number, delta: number) => void;
  clearCart: () => void;
  orders: Order[];
  activeOrder: Order | null;
  activeOrderId: string | null;
  setActiveOrderId: (id: string | null) => void;
  submitOrder: (details: {
    customerName: string;
    customerContact: string;
    serviceMode: ServiceMode;
    tableOrRoomNumber?: string;
    deliveryAddress?: string;
    notes?: string;
  }) => Order | null;
  acceptOrder: (orderId: string) => { success: boolean; message: string };
  declineOrder: (orderId: string, reason: string) => void;
  markOrderReady: (orderId: string) => void;
  withdrawOrder: (orderId: string) => void;
  requestOrderCancellation: (orderId: string) => void;
  proposeOrderAmendment: (orderId: string, reason: string, newTotal: number, substitutions: string) => void;
  agreeOrderAmendment: (orderId: string) => void;
  toggleOfferingStatus: (brandId: string, offeringId: string, status: AvailabilityStatus) => void;
  addOfferingToBrand: (brandId: string, offering: Omit<Offering, 'id'>) => void;
  togglePublishBrand: (brandId: string) => void;
  purchaseUnits: (units: number) => void;
  favourites: string[];
  toggleFavourite: (brandId: string) => void;
  recents: string[];
  removeRecent: (brandId: string) => void;
  clearRecents: () => void;
  notifications: InAppNotification[];
  markNotificationRead: (id: string) => void;
  consumptionLogs: ConsumptionLog[];
  hotelAccessGranted: boolean;
  verifyHotelAccess: (roomNumber: string, accessCode: string) => boolean;
  revokeHotelAccess: () => void;
  hotelGuestRoom: string;
  // Scenario Control Engine (§7)
  currentScenario: ScenarioPreset;
  loadScenario: (scenario: ScenarioPreset) => void;
  resetAllScenarios: () => void;
  // Onboarding (§6.C, §14 & R01)
  showOnboardingModal: boolean;
  setShowOnboardingModal: (show: boolean) => void;
  selectedOnboardingArchetype: 'cafe' | 'delivery_kitchen' | 'hotel' | 'bakery' | null;
  setSelectedOnboardingArchetype: (archetype: 'cafe' | 'delivery_kitchen' | 'hotel' | 'bakery' | null) => void;
  onboardingResult: OnboardingCompletionResult | null;
  setOnboardingResult: (result: OnboardingCompletionResult | null) => void;
  startOnboarding: (archetype?: 'cafe' | 'delivery_kitchen' | 'hotel' | 'bakery') => void;
  completeOnboarding: (data: OnboardingData) => OnboardingCompletionResult;
  simulateFirstOrderForBrand: (brandId: string) => Order;
  // Campaigns (§6.J)
  campaigns: SponsoredCampaign[];
  createCampaign: (campaign: Omit<SponsoredCampaign, 'id' | 'impressionsDelivered' | 'clicksCount'>) => void;
  recordCampaignClick: (id: string) => void;
  // Operator Console (§6.L & P6)
  operatorCases: OperatorCase[];
  resolveOperatorCase: (caseId: string, note: string) => void;
  // Helper & Offline
  // Viewport & Mobile PWA Shell Controls
  viewportMode: ViewportMode;
  setViewportMode: (mode: ViewportMode) => void;
  mobileDevice: MobileDeviceModel;
  setMobileDevice: (device: MobileDeviceModel) => void;
  mobileOrientation: MobileOrientation;
  setMobileOrientation: (orientation: MobileOrientation) => void;
  showDeviceFrame: boolean;
  setShowDeviceFrame: (show: boolean) => void;
  isStructuredOrderingAvailableForBrand: (brandId: string) => { available: boolean; reason?: string };
  isOfflineSimulated: boolean;
  setIsOfflineSimulated: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('customer');
  const [currentScenario, setCurrentScenario] = useState<ScenarioPreset>('default');
  const [organization, setOrganization] = useState<Organization>(initialOrganization);
  const [brands, setBrands] = useState<Brand[]>(initialBrands);
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [cartBrandId, setCartBrandId] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>(sampleInitialOrders);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
  const [favourites, setFavourites] = useState<string[]>(['brand-daily-grind']);
  const [recents, setRecents] = useState<string[]>(['brand-daily-grind', 'brand-grand-azure']);
  const [hotelAccessGranted, setHotelAccessGranted] = useState<boolean>(false);
  const [hotelGuestRoom, setHotelGuestRoom] = useState<string>('Room 408');
  const [consumptionLogs, setConsumptionLogs] = useState<ConsumptionLog[]>(sampleConsumptionLogs);
  const [campaigns, setCampaigns] = useState<SponsoredCampaign[]>(sampleCampaigns);
  const [operatorCases, setOperatorCases] = useState<OperatorCase[]>(sampleOperatorCases);
  const [showOnboardingModal, setShowOnboardingModal] = useState<boolean>(false);
  const [selectedOnboardingArchetype, setSelectedOnboardingArchetype] = useState<
    'cafe' | 'delivery_kitchen' | 'hotel' | 'bakery' | null
  >(null);
  const [onboardingResult, setOnboardingResult] = useState<OnboardingCompletionResult | null>(null);
  const [isOfflineSimulated, setIsOfflineSimulated] = useState<boolean>(false);
  
  // Viewport & Mobile PWA Shell Controls
  const [viewportMode, setViewportMode] = useState<ViewportMode>('mobile');
  const [mobileDevice, setMobileDevice] = useState<MobileDeviceModel>('iphone15');
  const [mobileOrientation, setMobileOrientation] = useState<MobileOrientation>('portrait');
  const [showDeviceFrame, setShowDeviceFrame] = useState<boolean>(true);

  const startOnboarding = (archetype?: 'cafe' | 'delivery_kitchen' | 'hotel' | 'bakery') => {
    setSelectedOnboardingArchetype(archetype || null);
    setOnboardingResult(null);
    setShowOnboardingModal(true);
  };

  const [notifications, setNotifications] = useState<InAppNotification[]>([
    {
      id: 'notif-1',
      title: 'Order PW-8488 Accepted',
      message: 'The Daily Grind accepted your takeaway order. Preparation started.',
      timestamp: '14m ago',
      read: false,
      orderId: 'ord-102',
      type: 'order',
    },
    {
      id: 'notif-2',
      title: 'Continuity Safeguard Active',
      message: '10 recoverable ordering units are standing by to ensure zero customer drops.',
      timestamp: '1h ago',
      read: true,
      type: 'continuity',
    },
  ]);

  useEffect(() => {
    if (activeBrandId) {
      setRecents((prev) => [activeBrandId, ...prev.filter((id) => id !== activeBrandId)].slice(0, 5));
    }
  }, [activeBrandId]);

  const activeBrand = brands.find((b) => b.id === activeBrandId) || null;
  const activeOrder = orders.find((o) => o.id === activeOrderId) || null;

  // Zero-Units check (§6.H & §11 Acceptance Test 7)
  const isStructuredOrderingAvailableForBrand = (brandId: string) => {
    if (organization.subscriptionStatus === 'suspended') {
      return { available: false, reason: 'Merchant subscription is inactive' };
    }
    // If standard units are 0 and recoverable continuity units are 0
    if (organization.remainingStandardUnits <= 0 && organization.recoverableContinuityUnits <= 0) {
      return {
        available: false,
        reason:
          'Structured ordering is temporarily paused by the merchant (ordering capacity exhausted). You can still contact them directly via WhatsApp or phone.',
      };
    }
    return { available: true };
  };

  // SCENARIO ENGINE — 16 DETERMINISTIC MASTER SCENARIOS (Implementation Plan Section 5)
  const loadScenario = (preset: ScenarioPreset) => {
    setCurrentScenario(preset);
    setIsOfflineSimulated(false);

    switch (preset) {
      // SC-01: New Café Quickstart
      case 'new_cafe':
        setRole('merchant_owner');
        startOnboarding('cafe');
        break;

      // SC-02: Established Restaurant (Active rush, staff receiver)
      case 'established_restaurant':
        setRole('merchant_staff');
        setOrganization({
          ...initialOrganization,
          remainingStandardUnits: 145,
          recoverableContinuityUnits: 10,
        });
        setActiveBrandId('brand-daily-grind');
        break;

      // SC-03: Multi-Brand Hospitality Group
      case 'multibrand':
        setRole('merchant_admin');
        setActiveBrandId(null);
        break;

      // SC-04: Luxury Hotel Context
      case 'hotel':
        setRole('hotel_guest');
        setActiveBrandId('brand-grand-azure');
        break;

      // SC-05: Ghost / Delivery Kitchen
      case 'delivery_kitchen':
        setRole('customer');
        setActiveBrandId('brand-midnight-crust');
        break;

      // SC-06: Active Units (Normal Flow, 142 units)
      case 'active_units':
        setRole('customer');
        setOrganization({
          ...initialOrganization,
          remainingStandardUnits: 142,
          recoverableContinuityUnits: 10,
        });
        setActiveBrandId('brand-daily-grind');
        break;

      // SC-07: Critical Zero Units Exhaustion (Active sub, 0 units)
      case 'zero_units':
        setOrganization({
          ...initialOrganization,
          remainingStandardUnits: 0,
          recoverableContinuityUnits: 0,
        });
        setRole('customer');
        setActiveBrandId('brand-daily-grind');
        break;

      // SC-08: Expired Subscription (>14 days past grace)
      case 'subscription_expired':
        setOrganization({
          ...initialOrganization,
          subscriptionStatus: 'suspended',
          remainingStandardUnits: 0,
          recoverableContinuityUnits: 0,
        });
        setRole('merchant_owner');
        break;

      // SC-09: In-Flight Order Continuity (10-unit safeguard in action)
      case 'inflight_continuity':
        setOrganization({
          ...initialOrganization,
          remainingStandardUnits: 0,
          recoverableContinuityUnits: 10,
        });
        setRole('merchant_owner');
        break;

      // SC-10: Duplicate Accept Race (Idempotency test)
      case 'duplicate_accept':
        setRole('merchant_owner');
        break;

      // SC-11: Customer Withdrawal Conflict
      case 'withdrawal_conflict':
        setOrders((prev) =>
          prev.map((o) =>
            o.id === 'ord-101' ? { ...o, status: 'withdrawn' } : o
          )
        );
        setRole('merchant_owner');
        break;

      // SC-12: Sold-Out Item in Cart
      case 'sold_out_cart':
        setRole('customer');
        setCartBrandId('brand-daily-grind');
        setCart([
          {
            offeringId: 'off-dg-5',
            offeringName: 'Wildberry Acai Smoothie Bowl (Sold Out)',
            unitPrice: 780,
            quantity: 1,
            selectedModifiers: [],
            itemTotal: 780,
            notes: 'Item became unavailable',
          },
        ]);
        break;

      // SC-13: Price Update During Review (Amendment Proposal)
      case 'price_update':
        setRole('customer');
        setActiveOrderId('ord-103');
        break;

      // SC-14: Simulated Offline Network
      case 'offline_network':
        setIsOfflineSimulated(true);
        setRole('customer');
        setActiveBrandId('brand-daily-grind');
        break;

      // SC-15: Unauthorized Guest Access
      case 'unauthorized_guest':
        setHotelAccessGranted(false);
        setRole('hotel_guest');
        setActiveBrandId('brand-grand-azure');
        break;

      // SC-16: Sponsored Campaign Live
      case 'sponsored_campaign':
        setRole('customer');
        setActiveBrandId(null);
        break;

      case 'default':
      default:
        resetAllScenarios();
        break;
    }
  };

  const resetAllScenarios = () => {
    setCurrentScenario('default');
    setOrganization(initialOrganization);
    setBrands(initialBrands);
    setOrders(sampleInitialOrders);
    setConsumptionLogs(sampleConsumptionLogs);
    setCampaigns(sampleCampaigns);
    setOperatorCases(sampleOperatorCases);
    setActiveBrandId(null);
    setActiveOrderId(null);
    setCart([]);
    setCartBrandId(null);
    setHotelAccessGranted(false);
  };

  const toggleFavourite = (brandId: string) => {
    setFavourites((prev) =>
      prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
    );
  };

  const removeRecent = (brandId: string) => {
    setRecents((prev) => prev.filter((id) => id !== brandId));
  };

  const clearRecents = () => {
    setRecents([]);
  };

  const addToCart = (item: OrderItem, brandId: string) => {
    if (cartBrandId && cartBrandId !== brandId) {
      setCart([item]);
      setCartBrandId(brandId);
    } else {
      setCartBrandId(brandId);
      setCart((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (next.length === 0) setCartBrandId(null);
      return next;
    });
  };

  const updateCartQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const next = [...prev];
      const target = next[index];
      const newQty = target.quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      target.quantity = newQty;
      target.itemTotal =
        (target.unitPrice + target.selectedModifiers.reduce((acc, m) => acc + m.priceDelta, 0)) * newQty;
      return next;
    });
  };

  const clearCart = () => {
    setCart([]);
    setCartBrandId(null);
  };

  const submitOrder = (details: {
    customerName: string;
    customerContact: string;
    serviceMode: ServiceMode;
    tableOrRoomNumber?: string;
    deliveryAddress?: string;
    notes?: string;
  }): Order | null => {
    if (!cartBrandId || cart.length === 0) return null;
    const targetBrand = brands.find((b) => b.id === cartBrandId);
    if (!targetBrand) return null;

    // Check capacity
    const capacityCheck = isStructuredOrderingAvailableForBrand(targetBrand.id);
    if (!capacityCheck.available) {
      alert(capacityCheck.reason);
      return null;
    }

    const subtotal = cart.reduce((acc, item) => acc + item.itemTotal, 0);
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      referenceCode: `PW-${Math.floor(1000 + Math.random() * 9000)}`,
      brandId: targetBrand.id,
      brandName: targetBrand.name,
      currency: targetBrand.currency,
      serviceMode: details.serviceMode,
      items: [...cart],
      subtotal,
      total: subtotal,
      originalSnapshot: {
        subtotal,
        total: subtotal,
        items: [...cart],
      },
      status: 'submitted',
      customerName: details.customerName,
      customerContact: details.customerContact,
      tableOrRoomNumber: details.tableOrRoomNumber,
      deliveryAddress: details.deliveryAddress,
      notes: details.notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      consumedUnit: false,
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setActiveOrderId(newOrder.id);

    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: `Order Submitted (${newOrder.referenceCode})`,
        message: `Your request was sent to ${targetBrand.name}. Awaiting merchant acceptance.`,
        timestamp: 'Just now',
        read: false,
        orderId: newOrder.id,
        type: 'order',
      },
      ...prev,
    ]);

    return newOrder;
  };

  // MERCHANT ACCEPT (IDEMPOTENT & CONSUMPTION GOVERNED)
  const acceptOrder = (orderId: string): { success: boolean; message: string } => {
    const targetOrder = orders.find((o) => o.id === orderId);
    if (!targetOrder) return { success: false, message: 'Order not found' };

    // Idempotency check (§7 & §11 Acceptance Test 6):
    if (targetOrder.status === 'accepted' || targetOrder.consumedUnit) {
      return {
        success: false,
        message: 'Order already accepted! Idempotency rule enforced — no duplicate unit consumed.',
      };
    }

    if (targetOrder.status !== 'submitted' && targetOrder.status !== 'amendment_agreed') {
      return { success: false, message: `Cannot accept order in '${targetOrder.status}' state.` };
    }

    let unitType: 'standard_credit' | 'recoverable_continuity' | null = null;
    let newStd = organization.remainingStandardUnits;
    let newRec = organization.recoverableContinuityUnits;

    if (newStd > 0) {
      newStd -= 1;
      unitType = 'standard_credit';
    } else if (newRec > 0) {
      newRec -= 1;
      unitType = 'recoverable_continuity';
    } else {
      return {
        success: false,
        message:
          'Cannot accept order: Standard units (0) and 10-unit continuity allowance exhausted! Please replenish credits.',
      };
    }

    setOrganization((prev) => ({
      ...prev,
      remainingStandardUnits: newStd,
      recoverableContinuityUnits: newRec,
    }));

    const log: ConsumptionLog = {
      id: `log-${Date.now()}`,
      orderReference: targetOrder.referenceCode,
      timestamp: new Date().toISOString(),
      unitType,
      previousBalance: unitType === 'standard_credit' ? newStd + 1 : newRec + 1,
      newBalance: unitType === 'standard_credit' ? newStd : newRec,
      note:
        unitType === 'standard_credit'
          ? 'Standard prepaid quota unit consumed upon merchant acceptance'
          : '⚠️ Recoverable Continuity Allowance unit consumed! (10-unit continuity safeguard active)',
    };

    setConsumptionLogs((prev) => [log, ...prev]);

    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status: 'accepted',
              updatedAt: new Date().toISOString(),
              acceptedAt: new Date().toISOString(),
              consumedUnit: true,
            }
          : o
      )
    );

    return {
      success: true,
      message:
        unitType === 'standard_credit'
          ? `Order accepted! Exactly 1 standard unit consumed (Balance: ${newStd}).`
          : `Order accepted! 1 recoverable continuity unit consumed (${newRec}/10 left in safeguard buffer).`,
    };
  };

  const declineOrder = (orderId: string, reason: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status: 'declined',
              declineReason: reason,
              updatedAt: new Date().toISOString(),
            }
          : o
      )
    );
  };

  const markOrderReady = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status: 'ready',
              readyAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          : o
      )
    );
  };

  const withdrawOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId && o.status === 'submitted'
          ? {
              ...o,
              status: 'withdrawn',
              updatedAt: new Date().toISOString(),
            }
          : o
      )
    );
  };

  const requestOrderCancellation = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId && o.status === 'accepted'
          ? {
              ...o,
              status: 'cancellation_requested',
              updatedAt: new Date().toISOString(),
            }
          : o
      )
    );
  };

  const proposeOrderAmendment = (
    orderId: string,
    reason: string,
    newTotal: number,
    substitutions: string
  ) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status: 'amendment_proposed',
              amendment: {
                proposedAt: new Date().toISOString(),
                reason,
                newTotal,
                substitutions,
                status: 'pending',
              },
              updatedAt: new Date().toISOString(),
            }
          : o
      )
    );
  };

  const agreeOrderAmendment = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id !== orderId) return o;
        const newTotal = o.amendment?.newTotal || o.total;
        return {
          ...o,
          status: 'amendment_agreed',
          total: newTotal,
          amendment: o.amendment ? { ...o.amendment, status: 'agreed' } : undefined,
          updatedAt: new Date().toISOString(),
        };
      })
    );
  };

  const toggleOfferingStatus = (brandId: string, offeringId: string, status: AvailabilityStatus) => {
    setBrands((prev) =>
      prev.map((b) => {
        if (b.id !== brandId) return b;
        return {
          ...b,
          offerings: b.offerings.map((off) => (off.id === offeringId ? { ...off, status } : off)),
        };
      })
    );
  };

  const addOfferingToBrand = (brandId: string, offeringData: Omit<Offering, 'id'>) => {
    const newOfferingId = `off-${Date.now()}`;
    const newOffering: Offering = {
      ...offeringData,
      id: newOfferingId,
    };
    setBrands((prev) =>
      prev.map((b) => {
        if (b.id !== brandId) return b;
        const categories = b.categories.includes(offeringData.category)
          ? b.categories
          : [...b.categories, offeringData.category];
        return {
          ...b,
          categories,
          offerings: [newOffering, ...b.offerings],
        };
      })
    );
  };

  const togglePublishBrand = (brandId: string) => {
    setBrands((prev) =>
      prev.map((b) => (b.id === brandId ? { ...b, isPublished: !b.isPublished } : b))
    );
  };

  const purchaseUnits = (units: number) => {
    setOrganization((prev) => ({
      ...prev,
      remainingStandardUnits: prev.remainingStandardUnits + units,
      recoverableContinuityUnits: 10,
    }));
  };

  const verifyHotelAccess = (roomNumber: string, accessCode: string): boolean => {
    if (accessCode.trim().toUpperCase() === 'AZURE2026' || accessCode.trim().length >= 4) {
      setHotelAccessGranted(true);
      setHotelGuestRoom(roomNumber.trim() ? `Room ${roomNumber}` : 'Room 408');
      return true;
    }
    return false;
  };

  const revokeHotelAccess = () => {
    setHotelAccessGranted(false);
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  // ONBOARDING (§6.C, §14, BMP-001 & R01)
  const completeOnboarding = (data: OnboardingData): OnboardingCompletionResult => {
    const newBrandId = `brand-${Date.now()}`;
    const cleanSlug = data.brandName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const slug = cleanSlug || `business-${Date.now()}`;

    // Select authentic visual styling based on business type
    let logoUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150&auto=format&fit=crop&q=80';
    let coverUrl = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80';
    let offeringImageUrl = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';

    if (data.businessType === 'cafe') {
      logoUrl = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=150&auto=format&fit=crop&q=80';
      coverUrl = 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&auto=format&fit=crop&q=80';
      offeringImageUrl = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80';
    } else if (data.businessType === 'delivery_kitchen') {
      logoUrl = 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=150&auto=format&fit=crop&q=80';
      coverUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80';
      offeringImageUrl = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80';
    } else if (data.businessType === 'hotel') {
      logoUrl = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=150&auto=format&fit=crop&q=80';
      coverUrl = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&auto=format&fit=crop&q=80';
      offeringImageUrl = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80';
    } else if (data.businessType === 'bakery') {
      logoUrl = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&auto=format&fit=crop&q=80';
      coverUrl = 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&auto=format&fit=crop&q=80';
      offeringImageUrl = 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&auto=format&fit=crop&q=80';
    }

    const primaryImage = data.firstOfferingImage || offeringImageUrl;
    const firstOfferingId = `off-${Date.now()}`;

    // Support both multi-saved offerings or single authoring offering
    const builtOfferings: Offering[] =
      data.savedOfferings && data.savedOfferings.length > 0
        ? data.savedOfferings.map((saved, idx) => ({
            id: `off-${Date.now()}-${idx}`,
            name: saved.name,
            description: saved.description || `Freshly crafted ${saved.name}`,
            price: saved.price,
            currency: data.currency,
            category: saved.category || data.firstMenuName,
            image: saved.image || primaryImage,
            status: 'available',
            dietaryTags: saved.dietaryTags && saved.dietaryTags.length > 0 ? saved.dietaryTags : ['Freshly Prepared'],
            preparationTimeMins: saved.preparationTimeMins || 10,
          }))
        : [
            {
              id: firstOfferingId,
              name: data.firstOfferingName,
              description: data.firstOfferingDescription || `House craft specialty ${data.firstOfferingName}`,
              price: data.firstOfferingPrice,
              currency: data.currency,
              category: data.firstMenuName,
              image: primaryImage,
              status: 'available',
              dietaryTags: data.firstOfferingDietary && data.firstOfferingDietary.length > 0 ? data.firstOfferingDietary : ['Freshly Prepared'],
              preparationTimeMins: data.firstOfferingPrepTime || 12,
              modifierGroups: data.firstOfferingModifiers && data.firstOfferingModifiers.length > 0 ? data.firstOfferingModifiers.map((g, gi) => ({
                id: `mod-${gi}`,
                name: g.groupName,
                required: false,
                minSelections: 0,
                maxSelections: 1,
                options: g.options.map((opt, oi) => ({
                  id: `opt-${gi}-${oi}`,
                  name: opt.name,
                  priceDelta: opt.priceDelta,
                })),
              })) : undefined,
            },
          ];

    const uniqueCategories = Array.from(
      new Set([data.firstMenuName, ...builtOfferings.map((o) => o.category)])
    );

    const newBrand: Brand = {
      id: newBrandId,
      name: data.brandName,
      slug,
      tagline: data.brandTagline || `Fresh ${data.businessType.replace('_', ' ')} offerings & hospitality`,
      businessType: data.businessType,
      logo: logoUrl,
      coverImage: coverUrl,
      // Privacy boundary (R01-012/017): if delivery-only, storefront address is undefined; declared coverage is set
      address: data.isDeliveryOnly ? undefined : data.addressOrCoverage,
      serviceAreaCoverage: data.isDeliveryOnly ? data.addressOrCoverage : undefined,
      isDeliveryOnly: data.isDeliveryOnly,
      serviceModes: data.serviceModes,
      currency: data.currency,
      phone: data.phone,
      whatsappNumber: data.whatsapp,
      isPublished: true,
      categories: uniqueCategories,
      offerings: builtOfferings,
    };

    setBrands((prev) => [newBrand, ...prev]);
    setOrganization((prev) => ({
      ...prev,
      legalName: data.orgName,
      brands: [newBrand, ...prev.brands],
    }));

    const result: OnboardingCompletionResult = {
      brandId: newBrand.id,
      brandName: newBrand.name,
      brandSlug: slug,
      publicUrl: `https://pewa.app/m/${slug}`,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://pewa.app/m/${slug}`,
      standardUnits: organization.remainingStandardUnits,
      continuityUnits: organization.recoverableContinuityUnits,
      offeringId: builtOfferings[0]?.id || firstOfferingId,
      offeringName: builtOfferings[0]?.name || data.firstOfferingName,
    };

    setOnboardingResult(result);
    setActiveBrandId(newBrand.id);

    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: `Business Onboarded: ${newBrand.name}`,
        message: `Your brand is published at pewa.app/m/${slug}. 200 included standard units are active with zero-drop safeguard.`,
        timestamp: 'Just now',
        read: false,
        type: 'system',
      },
      ...prev,
    ]);

    return result;
  };

  const simulateFirstOrderForBrand = (brandId: string): Order => {
    const brand = brands.find((b) => b.id === brandId) || brands[0];
    const item = brand.offerings[0] || {
      id: 'off-custom',
      name: 'House Signature Dish',
      price: 450,
    };
    const refCode = `PW-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      referenceCode: refCode,
      brandId: brand.id,
      brandName: brand.name,
      currency: brand.currency,
      serviceMode: brand.serviceModes[0] || 'dine_in',
      items: [
        {
          offeringId: item.id,
          offeringName: item.name,
          unitPrice: item.price,
          quantity: 1,
          selectedModifiers: [],
          itemTotal: item.price,
          notes: 'Test order from onboarding scenario simulation',
        },
      ],
      subtotal: item.price,
      total: item.price,
      status: 'submitted',
      customerName: 'Amani Wanjiku (Walkthrough Guest)',
      customerContact: '+254 712 345 678',
      tableOrRoomNumber: brand.serviceModes.includes('dine_in') ? 'Table 2' : undefined,
      deliveryAddress: brand.isDeliveryOnly ? 'Block B, Apt 4G, Kilimani' : undefined,
      notes: 'Testing live order receipt & unit deduction',
      createdAt: 'Just now',
      updatedAt: 'Just now',
      consumedUnit: false,
    };

    setOrders((prev) => [newOrder, ...prev]);
    setActiveOrderId(newOrder.id);
    setActiveBrandId(brand.id);
    setRole('merchant_owner');

    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: `New Order ${refCode} Received!`,
        message: `Fresh order for ${brand.name} awaiting acceptance. 1 unit will be deducted upon acceptance.`,
        timestamp: 'Just now',
        read: false,
        orderId: newOrder.id,
        type: 'order',
      },
      ...prev,
    ]);

    return newOrder;
  };

  // CAMPAIGNS (§6.J)
  const createCampaign = (
    c: Omit<SponsoredCampaign, 'id' | 'impressionsDelivered' | 'clicksCount'>
  ) => {
    const newCamp: SponsoredCampaign = {
      ...c,
      id: `camp-${Date.now()}`,
      impressionsDelivered: 1,
      clicksCount: 0,
    };
    setCampaigns((prev) => [newCamp, ...prev]);
  };

  const recordCampaignClick = (id: string) => {
    setCampaigns((prev) =>
      prev.map((c) => (c.id === id ? { ...c, clicksCount: c.clicksCount + 1 } : c))
    );
  };

  // OPERATOR CASES (§6.L & P6)
  const resolveOperatorCase = (caseId: string, note: string) => {
    setOperatorCases((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? {
              ...c,
              status: 'resolved',
              resolutionNote: note,
            }
          : c
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        organization,
        brands,
        activeBrand,
        activeBrandId,
        setActiveBrandId,
        cart,
        cartBrandId,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        orders,
        activeOrder,
        activeOrderId,
        setActiveOrderId,
        submitOrder,
        acceptOrder,
        declineOrder,
        markOrderReady,
        withdrawOrder,
        requestOrderCancellation,
        proposeOrderAmendment,
        agreeOrderAmendment,
        toggleOfferingStatus,
        addOfferingToBrand,
        togglePublishBrand,
        purchaseUnits,
        favourites,
        toggleFavourite,
        recents,
        removeRecent,
        clearRecents,
        notifications,
        markNotificationRead,
        consumptionLogs,
        hotelAccessGranted,
        verifyHotelAccess,
        revokeHotelAccess,
        hotelGuestRoom,
        currentScenario,
        loadScenario,
        resetAllScenarios,
        showOnboardingModal,
        setShowOnboardingModal,
        selectedOnboardingArchetype,
        setSelectedOnboardingArchetype,
        onboardingResult,
        setOnboardingResult,
        startOnboarding,
        completeOnboarding,
        simulateFirstOrderForBrand,
        campaigns,
        createCampaign,
        recordCampaignClick,
        operatorCases,
        resolveOperatorCase,
        isStructuredOrderingAvailableForBrand,
        isOfflineSimulated,
        setIsOfflineSimulated,
        viewportMode,
        setViewportMode,
        mobileDevice,
        setMobileDevice,
        mobileOrientation,
        setMobileOrientation,
        showDeviceFrame,
        setShowDeviceFrame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
