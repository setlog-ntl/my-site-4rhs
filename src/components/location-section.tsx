'use client';

import { MapPin } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function LocationSection({ config }: Props) {
  const { locale, t } = useLocale();
  const address = locale === 'en' && config.addressEn ? config.addressEn : config.address;
  if (!address) return null;

  return (
    <section id="location" className="py-12 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-50 mb-6">
          {t('location.title')}
        </h2>

        {config.kakaoMapId && (
          <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3]">
            <iframe
              src={`https://map.kakao.com/?map_type=TYPE_MAP&itemId=${config.kakaoMapId}`}
              title="Map"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        )}

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#d47311]/50 transition-colors"
        >
          <MapPin className="w-5 h-5 text-[#d47311] shrink-0" />
          <span className="text-sm text-gray-700 dark:text-gray-300">{address}</span>
        </a>
      </div>
    </section>
  );
}
