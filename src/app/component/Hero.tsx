import React, { Ref } from "react";
import { constantsData } from "../utils/constants";
import { TypeAnimation } from "react-type-animation";
import { useScrollContext } from "../utils/scrollContext";
import { DownloadOutlined } from "@ant-design/icons";

type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
  id: string;
};

const Hero = (props: Props) => {
  const { scrollToElement } = useScrollContext();

  return (
    <div
      className="h-full md:h-screen mt-[10%] md:mt-0"
      ref={props.elementRef}
      id={props.id}>
      <h1 className="text-white font-poppins text-[50px] md:text-[100px] font-semibold leading-[70px] md:leading-[120px] uppercase">
        <TypeAnimation
          sequence={[
            "Software", // Types 'One'
            2000, // Waits 1s
            "Frontend", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "React Native", // Types 'Three' without deleting 'Two'
            2000, // Waits 2s
            "React", // Types 'Three' without deleting 'Two'
            2000, // Waits 2s
            "NextJS", // Types 'Three' without deleting 'Two'
            2000, // Waits 1s

            () => {},
          ]}
          wrapper="span"
          // cursor={true}
          repeat={Infinity}
          // style={{ fontSize: "2em", display: "inline-block" }}
        />
      </h1>
      <h1 className="text-secondary font-poppins text-[50px] md:text-[100px] font-semibold leading-[70px] md:leading-[120px] uppercase">
        <TypeAnimation
          sequence={[
            "Engineer", // Types 'One'
            12000, // Waits 1s
            "Developer", // Deletes 'One' and types 'Two'
            12000, // Waits 1s

            () => {},
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          // style={{ fontSize: "2em", display: "inline-block" }}
        />
      </h1>{" "}
      <p className="text-lg font-poppins text-gray-400 w-full md:w-[80%]">
        Passionate about building intuitive and high-performance web and mobile
        applications, specializing in React, Next.js, and React Native to
        transform ideas into seamless digital experiences.
      </p>
      <div className="flex items-center mt-8 gap-x-8">
        <div className="w-[80px] h-[100px] flex flex-col justify-between">
          <p className="text-[50px] md:text-[70px] leading-[60px] text-white font-semibold font-poppins">
            {constantsData.yearsOfExperience}+
          </p>
          <p className="text-gray-400 text-[12px] leading-[15px] text-left w-full uppercase font-medium font-poppins">
            YEARS OF EXPERIENCE
          </p>
        </div>
        <div className="w-[80px] h-[100px] flex flex-col justify-between">
          <p className="text-[50px] md:text-[70px] leading-[60px] text-white font-semibold font-poppins">
            {constantsData.numberOfProject}+
          </p>
          <p className="text-gray-400 text-[12px] leading-[15px] text-left w-full uppercase font-medium font-poppins">
            Project contributed
          </p>
        </div>
      </div>
      <div className="flex items-start md:items-center flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 my-6 md:my-0">
        <button
          className="hidden group bg-buttonBackground rounded-[10px] w-full md:w-[200px] h-[55px] my-4 md:flex"
          onClick={() => scrollToElement(constantsData.section.contact)}>
          <p className="group-hover:opacity-100 opacity-0 group-hover:translate-y-4 -translate-y-2 translate-x-16 font-poppins text-white transition-all ease-in-out font-semibold ">
            Let's talk
          </p>
          <p className=" group-hover:opacity-0 opacity-100 group-hover:translate-y-8 translate-y-4 font-poppins text-white transition-all ease-in-out font-semibold -translate-x-2">
            Let's talk
          </p>
        </button>
        <button
          className="group bg-buttonBackground rounded-[10px] w-full md:w-[200px] h-[55px] my-4 flex md:hidden justify-center items-center"
          onClick={() => scrollToElement(constantsData.section.contact)}>
          <p className="  font-poppins text-white font-semibold ">
            Let's talk
          </p>
        
        </button>
        <button className="group bg-gray-800 rounded-[10px] w-full md:w-[200px] h-[55px] my-4 flex justify-center items-center">
          <a
            href="/Resume (Ogundipe P. Hassan).pdf"
            download={"Ogundipe-Hassan(Frontend)"}
            className="flex justify-between items-center space-x-4">
            <p className="font-poppins text-white font-semibold">Download CV</p>
            <DownloadOutlined style={{ fontSize: 24, color: "white" }} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
