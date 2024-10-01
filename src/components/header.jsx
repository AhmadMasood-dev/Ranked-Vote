import React, { useState } from "react";
import Logo from "../assets/logo.js";
import Button from "./button.js";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  let Links = [
    { name: "Solutions", link: "/" },
    { name: "Demo", link: "/" },
    { name: "Stories", link: "/" },
    { name: "Guide", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Log in", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md lg:static">
      <div className="items-center justify-between py-4 md:px-10 px-7 md:flex">
        <Logo />
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-5 md:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>
        <ul
          className={`pb-12 md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 translate-all duration-500 ease-in ${
            open ? "top-20  " : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={link.name}
              className={`text-sm md:ml-8 md:my-0 my-7 ${
                index === 0 ? "border-r-2 border-gray-400 pr-4 " : ""
              }`}
            >
              <a
                className="text-gray-800 duration-500 hover:text-gray-400"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}

          <Button>Sign Up</Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
