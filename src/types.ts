export type ServiceMode = 'dine_in' | 'takeaway' | 'delivery';

export type AvailabilityStatus = 'available' | 'sold_out' | 'hidden';

export type OrderStatus =
  | 'submitted'              // Awaiting business decision
  | 'accepted'               // Business accepted (1 consumption unit consumed)
  | 'declined'               // Business declined
  | 'withdrawn'              // Customer withdrew before acceptance
  | 'ready'                  // Business declared ready for pickup/delivery
  | 'cancellation_requested' // Customer requested after acceptance
  | 'cancelled'              // Mutually cancelled
  | 'amendment_proposed'     // Merchant proposed modification (price/item substitution)
  | 'amendment_agreed'       // Customer acknowledged proposed modification
  | 'expired';               // Expired due to unanswered timeout

export interface ModifierOption {
  id: string;
  name: string;
  priceDelta: number; // in menu currency
}

export interface ModifierGroup {
  id: string;
  name: string;
  required: boolean;
  minSelections: number;
  maxSelections: number;
  options: ModifierOption[];
}

export interface Offering {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  image?: string;
  status: AvailabilityStatus;
  dietaryTags: string[]; // e.g. 'Vegan', 'Halal', 'Gluten-Free', 'Chef Special'
  preparationTimeMins?: number;
  modifierGroups?: ModifierGroup[];
  isProtectedGuestOnly?: boolean; // Hotel guest exclusive
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  businessType: 'cafe' | 'restaurant' | 'hotel' | 'bakery' | 'delivery_kitchen' | 'bar';
  logo: string;
  coverImage: string;
  address?: string;
  isDeliveryOnly: boolean;
  serviceAreaCoverage?: string;
  serviceModes: ServiceMode[];
  currency: string;
  phone: string;
  whatsappNumber: string;
  isPublished: boolean;
  featuredOffer?: {
    title: string;
    description: string;
    badgeText: string;
    discountPercent?: number;
  };
  categories: string[];
  offerings: Offering[];
}

export interface Organization {
  id: string;
  legalName: string;
  tier: 'basic_monthly' | 'pro_monthly';
  baseMonthlyFee: number;
  baseCurrency: string;
  subscriptionStatus: 'active' | 'grace_period' | 'suspended';
  includedMonthlyUnits: number;
  remainingStandardUnits: number;
  recoverableContinuityUnits: number; // Max 10 recoverable continuity units
  maxRecoverableUnits: number; // 10
  brands: Brand[];
}

export interface OrderItem {
  offeringId: string;
  offeringName: string;
  unitPrice: number;
  quantity: number;
  selectedModifiers: { groupName: string; optionName: string; priceDelta: number }[];
  itemTotal: number;
  notes?: string;
}

export interface AmendmentProposal {
  proposedAt: string;
  reason: string;
  newTotal: number;
  substitutions: string;
  status: 'pending' | 'agreed' | 'rejected';
}

export interface Order {
  id: string;
  referenceCode: string;
  brandId: string;
  brandName: string;
  currency: string;
  serviceMode: ServiceMode;
  items: OrderItem[];
  subtotal: number;
  total: number;
  originalSnapshot?: {
    subtotal: number;
    total: number;
    items: OrderItem[];
  };
  amendment?: AmendmentProposal;
  status: OrderStatus;
  customerName: string;
  customerContact: string; // phone or room number
  deliveryAddress?: string;
  tableOrRoomNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  acceptedAt?: string;
  readyAt?: string;
  declineReason?: string;
  consumedUnit: boolean;
}

export interface ConsumptionLog {
  id: string;
  orderReference: string;
  timestamp: string;
  unitType: 'standard_credit' | 'recoverable_continuity' | 'reversal';
  previousBalance: number;
  newBalance: number;
  note: string;
}

export interface InAppNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  orderId?: string;
  type: 'order' | 'system' | 'continuity' | 'campaign';
}

export interface SponsoredCampaign {
  id: string;
  brandId: string;
  brandName: string;
  title: string;
  description: string;
  badgeText: string;
  targetCategory: string;
  budgetAllocatedUSD: number;
  costPerClickUSD: number;
  impressionsDelivered: number;
  clicksCount: number;
  status: 'active' | 'scheduled' | 'paused' | 'exhausted';
  startDate: string;
  endDate: string;
}

export interface OperatorCase {
  id: string;
  orgId: string;
  orgName: string;
  type: 'dispute' | 'content_moderation' | 'continuity_debt' | 'onboarding_review';
  title: string;
  description: string;
  status: 'open' | 'under_review' | 'resolved' | 'dismissed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  resolutionNote?: string;
}

export type UserRole =
  | 'customer'
  | 'hotel_guest'
  | 'merchant_owner'
  | 'merchant_admin'
  | 'merchant_manager'
  | 'merchant_staff'
  | 'pewa_operator'
  | 'docs_viewer';

export type ScenarioPreset =
  | 'default'
  | 'new_cafe'               // SC-01
  | 'established_restaurant' // SC-02
  | 'multibrand'             // SC-03
  | 'hotel'                  // SC-04
  | 'delivery_kitchen'       // SC-05
  | 'active_units'           // SC-06
  | 'zero_units'             // SC-07
  | 'subscription_expired'   // SC-08
  | 'inflight_continuity'    // SC-09
  | 'duplicate_accept'       // SC-10
  | 'withdrawal_conflict'    // SC-11
  | 'sold_out_cart'          // SC-12
  | 'price_update'           // SC-13
  | 'offline_network'        // SC-14
  | 'unauthorized_guest'     // SC-15
  | 'sponsored_campaign';    // SC-16

export interface OnboardingData {
  orgName: string;
  contactName?: string;
  contactEmail?: string;
  brandName: string;
  brandTagline?: string;
  businessType: 'cafe' | 'restaurant' | 'hotel' | 'bakery' | 'delivery_kitchen' | 'bar';
  serviceModes: ServiceMode[];
  isDeliveryOnly: boolean;
  addressOrCoverage: string;
  privatePrepAddress?: string;
  currency: string;
  phone: string;
  whatsapp: string;
  firstMenuName: string;
  firstOfferingName: string;
  firstOfferingDescription?: string;
  firstOfferingPrice: number;
  firstOfferingDietary?: string[];
  firstOfferingPrepTime?: number;
  firstOfferingImage?: string;
  firstOfferingModifiers?: { groupName: string; options: { name: string; priceDelta: number }[] }[];
  savedOfferings?: Array<{
    name: string;
    description: string;
    price: number;
    category: string;
    image?: string;
    dietaryTags: string[];
    preparationTimeMins?: number;
  }>;
  staffRole?: 'merchant_owner' | 'merchant_manager' | 'merchant_staff';
  merchantConsentResponsibility: boolean;
  pewaPlatformConsent: boolean;
}

export interface OnboardingCompletionResult {
  brandId: string;
  brandName: string;
  brandSlug: string;
  publicUrl: string;
  qrCodeUrl: string;
  standardUnits: number;
  continuityUnits: number;
  offeringId: string;
  offeringName: string;
}

export type ViewportMode = 'mobile' | 'desktop';
export type MobileDeviceModel = 'iphone15' | 'pixel8' | 'compact' | 'tablet' | 'fluid';
export type MobileOrientation = 'portrait' | 'landscape';

