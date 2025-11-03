import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Locations from "@/components/Locations";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <FeaturedProperties />
      <Locations />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
