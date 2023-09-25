/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaEnvelopeCircleCheck, FaMobile, FaLinkedinIn } from "react-icons/fa6";

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
      className={`text-${textColor} w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7`}
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
        <div
          className={`bg-${bgColor} w-full h-[25rem] rounded-xl p-3 text-3xl flex flex-col justify-between`}
        >
          {/* <FaEnvelopeCircleCheck className="text-kd-primary place-self-start" />
          <p className="underline underline-offset-8 font-light break-all cursor-pointer text-7xl">
            kd.kinuthiadavid@gmail.com
          </p> */}
        </div>
        <div className="flex flex-col md:flex-row gap-3.5 w-full">
          <div
            className={`bg-${bgColor} w-full h-[15rem] rounded-xl text-3xl p-3 flex flex-col justify-between`}
          >
            {/* <FaMobile className="text-kd-primary place-self-start" />
            <p className="underline underline-offset-8 font-light break-all cursor-pointer text-7xl">
              +254726401183
            </p> */}
          </div>
          <div
            className={`bg-${bgColor} w-full h-[15rem] rounded-xl text-3xl p-3 flex flex-col justify-between`}
          >
            {/* <FaLinkedinIn className="text-kd-primary place-self-start" />
            <p className="underline underline-offset-8 font-light break-all cursor-pointer text-7xl">
              LinkedIn
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
