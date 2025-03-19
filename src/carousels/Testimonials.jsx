import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Rectangle from "../assets/Rectangle.png";
const testimonials = [
  {
    name: "Anita Desai",
    role: "Sales Manager at Innovatech Solutions",
    testimonial:
      "Salesworx has completely transformed how we handle leads. The AI assistant's insights have helped us prioritize high-value prospects, resulting in a 35% increase in conversion rates in just 2 months!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "David Smith",
    role: "Marketing Director at TechNova",
    testimonial:
      "Follow-ups used to take forever. Now, Salesworx automates it all, helping us close more deals in half the time. Our team loves the simplicity of the tool!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma Johnson",
    role: "Head of Sales at StartupX",
    testimonial:
      "The automation features in Salesworx have streamlined our workflow, making sales tracking more efficient and effective.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center text-center w-full p-6">
      <h2 className="mb-[64px] text-[#252B37] text-center text-[30px] font-inter font-medium leading-[38px]">
        Hear from Our Satisfied Customers
      </h2>
      <Carousel setApi={setApi} className="w-screen">
        <CarouselContent className="flex ml-28 h-full">
          {testimonials.map((testimonial, idx) => (
            <CarouselItem
              key={idx}
              className="sm:basis-3/5 basis-full flex justify-center overflow-hidden"
            >
              <Card
                className="realtive w-[760px] h-[385px] p-6 text-white rounded-lg shadow-lg flex flex-col items-center relative bg-cover bg-[#207C97] overflow-hidden"
                style={{
                  backgroundImage: `url(${Rectangle})`,
                  // backgroundSize: "100% 100%", // Force stretch
                  // backgroundPosition: "center",
                  // backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute bottom-[140px] left-[90px] w-20 h-20 rounded-full mb-4 "
                />

                <div className="absolute top-[100px] right-8 z-10 w-[300px] flex flex-col text-left p-2">
                  <p className="mb-4 stretch text-white text-[14px] font-normal leading-[24px] font-inter">
                    {testimonial.testimonial}
                  </p>
                  <h3 className="text-white text-[18px] font-bold leading-[28px] font-inter">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs">{testimonial.role}</p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-between gap-4 w-full mt-4">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`transition-colors ${
              current === 0
                ? "text-gray-400"
                : "text-[#252B37] hover:text-[#207C97]"
            }`}
          >
            <path
              d="M15.8335 9.99935H4.16683M4.16683 9.99935L10.0002 4.16602M4.16683 9.99935L10.0002 15.8327"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <button
            onClick={() => api?.scrollTo(current - 1)}
            disabled={current === 0}
            className={`px-4 py-2 transition-colors ${
              current === 0
                ? "text-gray-400"
                : "text-[#252B37] hover:text-[#207C97]"
            }`}
          >
            Previous
          </button>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => api?.scrollTo(current + 1)}
            disabled={current === testimonials.length - 1}
            className={`px-4 py-2 transition-colors ${
              current === testimonials.length - 1
                ? "text-gray-400"
                : "text-[#252B37] hover:text-[#207C97]"
            }`}
          >
            Next
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`transition-colors ${
              current === testimonials.length - 1
                ? "text-gray-400"
                : "text-[#252B37] hover:text-[#207C97]"
            }`}
          >
            <path
              d="M4.1665 9.99935H15.8332M15.8332 9.99935L9.99984 4.16602M15.8332 9.99935L9.99984 15.8327"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
