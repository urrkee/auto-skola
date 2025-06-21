import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PageButton from "./pageButton";
const navigation = [
  { id: 1, name: "Pocetna", href: "/" },
  { id: 2, name: "Obuka", href: "/obuka" },
  { id: 3, name: "B kategorija", href: "/kategorija-b" },
  { id: 4, name: "C i CE kategorija", href: "/kategorija-c" },
  { id: 5, name: "Probna Dozvola", href: "/probna-dozvola" },
  { id: 6, name: "Kontakt", href: "/kontakt" },
];

const footer = () => {
  return (
    <footer className="flex flex-col w-full h-[232px] text-center items-center justify-center bg-slate-800 gap-[34px]">
      <div className="flex flex-row gap-x-[40px] gap-y-[20px] flex-wrap justify-center">
        {navigation.map((btn) => (
          <PageButton
            name={btn.name}
            key={btn.id}
            href={btn.href}
            className="text-gray-400 font-[400] text-[16px] hover:text-white"
          />
        ))}
      </div>
      <div className="flex flex-row gap-[40px] text-center items-center justify-center">
        <FontAwesomeIcon
          icon={faInstagram}
          className="size-[24px] text-gray-400 hover:text-white"
        />
        <div className="flex flex-row text-center items-center justify-center gap-[10px]">
          <FontAwesomeIcon
            icon={faPhone}
            className="size-[18px] text-gray-400 hover:text-white"
          />
          <p className="text-gray-400 font-[400] text-[16px] hover:text-white">
            +381 63 322 425
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-[40px] text-[16px] font-[400] text-gray-400 px-[5px]">
        © 2025 Quadrition, All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
