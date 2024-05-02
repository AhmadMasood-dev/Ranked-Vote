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
            {/* <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span class="title-font font-medium">Google Play</span>
              </span>
            </button> */}
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
