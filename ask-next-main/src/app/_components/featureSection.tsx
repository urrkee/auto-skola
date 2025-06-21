import {
  faBook,
  faClock,
  faIdCard,
  faMoneyCheckDollar,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "@/components/card";
import PageCard from "@/components/pageCard";
const cardsOne = [
  {
    id: 1,
    img: faSquareCheck,
    title: "Znanje",
    text: "Svaki naš kandidat postaje siguran, uspešan i bezbedan vozač",
  },
  {
    id: 2,
    img: faSquareCheck,
    title: "Kvalitet",
    text: "Obuku naših kandidata vrše obrazovani i licencirani instruktori",
  },
];

const cardsTwo = [
  {
    id: 3,
    img: faSquareCheck,
    title: "Efikasnost",
    text: "Omogućavamo našim kandidatima da za 3 meseca završe obuku i postanu vozači",
  },
  {
    id: 4,
    img: faSquareCheck,
    title: "Cena",
    text: "Najpovoljniji uslovi, mogućnost plaćanja na rate i administrativnom zabranom",
  },
];

const FeatureSection = () => {
  const dots = Array.from({ length: 100 });
  return (
    <div className="flex flex-col lg:flex-row lg:text-left lg:items-start lg:justify-start text-center items-center justify-center gap-[32px] w-full pt-[48px] px-[71px]">
      <h3 className="text-gray-900 text-[36px] font-extrabold ">
        Auto škola <span className="text-sky-700">Jugo</span> nudi:
      </h3>
      <div className="flex flex-col content-center text-center justify-center items-center flex-wrap  gap-10 pb-[48px] px-[10px]">
        <div className="flex flex-col lg:flex-row content-center text-center justify-center items-center flex-wrap  gap-10 px-[10px]">
          {cardsOne.map((kard) => (
            <PageCard
              img={kard.img}
              title={kard.title}
              text={kard.text}
              key={kard.id}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row content-center text-center justify-center items-center flex-wrap  gap-10 px-[10px]">
          {cardsTwo.map((kard) => (
            <PageCard
              img={kard.img}
              title={kard.title}
              text={kard.text}
              key={kard.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
