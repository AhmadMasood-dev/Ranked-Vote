import React from "react";

const VotersRank = () => {
  return (
    <div>
      <section class="text-gray-600 body-font mx-auto">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-bold">
              HOW RANKED CHOICE VOTING WORKS
            </p>
            <h1 class="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-800">
              Voters rank once. Strongest support wins.
            </h1>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center hover:shadow-2xl ease-out duration-700  transition hover:-translate-y-7">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange text-white  text-3xl mb-5 flex-shrink-0">
                1
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed text-base md:m-3">
                  Each voter selects their most preferred choices on the ballot.
                  First, second, third, and so on.
                </p>
                <p class="leading-relaxed text-base">
                  In the first round, the top ranked choices are counted to
                  determine if a choice received enough votes to win.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center hover:shadow-2xl ease-out duration-700  transition hover:-translate-y-7">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-medium-sea-green text-white  text-3xl mb-5 flex-shrink-0">
                2
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p class="leading-relaxed text-base md:m-3">
                  If no choice gets enough votes to win, the choice with the
                  least votes is eliminated.
                </p>
                <p class="leading-relaxed text-base">
                  Those who voted for an eliminated choice have their vote
                  redistributed to their next choice in the following round.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center hover:shadow-2xl ease-out duration-700  transition hover:-translate-y-7">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cornflower-blue text-white  text-3xl mb-5 flex-shrink-0">
                3
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p class="leading-relaxed text-base md:m-3">
                  In the next round, the redistributed votes are added to the
                  remaining choices' totals.
                </p>
                <p class="leading-relaxed text-base">
                  The elimination and redistribution process repeats
                  automatically until a choice receives enough votes to win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VotersRank;
