import Image from "next/image";
import React, { Ref } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
};

const ProjectCard = () => {
  return (
    <div className="bg-gray-800 w-full cursor-pointer flex items-start space-x-4 p-4 rounded-[10px] transition-all ease-in-out bg-opacity-20 hover:bg-opacity-100 relative">
      {/* Image */}
      {/* Content */}
      <div className="relative w-[200px] h-[200px] rounded-[10px]">
        <Image
          src={"/Screenshot 2025-03-11 at 18.42.33.png"}
          fill
          alt=""
          className="object-cover w-full h-full rounded-[10px]"
        />
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 font-semibold font-poppins text-[24px] leading-[30px]">
          Name:
          <span className=" text-white ml-2 text-[20px]">FindersKeeper</span>
        </p>
        <p className="text-gray-600 font-semibold font-poppins text-[24px] leading-[30px]">
          Link:
          <span className=" text-[#329DFD] ml-2 underline text-[16px] font-normal font-poppins ">
            https://fksadmin.finderskeepers.ai
          </span>
        </p>
        <p className="text-gray-600 font-semibold font-poppins text-[24px] leading-[30px]">
          Location:
          <span className=" text-white ml-2  text-[20px] ">
            United State of America
          </span>
        </p>
        <p className="text-gray-600 font-semibold font-poppins text-[24px] leading-[30px]">
          Tools:
          <span className=" text-white ml-2  text-[20px] ">
            Nextjs, Google Map, Tailwind css, Redux.
          </span>
        </p>
      </div>
      <div className="absolute right-5 top-5">
        <ArrowRightOutlined style={{ fontSize: 20, color: "white" }} />
      </div>
    </div>
  );
};

const Project = (props: Props) => {
  return (
    <div className="h-full" ref={props.elementRef}>
      <h1 className="text-white font-poppins text-[70px] font-semibold leading-[90px] uppercase">
        Recent <span className="text-secondary">Project</span>{" "}
      </h1>

      <div className="space-y-2">
        <ProjectCard />
        <ProjectCard />

        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
