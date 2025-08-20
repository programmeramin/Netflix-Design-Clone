import React from "react";
import Header from "./Header";
import GetStarted from "./GetStarted";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen bg-[url('./src/assets/image/banner-img.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white ">
        <div className="absolute inset-0 bg-black/60 backdrop:blur-sm">
          {/** Backdrop blur */}
            <Header />

            <div className="text-center mt-50">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Starts as USD 2.99 Cancel anytime.</h4>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
             <GetStarted/>
           </div>

          
        </div>
      </section>
    </>
  );
};

export default HeroSection;
