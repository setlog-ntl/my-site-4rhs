'use client';

import { Instagram, Globe } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function SnsSection({ config }: Props) {
  const { t } = useLocale();

  const links = [
    config.instagramUrl ? { icon: Instagram, label: 'Instagram', url: config.instagramUrl } : null,
    config.naverBlogUrl ? { icon: Globe, label: t('sns.naver'), url: config.naverBlogUrl } : null,
    config.kakaoChannelUrl ? { icon: Globe, label: t('sns.kakao'), url: config.kakaoChannelUrl } : null,
  ].filter(Boolean) as Array<{ icon: typeof Instagram; label: string; url: string }>;

  if (links.length === 0) return null;

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-50 mb-6">
          {t('sns.title')}
        </h2>

        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#d47311]/50 transition-colors min-h-[44px]"
            >
              <link.icon className="w-5 h-5 text-[#d47311]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
