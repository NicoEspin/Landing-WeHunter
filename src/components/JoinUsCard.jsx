import React from "react";

const JoinUsCard = ({ number, title, description, text }) => {
  return (
    <article className="flex flex-col gap-[12px] max-w-[665px]">
      <div className="flex flex-col lg:flex-row gap-[12px] justify-center items-center
      lg:justify-start">
       <div>
        <h4
          className="text-primary text-[20px] font-[500] border border-primary rounded-full w-[50px] 
            h-[50px] flex justify-center items-center "
        >
          {number}
        </h4>
        </div>
        <h3 className="text-text text-[26px] lg:text-[28px] font-[700] text-center lg:text-start">
          {title}
        </h3>
      </div>
      <p className="text-nav text-[18px] font-[500]">{description}</p>
      <p className="text-primary text-[20px] lg:text-[24px] py-[16px]">
        {text}
      </p>
    </article>
  );
};

export default JoinUsCard;
