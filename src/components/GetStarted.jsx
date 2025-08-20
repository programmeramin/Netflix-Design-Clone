import { IoIosArrowForward } from "react-icons/io";
import React from "react";

const GetStarted = () => {
  return (
    <>
       <div className="mt-4">
             <div className="flex justify-center gap-2">
                  <input type="text" placeholder="Email address" className="px-4 py-3 rounded-sm font-bold bg-black/60 text-white border-white"/>
                  <div className="flex justify-center items-center bg-red-600 px-4 py-3 rounded-lg gap-2 text-xl">
                    <button className="font-bold hover:text-red-700">Get Started</button>
                       {<IoIosArrowForward/>}
                  </div>
             </div>
       </div>
    </>
  );
};

export default GetStarted;
