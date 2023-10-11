import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ProjectsProps {
  updateHeroColors: (bg: string, text: string) => void;
}

const Projects = ({ updateHeroColors }: ProjectsProps) => {
  const [textColor, setTextColor] = useState("kd-primary");
  const [bgColor, setBgColor] = useState("kd-lime");
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      updateHeroColors("bg-kd-lime", "kd-primary");
      setTextColor("kd-primary");
      setBgColor("kd-lime");
    }
  }, [inView, entry]);

  return (
    <div
      className={`text-${textColor} w-[90%] md:w-[75%] xl:w-[50%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
    >
      <div className="flex justify-between items-center bg-kd-lime text-kd-primary p-16 rounded-xl">
        <h2
          className="font-bold text-4xl md:text-5xl md:leading-[3.5rem] mb-3"
          ref={ref}
        >
          Highlighted <br />
          projects
        </h2>
      </div>
      <div className="flex flex-col gap-y-3.5 w-full">
        <div className={`bg-${textColor} w-full h-[25rem] rounded-xl`}></div>
        <div className="flex flex-col md:flex-row gap-3.5 w-full">
          <div className={`bg-${textColor} w-full h-[20rem] rounded-xl`}></div>
          <div className={`bg-${textColor} w-full h-[20rem] rounded-xl`}></div>
        </div>
      </div>
      <p className="text-lg capitalize underline underline-offset-8 cursor-pointer">
        see all projects
      </p>
    </div>
  );
};

export default Projects;
