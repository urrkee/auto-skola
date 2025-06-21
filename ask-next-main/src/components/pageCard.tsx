import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type PageCardProps = {
  img: IconProp;
  title: string;
  text: string;
};

const PageCard: React.FC<PageCardProps> = ({ img, title, text }) => {
  return (
    <div
      className={`flex flex-col text-left items-start justify-start lg:h-[172px] lg:w-[384px] gap-[20px] `}
    >
      <FontAwesomeIcon
        icon={img}
        className="size-[48px] text-indigo-500 pt-[15px]"
      />
      <div
        className={`flex flex-col text-left items-start justify-start gap-[8px] `}
      >
        <span className="text-[18px] font-[500] text-gray-900">{title}</span>
        <span className={"text-[16px] font-[400] text-gray-500 "}>{text}</span>
      </div>
    </div>
  );
};

export default PageCard;
