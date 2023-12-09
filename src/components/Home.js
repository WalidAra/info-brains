/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Intro from "./home/Intro";
import NavBar from "./home/NavBar";
import NavOptions from "./home/NavOptions";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-auto">
      <section className="w-full h-screen overflow-x-hidden sm:p-5 p-0  text-white relative z-0 grid grid-rows-auto1fr">
        {isOpen ? <NavOptions onOpen={setIsOpen} /> : <></>}
        <NavBar onOpen={setIsOpen} />
        <div className=" info-container center_all relative bg-red-600">
          <div className="w-full z-10 h-full bg-gradient-to-t from-transparent top-0 to-primary absolute"></div>
          <Intro />
        </div>
      </section>
    </div>
  );
};

export default Home;
