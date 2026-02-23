'use client';

import { AnimatedReveal } from './animated-reveal';
import { useLocale } from '@/lib/i18n';

interface Props {
  images: string[];
}

export function GallerySection({ images }: Props) {
  const { t } = useLocale();

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-50 mb-6">
          {t('gallery.title')}
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {images.map((src, i) => (
            <AnimatedReveal key={i} delay={i * 50}>
              <div className="shrink-0 w-64 h-64 rounded-xl overflow-hidden snap-center">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
