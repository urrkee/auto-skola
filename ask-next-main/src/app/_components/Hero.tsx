import React from "react";
import Button from "@/components/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row content-center items-center justify-center text-center lg:h-[510px] w-full gap-[80px]">
      <div className="flex flex-col content-center items-center justify-center text-left px-[64px] w-full gap-[40px]">
        <div className="flex flex-col content-center items-center justify-center text-center gap-[10px]">
          <h2 className="text-[36px] lg:text-[60px] font-extrabold text-gray-900">
            Auto Skola <span className="text-sky-700">Jugo</span>
          </h2>
          <span className=" text-[18px] lg:text-[20px] font-normal text-gray-500">
            Upisi se u Jugo da ne cekas dugo! Tri meseca do dozvole. U ponudi
            imamo polaganje za B, C i CE kategoriju. Upis se vrsi konstantno!
          </span>
        </div>
        <Link href="/prijava">
          <Button name="Prijavi Se" />
        </Link>
      </div>
      <img
        src="https://autoskolajugo.com/assets/images/slide2-edge-blur.png"
        alt="slika"
        className="lg:size-[510px] lg:w-[674px]"
      />
    </div>
  );
};

export default Hero;
