import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}
