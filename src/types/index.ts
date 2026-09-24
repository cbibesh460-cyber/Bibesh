export type PageId =
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'departments'
  | 'faculty'
  | 'facilities'
  | 'gallery'
  | 'notices'
  | 'contact'
  | 'portal'
  | 'dashboard';

export type UserRole = 'guest' | 'student' | 'teacher' | 'parent' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
  gradeOrDept?: string;
  rollNo?: string;
}

export interface Notice {
  id: string;
  title: string;
  category: 'Academic' | 'Examination' | 'Admission' | 'Holiday' | 'General';
  date: string;
  content: string;
  isPinned?: boolean;
  fileAttachment?: string;
  author: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  category: 'Sports' | 'Cultural' | 'Academic' | 'Workshop' | 'Exhibition';
  date: string;
  time: string;
  location: string;
  description: string;
  audience: string;
  isUpcoming: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  email: string;
  photoUrl: string;
  specialization: string;
  subjects: string[];
}

export interface AcademicProgram {
  id: string;
  level: 'Primary' | 'Middle' | 'High School' | 'Higher Secondary (+2)' | 'College';
  title: string;
  grades: string;
  duration: string;
  description: string;
  keySubjects: string[];
  stream?: string;
  eligibility: string;
  features: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Lab' | 'Sports' | 'Amenity';
  description: string;
  features: string[];
  image: string;
  capacity?: string;
  timing?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Events' | 'Classrooms' | 'Sports' | 'Cultural';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Student' | 'Parent' | 'Alumnus';
  affiliation: string;
  quote: string;
  rating: number;
  year: string;
}

export interface Achievement {
  id: string;
  title: string;
  recipient: string;
  category: 'Academics' | 'Sports' | 'Olympiad' | 'Cultural';
  year: string;
  description: string;
  badge: string;
}

export interface AdmissionApplication {
  id: string;
  applicationNo: string;
  applicantName: string;
  applyingFor: string;
  dob: string;
  gender: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  previousSchool: string;
  previousScore: string;
  appliedDate: string;
  status: 'Pending' | 'Under Review' | 'Interview Scheduled' | 'Accepted' | 'Rejected';
  interviewDate?: string;
  notes?: string;
}

export interface FeeStructureItem {
  gradeRange: string;
  annualTuition: number;
  labAndTechFee: number;
  libraryFee: number;
  examFee: number;
  totalPerAnnum: number;
  installments: string;
}
