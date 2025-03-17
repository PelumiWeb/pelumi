"use client";

import Head from "next/head";
import React from "react";
import Link from "next/link";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ProfileCard from "./component/ProfileCard";
import Content from "./component/Content";
import Project from "./component/Project";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export default function Home() {
  const scrollRef = React.useRef(null); // Reference to scrollable div
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="h-full md:h-screen  bottom-0 left-0 right-0 top-0 fixed bg-background p-4 overflow-y-scroll md:overflow-hidden ">
      {/* <motion.div
        className="fixed left-0 right-0 h-[5px] bg-[#4ff0b7]"
        style={{ y: yTranslate }}
      /> */}
      <Header />
      <div className=" md:h-[85%] px-2 md:px-16 flex items-start flex-col md:flex-row w-full overflow-y-scroll   md:overflow-hidden  ">
        <ProfileCard />

        <div className="h-screen w-full  md:overflow-y-scroll md:w-[75%] scrollbar-hide">
          <Content ref={scrollRef} />
        </div>
      </div>
    </div>
  );
}
