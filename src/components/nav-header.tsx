'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocale } from '@/lib/i18n';
import { LanguageToggle } from './language-toggle';

const sectionIds = ['hero', 'menu', 'hours', 'location'];

const sectionKeys: Record<string, string> = {
  hero: 'nav.home',
  menu: 'nav.menu',
  hours: 'nav.hours',
  location: 'nav.location',
};

export function NavHeader() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t } = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setProgress((window.scrollY / h) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#fdf4e7]/80 dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50">
      <nav className="max-w-lg mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-1">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                active === id
                  ? 'text-[#d47311] bg-[#d47311]/10 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {t(sectionKeys[id])}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            className="sm:hidden p-2 text-gray-600 dark:text-gray-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="sm:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-[#fdf4e7]/95 dark:bg-gray-950/95 backdrop-blur-md">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm ${
                active === id ? 'text-[#d47311] font-medium' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {t(sectionKeys[id])}
            </a>
          ))}
        </div>
      )}
    </header>
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    </>
  );
}
