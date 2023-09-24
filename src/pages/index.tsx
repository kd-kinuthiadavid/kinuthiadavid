/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Quicksand } from "next/font/google";
import { FaEnvelopeCircleCheck, FaMobile, FaLinkedinIn } from "react-icons/fa6";

const quickSand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin", "vietnamese"],
});

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-kd-primary flex flex-col gap-y-10 md:gap-y-20 items-center pb-10 ${quickSand.className}`}
    >
      {/* hero section */}
      <div className="text-kd-lime w-[80%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7 md:gap-y-10">
        <h1 className="font-bold text-5xl leading-[3.5rem] md:text-8xl md:leading-[6rem]">
          Building user-centric digital experiences.
        </h1>
        <h2 className="leading-[1.7rem] lg:leading-[2rem] w-[90%] md:text-lg lg:text-xl md:w-[80%]">
          Hello, my name is David Kinuthia. Am a product & user-centric frontend
          engineer based out of Nairobi, Kenya.
        </h2>
        <div className="flex justify-between mt-5 md:w-[45%] 2xl:w-[40%]">
          <button className="bg-kd-lime text-kd-primary px-12 py-2 rounded-3xl">
            Let's chat
          </button>
          <p className="hidden md:block text-lg capitalize underline underline-offset-8 cursor-pointer">
            learn more
          </p>
        </div>
      </div>

      {/* projects */}
      <div className="text-kd-lime w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7">
        <h2 className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3">
          Highlighted <br />
          projects
        </h2>
        <div className="flex flex-col gap-y-3.5">
          <div className="bg-kd-lime w-full h-[25rem] rounded-xl"></div>
          <div className="flex flex-col md:flex-row gap-3.5 w-full">
            <div className="bg-kd-lime w-full h-[20rem] rounded-xl"></div>
            <div className="bg-kd-lime w-full h-[20rem] rounded-xl"></div>
          </div>
        </div>
        <p className="text-lg capitalize underline underline-offset-8 cursor-pointer">
          see all projects
        </p>
      </div>

      {/* About */}
      <div className="text-kd-soft-pink w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7">
        <h2 className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3">
          About Me
        </h2>
        <div className="flex flex-col gap-y-3.5">
          <div className="bg-kd-soft-pink w-full h-[25rem] rounded-xl"></div>
          <div className="flex flex-col md:flex-row gap-3.5 w-full">
            <div className="bg-kd-soft-pink w-full h-[20rem] rounded-xl"></div>
            <div className="bg-kd-soft-pink w-full h-[20rem] rounded-xl"></div>
          </div>
        </div>
        <p className="text-lg capitalize underline underline-offset-8 cursor-pointer">
          learn all about me
        </p>
      </div>

      {/* Experience */}
      <div className="text-kd-yellow w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7">
        <h2 className="font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3">
          Places I've Worked
        </h2>
        <div className="flex flex-col gap-y-3.5">
          <div className="bg-kd-yellow w-full h-[25rem] rounded-xl"></div>
          <div className="flex flex-col md:flex-row gap-3.5 w-full">
            <div className="bg-kd-yellow w-full h-[20rem] rounded-xl"></div>
            <div className="bg-kd-yellow w-full h-[20rem] rounded-xl"></div>
          </div>
        </div>
        <p className="text-lg capitalize underline underline-offset-8 cursor-pointer">
          see full resume
        </p>
      </div>

      {/* Contact */}
      <div className="text-kd-primary w-[90%] md:w-[45%] 2xl:w-[40%] pt-32 2xl:pt-40 flex flex-col gap-y-7">
        <h2 className="text-kd-lime font-semibold text-4xl md:text-5xl md:leading-[3.5rem] mb-3 w-[80%]">
          Let's Chat
        </h2>
        <div className="flex flex-col gap-y-3.5">
          <div className="bg-kd-lime w-full h-[25rem] rounded-xl p-3 text-3xl flex flex-col justify-between">
            <FaEnvelopeCircleCheck className="text-kd-primary place-self-start" />
            <p className="underline underline-offset-8 font-light break-all cursor-pointer text-7xl">
              kd.kinuthiadavid@gmail.com
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3.5 w-full">
            <div className="bg-kd-lime w-full h-[15rem] rounded-xl text-3xl p-3 flex flex-col justify-between">
              <FaMobile className="text-kd-primary place-self-start" />
              <p className="underline underline-offset-8 font-light break-all cursor-pointer text-7xl">
                +254726401183
              </p>
            </div>
            <div className="bg-kd-lime w-full h-[15rem] rounded-xl text-3xl p-3 flex flex-col justify-between">
              <FaLinkedinIn className="text-kd-primary place-self-start" />
              <p className="underline underline-offset-8 font-light break-all cursor-pointer text-7xl">
                LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
