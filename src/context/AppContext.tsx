import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  AdmissionApplication,
  FacultyMember,
  Notice,
  PageId,
  SchoolEvent,
  UserProfile,
  UserRole,
} from '../types';
import {
  INITIAL_APPLICATIONS,
  INITIAL_EVENTS,
  INITIAL_FACULTY,
  INITIAL_NOTICES,
} from '../data/mockData';

interface AppContextType {
  currentPage: PageId;
  setCurrentPage: (page: PageId, targetSection?: string) => void;
  targetSection: string | null;
  setTargetSection: (section: string | null) => void;

  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // Auth & Roles
  currentUser: UserProfile | null;
  loginAs: (role: UserRole, customName?: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: (preselectedRole?: UserRole) => void;
  closeAuthModal: () => void;
  authModalRole: UserRole;

  // Modals & Popups
  isSearchModalOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  isProspectusModalOpen: boolean;
  openProspectusModal: () => void;
  closeProspectusModal: () => void;
  isNoticePopupOpen: boolean;
  dismissNoticePopup: () => void;

  // Dynamic Data & Admin Management
  notices: Notice[];
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  deleteNotice: (id: string) => void;

  events: SchoolEvent[];
  addEvent: (event: Omit<SchoolEvent, 'id'>) => void;
  deleteEvent: (id: string) => void;

  facultyList: FacultyMember[];
  addFaculty: (faculty: Omit<FacultyMember, 'id'>) => void;
  deleteFaculty: (id: string) => void;

  applications: AdmissionApplication[];
  submitApplication: (appData: {
    applicantName: string;
    applyingFor: string;
    dob: string;
    gender: string;
    guardianName: string;
    guardianPhone: string;
    guardianEmail: string;
    previousSchool: string;
    previousScore: string;
    notes?: string;
  }) => string;
  updateApplicationStatus: (
    id: string,
    status: AdmissionApplication['status'],
    notes?: string,
    interviewDate?: string
  ) => void;

  // Feedback Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<PageId>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('abc_dark_mode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('abc_dark_mode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Auth User
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('abc_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalRole, setAuthModalRole] = useState<UserRole>('student');

  const openAuthModal = (role: UserRole = 'student') => {
    setAuthModalRole(role);
    setIsAuthModalOpen(true);
  };
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const loginAs = (role: UserRole, customName?: string) => {
    let profile: UserProfile;
    if (role === 'admin') {
      profile = {
        id: 'usr-admin-01',
        name: customName || 'Dr. Arthur Sterling',
        role: 'admin',
        email: 'principal@abcschool.edu',
        gradeOrDept: 'Institutional Administration',
      };
    } else if (role === 'teacher') {
      profile = {
        id: 'usr-teach-01',
        name: customName || 'Prof. Margaret Vance',
        role: 'teacher',
        email: 'm.vance@abcschool.edu',
        gradeOrDept: 'Department of Sciences',
      };
    } else if (role === 'parent') {
      profile = {
        id: 'usr-parent-01',
        name: customName || 'Sunil Varma',
        role: 'parent',
        email: 's.varma@gmail.com',
        gradeOrDept: 'Ward: Kabir Varma (Gr. 11 Science)',
      };
    } else {
      // student
      profile = {
        id: 'usr-stud-01',
        name: customName || 'Aarav Singhania',
        role: 'student',
        email: 'aarav.s26@student.abcschool.edu',
        gradeOrDept: 'Grade 12 Science (+2)',
        rollNo: '2026-SCI-014',
      };
    }
    setCurrentUser(profile);
    localStorage.setItem('abc_user', JSON.stringify(profile));
    setIsAuthModalOpen(false);
    setCurrentPageState('portal');
    showToast(`Logged in successfully as ${profile.name} (${profile.role.toUpperCase()})`);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('abc_user');
    if (currentPage === 'portal') {
      setCurrentPageState('home');
    }
    showToast('Logged out of portal');
  };

  // Modals
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const openProspectusModal = () => setIsProspectusModalOpen(true);
  const closeProspectusModal = () => setIsProspectusModalOpen(false);

  const [isNoticePopupOpen, setIsNoticePopupOpen] = useState(() => {
    return sessionStorage.getItem('abc_popup_dismissed') !== 'true';
  });
  const dismissNoticePopup = () => {
    setIsNoticePopupOpen(false);
    sessionStorage.setItem('abc_popup_dismissed', 'true');
  };

  // Dynamic Data
  const [notices, setNotices] = useState<Notice[]>(() => {
    const saved = localStorage.getItem('abc_notices');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_NOTICES;
      }
    }
    return INITIAL_NOTICES;
  });

  const addNotice = (noticeData: Omit<Notice, 'id'>) => {
    const newNotice: Notice = {
      ...noticeData,
      id: `not-${Date.now()}`,
    };
    const updated = [newNotice, ...notices];
    setNotices(updated);
    localStorage.setItem('abc_notices', JSON.stringify(updated));
    showToast('New official notice published!');
  };

  const deleteNotice = (id: string) => {
    const updated = notices.filter((n) => n.id !== id);
    setNotices(updated);
    localStorage.setItem('abc_notices', JSON.stringify(updated));
    showToast('Notice removed');
  };

  const [events, setEvents] = useState<SchoolEvent[]>(() => {
    const saved = localStorage.getItem('abc_events');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_EVENTS;
      }
    }
    return INITIAL_EVENTS;
  });

  const addEvent = (eventData: Omit<SchoolEvent, 'id'>) => {
    const newEvent: SchoolEvent = {
      ...eventData,
      id: `evt-${Date.now()}`,
    };
    const updated = [newEvent, ...events];
    setEvents(updated);
    localStorage.setItem('abc_events', JSON.stringify(updated));
    showToast('New institutional event scheduled!');
  };

  const deleteEvent = (id: string) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
    localStorage.setItem('abc_events', JSON.stringify(updated));
    showToast('Event removed');
  };

  const [facultyList, setFacultyList] = useState<FacultyMember[]>(() => {
    const saved = localStorage.getItem('abc_faculty');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_FACULTY;
      }
    }
    return INITIAL_FACULTY;
  });

  const addFaculty = (facData: Omit<FacultyMember, 'id'>) => {
    const newMember: FacultyMember = {
      ...facData,
      id: `fac-${Date.now()}`,
    };
    const updated = [...facultyList, newMember];
    setFacultyList(updated);
    localStorage.setItem('abc_faculty', JSON.stringify(updated));
    showToast('Faculty profile added successfully');
  };

  const deleteFaculty = (id: string) => {
    const updated = facultyList.filter((f) => f.id !== id);
    setFacultyList(updated);
    localStorage.setItem('abc_faculty', JSON.stringify(updated));
    showToast('Faculty profile removed');
  };

  const [applications, setApplications] = useState<AdmissionApplication[]>(() => {
    const saved = localStorage.getItem('abc_applications');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_APPLICATIONS;
      }
    }
    return INITIAL_APPLICATIONS;
  });

  const submitApplication = (appData: {
    applicantName: string;
    applyingFor: string;
    dob: string;
    gender: string;
    guardianName: string;
    guardianPhone: string;
    guardianEmail: string;
    previousSchool: string;
    previousScore: string;
    notes?: string;
  }): string => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const appNo = `ABC-2026-${randomSuffix}`;
    const today = new Date().toISOString().split('T')[0];

    const newApp: AdmissionApplication = {
      ...appData,
      id: `app-${Date.now()}`,
      applicationNo: appNo,
      appliedDate: today,
      status: 'Pending',
    };

    const updated = [newApp, ...applications];
    setApplications(updated);
    localStorage.setItem('abc_applications', JSON.stringify(updated));
    showToast(`Application submitted! Ref No: ${appNo}`);
    return appNo;
  };

  const updateApplicationStatus = (
    id: string,
    status: AdmissionApplication['status'],
    notes?: string,
    interviewDate?: string
  ) => {
    const updated = applications.map((app) => {
      if (app.id === id) {
        return {
          ...app,
          status,
          ...(notes ? { notes } : {}),
          ...(interviewDate ? { interviewDate } : {}),
        };
      }
      return app;
    });
    setApplications(updated);
    localStorage.setItem('abc_applications', JSON.stringify(updated));
    showToast(`Application updated to ${status}`);
  };

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const setCurrentPage = (page: PageId, targetSec?: string) => {
    setCurrentPageState(page);
    if (targetSec) {
      setTargetSection(targetSec);
      setTimeout(() => {
        const el = document.getElementById(targetSec);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        targetSection,
        setTargetSection,
        isDarkMode,
        toggleDarkMode,
        currentUser,
        loginAs,
        logout,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        authModalRole,
        isSearchModalOpen,
        openSearchModal,
        closeSearchModal,
        isProspectusModalOpen,
        openProspectusModal,
        closeProspectusModal,
        isNoticePopupOpen,
        dismissNoticePopup,
        notices,
        addNotice,
        deleteNotice,
        events,
        addEvent,
        deleteEvent,
        facultyList,
        addFaculty,
        deleteFaculty,
        applications,
        submitApplication,
        updateApplicationStatus,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
