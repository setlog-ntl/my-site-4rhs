'use client';

import { Phone, MapPin, Calendar } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function QuickActions({ config }: Props) {
  const { locale, t } = useLocale();
  const address = locale === 'en' && config.addressEn ? config.addressEn : config.address;

  const actions = [
    config.phone ? {
      icon: Phone,
      label: t('quick.call'),
      href: `tel:${config.phone.replace(/[^+\d]/g, '')}`,
    } : null,
    address ? {
      icon: MapPin,
      label: t('quick.directions'),
      href: `https://maps.google.com/?q=${encodeURIComponent(address)}`,
    } : null,
    {
      icon: Calendar,
      label: t('quick.hours'),
      href: '#hours',
    },
  ].filter(Boolean) as Array<{ icon: typeof Phone; label: string; href: string }>;

  return (
    <div className="px-4 sm:px-6 pb-8">
      <div className="max-w-lg mx-auto flex gap-3 justify-center">
        {actions.map((action, i) => (
          <a
            key={i}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border border-[#d47311]/20 bg-white dark:bg-gray-900 text-[#d47311] hover:bg-[#d47311]/5 transition-colors min-h-[44px]"
          >
            <action.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{action.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
