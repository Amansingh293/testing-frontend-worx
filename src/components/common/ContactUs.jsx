import Avatar1 from "@/assets/Avatar1.png"
import Avatar from "@/assets/Avatar.png"
import Avatar2 from "@/assets/Avatar2.png"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan anytime in the settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel anytime, and your subscription will not renew.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom information to your invoices in the billing section.",
    },
    {
      question: "How does billing work?",
      answer: "We bill monthly or annually, depending on the plan you choose.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your email address in the account settings.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="py-[48px] m-40 bg-white rounded-[32px]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="mb-2 text-[#252B37] text-center text-[30px] font-inter font-medium leading-[38px]">Frequently asked questions</h2>
        <p className="mb-[64px] text-center text-[16px] font-inter font-normal leading-[24px]">
          Everything you need to know about the product and billing.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 "
            >
              <button
                className="w-full flex justify-between items-center text-left text-gray-800 font-medium"
                onClick={() => toggleFAQ(index)}
              >
                <span className="">{faq.question}</span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 25" fill="none">
                      <path d="M8 12.8906H16M22 12.8906C22 18.4135 17.5228 22.8906 12 22.8906C6.47715 22.8906 2 18.4135 2 12.8906C2 7.36778 6.47715 2.89062 12 2.89062C17.5228 2.89062 22 7.36778 22 12.8906Z" stroke="#207C97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span>
                  ) : (
                    <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 25" fill="none">
                      <path d="M12 8.89062V16.8906M8 12.8906H16M22 12.8906C22 18.4135 17.5228 22.8906 12 22.8906C6.47715 22.8906 2 18.4135 2 12.8906C2 7.36778 6.47715 2.89062 12 2.89062C17.5228 2.89062 22 7.36778 22 12.8906Z" stroke="#207C97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-[14px] font-inter font-normal leading-[24px] text-[#535862]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-[32px]">
      <div className="rounded-[18px] w-full text-center mt-[64px] px-[64px] py-[32px]">
        <div className=" flex justify-center relative mb-4">
          <img src={Avatar1} alt="User 1" className="w-10 h-10 rounded-full absolute left-[290px] top-4 z-0" />
          <img src={Avatar2} alt="User 2" className="w-10 h-10 rounded-full  absolute right-[290px] top-4 z-0" />
          <img src={Avatar} alt="User 3" className="w-14 h-14 rounded-full bg-white border border-gray-300 z-10" />
        </div>
        <h3 className="text-xl font-semibold">Still have questions?</h3>
        <p className="text-gray-600 text-sm mt-2">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <Link to="/contact"><button className="mt-4 bg-[#207C97] text-white px-4 py-2 rounded-md ">
          Get in touch
        </button></Link>
      </div>
      </div>
    </div>
  );
}
// bg-[#E1E3E6]