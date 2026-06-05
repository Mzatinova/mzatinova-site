export const IMG = {
  hero: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418124065_a4c08818.png',
  dashboard: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418149716_3ede5a7d.png',
  ai: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418167625_2c0caedc.jpg',
  cloud: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418191601_6517aa7f.png',
 founder: '/founder.JPG',
  team2: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418235750_7308c088.jpg',
  edu: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418265211_78ac3e5e.png',
  fin: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418271920_ea202d90.jpg',
  proj1: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418312795_61c49633.png',
  proj2: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418313878_a9ac54ed.png',
  proj3: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418308030_9cffc410.png',
  proj4: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418308079_5c83bbd6.png',
  blog1: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418340465_af990f24.png',
  blog2: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418341617_37f9f9ec.png',
  blog3: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418334117_1e297017.jpg',
  biz: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780419936485_4fb9cd59.png',
  students: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780419990568_53055132.jpg',
  health: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780420071701_4a94f456.jpg',
  agri: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780419974065_e3585117.png',
};

export const BOOKING_URL =
  'https://famous.ai/api/crm/6a1f05c50cc2a2fd277ab52d/calendar/public?calendarId=8845b87f-2bf3-4c5e-9a5d-f3a8c0f20eb0&view=booking';

export const CRM_URL = 'https://famous.ai/api/crm/6a1f05c50cc2a2fd277ab52d/subscribe';

export async function subscribe(email: string, source: string, tags: string[], name?: string) {
  try {
    await fetch(CRM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, source, tags }),
    });
  } catch (e) {
    /* swallow */
  }
}

export const NAV = ['Home', 'Platforms', 'Services', 'AI Lab', 'Portfolio', 'About', 'Contact'];

export const TEAM = [
  {
    name: 'Wadi Mkweza',
    role: 'Founder & CEO',
    image: IMG.founder,
    bio: 'Full-Stack AI Engineer and Architect dedicated to building the digital infrastructure for Africa’s emerging sectors.',
  }
];

export const eduFeatures = [
  { t: 'Student Management', d: 'Centralized records, enrollment, and profiles for every learner.', icon: 'Users' },
  { t: 'Attendance Tracking', d: 'Real-time digital attendance with automated alerts.', icon: 'CalendarCheck' },
  { t: 'Fees Management', d: 'Invoicing, payments, and balance tracking made simple.', icon: 'CreditCard' },
  { t: 'Examination Management', d: 'Schedule exams, capture grades, and analyze performance.', icon: 'FileSpreadsheet' },
  { t: 'Report Cards', d: 'Auto-generated, professional report cards in one click.', icon: 'GraduationCap' },
  { t: 'SMS Notifications', d: 'Instant updates to parents and staff via SMS.', icon: 'MessageSquare' },
  { t: 'Parent Portal', d: "Parents stay connected to their child's progress anytime.", icon: 'Heart' },
  { t: 'Teacher Portal', d: 'Empower teachers with tools for grading and planning.', icon: 'Presentation' },
  { t: 'AI-Powered Insights', d: 'Predictive analytics that surface at-risk students early.', icon: 'Brain' },
];

export const platforms = [
  { name: 'EduSpace', status: 'Active', img: IMG.edu, desc: 'Cloud-based school management & analytics platform.', color: 'from-cyan-500 to-blue-600' },
  { name: 'HealthSpace', status: 'In R&D', img: IMG.health, desc: 'Digital health records & clinic operations, powered by our maternal and clinical risk prediction AI models.', color: 'from-emerald-500 to-teal-600' },
  { name: 'AgriSpace', status: 'In R&D', img: IMG.agri, desc: 'Smart agricultural analytics & supply chain ecosystem integrating AgriNova AI yield forecasting..', color: 'from-lime-500 to-green-600' },
  { name: 'FinSpace', status: 'Upcoming', img: IMG.fin, desc: 'Next-generation financial operations, micro-finance ecosystems, and B2B digital wallet frameworks.', color: 'from-violet-500 to-purple-600' },
  { name: 'CommerceSpace', status: 'Upcoming', img: IMG.biz, desc: 'Integrated cross-border trade, smart inventory automation, and local merchant marketplaces.', color: 'from-amber-500 to-orange-600' },
  { name: 'GovSpace', status: 'Upcoming', img: IMG.cloud, desc: 'Secure public sector digitization, civic identity workflows, and streamlined municipal portals.', color: 'from-slate-500 to-indigo-600' },
];

// export const PLATFORM_FEATURES = [
//   { title: 'Student Management', desc: 'Centralized records, enrollment & profiles.' },
//   { title: 'Attendance Tracking', desc: 'Real-time digital attendance & alerts.' },
//   { title: 'Fees Management', desc: 'Invoicing, payments & financial reports.' },
//   { title: 'Examination Management', desc: 'Grade entry, scheduling & results.' },
//   { title: 'Report Cards', desc: 'Automated, branded performance reports.' },
//   { title: 'SMS Notifications', desc: 'Instant updates to parents & staff.' },
//   { title: 'Parent Portal', desc: 'Transparent access for guardians.' },
//   { title: 'Teacher Portal', desc: 'Tools for educators to manage classes.' },
//   { title: 'AI-Powered Insights', desc: 'Predictive analytics on performance.' },
// ];

// export const ROADMAP = [
//   { name: 'EduSpace', status: 'Active', desc: 'Education Platform', img: IMG.students, color: 'from-cyan-400 to-blue-500' },
//   { name: 'HealthSpace', status: 'Planned', desc: 'Healthcare Platform', img: IMG.health, color: 'from-emerald-400 to-teal-500' },
//   { name: 'AgriSpace', status: 'Planned', desc: 'Agriculture Platform', img: IMG.agri, color: 'from-lime-400 to-green-500' },
//   { name: 'FinSpace', status: 'Planned', desc: 'Financial Services Platform', img: IMG.fin, color: 'from-violet-400 to-purple-500' },
//   { name: 'CommerceSpace', status: 'Planned', desc: 'Digital Commerce Platform', img: IMG.biz, color: 'from-amber-400 to-orange-500' },
//   { name: 'GovSpace', status: 'Planned', desc: 'Government & NGO Services Platform', img: IMG.cloud, color: 'from-slate-400 to-indigo-500' },
// ];
export const ROADMAP = [
  { name: 'EduSpace', status: 'Active', desc: 'Education Platform', img: IMG.students, color: 'from-cyan-400 to-blue-500' },
  { name: 'HealthSpace', status: 'In R&D', desc: 'Healthcare Platform', img: IMG.health, color: 'from-emerald-400 to-teal-500' },
  { name: 'AgriSpace', status: 'In R&D', desc: 'Agriculture Platform', img: IMG.agri, color: 'from-lime-400 to-green-500' },
  { name: 'FinSpace', status: 'Upcoming', desc: 'Financial Services Platform', img: IMG.fin, color: 'from-violet-400 to-purple-500' },
  { name: 'CommerceSpace', status: 'Upcoming', desc: 'Digital Commerce Platform', img: IMG.biz, color: 'from-amber-400 to-orange-500' },
  { name: 'GovSpace', status: 'Upcoming', desc: 'Government & NGO Services Platform', img: IMG.cloud, color: 'from-slate-400 to-indigo-500' },
];

export const services = [
  {
    name: 'Software Development',
    icon: 'Code2',
    items: ['Web Applications', 'Mobile Applications', 'School Management Systems', 'Business Systems', 'API Development', 'System Integration'],
  },
  {
    name: 'Cloud Services',
    icon: 'Cloud',
    items: ['Application Hosting', 'Domain Management', 'Business Email', 'Cloud Deployment', 'Automated Backups', 'System Monitoring'],
  },
  {
    name: 'AI Solutions',
    icon: 'Sparkles',
    items: ['AI Chatbots', 'Document Processing', 'Data Analytics', 'Workflow Automation', 'Educational AI Tools', 'AI Integration'],
  },
];

export const aiProjects = [
  { name: 'EduNova AI', desc: 'AI-powered educational assistant for personalized learning.', progress: 72 },
  { name: 'BizNova AI', desc: 'Business automation and intelligence for operations.', progress: 54 },
  { name: 'AgriNova AI', desc: 'Agricultural analytics and yield forecasting.', progress: 38 },
];

export const portfolio = [
  {
    title: 'EduSpace Portal',
    cat: 'Education',
    status: 'Live',
    img: IMG.proj1,
    desc: 'School management and results portal currently used by Progress Private Primary School.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'SMS Integration'],
    outcome: 'Live Deployment',
  },
  {
    title: 'Examination Management Information System (EMIS)',
    cat: 'Education',
    status: 'Project',
    img: IMG.proj2,
    desc: 'Examination management platform developed for Kasama Community Technical College.',
    tech: ['React', 'Node.js', 'MySQL'],
    outcome: 'Institution Project',
  },
  {
    title: 'Hypertension Risk Prediction for ART Patients',
    cat: 'Healthcare',
    status: 'AI Solution',
    img: IMG.proj3,
    desc: 'Machine learning system that predicts hypertension risk among HIV patients receiving ART treatment.',
    tech: ['Python', 'Machine Learning', 'Healthcare AI'],
    outcome: 'AI Solution',
  },
  {
    title: 'Maternal Risk Prediction System',
    cat: 'Healthcare',
    status: 'AI Solution',
    img: IMG.proj4,
    desc: 'AI-powered maternal health risk assessment platform providing early warning and care recommendations.',
    tech: ['Python', 'Predictive Analytics', 'Healthcare'],
    outcome: 'AI Solution',
  },
];

export const blogPosts = [
  { title: 'How AI is Transforming African Classrooms', cat: 'Education Technology', img: IMG.blog1, date: 'May 2026', read: '6 min' },
  { title: 'Building Resilient Cloud Infrastructure', cat: 'Cloud Computing', img: IMG.blog2, date: 'Apr 2026', read: '8 min' },
  { title: 'The Future of Digital Transformation', cat: 'Digital Transformation', img: IMG.blog3, date: 'Apr 2026', read: '5 min' },
];

export const jobs = [
  { role: 'Senior Full-Stack Engineer', type: 'Full-time', loc: 'Lilongwe / Remote' },
  { role: 'AI/ML Research Engineer', type: 'Full-time', loc: 'Remote' },
  { role: 'Cloud Infrastructure Engineer', type: 'Full-time', loc: 'Blantyre / Remote' },
  { role: 'Product Designer', type: 'Full-time', loc: 'Remote' },
  { role: 'Software Engineering Intern', type: 'Internship', loc: 'Lilongwe' },
  { role: 'Data Analyst Intern', type: 'Internship', loc: 'Remote' },
];

// export const IMG = {
//   hero: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418124065_a4c08818.png',
//   dashboard: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418149716_3ede5a7d.png',
//   ai: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418167625_2c0caedc.jpg',
//   cloud: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418191601_6517aa7f.png',
//   founder: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418224417_97e0aae5.jpg',
//   team2: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418235750_7308c088.jpg',
//   edu: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418265211_78ac3e5e.png',
//   // health: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418258986_c30bcaa5.png',
//   // agri: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418266476_0cf40766.png',
//   fin: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418271920_ea202d90.jpg',
//   proj1: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418312795_61c49633.png',
//   proj2: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418313878_a9ac54ed.png',
//   proj3: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418308030_9cffc410.png',
//   proj4: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418308079_5c83bbd6.png',
//   blog1: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418340465_af990f24.png',
//   blog2: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418341617_37f9f9ec.png',
//   blog3: 'https://d64gsuwffb70l.cloudfront.net/6a1f05c50cc2a2fd277ab52d_1780418334117_1e297017.jpg',
//   biz: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780419936485_4fb9cd59.png',
//   students: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780419990568_53055132.jpg',
//    health: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780420071701_4a94f456.jpg',
//     agri: 'https://d64gsuwffb70l.cloudfront.net/6a1f0c67e3698e04fe29ba90_1780419974065_e3585117.png',
// };

// export const BOOKING_URL =
//   'https://famous.ai/api/crm/6a1f05c50cc2a2fd277ab52d/calendar/public?calendarId=8845b87f-2bf3-4c5e-9a5d-f3a8c0f20eb0&view=booking';

// export const CRM_URL = 'https://famous.ai/api/crm/6a1f05c50cc2a2fd277ab52d/subscribe';

// export async function subscribe(email: string, source: string, tags: string[], name?: string) {
//   try {
//     await fetch(CRM_URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, name, source, tags }),
//     });
//   } catch (e) {
//     /* swallow */
//   }
// }

// export const NAV = ['Home', 'Platforms', 'Services', 'AI Lab', 'Portfolio', 'About', 'Contact'];


// export const TEAM = [
//   {
//     name: 'Wadi Mkweza',
//     role: 'Founder & CEO',
//     image: IMG.founder, // or replace later with real founder image
//     bio: 'Full-Stack AI Developer building intelligent digital platforms for Africa.',
//   }
// ];
// export const eduFeatures = [
//   { t: 'Student Management', d: 'Centralized records, enrollment, and profiles for every learner.', icon: 'Users' },
//   { t: 'Attendance Tracking', d: 'Real-time digital attendance with automated alerts.', icon: 'CalendarCheck' },
//   { t: 'Fees Management', d: 'Invoicing, payments, and balance tracking made simple.', icon: 'CreditCard' },
//   { t: 'Examination Management', d: 'Schedule exams, capture grades, and analyze performance.', icon: 'FileSpreadsheet' },
//   { t: 'Report Cards', d: 'Auto-generated, professional report cards in one click.', icon: 'GraduationCap' },
//   { t: 'SMS Notifications', d: 'Instant updates to parents and staff via SMS.', icon: 'MessageSquare' },
//   { t: 'Parent Portal', d: 'Parents stay connected to their child\'s progress anytime.', icon: 'Heart' },
//   { t: 'Teacher Portal', d: 'Empower teachers with tools for grading and planning.', icon: 'Presentation' },
//   { t: 'AI-Powered Insights', d: 'Predictive analytics that surface at-risk students early.', icon: 'Brain' },
// ];

// export const platforms = [
//   { name: 'EduSpace', status: 'Active', img: IMG.edu, desc: 'Cloud-based school management & analytics platform.', color: 'from-cyan-500 to-blue-600' },
//   { name: 'HealthSpace', status: 'Planned', img: IMG.health, desc: 'Digital health records & clinic operations platform.', color: 'from-emerald-500 to-teal-600' },
//   { name: 'AgriSpace', status: 'Planned', img: IMG.agri, desc: 'Agricultural analytics & farm management platform.', color: 'from-lime-500 to-green-600' },
//   { name: 'FinSpace', status: 'Planned', img: IMG.fin, desc: 'Financial operations & micro-finance platform.', color: 'from-violet-500 to-purple-600' },
// ];

// export const PLATFORM_FEATURES = [
//   { title: 'Student Management', desc: 'Centralized records, enrollment & profiles.' },
//   { title: 'Attendance Tracking', desc: 'Real-time digital attendance & alerts.' },
//   { title: 'Fees Management', desc: 'Invoicing, payments & financial reports.' },
//   { title: 'Examination Management', desc: 'Grade entry, scheduling & results.' },
//   { title: 'Report Cards', desc: 'Automated, branded performance reports.' },
//   { title: 'SMS Notifications', desc: 'Instant updates to parents & staff.' },
//   { title: 'Parent Portal', desc: 'Transparent access for guardians.' },
//   { title: 'Teacher Portal', desc: 'Tools for educators to manage classes.' },
//   { title: 'AI-Powered Insights', desc: 'Predictive analytics on performance.' },
// ];

// export const ROADMAP = [
//   { name: 'EduSpace', status: 'Active', desc: 'Education Platform', img: IMG.students, color: 'from-cyan-400 to-blue-500' },
//   { name: 'HealthSpace', status: 'Planned', desc: 'Healthcare Platform', img: IMG.health, color: 'from-emerald-400 to-teal-500' },
//   { name: 'AgriSpace', status: 'Planned', desc: 'Agriculture Platform', img: IMG.agri, color: 'from-lime-400 to-green-500' },
//   { name: 'FinSpace', status: 'Planned', desc: 'Financial Services Platform', img: IMG.biz, color: 'from-violet-400 to-purple-500' },
// ];

// export const services = [
//   {
//     name: 'Software Development',
//     icon: 'Code2',
//     items: ['Web Applications', 'Mobile Applications', 'School Management Systems', 'Business Systems', 'API Development', 'System Integration'],
//   },
//   {
//     name: 'Cloud Services',
//     icon: 'Cloud',
//     items: ['Application Hosting', 'Domain Management', 'Business Email', 'Cloud Deployment', 'Automated Backups', 'System Monitoring'],
//   },
//   {
//     name: 'AI Solutions',
//     icon: 'Sparkles',
//     items: ['AI Chatbots', 'Document Processing', 'Data Analytics', 'Workflow Automation', 'Educational AI Tools', 'AI Integration'],
//   },
// ];

// export const aiProjects = [
//   { name: 'EduNova AI', desc: 'AI-powered educational assistant for personalized learning.', progress: 72 },
//   { name: 'BizNova AI', desc: 'Business automation and intelligence for operations.', progress: 54 },
//   { name: 'AgriNova AI', desc: 'Agricultural analytics and yield forecasting.', progress: 38 },
// ];

// // export const portfolio = [
// //   { title: 'EduSpace Deployment — Lilongwe', cat: 'Education', img: IMG.proj1, desc: 'School-wide rollout managing 4,000+ students across 6 campuses.', tech: ['React', 'Node.js', 'PostgreSQL'], outcome: '40% faster administration' },
// //   { title: 'Retail Operations Suite', cat: 'Business', img: IMG.proj2, desc: 'Inventory & sales automation for a national retailer.', tech: ['TypeScript', 'Supabase', 'Stripe'], outcome: '3x reporting speed' },
// //   { title: 'Cloud Migration — NGO', cat: 'Cloud', img: IMG.proj3, desc: 'Secure cloud infrastructure with automated backups.', tech: ['AWS', 'Docker', 'Terraform'], outcome: '99.9% uptime' },
// //   { title: 'Document AI Engine', cat: 'Artificial Intelligence', img: IMG.proj4, desc: 'Intelligent document processing for grant applications.', tech: ['Python', 'OCR', 'LLMs'], outcome: '85% manual work cut' },
// // ];

// export const portfolio = [
//   {
//     title: 'EduSpace Portal',
//     cat: 'Education',
//     status: 'Live',
//     img: IMG.proj1,
//     desc: 'School management and results portal currently used by Progress Private Primary School.',
//     tech: ['React', 'Node.js', 'PostgreSQL', 'SMS Integration'],
//     outcome: 'Live Deployment',
//   },

//   {
//     title: 'Examination Management Information System (EMIS)',
//     cat: 'Education',
//     status: 'Project',
//     img: IMG.proj2,
//     desc: 'Examination management platform developed for Kasama Community Technical College.',
//     tech: ['React', 'Node.js', 'MySQL'],
//     outcome: 'Institution Project',
//   },

//   {
//     title: 'Hypertension Risk Prediction for ART Patients',
//     cat: 'Healthcare',
//     status: 'AI Solution',
//     img: IMG.proj3,
//     desc: 'Machine learning system that predicts hypertension risk among HIV patients receiving ART treatment.',
//     tech: ['Python', 'Machine Learning', 'Healthcare AI'],
//     outcome: 'AI Solution',
//   },

//   {
//     title: 'Maternal Risk Prediction System',
//     cat: 'Healthcare',
//     status: 'AI Solution',
//     img: IMG.proj4,
//     desc: 'AI-powered maternal health risk assessment platform providing early warning and care recommendations.',
//     tech: ['Python', 'Predictive Analytics', 'Healthcare'],
//     outcome: 'AI Solution',
//   },
// ];

// export const blogPosts = [
//   { title: 'How AI is Transforming African Classrooms', cat: 'Education Technology', img: IMG.blog1, date: 'May 2026', read: '6 min' },
//   { title: 'Building Resilient Cloud Infrastructure', cat: 'Cloud Computing', img: IMG.blog2, date: 'Apr 2026', read: '8 min' },
//   { title: 'The Future of Digital Transformation', cat: 'Digital Transformation', img: IMG.blog3, date: 'Apr 2026', read: '5 min' },
// ];

// export const jobs = [
//   { role: 'Senior Full-Stack Engineer', type: 'Full-time', loc: 'Lilongwe / Remote' },
//   { role: 'AI/ML Research Engineer', type: 'Full-time', loc: 'Remote' },
//   { role: 'Cloud Infrastructure Engineer', type: 'Full-time', loc: 'Blantyre / Remote' },
//   { role: 'Product Designer', type: 'Full-time', loc: 'Remote' },
//   { role: 'Software Engineering Intern', type: 'Internship', loc: 'Lilongwe' },
//   { role: 'Data Analyst Intern', type: 'Internship', loc: 'Remote' },
// ];
