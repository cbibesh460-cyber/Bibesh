import React, { useState } from 'react';
import {
  Award,
  Bus,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  GraduationCap,
  LogOut,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
  Users,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ParentDashboard: React.FC = () => {
  const { currentUser, logout, showToast } = useApp();
  const [ptmBooked, setPtmBooked] = useState(false);

  const handleBookPtm = () => {
    setPtmBooked(true);
    showToast('PTM slot confirmed with Class Mentor Dr. Arthur Sterling & Prof. Vance');
  };

  const handlePayFee = () => {
    showToast('Redirecting to Secure Institutional Payment Gateway... (Simulation)');
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Parent Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                  Parent Guardian Portal
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-800">
                  Verified Guardian
                </span>
              </div>
              <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white">
                Guardian: {currentUser?.name || 'Mr. Sunil Varma'}
              </h1>
              <p className="text-xs text-slate-400">
                Ward: <strong>Aarav Singhania</strong> (Grade 12 Science — Section A) · Student ID: 2026-SCI-042
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
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
        
        {/* Ward Academic Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Ward Attendance</span>
            <div className="font-mono text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">
              94.8%
            </div>
            <p className="text-xs text-slate-500 mt-1">Status: Regular & Satisfactory</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Term 1 Performance</span>
            <div className="font-mono text-3xl font-bold text-blue-950 dark:text-amber-400 mt-2">
              95.4%
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">Grade: A1 with Distinction</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">School Bus Route 14</span>
            <div className="font-mono text-xl font-bold text-blue-950 dark:text-slate-100 mt-2 flex items-center gap-1.5">
              <Bus className="w-5 h-5 text-amber-500" />
              <span>On Route</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Expected drop-off: 03:45 PM</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs text-slate-500 uppercase font-semibold">Fee Account</span>
            <div className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1.5">
              <CheckCircle className="w-5 h-5" />
              <span>Up to Date</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Installment 3 paid on Oct 1</p>
          </div>
        </div>

        {/* Bus Transportation & PTM Scheduler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Live School Transport Tracker */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-brand font-bold text-lg text-blue-950 dark:text-slate-100 flex items-center gap-2">
                <Bus className="w-5 h-5 text-amber-500" />
                <span>GPS Bus Transportation Status</span>
              </h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                Live GPS Active
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Assigned Bus:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100">DL-1P-4082 (Bus #14)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Verified Driver:</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">Ram Singh (+91 98112 33445)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Conductor:</span>
                <span className="text-slate-900 dark:text-slate-100">S. Kumar (First-Aid Certified)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Current GPS Fix:</span>
                <span className="text-blue-900 dark:text-amber-400 font-medium">Crossing Ring Road Flyover (2.1 km away)</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>CCTV & automated RFID student boarding badge tracking enabled on this bus.</span>
            </div>
          </div>

          {/* Parent-Teacher Meeting Scheduler */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-serif-brand font-bold text-lg text-blue-950 dark:text-slate-100 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>Parent-Teacher Meeting (PTM) Appointment</span>
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300">
              Next scheduled Term 1 PTM: <strong>Saturday, 24th October 2026</strong>. Reserve your 15-minute dedicated slot with Aarav's class mentor and subject teachers.
            </p>

            {ptmBooked ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-300 text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Your consultation appointment is booked for <strong>10:30 AM — Room 104</strong>. An SMS reminder has been sent.</span>
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs">
                  <select className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs">
                    <option>Slot: 10:00 AM – 10:15 AM</option>
                    <option>Slot: 10:30 AM – 10:45 AM</option>
                    <option>Slot: 11:00 AM – 11:15 AM</option>
                    <option>Slot: 11:30 AM – 11:45 AM</option>
                  </select>
                  <button
                    onClick={handleBookPtm}
                    className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs cursor-pointer shadow-sm"
                  >
                    Confirm PTM Slot
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
