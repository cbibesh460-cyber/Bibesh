import React from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Facebook,
  GraduationCap,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Youtube,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PageId } from '../../types';

export const Footer: React.FC = () => {
  const { setCurrentPage, openAuthModal, openProspectusModal } = useApp();

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top Banner strip */}
      <div className="border-b border-slate-800/80 bg-blue-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Admissions for Session 2026-2027 are Open
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Inquire today for scholarships, entrance dates, and guided campus tours.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openProspectusModal}
              className="px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-900 transition-colors cursor-pointer"
            >
              Download Prospectus
            </button>
            <button
              onClick={() => handleNav('admissions')}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer shadow-sm"
            >
              Apply Online
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <span className="font-serif-brand font-bold text-lg">ABC</span>
              </div>
              <div>
                <span className="font-serif-brand font-bold text-lg text-white block">
                  ABC School and College
                </span>
                <span className="text-xs text-amber-400/90 font-medium">
                  Autonomous Educational Institution · Est. 1988
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Dedicated to nurturing intellectual curiosity, ethical character, and academic mastery.
              Ranked Grade A++ by the National Educational Accreditation Board with 38 years of proven leadership.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Affiliated to CBSE & Higher Secondary Examination Council</span>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Academics
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Pre-Primary & Nursery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Primary Wing (Grades 1-5)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Middle School (Grades 6-8)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Secondary High School (9-10)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Higher Secondary Science (+2)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Commerce & Humanities (+2)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Institution
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Our History & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faculty')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Faculty Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Campus Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Campus Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('notices')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Notices & Circulars
                </button>
              </li>
              <li>
                <button
                  onClick={() => openAuthModal('admin')}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1 text-slate-400"
                >
                  <span>Administrative Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Campus Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Campus Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Knowledge Enclave, Sector 14, Institutional Area, New Delhi - 110001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="tabular-nums">+91 11 4567 8900 / 01</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>admissions@abcschool.edu</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon – Sat: 8:00 AM – 4:30 PM (Office closed Sundays)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Accessibility Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} ABC School and College. All Rights Reserved. ISO 9001:2015 Certified.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Feedback & Inquiries
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('admissions')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Fee Policy
            </button>
            <span>·</span>
            <button
              onClick={() => openAuthModal('student')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Student Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
