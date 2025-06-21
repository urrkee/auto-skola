import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type CardProps = {
  img: IconProp;
  containerClassName: string;
  textContainerClassName: string;
  title: string;
  text: string;
};
//za kategorija-b w-[384px] h-[232px] bg-gray-50 gap-[32px]
//za obuku lg:w-[1218px] gap-[8px] px-[10px] bg-gray-50
//za kategorija-c sm:w-[454px] md:w-[454px] lg:w-[454px] h-[252px] bg-gray-50 gap-[32px]

//div2 kategorija-b w-full gap-[20px] pb-[32px] px-[24px]
//div2 obuka gap-[20px] px-[10px] pb-[15px]
//div2 kategorija-c w-full gap-[20px] pb-[32px] px-[24px]

//p2 obuka lg:w-[870px] mx-auto

export const Card: React.FC<CardProps> = ({
  img,
  title,
  text,
  containerClassName,
  textContainerClassName,
}) => {
  return (
    <div
      className={`flex flex-col text-center items-center justify-center ${containerClassName} bg-gray-50 border rounded-2xl`}
    >
      <FontAwesomeIcon
        icon={img}
        className="size-[48px] text-indigo-500 pt-[15px]"
      />
      <div
        className={`flex flex-col text-center items-center justify-center gap-[20px] ${textContainerClassName}`}
      >
        <p className="text-[18px] font-[500] text-gray-900">{title}</p>
        <p className={"text-[18px] font-[400] text-gray-500 "}>{text}</p>
      </div>
    </div>
  );
};
export default Card;
