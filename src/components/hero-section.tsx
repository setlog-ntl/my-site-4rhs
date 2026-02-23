'use client';

import { Phone } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function HeroSection({ config }: Props) {
  const { locale, t } = useLocale();
  const name = locale === 'en' && config.nameEn ? config.nameEn : config.name;
  const desc = locale === 'en' && config.descriptionEn ? config.descriptionEn : config.description;

  return (
    <section
      id="hero"
      className="pt-20 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-lg mx-auto text-center animate-fade-up">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d47311] mb-3">
          {name}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
          {desc}
        </p>
        {config.phone && (
          <a
            href={`tel:${config.phone.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d47311] text-white font-medium hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <Phone className="w-4 h-4" />
            {t('hero.call')}
          </a>
        )}
      </div>
    </section>
  );
}
