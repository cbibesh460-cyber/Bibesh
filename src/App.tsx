/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AboutUsPage } from './components/about/AboutUsPage';
import { AcademicsPage } from './components/academics/AcademicsPage';
import { AdmissionsPage } from './components/admissions/AdmissionsPage';
import { AuthModal } from './components/common/AuthModal';
import { Footer } from './components/common/Footer';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { Header } from './components/common/Header';
import { NoticePopupModal } from './components/common/NoticePopupModal';
import { ProspectusModal } from './components/common/ProspectusModal';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ContactPage } from './components/contact/ContactPage';
import { AdminDashboard } from './components/dashboard/AdminDashboard';
import { ParentDashboard } from './components/dashboard/ParentDashboard';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { TeacherDashboard } from './components/dashboard/TeacherDashboard';
import { FacilitiesPage } from './components/facilities/FacilitiesPage';
import { FacultyPage } from './components/faculty/FacultyPage';
import { GalleryPage } from './components/gallery/GalleryPage';
import { HomePage } from './components/home/HomePage';
import { NoticesPage } from './components/notices/NoticesPage';
import { AppProvider, useApp } from './context/AppContext';

const AppContent: React.FC = () => {
  const { currentPage, currentUser, toastMessage } = useApp();

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUsPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'faculty':
        return <FacultyPage />;
      case 'facilities':
        return <FacilitiesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'notices':
        return <NoticesPage />;
      case 'contact':
        return <ContactPage />;
      case 'dashboard':
        if (currentUser?.role === 'admin') return <AdminDashboard />;
        if (currentUser?.role === 'teacher') return <TeacherDashboard />;
        if (currentUser?.role === 'parent') return <ParentDashboard />;
        return <StudentDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-6 z-50 px-4 py-3 rounded-xl bg-blue-950 text-white border border-amber-400/60 shadow-2xl text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-200 flex items-center gap-2 max-w-sm"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Global Navigation */}
      <Header />

      {/* Page View */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Global Institutional Footer */}
      <Footer />

      {/* Floating Tools & Modals */}
      <WhatsAppButton />
      <GlobalSearchModal />
      <NoticePopupModal />
      <ProspectusModal />
      <AuthModal />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
