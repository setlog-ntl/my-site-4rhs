import { siteConfig } from '@/lib/config';
import { NavHeader } from '@/components/nav-header';
import { HeroSection } from '@/components/hero-section';
import { QuickActions } from '@/components/quick-actions';
import { MenuSection } from '@/components/menu-section';
import { HoursSection } from '@/components/hours-section';
import { LocationSection } from '@/components/location-section';
import { GallerySection } from '@/components/gallery-section';
import { SnsSection } from '@/components/sns-section';
import { Footer } from '@/components/footer';
import { MobileBottomBar } from '@/components/mobile-bottom-bar';

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroSection config={siteConfig} />
        <QuickActions config={siteConfig} />
        <MenuSection items={siteConfig.menuItems} />
        <HoursSection hours={siteConfig.businessHours} />
        <LocationSection config={siteConfig} />
        {siteConfig.galleryImages.length > 0 && (
          <GallerySection images={siteConfig.galleryImages} />
        )}
        <SnsSection config={siteConfig} />
      </main>
      <Footer />
      <MobileBottomBar config={siteConfig} />
    </>
  );
}
