import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
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

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroBanner />
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
