import React from "react";
import NavbarHeader from "@/layout/navbarHeader";
import Form from "./components/form";
import Footer from "@/layout/footer";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-0">
      <div className="sticky top-0 z-50">
        <NavbarHeader />
      </div>
      <div className="flex flex-col content-center text-center items-center justify-center bg-white w-full h-full pt-[35px] gap-[20px] pb-[48px] px-[40px]">
        <div className="flex flex-col content-center text-center justify-center gap-[8px]">
          <p className="text-[16px] font-[600] text-indigo-600">NAUCI BOLJE</p>
          <h1 className="text-gray-800 font-[800] text-[36px]">Prijava</h1>
        </div>

        <p className="text-gray-500 text-[20px] font-[400] lg:w-[813px] mx-auto">
          Pošaljite nam vašu prijavu, potrudićemo se da odgovorimo u što bržem
          roku
        </p>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default page;
