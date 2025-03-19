import { useState } from "react";
import FAQ from "../components/common/Faq";
import Footer from "../components/common/Footer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SalesGrowthSection from "@/components/pricing/sales";
import Section from "@/components/common/Section";
import Testimonials from "@/carousels/Testimonials";
import rocket from "../assets/rocket.gif"
import target from "../assets/target.gif"
import { Link } from "react-router-dom";


const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('form');


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <>
      <div className="w-[1150px] ">
        {/* Top Heading */}
        <div className="flex flex-col items-center gap-4 self-stretch mt-[64px]">
          <div>
            <h2 className="text-[#252B37] text-center font-inter text-3xl font-semibold leading-[44px] tracking-[-0.72px] mb-[12px]">
              Maximize Your Outreach, Minimize Your Effort
            </h2>
            <h3 className="text-[#207C97] text-center font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]">
              Pay As You Go!
            </h3>
          </div>
          <p className="text-[#414651] text-center font-inter text-[16px] font-normal leading-[24px]">
            Start your free trial now for any 2 prospects and 1 account!
          </p>
        </div>

        {/* Pricing Section */}
        <div className="relative max-w-7xl flex flex-col md:flex-row justify-center p-6 mt-[44px]">

          <div className="realtive card relative w-[800px] rounded-[16px] p-[3px]">
            <div className="absolute top-1/2 -left-[50px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>
            <div className="absolute top-[200px] left-[650px] w-[240px] h-[260px] inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#207C97_0deg,#E6F9FF_360deg)] blur-[80px] -z-10"></div>

            <div className="flex justify-center item-center rounded-[12px] bg-white p-4">

              <div className="bg-white ml-4 rounded-lg p-10 w-full max-w-sm border border-r-2 flex flex-col gap-8">
                <div className="flex gap-2 m-2">
                  <img src={target} alt="rocket" className="w-[32px] h-[32px]" />
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-[#3D261A] font-inter text-[20px] font-normal leading-[22px]">$</span>
                      <span className="text-[#3D261A] font-inter text-[36px] font-bold leading-[30px] tracking-[-0.72px]">0.10</span>
                      <span className=" "> /prospect</span>
                    </div>
                    <p className="text-[#717680] font-inter text-[14px] font-normal leading-[20px] mt-2">
                      A prospect is a persona with unique email you wish to target with
                      omni-channel personalized outreach.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-[58px] m-2">
                  <img src={rocket} alt="target" className="w-[32px] h-[32px] " />
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-[#3D261A] font-inter text-[20px] font-normal leading-[22px]">$</span>
                      <span className="text-[#3D261A] font-inter text-[36px] font-bold leading-[30px] tracking-[-0.72px]">1</span>
                      <span className=" "> /account</span>
                    </div>
                    <p className="text-[#717680] font-inter text-[14px] font-normal leading-[20px] mt-2">
                      An account is a company to nurture, manage deals, and
                      conversations.
                    </p>
                  </div>
                </div>
                {/* <div className="flex flex-col mt-14">
                  <div className="flex">
                    <span className="text-red-500 text-2xl font-bold">$0.10</span>
                    <span className="flex flex-col justify-end">/ account</span>
                  </div>
                  <p className="text-gray-700">
                    An account is a company to nurture, manage deals, and
                    conversations.
                  </p>
                </div> */}
              </div>

              <div className="flex justify-center item-center bg-white p-2 w-full max-w-sm m-2">
                <div>
                  <h3 className="text-[#3D261A] font-inter text-lg font-semibold leading-[28px] mb-[24px]">What's Included:</h3>
                  <ul className="space-y-6 text-[#3D261A] font-inter text-sm font-normal leading-[20px]">
                    <li className="flex items-center gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                        <path d="M13.5 1.375L5.25 9.625L1.5 5.875" stroke="#28A6CC" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      Email Personalization</li>
                    <li className="flex items-center gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                        <path d="M13.5 1.375L5.25 9.625L1.5 5.875" stroke="#28A6CC" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      Bulk Emailing</li>
                    <li className="flex items-center gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                        <path d="M13.5 1.375L5.25 9.625L1.5 5.875" stroke="#28A6CC" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      Buyer Intent Identification</li>
                    <li className="flex items-center gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                        <path d="M13.5 1.375L5.25 9.625L1.5 5.875" stroke="#28A6CC" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      Account Based Acquisition</li>
                    <li className="flex items-center gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                        <path d="M13.5 1.375L5.25 9.625L1.5 5.875" stroke="#28A6CC" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      Omni-channel Targeting</li>
                    <p className="text-[14px] text-[#3D261A] underline decoration-solid decoration-auto underline-offset-auto">View complete feature list</p>
                  </ul>
                  <Link to="/login"><button
        onClick={handleClick}
        className={`group relative mt-8 rounded-[36px] border border-[#207C97] 
                   text-white text-sm font-medium leading-[20px] py-[12px] px-[16px] 
                   overflow-hidden transition-colors duration-300 
                   ${isClicked ? "bg-[#ADD8E6] border-[#87CEEB]" : "bg-[#207C97]"}`}
      >
        <div className="flex gap-1 items-center relative z-10">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#207C97]">
            Start for free*
          </span>

          {/* SVG with Hover Effects */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            className="transition-transform duration-300 group-hover:-rotate-[50deg] relative z-10"
          >
            <path
              d="M2.5 8.98756L14.5265 8.98756L9.85539 4.43159L11.3231 3L18.5 10L11.3231 17L9.85539 15.5684L14.5265 11.0124L2.5 11.0124L2.5 8.98756Z"
              className="fill-white transition-colors duration-700 group-hover:fill-[#207C97]"
            />
          </svg>
        </div>

        {/* Background Hover Effect */}
        <span
          className="absolute rounded-full inset-0 bg-white 
                     transform scale-0 group-hover:scale-100 
                     transition-transform duration-500 ease-out origin-bottom z-0"
        ></span>
      </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            *Free trial includes 2 prospects and 1 account. After that you pay as
            per usage. No credit card required for accessing free plan.
          </p>
        </div>

        <div className="mt-[168px]"><SalesGrowthSection /></div>
        <div className="mt-[100px] mb-[180px] bg-white">
          <section className="rounded-[20px] bg-[#207C97] w-[1200px] h-[250px] flex-shrink-0 mx-auto md:w-[90%] lg:w-[80%] py-12 md:py-16 px-6 relative flex flex-col justify-center items-center">
            <div className="text-center m-[50px]">
              <h2 className="text-white text-center font-inter text-[30px] font-medium leading-[38px] sm:text-[32px]">
                Tailored for team of all sizes
              </h2>
              <p className="text-white text-center text-[16px] font-inter font-normal leading-6 mt-[12px]">
                Whether you're running a small campaign or scaling up to enterprise-level outreach, our flexible pricing makes it affordable. Contact our sales team to learn more.
              </p>
              {/* <button onClick={openModal}
                className="mt-6 bg-white text-teal-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
                <div className="flex justify-center items-center gap-2">
                  <p>Get Volume Pricing</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2 8.98756L14.0265 8.98756L9.35539 4.43159L10.8231 3L18 10L10.8231 17L9.35539 15.5684L14.0265 11.0124L2 11.0124L2 8.98756Z" fill="#207C97"/>
</svg></div>
              </button> */}
              <button
        onClick={openModal}
        className={`group relative mt-4 rounded-md border border-[#fff] 
                   text-[#207C97] text-sm font-medium leading-[20px] py-[12px] px-[16px] 
                   overflow-hidden transition-colors duration-300 
                   ${isClicked ? "bg-[linear-gradient(180deg, #207C97 30.83%, #0A2831 119.17%)] border-[#207C97]" : "bg-white"}`}
      >
        <div className="flex gap-1 items-center relative z-10">
          <span className="relative z-10 transition-colors duration-700 group-hover:text-white">
          Get Volume Pricing
          </span>

          {/* SVG with Hover Effects */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            className="transition-transform duration-300 group-hover:-rotate-[50deg] relative z-10"
          >
            <path
              d="M2.5 8.98756L14.5265 8.98756L9.85539 4.43159L11.3231 3L18.5 10L11.3231 17L9.85539 15.5684L14.5265 11.0124L2.5 11.0124L2.5 8.98756Z"
              className="fill-[#207C97] transition-colors duration-700 group-hover:fill-white"
            />
          </svg>
        </div>

        {/* Background Hover Effect */}
        <span
          className="absolute rounded-md inset-0 bg-[#207C97] 
                     transform scale-0 group-hover:scale-100 
                     transition-transform duration-500 ease-out origin-bottom z-0"
        ></span>
      </button>
            </div>
            <div className="absolute -top-14 -left-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white opacity-20"></div>
            <div className="absolute -bottom-14 -right-14 w-48 h-48 md:w-40 md:h-40 rounded-full border-8 border-white"></div>
          </section>
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={closeModal}
            >
              <div
                className="bg-white rounded-lg shadow-lg md:flex md:flex-row overflow-hidden transform transition-all"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              >
                <div className="flex items-center justify-center">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full">
                    
                    {currentScreen === 'form' && (
                      <>
                      <h2 className="text-2xl font-bold text-gray-900">Get Custom Volume Pricing</h2>
                    <p className="text-gray-600 text-sm mt-2">
                      Looking for bulk pricing? Share a few details, and we'll provide a tailored quote that suits your team’s needs.
                    </p>
                      <form onSubmit={(e) => e.preventDefault()}
                        className="mt-6 space-y-4">
                        {/* Name Input */}
                        <div>
                          <label className="text-gray-700 text-sm font-medium">Name</label>
                          <Input type="text" placeholder="Your name" className="mt-1" />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label className="text-gray-700 text-sm font-medium">Email</label>
                          <Input type="email" placeholder="you@company.com" className="mt-1" />
                        </div>

                        {/* Team Size Dropdown */}
                        <div>
                          <label className="text-gray-700 text-sm font-medium">Team Size</label>
                          <Select>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select team size from dropdown" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">1-10 Members</SelectItem>
                              <SelectItem value="medium">11-50 Members</SelectItem>
                              <SelectItem value="large">51+ Members</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Phone Number Input */}
                        <div>
                          <label className="text-gray-700 text-sm font-medium">Phone number</label>
                          <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2 mt-1">
                            <Select>
                              <SelectTrigger className="w-20">
                                <SelectValue placeholder="US" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="US">US +1</SelectItem>
                                <SelectItem value="IN">IN +91</SelectItem>
                                <SelectItem value="UK">UK +44</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input type="tel" placeholder="+1 (555) 000-0000" className="flex-1 border-none" />
                          </div>
                        </div>

                        {/* Submit Button */}
                        {/* <Button
                          onClick={() => setCurrentScreen('tick')}
                          className="w-full mt-4 bg-gray-600 text-white hover:bg-gray-700">
                          Submit Request →
                        </Button> */}
                        <button
              onClick={() => setCurrentScreen('tick')}
              className="flex p-[12px_16px] justify-center items-center gap-1 self-stretch w-full rounded-[36px] border border-[#207C97] bg-[#717680] text-white font-inter text-sm font-medium leading-[20px] hover:bg-white hover:text-[#207C97] "
            >
              Submit Request <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2 8.98756L14.0265 8.98756L9.35539 4.43159L10.8231 3L18 10L10.8231 17L9.35539 15.5684L14.0265 11.0124L2 11.0124L2 8.98756Z" fill="#207C97"/>
</svg>
            </button>
                      </form>
                      </>
                    )}
                    {currentScreen === 'tick' && (
                      <div className="flex flex-col items-center justify-center bg-white">
                        {/* Green Check Icon */}
                        <div className="relative w-16 h-16 flex items-center justify-center">
                          {/* Green Circle */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                            <circle cx="26" cy="26" r="25.5" fill="#039855" stroke="white" />
                          </svg>

                          {/* Tick Icon (Perfectly Centered) */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            className="absolute w-6 h-6">
                            <path d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z" fill="white" />
                          </svg>
                        </div>


                        {/* Success Message */}
                        <h2 className="mt-4 text-xl font-semibold text-gray-900">
                          Message Sent Successfully!
                        </h2>

                        {/* Description */}
                        <p className="mt-2 text-center text-gray-600 max-w-md">
                          Thank you for reaching out to us. We’ve received your message and will get back to you shortly. Have a great day!
                        </p>

                        {/* Explore Services Button */}
                        <Link to="/features"><button className="mt-6 flex items-center text-gray-900 font-medium hover:text-black transition-all">
                          Explore Our Services
                          {/* <ArrowRightIcon className="w-5 h-5 ml-2" /> */}
                        </button></Link>

                        {/* Underline Effect */}
                        <div className="w-32 border-t border-gray-900 mt-1"></div>
                      </div>
                
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="space-y-[148px]">
          <Testimonials />
          <FAQ />
          <Section text={"Start Your Free Trial Today!"} text2={"Transform your sales process with AI-powered automation and insights."} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Pricing;