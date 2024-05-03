import React from "react";

const Organizatons = () => {
  return (
    <main className="my-10">
      <div className="text-xl text-center text-gray-400 text-bold">
        <p>TRUSTED BY TOP ORGANIZATIONS </p>
      </div>

      <div className="grid self-center grid-cols-3 mx-auto mt-12 place-items-center sm:grid-cols-4 md:grid-cols-5 ">
        <div className="p-4 transition duration-200 grayscale hover:grayscale-0">
          <img
            src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/65327213500e83c79137c8f3_Adobe_Corporate_logo.svg-p-500.png"
            className="w-auto h-12 mx-auto"
            loading="lazy"
            alt="client logo"
            width=""
            height=""
          />
        </div>
        <div className="p-4 transition duration-200 grayscale hover:grayscale-0">
          <img
            src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/62839f54abd622565aaa9a60_Studio_Wildcard_logo.png"
            className="w-auto h-12 mx-auto"
            loading="lazy"
            alt="client logo"
            width=""
            height=""
          />
        </div>
        <div className="flex p-4 transition duration-200 grayscale hover:grayscale-0">
          <img
            src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/653272ef82fc6cc93feecdca_target-logo.png"
            className="w-auto m-auto h-9"
            loading="lazy"
            alt="client logo"
            width=""
            height=""
          />
        </div>
        <div className="p-4 transition duration-200 grayscale hover:grayscale-0">
          <img
            src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/653273d916c87698a51c53fb_Grafana_logo.svg.png"
            className="w-auto h-12 mx-auto"
            loading="lazy"
            alt="client logo"
            width=""
            height=""
          />
        </div>
        <div className="p-4 transition duration-200 grayscale hover:grayscale-0">
          <img
            src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/6532743e7d7e6d9f4fcf0248_Spotify_Logo_CMYK_Green-p-500.png"
            className="w-auto h-12 mx-auto"
            loading="lazy"
            alt="client logo"
            width=""
            height=""
          />
        </div>
      </div>
    </main>
  );
};

export default Organizatons;
