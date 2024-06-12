'use client';
import Image from "next/image";
import Link from "next/link";
import locations from "./Utils/data/locations";
import bakgrunnImage from "../../public/images/pynt/bakgrunn.jpg";
import pynt1 from "../../public/images/pynt/pynt-1.jpg";
import pynt2 from "../../public/images/pynt/pynt-2.jpg";

import { SubTitle, Title } from "./Components/Title";
import Button from "./Components/Button";
import { spacedText } from "./Utils/spacedText";

const Velkommen = () => {
  return (
    <>
      <div className="relative w-screen h-60 md:h-80 lg:h-96 sm:p-2 sm:px-2">
        <Image
          src={bakgrunnImage}
          alt="Background image"
          objectFit="cover"
          layout="fill"
          className="absolute inset-0 z-0"
        />
        <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center z-10">
          <div className="text-left backdrop-blur-xl rounded-2xl p-8 text-white">
            <h1 className="text-2xl font-bold">V E L K O M M E N</h1>
            <p className="text-md">Utforsk våre lokaliteter, lær om hva vi gjør, og bli medlem hos oss.</p>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col items-center gap-2 w-full">
        <h1 className="text-xl font-bold text-center">V E L K O M M E N</h1>
        <p className="text-lg text-center">Utforsk, lær, og bli medlem hos oss.</p>
      </div>
    </>
  );
}

const Formål = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-white py-8 px-4 md:p-8 md:rounded-s-md shadow-md lg:w-2/3 w-full">
        <SubTitle text="formål" />
        <p className="mb-4">Bymuseet i Levanger er en medlemsorganisasjon med formålet å samle, bevare, forske i og formidle kulturhistorisk materiale i og omkring Levanger Sentrum, med spesiell vekt på følgende områder:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Embedsmannskultur og arbeiderkultur, sosial- og kvinnehistorie</li>
          <li>Handels-, martnas- og byhistorie</li>
          <li>Skolebyen Levanger</li>
          <li>Bilmuseet Hveding Auto</li>
        </ul>
        <p className="mb-4">Bymuseet skal være en aktiv aktør for kulturarven i Trehusbyen Levanger. Sammen med historielaget, biblioteket, fotomuseet og andre museer skal Bymuseet bidra med følgende:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Å formidle kunnskap for å lette forståelsen av den historiske utviklingen</li>
          <li>Å samle og bevare gjenstander i autentiske miljøer</li>
          <li>Å være effektive samfunnsaktører for historieformidling i Levanger og omegn</li>
        </ul>
        <Button icon="ArrowRight_sm" text={"bli medlem"} link="/medlem" />
      </div>
      <div className="md:h-auto md:rounded-e-md h-60 lg:w-1/3 w-full relative shadow-md">
        <Image
          src={pynt1}
          alt="Sjøgata 1"
          objectFit="cover"
          layout="fill"
          className="md:rounded-e-md"
        />
      </div>
    </div>
  )
}

const Om = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:rounded-s-md md:h-auto h-60 lg:w-1/3 w-full relative shadow-md">
        <Image
          src={pynt2}
          alt="Fasade Levanger"
          objectFit="cover"
          layout="fill"
          className="md:rounded-s-md"
        />
      </div>
      <div className="bg-white py-8 px-4 md:p-8 shadow-md lg:w-2/3 w-full md:rounded-e-md">
        <SubTitle text="om oss" />
        <p className="mb-4">Bymuseet i Levanger er en medlemsorganisasjon med stor frivillig innsats og engasjement. Museet har samlet sett mye kompetanse og forvalter en viktig bygningsmasse, og en stor samling gjenstander og dokumenter. Organisasjonen har god anseelse lokalt, og har et positivt forhold til offentlige myndigheter. Bymuseet driver viktig formidling på digitale plattformer, og er en sentral aktør og samarbeidspartner under arrangement i Trehusbyen Levanger.</p>
        <p>Behovet for å styrke formidlingsaktiviteten og ønsket om å få på plass en egen hjemmeside ble drøftet under et arbeidsseminar og en strategisamling i 2023, der styret og utvalgene drøftet status, utfordringer og satsninger i årene framover. Museet eier og forvalter flere vernede og kulturhistorisk viktige bygninger, og har også samlinger som skal registreres, forvaltes og oppbevares på en forsvarlig måte.</p>
        <Button icon="ArrowRight_sm" text={"les mer"} link="/om" />
      </div>
    </div>
  )
}

const Lokaliteter = () => {
  return (
    <div className="bg-white py-8 px-4 md:p-8 md:rounded-md shadow-md w-full ">
      <Title text="lokaliteter" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
        {locations.map((location) => (
          <div key={location.id} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Link className="shadow-md rounded-md relative lg:w-96 lg:h-48 sm:w-64 sm:h-32 w-[330px] w-full h-48 overflow-hidden cursor-pointer" href={`/lokaliteter/${location.id}`}>
              <Image
                src={location.image}
                alt={location.name}
                layout="fill"
                objectFit="cover rounded-md"
              />
            </Link>
            <p className="whitespace-pre-wrap mt-2 text-sm">{spacedText(location.name)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-4 md:gap-8">
      <Velkommen />
      <Formål />
      <Om />
      <Lokaliteter />
    </main>
  );
};

export default Home;
