import Image from "next/image";
import bakgrunnBilde from "../../../public/images/pynt/bakgrunn.jpg";
import { spacedText } from "../Utils/spacedText";

const Velkommen = () => {
    return (
      <>
        <div className="relative w-screen h-60 md:h-80 lg:h-96 sm:p-2 sm:px-2">
          <Image
            src={bakgrunnBilde}
            alt="Background image"
            objectFit="cover"
            layout="fill"
            className="absolute inset-0 z-0"
          />
          <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center z-10">
            <div className="text-left backdrop-blur-xl rounded-2xl p-8 text-white">
              <h1 className="text-2xl font-bold">{spacedText("velkommen")}</h1>
              <p className="text-md">Utforsk våre lokaliteter, lær om hva vi gjør, og bli medlem hos oss.</p>
            </div>
          </div>
        </div>
  
        <div className="lg:hidden my-8 flex flex-col items-center gap-2 w-full">
          <h1 className="text-lg text-green-800 font-bold text-center">{spacedText("velkommen")}</h1>
          <p className="text-md whitespace-pre-wrap">{spacedText("til bymuseet i Levanger")}</p>
        </div>
      </>
    );
  }

export default Velkommen;