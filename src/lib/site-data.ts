import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";
import topper1 from "@/assets/topper-1.jpg";
import topper2 from "@/assets/topper-2.jpg";
import topper3 from "@/assets/topper-3.jpg";
import topper4 from "@/assets/topper-4.jpg";
import hero1 from "@/assets/hero-classroom-1.jpg";
import hero2 from "@/assets/hero-classroom-2.jpg";

export const SITE = {
  name: "Ace Commerce Academy",
  shortName: "Ace Commerce Academy",
  tagline: "Commerce · B.Com · CA",
  phone: "+91 96086 04657",
  phoneRaw: "919608604657",
  email: "info@acecommerceacademy.in",
  address: "Main Road, Civil Lines, Ranchi, Jharkhand 834001",
  hours: "Mon – Sat · 7:00 AM – 8:00 PM",
  whatsAppMessage: "Hello, I'd like to know about admissions at Ace Commerce Academy.",
};

export const whatsAppUrl = (msg = SITE.whatsAppMessage) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;

export const HERO_IMAGES = [hero1, hero2, hero1];

export const NAV = [
  { id: "home", label: "Home" },
  { id: "why", label: "Why Choose Us" },
  { id: "results", label: "Results" },
  { id: "faculty", label: "Faculty" },
  { id: "courses", label: "Courses" },
  { id: "testimonials", label: "Testimonials" },
  { id: "admission", label: "Admission" },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 2400, suffix: "+", label: "Students Mentored" },
  { value: 96, suffix: "%", label: "Success Rate" },
  { value: 120, suffix: "+", label: "Top Rank Holders" },
];

export const FEATURES = [
  {
    title: "Expert Commerce Faculty",
    desc: "CA-qualified mentors with 15+ years guiding students through Class 11–12, B.Com and CA curricula.",
    benefit: "Concept-first teaching",
    icon: "GraduationCap",
  },
  {
    title: "Small, Focused Batches",
    desc: "Capped batch sizes so every student gets personal mentorship, doubt-clearing and feedback.",
    benefit: "Max 25 per batch",
    icon: "Users",
  },
  {
    title: "Weekly Test Series",
    desc: "Chapter-wise and full-length mock tests benchmarked to board, B.Com and CA exam patterns.",
    benefit: "Performance analytics",
    icon: "ClipboardCheck",
  },
  {
    title: "Proven Track Record",
    desc: "Consistent toppers in CBSE/JAC boards and CA Foundation/Inter — results that speak for themselves.",
    benefit: "120+ rank holders",
    icon: "Trophy",
  },
];

export const TOPPERS = [
  { name: "Aarav Kumar",      exam: "CA Foundation 2024",     rank: "AIR 18",  score: "324 / 400", photo: topper1 },
  { name: "Priya Singh",      exam: "Class 12 CBSE Commerce", rank: "98.2%",   score: "District Topper", photo: topper2 },
  { name: "Rohit Verma",      exam: "CA Inter 2024",          rank: "AIR 34",  score: "Both groups",     photo: topper3 },
  { name: "Sneha Sharma",     exam: "B.Com Hons. Final",      rank: "Gold",    score: "9.6 CGPA",        photo: topper4 },
  { name: "Ankit Raj",        exam: "Class 11 JAC Commerce",  rank: "Topper",  score: "97.4%",           photo: topper1 },
  { name: "Isha Gupta",       exam: "CA Foundation 2023",     rank: "AIR 42",  score: "311 / 400",       photo: topper2 },
];

export const FACULTY = [
  {
    name: "Tarun Kumar Sir",
    subject: "Accountancy & CA Mentor",
    qual: "M.Com, CA (Final)",
    years: "18+ yrs",
    intro: "Founder mentor. Specialises in Accountancy fundamentals and CA exam strategy.",
    photo: faculty1,
  },
  {
    name: "Dr. Anjali Sinha",
    subject: "Economics",
    qual: "Ph.D Economics, NET",
    years: "12+ yrs",
    intro: "Makes micro & macroeconomics intuitive with real-world Indian examples.",
    photo: faculty2,
  },
  {
    name: "Rakesh Mehta",
    subject: "Business Studies & Law",
    qual: "MBA, LLB",
    years: "15+ yrs",
    intro: "Corporate experience translated into clear, exam-ready frameworks.",
    photo: faculty3,
  },
  {
    name: "Neha Agarwal",
    subject: "Maths & Statistics",
    qual: "M.Sc Mathematics",
    years: "9+ yrs",
    intro: "Builds rock-solid quantitative aptitude for commerce and CA students.",
    photo: faculty4,
  },
];

export const COURSES = [
  {
    name: "Class 11 Commerce",
    suitableFor: "Students entering 11th",
    duration: "12 months",
    features: [
      "Accountancy, Business Studies, Economics, Maths",
      "Foundation for CA & B.Com aspirants",
      "Weekly chapter tests + monthly mocks",
      "Doubt clearing sessions on demand",
    ],
  },
  {
    name: "Class 12 Commerce",
    suitableFor: "Board appearing students",
    duration: "10 months",
    features: [
      "Full CBSE / JAC board syllabus coverage",
      "Previous-year papers + sample papers",
      "Board pattern test series",
      "Personal performance mentorship",
    ],
    featured: true,
  },
  {
    name: "B.Com (Hons. / General)",
    suitableFor: "Undergraduate students",
    duration: "Semester-wise",
    features: [
      "Ranchi University & IGNOU patterns",
      "Accounting, Tax, Finance, Statistics",
      "Internal & semester exam prep",
      "Career & CA-side guidance",
    ],
  },
  {
    name: "CA Foundation & Inter",
    suitableFor: "CA aspirants",
    duration: "Stage-wise batches",
    features: [
      "ICAI syllabus, complete coverage",
      "Concept videos + classroom revision",
      "Mock tests on exam interface",
      "1-on-1 strategy with CA mentors",
    ],
  },
];

export const PROCESS = [
  { step: "01", title: "Admission",  desc: "Quick counselling, batch fit assessment and seat confirmation." },
  { step: "02", title: "Learning",   desc: "Concept-driven classroom teaching with structured notes." },
  { step: "03", title: "Testing",    desc: "Weekly tests and analytics to track every chapter." },
  { step: "04", title: "Mentorship", desc: "1-on-1 review of mistakes, strategy and exam temperament." },
  { step: "05", title: "Success",    desc: "Confident performance in boards, B.Com and CA exams." },
];

export const TESTIMONIALS = [
  {
    quote: "Tarun Sir's accountancy classes changed how I approach problems. I cleared CA Foundation with AIR 18.",
    name: "Aarav Kumar", role: "CA Foundation, AIR 18", photo: topper1,
  },
  {
    quote: "As a parent I was impressed by the discipline and the regular performance reports. My daughter scored 98.2% in Class 12.",
    name: "Mr. R. Singh", role: "Parent of Priya, Class 12", photo: topper2,
  },
  {
    quote: "The mock test analytics showed exactly where I was losing marks. The mentorship is genuinely personal.",
    name: "Rohit Verma", role: "CA Inter, AIR 34", photo: topper3,
  },
  {
    quote: "B.Com coaching here actually prepared me for university exams and interviews. Best decision in Ranchi.",
    name: "Sneha Sharma", role: "B.Com Hons. Gold Medalist", photo: topper4,
  },
];