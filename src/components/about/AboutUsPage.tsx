import React from 'react';
import {
  Award,
  BookOpen,
  CheckCircle,
  Compass,
  GraduationCap,
  Heart,
  History,
  Lightbulb,
  Quote,
  Shield,
  Target,
  Users,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { INSTITUTION_STATS, PRINCIPAL_IMAGE } from '../../data/mockData';

export const AboutUsPage: React.FC = () => {
  const { setCurrentPage, openProspectusModal } = useApp();

  const coreValues = [
    {
      title: 'Academic Excellence',
      desc: 'Pursuing the highest benchmarks in scholarship, conceptual clarity, and critical reasoning across every discipline.',
      icon: <Award className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Moral Integrity',
      desc: 'Cultivating honesty, ethical accountability, and personal responsibility in personal character and community leadership.',
      icon: <Shield className="w-5 h-5 text-blue-600 dark:text-amber-400" />,
    },
    {
      title: 'Innovative Inquiry',
      desc: 'Encouraging students to question deeply, experiment courageously in laboratories, and embrace novel solutions.',
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Inclusive Compassion',
      desc: 'Fostering an empathetic, multicultural environment that honors diverse perspectives and champions mutual respect.',
      icon: <Heart className="w-5 h-5 text-blue-600 dark:text-amber-400" />,
    },
  ];

  const milestones = [
    { year: '1988', title: 'Founding of ABC School', desc: 'Inaugurated with 120 students and 8 visionary teachers in Delhi Institutional Area.' },
    { year: '1996', title: 'Senior Secondary Affiliation', desc: 'Accredited for Grade 10 and 12 Board examinations with dedicated Physics and Chemistry wings.' },
    { year: '2005', title: 'College & Higher Secondary Wing', desc: 'Expanded into specialized pre-university streams in Science, Commerce, and Humanities.' },
    { year: '2016', title: 'Innovation Labs & Sports Complex', desc: 'Constructed the synthetic 400m track and state-of-the-art Robotics and Makerspace facility.' },
    { year: '2024', title: 'Autonomous Grade A++ Status', desc: 'Recognized among the top 10 institutions nationally for pedagogical innovation and board results.' },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            About Our Institution
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            A Legacy of Intellectual Distinction & Character
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            For nearly four decades, ABC School and College has served as a benchmark for educational quality, shaping over 25,000 alumni who lead with purpose around the globe.
          </p>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTITUTION_STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-center"
            >
              <div className="font-mono text-2xl sm:text-3xl font-bold text-blue-950 dark:text-amber-400 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be an internationally recognized academic sanctuary that inspires scholars to reach their highest potential, cultivate lifelong intellectual curiosity, and contribute ethically to an interconnected global society.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 flex items-center justify-center text-blue-900 dark:text-amber-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To deliver an uncompromising standard of holistic education combining analytical rigor, experiential scientific laboratories, artistic exploration, and athletic prowess within a secure, values-based culture.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Letter in Depth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xl">
                <img
                  src={PRINCIPAL_IMAGE}
                  alt="Principal Dr. Arthur Sterling"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100 mt-3">
                Dr. Arthur Sterling
              </h4>
              <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                Principal & Head of Institution
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ph.D. Education Policy (Oxford)
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Quote className="w-4 h-4 rotate-180" />
                <span>Message from the Principal's Desk</span>
              </div>
              <h3 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                Guiding Every Scholar to Their Unique Zenith
              </h3>
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Dear Parents, Students, and Well-Wishers,
                </p>
                <p>
                  Education is the single greatest equalizer and transformer in human civilization. When a student enters ABC School and College, they join an intellectual fraternity committed to both rigorous academic mastery and unwavering ethical responsibility.
                </p>
                <p>
                  Our curriculum does not teach students what to think; it equips them with the analytical faculties, technological fluency, and moral compass to evaluate complex real-world dilemmas independently. We look forward to partnering with each family in this extraordinary journey of discovery.
                </p>
              </div>
              <div className="pt-2">
                <span className="font-serif-brand italic font-semibold text-blue-950 dark:text-amber-400">
                  — Dr. Arthur Sterling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
            Guiding Principles
          </span>
          <h2 className="font-serif-brand text-3xl font-bold text-blue-950 dark:text-slate-100 mt-1">
            Our Core Institutional Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                {v.icon}
              </div>
              <h3 className="font-serif-brand text-base font-bold text-blue-950 dark:text-slate-100">
                {v.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
            Our Heritage
          </span>
          <h2 className="font-serif-brand text-3xl font-bold text-blue-950 dark:text-slate-100 mt-1">
            38 Years of Continuous Innovation
          </h2>
        </div>

        <div className="relative border-l-2 border-amber-400/60 ml-4 md:ml-32 space-y-8 pl-6">
          {milestones.map((m) => (
            <div key={m.year} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-400 border-4 border-white dark:border-slate-900 shadow" />
              
              <div className="space-y-1">
                <span className="font-mono text-sm font-bold text-amber-700 dark:text-amber-400">
                  {m.year}
                </span>
                <h4 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
