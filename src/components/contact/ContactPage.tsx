import React, { useState } from 'react';
import {
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Send,
  Shield,
  Youtube,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Admission & Prospectus',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      showToast('Please fill out all required fields');
      return;
    }
    setSubmitted(true);
    showToast('Your inquiry has been received. Our administrative desk will reach out within 24 business hours.');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Get in Touch
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Contact ABC School & College
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Our admissions counselors, academic advisors, and administrative team are eager to assist with inquiries, campus visits, or student records.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info & Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Institutional Contact Details & Hotlines */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                Institutional Directory
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Campus Address:</strong>
                    <span>Knowledge Enclave, Sector 14, Institutional Area, New Delhi - 110001, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Central Telephone:</strong>
                    <span className="tabular-nums">+91 11 4567 8900 / 01 / 02</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Admissions Email:</strong>
                    <span>admissions@abcschool.edu</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Office & Visiting Hours:</strong>
                    <span>Monday to Saturday: 8:00 AM – 4:30 PM (Sundays Closed)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs uppercase font-semibold text-slate-400 block mb-2">
                  Official Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 hover:bg-red-50 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Department Hotlines */}
            <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-slate-900 border border-amber-200 dark:border-slate-800 text-xs space-y-2.5">
              <h3 className="font-serif-brand font-bold text-sm text-blue-950 dark:text-slate-100">
                Direct Emergency & Operational Extensions:
              </h3>
              <div className="flex justify-between py-1 border-b border-amber-200/50 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Campus Health Clinic & Nurse:</span>
                <span className="font-mono font-bold tabular-nums text-blue-950 dark:text-amber-400">+91 11 4567 8991</span>
              </div>
              <div className="flex justify-between py-1 border-b border-amber-200/50 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">School Bus Transport Controller:</span>
                <span className="font-mono font-bold tabular-nums text-blue-950 dark:text-amber-400">+91 98711 00223</span>
              </div>
              <div className="flex justify-between py-1 border-b border-amber-200/50 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Residential Hostel Warden:</span>
                <span className="font-mono font-bold tabular-nums text-blue-950 dark:text-amber-400">+91 98450 44556</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-600 dark:text-slate-400">Examination Secretariat:</span>
                <span className="font-mono font-bold tabular-nums text-blue-950 dark:text-amber-400">+91 11 4567 8940</span>
              </div>
            </div>

          </div>

          {/* Col 2: Online Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
                  Direct Inquiries
                </span>
                <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-blue-950 dark:text-slate-100 mt-1">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the form below and an institutional officer will reply promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-800 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <Send className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-brand font-bold text-xl text-blue-950 dark:text-slate-100">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you, {contactForm.name}. A reference ticket has been logged into the inquiry system. We will contact you at {contactForm.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setContactForm({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Admission & Prospectus',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-blue-900 text-white text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Meenakshi Sharma"
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="e.g. m.sharma@example.com"
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Nature of Inquiry
                      </label>
                      <select
                        value={contactForm.inquiryType}
                        onChange={(e) => setContactForm({ ...contactForm, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                      >
                        <option>Admission & Prospectus</option>
                        <option>Fee Structure & Scholarships</option>
                        <option>Campus Visit Request</option>
                        <option>Academic Curriculum Inquiry</option>
                        <option>Hostel & Boarding Details</option>
                        <option>Alumni Affairs</option>
                        <option>General Administration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="e.g. Grade 11 Science Stream Entrance Test Query"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Please elaborate on your inquiry or specific student requirements..."
                      rows={4}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Styled Campus Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm bg-white dark:bg-slate-900">
          <div className="p-6 bg-blue-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                Geographical Location
              </span>
              <h3 className="font-serif-brand text-xl font-bold">
                Campus Location & Transit Map
              </h3>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs hover:bg-amber-300 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Visual Map Blueprint Container */}
          <div className="relative h-80 w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            {/* Road lines simulation */}
            <div className="absolute w-full h-12 bg-slate-200 dark:bg-slate-700/60 top-1/2 -translate-y-1/2 -rotate-3" />
            <div className="absolute h-full w-12 bg-slate-200 dark:bg-slate-700/60 left-1/3 -translate-x-1/2 rotate-12" />

            {/* Campus Polygon Area */}
            <div className="relative z-10 p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 border-2 border-amber-500 shadow-2xl max-w-md text-center backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto mb-2 shadow">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif-brand font-bold text-base text-blue-950 dark:text-slate-100">
                ABC School & College Central Campus
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Gate 1: Admissions & Visitors · Gate 2: Student Bus Depot & Sports Complex
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-mono text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-slate-800 px-2.5 py-1 rounded">
                <span>GPS Coordinates: 28.6139° N, 77.2090° E</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
