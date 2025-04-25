import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="mb-[60px]">
      <h2 className="text-[26px] lg:text-[28px] font-[700] text-center mb-[60px]">
        Testimonios
      </h2>
      <div className="overflow-hidden w-full bg-white  group ">
        <div className="flex animate-slide">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-80 mx-4">
              <TestimonialCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
