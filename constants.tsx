
import { Project, Service, ProjectCategory } from './types';

export const DESIGNER_INFO = {
  name: 'Elmostafa JILIT',
  title: 'مصمم انفوغرافي ومصمم جرافيك خبير',
  location: 'Mohammedia, Maroc',
  email: 'jilitsig@gmail.com',
  phone: '+212 668 09 02 85',
  photo: 'https://jilitelmostafa.github.io/portfolio/assets/img/Jilit-Elmostafa.webp',
  tools: [
    'Adobe Photoshop', 
    'Adobe Illustrator', 
    'Adobe InDesign', 
    'Adobe After Effects'
  ],
  stats: {
    projects: '1000+',
    satisfaction: '100%',
    experience: '12+'
  }
};

export const CLIENT_LOGOS = [
  'https://i.imgur.com/06e7h2O.png',
  'http://flshm.univh2c.ma/convocation/assets/images/logar.PNG',
  'https://fmpa.uiz.ac.ma/wp-content/uploads/2024/03/Logo-UIZ-blanc1.png'
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'تصميم الفلايرات',
    description: 'فلايرات احترافية لترويج نشاطك أو منتجك بأسلوب عصري وجذاب.',
    icon: 'FileText'
  },
  {
    id: '2',
    title: 'بطائق الشواهد',
    description: 'تصميم شواهد تقديرية متميزة للدورات والندوات بلمسات فنية.',
    icon: 'Award'
  },
  {
    id: '3',
    title: 'أغلفة الكتب',
    description: 'أغلفة مبدعة تعبر عن محتوى كتابك وتجذب القراء باحترافية.',
    icon: 'BookOpen'
  },
  {
    id: '4',
    title: 'إعلانات الدورات',
    description: 'تصاميم إعلانية جذابة للندوات والدورات التدريبية.',
    icon: 'Megaphone'
  }
];

export const PROJECTS: Project[] = [
  { 
    id: 'b1', 
    title: 'تصميم غلاف كتاب احترافي', 
    category: ProjectCategory.BOOK_COVER, 
    imageUrl: 'https://photos.fife.usercontent.com/pw/AP1GczPdfxv1NzsfsCZ2qpyUDvl9zu0LITPB-BotAnlmmkJRrGX_0j7qe3UGHw=w1320-h914-s-no-gm?authuser=0', 
    description: 'تصميم غلاف كتاب يعكس المحتوى بلمسة إبداعية.' 
  },
  { id: 'b2', title: 'غلاف كتاب تطوير ذات', category: ProjectCategory.BOOK_COVER, imageUrl: 'https://picsum.photos/seed/design2/800/1200', description: 'بساطة وعمق في الرموز.' },
  { id: 'f1', title: 'فلاير تسويقي لمطعم', category: ProjectCategory.FLYER, imageUrl: 'https://picsum.photos/seed/flyer1/800/600', description: 'تصميم عصري يبرز الهوية.' },
  { id: 'c1', title: 'شهادة تقدير أكاديمية', category: ProjectCategory.CERTIFICATE, imageUrl: 'https://picsum.photos/seed/cert1/800/600', description: 'تصميم رسمي راقي.' },
  { id: 'a1', title: 'إعلان دورة تدريبية', category: ProjectCategory.ADVERTISEMENT, imageUrl: 'https://picsum.photos/seed/ads1/800/600', description: 'إعلان جذاب لمنصات التواصل.' }
];
