import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import { getHeroSlides } from "@/lib/reader";
import ProductsSection from "@/components/ProductsSection";
import NewArrivals from "@/components/NewArrivals";
import ProjectsGallery from "@/components/ProjectsGallery";
import StatsSection from "@/components/StatsSection";
import BrandStrip from "@/components/BrandStrip";
import ServicesSection from "@/components/ServicesSection";
import MediaSection from "@/components/MediaSection";
import Newsletter from "@/components/Newsletter";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";

export default async function Home() {
  const heroSlides = await getHeroSlides()
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroBanner slides={heroSlides} />
        <ProductsSection />
        <NewArrivals />
        <ProjectsGallery />
        <StatsSection />
        <BrandStrip />
        <ServicesSection />
        <MediaSection />
        <Newsletter />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
