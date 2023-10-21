import { title } from "process";
import React, { useEffect, useState } from "react";

interface Props {
  textColor: string;
  bgColor: string;
  aspect: string;
  title: string;
  description: string;
  imageURL: string;
}
const FeaturedProject = ({
  textColor,
  bgColor,
  aspect,
  title,
  description,
  imageURL,
}: Props) => {
  return (
    <div
      className={`bg-${textColor} w-full ${aspect} h-auto rounded-xl flex flex-col gap-y-3`}
    >
      <img
        className="w-full object-cover p-2 rounded-2xl"
        src={imageURL}
        alt="projects:utterly;asynchronous communication for teams and individuals"
      />
      <div className="flex flex-col gap-y-6 p-5">
        <div className={`flex flex-col text-${bgColor} gap-y-3`}>
          <h4 className={`font-bold text-3xl`}>{title}</h4>
          <p className={`font-light text-lg`}>{description}</p>
          <div className={`flex gap-x-5 text-${textColor} mt-5`}>
            <a
              className={`bg-${bgColor} px-5 py-1 rounded-2xl hover:scale-95`}
              href="#"
            >
              Learn More
            </a>
            <a
              href="#"
              className={`text-${bgColor} text-lg underline underline-offset-8 hover:scale-95`}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
