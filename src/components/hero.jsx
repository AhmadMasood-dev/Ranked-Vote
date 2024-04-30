import React from "react";
const Hero = () => {
  return (
    <section className="text-gray-400 bg-blue-violet body-font ">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto bg-right bg-no-repeat bg-auto jus md:flex-row md:bg-hero-pattern bg-none md:bg-contain">
        <div className="flex flex-col items-center px-10 mb-16 text-center md:pr-3 lg:flex-grow md:w-1/2 pr-none lg:pr-4 md:items-start md:text-left md:mb-0">
          <p className="pl-1 text-sm font-medium text-zinc-200 title-font sm:text-xs">
            ONLINE RANKED CHOICE VOTING APP
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white title-font sm:text-5xl">
            The ranked choice platform for taking polls
            {/* <br className="hidden lg:inline-block"/>readymade gluten */}
          </h1>
          <p className="mb-8 leading-relaxed text-white md:pr-10">
            Uncover your group's preferences. Get instant results. All with
            greater accuracy and fidelity than traditional voting method.
          </p>
          <div className="flex justify-center">
            <button class="inline-flex text-white bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-full text-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-5/6 px-10 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="float-right object-cover object-center rounded "
            alt="hero"
            src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/6221413b84bca823e5a6da14_hero-ballot-no-rounded.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
