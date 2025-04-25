import React from "react";

const HowWorksCard = ({ number, title, description, height = "347px" }) => {
  return (
    <article
      className="p-[20px] flex flex-col gap-[10px] rounded-[8px] border border-[#E0E0E0] max-w-[500px] items-center"
      style={{ height }}
    >
      <div>
      <h4 className="text-white text-[20px] font-[500] bg-primary rounded-full w-[50px] h-[50px] flex justify-center items-center">
        {number}
      </h4>
      </div>
      <h3 className="text-text text-[16px] font-[700]">{title}</h3>
      <p className="text-text text-[16px] font-500">{description}</p>
    </article>
  );
};

export default HowWorksCard;
