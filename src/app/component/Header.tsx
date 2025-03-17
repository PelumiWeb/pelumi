"use client";
import React from "react";
import {
  HomeOutlined,
  ProjectOutlined,
  FolderOutlined,
  ToolOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { useScrollContext } from "../utils/scrollContext";
import { constantsData } from "../utils/constants";
import { section } from "framer-motion/client";

type Props = {};

const Header = (props: Props) => {
  const { scrollToElement, activeSection } = useScrollContext();

  return (
    <div className="w-full md:w-screen flex justify-center items-center h-[15%] fixed z-10 md:relative  top-0 left-0 right-0">
      <div className=" bg-gray-800 my-10 flex items-center justify-around w-[300px] rounded-[10px]  h-[60px]">
        {[
          {
            icon: <HomeOutlined style={{ fontSize: 24, color: "white" }} />,
            label: "Home",
            section: constantsData.section.hero,
          },
          {
            icon: <ProjectOutlined style={{ fontSize: 24, color: "white" }} />,
            label: "Project",
            section: constantsData.section.project,
          },
          {
            icon: <FolderOutlined style={{ fontSize: 24, color: "white" }} />,
            label: "Experience",
            section: constantsData.section.experienced,
          },
          {
            icon: <ToolOutlined style={{ fontSize: 24, color: "white" }} />,
            label: "Skills",

            section: constantsData.section.skilled,
          },
          {
            icon: <ContactsOutlined style={{ fontSize: 24, color: "white" }} />,
            label: "Contact",
            section: constantsData.section.contact,
          },
        ].map((data) => (
          <button
            key={data.section}
            className={`relative group hover:active-tab py-2 px-3 rounded-[5px] scale-75 bg-opacity-0 ${
              activeSection == data.section &&
              "bg-buttonBackground bg-opacity-100 transition-all ease-in-out border-none scale-100"
            }`}
            onClick={() => {
              scrollToElement(data.section);
            }}>
            {data.icon}
            <div className="opacity-0 group-hover:opacity-100 absolute rounded-[5px] bg-gray-700 px-1 py-[2px] -left-[0%] -bottom-[40%]  group-hover:translate-y-5 transition duration-300 ease-in-out">
              <p className="font-mono text-sm text-white font-semibold text-center">
                {data.label}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
