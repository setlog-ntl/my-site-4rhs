'use client';

import { Phone, MessageCircle } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function MobileBottomBar({ config }: Props) {
  const { t } = useLocale();
  if (!config.phone && !config.kakaoChannelUrl) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
      <div className="flex border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg shadow-black/10">
        {config.phone && (
          <a
            href={`tel:${config.phone.replace(/[^\+\d]/g, '')}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-semibold bg-[#d47311] active:bg-[#b56210]"
          >
            <Phone className="w-5 h-5" />
            {t('bottom.call')}
          </a>
        )}
        {config.kakaoChannelUrl && (
          <a
            href={config.kakaoChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#391b1b] font-semibold bg-[#fee500] active:bg-[#e6cf00]"
          >
            <MessageCircle className="w-5 h-5" />
            {t('bottom.kakao')}
          </a>
        )}
      </div>
    </div>
  );
}
