'use client';

import { useSyncExternalStore } from 'react';

export type Locale = 'ko' | 'en';

const translations: Record<Locale, Record<string, string>> = {
  ko: {
    'nav.home': '홈',
    'nav.menu': '메뉴',
    'nav.hours': '영업시간',
    'nav.location': '오시는 길',
    'hero.call': '전화하기',
    'quick.call': '전화',
    'quick.directions': '길찾기',
    'quick.hours': '영업시간',
    'menu.title': '메뉴',
    'menu.popular': '인기',
    'bottom.call': '전화하기',
    'bottom.kakao': '카카오 상담',
    'hours.title': '영업시간',
    'hours.today': '오늘',
    'location.title': '오시는 길',
    'gallery.title': '갤러리',
    'sns.title': 'SNS',
    'sns.naver': '네이버 블로그',
    'sns.kakao': '카카오톡 채널',
    'theme.light': '라이트 모드로 전환',
    'theme.dark': '다크 모드로 전환',
    'lang.switchLabel': 'Switch to English',
    'lang.toggle': 'EN',
  },
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.hours': 'Hours',
    'nav.location': 'Location',
    'hero.call': 'Call Now',
    'quick.call': 'Call',
    'quick.directions': 'Directions',
    'quick.hours': 'Hours',
    'menu.title': 'Menu',
    'menu.popular': 'Popular',
    'bottom.call': 'Call Now',
    'bottom.kakao': 'KakaoTalk',
    'hours.title': 'Business Hours',
    'hours.today': 'Today',
    'location.title': 'Location',
    'gallery.title': 'Gallery',
    'sns.title': 'Follow Us',
    'sns.naver': 'Naver Blog',
    'sns.kakao': 'KakaoTalk Channel',
    'theme.light': 'Switch to light mode',
    'theme.dark': 'Switch to dark mode',
    'lang.switchLabel': '한국어로 전환',
    'lang.toggle': '한국어',
  },
};

let _locale: Locale = 'ko';
const _listeners = new Set<() => void>();
function subscribe(cb: () => void) { _listeners.add(cb); return () => { _listeners.delete(cb); }; }
function getSnapshot() { return _locale; }
function getServerSnapshot() { return 'ko' as Locale; }

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('locale');
  if (saved === 'ko' || saved === 'en') { _locale = saved; document.documentElement.lang = saved; }
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLocale = (l: Locale) => {
    _locale = l;
    localStorage.setItem('locale', l);
    document.documentElement.lang = l;
    _listeners.forEach((cb) => cb());
  };
  const t = (key: string) => translations[locale]?.[key] ?? key;
  return { locale, setLocale, t };
}
