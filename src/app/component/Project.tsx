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

type Props = {
  elementRef: any;
  id: string;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectCard = () => {
  return (
    <div className="group bg-gray-800 w-full cursor-pointer flex items-start flex-col md:flex-row space-x-4 p-4 rounded-[10px] transition-all ease-in-out bg-opacity-20 hover:bg-opacity-100 relative h-full">
      {/* Image */}
      {/* Content */}
      <div className="relative w-full md:w-[200px] h-[200px] rounded-[10px] mb-4 md:mb-0 " >
        <Image
          src={"/Screenshot 2025-03-11 at 18.42.33.png"}
          fill
          alt=""
          className="scale-100 group-hover:scale-110 object-cover w-full h-full rounded-[10px] transition-all
           ease-in-out"
        />
      </div>
      <div className="space-y-2 md:space-y-4">
        <p className="text-gray-600 font-semibold font-poppins text-[18px] md:text-[24px] md:leading-[30px]">
          Name:
          <span className=" text-white ml-2 text-[14px] md:text-[20px]">
            FindersKeeper
          </span>
        </p>

        <p className="text-gray-600 font-semibold font-poppins text-[18px] md:text-[24px] md:leading-[30px]">
          Location:
          <span className=" text-white ml-2 text-[14px] md:text-[20px]">
            United State
          </span>
        </p>
        <p className="text-gray-600 font-semibold font-poppins text-[18px] md:text-[24px] md:leading-[30px]">
          Tools:
          <span className=" text-white ml-2 text-[14px] md:text-[20px]">
            Nextjs, Google Map, Tailwind css, Redux.
          </span>
        </p>
      </div>
      <div className="absolute right-5 top-5">
        <ArrowRightOutlined style={{ fontSize: 20, color: "white" }} />
      </div>
    </div>
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

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4 flex flex-col justify-center items-center">
        <ProjectCard />
        <ProjectCard />

        <ProjectCard />
      </motion.div>
    </motion.div>
  );
};

export default Project;
