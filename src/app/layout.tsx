import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    images: ['/api/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: "(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}})()" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: siteConfig.name,
              description: siteConfig.description,
              ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
              ...(siteConfig.address ? { address: { '@type': 'PostalAddress', streetAddress: siteConfig.address } } : {}),
              ...(siteConfig.businessHours?.length ? {
                openingHoursSpecification: siteConfig.businessHours.map((h: { day: string; hours: string }) => ({
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: h.day,
                  description: h.hours,
                })),
              } : {}),
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#fdf4e7] text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:shadow-lg focus:text-sm">본문으로 바로가기</a>
        {children}
      </body>
    </html>
  );
}
