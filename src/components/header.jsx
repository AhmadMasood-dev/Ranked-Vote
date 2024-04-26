import React from "react";
import Logo from "./../data/index.js";
import Button from "./button.js";
const Header = () => {
  let Links = [
    { name: "Solutions", link: "/" },
    { name: "Demo", link: "/" },
    { name: "Stories", link: "/" },
    { name: "Guide", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Log in", link: "/" },
  ];
  return (
    <div className="fixed top-0 left-0 w-full shadow-md">
      <div className="flex items-center justify-between py-4 md:px-10 px-7 md:flex">
        <Logo />

        <ul className="md:flex md:items-center">
          {Links.map((link, index) => (
            <li
              key={link.name}
              className={`text-xs md:ml-8 md:my-0 my-7 ${
                index === 0 ? "border-r-2 border-gray-400 pr-4" : ""
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

          <Button />
        </ul>
      </div>
    </div>
  );
};

export default Header;
