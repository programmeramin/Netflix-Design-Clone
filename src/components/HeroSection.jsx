import React from "react"
import BgImage from "../assets/image/banner-img.jpg";
import GetStarted from "./GetStarted";
import Header from "./Header";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white "
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop:blur-sm">
          {/** Backdrop blur */}
          <Header />

          <div className="text-center mt-50 w-[60%] m-auto flex flex-col  md:flex-">
            <h1 className="font-extrabold text-5xl sm:text-4xl mb-3">
              Unlimited movies, TV shows, and more
            </h1>
            <h4 className="text-2xl font-bold mb-3">
              Starts as USD 2.99 Cancel anytime.
            </h4>
            <p className="text-xl font-semi-bold sm:text-sm sm:font-bold mb-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
              <GetStarted />
         
          </div>

        </div>   
      </section>
    </>
  );
};

export default HeroSection;
