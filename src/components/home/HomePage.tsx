import React from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  GraduationCap,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  HERO_IMAGE,
  INSTITUTION_STATS,
  PRINCIPAL_IMAGE,
  STUDENT_ACHIEVEMENTS,
  TESTIMONIALS,
} from '../../data/mockData';

export const HomePage: React.FC = () => {
  const { setCurrentPage, notices, events, openProspectusModal } = useApp();

  const highlights = [
    {
      title: 'Experienced Teachers & Mentors',
      desc: '185+ distinguished educators with an average of 14 years pedagogical expertise and national awards.',
      icon: <Users className="w-6 h-6 text-amber-500" />,
      action: 'Meet Faculty',
      page: 'faculty' as const,
    },
    {
      title: 'Modern Facilities & Smart Labs',
      desc: 'Smart 4K touch classrooms, high-tech robotics and STEM centers, Olympic athletics field, and central library.',
      icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-amber-400" />,
      action: 'Explore Campus',
      page: 'facilities' as const,
    },
    {
      title: 'Academic Excellence & Rigor',
      desc: 'Consistent 99.4% board examination pass rate with international Olympiad gold medals and Ivy League admissions.',
      icon: <Award className="w-6 h-6 text-amber-500" />,
      action: 'View Curricula',
      page: 'academics' as const,
    },
    {
      title: 'Vibrant Sports & Co-Curriculars',
      desc: '400m synthetic running track, national tournament squads, Model UN diplomacy, and cultural performing arts.',
      icon: <Trophy className="w-6 h-6 text-blue-600 dark:text-amber-400" />,
      action: 'See Life at ABC',
      page: 'gallery' as const,
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Hero Banner */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Campus Image with measured contrast scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="ABC School and College Campus Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Gradients ensuring 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-slate-950/75" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/30 to-slate-950/70" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
          <div className="max-w-3xl space-y-6">
            
            {/* Subtle Tagline / Trust marker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Inspiring Generations Since 1988 · Accredited Grade A++</span>
            </div>

            {/* Main Headline - Required exact title */}
            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Building Bright Futures Through Quality Education
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Empowering learners from Early Childhood to Higher Secondary College with world-class academics, character leadership, cutting-edge STEM discovery, and global perspectives.
            </p>

            {/* Buttons: Apply Now and Learn More */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setCurrentPage('admissions')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply Now (Session 2026-27)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage('about')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm sm:text-base text-white border border-slate-300/40 hover:bg-white/10 active:scale-[0.98] backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Quick stats pills under CTA */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-mono text-2xl font-bold text-amber-400 tabular-nums">3,850+</div>
                <div className="text-xs text-slate-300">Active Students</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-amber-400 tabular-nums">99.4%</div>
                <div className="text-xs text-slate-300">Board Pass Rate</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-amber-400 tabular-nums">38 Yrs</div>
                <div className="text-xs text-slate-300">Academic Legacy</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Institutional Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
            Pillars of Distinction
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-blue-950 dark:text-slate-100 mt-1">
            Why Families Trust ABC Institution
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            A harmonious integration of rigorous academics, character development, and holistic co-curricular life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-400/60 dark:hover:border-amber-400/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => setCurrentPage(item.page)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 dark:text-amber-400 hover:gap-2 transition-all cursor-pointer"
              >
                <span>{item.action}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Welcome Message from the Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-blue-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            
            {/* Principal Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl">
                <img
                  src={PRINCIPAL_IMAGE}
                  alt="Dr. Arthur Sterling, Principal of ABC School and College"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif-brand text-xl font-bold text-white mt-4">
                Dr. Arthur Sterling
              </h3>
              <p className="text-xs text-amber-300 font-medium">
                Principal & Head of Institution
              </p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Ph.D. Education Policy (Oxford) · 28+ Yrs Experience
              </p>
            </div>

            {/* Principal's Letter */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Quote className="w-4 h-4 rotate-180" />
                <span>Leadership Address</span>
              </div>

              <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold tracking-tight text-white">
                &ldquo;Every child carries boundless potential waiting for the right spark.&rdquo;
              </h2>

              <div className="space-y-3 text-sm text-slate-200 leading-relaxed">
                <p>
                  Welcome to ABC School and College. For over thirty-eight years, our sacred duty has been to shape not merely successful test-takers, but curious thinkers, compassionate leaders, and resilient citizens.
                </p>
                <p>
                  In our classrooms, science labs, athletic grounds, and creative studios, we foster an environment where questioning is celebrated and perseverance is rewarded. Whether preparing for secondary board examinations or pre-university college streams, our students discover both discipline and the freedom to dream boldly.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Read Full Message & Vision
                </button>
                <button
                  onClick={openProspectusModal}
                  className="px-5 py-2.5 rounded-lg border border-slate-400/40 text-slate-200 hover:bg-white/10 font-medium text-xs transition-colors cursor-pointer"
                >
                  Download Prospectus
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Latest News & Announcements + Upcoming Events (Dual Column) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Col A: Latest News & Notice Board */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Real-time Bulletin
                </span>
                <h3 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                  Latest Notices & News
                </h3>
              </div>
              <button
                onClick={() => setCurrentPage('notices')}
                className="text-xs font-semibold text-blue-900 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All Notices</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {notices.slice(0, 4).map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => setCurrentPage('notices')}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-400/70 dark:hover:border-amber-400/70 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    <span className="font-semibold text-blue-900 dark:text-amber-400">
                      {notice.category}
                    </span>
                    <span className="flex items-center gap-1 tabular-nums">
                      <Clock className="w-3 h-3" />
                      {notice.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors">
                    {notice.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                    {notice.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col B: Upcoming Events */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Campus Calendar
                </span>
                <h3 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                  Upcoming Events
                </h3>
              </div>
              <button
                onClick={() => setCurrentPage('notices')}
                className="text-xs font-semibold text-blue-900 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Full Schedule</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {events.slice(0, 3).map((evt) => (
                <div
                  key={evt.id}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 transition-all flex gap-4"
                >
                  {/* Date badge */}
                  <div className="w-14 h-16 rounded-lg bg-blue-900 text-white flex flex-col items-center justify-center shrink-0 border border-amber-500/30">
                    <span className="text-[10px] uppercase font-bold text-amber-300">
                      {new Date(evt.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="font-bold text-lg font-mono leading-none">
                      {new Date(evt.date).getDate()}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                      {evt.category}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {evt.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {evt.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {evt.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Student Achievements Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
            Excellence in Action
          </span>
          <h2 className="font-serif-brand text-3xl font-bold text-blue-950 dark:text-slate-100 mt-1">
            Student Accomplishments & Honors
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Celebrating our scholars distinguishing themselves on national and international stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>{ach.badge}</span>
                </div>
                <h3 className="font-serif-brand text-base font-bold text-blue-950 dark:text-slate-100">
                  {ach.title}
                </h3>
                <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mt-1">
                  {ach.recipient}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {ach.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 font-mono">
                Academic Year {ach.year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials from Students and Parents */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
              Community Voices
            </span>
            <h2 className="font-serif-brand text-3xl font-bold text-blue-950 dark:text-slate-100 mt-1">
              Testimonials from Parents & Scholars
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Hear firsthand from the community about their growth and experience at ABC School and College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-semibold text-blue-950 dark:text-slate-100">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.affiliation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-center text-white border border-amber-500/30 shadow-xl space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Admissions Session 2026-2027
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Give Your Child the Foundation for a Lifetime of Success
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Take the first step toward an exceptional academic journey. Complete the online admission application or book a campus walk-through.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setCurrentPage('admissions')}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-colors cursor-pointer shadow-md"
            >
              Start Online Application
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-3 rounded-xl border border-slate-400 text-white hover:bg-white/10 font-medium text-sm transition-colors cursor-pointer"
            >
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
