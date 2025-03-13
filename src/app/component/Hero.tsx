import React, { Ref } from "react";
import { constantsData } from "../utils/constants";
import { TypeAnimation } from "react-type-animation";
type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
};

const Hero = (props: Props) => {
  return (
    <div className="h-screen" ref={props.elementRef}>
      <h1 className="text-white font-poppins text-[100px] font-semibold leading-[120px] uppercase">
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

            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          // cursor={true}
          // repeat={Infinity}
          // style={{ fontSize: "2em", display: "inline-block" }}
        />
      </h1>
      <h1 className="text-secondary font-poppins text-[100px] font-semibold leading-[120px] uppercase">
        <TypeAnimation
          sequence={[
            "Engineer", // Types 'One'
            12000, // Waits 1s
            "Developer", // Deletes 'One' and types 'Two'

            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          // repeat={Infinity}
          // style={{ fontSize: "2em", display: "inline-block" }}
        />
      </h1>{" "}
      <p className="text-lg font-poppins text-gray-400 w-[60%]">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      <div className="flex items-center mt-8 gap-x-8">
        <div className="w-[80px] h-[100px] flex flex-col justify-between">
          <p className="text-[70px] leading-[60px] text-white font-semibold font-poppins">
            {constantsData.yearsOfExperience}+
          </p>
          <p className="text-gray-400 text-[12px] leading-[15px] text-left w-full uppercase font-medium font-poppins">
            YEARS OF EXPERIENCE
          </p>
        </div>
        <div className="w-[80px] h-[100px] flex flex-col justify-between">
          <p className="text-[70px] leading-[60px] text-white font-semibold font-poppins">
            {constantsData.numberOfProject}
          </p>
          <p className="text-gray-400 text-[12px] leading-[15px] text-left w-full uppercase font-medium font-poppins">
            Project contributed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
