import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const tabs = [
    { id: 0, name: "Pelumi" },
    { id: 1, name: "service" },
    { id: 2, name: "Projects" },
  ];
  return (
    <div className="w-[10%] border-r-black border-r-[0.2px] h-screen">
      {/* Tabs */}
      {tabs?.map((tab: {id: number, name: string}) => (
        <button key={tab.id} className="border-b-[0.2px] border-b-black flex justify-center w-full">
          <p className="text-white text-sm  font-mono font-semibold capitalize">{tab.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
