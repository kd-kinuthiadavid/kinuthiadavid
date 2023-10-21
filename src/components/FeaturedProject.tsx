import React, { useEffect, useState } from "react";

interface Props {
  textColor: string;
  background: string;
}
const FeaturedProject = ({ textColor, background }: Props) => {
  const [bgColor, setBgColor] = useState("kd-lime");
  useEffect(() => {
    console.log("??? background ???", background);
    if (background) {
      setBgColor(background.replace("bg-", ""));
    }
  }, [background]);
  return (
    <div
      className={`bg-${textColor} w-full aspect-video h-full rounded-xl flex flex-col gap-y-3`}
    >
      <img
        className="w-full m=h-[50%] object-cover p-2 rounded-2xl"
        src="https://images.unsplash.com/photo-1674673353738-dc8039354dd0?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="projects:utterly;asynchronous communication for teams and individuals"
      />
      <div className="flex flex-col gap-y-6 mb-5 p-5">
        <div className={`flex flex-col text-${bgColor} gap-y-3`}>
          <h4 className={`font-bold text-3xl`}>Utterly</h4>
          <p className={`font-light text-lg`}>
            Asynchronous voice communication for effective teams and
            indivuduals.
          </p>
          {/* <div className={`flex gap-x-2 text-${textColor} mt-5`}>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>
              featured
            </p>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>AI</p>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>NextJs</p>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>
              Typescript
            </p>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>NodeJs</p>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>ML</p>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>NestJs</p>
            <p className={`bg-${bgColor} px-3 rounded-xl capitalize`}>
              Assembly AI
            </p>
          </div> */}
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
