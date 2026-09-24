import React, { useMemo, useState } from 'react';
import {
  Bell,
  Bookmark,
  Calendar,
  Clock,
  Download,
  FileText,
  Filter,
  MapPin,
  Pin,
  Search,
  Share2,
  Users,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NoticesPage: React.FC = () => {
  const { notices, events, showToast } = useApp();
  const [selectedNoticeCategory, setSelectedNoticeCategory] = useState<string>('All');
  const [noticeSearch, setNoticeSearch] = useState<string>('');
  const [selectedNotice, setSelectedNotice] = useState<string | null>(null);

  const categories = ['All', 'Admission', 'Examination', 'Academic', 'Holiday', 'General'];

  const filteredNotices = useMemo(() => {
    return notices.filter((n) => {
      const matchCat =
        selectedNoticeCategory === 'All' || n.category === selectedNoticeCategory;
      const q = noticeSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q) ||
        n.author.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [notices, selectedNoticeCategory, noticeSearch]);

  const handleDownloadNotice = (title: string) => {
    showToast(`Circular "${title.substring(0, 30)}..." PDF downloaded`);
  };

  const handleEventRsvp = (title: string) => {
    showToast(`Reminder set for: ${title}`);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Official Communications
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Notices, Circulars & Campus Events
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Stay abreast with latest examination notifications, academic schedules, administrative circulars, and university event agendas.
          </p>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          {/* Category tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedNoticeCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedNoticeCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={noticeSearch}
              onChange={(e) => setNoticeSearch(e.target.value)}
              placeholder="Search notices & circulars..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all ${
                notice.isPinned
                  ? 'border-amber-400 dark:border-amber-500/60 shadow-md'
                  : 'border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                <div className="flex items-center gap-2">
                  {notice.isPinned && (
                    <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold uppercase text-[10px] bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800">
                      <Pin className="w-3 h-3" />
                      Pinned Notice
                    </span>
                  )}
                  <span className="font-semibold text-blue-900 dark:text-amber-400">
                    {notice.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-mono tabular-nums">
                    <Clock className="w-3 h-3" />
                    {notice.date}
                  </span>
                </div>
                <span className="text-slate-400 text-[11px]">
                  Issued by: <strong>{notice.author}</strong>
                </span>
              </div>

              <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-blue-950 dark:text-slate-100">
                {notice.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                {notice.content}
              </p>

              {notice.fileAttachment && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <FileText className="w-4 h-4 text-amber-500" />
                    <span>{notice.fileAttachment}</span>
                  </div>
                  <button
                    onClick={() => handleDownloadNotice(notice.title)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-900 dark:text-amber-400 hover:bg-amber-400 hover:text-slate-950 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official PDF</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
              Campus Life
            </span>
            <h2 className="font-serif-brand text-3xl font-bold text-blue-950 dark:text-slate-100 mt-1">
              Upcoming Institutional Events
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Mark your calendar for upcoming inter-school athletic championships, workshops, and convocations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((evt) => (
              <div
                key={evt.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-20 rounded-xl bg-blue-950 text-white flex flex-col items-center justify-center shrink-0 border border-amber-500/30">
                    <span className="text-xs uppercase font-bold text-amber-400">
                      {new Date(evt.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="font-mono text-2xl font-bold leading-none mt-0.5">
                      {new Date(evt.date).getDate()}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1">
                      {new Date(evt.date).getFullYear()}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                      {evt.category}
                    </span>
                    <h3 className="font-serif-brand text-lg font-bold text-blue-950 dark:text-slate-100">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{evt.time}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>{evt.location}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => handleEventRsvp(evt.title)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-400 hover:text-slate-950 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
