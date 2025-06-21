import React from "react";
type dotTextLayoutProps = {
  txt: string;
};
const dotTextLayout: React.FC<dotTextLayoutProps> = ({ txt }) => {
  return (
    <div className="flex flex-row text-start content-center justify-center items-start ">
      <p className=" relative before:absolute font-[600] text-[18px] text-gray-500 before:content-['•'] pl-[20px] before:left-0 before:top-0">
        {txt}
      </p>
    </div>
  );
};

export default dotTextLayout;
