import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Statistic(props) {
  return (
    <div>
      <section class="text-gray-600 body-font mt-20">
        <div class="flex flex-wrap w-full mb-10 md:mb-2 flex-col items-center text-center ">
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-bold">
            WHY RANKED CHOICE VOTING WORKS
          </p>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Better decisions, faster.
          </h1>
        </div>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap md:px-5 -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <div class="leading-relaxed">
                Any time you're making a decision with more than two choices,
                ranked choice voting is the right tool for the job. It uncovers
                your audience's preferences with greater accuracy and fidelity
                than traditional voting methods.{" "}
                <a href="/" className="underline text-blue-violet-2 ">
                  Create a poll
                </a>{" "}
                to see how.
              </div>
              <p className="leading-relaxed text-gray-400 lg:w-auto text-bold md:my-2">
                KEY ADVANTAGES OF RANKED CHOICE VOTING
              </p>
              <div className="md:px-2">
                <div className="flex flex-row items-center ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-medium-sea-green"
                  />{" "}
                  <p className="ml-2 md:ml-4">
                    Determines the choices with the strongest support
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-medium-sea-green"
                  />{" "}
                  <p className="ml-2 md:ml-4">
                    Eliminates the need for multiple decision rounds
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-medium-sea-green"
                  />{" "}
                  <p className="ml-2 md:ml-4">Reduces vote gaming</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/6222880f64c1fb5616d6ea30_results-final-round.svg"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistic;
