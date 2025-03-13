"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ProfileCard from "./component/ProfileCard";
import Content from "./component/Content";
import Project from "./component/Project";

export default function Home() {
  return (
    <div className="h-screen w-screen  bottom-0 left-0 right-0 top-0 fixed bg-background">
      <Header />
      <div className="px-16 flex items-start w-full h-full">
        <ProfileCard />
        <div className=" overflow-y-scroll w-[65%] h-full">
          <Content />
        </div>
      </div>
    </div>
  );
}
