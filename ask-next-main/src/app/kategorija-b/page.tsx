import React from "react";
import NavbarHeader from "@/layout/navbarHeader";
import { faBookOpen, faIdCard } from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/card";
import Footer from "@/layout/footer";
import HeaderTemplate from "@/layout/headerTemplate";
const cards = [
  {
    id: 1,
    img: faBookOpen,
    title: "Navršenih 16 godina",
    text: "Potrebno je da je kandidat navršio 16 godina života do početka obuke",
  },
  {
    id: 2,
    img: faIdCard,
    title: "Posedovanje lične karte",
    text: "Kandidat mora da poseduje važeću ličnu kartu da bi se izvršio upis",
  },
];
//B kategorija
//Pod B kategorijom smatraju se motorna vozila čija masa nije veća od
// 3500 kg i koja nemaju više od 8 mesta za sedenje, ne računajući
// sedište vozača.
const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-0">
      <div className="sticky top-0 z-50">
        <NavbarHeader />
      </div>
      <HeaderTemplate
        metaTitle="NAUCI BOLJE"
        title="B Kategorija"
        text="Pod B kategorijom smatraju se motorna vozila čija masa nije veća od 3500 kg i koja nemaju više od 8 mesta za sedenje, ne računajući sedište vozača."
      />
      <hr className="border-t-2 border-gray-300 lg:w-[850px] md:w-[700px] sm:w-[550px] w-full mx-auto pb-[48px]" />
      <div className="flex flex-col content-center text-center items-center justify-center pb-[20px] px-[40px]">
        <p className="text-gray-800 font-[800] text-[36px]">
          Uslovi za upis B kategorije:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row content-center text-center justify-center items-center   gap-10 pb-[48px] px-[10px]">
        {cards.map((kard) => (
          <Card
            img={kard.img}
            title={kard.title}
            text={kard.text}
            key={kard.id}
            containerClassName="w-[384px] h-[232px] bg-gray-50 gap-[32px]"
            textContainerClassName="pb-[32px] px-[24px]"
          />
        ))}
      </div>
      <hr className="border-t-2 border-gray-300 lg:w-[850px] md:w-[700px] sm:w-[550px] w-full mx-auto " />

      <div className="flex flex-col lg:flex-row content-center text-left justify-center items-center pt-[48px] lg:gap-[20px] gap-[48px] pb-[48px]">
        <div className="flex flex-col content-center text-left justify-start items-start lg:w-[592px] gap-[12px] px-[40px] h-full">
          <p className="text-gray-900 text-[30px] font-[800] ">
            Obuka vozača B kategorije
          </p>
          <p className="text-gray-500 text-[18px] font-[400]">
            Obuka vozača B kategorije se sastoji od 40 časova teorijske i 40
            časova praktične obuke. Teorijska obuka B kategorije je obavezna i
            kandidat mora biti prisutan na svim časovima teorijske nastave.
            Kandidat dnevno može imati najviše tri časa teorijske obuke. Nastava
            i polaganje teorijskog ispita za B kategoriju se obavlja u
            prostorijama auto škole. Kandidat dnevno može imati maksimalno dva
            časa praktične obuke B kategorije. Najkraći rok za koji se moze
            završiti obuka B kategorije je 2 meseca. Časovi se prilagodjavaju
            slobodnom vremenu kandidata, instruktori su na raspolaganju od
            7-22h.
          </p>
        </div>
        <img
          src="https://autoskolajugo.com/assets/images/car2-edge-blur.png"
          alt=""
          className="w-[492px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row content-center lg:text-right justify-center items-center pt-[48px] lg:gap-[20px] gap-[48px] pb-[48px]">
        <img
          src="https://autoskolajugo.com/assets/images/car1-edge-blur.png"
          alt=""
          className="w-[492px] hidden lg:block"
        />
        <div className="flex flex-col content-center lg:text-right justify-start lg:items-end lg:w-[592px] gap-[12px] px-[40px] h-full">
          <p className="text-gray-900 text-[30px] font-[800]">
            Praktičan ispit B kategorije
          </p>
          <p className="text-gray-500 text-[18px] font-[400]">
            Praktičan ispit B kategorije se sastoji iz poligonskih vežbi (na
            uređenom parkingu) i vožnjom u saobraćaju. Kandidat slučajnim
            izborom bira jedan od 15 ispitnih zadataka. Nakon toga sledi
            ocenjivanje njegovih vozačkih sposobnosti. Ispitnu komisiju čine dva
            ispitivača, jedan je ispitivač MUP-a, a drugi je ispitivač iz auto
            škole. Ukoliko jedan od ispitivača kandidata oceni negativnom ocenom
            (NIJE POLOŽIO) a drugi ispitivač da prolaznu ocenu (POLOŽIO),
            kandidat po pravilniku dobija konačnu ocenu NIJE POLOŽIO. Ukoliko
            kandidat kod oba ispitivača na kraju ispita dobije prolaznu ocenu
            (POLOŽIO) ispit je uspešno završen.
          </p>
        </div>
        <img
          src="https://autoskolajugo.com/assets/images/car1-edge-blur.png"
          alt=""
          className="w-[492px] lg:hidden "
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
