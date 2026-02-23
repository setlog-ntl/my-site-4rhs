'use client';

import type { BusinessHour } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  hours: BusinessHour[];
}

const DAY_MAP: Record<string, number> = {
  Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3,
  Thursday: 4, Friday: 5, Saturday: 6,
};

function getTodayIndex(): number {
  return new Date().getDay();
}

export function HoursSection({ hours }: Props) {
  const { locale, t } = useLocale();
  const todayIndex = getTodayIndex();

  return (
    <section id="hours" className="py-12 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-50 mb-6">
          {t('hours.title')}
        </h2>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
          {hours.map((hour, i) => {
            const day = locale === 'en' && hour.dayEn ? hour.dayEn : hour.day;
            const time = locale === 'en' && hour.hoursEn ? hour.hoursEn : hour.hours;
            const dayNumber = DAY_MAP[hour.dayEn || ''] ?? -1;
            const isToday = dayNumber === todayIndex;

            return (
              <div
                key={i}
                className={`flex items-center justify-between px-4 py-3 ${
                  i < hours.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''
                } ${isToday ? 'bg-[#d47311]/5' : ''}`}
              >
                <span className={`text-sm ${isToday ? 'font-bold text-[#d47311]' : 'text-gray-700 dark:text-gray-300'}`}>
                  {day}
                  {isToday && <span className="ml-1.5 text-xs">({t('hours.today')})</span>}
                </span>
                <span className={`text-sm ${
                  hour.isHoliday
                    ? 'text-red-500 font-medium'
                    : isToday
                      ? 'font-bold text-[#d47311]'
                      : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
