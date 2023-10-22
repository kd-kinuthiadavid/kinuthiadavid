import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const StaggeredAbout = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full opacity-50">
        <FaQuoteLeft className="text-2xl md:text-5xl lg:text-8xl mb-20 opacity-30" />{" "}
        <p className="w-[95%] md:w-[80%] font-bold text-lg md:text-xl lg:text-3xl text-center px-2 py-7 md:p-14">
          My journey as a frontend engineer is driven by a commitment to
          excellence in design, a flair for innovation, and a genuine passion
          for creating digital experiences that resonate with users.
        </p>{" "}
        <FaQuoteRight className="text-2xl md:text-5xl lg:text-8xl mt-20 opacity-30" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-12 gap-x-24 w-full">
        {/* communication-collaboration, frontend expertise & industry standards */}
        <div className="flex flex-col gap-y-12">
          {/* communication & collaboration */}
          <div className="flex flex-col gap-y-6 bg-kd-blue-light p-12 rounded-xl">
            <div className="flex justify-start items-end gap-x-6">
              <p className="font-semibold break-all text-5xl capitalize underline underline-offset-2">
                communication & collaboration
              </p>
            </div>
            <p className="text-lg font-medium">
              Exceptional communicator with a strong command of English,
              facilitating clear, effective communication with cross-functional
              teams.
            </p>
          </div>

          {/* frontend expertise */}
          <div className="flex flex-col gap-y-6 bg-kd-blue p-12 rounded-xl">
            <div className="flex justify-start items-end gap-x-6">
              <p className="font-semibold break-all text-5xl capitalize underline underline-offset-2">
                frontend expertise
              </p>
            </div>
            <p className="text-lg font-medium">
              Expert in React, Typescript, Vue, and web technologies (HTML, CSS,
              DOM, Web APIs), adept at crafting SaaS platforms.
            </p>
          </div>

          {/* industry standards */}
          <div className="flex flex-col gap-y-6 bg-kd-blue p-12 rounded-xl">
            <div className="flex justify-start items-end gap-x-6">
              <p className="font-semibold break-all text-5xl capitalize underline underline-offset-2">
                industry standards
              </p>
            </div>
            <p className="text-lg font-medium">
              Agile methodology expertise, Git, DevOps, and a focus on improving
              engineering standards, performance, security, and scalability.
            </p>
          </div>
        </div>

        {/*  design & UXE instincts, leadership */}
        <div className="flex flex-col gap-y-12 mt-40">
          {/* design & UXE */}
          <div className="flex flex-col gap-y-6 bg-kd-lime p-12 rounded-xl">
            <div className="flex justify-start items-end gap-x-6">
              <p className="font-semibold break-all text-5xl capitalize underline underline-offset-2">
                design & UXE instincts
              </p>
            </div>
            <p className="text-lg font-medium">
              Passionate about creating great user experiences, advocating for
              coded style guides and accessible, reliable UI components.
            </p>
          </div>

          {/* leadership */}
          <div className="flex flex-col gap-y-6 bg-kd-blue-light p-12 rounded-xl">
            <div className="flex justify-start items-end gap-x-6">
              <p className="font-semibold break-all text-5xl capitalize underline underline-offset-2">
                leadership
              </p>
            </div>
            <p className="text-lg font-medium">
              Effective leader on large projects, supports team members through
              code reviews and pair programming, and takes end-to-end ownership
              of features and product lines.
            </p>
          </div>
        </div>

        {/* fullstack experience & product-driven */}
        <div className="flex flex-col gap-y-12 mt-30">
          {/* fullstack experience */}
          <div className="flex flex-col gap-y-6 bg-kd-blue p-12 rounded-xl">
            <div className="flex justify-start items-end gap-x-6">
              <p className="font-semibold break-all text-5xl capitalize underline underline-offset-2">
                fullstack experience
              </p>
            </div>
            <p className="text-lg font-medium">
              Proficient in managing and scaling databases (relational and
              NoSQL), working with REST APIs, GraphQL, Node.js, and Python.
            </p>
          </div>

          {/* product driven */}
          <div className="flex flex-col gap-y-6 bg-kd-blue-light p-12 rounded-xl">
            <div className="flex justify-start items-end gap-x-6">
              <p className="font-semibold break-all text-5xl capitalize underline underline-offset-2">
                product driven
              </p>
            </div>
            <p className="text-lg font-medium">
              User-centric approach to project ownership, rapid iteration, and
              refinement based on alpha user feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaggeredAbout;
