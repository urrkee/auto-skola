import React from "react";
import NavbarHeader from "@/layout/navbarHeader";
import DotTextLayout from "./components/dotTextLayout";
import Footer from "@/layout/footer";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-0">
      <div className="sticky top-0 z-50">
        <NavbarHeader />
      </div>
      <div className="flex flex-col content-center text-center items-center justify-center pb-[35px] px-[10px]">
        <div className="flex flex-col content-center text-center items-center justify-center bg-white w-full h-full pt-[35px] gap-[20px] pb-[48px] px-[40px]">
          <div className="flex flex-col content-center text-center justify-center gap-[8px]">
            <p className="text-[16px] font-[600] text-indigo-600">
              NAUCI BOLJE
            </p>
            <h1 className="text-gray-800 font-[800] text-[36px]">
              Probna vozačka dozvola - Član 182
            </h1>
          </div>
        </div>
        <div className="flex flex-col text-start content-center justify-center items-center gap-[24px] lg:w-[830px] bg">
          <div className="flex flex-col text-start content-center justify-center items-start w-full gap-[6px]">
            <p className="font-[600] text-[18px] text-gray-500 ">
              Probna vozačka dozvola izdaje se licu koje prvi put položi vozački
              ispit za upravljanje motornim vozilima kategorija A1, A2, A, B1 i
              B sa rokom važenja:
            </p>
            <div className="flex flex-col pl-[25px] text-center content-center justify-center items-start w-full gap-[6px]">
              <DotTextLayout txt="Dve godine licima koja su položila vozački ispit sa navršenih 19 godina života" />
              <DotTextLayout txt="Do navršene 21. godine života svim licima koja su položila vozački ispit pre navršene 19. godine života" />
            </div>
          </div>
          <p className="font-[600] text-[18px] text-gray-500 ">
            Izuzetno od ovog člana, učenicima srednjih stručnih škola, koji se
            obrazuju za obrazovni profil vozač motornih vozila i koji su
            položili vozački ispit za upravljanje vozilima C i CE kategorije,
            probna vozačka dozvola za upravljanje vozilom kategorije B izdaje se
            sa rokom važenja od jedne godine.
          </p>
          <p className="font-[600] text-[18px] text-gray-500 ">
            Ako lice nakon isteka roka važenja probne vozačke dozvole položi
            ispit za vozača vozila jedne od ostalih kategorija iz stava 1. ovog
            člana, izdaće mu se vozačka dozvola u skladu sa odredbama člana 179.
            ovog zakona.
          </p>
          <div className="flex flex-col text-start content-center justify-center items-start w-full gap-[6px]">
            <p className="font-[600] text-[18px] text-gray-500 ">
              Vozač koji ima probnu vozačku dozvolu ne sme da:
            </p>
            <div className="flex flex-col text-start content-center justify-center items-start w-full gap-[6px] pl-[25px]">
              <p className="font-[600] text-[18px] text-gray-500 ">
                1. Upravlja vozilom brzinom većom od:
              </p>
              <div className="flex flex-col pl-[25px] text-center content-center justify-center items-start w-full gap-[6px]">
                <DotTextLayout txt="Na autoputu 110km/h" />
                <DotTextLayout txt="Na motoputu 90km/h" />
                <DotTextLayout txt="Na ostalim putevima brzinom većom od 90% brzine koja je dozvoljena na delu puta kojim se kreće" />
              </div>
              <p className="font-[600] text-[18px] text-gray-500 ">
                2. Otpočne i upravlja motornim vozilom ukoliko ima u organizmu
                alkohola odnosno psihoaktivnih supstanci
              </p>
              <p className="font-[600] text-[18px] text-gray-500 ">
                3. Upravlja motornim vozilom u periodu od 23:00-06:00h
              </p>
              <p className="font-[600] text-[18px] text-gray-500 ">
                4. Za vreme vožnje koristi telefon, odnosno druge uređaje za
                komunikaciju, odnosno opremu koja omogućava telefoniranje bez
                angažovanja ruku
              </p>
              <p className="font-[600] text-[18px] text-gray-500 ">
                5. Upravlja vozilom kategorije B čija snaga motora prelazi 80kW,
                osim ako je pod nadzorom člana porodice, koji se nalazi u tom
                vozilu i koji ima važeću vozačku dozvolu za upravljanje vozilom
                kategorije B u trajanju od najmanje 5 godina
              </p>
            </div>
          </div>
          <p className="font-[600] text-[18px] text-gray-500 ">
            Vozač koji ima probnu vozačku dozvolu za upravljanje vozilom
            kategorije B, dok ne navrši 18 godina života, ne sme da upravlja
            vozilom bez nadzora lica koje se nalazi u tom vozilu i koje ima
            važeću vozačku dozvolu za upravljanje vozilom kategorije B u
            trajanju od najmanje pet godina.
          </p>
          <p className="font-[600] text-[18px] text-gray-500 ">
            Vozač iz stava 6. ovog člana može prevoziti najviše tri lica,
            uključujući i lice koje vrši nadzor.
          </p>
          <p className="font-[600] text-[18px] text-gray-500 ">
            Lice koje vrši nadzor iz stava 6. ovog člana dužno je da se stara da
            vozač vozilom upravlja na bezbedan način i u skladu sa propisima.
          </p>
          <p className="font-[600] text-[18px] text-gray-500 ">
            Motorno vozilo, kojim upravlja vozač koji ima probnu vozačku
            dozvolu, mora biti označeno posebnom oznakom „P”, koja mora biti na
            vidljivom mestu sa prednje i zadnje strane vozila.
          </p>
          <p className="font-[600] text-[18px] text-gray-500 ">
            Ministar nadležan za poslove saobraćaja propisuje posebne uslove o
            izgledu, tehničkim karakteristikama i načinu postavljanja posebne
            oznake iz stava 9. ovog člana.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
