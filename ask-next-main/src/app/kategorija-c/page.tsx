import React from "react";
import NavbarHeader from "@/layout/navbarHeader";
import { faBookOpen, faIdCard } from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/card";
import Footer from "@/layout/footer";
import HeaderTemplate from "@/layout/headerTemplate";
const cardsOne = [
  {
    id: 1,
    img: faIdCard,
    title: "Navršenih 20 godina za obuku",
    text: "Kandidat za obuku C kategorije mora imati najmanje 20 godina",
  },
  {
    id: 2,
    img: faIdCard,
    title: "Navršenih 21 godina za polaganje",
    text: "Starosni uslov za polaganje ispita za C kategoriju je 21 godina",
  },
];

const cardsTwo = [
  {
    id: 3,
    img: faIdCard,
    title: "B kategorija",
    text: "Kandidat mora posedovati vozačku dozvolu B kategorije najmanje 2 godine",
  },
  {
    id: 4,
    img: faIdCard,
    title: "Posedovanje lične karte",
    text: "Kandidat mora da poseduje važeću ličnu kartu da bi se izvršio upis",
  },
];

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-0">
      <div className="sticky top-0 z-50">
        <NavbarHeader />
      </div>
      <HeaderTemplate
        metaTitle="NAUCI BOLJI"
        title="C i CE kategorija"
        text="Pod C kategorijom smatraju se motorna vozila čija je najveća dozvoljena masa veća od 3500 kg."
      />
      <hr className="border-t-2 border-gray-300 lg:w-[850px] md:w-[700px] sm:w-[550px] w-full mx-auto pb-[48px]" />
      <div className="flex flex-col content-center text-center items-center justify-center pb-[20px] px-[40px]">
        <p className="text-gray-800 font-[800] text-[36px]">
          Uslovi za upis C kategorije
        </p>
      </div>
      <div className="flex flex-col content-center text-center justify-center items-center flex-wrap  gap-10 pb-[48px] px-[10px]">
        <div className="flex flex-col lg:flex-row content-center text-center justify-center items-center flex-wrap  gap-10 px-[10px]">
          {cardsOne.map((kard) => (
            <Card
              img={kard.img}
              title={kard.title}
              text={kard.text}
              containerClassName="sm:w-[454px] md:w-[454px] lg:w-[454px] h-[252px] bg-gray-50 gap-[32px]"
              textContainerClassName="pb-[32px] px-[24px]"
              key={kard.id}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row content-center text-center justify-center items-center flex-wrap  gap-10 px-[10px]">
          {cardsTwo.map((kard) => (
            <Card
              img={kard.img}
              title={kard.title}
              text={kard.text}
              containerClassName="sm:w-[454px] md:w-[454px] lg:w-[454px] h-[252px] bg-gray-50 gap-[32px]"
              textContainerClassName="pb-[32px] px-[24px]"
              key={kard.id}
            />
          ))}
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 lg:w-[850px] md:w-[700px] sm:w-[550px] w-full mx-auto " />
      <div className="flex flex-col content-center lg:text-right justify-center items-center">
        <div className="flex flex-col lg:flex-row content-center lg:text-right justify-center items-center pt-[48px] lg:gap-[20px] gap-[48px] pb-[48px] lg:h-[500px]">
          <div className="flex flex-col content-center text-left justify-start items-start lg:w-[692px] gap-[12px] px-[40px] h-full">
            <p className="text-gray-900 text-[30px] font-[800] ">
              Obuka vozača C kategorije
            </p>
            <p className="text-gray-500 text-[18px] font-[400]">
              Obuka za C kategoriju se sastoji iz 7 časova teorijske obuke, koja
              je uslov za prijavu i polaganje teorijskog ispita. Posle položenih
              testova za C kategoriju kandidat kreće sa praktičnom obukom C
              kategorije od 15 časova, nakon čega sledi praktičan ispit C
              kategorije. Optimalno vreme za završetak teorijske i praktične
              obuke i prijavu ispita je mesec dana. Maksimum je 3 časa teorijske
              nastave i 2 časa praktične obuke dnevno. Uslov za početak
              praktične obuke C kategorije je položen teorijski ispit i važeće
              lekarsko uverenje C kategorije.
            </p>
          </div>
          <img
            src="https://autoskolajugo.com/assets/images/truck-edge-blur.png  "
            alt=""
            className="w-[492px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row content-center lg:text-right justify-center items-center pt-[48px] lg:gap-[20px] gap-[48px] pb-[48px] lg:h-[500px]">
          <div className="flex flex-col content-center text-left justify-start items-start lg:w-[592px] gap-[12px] px-[40px] h-full">
            <p className="text-gray-900 text-[30px] font-[800] ">
              Praktičan ispit C kategorije
            </p>
            <p className="text-gray-500 text-[18px] font-[400]">
              Praktičan ispit C kategorije se sastoji iz poligonskih vežbi (na
              uređenom parkingu) i vožnjom u saobraćaju. Kandidat slučajnim
              izborom bira jedan od 15 ispitnih zadataka. Nakon toga sledi
              ocenjivanje njegovih vozačkih sposobnosti. Ispitnu komisiju čine
              dva ispitivača, jedan je ispitivač MUP-a, a drugi je ispitivač iz
              auto škole. Ukoliko jedan od ispitivača kandidata oceni negativnom
              ocenom (NIJE POLOŽIO), a drugi ispitivač da prolaznu ocenu
              (POLOŽIO), kandidat po pravilniku dobija konačnu ocenu NIJE
              POLOŽIO. Ukoliko kandidat kod oba ispitivača na kraju ispita
              dobije prolaznu ocenu (POLOŽIO) ispit je uspešno završen.
            </p>
          </div>
          <div className="flex flex-col content-center text-left justify-start items-start lg:w-[592px] gap-[12px] px-[40px] h-full">
            <p className="text-gray-900 text-[30px] font-[800]">
              Obuka vozača za CE kategoriju
            </p>
            <p className="text-gray-500 text-[18px] font-[400]">
              U CE kategoriju spada upravljanje vozilom (kamionom sa prikolicom)
              čije vučno vozilo (kamion) pripada C kategoriji (čija je masa veća
              od 3.5 tone), a najveća masa priključnog vozila (prikolice) je
              veća od 750 kg. Kandidat mora da ima 21 godinu i novu vozačku
              dozvolu C kategorije. Teorijske obuke nema, a teorijski ispit se
              ne polaže. Pravilnikom je predvidjena obuka u trajanju od 7 časova
              i polaganje praktičnog ispita.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
