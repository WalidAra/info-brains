/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { CloseButton } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NavOptions = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="absolute top-0 bg-[#00000068] backdrop-blur-sm left-0 w-full flex justify-end h-screen z-40 p-4 ">
      <div data-aos="fade-up" className="w-3/4 z-50 absolute inline-flex  flex-col gap-3 rounded-xl bg-slate-800 text-slate-400 p-4">
        <div className="w-full flex justify-end">
          <CloseButton
            onClick={() => {
              props.onOpen(false);
            }}
          />
        </div>

        <ul className="flex flex-col gap-4 font-medium ">
          <a href="#" className=" duration-150 hover:text-secondary capitalize">
            {" "}
            <li className=""> about us </li>{" "}
          </a>
          <a href="#" className=" duration-150 hover:text-secondary capitalize">
            {" "}
            <li className=""> projects </li>{" "}
          </a>
          <a href="#" className=" duration-150 hover:text-secondary capitalize">
            {" "}
            <li className=""> events </li>{" "}
          </a>
          <a href="#" className=" duration-150 hover:text-secondary capitalize">
            {" "}
            <li className=""> our team </li>{" "}
          </a>
          <a href="#" className=" duration-150 hover:text-secondary capitalize">
            {" "}
            <li className=""> contact </li>{" "}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavOptions;
