import React, { Ref } from "react";
import { constantsData } from "../utils/constants";
import Image from "next/image";

type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
  id: string;
};
type SkillsProps = {
  url: string;
  name: string;
  description: string;
};
const skills = [
  {
    url: "/react-icon.png",
    name: "React",
    description: "Frontend(Web)",
  },
  {
    url: "/react-native.png",
    name: "React Native",
    description: "Frontend(Mobile)",
  },
  {
    url: "/typescript.png",
    name: "Typescript",
    description: "Frontend(Web)",
  },
  {
    url: "/javascript.png",
    name: "Javascript",
    description: "Frontend",
  },
  {
    url: "/next-js.png",
    name: "Next",
    description: "Frontend",
  },

  {
    url: "/firebase.png",
    name: "Firebase",
    description: "Backend",
  },
  {
    url: "/tailwind-css.svg",
    name: "Tailwind",
    description: "Styling",
  },
  {
    url: "/redux.png",
    name: "Redux",
    description: "Styling",
  },
];
const SkillsItem = (props: SkillsProps) => {
  return (
    <div className="flex items-start space-x-4 my-4">
      <div className="relative w-[60px] h-[60px] rounded-[10px] bg-white flex justify-center items-center">
        <Image
          src={props.url}
          alt=""
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="h-full">
        <p className="text-[24px] font-semibold text-white font-poppins">
          {props.name}
        </p>
        <p className="text-[16px] font-normal text-white font-poppins">
          {props.description}
        </p>
      </div>
    </div>
  );
};

const Skills = (props: Props) => {
  return (
    <div
      className="h-full md:h-screen mt-[10%]  md:px-0"
      ref={props.elementRef}
      id={props.id}>
      <h1 className="text-white font-poppins text-[50px] md:text-[70px] font-semibold leading-[70px] md:leading-[90px] uppercase w-full md:w-[400px]">
        Skills {/* <span className="text-secondary"></span>{" "} */}
      </h1>

      <div className="grid place-items-start grid-cols-1 md:grid-cols-2 w-full ">
        {skills.map((data) => (
          <SkillsItem {...data} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
