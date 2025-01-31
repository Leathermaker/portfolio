import React, { useEffect, useState } from "react";
import { TypingAnimation } from "./UI/TypingAnimation";

const Main = () => {
  const arrText = ["UI/UX Designer", "Developer.", "Professional Coder."];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % arrText.length);
    }, 3000); // Change text every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className=" w-full px-30 grid gap-30 grid-cols-2  ">
      <div className="w-full   sm:h-screen xl:h-[50rem] p-20 gap-5 flex flex-col h-screen">
        <h1 className="text-md">WELCOME TO MY WORLD</h1>
        <h1 className="text-[60px] font-bold flex gap-4">
          Hi, I'm{" "}
          <div className="text-[#ff014f]">
            <h1>Jone Lee</h1>
          </div>
        </h1>
        <div className="flex items-center">
          <h1 className="flex gap-4 items-center text-5xl font-bold">
            a{" "}
            <TypingAnimation className="text-5xl">
              {arrText[currentIndex]}
            </TypingAnimation>
          </h1>
        </div>
        <div className="flex flex-wrap  w-[41rem] text-lg">
          <h1>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </h1>
        </div>
        <div className="gap-10 relative flex justify-end ">
          <div className="btn w-14 flex relative justify-center items-center hover:scale-110 duration-700 h-16">
            {/* Glowing Background Effect */}
            <span className="absolute  flex border text-[3rem]   blur-xl text-white  font-extrabold select-none filter drop-shadow-[0_0_20px_#3b82f6]">
				f
            </span>

            {/* Foreground Text */}
            <h1 className="relative top-0  justify-center text-4xl flex items-center text-white  font-extrabold text-center select-auto  shadow-blue-500">
              f
            </h1>
          </div>
          <div className="btn w-14 flex relative justify-center duration-700 hover:scale-110 items-center hover:bg-black h-16">
            {/* Glowing Background Effect */}
            <span className="absolute  flex border text-[3rem]  blur-xl text-white  font-extrabold select-none filter drop-shadow-[0_0_20px_#3b82f6]">
              X
            </span>

            {/* Foreground Text */}
            <h1 className="relative top-0  justify-center text-4xl flex items-center text-white  font-extrabold text-center select-auto  shadow-blue-500">
              X
            </h1>
          </div>
          <div className="btn w-14 flex relative duration-700 justify-center hover:scale-110 items-center hover:bg-black h-16">
            {/* Glowing Background Effect */}
            <span className="absolute  flex border text-[3rem]  blur-xl text-white  font-extrabold select-none filter drop-shadow-[0_0_20px_#3b82f6]">
              in
            </span>

            {/* Foreground Text */}
            <h1 className="relative top-0  justify-center text-4xl flex items-center text-white  font-extrabold text-center select-auto  shadow-blue-500">
              in
            </h1>
          </div>

        </div>
      </div>
      <div className=" flex justify-center items-center relative">
        <div className="w-[28vw]  h-[60vh]   neuro-shadow relative top-12">
          {" "}<img
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
            className="relative bottom-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
