/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  updateParentBgColor: (bgColor: string) => void;
}

const Contact = ({ updateParentBgColor }: Props) => {
  const [textColor, setTextColor] = useState("kd-primary");
  const [bgColor, setBgColor] = useState("kd-blue");
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && entry && entry.isIntersecting) {
      updateParentBgColor("bg-kd-blue");
      setTextColor("kd-primary");
      setBgColor("kd-primary");
    }
  }, [inView, entry]);
  return (
    <div
      className={`text-${textColor} w-[90%] md:w-[75%] xl:w-[50%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
    >
      <div className="flex justify-between items-center bg-kd-blue text-kd-primary p-16 rounded-xl">
        <h2
          className={`text-${textColor} font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3 w-[80%]`}
          ref={ref}
        >
          Let's Chat
        </h2>
      </div>
      <div className="flex flex-col gap-y-3.5">
        {/* say hello  */}
        <div
          className={`bg-${bgColor} w-full min-h-[25rem] rounded-xl p-5 break-words text-3xl flex flex-col justify-center items-center`}
        >
          <h1
            className={`text-kd-blue font-bold text-6xl md:text-8xl xl:text-9xl 2xl:text-10xl`}
          >
            Say hello.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-3.5 w-full">
          {/* cold contacts */}
          <div
            className={`bg-${bgColor} h-[15rem] w-full rounded-xl p-5 lg:p-10 flex flex-col gap-y-2 justify-center items-center text-kd-blue`}
          >
            <div className="flex flex-col gap-y-2">
              <a
                className="flex items-center gap-x-2 hover:underline hover:underline-offset-8 hover:scale-95"
                href="mailto:kd.kinuthiadavid@gmail.com"
                target="_blank"
              >
                <FaArrowRightLong />
                <p className="text-md md:text-lg">kd.kinuthiadavid@gmail.com</p>
              </a>
              <a
                className="flex items-center gap-x-2 hover:underline hover:underline-offset-8 hover:scale-95"
                href="tel:+254726401183"
              >
                <FaArrowRightLong className="hover:scale-110" />
                <p className="text-md md:text-lg">+254726401183</p>
              </a>
              <a
                className="flex items-center gap-x-2 hover:underline hover:underline-offset-8 hover:scale-95"
                href="https://www.youtube.com/watch?v=xzpJAECZkc4"
                target="_blank"
                about="Learn and discover Nairobi, the capital city of Kenya."
              >
                <FaArrowRightLong />
                <p className="text-md md:text-lg">Nairobi. Kenya.</p>
              </a>
            </div>
          </div>
          <div
            className={`bg-${bgColor} text-kd-blue w-full h-[15rem] rounded-xl p-5 lg:p-10 flex flex-col justify-center items-center`}
          >
            <div className="flex flex-col gap-y-2">
              <a
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:underline-offset-8 hover:scale-95"
                href="https://www.linkedin.com/in/david-kinuthia/"
                target="_blank"
              >
                <FaArrowRightLong />
                <p className="text-md md:text-lg">LinkedIn</p>
              </a>
              <a
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:underline-offset-8 hover:scale-95"
                href="https://github.com/kd-kinuthiadavid"
                target="_blank"
              >
                <FaArrowRightLong />
                <p className="text-md md:text-lg">GitHub</p>
              </a>
              <a
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:underline-offset-8 hover:scale-95"
                href="/"
                target="_blank"
              >
                <FaArrowRightLong />
                <p className="text-md md:text-lg">Blog</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
