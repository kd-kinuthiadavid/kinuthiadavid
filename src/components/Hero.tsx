/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = () => {
  return (
    <div className="text-kd-lime w-[80%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7 md:gap-y-10">
      <h1 className="font-bold text-5xl leading-[3.5rem] md:text-8xl md:leading-[6rem]">
        Building user-centric digital experiences.
      </h1>
      <h2 className="leading-[1.7rem] lg:leading-[2rem] w-[90%] md:text-lg lg:text-xl md:w-[80%]">
        Hello, my name is David Kinuthia. Am a product & user-centric frontend
        engineer based out of Nairobi, Kenya.
      </h2>
      <div className="flex justify-between mt-5 md:w-[45%] 2xl:w-[40%]">
        <button className="bg-kd-lime text-kd-primary px-12 py-2 rounded-3xl">
          Let's chat
        </button>
        <p className="hidden lg:block text-lg capitalize underline underline-offset-8 cursor-pointer">
          learn more
        </p>
      </div>
    </div>
  );
};

export default Hero;
