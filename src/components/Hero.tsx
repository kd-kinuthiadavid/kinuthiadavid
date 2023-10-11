/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  updateParentBgColor: (bgColor: string) => void;
  blendMode: string;
  updateBlendMode: (mode: string) => void;
}

const Hero = ({ updateParentBgColor, blendMode, updateBlendMode }: Props) => {
  const [textColor, setTextColor] = useState("kd-lime");
  const [bgColor, setBgColor] = useState("kd-primary");
  const [heroBlendMode, setHeroBlendMode] = useState(blendMode);
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      //   alert("HHHH");
      updateParentBgColor("bg-kd-primary");
      updateBlendMode("normal");
      setTextColor("kd-lime");
      setBgColor("kd-primary");
    }
  }, [inView]);

  useEffect(() => {
    setHeroBlendMode(blendMode);
  }, [blendMode]);

  return (
    <div
      className={`w-[80%] md:w-[75%] xl:w-[50%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7 md:gap-y-10`}
    >
      <h1
        className={`font-bold text-5xl leading-[3.5rem] md:text-8xl md:leading-[6rem] text-kd-lime mix-blend-${blendMode}`}
        ref={ref}
      >
        Building user-centric digital experiences.
      </h1>
      <h2
        className={`text-kd-lime mix-blend-${heroBlendMode} leading-[1.7rem] lg:leading-[2rem] w-[90%] md:text-lg lg:text-xl md:w-[80%]`}
      >
        Hello, my name is David Kinuthia. Am a product & user-centric frontend
        engineer based out of Nairobi, Kenya.
      </h2>
      <div className="flex gap-x-10 mt-5">
        <button
          className={`bg-kd-lime text-kd-primary mix-blend-${heroBlendMode} px-12 py-2 rounded-3xl`}
        >
          Let's chat
        </button>
        <p
          className={`text-kd-lime mix-blend-${heroBlendMode} hidden lg:block text-lg capitalize underline underline-offset-8 cursor-pointer`}
        >
          learn more
        </p>
      </div>
    </div>
  );
};

export default Hero;
