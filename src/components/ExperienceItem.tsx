import React from "react";

interface Props {
  name: string;
  title: string;
  location: string;
  URL: string;
  description: string;
}

const ExperienceItem = ({ name, title, location, URL, description }: Props) => {
  return (
    <div className="flex flex-col justify-between gap-x-24 gap-y-6 md:flex-row w-full">
      <div className="md:w-[50%] h-[20rem] bg-kd-primary rounded-xl"></div>
      <div className="md:w-[50%] flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-1">
          <a
            href={URL}
            target="_blank"
            className="font-medium text-base underline underline-offset-4 capitalize"
          >
            {name}
          </a>
          <div>
            <p className="font-semibold text-3xl break-words">{title}</p>
            <div className="flex items-center gap-x-1">
              <small className="font-medium text-sm opacity-40">
                {location}
              </small>
            </div>
          </div>
        </div>
        <p className="font-medium text-base 2xl:text-lg">{description}</p>
        <a className="font-light text-base capitalize underline underline-offset-4 hover:scale-95">
          see full resume
        </a>
      </div>
    </div>
  );
};

export default ExperienceItem;
