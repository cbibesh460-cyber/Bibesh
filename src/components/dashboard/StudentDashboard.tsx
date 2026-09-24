import React from 'react';
import {
  AlertCircle,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileCheck,
  FileText,
  GraduationCap,
  LogOut,
  Printer,
  ShieldCheck,
  User,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const StudentDashboard: React.FC = () => {
  const { currentUser, logout, showToast } = useApp();

  const handleDownloadReport = () => {
    showToast('Cumulative Grade Report Card (PDF) downloaded successfully');
    window.print();
  };

  const handleDownloadAdmitCard = () => {
    showToast('Board Examination Admit Card generated and saved');
  };

  const timetableToday = [
    { period: 'Period 1 (08:30 - 09:20)', subject: 'Advanced Physics (Mechanics)', room: 'Physics Lab 2', instructor: 'Prof. Margaret Vance' },
    { period: 'Period 2 (09:25 - 10:15)', subject: 'Pure & Applied Mathematics', room: 'Hall 302', instructor: 'Dr. Anand Raman' },
    { period: 'Period 3 (10:30 - 11:20)', subject: 'Computer Science (Data Structures)', room: 'Computing Center 1', instructor: 'Prof. Evelyn Reed' },
    { period: 'Period 4 (11:25 - 12:15)', subject: 'Inorganic Chemistry', room: 'Chemistry Lab', instructor: 'Dr. Sarah Lin' },
    { period: 'Period 5 (01:00 - 02:00)', subject: 'English Core (Literature Review)', room: 'Room 204', instructor: 'Mrs. Rebecca Thorne' },
  ];

  const subjectsPerformance = [
    { code: 'PHY-1201', subject: 'Advanced Physics', theory: 68, practical: 28, total: 96, max: 100, grade: 'A1', remarks: 'Outstanding' },
    { code: 'CHM-1202', subject: 'Physical & Inorganic Chemistry', theory: 66, practical: 28, total: 94, max: 100, grade: 'A1', remarks: 'Excellent' },
    { code: 'MTH-1203', subject: 'Pure & Applied Mathematics', theory: 78, practical: 20, total: 98, max: 100, grade: 'A1', remarks: 'Top Percentile' },
    { code: 'CSC-1204', subject: 'Computer Science & AI Lab', theory: 69, practical: 28, total: 97, max: 100, grade: 'A1', remarks: 'Outstanding' },
    { code: 'ENG-1205', subject: 'English Core & Communication', theory: 74, practical: 18, total: 92, max: 100, grade: 'A1', remarks: 'Very Good' },
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Student Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                  Unified Student Portal
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-800">
                  Enrolled & Active
                </span>
              </div>
              <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white">
                Welcome, {currentUser?.name || 'Aarav Singhania'}
              </h1>
              <p className="text-xs text-slate-400">
                Grade 12 — Senior Secondary Science Stream · Roll # 2026-SCI-042
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadReport}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Report Card</span>
            </button>
            <button
              onClick={() => logout()}
              className="px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Cumulative Aggregate</span>
            <div className="font-mono text-3xl font-bold text-blue-950 dark:text-amber-400 mt-2">
              95.4%
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              Rank: 3rd in Section 12-A
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Verified Attendance</span>
            <div className="font-mono text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">
              94.8%
            </div>
            <p className="text-xs text-slate-500 mt-1">
              182 days present / 192 total academic days
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Tuition & Exam Dues</span>
            <div className="font-mono text-3xl font-bold text-blue-950 dark:text-slate-100 mt-2">
              Cleared
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Next cycle: Installment 4 due Dec 2026
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Library Books Issued</span>
            <div className="font-mono text-3xl font-bold text-blue-950 dark:text-slate-100 mt-2">
              2 Active
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Halliday & Resnick (Due in 6 days)
            </p>
          </div>
        </div>

        {/* Academic Marks & Performance Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase font-semibold text-amber-600 dark:text-amber-400">
                Examination Record
              </span>
              <h2 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100">
                Term 1 Cumulative Examination Statement
              </h2>
            </div>
            <button
              onClick={handleDownloadAdmitCard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Board Admit Card</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase font-semibold">
                  <th className="py-3 px-4">Subject Code</th>
                  <th className="py-3 px-4">Course Name</th>
                  <th className="py-3 px-4">Theory (80)</th>
                  <th className="py-3 px-4">Practical (20)</th>
                  <th className="py-3 px-4">Total (100)</th>
                  <th className="py-3 px-4">Grade</th>
                  <th className="py-3 px-4">Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {subjectsPerformance.map((item) => (
                  <tr key={item.code} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="py-3 px-4 font-mono text-slate-400">{item.code}</td>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">{item.subject}</td>
                    <td className="py-3 px-4 font-mono tabular-nums">{item.theory}</td>
                    <td className="py-3 px-4 font-mono tabular-nums">{item.practical}</td>
                    <td className="py-3 px-4 font-mono font-bold tabular-nums text-blue-900 dark:text-amber-400">{item.total}</td>
                    <td className="py-3 px-4 font-bold text-emerald-600">{item.grade}</td>
                    <td className="py-3 px-4 text-xs text-slate-500">{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timetable for Today */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>Today's Academic Timetable (Grade 12 Science)</span>
            </h3>
            <span className="text-xs text-slate-400">Class Room: Science Wing B-201</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {timetableToday.map((slot, i) => (
              <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-slate-400 shrink-0">{slot.period}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{slot.subject}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-500">
                  <span>Location: {slot.room}</span>
                  <span className="text-blue-900 dark:text-amber-400 font-medium">{slot.instructor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
