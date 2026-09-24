import React, { useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Search,
  Users,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FacultyPage: React.FC = () => {
  const { facultyList } = useApp();
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = [
    'All',
    'Administration & Educational Leadership',
    'Department of Sciences',
    'Department of Mathematics',
    'Department of Computer Science',
    'Department of Humanities & Languages',
    'Department of Commerce & Management',
    'Department of Physical Education',
    'Elementary Education Wing',
  ];

  const filteredFaculty = useMemo(() => {
    return facultyList.filter((f) => {
      const matchDept = selectedDept === 'All' || f.department === selectedDept;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.department.toLowerCase().includes(q) ||
        f.specialization.toLowerCase().includes(q) ||
        f.subjects.some((s) => s.toLowerCase().includes(q));
      return matchDept && matchQuery;
    });
  }, [facultyList, selectedDept, searchQuery]);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Academic Mentors & Scholars
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Distinguished Faculty & Academic Departments
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Our 185+ certified educators, doctoral scholars, and pedagogical innovators inspire scholarly excellence, independent research, and character formation.
          </p>
        </div>
      </section>

      {/* Department Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          
          {/* Department dropdown */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap hidden sm:inline">
              Department:
            </span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full md:w-72 px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
            >
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Search input */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty name, subject, skill..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
            />
          </div>

        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Showing {filteredFaculty.length} Faculty Members
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((fac) => (
            <div
              key={fac.id}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between hover:border-amber-400/60 transition-all group"
            >
              <div>
                {/* Photo container with fallback */}
                <div className="h-56 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                  <img
                    src={fac.photoUrl}
                    alt={fac.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                      {fac.experience} Experience
                    </span>
                    <h3 className="font-serif-brand font-bold text-base leading-snug">
                      {fac.name}
                    </h3>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 space-y-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-blue-900 dark:text-amber-400 block">
                      {fac.designation}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                      {fac.department}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-1">
                    <div className="flex items-start gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{fac.qualification}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{fac.specialization}</span>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 mb-1">
                      Teaches:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {fac.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2">
                <a
                  href={`mailto:${fac.email}`}
                  className="w-full py-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-900 dark:text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Mentor</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
