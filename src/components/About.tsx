import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
interface Props {
  updateParentBgColor: (bgColor: string) => void;
}

const About = ({ updateParentBgColor }: Props) => {
  const [textColor, setTextColor] = useState("kd-primary");
  const [bgColor, setBgColor] = useState("kd-soft-pink");

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      updateParentBgColor("bg-kd-soft-pink");
      setBgColor("kd-primary");
      setTextColor("kd-primary");
    }
  }, [inView, entry]);
  return (
    <div
      className={`text-${textColor} w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
    >
      <div className="flex justify-between items-center bg-kd-soft-pink text-kd-primary p-16 rounded-xl">
        <h2
          className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3"
          ref={ref}
        >
          About Me
        </h2>
      </div>
      <div className="flex flex-col gap-y-3.5">
        <div className={`bg-${bgColor} w-full h-[25rem] rounded-xl`}></div>
        <div className="flex flex-col md:flex-row gap-3.5 w-full">
          <div className={`bg-${bgColor} w-full h-[20rem] rounded-xl`}></div>
          <div className={`bg-${bgColor} w-full h-[20rem] rounded-xl`}></div>
        </div>
      </div>
      <p className="text-lg capitalize underline underline-offset-8 cursor-pointer">
        learn all about me
      </p>
    </div>
  );
};

export default About;
