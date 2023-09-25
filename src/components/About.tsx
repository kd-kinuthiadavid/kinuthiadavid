import React from "react";

const About = () => {
  return (
    <div className="text-kd-soft-pink w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7">
      <h2 className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3">
        About Me
      </h2>
      <div className="flex flex-col gap-y-3.5">
        <div className="bg-kd-soft-pink w-full h-[25rem] rounded-xl"></div>
        <div className="flex flex-col md:flex-row gap-3.5 w-full">
          <div className="bg-kd-soft-pink w-full h-[20rem] rounded-xl"></div>
          <div className="bg-kd-soft-pink w-full h-[20rem] rounded-xl"></div>
        </div>
      </div>
      <p className="text-lg capitalize underline underline-offset-8 cursor-pointer">
        learn all about me
      </p>
    </div>
  );
};

export default About;
