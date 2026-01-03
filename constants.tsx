
import React from 'react';
import { Project, Service, ProjectCategory } from './types';
import { 
  FileText, 
  Award, 
  BookOpen, 
  Megaphone 
} from 'lucide-react';

export const DESIGNER_INFO = {
  name: 'Jilit Designer',
  title: 'مصمم انفوغرافي ومصمم جرافيك خبير',
  location: 'Mohammedia, Maroc',
  email: 'jilitsig@gmail.com',
  phone: '+212 668 09 02 85',
  photo: 'https://jilitelmostafa.github.io/portfolio/assets/img/Jilit-Elmostafa.webp',
  tools: [
    'Adobe Photoshop', 
    'Adobe Illustrator', 
    'Adobe InDesign', 
    'Adobe After Effects', 
    'CorelDRAW', 
    'Figma', 
    'Canva Pro'
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
  'https://fmpa.uiz.ac.ma/wp-content/uploads/2024/03/Logo-UIZ-blanc1.png',
  'https://cartomaroc.com/wp-content/uploads/2025/10/CM-1024x334.png'
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'تصميم الفلايرات',
    description: 'فلايرات احترافية لترويج نشاطك أو منتجك بأسلوب عصري وجذاب يلفت الأنظار فوراً.',
    icon: 'FileText'
  },
  {
    id: '2',
    title: 'بطائق الشواهد',
    description: 'تصميم شواهد تقديرية ومشاركة متميزة للدورات والندوات بلمسات فنية راقية.',
    icon: 'Award'
  },
  {
    id: '3',
    title: 'أغلفة الكتب',
    description: 'أغلفة مبدعة تعبر عن محتوى كتابك وتجذب القراء من النظرة الأولى باحترافية عالية.',
    icon: 'BookOpen'
  },
  {
    id: '4',
    title: 'إعلانات الدورات',
    description: 'تصاميم إعلانية جذابة وأنيقة للندوات والدورات التدريبية تضمن لك أعلى مستويات التفاعل.',
    icon: 'Megaphone'
  }
];

export const PROJECTS: Project[] = [
  { 
    id: 'b1', 
    title: 'تصميم غلاف كتاب احترافي', 
    category: ProjectCategory.BOOK_COVER, 
    imageUrl: 'https://lh3.googleusercontent.com/u/0/d/1gh4VOJWfKEye4IFjJxbzYPFPiE1oBtqv', 
    description: 'تصميم غلاف كتاب يعكس المحتوى بلمسة إبداعية احترافية.' 
  },
  { id: 'b2', title: 'غلاف كتاب تطوير ذات', category: ProjectCategory.BOOK_COVER, imageUrl: 'https://picsum.photos/seed/b2/800/600', description: 'بساطة وعمق في الرموز المستخدمة.' },
  { id: 'b3', title: 'كتاب الطبخ المغربي الأصيل', category: ProjectCategory.BOOK_COVER, imageUrl: 'https://picsum.photos/seed/b3/800/600', description: 'إبراز جمال التراث المغربي.' },
  { id: 'b4', title: 'غلاف ديوان شعري', category: ProjectCategory.BOOK_COVER, imageUrl: 'https://picsum.photos/seed/b4/800/600', description: 'لمسات فنية وتجريدية راقية.' },
  { id: 'b5', title: 'كتاب الأعمال والاقتصاد', category: ProjectCategory.BOOK_COVER, imageUrl: 'https://picsum.photos/seed/b5/800/600', description: 'تصميم رصين يعبر عن القوة.' },
  { id: 'f1', title: 'فلاير تسويقي لمطعم فاخر', category: ProjectCategory.FLYER, imageUrl: 'https://picsum.photos/seed/f1/800/600', description: 'تصميم عصري يبرز الهوية البصرية.' },
  { id: 'f2', title: 'فلاير مهرجان ثقافي', category: ProjectCategory.FLYER, imageUrl: 'https://picsum.photos/seed/f2/800/600', description: 'تنسيق ألوان مبهج وجذاب.' },
  { id: 'f3', title: 'عرض ترويجي لشركة عقارات', category: ProjectCategory.FLYER, imageUrl: 'https://picsum.photos/seed/f3/800/600', description: 'أناقة واحترافية في عرض المعلومات.' },
  { id: 'c1', title: 'شهادة تقدير أكاديمية', category: ProjectCategory.CERTIFICATE, imageUrl: 'https://picsum.photos/seed/c1/800/600', description: 'تصميم رسمي بلمسات ذهبية.' },
  { id: 'a1', title: 'إعلان دورة البرمجة', category: ProjectCategory.ADVERTISEMENT, imageUrl: 'https://picsum.photos/seed/a1/800/600', description: 'إعلان جذاب لمنصات التواصل الاجتماعي.' }
];
