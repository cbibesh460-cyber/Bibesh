import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  FileCheck,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ACADEMIC_PROGRAMS } from '../../data/mockData';

export const AcademicsPage: React.FC = () => {
  const { setCurrentPage, openProspectusModal } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const levels = ['All', 'Primary', 'Middle', 'High School', 'Higher Secondary (+2)'];

  const filteredPrograms =
    selectedLevel === 'All'
      ? ACADEMIC_PROGRAMS
      : ACADEMIC_PROGRAMS.filter((p) => p.level === selectedLevel);

  const academicTerms = [
    {
      term: 'Term 1: Monsoon & Foundation',
      dates: 'July 1, 2026 — October 10, 2026',
      events: ['Orientation & Diagnostics', 'Mid-Term Examinations', 'Inter-House Debates & Science Fair'],
    },
    {
      term: 'Term 2: Autumn & Exploration',
      dates: 'October 25, 2026 — December 22, 2026',
      events: ['Founders Day Convocation', 'Annual Sports Meet', 'Term 2 Cumulative Assessments'],
    },
    {
      term: 'Term 3: Winter & Board Readiness',
      dates: 'January 4, 2027 — March 28, 2027',
      events: ['Pre-Board Examinations', 'Final Board Exams (10 & 12)', 'Graduation & Annual Exhibitions'],
    },
  ];

  const gradingSystem = [
    { grade: 'A1', marksRange: '91% – 100%', gradePoint: '10.0', remark: 'Outstanding Mastery' },
    { grade: 'A2', marksRange: '81% – 90%', gradePoint: '9.0', remark: 'Excellent Performance' },
    { grade: 'B1', marksRange: '71% – 80%', gradePoint: '8.0', remark: 'Very Good Comprehension' },
    { grade: 'B2', marksRange: '61% – 70%', gradePoint: '7.0', remark: 'Good Competency' },
    { grade: 'C1', marksRange: '51% – 60%', gradePoint: '6.0', remark: 'Satisfactory Progress' },
    { grade: 'C2', marksRange: '41% – 50%', gradePoint: '5.0', remark: 'Developing Foundation' },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Curriculum & Pedagogy
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Academic Excellence: Nursery to Higher Secondary
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Our academic structure seamlessly links early childhood experiential inquiry with rigorous board examinations and specialized pre-university college streams.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setCurrentPage('admissions')}
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
            >
              Apply for 2026-27
            </button>
            <button
              onClick={openProspectusModal}
              className="px-5 py-2.5 rounded-lg border border-slate-400 text-slate-200 hover:bg-white/10 font-medium text-xs transition-colors cursor-pointer"
            >
              Academic Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Program Levels Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
              Explore Academic Programs
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select a stage to view course details, eligibility, and curriculum highlights
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto max-w-full">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-400/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    {prog.level}
                  </span>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">
                    {prog.duration}
                  </span>
                </div>

                <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100">
                  {prog.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {prog.grades}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {prog.description}
                </p>

                {/* Key Subjects */}
                <div>
                  <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Core Disciplines:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {prog.keySubjects.map((subj) => (
                      <li key={subj} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{subj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs">
                  <span className="font-semibold text-blue-900 dark:text-amber-400">Eligibility: </span>
                  <span className="text-slate-600 dark:text-slate-300">{prog.eligibility}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setCurrentPage('admissions')}
                  className="w-full py-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-900 dark:text-amber-400 font-semibold text-xs hover:bg-amber-400 hover:text-slate-950 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Apply for this Program</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Institutional Milestones
              </span>
              <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-blue-950 dark:text-slate-100 mt-0.5">
                Academic Year Calendar 2026-2027
              </h2>
            </div>
            <button
              onClick={openProspectusModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-amber-50 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Printable Calendar</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicTerms.map((t) => (
              <div
                key={t.term}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-semibold font-mono tabular-nums">{t.dates}</span>
                </div>
                <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100">
                  {t.term}
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  {t.events.map((ev) => (
                    <li key={ev} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Information & Evaluation Guidelines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Evaluation Standards
            </span>
            <h2 className="font-serif-brand text-3xl font-bold text-blue-950 dark:text-slate-100">
              Examination Structure & Grading Protocol
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Assessment at ABC School and College is continuous, comprehensive, and criterion-referenced. We evaluate both formative mastery through practical lab portfolios and summative competence via standardized term assessments.
            </p>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-500" />
                <span>Mid-Term & Final Examination Admit Cards released 14 days prior on Portal.</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-500" />
                <span>Minimum 75% verified classroom attendance mandatory to sit for board finals.</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-500" />
                <span>Re-evaluation and answer script verification window open for 10 days post-results.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-4 bg-blue-950 text-white font-serif-brand font-semibold text-sm">
                Official National Curriculum Grading Matrix
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase bg-slate-50 dark:bg-slate-800/50">
                      <th className="py-3 px-4">Grade</th>
                      <th className="py-3 px-4">Marks Range</th>
                      <th className="py-3 px-4">Grade Point</th>
                      <th className="py-3 px-4">Qualitative Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    {gradingSystem.map((g) => (
                      <tr key={g.grade} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                        <td className="py-3 px-4 font-bold text-blue-900 dark:text-amber-400">{g.grade}</td>
                        <td className="py-3 px-4 font-mono tabular-nums">{g.marksRange}</td>
                        <td className="py-3 px-4 font-mono tabular-nums">{g.gradePoint}</td>
                        <td className="py-3 px-4 font-medium">{g.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
