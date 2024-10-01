import React from "react";

const Button = (props) => {
  return (
    <button className="px-6 py-2 md:px-4 md:py-1 text-white duration-500 bg-indigo-600 rounded-full font-xs md:ml-8 hover:bg-indigo-800 lg:font-[5px]">
      {props.children}
    </button>
  );
};

export default Button;
