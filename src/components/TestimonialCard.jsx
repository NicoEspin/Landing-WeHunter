import React from "react";

const TestimonialCard = () => {
  return (
    <article
      className="py-[40px] px-[20px] flex flex-col items-center border border-[#E0E0E0]
    max-w-[350px] min-h-[342px] gap-[10px] rounded-[8px]"
    >
      <img
        src="./testimonial.jpg"
        alt="testimonial user"
        className="w-[50px] h-[50px] rounded-full"
      />
      <p className="text-text text-[16px] italic font-[500]">
        "Con WeHunter pudimos cubrir vacantes rápido y sin pasar por procesos
        eternos. En pocos días teníamos perfiles validados, listos para avanzar.
        Es simple, claro y mucho más eficiente."
      </p>
      <p className="text-text text-[16px] font-[700]">
        — Norma, dueña de una PyME industrial
      </p>
    </article>
  );
};

export default TestimonialCard;
