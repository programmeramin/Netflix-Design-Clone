import React from "react"
import { IoIosArrowForward } from "react-icons/io";

const GetStarted = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center gap-2 m-auto">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email address"
            className=" px-4 py-3 rounded-sm font-bold bg-black/60 text-white outline-1 focus:outline-none focus:border-2"
          />

          <div className="flex justify-center items-center bg-red-600 px-3 p2-3 rounded-lg gap-2 text-xl hover:bg-red-700 hover:cursor-pointer">
            <button className="font-bold px-3 hover:cursor-pointer">
              Get Started
            </button>
            {<IoIosArrowForward />}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
