import React from "react";

type HeaderTemplateProps = {
  metaTitle: string;
  title: string;
  text: string;
};

const headerTemplate: React.FC<HeaderTemplateProps> = ({
  metaTitle,
  title,
  text,
}) => {
  return (
    <div className="flex flex-col content-center text-center justify-center bg-white w-full h-full pt-[35px] gap-[20px] pb-[48px] px-[10px]">
      <div className="flex flex-col content-center text-center justify-center gap-[8px]">
        <span className="text-[16px] font-[600] text-indigo-600">
          {metaTitle}
        </span>
        <h1 className="text-gray-800 font-[800] text-[36px]">{title}</h1>
      </div>

      <span className="text-gray-500 text-[20px] font-[400] lg:w-[813px] mx-auto">
        {text}
      </span>
    </div>
  );
};

export default headerTemplate;
