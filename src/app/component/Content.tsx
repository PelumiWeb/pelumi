import React from "react";
import Hero from "./Hero";
import Project from "./Project";
import Experience from "./Experience";
import Skills from "./Skills";
import { useScrollContext } from "../utils/scrollContext";
import { constantsData } from "../utils/constants";

type Props = {};

const Content = (props: Props) => {
  const { setScrollRef } = useScrollContext();
  const hero = React.useRef<HTMLDivElement>(null);
  const project = React.useRef<HTMLDivElement>(null);
  const experienced = React.useRef<HTMLDivElement>(null);
  const skilled = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (hero.current) {
      setScrollRef(constantsData.section.hero, hero.current);
    }
    if (project.current) {
      setScrollRef(constantsData.section.project, project.current);
    }
    if (experienced.current) {
      setScrollRef(constantsData.section.experienced, experienced.current);
    }
    if (skilled.current) {
      setScrollRef(constantsData.section.skilled, skilled.current);
    }
  }, [setScrollRef]);
  
  return (
    <div className="ml-[10%]">
      <Hero elementRef={hero} />
      <Project elementRef={project} />
      <Experience elementRef={experienced} />
      <Skills elementRef={skilled} />
    </div>
  );
};

export default Content;
