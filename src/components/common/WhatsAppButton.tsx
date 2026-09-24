import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Admission 2026-27 Inquiry');
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = () => {
    const phoneNumber = '911145678900';
    const text = `Hello ABC School & College Admissions Desk! I have an inquiry regarding: ${selectedTopic}. Details: ${customMsg || 'Please provide information on eligibility, fees, and next steps.'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-emerald-600 dark:bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-semibold">ABC Help Desk</h4>
                <p className="text-[11px] text-emerald-100">Typically replies within 15 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 text-xs">
            <p className="text-slate-600 dark:text-slate-300">
              Welcome to ABC School and College Official Helpline. How can our admissions counselors assist you?
            </p>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Select inquiry topic:
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2 text-slate-800 dark:text-slate-200"
              >
                <option>Admission 2026-27 Inquiry</option>
                <option>Fee Structure & Scholarships</option>
                <option>Schedule a Campus Visit</option>
                <option>Hostel & Transport Facility</option>
                <option>Academic Board Examination Info</option>
              </select>
            </div>

            <div>
              <textarea
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your question or student grade..."
                rows={2}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2 text-slate-800 dark:text-slate-200 resize-none"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Circle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-xl flex items-center justify-center transition-all cursor-pointer group focus-visible:outline-2 focus-visible:outline-emerald-500"
        aria-label="Open WhatsApp Admission Support"
        title="Chat with Admissions Support on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
