import React, { useState } from 'react';
import {
  Bell,
  ChevronDown,
  Globe,
  LogIn,
  LogOut,
  Menu,
  Moon,
  Phone,
  Search,
  Sun,
  User,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PageId } from '../../types';

export const Header: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    isDarkMode,
    toggleDarkMode,
    currentUser,
    logout,
    openAuthModal,
    openSearchModal,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'facilities', label: 'Facilities' },
  ];

  const secondaryNavItems: { id: PageId; label: string }[] = [
    { id: 'faculty', label: 'Faculty' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'notices', label: 'Notices & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <>
      {/* Utility Announcement Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              Admissions 2026-27 Open
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300 truncate">
              Scholarship aptitude exams scheduled for upcoming batch. Apply online today.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 shrink-0 ml-auto">
            <a
              href="tel:+911145678900"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="tabular-nums">+91 11 4567 8900</span>
            </a>
            <button
              onClick={openSearchModal}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              title="Quick Search"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Search (Ctrl+K)</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar - Following strict 3-Zone contract */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element / Brand Wordmark with Crest */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 rounded-md"
          >
            <div className="w-11 h-11 rounded-lg bg-blue-900 dark:bg-blue-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm shrink-0">
              <span className="font-serif-brand font-bold text-xl tracking-wider">ABC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-brand font-bold text-lg sm:text-xl tracking-tight text-blue-950 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors whitespace-nowrap">
                ABC School & College
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-amber-700 dark:text-amber-400">
                Est. 1988 · Accredited Grade A++
              </span>
            </div>
          </button>

          {/* Zone 2: 4-6 nav links (plus More dropdown) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700 dark:text-slate-200">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors hover:text-blue-800 dark:hover:text-amber-400 cursor-pointer whitespace-nowrap ${
                  currentPage === item.id
                    ? 'text-blue-900 dark:text-amber-400 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* More Navigation Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1 py-1 hover:text-blue-800 dark:hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  {secondaryNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700/60 ${
                        currentPage === item.id
                          ? 'text-blue-900 dark:text-amber-400 font-semibold bg-amber-50/50 dark:bg-slate-700'
                          : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: 1-2 Primary Action Points */}
          <div className="flex items-center gap-3 shrink-0">
            {/* User portal status or login button */}
            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage('portal')}
                  className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-900 dark:text-amber-400 border border-blue-200 dark:border-slate-700 hover:border-amber-400 transition-colors cursor-pointer whitespace-nowrap"
                  title="Open Portal Dashboard"
                >
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  <span className="truncate max-w-[110px]">{currentUser.name.split(' ')[0]}</span>
                  <span className="px-1.5 py-0.2 bg-blue-900 text-white rounded text-[10px] uppercase">
                    {currentUser.role}
                  </span>
                </button>
                <button
                  onClick={logout}
                  className="p-2 text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
                  title="Log out"
                  aria-label="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('student')}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400" />
                <span>Portal Login</span>
              </button>
            )}

            {/* Primary Action Button: Apply Now */}
            <button
              onClick={() => handleNavClick('admissions')}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Apply Now
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 gap-1">
              {[...mainNavItems, ...secondaryNavItems].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    currentPage === item.id
                      ? 'bg-blue-900 text-white font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              {currentUser ? (
                <button
                  onClick={() => {
                    setCurrentPage('portal');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-blue-50 dark:bg-slate-800 text-blue-950 dark:text-amber-400"
                >
                  <User className="w-4 h-4" />
                  <span>My Portal Dashboard ({currentUser.role})</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAuthModal('student');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                >
                  <LogIn className="w-4 h-4 text-blue-600" />
                  <span>Student / Faculty Login</span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
