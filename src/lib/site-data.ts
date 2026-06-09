import faculty1 from "@/assets/faculty-1.jpg";
import topper1 from "@/assets/topper-1.jpg";
import topper2 from "@/assets/topper-2.jpg";
import topper3 from "@/assets/topper-3.jpg";
import topper4 from "@/assets/topper-4.jpg";
import hero1 from "@/assets/hero-classroom-1.jpg";
import hero2 from "@/assets/hero-classroom-2.jpg";

export const SITE = {
  name: "Chemistry by Shashi Bhushan",
  shortName: "CBS Chemistry",
  tagline: "Class 11 · 12 · JEE · NEET",
  phone: "+91 96086 04657",
  phoneRaw: "919608604657",
  email: "info@cbschemistry.in",
  address: "Main Road, Civil Lines, Ranchi, Jharkhand 834001",
  hours: "Mon – Sat · 7:00 AM – 8:00 PM",
  whatsAppMessage:
    "Hello Sir, I'd like to know about admissions at Chemistry by Shashi Bhushan.",
};

export const whatsAppUrl = (msg = SITE.whatsAppMessage) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;

export const HERO_IMAGES = [hero1, hero2, hero1];

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "results", label: "Results" },
  { id: "courses", label: "Courses" },
  { id: "faculty", label: "Faculty" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "admission", label: "Contact" },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Students Mentored" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 250, suffix: "+", label: "JEE & NEET Selections" },
];

export const ABOUT_CARDS = [
  {
    title: "Concept Clarity",
    desc: "Every chapter explained from first principles — no rote learning, only deep understanding.",
  },
  {
    title: "Personal Mentorship",
    desc: "Direct access to Shashi Bhushan Sir for doubts, strategy and exam preparation.",
  },
  {
    title: "Exam-Oriented Preparation",
    desc: "Aligned strategy for Boards, JEE and NEET — one focused preparation, multiple outcomes.",
  },
  {
    title: "Consistent Performance Tracking",
    desc: "Weekly tests, performance analytics and feedback so progress is always visible.",
  },
];

export const FEATURES = [
  {
    title: "Concept-Based Teaching",
    desc: "Every chapter taught from fundamentals to advanced applications with real exam relevance.",
    benefit: "Fundamentals first",
    icon: "GraduationCap",
  },
  {
    title: "Small Focused Batches",
    desc: "Limited batch size so every student gets personal attention and timely feedback.",
    benefit: "More attention",
    icon: "Users",
  },
  {
    title: "Regular Testing System",
    desc: "Chapter tests, full-length mocks and analytics to track progress chapter by chapter.",
    benefit: "Track progress",
    icon: "ClipboardCheck",
  },
  {
    title: "Doubt Solving Support",
    desc: "Dedicated doubt sessions in class and on demand — no question goes unanswered.",
    benefit: "Always accessible",
    icon: "GraduationCap",
  },
  {
    title: "Board + Competitive Alignment",
    desc: "Single preparation strategy for Boards, JEE and NEET — synced syllabus, smarter prep.",
    benefit: "One strategy",
    icon: "Trophy",
  },
  {
    title: "Performance Monitoring",
    desc: "Parents and students stay informed with regular reports and performance reviews.",
    benefit: "Transparent reports",
    icon: "ClipboardCheck",
  },
];

export const TOPPERS = [
  { name: "Aarav Kumar",  exam: "NEET 2024 — Chemistry",     rank: "180 / 180", score: "Top Performer",        photo: topper1 },
  { name: "Priya Singh",  exam: "Class 12 CBSE Chemistry",   rank: "98.4%",     score: "District Topper",      photo: topper2 },
  { name: "Rohit Verma",  exam: "JEE Main 2024 — Chemistry", rank: "99.6 %ile", score: "High Scorer",          photo: topper3 },
  { name: "Sneha Sharma", exam: "NEET 2024 — Chemistry",     rank: "172 / 180", score: "AIR Qualifier",        photo: topper4 },
  { name: "Ankit Raj",    exam: "Class 11 JAC Chemistry",    rank: "Topper",    score: "97.2%",                photo: topper1 },
  { name: "Isha Gupta",   exam: "JEE Advanced 2024",         rank: "AIR 2,184", score: "Chemistry Top Section", photo: topper2 },
];

export const FACULTY = [
  {
    name: "Shashi Bhushan Sir",
    subject: "Founder & Chemistry Mentor",
    qual: "M.Sc Chemistry · 15+ Yrs Teaching",
    years: "15+ yrs",
    intro:
      "Dedicated Chemistry educator helping students build confidence, master concepts and achieve academic excellence in Boards, JEE and NEET examinations.",
    photo: faculty1,
  },
];

export const COURSES = [
  {
    name: "Class 11 Chemistry",
    suitableFor: "Students entering 11th",
    duration: "12 months",
    features: [
      "Complete NCERT + advanced syllabus coverage",
      "Concept building from fundamentals",
      "Weekly chapter tests + monthly mocks",
      "Doubt sessions & performance tracking",
    ],
  },
  {
    name: "Class 12 Chemistry",
    suitableFor: "Board appearing students",
    duration: "10 months",
    features: [
      "Full CBSE / JAC board syllabus coverage",
      "Previous-year papers + sample papers",
      "Board-pattern test series",
      "Personal mentorship for exam strategy",
    ],
    featured: true,
  },
  {
    name: "JEE Chemistry",
    suitableFor: "JEE Main & Advanced aspirants",
    duration: "1–2 year tracks",
    features: [
      "Physical · Organic · Inorganic — full depth",
      "JEE Main + Advanced pattern practice",
      "Mock tests on exam interface",
      "1-on-1 strategy and revision plans",
    ],
  },
  {
    name: "NEET Chemistry",
    suitableFor: "NEET medical aspirants",
    duration: "1–2 year tracks",
    features: [
      "NCERT-rooted teaching for high accuracy",
      "Weekly NEET-pattern MCQ practice",
      "Full-length test series with analysis",
      "Personal doubt support till the exam",
    ],
  },
];

export const PROCESS = [
  { step: "01", title: "Admission",   desc: "Quick counselling, batch fit assessment and seat confirmation." },
  { step: "02", title: "Assessment",  desc: "Baseline test to understand starting point and learning gaps." },
  { step: "03", title: "Learning",    desc: "Concept-driven classroom teaching with structured notes." },
  { step: "04", title: "Practice",    desc: "Targeted practice sets and assignments after every chapter." },
  { step: "05", title: "Results",     desc: "Confident performance in Boards, JEE and NEET examinations." },
];

export const TESTIMONIALS = [
  {
    quote:
      "Shashi Sir's Chemistry classes completely changed my approach. Organic Chemistry finally made sense and my NEET score jumped by 60+ marks.",
    name: "Aarav Kumar", role: "NEET 2024 — 180/180 Chemistry", photo: topper1,
  },
  {
    quote:
      "As a parent I was impressed by the discipline, regular tests and feedback. My daughter scored 98.4% in Class 12 Chemistry.",
    name: "Mr. R. Singh", role: "Parent of Priya, Class 12", photo: topper2,
  },
  {
    quote:
      "The mock test analysis showed me exactly where I was losing marks. The mentorship is genuinely personal — Sir knew every weak chapter.",
    name: "Rohit Verma", role: "JEE Main 2024 — 99.6 %ile", photo: topper3,
  },
  {
    quote:
      "Chemistry was my weakest subject. After joining, it became the one I look forward to. The concept clarity here is unmatched.",
    name: "Sneha Sharma", role: "NEET 2024 Qualifier", photo: topper4,
  },
];

export const FAQS = [
  {
    q: "How are classes conducted?",
    a: "Classes are held in-person at our Ranchi centre with structured chapter-wise teaching, regular tests and dedicated doubt sessions.",
  },
  {
    q: "Do you provide notes and assignments?",
    a: "Yes — every chapter comes with printed notes, practice sheets and assignment booklets prepared by Shashi Bhushan Sir.",
  },
  {
    q: "Are doubt sessions available?",
    a: "Doubt clearing is built into the schedule. Students can also ask questions on WhatsApp or during dedicated weekly doubt classes.",
  },
  {
    q: "Is the course suitable for JEE and NEET?",
    a: "Yes — our JEE and NEET Chemistry tracks cover the full competitive syllabus with pattern-based test series for each exam.",
  },
  {
    q: "Can Class 11 and 12 students join?",
    a: "Absolutely. We run dedicated Class 11 and Class 12 Chemistry batches aligned with CBSE / JAC board patterns.",
  },
  {
    q: "Are regular tests conducted?",
    a: "Yes — weekly chapter tests, monthly mocks and full-length tests with personal performance analytics and review.",
  },
];
