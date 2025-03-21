import HeroSection from "../components/heroSectionComponents/HeroSection";
import IntegrateTools from "@/carousels/IntegrateTools";
import Testimonials from "@/carousels/Testimonials";
import SuccessStory from "@/carousels/SuccessStory";
import BlogSlide from "@/carousels/BlogSlide";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import SalesIntelligence from "@/components/featureSection/SalesIntelligence";
import { useEffect } from "react";
import FutureSection from "@/components/futureSectionComponents/FutureSection";
import JoinPartnerProgram from "@/components/JoinPartnerProgram";
import CalendlyHomePage from "@/components/CalendlyHomePage";
import TrialSection from "@/components/TrialSection";

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <div className="space-y-[150px] ml-36 mr-36 mt-36 2xl:ml-96 2xl:mr-96">
        <SalesIntelligence />
        <FutureSection />
        <IntegrateTools />
        <Testimonials />
        <SuccessStory />
        <CalendlyHomePage />

        <TrialSection
          text={"Free Trial: Transform Your Sales Pipeline with AI SDRs"}
          text2={
            "A limited-time trial to let potential customers experience the product firsthand."
          }
        />
        <BlogSlide
          text={"Insights to Elevate Your Sales Game"}
          goto={"blogdetail"}
          classname={"center"}
        />

        <ContactUs />
        <JoinPartnerProgram />
        <Footer />
        {/* <AutoScrolling /> */}
      </div>
    </>
  );
};

export default HomePage;
