import Image from "next/image";
import React from "react";
import {
  HomeOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { div } from "framer-motion/client";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="h-full flex  justify-center items-center mt-[25%] md:mt-[0%]">
      <div className="bg-[#FFFFFF]  rounded-[10px]  w-full md:w-[25%] h-full md:h-[560px] md:flex-grow">
        {/* Image */}
        <div className="w-full flex justify-center items-center ">
          <div className="w-[240px] h-[284px] relative mt-4">
            <Image
              src={"/pelumi.PNG"}
              alt=""
              fill
              className="rounded-[10px] object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full py-2">
          <p className="text-[#000000] font-semibold text-[30px] text-center font-poppins ">
            {" "}
            Ogundipe H. Pelumi
          </p>
        </div>

        <div className="py-2">
          <p className="text-[#6A6B6E] text-[18px] font-medium font-poppins text-center">
            A Software Engineer who has developed countless innovative
            solutions.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6 py-4">
          <button className="group hover:active-tab py-2 px-3 rounded-[5px] scale-75 ">
            <a href="https://x.com/PelumSwithme" target="_blank">
              <TwitterOutlined
                style={{ fontSize: 28 }}
                className="group-hover:text-white"
              />
            </a>
          </button>
          <button className="group hover:active-tab py-2 px-3 rounded-[5px] scale-75 ">
            <a href="https://github.com/PelumiWeb" target="_blank">
              <GithubOutlined
                style={{ fontSize: 28 }}
                className="group-hover:text-white"
              />
            </a>
          </button>
          <button className="group hover:active-tab py-2 px-3 rounded-[5px] scale-75 ">
            <a
              href="https://www.linkedin.com/in/hassan-ogundipe-906ab7190/"
              target="_blank">
              <LinkedinOutlined
                className="group-hover:text-white"
                style={{ fontSize: 28 }}
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
