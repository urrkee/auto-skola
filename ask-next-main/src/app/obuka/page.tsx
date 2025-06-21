import React from "react";
import NavbarHeader from "@/layout/navbarHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/layout/footer";
import HeaderTemplate from "@/layout/headerTemplate";
import {
  faBookOpen,
  faCar,
  faGraduationCap,
  faIdCard,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/card";

const cards = [
  {
    id: 1,
    img: faBookOpen,
    title: "Teorijska obuka",
    text: "Obuka počinje u učionici, teorijskom nastavom i traje onoliko časova koliko je zakonom predvidjeno za kategoriju za koju se obučavate. Čas teorijske obuke traje 45 minuta, a odmor izmedju časova najmanje 10 a najviše 30 minuta. U toku jednog kalendarskog dana kandidat može imati najviše 3 časa teorijske obuke. Na času teorijske obuke kandidat mora imati ličnu kartu ili ispis sa čipa lične karte.",
  },
  {
    id: 2,
    img: faGraduationCap,
    title: "Teorijski ispit",
    text: "Nakon završene teorijske obuke prijavljujemo polaganje ispita MUP-u. Tada Vam se dodeljuje termin za polaganje sa naznakom datuma i vremena. Teorijski ispit se polaže u našoj učionici. Teorijski ispit se sastoji od 41 pitanja dok je vreme za polaganje teorijskog dela 45 minuta. Položen teorijski ispit važi godinu i po dana i u tom vremenu se mora položiti vozački ispit.",
  },
  {
    id: 3,
    img: faCar,
    title: "Praktična obuka",
    text: "Nakon uspešno položenog teorijskog ispita započinjemo obuku vozilom u trajanju onoliko časova koliko je zakonom predvidjeno za tu kategoriju. Praktična obuka kandidata izvodi se radi sticanja praktičnih znanja i veština potrebnih za samostalno i bezbedno upravljanje vozilom u saobraćaju na putu. Kandidat u toku jednog kalendarskog dana može imati najviše dva časa praktične obuke, dok čas traje 45 minuta. Na svakom času praktične obuke kandidat mora imati ličnu kartu.",
  },
  {
    id: 4,
    img: faTrafficLight,
    title: "Praktični ispit",
    text: "Nakon završetka praktične obuke prijavljujemo ispit MUP-u, dobijamo termin sa datumom i satnicom polaganja. Praktičan deo ispita se prvo obavlja na uredjenom prostoru - poligonu, gde kandidat pokazuje osnovne veštine u upravljanju vozilom: ubrzavanje i kočenje, održavanje pravca u jednoj saobraćajnoj traci, kretanje vozilom unazad sa promenom saobraćajne trake, polukružno okretanje izmedju linija sa manevrom, parkiranje pod pravim uglom vožnjom unazad, parkiranje podužno vožnjom unazad i kretanje pod nagibom. Ukoliko kandidat položi poligonski deo ispita sledi vožnja ulicama grada ispitnom trasom. Kandidat praktični ispit završava na poligonu gde komisija koristeći bodovnu listu ocenjuje kandidata i saopštava mu rezultate praktičnog ispita.",
  },
  {
    id: 5,
    img: faIdCard,
    title: "Vozačka dozvola",
    text: "Vozačka dozvola je javna isprava nadležnog organa kojim se nekom licu daje pravo da u saobraćaju na putu upravlja vozilom odredjene kategorije na odredjeno vreme. Vozačka dozvola za upravljanje motornim vozilima izdaje se na rok važenja od 10 godina a licima starijim od 65 godina života na rok važenja do najviše 5 godina. Dozvola se može izdati i na kraće vreme na osnovu nalaza i mišljenja u uverenju o zdravstvenoj sposobnosti vozača.",
  },
];

export const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-0">
      <div className="sticky top-0 z-50">
        <NavbarHeader />
      </div>
      <HeaderTemplate
        metaTitle="NAUCI BOLJE"
        title="Postupak izvođenja obuke i polaganja"
        text="Informacije koje je bitno imati na umu vezano za izvođenje obuke od teorijske pa do prakticne, proces polaganja za dozvolu i ostale sitnice koje trebaš znati."
      />
      <div className="flex flex-col content-center text-center justify-center items-center   gap-10 pb-[48px] px-[10px]">
        {cards.map((kard) => (
          <Card
            img={kard.img}
            title={kard.title}
            text={kard.text}
            containerClassName="lg:w-[1218px] gap-[8px] px-[10px] bg-gray-50"
            textContainerClassName="px-[10px] pb-[15px]"
            key={kard.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
