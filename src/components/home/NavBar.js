/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "./navbar/Logo";
import { IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavBar = (props) => {
  return (
    <div className="flex z-20 left-0 top-0 items-center justify-between w-full p-2 sm:p-0">
      <Logo />

      <div className="sm:hidden inline-block">
        <IconButton
          onClick={() => props.onOpen(true)}
          isRound={true}
          variant={"blackAlpha"}
          aria-label="Search database"
          icon={<BsThreeDotsVertical />}
        />
      </div>

      <ul className="sm:flex items-center gap-4 font-medium hidden">
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
  );
};

export default NavBar;
