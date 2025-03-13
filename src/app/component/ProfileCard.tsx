import Image from "next/image";
import React from "react";
import {
  HomeOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="bg-[#FFFFFF] w-[35%] h-[640px] rounded-[10px]">
      {/* Image */}
      <div className="w-full flex justify-center items-center ">
        <div className="w-[240px] h-[284px] relative mt-4">
          <Image src={""} alt="" fill className="rounded-[10px] " />
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
          A Software Engineer who has developed countless innovative solutions.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-6 py-4">
        <button>
          <TwitterOutlined style={{ fontSize: 28 }} />
        </button>
        <button>
          <GithubOutlined style={{ fontSize: 28 }} />
        </button>
        <button>
          <LinkedinOutlined style={{ fontSize: 28 }} />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
