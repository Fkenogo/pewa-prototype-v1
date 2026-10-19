import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Store,
  ChefHat,
  Truck,
  Hotel,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Coffee,
  Sparkles,
  ShieldCheck,
  Shield,
  Lock,
  Phone,
  MessageCircle,
  Copy,
  Check,
  QrCode,
  Zap,
  ShoppingBag,
  ExternalLink,
  Users,
  Eye,
  Sliders,
  Camera,
  Image as ImageIcon,
  Upload,
  Trash2,
  Plus,
  Save,
  Link as LinkIcon,
} from 'lucide-react';
import { ServiceMode, OnboardingData, OnboardingCompletionResult } from '../types';

interface ArchetypePreset {
  id: 'cafe' | 'delivery_kitchen' | 'hotel' | 'bakery';
  label: string;
  badge: string;
  icon: React.ReactNode;
  data: OnboardingData;
}

const FOOD_IMAGE_PRESETS = [
  {
    label: 'Single-Origin Pour-Over',
    category: 'Beverage',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
  },
  {
    label: 'Espresso & Flat White',
    category: 'Coffee',
    url: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&auto=format&fit=crop&q=80',
  },
  {
    label: 'Wood-Fired Pizza',
    category: 'Main Dish',
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
  },
  {
    label: 'Angus Burger & Fries',
    category: 'Main Dish',
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
  },
  {
    label: 'Pan-Seared Fresh Fish',
    category: 'Entrée',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
  },
  {
    label: 'Artisan Sourdough Loaf',
    category: 'Bakery',
    url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&auto=format&fit=crop&q=80',
  },
  {
    label: 'Avocado Green Bowl',
    category: 'Healthy',
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80',
  },
  {
    label: 'Berry Tart & Pastry',
    category: 'Dessert',
    url: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80',
  },
];

const ARCHETYPE_PRESETS: ArchetypePreset[] = [
  {
    id: 'cafe',
    label: 'Specialty Café',
    badge: 'Quickstart',
    icon: <Coffee className="w-4 h-4 text-amber-400" />,
    data: {
      orgName: 'Nairobi Specialty Coffee Labs Ltd',
      contactName: 'David Kimani',
      contactEmail: 'david@nairobilabs.coffee',
      brandName: 'Nairobi Coffee Lab',
      brandTagline: 'Micro-lot single-origin roasts & artisanal pour-overs',
      businessType: 'cafe',
      isDeliveryOnly: false,
      addressOrCoverage: '14 Arboretum Drive, Kileleshwa, Nairobi',
      serviceModes: ['dine_in', 'takeaway'],
      currency: 'KES',
      phone: '+254 722 100 200',
      whatsapp: '+254722100200',
      firstMenuName: 'Signature Brews & Pour-Overs',
      firstOfferingName: 'Single-Origin Yirgacheffe Pour-Over',
      firstOfferingDescription: 'Jasmine, bergamot, and sweet peach notes brewed on V60',
      firstOfferingPrice: 550,
      firstOfferingDietary: ['Vegan', 'Single-Origin'],
      firstOfferingPrepTime: 8,
      firstOfferingImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
      firstOfferingModifiers: [
        {
          groupName: 'Milk Alternative',
          options: [
            { name: 'Oat Milk', priceDelta: 60 },
            { name: 'Almond Milk', priceDelta: 60 },
          ],
        },
      ],
      staffRole: 'merchant_owner',
      merchantConsentResponsibility: true,
      pewaPlatformConsent: true,
    },
  },
  {
    id: 'delivery_kitchen',
    label: 'Ghost Kitchen',
    badge: 'Privacy Protected',
    icon: <Truck className="w-4 h-4 text-emerald-400" />,
    data: {
      orgName: 'Urban Cloud Dining Ventures Ltd',
      contactName: 'Sara Muthoni',
      contactEmail: 'ops@urbancloud.co.ke',
      brandName: 'CloudCrust Artisanal Pizzas',
      brandTagline: '48-hour slow fermented sourdough delivery kitchen',
      businessType: 'delivery_kitchen',
      isDeliveryOnly: true,
      addressOrCoverage: 'Kilimani, Westlands, Lavington & Parklands (7km delivery radius)',
      privatePrepAddress: 'Unit 4B, Commercial Industrial Hub, Enterprise Rd (Confidential)',
      serviceModes: ['delivery'],
      currency: 'KES',
      phone: '+254 733 900 800',
      whatsapp: '+254733900800',
      firstMenuName: 'Wood-Fired Sourdough Pizzas',
      firstOfferingName: 'Truffle & Wild Mushroom Sourdough Pizza',
      firstOfferingDescription: 'Fior di latte, roasted portobello, white truffle oil & fresh thyme',
      firstOfferingPrice: 1350,
      firstOfferingDietary: ['Vegetarian', 'Artisan Sourdough'],
      firstOfferingPrepTime: 20,
      firstOfferingImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
      staffRole: 'merchant_owner',
      merchantConsentResponsibility: true,
      pewaPlatformConsent: true,
    },
  },
  {
    id: 'hotel',
    label: 'Hotel Dining',
    badge: 'Dual Context',
    icon: <Hotel className="w-4 h-4 text-blue-400" />,
    data: {
      orgName: 'Serena Peak Hospitality & Resorts Ltd',
      contactName: 'Grace Njeri',
      contactEmail: 'dining@serenapeak.com',
      brandName: 'Serena Peak Restaurant & Lounge',
      brandTagline: 'Fine dining terrace & protected in-room guest culinary service',
      businessType: 'hotel',
      isDeliveryOnly: false,
      addressOrCoverage: 'Serena Hill Road, Upper Hill, Nairobi',
      serviceModes: ['dine_in', 'takeaway'],
      currency: 'KES',
      phone: '+254 711 500 600',
      whatsapp: '+254711500600',
      firstMenuName: 'Chef Tasting Highlights',
      firstOfferingName: 'Pan-Seared Swahili Snapper',
      firstOfferingDescription: 'Coconut lemongrass reduction, crushed plantains & wilted sukuma',
      firstOfferingPrice: 2200,
      firstOfferingDietary: ['Fresh Catch', 'Gluten-Free'],
      firstOfferingPrepTime: 25,
      firstOfferingImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
      staffRole: 'merchant_owner',
      merchantConsentResponsibility: true,
      pewaPlatformConsent: true,
    },
  },
  {
    id: 'bakery',
    label: 'Artisan Bakery',
    badge: 'Pre-Order Pickup',
    icon: <Store className="w-4 h-4 text-purple-400" />,
    data: {
      orgName: 'The Levain Guild Bakeries Ltd',
      contactName: 'Brian Omondi',
      contactEmail: 'brian@levainguild.com',
      brandName: 'The Levain Guild',
      brandTagline: 'Naturally leavened organic breads and French laminated viennoiserie',
      businessType: 'bakery',
      isDeliveryOnly: false,
      addressOrCoverage: 'Spring Valley Crescent, Nairobi',
      serviceModes: ['takeaway'],
      currency: 'KES',
      phone: '+254 720 400 300',
      whatsapp: '+254720400300',
      firstMenuName: 'Morning Bakes & Loaves',
      firstOfferingName: 'Heritage Country Sourdough Loaf (900g)',
      firstOfferingDescription: 'Stone-milled organic rye and wheat, 36-hour cold ferment',
      firstOfferingPrice: 650,
      firstOfferingDietary: ['Vegan', 'Organic'],
      firstOfferingPrepTime: 5,
      firstOfferingImage: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&auto=format&fit=crop&q=80',
      staffRole: 'merchant_owner',
      merchantConsentResponsibility: true,
      pewaPlatformConsent: true,
    },
  },
];

export const OnboardingModal: React.FC = () => {
  const {
    showOnboardingModal,
    setShowOnboardingModal,
    selectedOnboardingArchetype,
    completeOnboarding,
    onboardingResult,
    setOnboardingResult,
    simulateFirstOrderForBrand,
    setActiveBrandId,
    setRole,
  } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form State: Step 1
  const [orgName, setOrgName] = useState('Acacia Hospitality Ventures Ltd');
  const [contactName, setContactName] = useState('Sarah Njoki');
  const [contactEmail, setContactEmail] = useState('sarah@acaciahospitality.co.ke');
  const [brandName, setBrandName] = useState('Nairobi Coffee Lab');
  const [brandTagline, setBrandTagline] = useState('Micro-lot single-origin roasts & artisanal pour-overs');
  const [businessType, setBusinessType] = useState<
    'cafe' | 'restaurant' | 'hotel' | 'bakery' | 'delivery_kitchen' | 'bar'
  >('cafe');

  // Step 2: Location & Service
  const [isDeliveryOnly, setIsDeliveryOnly] = useState(false);
  const [addressOrCoverage, setAddressOrCoverage] = useState('14 Arboretum Drive, Kileleshwa, Nairobi');
  const [privatePrepAddress, setPrivatePrepAddress] = useState(
    'Unit 4B, Commercial Industrial Hub, Enterprise Rd'
  );
  const [serviceModes, setServiceModes] = useState<ServiceMode[]>(['dine_in', 'takeaway']);
  const [currency, setCurrency] = useState('KES');
  const [phone, setPhone] = useState('+254 722 100 200');
  const [whatsapp, setWhatsapp] = useState('+254722100200');

  // Step 3: Menu & Offering Authoring
  const [firstMenuName, setFirstMenuName] = useState('Signature Brews & Pour-Overs');
  const [firstOfferingName, setFirstOfferingName] = useState('Single-Origin Yirgacheffe Pour-Over');
  const [firstOfferingDescription, setFirstOfferingDescription] = useState(
    'Jasmine, bergamot, and sweet peach notes brewed on V60'
  );
  const [firstOfferingPrice, setFirstOfferingPrice] = useState(550);
  const [firstOfferingDietary, setFirstOfferingDietary] = useState<string[]>(['Vegan', 'Single-Origin']);
  const [firstOfferingPrepTime, setFirstOfferingPrepTime] = useState(8);

  // Step 3 Image Upload State
  const [firstOfferingImage, setFirstOfferingImage] = useState<string>(
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80'
  );
  const [imageUploadMethod, setImageUploadMethod] = useState<'upload' | 'preset' | 'url'>('upload');
  const [customImageUrl, setCustomImageUrl] = useState('');

  // Step 3 Staged Saved Items State
  const [savedOfferings, setSavedOfferings] = useState<
    Array<{
      name: string;
      description: string;
      price: number;
      category: string;
      image?: string;
      dietaryTags: string[];
      preparationTimeMins?: number;
    }>
  >([]);
  const [isItemSaved, setIsItemSaved] = useState<boolean>(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(null);

  // Step 4: Staff & Permissions
  const [staffRole, setStaffRole] = useState<'merchant_owner' | 'merchant_manager' | 'merchant_staff'>(
    'merchant_owner'
  );

  // Step 5: Dual Sovereignty Consents
  const [merchantConsentResponsibility, setMerchantConsentResponsibility] = useState(true);
  const [pewaPlatformConsent, setPewaPlatformConsent] = useState(true);

  // Load preset when selectedOnboardingArchetype changes
  useEffect(() => {
    if (selectedOnboardingArchetype) {
      const preset = ARCHETYPE_PRESETS.find((p) => p.id === selectedOnboardingArchetype);
      if (preset) {
        applyPreset(preset.data);
      }
    }
  }, [selectedOnboardingArchetype]);

  const applyPreset = (data: OnboardingData) => {
    setOrgName(data.orgName);
    setContactName(data.contactName || 'David Kimani');
    setContactEmail(data.contactEmail || 'contact@business.com');
    setBrandName(data.brandName);
    setBrandTagline(data.brandTagline || '');
    setBusinessType(data.businessType);
    setIsDeliveryOnly(data.isDeliveryOnly);
    setAddressOrCoverage(data.addressOrCoverage);
    setPrivatePrepAddress(data.privatePrepAddress || 'Unit 4B, Private Prep Kitchen');
    setServiceModes(data.serviceModes);
    setCurrency(data.currency);
    setPhone(data.phone);
    setWhatsapp(data.whatsapp);
    setFirstMenuName(data.firstMenuName);
    setFirstOfferingName(data.firstOfferingName);
    setFirstOfferingDescription(data.firstOfferingDescription || '');
    setFirstOfferingPrice(data.firstOfferingPrice);
    setFirstOfferingDietary(data.firstOfferingDietary || ['Freshly Prepared']);
    setFirstOfferingPrepTime(data.firstOfferingPrepTime || 10);
    const initialImg = data.firstOfferingImage || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80';
    setFirstOfferingImage(initialImg);
    setStaffRole(data.staffRole || 'merchant_owner');
    setMerchantConsentResponsibility(true);
    setPewaPlatformConsent(true);

    // Initial staged item from preset
    const presetItem = {
      name: data.firstOfferingName,
      description: data.firstOfferingDescription || '',
      price: data.firstOfferingPrice,
      category: data.firstMenuName,
      image: initialImg,
      dietaryTags: data.firstOfferingDietary || ['Freshly Prepared'],
      preparationTimeMins: data.firstOfferingPrepTime || 10,
    };
    setSavedOfferings([presetItem]);
    setIsItemSaved(true);
  };

  if (!showOnboardingModal) return null;

  // Handle local file upload
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('File size exceeds 8MB. Please choose an optimized image.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFirstOfferingImage(reader.result);
          setIsItemSaved(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyCustomUrl = () => {
    if (customImageUrl.trim()) {
      setFirstOfferingImage(customImageUrl.trim());
      setIsItemSaved(false);
      setCustomImageUrl('');
    }
  };

  // Explicit Save Menu Item Handler
  const handleSaveOffering = () => {
    if (!firstOfferingName.trim() || !firstMenuName.trim() || !firstOfferingPrice) {
      alert('Please fill in offering name, category, and price before saving.');
      return;
    }

    const newItem = {
      name: firstOfferingName.trim(),
      description: firstOfferingDescription.trim(),
      price: Number(firstOfferingPrice),
      category: firstMenuName.trim(),
      image: firstOfferingImage,
      dietaryTags: firstOfferingDietary,
      preparationTimeMins: Number(firstOfferingPrepTime),
    };

    setSavedOfferings((prev) => {
      const idx = prev.findIndex((item) => item.name.toLowerCase() === newItem.name.toLowerCase());
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = newItem;
        return updated;
      }
      return [...prev, newItem];
    });

    setIsItemSaved(true);
    setSaveSuccessMessage(`"${newItem.name}" saved to menu!`);
    setTimeout(() => setSaveSuccessMessage(null), 3500);
  };

  const handleRemoveSavedOffering = (index: number) => {
    setSavedOfferings((prev) => prev.filter((_, i) => i !== index));
    if (savedOfferings.length <= 1) {
      setIsItemSaved(false);
    }
  };

  const handleAddNewOfferingForm = () => {
    setFirstOfferingName('');
    setFirstOfferingDescription('');
    setFirstOfferingPrice(400);
    setFirstOfferingDietary(['Freshly Prepared']);
    setIsItemSaved(false);
    setSaveSuccessMessage(null);
  };

  const handleContinueToStaffPermissions = () => {
    // If not saved yet, save automatically before moving to staff permissions
    if (!isItemSaved && firstOfferingName.trim() && firstMenuName.trim() && firstOfferingPrice) {
      handleSaveOffering();
    }
    setStep(4);
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!merchantConsentResponsibility || !pewaPlatformConsent) {
      alert('Please confirm both platform and business responsibility declarations before publishing.');
      return;
    }

    const finalOfferings =
      savedOfferings.length > 0
        ? savedOfferings
        : [
            {
              name: firstOfferingName.trim(),
              description: firstOfferingDescription.trim(),
              price: Number(firstOfferingPrice),
              category: firstMenuName.trim(),
              image: firstOfferingImage,
              dietaryTags: firstOfferingDietary,
              preparationTimeMins: Number(firstOfferingPrepTime),
            },
          ];

    completeOnboarding({
      orgName: orgName.trim(),
      contactName: contactName.trim(),
      contactEmail: contactEmail.trim(),
      brandName: brandName.trim(),
      brandTagline: brandTagline.trim(),
      businessType,
      serviceModes,
      isDeliveryOnly,
      addressOrCoverage: addressOrCoverage.trim(),
      privatePrepAddress: isDeliveryOnly ? privatePrepAddress.trim() : undefined,
      currency,
      phone,
      whatsapp,
      firstMenuName: firstMenuName.trim(),
      firstOfferingName: finalOfferings[0]?.name || firstOfferingName.trim(),
      firstOfferingDescription: finalOfferings[0]?.description || firstOfferingDescription.trim(),
      firstOfferingPrice: finalOfferings[0]?.price || Number(firstOfferingPrice),
      firstOfferingDietary: finalOfferings[0]?.dietaryTags || firstOfferingDietary,
      firstOfferingPrepTime: finalOfferings[0]?.preparationTimeMins || Number(firstOfferingPrepTime),
      firstOfferingImage: finalOfferings[0]?.image || firstOfferingImage,
      savedOfferings: finalOfferings,
      staffRole,
      merchantConsentResponsibility,
      pewaPlatformConsent,
    });
  };

  const handleCopyPublicUrl = (url: string) => {
    navigator.clipboard?.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const toggleDietaryTag = (tag: string) => {
    setFirstOfferingDietary((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setIsItemSaved(false);
  };

  const toggleServiceMode = (mode: ServiceMode) => {
    if (serviceModes.includes(mode)) {
      if (serviceModes.length > 1) {
        setServiceModes(serviceModes.filter((m) => m !== mode));
      }
    } else {
      setServiceModes([...serviceModes, mode]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
      <div className="bg-zinc-900 border border-zinc-700/80 rounded-t-3xl sm:rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold border border-amber-500/30">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base">
                  {onboardingResult ? 'Onboarding Successful!' : 'Business Onboarding Wizard'}
                </h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                  PEWA R01 & BMP-001
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                {onboardingResult
                  ? 'Your brand and menu are live on the PEWA platform infrastructure.'
                  : `Step ${step} of 5 • Fast-path to first published menu with 200 included units`}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setShowOnboardingModal(false);
              setOnboardingResult(null);
            }}
            className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1-Click Scenario Archetype Bar */}
        {!onboardingResult && (
          <div className="bg-zinc-950/80 border-b border-zinc-800/80 px-4 py-2.5 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-zinc-500 font-semibold shrink-0 text-[11px] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Quick-fill Scenario:
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              {ARCHETYPE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset.data)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition ${
                    businessType === preset.data.businessType && brandName === preset.data.brandName
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {preset.icon}
                  <span>{preset.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Progress Bar */}
        {!onboardingResult && (
          <div className="h-1 w-full bg-zinc-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* ============================================================== */}
          {/* COMPLETION SCREEN & SCENARIO TESTING ACTIONS                    */}
          {/* ============================================================== */}
          {onboardingResult ? (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-500/40 rounded-3xl p-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {onboardingResult.brandName} is Live!
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Your menu offering (<strong className="text-white">{onboardingResult.offeringName}</strong>)
                  is published with a permanent URL, QR code, and photo. Customers can browse and order instantly without an app download.
                </p>

                {/* Permanent Link Card */}
                <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 flex items-center justify-between gap-3 text-left max-w-lg mx-auto">
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">
                      Permanent Customer URL (§6.C)
                    </div>
                    <div className="text-xs font-mono text-amber-400 truncate">
                      {onboardingResult.publicUrl}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyPublicUrl(onboardingResult.publicUrl)}
                    className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition shrink-0"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Subscription Entitlement Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span>
                    <strong>200 Standard Ordering Units</strong> Active • 10-Unit Continuity Safeguard Ready
                  </span>
                </div>
              </div>

              {/* THREE INTERACTIVE SCENARIO ACTIONS */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Next: Test Your Onboarded Business Scenario
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Action 1: Customer View */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveBrandId(onboardingResult.brandId);
                      setRole('customer');
                      setShowOnboardingModal(false);
                      setOnboardingResult(null);
                    }}
                    className="group bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-500/50 rounded-2xl p-4 text-left transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2.5">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-white text-xs group-hover:text-amber-400 transition">
                        1. Browse as Customer
                      </h5>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        View permanent menu with dish photo, add {onboardingResult.offeringName} to cart without login.
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                      <span>Open Customer Menu</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                    </div>
                  </button>

                  {/* Action 2: Merchant Console */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveBrandId(onboardingResult.brandId);
                      setRole('merchant_owner');
                      setShowOnboardingModal(false);
                      setOnboardingResult(null);
                    }}
                    className="group bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-blue-500/50 rounded-2xl p-4 text-left transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2.5">
                        <Store className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-white text-xs group-hover:text-blue-400 transition">
                        2. Merchant Console
                      </h5>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        Manage 86-ing (sold out status), prices, dish images, order dispatch, and 200 unit ledger.
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] text-blue-400 font-semibold flex items-center gap-1">
                      <span>Open Console</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                    </div>
                  </button>

                  {/* Action 3: Simulate First Order */}
                  <button
                    type="button"
                    onClick={() => {
                      simulateFirstOrderForBrand(onboardingResult.brandId);
                      setShowOnboardingModal(false);
                      setOnboardingResult(null);
                    }}
                    className="group bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-900 hover:bg-zinc-850 border border-amber-500/40 rounded-2xl p-4 text-left transition flex flex-col justify-between shadow-lg shadow-amber-500/10"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-amber-500 text-black flex items-center justify-center mb-2.5 font-bold">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-amber-300 text-xs">
                        3. Simulate 1st Order ⚡
                      </h5>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        Inject a live customer order & test the 1-click accept (-1 unit) lifecycle.
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                      <span>Test Order Flow</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* ============================================================== */}
              {/* STEP 1: Accountable Organisation & Public Brand Identity       */}
              {/* ============================================================== */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5" /> Step 1: Accountable Organisation & Brand Identity
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Who is publishing this menu?</h4>
                    <p className="text-xs text-zinc-400">
                      Under PEWA R01-001 & R01-007, accountable billing organisation is separated from customer-facing brand presentation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Accountable Subscriber Organisation Legal Name
                      </label>
                      <input
                        type="text"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="e.g. Acacia Hospitality Ventures Ltd"
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Accountable Owner / Representative Name
                      </label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. David Kimani"
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Public Customer-Facing Brand Name (What customers see)
                    </label>
                    <input
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Nairobi Coffee Lab"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Brand Tagline / Customer Highlight
                    </label>
                    <input
                      type="text"
                      value={brandTagline}
                      onChange={(e) => setBrandTagline(e.target.value)}
                      placeholder="e.g. Micro-lot single-origin roasts & artisanal pour-overs"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                    />
                  </div>

                  {/* Business Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Operating Archetype
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'cafe', label: 'Café & Roastery', icon: <Coffee className="w-3.5 h-3.5" /> },
                        { id: 'restaurant', label: 'Restaurant & Grill', icon: <ChefHat className="w-3.5 h-3.5" /> },
                        { id: 'hotel', label: 'Hotel & Lounge', icon: <Hotel className="w-3.5 h-3.5" /> },
                        { id: 'delivery_kitchen', label: 'Ghost Kitchen', icon: <Truck className="w-3.5 h-3.5" /> },
                        { id: 'bakery', label: 'Artisan Bakery', icon: <Store className="w-3.5 h-3.5" /> },
                        { id: 'bar', label: 'Bar & Taproom', icon: <Sparkles className="w-3.5 h-3.5" /> },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => {
                            setBusinessType(t.id as any);
                            if (t.id === 'delivery_kitchen') {
                              setIsDeliveryOnly(true);
                              setServiceModes(['delivery']);
                            }
                          }}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition ${
                            businessType === t.id
                              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {t.icon}
                          <span className="truncate">{t.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!orgName.trim() || !brandName.trim()}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-2 disabled:opacity-50"
                    >
                      <span>Continue: Service & Location</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* STEP 2: Service Model, Location & Privacy Boundary             */}
              {/* ============================================================== */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" /> Step 2: Service Modes & Privacy Boundary
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Where & how do you serve?</h4>
                    <p className="text-xs text-zinc-400">
                      R01-012: Storefront venues display addresses; delivery-only operations declare coverage zones while private prep kitchens remain protected.
                    </p>
                  </div>

                  {/* Delivery-Only Toggle */}
                  <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-amber-400" />
                        <span>Delivery-Only Operation (Ghost Kitchen)?</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        No public customer walk-in. Dispatched directly from commercial kitchen.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isDeliveryOnly}
                      onChange={(e) => {
                        setIsDeliveryOnly(e.target.checked);
                        if (e.target.checked) {
                          setServiceModes(['delivery']);
                          setAddressOrCoverage('Kilimani, Westlands & Lavington (6km radius)');
                        } else {
                          setServiceModes(['dine_in', 'takeaway']);
                          setAddressOrCoverage('14 Arboretum Drive, Nairobi');
                        }
                      }}
                      className="w-4 h-4 accent-amber-500 rounded"
                    />
                  </div>

                  {/* Address or Service Area */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      {isDeliveryOnly ? 'Publicly Declared Service Coverage Zone' : 'Public Storefront Venue Address'}
                    </label>
                    <input
                      type="text"
                      value={addressOrCoverage}
                      onChange={(e) => setAddressOrCoverage(e.target.value)}
                      placeholder={
                        isDeliveryOnly
                          ? 'e.g. Westlands, Kilimani & Parklands (Radius 6km)'
                          : 'e.g. 14 Arboretum Drive, Kileleshwa, Nairobi'
                      }
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      required
                    />
                  </div>

                  {/* Privacy protection notice if delivery only */}
                  {isDeliveryOnly && (
                    <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl space-y-2">
                      <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Private Preparation Address Confidentiality (§R01-012/017)</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        Under PEWA privacy invariants, your physical preparation address is administrative-only.
                        It will NEVER be published to customers, shared in search, or cached publicly.
                      </p>
                      <input
                        type="text"
                        value={privatePrepAddress}
                        onChange={(e) => setPrivatePrepAddress(e.target.value)}
                        placeholder="Internal kitchen address (e.g. Unit 4B, Enterprise Road)"
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2 text-xs text-zinc-300 outline-none"
                      />
                    </div>
                  )}

                  {/* Service Modes Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Customer Service Modes Supported
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'dine_in' as ServiceMode, label: 'Dine-In' },
                        { id: 'takeaway' as ServiceMode, label: 'Takeaway' },
                        { id: 'delivery' as ServiceMode, label: 'Delivery' },
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => toggleServiceMode(m.id)}
                          className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition ${
                            serviceModes.includes(m.id)
                              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact & Currency */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Direct WhatsApp
                      </label>
                      <input
                        type="text"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+254722100200"
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Direct Phone
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+254 722 100 200"
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Single Operating Currency
                      </label>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                      >
                        <option value="KES">KES (Kenyan Shilling)</option>
                        <option value="USD">USD (US Dollar)</option>
                        <option value="EUR">EUR (Euro)</option>
                        <option value="GBP">GBP (British Pound)</option>
                        <option value="BIF">BIF (Burundian Franc)</option>
                        <option value="ZAR">ZAR (South African Rand)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-2"
                    >
                      <span>Continue: Menu & Dish Imagery</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* STEP 3: Initial Menu Creation, Image Upload & Save Item        */}
              {/* ============================================================== */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ChefHat className="w-3.5 h-3.5" /> Step 3: Menu Creation & Offering Imagery
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">
                      Create menu, upload dish photo & save item
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Author your menu offering with high-resolution imagery and confirm saving before configuring staff scopes.
                    </p>
                  </div>

                  {/* Feedback Banner on Item Save */}
                  {saveSuccessMessage && (
                    <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>{saveSuccessMessage}</span>
                    </div>
                  )}

                  {/* Section A: Category & Dish Details */}
                  <div className="bg-zinc-950/70 p-4 rounded-2xl border border-zinc-800/80 space-y-3.5">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>1. Offering Details</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Menu Category / Section Name
                      </label>
                      <input
                        type="text"
                        value={firstMenuName}
                        onChange={(e) => {
                          setFirstMenuName(e.target.value);
                          setIsItemSaved(false);
                        }}
                        placeholder="e.g. Signature Brews & Pour-Overs"
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Offering Dish / Item Name
                        </label>
                        <input
                          type="text"
                          value={firstOfferingName}
                          onChange={(e) => {
                            setFirstOfferingName(e.target.value);
                            setIsItemSaved(false);
                          }}
                          placeholder="e.g. Single-Origin Yirgacheffe Pour-Over"
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Price ({currency})
                        </label>
                        <input
                          type="number"
                          value={firstOfferingPrice}
                          onChange={(e) => {
                            setFirstOfferingPrice(Number(e.target.value));
                            setIsItemSaved(false);
                          }}
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Dish Description & Flavor Profile
                      </label>
                      <textarea
                        rows={2}
                        value={firstOfferingDescription}
                        onChange={(e) => {
                          setFirstOfferingDescription(e.target.value);
                          setIsItemSaved(false);
                        }}
                        placeholder="e.g. Jasmine, bergamot, and sweet peach notes brewed on V60."
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Preparation Time (Minutes)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="120"
                          value={firstOfferingPrepTime}
                          onChange={(e) => {
                            setFirstOfferingPrepTime(Number(e.target.value));
                            setIsItemSaved(false);
                          }}
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                          Dietary Badges
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {['Vegan', 'Vegetarian', 'Gluten-Free', 'Halal', 'Chef Special'].map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => toggleDietaryTag(tag)}
                              className={`px-2 py-0.5 rounded-lg text-[11px] font-medium border transition ${
                                firstOfferingDietary.includes(tag)
                                  ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section B: IMAGE UPLOAD STEP (Dedicated image selection & upload) */}
                  <div className="bg-zinc-950/70 p-4 rounded-2xl border border-zinc-800/80 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5" />
                        <span>2. Upload Offering Image</span>
                      </div>
                      <span className="text-[11px] text-zinc-400">
                        {firstOfferingImage ? 'Image attached' : 'No photo uploaded'}
                      </span>
                    </div>

                    {/* Method Switcher Tabs */}
                    <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs">
                      <button
                        type="button"
                        onClick={() => setImageUploadMethod('upload')}
                        className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition ${
                          imageUploadMethod === 'upload'
                            ? 'bg-amber-500 text-black shadow'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload File</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageUploadMethod('preset')}
                        className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition ${
                          imageUploadMethod === 'preset'
                            ? 'bg-amber-500 text-black shadow'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Food Presets</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageUploadMethod('url')}
                        className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition ${
                          imageUploadMethod === 'url'
                            ? 'bg-amber-500 text-black shadow'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>Image URL</span>
                      </button>
                    </div>

                    {/* Tab 1: Local Device Upload */}
                    {imageUploadMethod === 'upload' && (
                      <div className="space-y-3">
                        <label className="border-2 border-dashed border-zinc-700 hover:border-amber-500 rounded-2xl p-4 text-center block cursor-pointer bg-zinc-900/50 hover:bg-zinc-900 transition">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageFileChange}
                            className="hidden"
                          />
                          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-2 border border-amber-500/30">
                            <Upload className="w-5 h-5" />
                          </div>
                          <div className="text-xs font-bold text-white">
                            Click to browse or drag & drop dish photo
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-1">
                            Supports PNG, JPG, WEBP (Instant local preview)
                          </p>
                        </label>
                      </div>
                    )}

                    {/* Tab 2: Curated Food Presets */}
                    {imageUploadMethod === 'preset' && (
                      <div className="space-y-2">
                        <div className="text-[11px] text-zinc-400">
                          Select a high-resolution hospitality photo matching your culinary style:
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {FOOD_IMAGE_PRESETS.map((p, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setFirstOfferingImage(p.url);
                                setIsItemSaved(false);
                              }}
                              className={`group relative rounded-xl overflow-hidden border text-left transition aspect-video flex flex-col justify-end p-2 ${
                                firstOfferingImage === p.url
                                  ? 'border-amber-500 ring-2 ring-amber-500/50'
                                  : 'border-zinc-800 hover:border-zinc-700'
                              }`}
                            >
                              <img
                                src={p.url}
                                alt={p.label}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                              <div className="relative z-10">
                                <span className="text-[10px] font-bold text-white leading-tight block truncate drop-shadow">
                                  {p.label}
                                </span>
                                <span className="text-[9px] text-amber-300 font-medium">
                                  {p.category}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Direct URL */}
                    {imageUploadMethod === 'url' && (
                      <div className="flex gap-2">
                        <input
                          type="url"
                          value={customImageUrl}
                          onChange={(e) => setCustomImageUrl(e.target.value)}
                          placeholder="Paste image web address (https://...)"
                          className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleApplyCustomUrl}
                          className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition shrink-0"
                        >
                          Apply URL
                        </button>
                      </div>
                    )}

                    {/* Image Preview & Verification Card */}
                    {firstOfferingImage && (
                      <div className="bg-zinc-900 rounded-2xl p-3 border border-zinc-800 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={firstOfferingImage}
                            alt="Offering Preview"
                            className="w-16 h-16 rounded-xl object-cover shrink-0 border border-zinc-700"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-white truncate">
                                {firstOfferingName || 'Offering Photo Preview'}
                              </span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                                Ready
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                              {firstMenuName} • {currency} {firstOfferingPrice}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFirstOfferingImage('')}
                          className="p-2 rounded-xl text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 transition"
                          title="Remove image"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Section C: SAVE MENU ITEM ACTION & STAGED OFFERINGS LIST */}
                  <div className="bg-zinc-950/70 p-4 rounded-2xl border border-zinc-800/80 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Save className="w-3.5 h-3.5" />
                        <span>3. Save Offering to Menu</span>
                      </div>
                      <span className="text-[11px] text-zinc-400">
                        {savedOfferings.length} Saved {savedOfferings.length === 1 ? 'Item' : 'Items'}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handleSaveOffering}
                        disabled={!firstOfferingName.trim() || !firstMenuName.trim()}
                        className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 disabled:opacity-50"
                      >
                        <Save className="w-4 h-4" />
                        <span>
                          {isItemSaved ? 'Update Saved Offering' : 'Save Offering to Menu'}
                        </span>
                      </button>
                      {savedOfferings.length > 0 && (
                        <button
                          type="button"
                          onClick={handleAddNewOfferingForm}
                          className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs transition flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-4 h-4" />
                          <span>+ Add Another Dish</span>
                        </button>
                      )}
                    </div>

                    {/* Staged Saved Offerings List */}
                    {savedOfferings.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                        <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                          Staged Menu Items Ready for Publication:
                        </div>
                        <div className="space-y-2">
                          {savedOfferings.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 flex items-center justify-between gap-3"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {item.image && (
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-lg object-cover shrink-0 border border-zinc-800"
                                  />
                                )}
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <h5 className="font-bold text-white text-xs truncate">
                                      {item.name}
                                    </h5>
                                    <span className="font-mono text-amber-400 text-xs font-bold shrink-0">
                                      {currency} {item.price}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-zinc-400 truncate">
                                    {item.category} • {item.preparationTimeMins} mins • {item.dietaryTags.join(', ')}
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveSavedOffering(idx)}
                                className="p-1.5 text-zinc-500 hover:text-rose-400 transition"
                                title="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step 3 Navigation Buttons */}
                  <div className="pt-2 flex justify-between items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={handleContinueToStaffPermissions}
                      disabled={savedOfferings.length === 0 && (!firstOfferingName.trim() || !firstMenuName.trim())}
                      className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-amber-500/20"
                    >
                      <span>
                        {isItemSaved || savedOfferings.length > 0
                          ? 'Continue: Staff Permissions'
                          : 'Save & Continue: Staff Permissions'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* STEP 4: Staff & Publishing Scopes (Least Privilege)            */}
              {/* ============================================================== */}
              {step === 4 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Step 4: Operational Staff & Least-Privilege Scopes
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Configure role boundaries</h4>
                    <p className="text-xs text-zinc-400">
                      BMP-D03: Content editing is strictly separated from public publishing and commercial unit administration.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        role: 'merchant_owner' as const,
                        title: 'Organisation Owner / Primary Admin',
                        desc: 'Full commercial sovereignty: unit purchase, bank/billing, multi-brand group setup, campaigns & staff access control.',
                        icon: <Store className="w-4 h-4 text-amber-400" />,
                      },
                      {
                        role: 'merchant_manager' as const,
                        title: 'Business Manager',
                        desc: 'Daily operation authority: author offerings, update prices, upload dish photography, manage opening hours and operational reports.',
                        icon: <Sliders className="w-4 h-4 text-blue-400" />,
                      },
                      {
                        role: 'merchant_staff' as const,
                        title: 'Kitchen Staff / Order Receiver',
                        desc: 'Focused dispatch terminal: fast order acceptance (-1 unit) and ready signal declaration. Cannot publish or buy units.',
                        icon: <ChefHat className="w-4 h-4 text-purple-400" />,
                      },
                    ].map((item) => (
                      <div
                        key={item.role}
                        onClick={() => setStaffRole(item.role)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                          staffRole === item.role
                            ? 'bg-amber-500/10 border-amber-500/60 text-white'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="mt-0.5">{item.icon}</div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>{item.title}</span>
                            {staffRole === item.role && (
                              <span className="text-[10px] text-amber-400 font-bold uppercase">
                                Selected Default
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 text-[11px] text-zinc-400 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      R01-021 Invariant: Subscribing to ordering or adding a brand does NOT automatically expand permissions across non-admin staff.
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back to Menu
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-2"
                    >
                      <span>Continue: Declaration & Publish</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* STEP 5: Sovereignty Declaration & Live Publication             */}
              {/* ============================================================== */}
              {step === 5 && (
                <form onSubmit={handleFinish} className="space-y-4 animate-in fade-in">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Step 5: Dual Sovereignty Declaration & Publication
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Confirm and publish live</h4>
                    <p className="text-xs text-zinc-400">
                      R01-006 & Constitution CP-03: Explicit recognition of merchant responsibility vs PEWA platform infrastructure.
                    </p>
                  </div>

                  {/* Summary Card with Image & Saved Offerings Preview */}
                  <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                      <span className="text-zinc-400">Brand Name:</span>
                      <strong className="text-white font-bold">{brandName}</strong>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                      <span className="text-zinc-400">Menu Category:</span>
                      <strong className="text-white">{firstMenuName}</strong>
                    </div>

                    {/* Offering Summary with Image */}
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                      <span className="text-zinc-400">Published Offerings:</span>
                      <div className="flex items-center gap-2 text-right">
                        {firstOfferingImage && (
                          <img
                            src={firstOfferingImage}
                            alt="Dish preview"
                            className="w-7 h-7 rounded-lg object-cover border border-zinc-700"
                          />
                        )}
                        <strong className="text-white">
                          {savedOfferings.length > 0
                            ? `${savedOfferings.length} Dish (${savedOfferings[0].name})`
                            : `${firstOfferingName} (${currency} ${firstOfferingPrice})`}
                        </strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                      <span className="text-zinc-400">Service Modes:</span>
                      <span className="text-amber-300 capitalize">{serviceModes.join(', ')}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Included Units:</span>
                      <span className="text-emerald-400 font-mono font-bold">200 Units (+10 Continuity Safeguard)</span>
                    </div>
                  </div>

                  {/* Dual Sovereignty Checkboxes */}
                  <div className="space-y-3 pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer bg-zinc-950/80 p-3 rounded-xl border border-zinc-800 text-xs text-zinc-300">
                      <input
                        type="checkbox"
                        checked={merchantConsentResponsibility}
                        onChange={(e) => setMerchantConsentResponsibility(e.target.checked)}
                        className="w-4 h-4 accent-amber-500 rounded mt-0.5 shrink-0"
                        required
                      />
                      <span>
                        <strong className="text-white">Merchant Culinary Sovereignty:</strong> I confirm our participating organisation authors and is solely responsible for its offerings, truthful pricing, allergen declarations, and physical food fulfilment.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 cursor-pointer bg-zinc-950/80 p-3 rounded-xl border border-zinc-800 text-xs text-zinc-300">
                      <input
                        type="checkbox"
                        checked={pewaPlatformConsent}
                        onChange={(e) => setPewaPlatformConsent(e.target.checked)}
                        className="w-4 h-4 accent-amber-500 rounded mt-0.5 shrink-0"
                        required
                      />
                      <span>
                        <strong className="text-white">PEWA Platform Boundary:</strong> I acknowledge PEWA provides the software infrastructure for menu publishing and structured ordering, and does NOT act as the seller, culinary preparer, or delivery agent of food.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={!merchantConsentResponsibility || !pewaPlatformConsent}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Complete Onboarding & Publish Menu Live</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
