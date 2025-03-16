import React from "react";
import Hero from "./Hero";
import Project from "./Project";
import Experience from "./Experience";
import Skills from "./Skills";
import { useScrollContext } from "../utils/scrollContext";
import { constantsData } from "../utils/constants";
import { useScroll } from "framer-motion";
import Contact from "./Contact";

type Props = {
  ref: any;
};

const Content = (props: Props) => {
  const { setScrollRef, setActiveSection } = useScrollContext();

  // const hero = React.useRef<HTMLDivElement>(null);
  // const project = React.useRef<HTMLDivElement>(null);
  // const experienced = React.useRef<HTMLDivElement>(null);
  // const skilled = React.useRef<HTMLDivElement>(null);
  // const contact = React.useRef<HTMLDivElement>(null);

  const sectionRefs = {
    hero: React.useRef<HTMLDivElement>(null),
    project: React.useRef<HTMLDivElement>(null),
    experienced: React.useRef<HTMLDivElement>(null),
    skilled: React.useRef<HTMLDivElement>(null),
    contact: React.useRef<HTMLDivElement>(null),
  };

  React.useEffect(() => {
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        setScrollRef(constantsData.section[key], ref.current);
      }
    });

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // console.log(entry.target.id, "Target Id");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [setScrollRef, setActiveSection]);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  //   if (hero.current) {
  //     setScrollRef(constantsData.section.hero, hero.current);
  //   }
  //   if (project.current) {
  //     setScrollRef(constantsData.section.project, project.current);
  //   }
  //   if (experienced.current) {
  //     setScrollRef(constantsData.section.experienced, experienced.current);
  //   }
  //   if (skilled.current) {
  //     setScrollRef(constantsData.section.skilled, skilled.current);
  //   }
  //   if (skilled.current) {
  //     setScrollRef(constantsData.section.contact, contact.current);
  //   }
  // }, [setScrollRef]);

  return (
    <div className="md:ml-[10%] h-full grid " ref={props.ref}>
      <Hero elementRef={sectionRefs.hero} id={constantsData.section.hero} />
        <Project
          elementRef={sectionRefs.project}
          id={constantsData.section.project}
        />

      <Experience
        elementRef={sectionRefs.experienced}
        id={constantsData.section.experienced}
      />
      <Skills
        elementRef={sectionRefs.skilled}
        id={constantsData.section.skilled}
      />
      <Contact
        elementRef={sectionRefs.contact}
        id={constantsData.section.contact}
      />
    </div>
  );
};

export default Content;
