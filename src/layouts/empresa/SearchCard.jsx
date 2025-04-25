import { RocketIcon } from "lucide-react";
import React from "react";

const SearchCard = ({ title, description }) => {
  return (
    <article
      className="flex flex-col p-[24px] items-center gap-[20px] rounded-[8px] lg:max-w-[416px] min-h-[352px]
        bg-gradient-to-r from-[#8F68FC] to-[#5A189A] shadow-[0px_10px_12px_0px_#00000014]"
    >
      <div>
        <RocketIcon className="size-[40px] text-white " />
      </div>
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-white text-[26px] lg:text-[30px] font-[700] text-center">{title}</h3>
        <p className="text-white text-[18px] font-[500]">{description}</p>
      </div>
    </article>
  );
};

export default SearchCard;
