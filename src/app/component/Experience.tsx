import React, { Ref } from "react";
import { constantsData } from "../utils/constants";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useInView, motion } from "framer-motion";

type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
  id: string;
};

type ExperienceProps = {
  companyName: string;
  date: string;
  app?: string;
  summary: string;
};
const ExperienceCard = (data: ExperienceProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  }); //
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group bg-gray-800 w-full cursor-pointer  space-y-4 p-4 rounded-[10px] transition-all ease-in-out bg-opacity-20 hover:bg-opacity-100 relative ">
      <div className="grid gap-y-4 h-full">
        <p className="text-white text-[20px] leading-[24px] uppercase font-medium font-poppins flex items-center">
          {/* <span className="mr-2 text-gray-700 text-[24px]">Company:</span> */}
          {data.companyName}
        </p>

        <p className="text-gray-400 font-medium font-poppins text-[16px] leading-[24px] capitalize w-[80%]">
          {data.summary}
        </p>
        <p className="text-gray-400 font-medium font-poppins text-[16px] leading-[20px] capitalize">
          {data.date}
        </p>
      </div>

      <div className="absolute right-5 top-0 -rotate-45 group-hover:rotate-0  transition-all ease-in-out">
        <ArrowRightOutlined style={{ fontSize: 20, color: "white" }} />
      </div>
    </motion.div>
  );
};

const Experience = (props: Props) => {
  return (
    <div
      className="h-screen overflow-y-scroll scrollbar-hide mt-[10%]"
      ref={props.elementRef}
      id={props.id}>
      <h1 className="text-white font-poppins text-[50px] md:text-[70px] font-semibold leading-[70px] md:leading-[90px] uppercase w-[400px]">
        {constantsData.yearsOfExperience} years of{" "}
        <span className="text-secondary">experience</span>{" "}
      </h1>
      <div className="grid gap-y-4">
        {[
          {
            companyName: "CLANE COMPANY NIGERIA LTD",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "Clane Company Nigeria Ltd. is a Lagos-based company leveraging the power of technology to provide people with easy-to-use financial products and services. We bring together developers, investors and experts in finance and digital technology to deliver innovative solutions that transform today’s financial landscape. ",
          },
          {
            companyName: "CLANE COMPANY NIGERIA LTD",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "Clane Company Nigeria Ltd. is a Lagos-based company leveraging the power of technology to provide people with easy-to-use financial products and services. We bring together developers, investors and experts in finance and digital technology to deliver innovative solutions that transform today’s financial landscape. ",
          },
          {
            companyName: "CLANE COMPANY NIGERIA LTD",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "Clane Company Nigeria Ltd. is a Lagos-based company leveraging the power of technology to provide people with easy-to-use financial products and services. We bring together developers, investors and experts in finance and digital technology to deliver innovative solutions that transform today’s financial landscape. ",
          },
          {
            companyName: "CLANE COMPANY NIGERIA LTD",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "Clane Company Nigeria Ltd. is a Lagos-based company leveraging the power of technology to provide people with easy-to-use financial products and services. We bring together developers, investors and experts in finance and digital technology to deliver innovative solutions that transform today’s financial landscape. ",
          },
          {
            companyName: "CLANE COMPANY NIGERIA LTD",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "Clane Company Nigeria Ltd. is a Lagos-based company leveraging the power of technology to provide people with easy-to-use financial products and services. We bring together developers, investors and experts in finance and digital technology to deliver innovative solutions that transform today’s financial landscape. ",
          },
        ].map((data) => (
          <ExperienceCard {...data} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
