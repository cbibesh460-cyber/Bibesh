import React, { useState } from 'react';
import {
  AlertCircle,
  Award,
  BarChart3,
  Calendar,
  Check,
  CheckCircle,
  Clock,
  Download,
  FileCheck,
  FilePlus,
  FileText,
  Image,
  Layers,
  LogOut,
  PenTool,
  Plus,
  Search,
  Shield,
  Trash2,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { INSTITUTION_STATS } from '../../data/mockData';
import { AdmissionApplication, FacultyMember, Notice, SchoolEvent } from '../../types';

export const AdminDashboard: React.FC = () => {
  const {
    currentUser,
    logout,
    applications,
    updateApplicationStatus,
    notices,
    addNotice,
    deleteNotice,
    events,
    addEvent,
    deleteEvent,
    facultyList,
    addFaculty,
    deleteFaculty,
    showToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'admissions' | 'notices' | 'events' | 'faculty'
  >('overview');

  // New Notice modal state
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: '',
    category: 'Academic' as Notice['category'],
    content: '',
    isPinned: false,
    author: 'Principal Sterling',
  });

  // New Event modal state
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM – 1:00 PM',
    location: 'Auditorium',
    category: 'Academic' as SchoolEvent['category'],
    description: '',
    audience: 'All Students, Faculty & Parents',
    isUpcoming: true,
  });

  // New Faculty modal state
  const [showFacultyModal, setShowFacultyModal] = useState(false);
  const [newFaculty, setNewFaculty] = useState({
    name: '',
    designation: 'Senior Lecturer',
    department: 'Department of Sciences',
    qualification: 'M.Sc., Ph.D.',
    experience: '8 Years',
    specialization: 'Organic Chemistry & Biochemistry',
    email: '',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    subjects: 'Chemistry, Environmental Sciences',
  });

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) {
      showToast('Notice title and content are required');
      return;
    }
    addNotice({
      ...newNotice,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    });
    setShowNoticeModal(false);
    setNewNotice({
      title: '',
      category: 'Academic',
      content: '',
      isPinned: false,
      author: 'Principal Sterling',
    });
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.description) {
      showToast('Event title and description are required');
      return;
    }
    addEvent(newEvent);
    setShowEventModal(false);
    setNewEvent({
      title: '',
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM – 1:00 PM',
      location: 'Auditorium',
      category: 'Academic',
      description: '',
      audience: 'All Students, Faculty & Parents',
      isUpcoming: true,
    });
  };

  const handleCreateFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFaculty.name || !newFaculty.department) {
      showToast('Faculty name and department are required');
      return;
    }
    addFaculty({
      ...newFaculty,
      subjects: newFaculty.subjects.split(',').map((s) => s.trim()),
    });
    setShowFacultyModal(false);
    setNewFaculty({
      name: '',
      designation: 'Senior Lecturer',
      department: 'Department of Sciences',
      qualification: 'M.Sc., Ph.D.',
      experience: '8 Years',
      specialization: 'Organic Chemistry & Biochemistry',
      email: '',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
      subjects: 'Chemistry, Environmental Sciences',
    });
  };

  const pendingApps = applications.filter((a) => a.status === 'Pending' || a.status === 'Under Review');
  const approvedApps = applications.filter((a) => a.status === 'Accepted');

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Admin Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                  Admin Control Center
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-800">
                  Live Operations
                </span>
              </div>
              <h1 className="font-serif-brand text-2xl font-bold text-white">
                Institutional Administration Panel
              </h1>
              <p className="text-xs text-slate-400">
                Logged in as: <strong>{currentUser?.name}</strong> (Super Administrator)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => logout()}
              className="px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Admin Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Dashboard & Analytics', icon: BarChart3 },
            { id: 'admissions', label: `Applications (${pendingApps.length} New)`, icon: FileCheck },
            { id: 'notices', label: `Notice Board (${notices.length})`, icon: FileText },
            { id: 'events', label: `Campus Events (${events.length})`, icon: Calendar },
            { id: 'faculty', label: `Faculty Directory (${facultyList.length})`, icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Dashboard Analytics Overview */}
      {activeTab === 'overview' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-150">
          
          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>Total Active Students</span>
                <Users className="w-4 h-4 text-blue-600 dark:text-amber-400" />
              </div>
              <div className="font-mono text-3xl font-bold text-blue-950 dark:text-slate-100 mt-2">
                3,850
              </div>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+6.2% vs previous academic session</span>
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>New Applications</span>
                <FileCheck className="w-4 h-4 text-amber-500" />
              </div>
              <div className="font-mono text-3xl font-bold text-amber-600 dark:text-amber-400 mt-2">
                {applications.length}
              </div>
              <span className="text-xs text-slate-500 mt-1">
                {pendingApps.length} pending review · {approvedApps.length} approved
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>Faculty & Instructors</span>
                <UserCheck className="w-4 h-4 text-blue-600 dark:text-amber-400" />
              </div>
              <div className="font-mono text-3xl font-bold text-blue-950 dark:text-slate-100 mt-2">
                {facultyList.length}
              </div>
              <span className="text-xs text-slate-500 mt-1">
                Across 9 academic departments
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>Average Attendance</span>
                <Award className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="font-mono text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                94.8%
              </div>
              <span className="text-xs text-slate-500 mt-1">
                Monitored across 114 class sections
              </span>
            </div>
          </div>

          {/* Quick Actions & Recent Log */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-serif-brand font-bold text-lg text-blue-950 dark:text-slate-100">
                Institutional Quick Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setShowNoticeModal(true)}
                  className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 text-left transition-colors flex items-center gap-3 cursor-pointer"
                >
                  <FilePlus className="w-5 h-5 text-blue-900 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 dark:text-slate-100">Publish Notice</h4>
                    <p className="text-[11px] text-slate-500">Post instant circular to notice board</p>
                  </div>
                </button>

                <button
                  onClick={() => setShowEventModal(true)}
                  className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 text-left transition-colors flex items-center gap-3 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-blue-900 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 dark:text-slate-100">Schedule Event</h4>
                    <p className="text-[11px] text-slate-500">Add to school calendar & agenda</p>
                  </div>
                </button>

                <button
                  onClick={() => setShowFacultyModal(true)}
                  className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 text-left transition-colors flex items-center gap-3 cursor-pointer"
                >
                  <Users className="w-5 h-5 text-blue-900 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 dark:text-slate-100">Add Faculty Member</h4>
                    <p className="text-[11px] text-slate-500">Register teacher profile & subjects</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('admissions')}
                  className="p-3 rounded-xl bg-amber-50 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 text-left transition-colors flex items-center gap-3 cursor-pointer"
                >
                  <FileCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-900 dark:text-amber-400">Review Admissions</h4>
                    <p className="text-[11px] text-slate-500">{pendingApps.length} applications awaiting decision</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Pending Applications Quick Table */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-brand font-bold text-lg text-blue-950 dark:text-slate-100">
                  Pending Admission Review
                </h3>
                <button
                  onClick={() => setActiveTab('admissions')}
                  className="text-xs font-semibold text-blue-900 dark:text-amber-400 hover:underline cursor-pointer"
                >
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {pendingApps.slice(0, 3).map((app) => (
                  <div
                    key={app.id}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{app.applicantName}</h4>
                      <p className="text-slate-500">{app.applyingFor} · Score: {app.previousScore}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateApplicationStatus(app.id, 'Accepted')}
                        className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Check className="w-3 h-3" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => updateApplicationStatus(app.id, 'Rejected')}
                        className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-red-100 hover:text-red-700 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Admission Applications Management */}
      {activeTab === 'admissions' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                Online Admission Applications
              </h2>
              <p className="text-xs text-slate-500">
                Review candidate details, past academic performance, and process enrollment status.
              </p>
            </div>
            <div className="font-mono text-xs text-slate-500">
              Total Logged: {applications.length}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase font-semibold">
                    <th className="py-3 px-4">Ref #</th>
                    <th className="py-3 px-4">Applicant</th>
                    <th className="py-3 px-4">Target Class</th>
                    <th className="py-3 px-4">Previous Record</th>
                    <th className="py-3 px-4">Guardian / Contact</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td className="py-3 px-4 font-mono font-bold text-blue-900 dark:text-amber-400">
                        {app.applicationNo}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">{app.applicantName}</div>
                        <div className="text-[11px] text-slate-400">DOB: {app.dob} ({app.gender})</div>
                      </td>
                      <td className="py-3 px-4 font-medium">
                        {app.applyingFor}
                      </td>
                      <td className="py-3 px-4">
                        <div>{app.previousSchool}</div>
                        <div className="font-mono font-bold text-blue-900 dark:text-amber-400">{app.previousScore}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div>{app.guardianName}</div>
                        <div className="text-slate-400 font-mono">{app.guardianPhone}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                            app.status === 'Accepted'
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : app.status === 'Rejected'
                              ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        {app.status === 'Pending' || app.status === 'Under Review' ? (
                          <>
                            <button
                              onClick={() => updateApplicationStatus(app.id, 'Accepted')}
                              className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] cursor-pointer"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => updateApplicationStatus(app.id, 'Rejected')}
                              className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-semibold text-[11px] cursor-pointer"
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => updateApplicationStatus(app.id, 'Pending')}
                            className="px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[11px] hover:bg-slate-100 cursor-pointer"
                          >
                            Revert
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Notices Management */}
      {activeTab === 'notices' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                Notice Board & Circulars Management
              </h2>
              <p className="text-xs text-slate-500">
                Create, pin, or delete administrative circulars visible across the website.
              </p>
            </div>
            <button
              onClick={() => setShowNoticeModal(true)}
              className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Notice</span>
            </button>
          </div>

          <div className="space-y-3">
            {notices.map((n) => (
              <div
                key={n.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-blue-900 dark:text-amber-400">{n.category}</span>
                    <span>·</span>
                    <span className="font-mono tabular-nums">{n.date}</span>
                    {n.isPinned && (
                      <span className="bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded text-[10px] font-semibold">
                        PINNED
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif-brand font-bold text-base text-slate-900 dark:text-slate-100">
                    {n.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {n.content}
                  </p>
                </div>
                <button
                  onClick={() => deleteNotice(n.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Delete Notice"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Events Management */}
      {activeTab === 'events' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                Institutional Events Calendar
              </h2>
              <p className="text-xs text-slate-500">
                Schedule academic orientations, athletic tourneys, science exhibitions, and annual functions.
              </p>
            </div>
            <button
              onClick={() => setShowEventModal(true)}
              className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Schedule New Event</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div
                key={e.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {e.category} · {e.date}
                  </span>
                  <h3 className="font-serif-brand font-bold text-base text-slate-900 dark:text-slate-100">
                    {e.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {e.description}
                  </p>
                  <div className="text-xs text-slate-400 pt-1">
                    {e.time} | Location: {e.location}
                  </div>
                </div>
                <button
                  onClick={() => deleteEvent(e.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Delete Event"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Faculty Directory Management */}
      {activeTab === 'faculty' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif-brand text-2xl font-bold text-blue-950 dark:text-slate-100">
                Faculty & Department Registry
              </h2>
              <p className="text-xs text-slate-500">
                Manage instructional personnel records, designations, and departmental assignments.
              </p>
            </div>
            <button
              onClick={() => setShowFacultyModal(true)}
              className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Add Faculty Member</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facultyList.map((f) => (
              <div
                key={f.id}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-3"
              >
                <div className="flex gap-3">
                  <img
                    src={f.photoUrl}
                    alt={f.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 dark:border-slate-700"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{f.name}</h3>
                    <p className="text-xs text-blue-900 dark:text-amber-400 font-medium">{f.designation}</p>
                    <p className="text-[11px] text-slate-400">{f.department}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteFaculty(f.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                  title="Remove Faculty"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal: Add Notice */}
      {showNoticeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Publish New Notice"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setShowNoticeModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 bg-blue-950 text-white flex items-center justify-between">
              <h3 className="font-serif-brand font-bold text-lg">Publish New Official Notice</h3>
              <button onClick={() => setShowNoticeModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateNotice} className="p-6 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold mb-1">Notice Title *</label>
                <input
                  type="text"
                  required
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                  placeholder="e.g. Science Exhibition Registration Open"
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <select
                    value={newNotice.category}
                    onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value as any })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  >
                    <option>Admission</option>
                    <option>Examination</option>
                    <option>Academic</option>
                    <option>Holiday</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Signatory / Authority</label>
                  <input
                    type="text"
                    value={newNotice.author}
                    onChange={(e) => setNewNotice({ ...newNotice, author: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Circular Content *</label>
                <textarea
                  required
                  rows={4}
                  value={newNotice.content}
                  onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                  placeholder="Details of the circular..."
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 resize-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isPinned"
                  checked={newNotice.isPinned}
                  onChange={(e) => setNewNotice({ ...newNotice, isPinned: e.target.checked })}
                  className="rounded"
                />
                <label htmlFor="isPinned" className="text-xs">Pin this notice to top of notice board</label>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNoticeModal(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs"
                >
                  Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Schedule Event */}
      {showEventModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Schedule Event"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setShowEventModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 bg-blue-950 text-white flex items-center justify-between">
              <h3 className="font-serif-brand font-bold text-lg">Schedule Campus Event</h3>
              <button onClick={() => setShowEventModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateEvent} className="p-6 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold mb-1">Event Title *</label>
                <input
                  type="text"
                  required
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="e.g. Annual Inter-School Science Fair"
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Timing</label>
                  <input
                    type="text"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Location</label>
                  <input
                    type="text"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <select
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value as any })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  >
                    <option>Academic</option>
                    <option>Sports</option>
                    <option>Cultural</option>
                    <option>Examination</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  placeholder="Event itinerary and participating grades..."
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 resize-none"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEventModal(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Faculty Member */}
      {showFacultyModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Add Faculty Member"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setShowFacultyModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 bg-blue-950 text-white flex items-center justify-between">
              <h3 className="font-serif-brand font-bold text-lg">Add Faculty Record</h3>
              <button onClick={() => setShowFacultyModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateFaculty} className="p-6 space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold mb-1">Faculty Name *</label>
                <input
                  type="text"
                  required
                  value={newFaculty.name}
                  onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Khanna"
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Designation</label>
                  <input
                    type="text"
                    value={newFaculty.designation}
                    onChange={(e) => setNewFaculty({ ...newFaculty, designation: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Department</label>
                  <select
                    value={newFaculty.department}
                    onChange={(e) => setNewFaculty({ ...newFaculty, department: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  >
                    <option>Department of Sciences</option>
                    <option>Department of Mathematics</option>
                    <option>Department of Computer Science</option>
                    <option>Department of Humanities & Languages</option>
                    <option>Department of Commerce & Management</option>
                    <option>Department of Physical Education</option>
                    <option>Elementary Education Wing</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Qualifications</label>
                  <input
                    type="text"
                    value={newFaculty.qualification}
                    onChange={(e) => setNewFaculty({ ...newFaculty, qualification: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Experience</label>
                  <input
                    type="text"
                    value={newFaculty.experience}
                    onChange={(e) => setNewFaculty({ ...newFaculty, experience: e.target.value })}
                    className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Subjects Taught (comma-separated)</label>
                <input
                  type="text"
                  value={newFaculty.subjects}
                  onChange={(e) => setNewFaculty({ ...newFaculty, subjects: e.target.value })}
                  placeholder="e.g. Organic Chemistry, Biochemistry"
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowFacultyModal(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs"
                >
                  Save Faculty
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
