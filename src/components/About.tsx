/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

import StaggeredAbout from "./StaggeredAbout";
interface Props {
  background: string;
  updateParentBgColor: (bgColor: string) => void;
}

const About = ({ updateParentBgColor, background }: Props) => {
  const [textColor, setTextColor] = useState("kd-primary");
  const [bgColor, setBgColor] = useState("kd-soft-pink");
  const [ctaTextColor, setCtaTextColor] = useState("text-kd-soft-pink");
  const [activeTab, setActiveTab] = useState("tldr");

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  function activateTLDRTab() {
    return setActiveTab("tldr");
  }

  function activateTSWMTab() {
    return setActiveTab("tswm");
  }

  const currentDate = new Date();
  const year2018 = new Date(2018, 0, 1); // January 1, 2018

  const yearsDifference = currentDate.getFullYear() - year2018.getFullYear();

  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      updateParentBgColor("bg-kd-soft-pink");
      setBgColor("kd-primary");
      setTextColor("kd-primary");
    }
  }, [inView, entry]);

  useEffect(() => {
    setCtaTextColor(background.replace("bg-", "text-"));
  }, [background]);
  return (
    <div
      className={`text-${textColor} w-[90%] xl:w-[70%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
    >
      <div className="flex justify-between items-center bg-kd-soft-pink text-kd-primary p-16 rounded-xl">
        <h2
          className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3"
          ref={ref}
        >
          About Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-6 justify-between gap-x-14 w-full">
        <div className="flex lg:flex-col gap-6">
          <h3
            className={`uppercase font-semibold underline underline-offset-4 text-xl lg:text-2xl cursor-pointer hover:scale-95 ${
              activeTab !== "tldr" && "opacity-25"
            }`}
            onClick={activateTLDRTab}
          >
            tldr.
          </h3>
          <h3
            className={`uppercase font-semibold underline underline-offset-4 text-xl lg:text-2xl cursor-pointer hover:scale-95 ${
              activeTab !== "tswm" && "opacity-25"
            }`}
            onClick={activateTSWMTab}
          >
            tswm.
          </h3>
        </div>
        {activeTab === "tldr" ? (
          <>
            <div className="flex flex-col gap-y-6">
              <p className="font-light text-lg lg:text-xl">
                With{" "}
                <span className="font-medium">
                  {yearsDifference}+ years in frontend engineering,
                </span>{" "}
                I'm deeply passionate about the fusion of tech and design for
                seamless user experiences. I thrive on crafting captivating
                user-centric products; obsessively translating requirements into
                elegant and functional solutions.
              </p>
              <p className="font-light text-lg lg:text-xl">
                In terms of technical expertise, I excel in a range of frontend
                technologies, with mastery in{" "}
                <span className="font-medium">React, Vue, Typescript</span>, and
                related frameworks. Furthermore, I offer{" "}
                <span className="font-medium">
                  full-stack and backend proficiency
                </span>
                , gained through extensive work with Node.js and Python.
              </p>
              <p
                className="hidden lg:block text-lg capitalize underline underline-offset-8 cursor-pointer hover:scale-95"
                onClick={activateTSWMTab}
              >
                learn all about me
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex justify-center items-center">
                <p className="w-[95%] md:w-[80%] font-bold text-lg md:text-xl lg:text-2xl text-center lg:text-left  opacity-40">
                  My journey as a frontend engineer is driven by a commitment to
                  excellence in design, a flair for innovation, and a genuine
                  passion for creating digital experiences that resonate with
                  users.
                </p>
              </div>
              <p className="font-light  text-lg lg:text-xl">
                Let's connect and explore how I can contribute to your team and
                projects.
              </p>
              <div className="flex justify-center items-center flex-wrap gap-y-3 w-full md:w-auto gap-x-6 capitalize">
                <a
                  href="mailto:kd.kinuthiadavid@gmail.com"
                  className="flex justify-center items-center font-medium border border-kd-primary px-2 md:px-5 md:py-1 rounded-2xl w-full md:w-auto"
                  target="_blank"
                >
                  email
                </a>
                <a
                  href="https://www.linkedin.com/in/david-kinuthia/"
                  className="flex justify-center items-center font-medium border border-kd-primary px-2 md:px-5 md:py-1 rounded-2xl w-full md:w-auto"
                  target="_blank"
                >
                  linkedIn
                </a>
                <p
                  className="lg:hidden text-lg capitalize underline underline-offset-8 cursor-pointer hover:scale-95 w-full md:w-auto text-center"
                  onClick={activateTSWMTab}
                >
                  learn all about me
                </p>
              </div>
            </div>
          </>
        ) : (
          <StaggeredAbout />
        )}
      </div>
    </div>
  );
};

export default About;
