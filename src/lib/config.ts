export interface MenuItem {
  name: string;
  nameEn?: string;
  desc: string;
  descEn?: string;
  price: string;
  category: string;
  emoji: string;
}

export interface BusinessHour {
  day: string;
  dayEn?: string;
  hours: string;
  hoursEn?: string;
  isHoliday?: boolean;
}

const DEMO_MENU: MenuItem[] = [
  {
    name: '\uB974\uBC29 \uAE50\uBE60\uB274',
    nameEn: 'Levain Campagne',
    desc: '72\uC2DC\uAC04 \uBC1C\uD6A8 \uCC9C\uC5F0 \uB974\uBC29 \uC2DD\uBE75. \uCD09\uCD09\uD558\uACE0 \uC945\uC945\uD55C \uC2DD\uAC10.',
    descEn: '72-hour fermented sourdough. Moist, chewy texture.',
    price: '\u20A97,500',
    category: '\uBE75',
    emoji: '\uD83C\uDF5E',
  },
  {
    name: '\uD06C\uB8E8\uC544\uC0C1',
    nameEn: 'Croissant',
    desc: '\uBC84\uD130 48\uACA9 \uC218\uC81C \uD06C\uB8E8\uC544\uC0C1. \uBC14\uC0AD\uD558\uACE0 \uD48D\uBD80\uD55C \uBC84\uD130\uD5A5.',
    descEn: '48-layer handmade croissant. Crispy with rich butter aroma.',
    price: '\u20A94,800',
    category: '\uBE75',
    emoji: '\uD83E\uDD50',
  },
  {
    name: '\uBD09\uBD09 \uC1FC\uCF5C\uB77C',
    nameEn: 'Bonbon Chocolat',
    desc: '\uBC1C\uB85C\uB098 \uCD08\uCF5C\uB9BF\uC744 \uB123\uC740 \uBC18\uC219 \uB9C8\uB4E4\uB80C. 1\uC778 2\uAC1C \uD55C\uC815.',
    descEn: 'Molten madeleine with Valrhona chocolate. Limited to 2 per person.',
    price: '\u20A93,500',
    category: '\uACFC\uC790',
    emoji: '\uD83C\uDF6B',
  },
  {
    name: '\uD50C\uB7AB \uD654\uC774\uD2B8',
    nameEn: 'Flat White',
    desc: '\uC2F1\uAE00 \uC624\uB9AC\uC9C4 \uC6D0\uB450, \uB9C8\uC774\uD06C\uB85C\uD3FC \uBC00\uD06C\uB85C \uB9CC\uB4E0 \uC9C4\uD55C \uCEE4\uD53C.',
    descEn: 'Single-origin espresso with microfoam milk.',
    price: '\u20A96,000',
    category: '\uC74C\uB8CC',
    emoji: '\u2615',
  },
  {
    name: '\uC5BC \uADF8\uB808\uC774 \uB77C\uB760',
    nameEn: 'Earl Grey Latte',
    desc: '\uBCA0\uB974\uAC00\uBABB \uD5A5\uC774 \uC0B4\uC544\uC788\uB294 \uB530\uB73B\uD55C \uC5BC \uADF8\uB808\uC774 \uBC00\uD06C\uD2F0.',
    descEn: 'Warm Earl Grey milk tea with vibrant bergamot aroma.',
    price: '\u20A95,500',
    category: '\uC74C\uB8CC',
    emoji: '\uD83E\uDED6',
  },
  {
    name: '\uACC4\uC808 \uACFC\uC77C \uD0C0\uB974\uD2B8',
    nameEn: 'Seasonal Fruit Tart',
    desc: '\uB9E4\uC8FC \uBC14\uB00C\uB294 \uC81C\uCCA0 \uACFC\uC77C \uD0C0\uB974\uD2B8.',
    descEn: 'Weekly seasonal fruit tart.',
    price: '\u20A99,000',
    category: '\uCF00\uC774\uD06C',
    emoji: '\uD83C\uDF53',
  },
];

const DEMO_HOURS: BusinessHour[] = [
  { day: '\uC6D4\uC694\uC77C', dayEn: 'Monday', hours: '08:00 - 19:00', hoursEn: '08:00 - 19:00' },
  { day: '\uD654\uC694\uC77C', dayEn: 'Tuesday', hours: '08:00 - 19:00', hoursEn: '08:00 - 19:00' },
  { day: '\uC218\uC694\uC77C', dayEn: 'Wednesday', hours: '08:00 - 19:00', hoursEn: '08:00 - 19:00' },
  { day: '\uBAA9\uC694\uC77C', dayEn: 'Thursday', hours: '08:00 - 19:00', hoursEn: '08:00 - 19:00' },
  { day: '\uAE08\uC694\uC77C', dayEn: 'Friday', hours: '08:00 - 20:00', hoursEn: '08:00 - 20:00' },
  { day: '\uD1A0\uC694\uC77C', dayEn: 'Saturday', hours: '09:00 - 20:00', hoursEn: '09:00 - 20:00' },
  { day: '\uC77C\uC694\uC77C', dayEn: 'Sunday', hours: '09:00 - 17:00', hoursEn: '09:00 - 17:00' },
];

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '\uC628\uAE30 \uBCA0\uC774\uCEE4\uB9AC',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Ongi Bakery',
  description:
    process.env.NEXT_PUBLIC_DESCRIPTION ||
    '\uB9E4\uC77C \uC544\uCE68 \uC9C1\uC811 \uAD6C\uC6B4 \uBE75 \uD55C \uC870\uAC01\uC73C\uB85C \uD558\uB8E8\uB97C \uC2DC\uC791\uD558\uC138\uC694.',
  descriptionEn:
    process.env.NEXT_PUBLIC_DESCRIPTION_EN ||
    'Start your day with a freshly baked loaf every morning.',
  phone: process.env.NEXT_PUBLIC_PHONE || '02-334-5870',
  address: process.env.NEXT_PUBLIC_ADDRESS || '\uC11C\uC6B8 \uB9C8\uD3EC\uAD6C \uC5F0\uB0A8\uB3D9 239-10',
  addressEn: process.env.NEXT_PUBLIC_ADDRESS_EN || '239-10, Yeonnam-dong, Mapo-gu, Seoul',
  kakaoMapId: process.env.NEXT_PUBLIC_KAKAO_MAP_ID || '',
  menuItems: parseJSON<MenuItem[]>(process.env.NEXT_PUBLIC_MENU_ITEMS, DEMO_MENU),
  businessHours: parseJSON<BusinessHour[]>(process.env.NEXT_PUBLIC_BUSINESS_HOURS, DEMO_HOURS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, []),
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/ongi_bakery',
  naverBlogUrl: process.env.NEXT_PUBLIC_NAVER_BLOG_URL || '',
  kakaoChannelUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL || '',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
