"use client"
import React from "react";
import {
  HomeOutlined,
  ProjectOutlined,
  FolderOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { useScrollContext } from "../utils/scrollContext";
import { constantsData } from "../utils/constants";

type Props = {};

const Header = (props: Props) => {
  const { scrollToElement } = useScrollContext();

  return (
    <div className="w-screen flex justify-center items-center h-[15%]">
      <div className=" bg-gray-800 my-10 flex items-center justify-around w-[400px] rounded-[10px] h-[60px]">
        <button
          className="relative group"
          onClick={() => {
            scrollToElement(constantsData.section.hero);
          }}>
          <HomeOutlined style={{ fontSize: 24, color: "white" }} />
          <div className="opacity-0 group-hover:opacity-100 absolute rounded-[5px] bg-gray-700 px-1 py-[2px] -left-[50%] -bottom-[80%]  group-hover:translate-y-5 transition duration-300 ease-in-out">
            <p className="font-mono text-sm text-white font-semibold">Home</p>
          </div>
        </button>
        <button
          className="relative group"
          onClick={() => {
            scrollToElement(constantsData.section.project);
          }}>
          <ProjectOutlined style={{ fontSize: 24, color: "white" }} />
          <div className="opacity-0 group-hover:opacity-100 absolute rounded-[5px] bg-gray-700 px-1 py-[2px] -left-[65%] -bottom-[80%]  group-hover:translate-y-5 transition duration-300 ease-in-out">
            <p className="font-mono text-sm text-white font-semibold">
              Project
            </p>
          </div>
        </button>
        <button
          className="relative group"
          onClick={() => {
            scrollToElement(constantsData.section.experienced);
          }}>
          <FolderOutlined style={{ fontSize: 24, color: "white" }} />
          <div className="opacity-0 group-hover:opacity-100 absolute rounded-[5px] bg-gray-700 px-1 py-[2px] -left-[130%] -bottom-[80%]  group-hover:translate-y-5 transition duration-300 ease-in-out">
            <p className="font-mono text-sm text-white font-semibold">
              Experience
            </p>
          </div>
        </button>
        <button
          className="relative group"
          onClick={() => {
            scrollToElement(constantsData.section.skilled);
          }}>
          <ToolOutlined style={{ fontSize: 24, color: "white" }} />
          <div className="opacity-0 group-hover:opacity-100 absolute rounded-[5px] bg-gray-700 px-1 py-[2px] -left-[50%] -bottom-[80%]  group-hover:translate-y-5 transition duration-300 ease-in-out">
            <p className="font-mono text-sm text-white font-semibold">Skills</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
