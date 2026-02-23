'use client';

import { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import type { MenuItem } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  items: MenuItem[];
}

export function MenuSection({ items }: Props) {
  const { locale, t } = useLocale();
  const categories = [...new Set(items.map((item) => item.category))];
  const grouped = categories.reduce<Record<string, MenuItem[]>>((acc, cat) => {
    acc[cat] = items.filter((item) => item.category === cat);
    return acc;
  }, {});

  const [activeCategory, setActiveCategory] = useState(categories[0] || '');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(categories.slice(0, 1)));

  const toggleAccordion = useCallback((cat: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }, []);

  const filtered = items.filter((item) => item.category === activeCategory);

  const renderItem = (item: MenuItem, i: number) => {
    const name = locale === 'en' && item.nameEn ? item.nameEn : item.name;
    const desc = locale === 'en' && item.descEn ? item.descEn : item.desc;
    return (
      <div
        key={i}
        className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-[#d47311]/30 transition-colors"
      >
        <span className="text-2xl shrink-0">{item.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{name}</h3>
              {item.isNew && <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-red-500 text-white leading-none">NEW</span>}
              {item.isPopular && <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#d47311] text-white leading-none">{t('menu.popular')}</span>}
            </div>
            <span className="text-sm font-medium text-[#d47311] shrink-0">{item.price}</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="py-12 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-50 mb-6">
          {t('menu.title')}
        </h2>

        {/* Desktop: Tab pills */}
        <div className="hidden sm:flex gap-2 justify-center mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors min-h-[44px] ${
                activeCategory === cat
                  ? 'bg-[#d47311] text-white'
                  : 'text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 hover:border-[#d47311]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="hidden sm:block">
          <div key={activeCategory} className="space-y-3 animate-fade-up">
            {filtered.map(renderItem)}
          </div>
        </div>

        {/* Mobile: Accordion by category */}
        <div className="sm:hidden space-y-3">
          {categories.map((cat) => {
            const isOpen = openCategories.has(cat);
            const catItems = grouped[cat] || [];
            return (
              <div key={cat} className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(cat)}
                  className="w-full flex items-center justify-between p-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors min-h-[44px]"
                >
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {cat}
                    <span className="ml-2 text-xs font-normal text-gray-500">({catItems.length})</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-250 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0">
                    <div className="px-3 pb-3 space-y-2">
                      {catItems.map(renderItem)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
