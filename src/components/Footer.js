import { FaFacebook, FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full sm:flex-row p-4 sm:p-0 gap-4 sm:gap-0 flex-col flex justify-around overflow-hidden text-white items-center  border-t relative border-slate-800  z-0">
      <div className=" z-10">
        <p>infoBrains@gmail.com</p>
      </div>

      <div className="flex items-center gap-4 z-10 p-5 relative">
        <div className="absolute  opacity-25 h-full w-full left-0 rounded-full bg-secondary blur-2xl"></div>
        <div className="text-2xl">
          <FaFacebook />
        </div>
        <div className="text-2xl">
          <AiFillInstagram />
        </div>
        <div className="text-2xl">
          <FaDiscord />
        </div>
      </div>

      <div className="flex items-center gap-3 z-10">
        <p className="capitalize">Terms of use</p>
        <p className="capitalize">privacy policy</p>
      </div>
    </div>
  );
}
