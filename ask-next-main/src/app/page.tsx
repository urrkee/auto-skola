import "./globals.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCalendarDays,
  faCheckToSlot,
  faCircleCheck,
  faClock,
  faUsersLine,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import Button from "@/components/button";
import Footer from "@/layout/footer";
import NavbarHeader from "@/layout/navbarHeader";
import Link from "next/link";
import Hero from "./_components/Hero";
import FeatureSection from "./_components/featureSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-0">
      <div className="sticky top-0 z-50">
        <NavbarHeader />
      </div>
      <div className="flex items-center justify-center text-center  flex-col lg:h-[510px]">
        <Hero />
      </div>

      <div className="flex flex-col text-center justify-center items-center w-full lg:h-[486px] pb-10 gap-[32px] bg-sky-700">
        <div className="gap-[16px] flex flex-col text-center justify-center items-center content-center pt-[40px] lg:px-[375px]">
          <p className=" text-[36px] font-extrabold text-white">
            Auto Skola Jugo
          </p>
          <p className="text-indigo-200 font-normal text-[18px]  px-[10px]">
            Auto škola Jugo se bavi obukom vozača B, C i CE kategorije. Auto
            škola Jugo je škola sa tradicijom dugom preko 30 godina, vaša
            preporuka je naša reklama. Preko 14000 zadovoljnih kandidata je
            prošlo obuku u našoj školi, teorijsku i praktičnu edukaciju
            polaznika vrše stručni komunikativni i iskusni predavači kao i
            instruktori. Posle naše obuke kandidati su spremni samostalno i
            bezbedno da upravljaju vozilom. Našu stručnost, iskustvo i
            kvalitetan rad dokazuje velika prolaznost naših kandidata kako na
            teorijskom tako i na praktičnom ispitu. Sve je lakše uz osmeh.
          </p>
        </div>
        <Link href="/prijava">
          <button
            className={`bg-white border-white hover:bg-gray-300 hover:border-gray-300 rounded-[6px] w-[136px] h-[50px]
    focus:border-sky-50 focus:outline-2 focus:outline-offset-2 focus:outline-white flex text-center items-center justify-center text-sky-700 font-medium`}
          >
            Prijavi Se
          </button>
        </Link>
      </div>

      {/* <div className="flex flex-col lg:flex-row mb:flex-col sm:flex-col md:flex-col items-center justify-center text-center w-full bg-sky-700 lg:h-[200px] lg:gap-70 sm:gap-10 md-gap-10">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <FontAwesomeIcon icon={faUsersRectangle} className="size-25" />
          <div>
            <p className="font-bold">1400</p>
            <p>Zadovoljnih kandidata</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <FontAwesomeIcon icon={faCalendarDays} className="size-25" />
          <div>
            <p className="font-bold">30</p>
            <p>Godina sa vama</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <FontAwesomeIcon icon={faClock} className="size-25" />
          <div>
            <p className="font-bold">3</p>
            <p>Meseca do dozvole</p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center justifu-center text-center ">
        <FeatureSection />
      </div>

      <div className="flex flex-col text-center justify-center items-center w-full lg:h-[386px] pb-10 gap-[32px] bg-sky-700">
        <div className="gap-[16px] flex flex-col text-center justify-center items-center content-center pt-[40px] lg:px-[375px]">
          <p className=" text-[36px] font-extrabold text-white">
            Kondiciona vožnja
          </p>
          <p className="text-indigo-200 font-normal text-[18px] px-[10px]">
            U ponudi naše škole je i kondiciona vožnja. Namenjena je svima onima
            koji nisu dugo vozili ili osećaju da nisu dovoljno spremni za
            saobraćaj, a da pri tome poseduju vozačku dozvolu. Trajanje ove
            obuke je individualno i zavisi od vas.
          </p>
        </div>
        <Link href="/prijava">
          <button
            className={`bg-white border-white hover:bg-gray-300 hover:border-gray-300 rounded-[6px] w-[136px] h-[50px]
    focus:border-sky-50 focus:outline-2 focus:outline-offset-2 focus:outline-white flex text-center items-center justify-center text-sky-700 font-medium`}
          >
            Prijavi Se
          </button>
        </Link>
      </div>

      <div className="flex flex-col text-center justify-center items-center pt-10 pb-20 px-5">
        <div className=" flex flex-col text-center justify-center items-center shadow-xl shadow-slate-900/100 rounded-xl p-10 gap-8 lg:w-[900px] bg-slate-200">
          <p className="text-black text-5xl font-semibold">
            Upis se vrši konstantno!
          </p>
          <p className="text-black text-xl">
            Naš program postavlja nove kriterijume u edukaciji vozača i stvara
            nove generacije sigurnih vozača koji će uživati u vožnji.
          </p>
          <Link href="/prijava">
            <Button name="Prijavi Se" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
