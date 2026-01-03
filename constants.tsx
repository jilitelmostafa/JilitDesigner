
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
  { name: 'Microsoft Teams', url: 'https://assets.asana.biz/m/717f7eae038a9050/original/Microsoft-Teams.svg' },
  { name: 'Google Drive', url: 'https://assets.asana.biz/m/150594e58876e038/original/Google-Drive.svg' },
  { name: 'Salesforce', url: 'https://assets.asana.biz/m/324ec5d49800849d/original/Salesforce.svg' },
  { name: 'Outlook', url: 'https://assets.asana.biz/m/4e953904d53c54e/original/Microsoft-Outlook.svg' },
  { name: 'Slack', url: 'https://assets.asana.biz/m/46e228ae7dab2f0f/original/Slack.svg' },
  { name: 'Zendesk', url: 'https://assets.asana.biz/m/571bde6a0b10b80b/original/Zendesk.svg' },
  { name: 'Tableau', url: 'https://assets.asana.biz/m/49baba0ab294b013/original/Tableau.svg' },
  { name: 'Microsoft', url: 'https://assets.asana.biz/m/1eac689324ddc14c/original/Microsoft.svg' },
  { name: 'Nightfall', url: 'https://assets.asana.biz/m/1d7a9d3a9aa4ebd1/original/Nightfall.svg' },
  { name: 'Vimeo', url: 'https://assets.asana.biz/m/4ad2f1746d10b000/original/Vimeo.svg' },
  { name: 'Okta', url: 'https://assets.asana.biz/m/328185a11df7a023/original/Okta.svg' },
  { name: 'Twilio', url: 'https://assets.asana.biz/m/3f9aeea58da0f892/original/logo-app-Twilio.svg' },
  { name: 'ServiceNow', url: 'https://assets.asana.biz/m/7c2fced93846068b/original/ServiceNow.svg' },
  { name: 'PagerDuty', url: 'https://assets.asana.biz/m/1adb7fc8783c433/original/Pagerduty.svg' },
  { name: 'Figma', url: 'https://assets.asana.biz/m/3af9c9731a7fe964/original/Figma.svg' }
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
