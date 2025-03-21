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
import FutureSection from "@/components/futureSectionComponents/FutureSection";
import JoinPartnerProgram from "@/components/JoinPartnerProgram";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import CalendlyHomePage from "@/components/CalendlyHomePage";
// import AutoScrolling from "@/carousels/Auto/AutoScrolling";

const HomePage = () => (
  <div className="space-y-[150px] ">
    <HeroSection />
    <SalesIntelligence />
    <FutureSection />
    <IntegrateTools />
    <Testimonials />
    <SuccessStory />
    <CalendlyHomePage/>
    <Section
      text={"Free Trial: Transform Your Sales Pipeline with AI SDRs"}
      text2={"A limited-time trial to let potential customers experience the product firsthand."} />
    <BlogSlide
      text={"Insights to Elevate Your Sales Game"}
      goto={"blogdetail"}
      classname={"center"} />

    <ContactUs />
    <JoinPartnerProgram />
    <Footer />
    {/* <AutoScrolling /> */}
  </div>
);

export default HomePage;
