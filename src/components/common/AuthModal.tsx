import React, { useState } from 'react';
import {
  GraduationCap,
  KeyRound,
  Lock,
  Mail,
  Shield,
  User,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authModalRole, loginAs } = useApp();

  const [selectedRole, setSelectedRole] = useState<UserRole>(authModalRole || 'student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleQuickLogin = (role: UserRole) => {
    loginAs(role);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const namePart = email ? email.split('@')[0] : '';
    const formattedName = namePart
      ? namePart.charAt(0).toUpperCase() + namePart.slice(1)
      : undefined;
    loginAs(selectedRole, formattedName);
  };

  const roleMeta: Record<
    UserRole,
    { title: string; desc: string; demoUser: string; icon: React.ReactNode }
  > = {
    guest: {
      title: 'Public Visitor',
      desc: 'General access to admissions, news, and campus info',
      demoUser: 'Guest',
      icon: <Users className="w-5 h-5" />,
    },
    student: {
      title: 'Student Portal',
      desc: 'Check attendance, examination results, assignments & timetable',
      demoUser: 'Aarav Singhania (Gr. 12 Science)',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    teacher: {
      title: 'Faculty Portal',
      desc: 'Manage grade entries, class rosters, attendance & study materials',
      demoUser: 'Prof. Margaret Vance (Vice Principal / Science)',
      icon: <UserCheck className="w-5 h-5" />,
    },
    parent: {
      title: 'Parent Portal',
      desc: 'View ward performance, fee invoices, bus routes & PTM appointments',
      demoUser: 'Sunil Varma (Guardian)',
      icon: <Users className="w-5 h-5" />,
    },
    admin: {
      title: 'Admin Control Center',
      desc: 'Approve admissions, post official notices, schedule events & analytics',
      demoUser: 'Dr. Arthur Sterling (Principal & Head)',
      icon: <Shield className="w-5 h-5" />,
    },
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Secure Portal Authentication"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={closeAuthModal}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white p-6 relative">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                Institutional Access
              </span>
              <h3 className="font-serif-brand text-xl font-bold text-white">
                ABC Unified Portal Login
              </h3>
            </div>
          </div>
        </div>

        {/* Role Selector Tabs */}
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Select Your Portal Role
            </label>
            <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              {(['student', 'teacher', 'parent', 'admin'] as UserRole[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setSelectedRole(r)}
                  className={`py-2 text-xs font-semibold rounded-md capitalize transition-all cursor-pointer ${
                    selectedRole === r
                      ? 'bg-blue-900 dark:bg-blue-800 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Demo Access Box */}
          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-blue-950 dark:text-amber-400 flex items-center gap-1.5">
                {roleMeta[selectedRole].icon}
                <span>Instant Demo: {roleMeta[selectedRole].title}</span>
              </span>
              <span className="text-amber-700 dark:text-amber-300 font-mono text-[10px]">
                Pre-configured
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
              {roleMeta[selectedRole].desc}
            </p>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              Profile: <strong>{roleMeta[selectedRole].demoUser}</strong>
            </div>
            <button
              type="button"
              onClick={() => handleQuickLogin(selectedRole)}
              className="w-full mt-2 py-2 px-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch {selectedRole.toUpperCase()} Dashboard</span>
            </button>
          </div>

          {/* Or manual sign in form */}
          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            <span className="flex-shrink mx-3 text-xs text-slate-400 uppercase tracking-wider">
              Or Custom Credentials
            </span>
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          </div>

          <form onSubmit={handleCustomSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Institutional ID or Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={`${selectedRole}@abcschool.edu`}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
            >
              Sign In to {selectedRole.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
