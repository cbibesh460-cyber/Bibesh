import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  FileCheck,
  FilePlus,
  GraduationCap,
  LogOut,
  Save,
  Upload,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TeacherDashboard: React.FC = () => {
  const { currentUser, logout, showToast } = useApp();

  // Student mark entry simulator state
  const [students, setStudents] = useState([
    { roll: '12-01', name: 'Aarav Singhania', physicsTheory: 68, practical: 28, status: 'Graded' },
    { roll: '12-02', name: 'Diya Sengupta', physicsTheory: 72, practical: 29, status: 'Graded' },
    { roll: '12-03', name: 'Rohan Mehra', physicsTheory: 64, practical: 26, status: 'Graded' },
    { roll: '12-04', name: 'Ananya Roy', physicsTheory: 76, practical: 30, status: 'Graded' },
    { roll: '12-05', name: 'Kavita Patel', physicsTheory: 70, practical: 27, status: 'Graded' },
  ]);

  // Attendance simulator state
  const [attendance, setAttendance] = useState<Record<string, boolean>>({
    '12-01': true,
    '12-02': true,
    '12-03': false,
    '12-04': true,
    '12-05': true,
  });

  const handleUpdateMarks = (roll: string, field: 'physicsTheory' | 'practical', val: number) => {
    setStudents((prev) =>
      prev.map((s) => (s.roll === roll ? { ...s, [field]: val } : s))
    );
  };

  const handleSaveMarks = () => {
    showToast('Class 12-A Physics assessment grades successfully synchronized with Central Examination Server');
  };

  const toggleAttendance = (roll: string) => {
    setAttendance((prev) => ({ ...prev, [roll]: !prev[roll] }));
  };

  const handleSaveAttendance = () => {
    showToast('Daily classroom attendance record signed and filed with Registrar');
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Teacher Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <UserCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                  Faculty & Academic Portal
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-800">
                  Staff Verified
                </span>
              </div>
              <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white">
                {currentUser?.name || 'Prof. Margaret Vance'}
              </h1>
              <p className="text-xs text-slate-400">
                Vice Principal & Head of Sciences · Department of Physics · Room 104
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => logout()}
              className="px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Assigned Sections</span>
            <div className="font-mono text-3xl font-bold text-blue-950 dark:text-amber-400 mt-2">
              4 Classes
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Gr. 11 Science (A & B), Gr. 12 Science (A & C)
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Today's Lectures</span>
            <div className="font-mono text-3xl font-bold text-blue-950 dark:text-slate-100 mt-2">
              3 Lectures
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              Next: 11:25 AM at Physics Lab 2
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Pending Grade Entries</span>
            <div className="font-mono text-3xl font-bold text-amber-600 dark:text-amber-400 mt-2">
              Grade 12-A
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Practical viva scores ready for submission
            </p>
          </div>
        </div>

        {/* Grade Entry Simulator */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase font-semibold text-amber-600 dark:text-amber-400">
                Grade Book Management
              </span>
              <h2 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100">
                Class 12-A: Physics Term Evaluation
              </h2>
            </div>
            <button
              onClick={handleSaveMarks}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold cursor-pointer shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Publish Grades</span>
            </button>
          </div>

          <div className="overflow-x-auto p-4">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase font-semibold">
                  <th className="py-2.5 px-3">Roll</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">Theory (Max 80)</th>
                  <th className="py-2.5 px-3">Practical / Lab (Max 20)</th>
                  <th className="py-2.5 px-3">Total (100)</th>
                  <th className="py-2.5 px-3">Calculated Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {students.map((s) => {
                  const total = s.physicsTheory + s.practical;
                  const grade = total >= 90 ? 'A1' : total >= 80 ? 'A2' : 'B1';
                  return (
                    <tr key={s.roll} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono text-slate-400">{s.roll}</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">{s.name}</td>
                      <td className="py-2.5 px-3">
                        <input
                          type="number"
                          max={80}
                          min={0}
                          value={s.physicsTheory}
                          onChange={(e) => handleUpdateMarks(s.roll, 'physicsTheory', Number(e.target.value))}
                          className="w-20 px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-center font-mono font-bold"
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="number"
                          max={20}
                          min={0}
                          value={s.practical}
                          onChange={(e) => handleUpdateMarks(s.roll, 'practical', Number(e.target.value))}
                          className="w-20 px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-center font-mono font-bold"
                        />
                      </td>
                      <td className="py-2.5 px-3 font-mono font-bold text-blue-900 dark:text-amber-400">
                        {total}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600">
                        {grade}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Daily Attendance Marker */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100">
                Daily Roll Call Attendance (Class 12-A)
              </h3>
              <p className="text-xs text-slate-400">Click toggle button to mark Present / Absent for today</p>
            </div>
            <button
              onClick={handleSaveAttendance}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold cursor-pointer shadow-sm"
            >
              Submit Attendance to Registry
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {students.map((s) => {
              const isPresent = attendance[s.roll] ?? true;
              return (
                <button
                  key={s.roll}
                  type="button"
                  onClick={() => toggleAttendance(s.roll)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isPresent
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                      : 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-400">{s.roll}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isPresent ? 'bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' : 'bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200'
                      }`}
                    >
                      {isPresent ? 'PRESENT' : 'ABSENT'}
                    </span>
                  </div>
                  <h4 className="font-semibold text-xs text-slate-900 dark:text-slate-100 mt-2 truncate">
                    {s.name}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
