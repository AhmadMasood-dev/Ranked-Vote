import React from "react";

const PictureData = () => {
  return (
    <div>
      <div class="bg-indigo-300 h-148 flex justify-center ">
        <img
          class="object-cover w-3/4 "
          src="https://assets-global.website-files.com/5d9a902248623ef932d0da66/6229072b20cf583c1ab3bdb6_Embed-Grid-Vote-Green%20(2).svg"
          alt=""
        />
      </div>
      <div class="bg-dark-purple mb-10  md:pt-10 m-auto text-center items-center  ">
        <div className="flex m-auto font-extrabold text-white md:flex md:p-20 md:justify-evenly felx-col ">
          <div className="">
            <h3 className="text-5xl text-center ">51,471</h3>
            <div className="text-center">
              <p>Elections created</p>
            </div>
            <br />
          </div>
          <div className="">
            <h3 className="text-5xl text-center ">1,260,285</h3>
            <div className="text-center">
              <p>Voters</p>
            </div>
            <br />
          </div>
          <div className="">
            <h3 className="text-5xl text-center ">270,615</h3>
            <div className="text-center">
              <p>Candidates ranked</p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureData;
