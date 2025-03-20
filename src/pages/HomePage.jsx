import HeroSection from "../components/heroSectionComponents/HeroSection";
import IntegrateTools from "@/carousels/IntegrateTools";
import Testimonials from "@/carousels/Testimonials";
import SuccessStory from "@/carousels/SuccessStory";
import BlogSlide from "@/carousels/BlogSlide";
// import FAQ from "@/common/Faq";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Section from "@/components/common/Section";
import SalesIntelligence from "@/components/featureSection/SalesIntelligence";
import { useEffect } from "react";
// import AutoScrolling from "@/carousels/Auto/AutoScrolling";

const HomePage = () => {
  return (
    <div className="space-y-[188px] ">
      <HeroSection />
      <SalesIntelligence />
      <IntegrateTools />
      <Testimonials />
      <SuccessStory />
      <Section
        text={"Start Your Free Trial Today!"}
        text2={
          "Transform your sales process with AI-powered automation and insights."
        }
      />
      <BlogSlide
        text={"Insights to Elevate Your Sales Game"}
        goto={"blogdetail"}
        classname={"center"}
      />

      <ContactUs />
      <Footer />
      {/* <AutoScrolling /> */}
    </div>
  );
};

export default HomePage;
