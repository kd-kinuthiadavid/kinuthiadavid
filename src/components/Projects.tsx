import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FeaturedProject from "./FeaturedProject";

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
      <div className="flex flex-col gap-y-3.5 w-full">
        <FeaturedProject
          textColor={textColor}
          bgColor={bgColor}
          aspect="aspect-video"
          imageURL="https://images.unsplash.com/photo-1674673353738-dc8039354dd0?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Utterly"
          description="Asynchronous voice communication for effective teams and individuals"
        />
        <div className="columns md:columns-2 gap-3">
          <div className="my-3">
            <FeaturedProject
              textColor={textColor}
              bgColor={bgColor}
              aspect="aspect-video"
              title="Author"
              description="User identity and access management"
              imageURL="https://images.unsplash.com/photo-1672080070762-764c74ee1227?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
            />
          </div>
          <div className="my-3">
            <FeaturedProject
              textColor={textColor}
              bgColor={bgColor}
              aspect="aspect-square"
              title="KUDI"
              description="UI component libray"
              imageURL="https://images.unsplash.com/photo-1696386863089-51aeac60112c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
            />
          </div>
          <div className="my-3">
            <FeaturedProject
              textColor={textColor}
              bgColor={bgColor}
              aspect="aspect-square"
              title="Readme.ai"
              description="Reliable AI assisted documentaion for your software projects"
              imageURL="https://images.unsplash.com/photo-1692651294881-05666ce21e92?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
            />
          </div>
          <div className="my-3">
            <FeaturedProject
              textColor={textColor}
              bgColor={bgColor}
              aspect="aspect-video"
              title="Invoice.me"
              description="Reliable and minimal invoicing solutions for freelancers"
              imageURL="https://images.unsplash.com/photo-1693786691337-f6954ec22145?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
            />
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
