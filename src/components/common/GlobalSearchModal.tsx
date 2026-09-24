import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  MapPin,
  Search,
  Users,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ACADEMIC_PROGRAMS, FACILITIES_DATA } from '../../data/mockData';
import { PageId } from '../../types';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    closeSearchModal,
    setCurrentPage,
    notices,
    events,
    facultyList,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  // Close on Escape & support keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isSearchModalOpen) {
          closeSearchModal();
        } else {
          // Open from context if not open
        }
      }
      if (e.key === 'Escape' && isSearchModalOpen) {
        closeSearchModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen, closeSearchModal]);

  const results = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return null;

    const matchedPrograms = ACADEMIC_PROGRAMS.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.keySubjects.some((s) => s.toLowerCase().includes(query))
    ).map((p) => ({
      id: p.id,
      title: p.title,
      type: 'Academic Program',
      category: p.level,
      targetPage: 'academics' as PageId,
    }));

    const matchedNotices = notices
      .filter(
        (n) =>
          n.title.toLowerCase().includes(query) ||
          n.content.toLowerCase().includes(query)
      )
      .map((n) => ({
        id: n.id,
        title: n.title,
        type: 'Notice / Circular',
        category: n.category,
        targetPage: 'notices' as PageId,
      }));

    const matchedEvents = events
      .filter(
        (e) =>
          e.title.toLowerCase().includes(query) ||
          e.description.toLowerCase().includes(query) ||
          e.location.toLowerCase().includes(query)
      )
      .map((e) => ({
        id: e.id,
        title: e.title,
        type: 'Upcoming Event',
        category: e.category,
        targetPage: 'notices' as PageId,
      }));

    const matchedFaculty = facultyList
      .filter(
        (f) =>
          f.name.toLowerCase().includes(query) ||
          f.department.toLowerCase().includes(query) ||
          f.specialization.toLowerCase().includes(query) ||
          f.subjects.some((s) => s.toLowerCase().includes(query))
      )
      .map((f) => ({
        id: f.id,
        title: `${f.name} - ${f.designation}`,
        type: 'Faculty & Department',
        category: f.department,
        targetPage: 'faculty' as PageId,
      }));

    const matchedFacilities = FACILITIES_DATA.filter(
      (fac) =>
        fac.title.toLowerCase().includes(query) ||
        fac.description.toLowerCase().includes(query)
    ).map((fac) => ({
      id: fac.id,
      title: fac.title,
      type: 'Campus Facility',
      category: fac.category,
      targetPage: 'facilities' as PageId,
    }));

    return [
      ...matchedPrograms,
      ...matchedNotices,
      ...matchedEvents,
      ...matchedFaculty,
      ...matchedFacilities,
    ];
  }, [searchQuery, notices, events, facultyList]);

  if (!isSearchModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search site directory"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={closeSearchModal}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-amber-500 shrink-0 mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs, notices, faculty, courses, facilities..."
            className="w-full bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearchModal}
            className="px-2 py-1 text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4">
          {!searchQuery ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              <p>Type to search admissions, academic streams, exams, or staff...</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                {['Science Stream', 'Grade 11 Admission', 'Robotics Lab', 'Fee Structure', 'Exam Schedule'].map((hint) => (
                  <button
                    key={hint}
                    onClick={() => setSearchQuery(hint)}
                    className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            </div>
          ) : results && results.length === 0 ? (
            <div className="text-center py-10 text-slate-500 dark:text-slate-400 text-sm">
              No results found for &ldquo;{searchQuery}&rdquo;. Try another keyword.
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
                Found {results?.length} Results
              </div>
              {results?.map((item) => (
                <button
                  key={`${item.type}-${item.id}`}
                  onClick={() => {
                    setCurrentPage(item.targetPage);
                    closeSearchModal();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800/80 text-left transition-colors group cursor-pointer border border-transparent hover:border-blue-100 dark:hover:border-slate-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-blue-900 dark:text-amber-400 group-hover:bg-amber-100 dark:group-hover:bg-slate-700 transition-colors">
                      {item.type === 'Academic Program' && <GraduationCap className="w-4 h-4" />}
                      {item.type === 'Notice / Circular' && <FileText className="w-4 h-4" />}
                      {item.type === 'Upcoming Event' && <Calendar className="w-4 h-4" />}
                      {item.type === 'Faculty & Department' && <Users className="w-4 h-4" />}
                      {item.type === 'Campus Facility' && <MapPin className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-amber-400">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.type} · {item.category}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
