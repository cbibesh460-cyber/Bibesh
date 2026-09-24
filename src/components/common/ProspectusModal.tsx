import React from 'react';
import {
  Award,
  BookOpen,
  CheckCircle,
  Download,
  FileText,
  Printer,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FEE_STRUCTURE, INSTITUTION_STATS } from '../../data/mockData';

export const ProspectusModal: React.FC = () => {
  const { isProspectusModalOpen, closeProspectusModal, showToast } = useApp();

  if (!isProspectusModalOpen) return null;

  const handleDownload = () => {
    showToast('Admission Prospectus (PDF) downloaded successfully!');
    // Also trigger browser print as PDF generator
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Admission Prospectus 2026-2027"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={closeProspectusModal}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-blue-950 text-white p-6 border-b border-blue-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-medium tracking-widest text-amber-400">
                Official Document · 2026-2027
              </span>
              <h2 className="font-serif-brand text-2xl font-bold tracking-tight">
                ABC School & College Information Prospectus
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
              title="Download & Print Prospectus"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={closeProspectusModal}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Body Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8 text-slate-700 dark:text-slate-300 text-sm">
          
          {/* Institutional Overview */}
          <div className="space-y-3">
            <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
              01. Institutional Vision & Pedagogical Model
            </h3>
            <p className="leading-relaxed">
              Established in 1988, ABC School and College is a premiere autonomous educational sanctuary committed to holistic student enrichment. Combining the rigors of national curriculum standards with contemporary laboratory exploration, leadership mentorship, and global digital competencies, we foster scholars who lead with intellect and compassion.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {INSTITUTION_STATS.slice(0, 4).map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center"
                >
                  <div className="text-xl font-bold text-blue-900 dark:text-amber-400 font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Wings */}
          <div className="space-y-3">
            <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
              02. Academic Wings & Grade Structures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                <h4 className="font-semibold text-blue-950 dark:text-slate-100">Primary & Middle School</h4>
                <p className="text-xs text-slate-500 mt-1">Nursery to Grade 8</p>
                <p className="text-xs mt-2 leading-relaxed">
                  Focus on experiential problem solving, bilingual literacy, foundational mathematics, and social-emotional growth.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                <h4 className="font-semibold text-blue-950 dark:text-slate-100">Secondary High School</h4>
                <p className="text-xs text-slate-500 mt-1">Grade 9 & Grade 10</p>
                <p className="text-xs mt-2 leading-relaxed">
                  Intensive National Board exam preparation with integrated STEM laboratories, debate council, and career guidance.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                <h4 className="font-semibold text-blue-950 dark:text-slate-100">Higher Secondary College (+2)</h4>
                <p className="text-xs text-slate-500 mt-1">Grade 11 & Grade 12</p>
                <p className="text-xs mt-2 leading-relaxed">
                  Specialized Science (Pre-Med/Pre-Engg), Commerce & Management, and Humanities streams with competitive entrance coaching.
                </p>
              </div>
            </div>
          </div>

          {/* Fee Schedule Summary */}
          <div className="space-y-3">
            <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
              03. Fee Schedule Overview (Annual)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold uppercase">
                    <th className="py-2">Class / Stream</th>
                    <th className="py-2">Tuition</th>
                    <th className="py-2">Labs & Tech</th>
                    <th className="py-2">Total / Year</th>
                    <th className="py-2">Installment Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {FEE_STRUCTURE.map((f) => (
                    <tr key={f.gradeRange}>
                      <td className="py-2.5 font-medium text-slate-900 dark:text-slate-100">{f.gradeRange}</td>
                      <td className="py-2.5 font-mono tabular-nums">₹{f.annualTuition.toLocaleString()}</td>
                      <td className="py-2.5 font-mono tabular-nums">₹{f.labAndTechFee.toLocaleString()}</td>
                      <td className="py-2.5 font-semibold font-mono tabular-nums text-blue-950 dark:text-amber-400">₹{f.totalPerAnnum.toLocaleString()}</td>
                      <td className="py-2.5 text-slate-500">{f.installments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admission Checklist */}
          <div className="space-y-3">
            <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
              04. Mandatory Documents Required
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Original Birth Certificate (for Nursery to Grade 1)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Transfer Certificate (TC) counter-signed by board</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Mark sheets of past 2 consecutive academic years</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>6 Passport-size photographs of candidate & guardians</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Government issued Photo Identity & Address Proof</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Medical fitness certificate & immunization record</span>
              </li>
            </ul>
          </div>

          {/* Signature and Seal note */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">Office of Registrar & Admissions</p>
              <p>ABC School and College, Institutional Sector 14, New Delhi</p>
            </div>
            <div className="text-right">
              <ShieldCheck className="w-8 h-8 text-amber-500 ml-auto" />
              <span className="text-[10px] text-slate-400">Authenticated Document</span>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="bg-slate-100 dark:bg-slate-800 px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3">
          <button
            onClick={closeProspectusModal}
            className="px-4 py-2 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
};
