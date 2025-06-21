"use client";

import React, { useState } from "react";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "@/components/button";
import PageButton from "./pageButton";
const btns = ["Pocetna", "Obuka", "Kategorije", "Probna Dozvola", "Kontakt"];
const navigation = [
  { id: 1, name: "Pocetna", href: "/" },
  { id: 2, name: "Obuka", href: "/obuka" },
  { id: 3, name: "Kategorije", href: "/kategorija-b" },
  { id: 4, name: "Probna Dozvola", href: "/probna-dozvola" },
  { id: 5, name: "Kontakt", href: "/kontakt" },
];
const navigationDropDown = [
  { id: 1, name: "Pocetna", href: "/" },
  { id: 2, name: "Obuka", href: "/obuka" },
  { id: 3, name: "B Kategorija", href: "/kategorija-b" },
  { id: 4, name: "C i CE Kategorija", href: "/kategorija-c" },
  { id: 5, name: "Probna Dozvola", href: "/probna-dozvola" },
  { id: 6, name: "Kontakt", href: "/kontakt" },
];

const navbarHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-row w-full h-[64px] bg-slate-800 text-center items-center pl-[71px] justify-between">
        <img
          alt=""
          src="https://autoskolajugo.com/assets/images/favicon.png"
          className="h-12 pl-[10px] w-auto transition duration-300 hover:shadow-lg hover:shadow-black rounded"
        />

        <div className=" hidden lg:flex lg:flex-row text-center items-center  pl-[71px] w-full">
          <div className="lg:flex lg:flex-1  text-center items-center gap-[16px] pl-[24px] pt-[14px] pb-[14px]">
            {navigation.map((btn) => (
              <PageButton
                name={btn.name}
                key={btn.id}
                href={btn.href}
                className="  hover:bg-gray-900 text-gray-400 hover:text-white rounded-[6px] px-[12px] py-[8px]"
              />
            ))}
          </div>
          <div className="flex lg:flex lg:flex-1 lg:justify-end pr-[71px]">
            <Link href="/prijava">
              <Button name="Prijavi se" />
            </Link>
          </div>
        </div>
        {mobileMenuOpen === false ? (
          <div className="flex lg:hidden pr-[71px]">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
            >
              <span className="sr-only">Otvori glavni meni</span>
              <Bars3Icon
                aria-hidden="true"
                className="h-[40px] w-[40px] text-gray-400"
              />
            </button>
          </div>
        ) : (
          <div className="flex lg:hidden pr-[71px]">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Zatvori meni</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-[40px] w-[40px] text-gray-400"
              />
            </button>
          </div>
        )}
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6  sm:ring-gray-900/10 md:w-[376px] sm:w-[376px] ">
          <div className="flex items-center justify-between h-[64px] pb-12">
            <Link href="/" className=" ">
              <span className="sr-only">Auto Škola Jugo</span>
              <img
                alt=""
                src="https://autoskolajugo.com/assets/images/favicon.png"
                className="w-auto h-12 pl-[57px] sm:pl-[71px] mdpl-[71px]  md:hidden sm:hidden "
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md  text-gray-700 pr-[71px]"
            >
              <span className="sr-only">Zatvori meni</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-[40px] w-[40px] text-gray-400 "
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationDropDown.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-900 hover:text-sky-700 pl-[68px]
                      transition duration-300 hover:shadow-lg hover:shadow-sky-700 "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  href="/prijava"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-300 hover:bg-gray-900 hover:text-sky-700 pl-[68px]"
                >
                  Prijavi Se
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default navbarHeader;
