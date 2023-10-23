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
      updateHeroColors("bg-kd-lime", "text-kd-primary");
      setTextColor("kd-primary");
      setBgColor("kd-lime");
    }
  }, [inView, entry]);

  return (
    <div
      className={`text-${textColor} w-[90%] md:w-[75%] xl:w-[60%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
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
      <div className="flex flex-col items-center justify-center gap-y-28 px-2 py-5 md:py-10 w-full h-full bg-kd-blue-light rounded-xl">
        {/* utterly */}
        <div className="flex flex-col lg:flex-row gap-y-12 justify-between w-[90%] lg:w-[80%]">
          {/* description */}
          <div className="flex flex-col lg:w-[50%] gap-y-10 justify-center">
            <div className="flex flex-col gap-y-3">
              <p className="font-black text-lg lg:text-xl underline underline-offset-8">
                utterly
              </p>
              <p className="font-semibold text-3xl lg:text-5xl">
                Asynchronous voice communication for effective teams and
                individuals.
              </p>
            </div>
            <div className="flex flex-col items-center w-full lg:flex-row gap-x-6 gap-y-3">
              <a
                className="flex justify-center items-center capitalize border border-kd-primary px-5 py-1 rounded-3xl text-sm font-semibold hover:scale-95 w-full lg:w-auto"
                href="#"
              >
                Launch Project
              </a>
              <a
                className="capitalize underline underline-offset-4 hover:scale-95"
                href="#"
              >
                view on github
              </a>
            </div>
          </div>
          {/* card */}
          <div className="lg:w-[50%] flex flex-col lg:items-end lg:justify-center">
            <div className="bg-kd-primary lg:w-[70%] h-[30rem] rounded-2xl"></div>
          </div>
        </div>

        {/* invoice.me */}
        <div className="flex flex-col lg:flex-row-reverse gap-y-12 justify-between w-[95%] lg:w-[80%]">
          {/* description */}
          <div className="flex flex-col lg:w-[50%] gap-y-10 justify-center">
            <div className="flex flex-col gap-y-3">
              <p className="font-black text-lg lg:text-xl underline underline-offset-8">
                invoice.me
              </p>
              <p className="font-semibold text-3xl lg:text-5xl">
                Reliable and intuitive invoicing for freelancers.
              </p>
            </div>
            <div className="flex flex-col items-center w-full lg:flex-row gap-x-6 gap-y-3">
              <a
                className="flex justify-center items-center capitalize border border-kd-primary px-5 py-1 rounded-3xl text-sm font-semibold hover:scale-95 w-full lg:w-auto"
                href="#"
              >
                Launch Project
              </a>
              <a
                className="capitalize underline underline-offset-4 hover:scale-95"
                href="#"
              >
                view on github
              </a>
            </div>
          </div>
          {/* card */}
          <div className="lg:w-[50%] flex flex-col lg:items-start lg:justify-center">
            <div className="bg-kd-primary lg:w-[70%] h-[30rem] rounded-2xl"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-12 justify-between w-[95%] lg:w-[80%]">
          {/* description */}
          <div className="flex flex-col lg:w-[50%] gap-y-10 justify-center">
            <div className="flex flex-col gap-y-3">
              <p className="font-black text-lg lg:text-xl underline underline-offset-8">
                readme.ai
              </p>
              <p className="font-semibold text-3xl lg:text-5xl">
                Rapid AI-assisted documentation for your software projects.
              </p>
            </div>
            <div className="flex flex-col items-center w-full lg:flex-row gap-x-6 gap-y-3">
              <a
                className="flex justify-center items-center capitalize border border-kd-primary px-5 py-1 rounded-3xl text-sm font-semibold hover:scale-95 w-full lg:w-auto"
                href="#"
              >
                Launch Project
              </a>
              <a
                className="capitalize underline underline-offset-4 hover:scale-95"
                href="#"
              >
                view on github
              </a>
            </div>
          </div>
          {/* card */}
          <div className="lg:w-[50%] flex flex-col lg:items-end lg:justify-center">
            <div className="bg-kd-primary lg:w-[70%] h-[30rem] rounded-2xl"></div>
          </div>
        </div>
      </div>
      <p className="text-lg capitalize underline underline-offset-8 cursor-pointer hover:scale-95">
        see all projects
      </p>
    </div>
  );
};

export default Projects;
