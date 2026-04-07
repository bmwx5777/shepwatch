import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedWatchesSlider from "@/components/home/FeaturedWatchesSlider";
import WatchCategories from "@/components/home/WatchCategories";
import PopularModels from "@/components/home/PopularModels";
import JournalSection from "@/components/home/JournalSection";
import InstagramSection from "@/components/home/InstagramSection";
import TrustSection from "@/components/home/TrustSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />
      <Hero />
      <FeaturedWatchesSlider />
      <WatchCategories />
      <PopularModels />
      <JournalSection />
      <InstagramSection />
      <TrustSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}