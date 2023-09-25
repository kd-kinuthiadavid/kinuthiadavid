import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ProjectsProps {
  updateParentBgColor: (bgColor: string) => void;
}

const Projects = ({ updateParentBgColor }: ProjectsProps) => {
  const [textColor, setTextColor] = useState("kd-lime");
  const [bgColor, setBgColor] = useState("kd-lime");
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      updateParentBgColor("bg-kd-lime");
      setTextColor("kd-primary");
      setBgColor("kd-primary");
    } else {
      updateParentBgColor("bg-kd-primary");
      setTextColor("kd-lime");
      setBgColor("kd-lime");
    }
  }, [inView, entry]);

  return (
    <div
      className={`transition ease-in-out delay-200 text-${textColor} w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
    >
      <h2 className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3">
        Highlighted <br />
        projects
      </h2>
      <div className="flex flex-col gap-y-3.5" ref={ref}>
        <div className={`bg-${bgColor} w-full h-[25rem] rounded-xl`}></div>
        <div className="flex flex-col md:flex-row gap-3.5 w-full">
          <div className={`bg-${bgColor} w-full h-[20rem] rounded-xl`}></div>
          <div className={`bg-${bgColor} w-full h-[20rem] rounded-xl`}></div>
        </div>
      </div>
      <p className="text-lg capitalize underline underline-offset-8 cursor-pointer">
        see all projects
      </p>
    </div>
  );
};

export default Projects;
