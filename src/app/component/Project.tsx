import Image from "next/image";
import React, { Ref } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "motion/react";
import { useRouter } from "next/navigation";
import { a } from "framer-motion/client";

type Props = {
  elementRef: any;
  id: string;
};

type ProjectCard = {
  name: string;
  location: string;
  tools: string;
  image: string;
  link: string;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectCard = (props: ProjectCard) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  }); //

  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group bg-gray-800 w-[320px]  md:w-full flex items-start flex-col md:flex-row space-x-4 p-4 rounded-[10px] transition-all ease-in-out bg-opacity-20 hover:bg-opacity-100 relative h-full cursor-pointer">
        {/* Image */}
        {/* Content */}
        <div className="relative w-full md:w-[200px] h-[200px] rounded-[10px] mb-4 md:mb-0 ">
          <Image
            src={props.image}
            fill
            alt=""
            className="scale-100 group-hover:scale-110 object-contain w-full h-full rounded-[10px] transition-all
           ease-in-out "
          />
        </div>
        <div className="space-y-2 md:space-y-4">
          <p className="text-gray-600 font-semibold font-poppins text-[18px] md:text-[24px] md:leading-[30px]">
            Name:
            <span className=" text-white ml-2 text-[14px] md:text-[20px]">
              {props.name}
            </span>
          </p>

          <p className="text-gray-600 font-semibold font-poppins text-[18px] md:text-[24px] md:leading-[30px]">
            Location:
            <span className=" text-white ml-2 text-[14px] md:text-[20px]">
              {props.location}
            </span>
          </p>
          <p className="text-gray-600 font-semibold font-poppins text-[18px] md:text-[24px] md:leading-[30px]">
            Tools:
            <span className=" text-white ml-2 text-[14px] md:text-[20px]">
              {props.tools}
            </span>
          </p>
        </div>
        <div className="absolute right-5 top-5">
          <ArrowRightOutlined style={{ fontSize: 20, color: "white" }} />
        </div>
      </motion.div>
    </a>
  );
};

const Project = (props: Props) => {
  const { scrollYProgress } = useScroll({ target: props.elementRef });
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  }); //

  const y = useParallax(scrollYProgress, 300);

  return (
    <motion.div className="h-full  w-full" ref={props.elementRef} id={props.id}>
      <h1 className="text-white font-poppins text-[60px] md:text-[70px] font-semibold leading-[70px] md:leading-[90px] uppercase  ">
        Recent <span className="text-secondary">Project</span>{" "}
      </h1>

      <motion.div className="space-y-4 flex flex-col justify-center items-start md:items-center">
        {[
          {
            name: "FindersKepper",
            location: "Florida, USA",
            tools: "Nextjs, Google Map, Tailwind css, Redux.",
            image: "/Screenshot 2025-03-11 at 18.42.33.png",
            link: "https://fksadmin.finderskeepers.ai/",
          },
          {
            name: "GrantsConsult",
            location: "Lagos, Nigeria",
            tools: "Nextjs, Tailwind css, Redux",
            image: "/Screenshot 2025-03-16 at 22.53.17.png",
            link: "https://www.grantsconsult.com/",
          },
          {
            name: "Clane",
            location: "Lagos, Nigeria",
            tools: "React Native",
            image: "/clane.jpg",
            link: "https://play.google.com/store/apps/details?id=com.clane.app&hl=en",
          },
        ].map((data) => (
          <ProjectCard {...data} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;
