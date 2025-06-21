import React from "react";
import NavbarHeader from "@/layout/navbarHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./components/form";
import Footer from "@/layout/footer";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-0">
      <div className="sticky top-0 z-50">
        <NavbarHeader />
      </div>
      <div className="flex flex-col lg:flex-row content-center text-center lg:items-start items-center justify-center pt-[24px] px-[71px] gap-[77px] lg:w-full">
        <div className="flex flex-col content-center text-center lg:items-start items-center  justify-center h-full ">
          <h1 className="text-[36px] font-[800] text-[#000000]">
            Auto škola Jugo
          </h1>
          <div className="flex flex-col content-center text-center lg:items-start items-center lg:justify-start justify-center gap-[6px] ">
            <div className="flex flex-row content-center lg:items-start items-center lg:justify-start justify-center  pb-[7px] flex-wrap lg:w-[512px]">
              <p className="text-[20px] font-[400] text-gray-500 lg:w-[512px] lg:text-start">
                Slobodno nam pošaljite poruku, potrudićemo se da odgovirmo u što
                bržem roku
              </p>
            </div>
            <div className="flex flex-row content-center text-center items-center justify-center gap-[7px]">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="size-[18px] text-gray-500"
              />
              <p className="text-[18px] font-[400] text-gray-500">
                Stražilovska 7 21000 Novi Sad
              </p>
            </div>

            <div className="flex flex-row content-center text-center items-center justify-center gap-[7px]">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="size-[18px] text-gray-500"
              />
              <p className="text-[18px] font-[400] text-gray-500">
                jugoautoskola@gmail.com
              </p>
            </div>

            <div className="flex flex-row content-center text-center items-center justify-center gap-[7px]">
              <FontAwesomeIcon
                icon={faPhone}
                className="size-[18px] text-gray-500"
              />
              <p className="text-[18px] font-[400] text-gray-500">
                Saša Bajić +381 63322 425
              </p>
            </div>
          </div>
          <div className="flex flex-row content-center text-center items-center justify-center pt-[12px] pb-[34px] w-full">
            <Form />
          </div>
        </div>
        <div className="flex flex-row content-center text-center items-center justify-center pb-[24px] lg:pb-[0px] h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1340.2173872540773!2d19.846630766363027!3d45.25132853308297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b113d789680bd%3A0x1a2f643cd1bf636f!2sAuto%20%C5%A1kola%20Jugo!5e0!3m2!1sen!2srs!4v1747993106175!5m2!1sen!2srs"
            loading="lazy"
            className="border border-gray-400 rounded-2xl lg:h-[600px] h-[450px] lg:w-[400px]"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
