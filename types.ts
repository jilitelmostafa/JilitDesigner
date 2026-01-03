
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export enum ProjectCategory {
  FLYER = 'فلايرات',
  CERTIFICATE = 'شواهد',
  BOOK_COVER = 'أغلفة كتب',
  ADVERTISEMENT = 'إعلانات',
  ALL = 'الكل'
}
