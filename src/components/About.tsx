/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
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
                <span className="font-medium underline underline-offset-4">
                  over 5 years of experience
                </span>{" "}
                in frontend engineering, I'm deeply passionate about the
                intersection of technology, design, and creating seamless user
                experiences. I thrive on building and tinkering with products
                that captivate and serve users effectively. My work is a
                reflection of my obsession with understanding and translating
                user requirements into elegant, functional solutions.
              </p>
              <p className="font-light text-lg lg:text-xl">
                In terms of technical expertise, I'm well-versed in a range of
                frontend technologies, with expert proficiency in{" "}
                <span className="font-medium underline underline-offset-4">
                  React
                </span>
                ,{" "}
                <span className="font-medium underline underline-offset-4">
                  Vue
                </span>
                ,{" "}
                <span className="font-medium underline underline-offset-4">
                  TypeScript
                </span>
                , and related frameworks. Additionally, I bring the added value
                of{" "}
                <span className="font-medium underline underline-offset-4">
                  full-stack and backend experience
                </span>
                , having worked extensively with Node.js and Python.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <p className="font-bold text-lg lg:text-xl">
                My journey as a frontend engineer is driven by a commitment to
                excellence in design, a flair for innovation, and a genuine
                passion for creating digital experiences that resonate with
                users.
              </p>
              <p className="font-light  text-lg lg:text-xl">
                Let's connect and explore how I can contribute to your team and
                projects.
              </p>
              <div className="flex gap-x-6 capitalize">
                <a
                  href="mailto:kd.kinuthiadavid@gmail.com"
                  className="font-medium border border-kd-primary px-5 py-1 rounded-2xl"
                >
                  email
                </a>
                <a
                  href="mailto:kd.kinuthiadavid@gmail.com"
                  className="font-medium border border-kd-primary px-5 py-1 rounded-2xl"
                >
                  linkedIn
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
          fhjdhfjd
          </>
        )}
      </div>
    </div>
  );
};

export default About;
