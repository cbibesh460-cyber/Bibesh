import React, { useState } from 'react';
import {
  AlertCircle,
  Award,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  Download,
  FileCheck,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  HelpCircle,
  Printer,
  Send,
  ShieldCheck,
  UploadCloud,
  UserCheck,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FEE_STRUCTURE } from '../../data/mockData';

export const AdmissionsPage: React.FC = () => {
  const { submitApplication, openProspectusModal, showToast } = useApp();

  // Multi-step online admission form state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [submittedAppNo, setSubmittedAppNo] = useState<string | null>(null);

  // Form Fields
  const [formData, setFormData] = useState({
    applicantName: '',
    applyingFor: 'Grade 11 - Science (+2)',
    dob: '',
    gender: 'Female',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    previousSchool: '',
    previousScore: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const admissionSteps = [
    {
      num: '01',
      title: 'Online Application & Registration',
      desc: 'Submit student and guardian academic particulars, course choice, and upload diagnostic records online.',
    },
    {
      num: '02',
      title: 'Entrance Aptitude Evaluation',
      desc: 'Age-appropriate written assessment evaluating analytical problem solving, language literacy, and logic.',
    },
    {
      num: '03',
      title: 'Parent & Scholar Interaction',
      desc: 'An inspiring 20-minute conversation with senior faculty to understand interests, aspirations, and value alignment.',
    },
    {
      num: '04',
      title: 'Document Verification & Enrollment',
      desc: 'Submission of original transfer certificate, birth proof, medical records, and confirmation fee deposit.',
    },
  ];

  const requiredDocs = [
    'Original Birth Certificate (Municipality / Registrar authenticated)',
    'Transfer Certificate (TC) signed by previous school principal & board',
    'Official mark sheets and report cards of previous 2 academic years',
    'Recent passport-size color photographs of applicant (4 copies)',
    'Recent passport-size photographs of parents / legal guardian (2 copies each)',
    'Copy of Aadhaar Card / National Passport / Residence Address Proof',
    'Medical fitness certificate with blood group and vaccination history',
    'Category / Caste / Disability Certificate (if seeking quota or exemption)',
  ];

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.applicantName.trim()) errs.applicantName = 'Applicant full name is required';
    if (!formData.dob) errs.dob = 'Date of birth is required';
    if (!formData.previousSchool.trim()) errs.previousSchool = 'Previous institution name is required';
    if (!formData.previousScore.trim()) errs.previousScore = 'Previous score / grade is required';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.guardianName.trim()) errs.guardianName = 'Guardian name is required';
    if (!formData.guardianPhone.trim()) errs.guardianPhone = 'Contact phone number is required';
    if (!formData.guardianEmail.trim()) errs.guardianEmail = 'Valid guardian email is required';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const appNo = submitApplication(formData);
    setSubmittedAppNo(appNo);
  };

  const handleResetForm = () => {
    setSubmittedAppNo(null);
    setCurrentStep(1);
    setFormData({
      applicantName: '',
      applyingFor: 'Grade 11 - Science (+2)',
      dob: '',
      gender: 'Female',
      guardianName: '',
      guardianPhone: '',
      guardianEmail: '',
      previousSchool: '',
      previousScore: '',
      notes: '',
    });
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Admissions Office · 2026-2027
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Begin Your Scholarly Journey at ABC
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            We welcome young minds eager to learn, explore, and lead. Follow our transparent admissions roadmap and apply online in minutes.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="#application-form"
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors"
            >
              Jump to Application Form
            </a>
            <button
              onClick={openProspectusModal}
              className="px-5 py-2.5 rounded-lg border border-slate-400 text-slate-200 hover:bg-white/10 font-medium text-xs transition-colors cursor-pointer"
            >
              Download Prospectus (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Admission Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
            Admissions Roadmap
          </span>
          <h2 className="font-serif-brand text-3xl font-bold text-blue-950 dark:text-slate-100 mt-1">
            4 Simple Steps to Enrollment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((s) => (
            <div
              key={s.num}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-bold text-amber-500/80">
                  {s.num}
                </span>
                <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100 mt-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents & Eligibility Criteria */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Required Documents */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-900 dark:text-amber-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100">
                  Required Documents Checklist
                </h3>
                <p className="text-xs text-slate-500">
                  Keep digital scans ready for the online portal & originals for verification
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {requiredDocs.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Criteria */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-brand text-xl font-bold text-blue-950 dark:text-slate-100">
                  Eligibility Criteria by Grade
                </h3>
                <p className="text-xs text-slate-500">
                  Age specifications as of March 31st of the academic year
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-blue-950 dark:text-amber-400">Pre-Primary (Nursery & KG): </span>
                <span className="text-slate-600 dark:text-slate-300">Age 3+ for Nursery, 4+ for LKG, 5+ for UKG. Interactive informal play assessment.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-blue-950 dark:text-amber-400">Primary (Grades 1 to 5): </span>
                <span className="text-slate-600 dark:text-slate-300">Previous grade completion certificate. Diagnostic assessment in English & Mathematics.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-blue-950 dark:text-amber-400">Secondary (Grades 9 & 10): </span>
                <span className="text-slate-600 dark:text-slate-300">Minimum 65% aggregate in Grade 8/9 examinations. Written entrance test in Science & Math.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-blue-950 dark:text-amber-400">Higher Secondary Science (+2): </span>
                <span className="text-slate-600 dark:text-slate-300">Minimum 75% in Grade 10 Board examinations with 80%+ in Science & Mathematics, plus ABC Aptitude Test.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-blue-950 dark:text-amber-400">Commerce & Humanities (+2): </span>
                <span className="text-slate-600 dark:text-slate-300">Minimum 60% in Grade 10 Board Examinations followed by faculty counseling.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Fee Structure Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
                Transparent Tuition Policy
              </span>
              <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-blue-950 dark:text-slate-100 mt-0.5">
                Annual Fee Structure (Academic Year 2026-2027)
              </h2>
            </div>
            <button
              onClick={openProspectusModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-950 dark:text-amber-400 text-xs font-semibold hover:bg-blue-100 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Full Fee Policy PDF</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 uppercase font-semibold">
                  <th className="py-3 px-4">Class Range</th>
                  <th className="py-3 px-4">Tuition (Annual)</th>
                  <th className="py-3 px-4">Lab / Tech Fee</th>
                  <th className="py-3 px-4">Library & Sports</th>
                  <th className="py-3 px-4">Total / Year</th>
                  <th className="py-3 px-4">Payment Schedule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {FEE_STRUCTURE.map((item) => (
                  <tr key={item.gradeRange} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                      {item.gradeRange}
                    </td>
                    <td className="py-3 px-4 font-mono tabular-nums">
                      ₹{item.annualTuition.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-mono tabular-nums">
                      ₹{item.labAndTechFee.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-mono tabular-nums">
                      ₹{(item.libraryFee + item.examFee).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-bold font-mono tabular-nums text-blue-950 dark:text-amber-400">
                      ₹{item.totalPerAnnum.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400">
                      {item.installments}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-slate-800/60 border border-amber-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <p className="font-semibold text-blue-950 dark:text-amber-400">Important Fee Notes:</p>
            <p>• One-time admission registration fee of ₹15,000 applicable for new admissions only.</p>
            <p>• Optional GPS-enabled bus transportation charges vary by distance zone (₹1,800 to ₹3,200 / month).</p>
            <p>• Merit scholarships up to 100% tuition waiver awarded based on the ABC Annual Scholarship Examination.</p>
          </div>
        </div>
      </section>

      {/* Online Admission Form (Interactive Multi-Step Wizard) */}
      <section id="application-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Admissions Portal 2026-27
                </span>
                <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold tracking-tight">
                  Online Admission Application Form
                </h2>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
            </div>

            {/* Stepper tabs */}
            {!submittedAppNo && (
              <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-blue-800/60 text-xs">
                <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-amber-400 font-bold' : 'text-blue-300'}`}>
                  <span className="w-6 h-6 rounded-full bg-blue-800 border border-amber-400 flex items-center justify-center font-mono">1</span>
                  <span>Student Profile</span>
                </div>
                <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-amber-400 font-bold' : 'text-blue-300'}`}>
                  <span className="w-6 h-6 rounded-full bg-blue-800 border border-amber-400 flex items-center justify-center font-mono">2</span>
                  <span>Guardian Contact</span>
                </div>
                <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-amber-400 font-bold' : 'text-blue-300'}`}>
                  <span className="w-6 h-6 rounded-full bg-blue-800 border border-amber-400 flex items-center justify-center font-mono">3</span>
                  <span>Review & Submit</span>
                </div>
              </div>
            )}
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {submittedAppNo ? (
              /* Success State */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.guardianName}</strong>. Your admission application for <strong>{formData.applicantName}</strong> has been logged into the ABC Institutional Admissions Registry.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-xs mx-auto">
                  <span className="text-xs uppercase text-slate-500">Your Unique Tracking Ref:</span>
                  <div className="font-mono text-xl font-bold text-blue-950 dark:text-amber-400 mt-1">
                    {submittedAppNo}
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  An official confirmation acknowledgement with entrance test instructions has been dispatched to <strong>{formData.guardianEmail}</strong>.
                </p>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-5 py-2.5 rounded-lg bg-blue-900 text-white text-xs font-semibold hover:bg-blue-800 flex items-center gap-1.5 cursor-pointer shadow"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Application Slip</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Student Particulars */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                      Step 1: Student Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Applicant Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.applicantName}
                          onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                          placeholder="e.g. Kabir Varma"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
                        />
                        {formErrors.applicantName && (
                          <span className="text-xs text-red-500 mt-0.5 block">{formErrors.applicantName}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Seeking Admission To *
                        </label>
                        <select
                          value={formData.applyingFor}
                          onChange={(e) => setFormData({ ...formData, applyingFor: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        >
                          <option>Nursery / Kindergarten</option>
                          <option>Grade 1 to Grade 5 (Primary)</option>
                          <option>Grade 6 to Grade 8 (Middle)</option>
                          <option>Grade 9 (Secondary High)</option>
                          <option>Grade 10 (Secondary High)</option>
                          <option>Grade 11 - Science (+2)</option>
                          <option>Grade 11 - Commerce (+2)</option>
                          <option>Grade 11 - Humanities (+2)</option>
                          <option>Grade 12 - Science (+2 Transfer)</option>
                          <option>Grade 12 - Commerce (+2 Transfer)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        />
                        {formErrors.dob && (
                          <span className="text-xs text-red-500 mt-0.5 block">{formErrors.dob}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Gender *
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        >
                          <option>Female</option>
                          <option>Male</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Previous School Attended *
                        </label>
                        <input
                          type="text"
                          value={formData.previousSchool}
                          onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                          placeholder="e.g. St. Xavier High School"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        />
                        {formErrors.previousSchool && (
                          <span className="text-xs text-red-500 mt-0.5 block">{formErrors.previousSchool}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Previous Aggregate Score / CGPA *
                        </label>
                        <input
                          type="text"
                          value={formData.previousScore}
                          onChange={(e) => setFormData({ ...formData, previousScore: e.target.value })}
                          placeholder="e.g. 92.5% or 9.4 CGPA"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        />
                        {formErrors.previousScore && (
                          <span className="text-xs text-red-500 mt-0.5 block">{formErrors.previousScore}</span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-lg bg-blue-900 text-white hover:bg-blue-800 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <span>Continue to Step 2</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Guardian Information */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                      Step 2: Guardian & Contact Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Father / Mother / Guardian Name *
                        </label>
                        <input
                          type="text"
                          value={formData.guardianName}
                          onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                          placeholder="e.g. Sunil Varma"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        />
                        {formErrors.guardianName && (
                          <span className="text-xs text-red-500 mt-0.5 block">{formErrors.guardianName}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Primary Contact Phone *
                        </label>
                        <input
                          type="tel"
                          value={formData.guardianPhone}
                          onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                          placeholder="e.g. +91 98450 12345"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        />
                        {formErrors.guardianPhone && (
                          <span className="text-xs text-red-500 mt-0.5 block">{formErrors.guardianPhone}</span>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Official Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.guardianEmail}
                          onChange={(e) => setFormData({ ...formData, guardianEmail: e.target.value })}
                          placeholder="e.g. s.varma@gmail.com"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        />
                        {formErrors.guardianEmail && (
                          <span className="text-xs text-red-500 mt-0.5 block">{formErrors.guardianEmail}</span>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Additional Academic / Special Needs Notes (Optional)
                        </label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Mention any honors, sports achievements, or scholarship requests..."
                          rows={3}
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 resize-none"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-lg bg-blue-900 text-white hover:bg-blue-800 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <span>Continue to Step 3</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Review & Document Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                      Step 3: Verification & Submission
                    </h3>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Candidate:</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">{formData.applicantName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Applying For:</span>
                        <span className="font-semibold text-blue-900 dark:text-amber-400">{formData.applyingFor}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Date of Birth:</span>
                        <span className="font-mono tabular-nums">{formData.dob}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Previous Institution:</span>
                        <span>{formData.previousSchool} ({formData.previousScore})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Guardian:</span>
                        <span>{formData.guardianName} ({formData.guardianPhone})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Email:</span>
                        <span>{formData.guardianEmail}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-dashed border-amber-400/80 bg-amber-50/40 dark:bg-slate-800/40 text-xs space-y-2">
                      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold">
                        <UploadCloud className="w-4 h-4" />
                        <span>Digital Document Verification Undertaking</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">
                        I hereby certify that the information supplied above is true and authentic. I agree to produce original certificates during the in-person interview.
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Application Now</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
