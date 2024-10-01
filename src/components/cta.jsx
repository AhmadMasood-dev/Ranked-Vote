import React from "react";

function Cta(props) {
  return (
    <div>
      <section class="text-gray-600 body-font bg-dark-purple">
        <div class="container md:px-10 px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 class="text-xs text-lavender tracking-widest font-medium title-font mb-1">
              GET STARTED IN MINUTES...
            </h2>
            <h1 class="md:text-4xl text-2xl font-bold title-font text-white">
              Poll your voters now
            </h1>
          </div>
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-midnight-blue transition duration-700 ease-out rounded-full text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
