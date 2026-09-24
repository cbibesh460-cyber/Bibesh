import React from 'react';
import { Award, Calendar, CheckCircle2, ChevronRight, Sparkles, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NoticePopupModal: React.FC = () => {
  const { isNoticePopupOpen, dismissNoticePopup, setCurrentPage, openProspectusModal } = useApp();

  if (!isNoticePopupOpen) return null;

  const handleApply = () => {
    dismissNoticePopup();
    setCurrentPage('admissions');
  };

  const handleProspectus = () => {
    dismissNoticePopup();
    openProspectusModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Important Admission Notice"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-amber-500/30 overflow-hidden">
        {/* Top gold accent ribbon */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white p-6 relative">
          <button
            onClick={dismissNoticePopup}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Notice Popup"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Official Institutional Circular
          </div>
          <h3 className="font-serif-brand text-2xl font-bold text-white tracking-tight">
            Admissions Open: Academic Session 2026-2027
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            ABC School and College invites prospective scholars from Nursery to Grade 12 & Higher Secondary College Streams.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 text-slate-700 dark:text-slate-300 text-sm">
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>Merit Scholarships:</strong> Up to 100% tuition waiver for national Olympiad medalists and high-ranking board achievers.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>First Phase Entrance Exam:</strong> Sunday, 18th October 2026 (Both online and on-campus formats available).
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>Limited Seats:</strong> Early applications receive priority consideration for specialized STEM and Commerce tracks.
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleApply}
              className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Apply Online Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleProspectus}
              className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium transition-colors cursor-pointer"
            >
              View Prospectus
            </button>
          </div>

          <div className="text-center pt-1">
            <button
              onClick={dismissNoticePopup}
              className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer underline underline-offset-2"
            >
              Do not show this notification again today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
