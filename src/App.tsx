import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { CustomerHome } from './components/CustomerHome';
import { DirectoryView } from './components/DirectoryView';
import { MenuDetailView } from './components/MenuDetailView';
import { HotelGuestView } from './components/HotelGuestView';
import { MerchantConsole } from './components/MerchantConsole';
import { OperatorConsole } from './components/OperatorConsole';
import { DocsExplorer } from './components/DocsExplorer';
import { CartCheckoutModal } from './components/CartCheckoutModal';
import { OrderStatusModal } from './components/OrderStatusModal';
import { ScenarioControlPanel } from './components/ScenarioControlPanel';
import { OnboardingModal } from './components/OnboardingModal';
import { ViewportSwitcher } from './components/ViewportSwitcher';
import { MobilePwaShell } from './components/MobilePwaShell';

export const App: React.FC = () => {
  const {
    role,
    setRole,
    activeBrand,
    activeBrandId,
    setActiveBrandId,
    activeOrderId,
    setActiveOrderId,
    viewportMode,
  } = useApp();

  const [viewMode, setViewMode] = useState<'home' | 'directory'>('home');
  const [directorySearchQuery, setDirectorySearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderStatusOpen, setIsOrderStatusOpen] = useState(false);

  const handleSelectBrand = (brandId: string) => {
    setActiveBrandId(brandId);
  };

  const handleNavigateToDirectory = (query?: string) => {
    setDirectorySearchQuery(query || '');
    setViewMode('directory');
    setActiveBrandId(null);
  };

  const handleBackFromMenu = () => {
    setActiveBrandId(null);
  };

  // The active content based on current role and state
  const renderActiveAppContent = () => {
    if (role === 'customer') {
      if (activeBrand) {
        return (
          <MenuDetailView
            brand={activeBrand}
            onBack={handleBackFromMenu}
            onOpenCart={() => setIsCartOpen(true)}
          />
        );
      }
      if (viewMode === 'directory') {
        return (
          <DirectoryView
            initialSearch={directorySearchQuery}
            onSelectBrand={handleSelectBrand}
            onBackToHome={() => setViewMode('home')}
          />
        );
      }
      return (
        <CustomerHome
          onSelectBrand={handleSelectBrand}
          onNavigateToDirectory={handleNavigateToDirectory}
          onOpenOrders={() => setIsOrderStatusOpen(true)}
        />
      );
    }

    if (role === 'hotel_guest') {
      return <HotelGuestView onSelectBrand={handleSelectBrand} />;
    }

    if (
      role === 'merchant_owner' ||
      role === 'merchant_admin' ||
      role === 'merchant_manager' ||
      role === 'merchant_staff'
    ) {
      return <MerchantConsole />;
    }

    if (role === 'pewa_operator') {
      return <OperatorConsole />;
    }

    if (role === 'docs_viewer') {
      return <DocsExplorer />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Persistent Viewport & Shell Switcher (Mobile PWA vs Desktop + Device Mockups) */}
      <ViewportSwitcher
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrders={() => setIsOrderStatusOpen(true)}
      />

      {/* RENDER MODE: MOBILE PWA SHELL */}
      {viewportMode === 'mobile' ? (
        <div className="flex-1 flex flex-col items-center justify-start bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 p-2 sm:p-6 overflow-y-auto">
          <MobilePwaShell
            onOpenCart={() => setIsCartOpen(true)}
            onOpenOrders={() => setIsOrderStatusOpen(true)}
            onNavigateHome={() => {
              setViewMode('home');
              setActiveBrandId(null);
            }}
            onNavigateDirectory={(q) => handleNavigateToDirectory(q)}
          >
            {renderActiveAppContent()}
          </MobilePwaShell>
        </div>
      ) : (
        /* RENDER MODE: DESKTOP WORKSPACE LAYOUT */
        <>
          {/* Main Desktop Navbar */}
          <Navbar
            onOpenCart={() => setIsCartOpen(true)}
            onOpenOrders={() => setIsOrderStatusOpen(true)}
          />

          {/* Main Desktop Viewport Container */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6">
            {renderActiveAppContent()}
          </main>

          {/* Platform Footer in Desktop Mode */}
          <footer className="border-t border-zinc-900 bg-zinc-950 py-6 text-center text-xs text-zinc-600 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <strong className="text-zinc-400">PEWA Platform</strong> • Multi-tenant menu publishing and ordering infrastructure
              </div>
              <div className="flex items-center gap-4 text-zinc-500">
                <span>F01–F05 Foundation Approved</span>
                <span>•</span>
                <span>S6-PRE-ENG-001 Prototype Reference</span>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Guided Business Onboarding Modal (§6.C & §14) */}
      <OnboardingModal />

      {/* Prototype Scenario Engine Control Panel (§7) */}
      <ScenarioControlPanel />

      {/* Cart & Checkout Modal */}
      <CartCheckoutModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOrderSubmitted={(orderId) => {
          setActiveOrderId(orderId);
          setIsOrderStatusOpen(true);
        }}
      />

      {/* Live Order Status Tracker Modal */}
      <OrderStatusModal
        isOpen={isOrderStatusOpen}
        onClose={() => setIsOrderStatusOpen(false)}
        orderId={activeOrderId}
      />
    </div>
  );
};

export default App;
