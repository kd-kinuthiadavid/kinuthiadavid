/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ExperienceItem from "./ExperienceItem";

interface Props {
  updateParentBgColor: (bgColor: string) => void;
}

interface Tab {
  name: string;
  isActive: boolean;
}

interface Experience {
  name: string;
  title: string;
  location: string;
  URL: string;
  description: string;
}

const Experience = ({ updateParentBgColor }: Props) => {
  const [textColor, setTextColor] = useState("kd-primary");
  const [bgColor, setBgColor] = useState("kd-yellow");
  const [tabs, setTabs] = useState<Tab[]>([
    { name: "Twende", isActive: true },
    { name: "Churpy", isActive: false },
    { name: "Apollo", isActive: false },
  ]);
  const [epxperiences, setExperiences] = useState<Experience[]>([
    {
      name: "Twende",
      title: "Frontend Engineer",
      location: "Nairobi, Kenya.",
      URL: "https://www.twende.app/",
      description: `A next generation HRIS that forms the core of
      your people stack and programmatically drives
      your people services, from time off to access
      management, payroll to benefits. Minimise time
      spent on admin using automation and
      employee self-service.`,
    },
    {
      name: "Churpy",
      title: "Senior Frontend Engineer",
      location: "Nairobi, Kenya.",
      URL: "https://churpy.co/",
      description: `A next generation HRIS that forms the core of
      your people stack and programmatically drives
      your people services, from time off to access
      management, payroll to benefits. Minimise time
      spent on admin using automation and
      employee self-service.`,
    },
    {
      name: "Apollo",
      title: "Fullstack Engineer",
      location: "North Carolina, USA.",
      URL: "https://www.apolloapi.io/",
      description: `A next generation HRIS that forms the core of
      your people stack and programmatically drives
      your people services, from time off to access
      management, payroll to benefits. Minimise time
      spent on admin using automation and
      employee self-service.`,
    },
  ]);
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    epxperiences[0]
  );

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  function selectTab(name: string) {
    const updatedTabs = tabs.map((tab, idx) => {
      if (tab.name === name) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }

      return tab;
    });

    setTabs(updatedTabs);
    setSelectedExperience(epxperiences.filter((exp) => exp.name === name)[0]);
  }

  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      updateParentBgColor("bg-kd-yellow");
      setBgColor("kd-primary");
      setTextColor("kd-primary");
    }
  }, [inView, entry]);
  return (
    <div
      className={`text-${textColor} w-[90%] md:w-[75%] xl:w-[65%] 2xl:w-[50%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
    >
      <div className="flex justify-between items-center bg-kd-yellow text-kd-primary p-16 rounded-xl">
        <h2
          className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3"
          ref={ref}
        >
          Places I've Worked
        </h2>
      </div>
      <div className="flex flex-col gap-y-3.5">
        <div
          className={`bg-kd-yellow-light w-full h-full rounded-xl flex gap-12 flex-col justify-start items-center p-10`}
        >
          <div className="flex gap-3">
            {tabs.map((tab, idx) => (
              <p
                key={idx}
                className={`font-medium text-lg capitalize opacity-40 cursor-pointer ${
                  tab.isActive && "opacity-100 underline underline-offset-4"
                }`}
                onClick={() => selectTab(tab.name)}
              >
                {tab.name}
              </p>
            ))}
          </div>
          <ExperienceItem {...selectedExperience} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
