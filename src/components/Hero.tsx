/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  updateHeroColors: (bg: string, text: string) => void;
  parentTextColor: string;
  parentBgColor: string;
}

const Hero = ({ updateHeroColors, parentTextColor, parentBgColor }: Props) => {
  const [textColor, setTextColor] = useState("text-kd-lime");
  const [bgColor, setBgColor] = useState("text-kd-primary");
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  console.log("###### bgColor #####", bgColor)
  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      setTextColor("text-kd-lime");
      setBgColor("bg-kd-primary");
      updateHeroColors("bg-kd-primary", "text-kd-lime");
    }
  }, [inView]);

  useEffect(() => {
    setTextColor(parentTextColor);
  }, [parentTextColor]);

  useEffect(() => {
    setBgColor(parentBgColor.replace("bg-", ""));
  }, [parentBgColor]);

  useEffect(() => {
   console.log("@@@ Hero: textcolor changed @@@@", textColor)
  }, [textColor]);

  return (
    <div
      className={`w-[80%] md:w-[75%] xl:w-[50%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7 md:gap-y-10 ${textColor}`}
    >
      <h1
        className={`font-bold text-5xl leading-[3.5rem] md:text-8xl md:leading-[6rem]`}
        ref={ref}
      >
        Building user-centric digital experiences.
      </h1>
      <h2
        className={`leading-[1.7rem] lg:leading-[2rem] w-[90%] md:text-lg lg:text-xl md:w-[80%] `}
      >
        Hello, my name is David Kinuthia. Am a product & user-centric frontend
        engineer based out of Nairobi, Kenya.
      </h2>
      <div className="flex gap-x-10 mt-5">
        <button
          className={`bg-${textColor.replace("text-", "")} text-${bgColor} px-12 py-2 rounded-3xl hover:scale-95`}
        >
          Let's chat
        </button>
        <p
          className={`hidden lg:block text-lg capitalize underline underline-offset-8 cursor-pointer hover:scale-95`}
        >
          learn more
        </p>
      </div>
    </div>
  );
};

export default Hero;
