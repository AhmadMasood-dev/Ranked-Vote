import React, { useState } from "react";

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      header:
        "By allowing users to test out NYC's grid-style ballot before heading to the polls, RankedVote offers voters a dynamic and engaging education in the Do's and Don'ts of RCV.",
      text: "The City of New York is a proud partner of RankedVote.”",
      name: "LAURA WOOD",
      location: "NEW YORK CITY'S CHIEF DEMOCRACY OFFICER",
      image:
        "https://assets-global.website-files.com/5d9a902248623ef932d0da66/62222ca5623baf29aa8adbf7_laura_wood_dnyc.jpeg",
    },
    {
      id: 2,
      header:
        "If your organization has any interest in RCV education, be sure to include RankedVote in your toolkit.",
      // text: "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus.",
      name: "AHMED BUTT",
      location: "CIVIC ENGAGEMENT COORDINATOR, ASIAN AMERICAN FEDERATION",
      image:
        "https://assets-global.website-files.com/5d9a902248623ef932d0da66/62222e983b4baea7130bd141_ahmed-aaf.jpeg",
    },
    {
      id: 3,
      header:
        "Our community contest received tens of thousands of votes in a matter of days. No problems. We had were promptly answered.",
      text: 'RankedVote handled the scale easily and with all the pro/premium features, there really is no other competitor."',
      name: "JAT KARUNAKARAN",
      location: "SENIOR PRODUCT MANAGER, STUDIO WILDCARD",
      image:
        "https://assets-global.website-files.com/5d9a902248623ef932d0da66/62331c47bb94d63273c2cd56_jat-studiowildcard.jpeg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative m-20 mx-auto h-100 slider bg-blue-violet">
      <div className="inset-0 py-20 slide">
        <div className="w-full h-full max-w-2xl p-8 mx-auto ">
          <h7 className="text-2xl font-bold text-white ">
            {slides[currentSlide].header}
          </h7>
          <blockquote className="mt-10 text-2xl font-medium text-white ">
            {slides[currentSlide].text}
          </blockquote>
          <address className="flex flex-col items-center mt-8 space-x-4">
            <div>
              <img
                src={slides[currentSlide].image}
                alt=""
                className="w-20 h-20 border-2 border-white border-solid rounded-full shadow-lg "
              />
            </div>
            <div className="text-center">
              <h6 className="text-xl font-medium text-lavender">
                {slides[currentSlide].name}
              </h6>
              <p className=" text-lavender">
                {slides[currentSlide].location}
              </p>
            </div>
          </address>
        </div>
      </div>

      <button
        className="absolute z-10 p-2 transition transform -translate-y-1/2 rounded-full slider__btn slider__btn--left top-1/2 left-20"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-lavender"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute z-10 p-2 transform -translate-y-1/2 rounded-full slider__btn slider__btn--right top-1/2 right-20"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-lavender"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Testimonials;
