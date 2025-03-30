import React, { Ref } from "react";
import { constantsData } from "../utils/constants";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useInView, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
  id: string;
};

type ExperienceProps = {
  companyName: string;
  date: string;
  app?: string;
  summary: string;
  link: string;
};
const ExperienceCard = (data: ExperienceProps) => {
  const router = useRouter();
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  }); //
  return (
    <a target="_blank" rel="noopener noreferrer" href={data.link}>
      <motion.div
        // onClick={() => router.push(data.link)}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group bg-gray-800 w-full cursor-pointer  space-y-4 p-4 rounded-[10px] transition-all ease-in-out bg-opacity-20 hover:bg-opacity-100 relative ">
        <div className="grid gap-y-4 h-full">
          <p className="text-white text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] uppercase font-medium font-poppins flex items-center ">
            {/* <span className="mr-2 text-gray-700 text-[24px]">Company:</span> */}
            {data.companyName}
          </p>

          <p className="text-gray-400 font-mormal md:font-medium font-poppins text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] capitalize w-full md:w-[80%]">
            {data.summary}
          </p>
          <p className="text-gray-400 font-medium font-poppins text-[14px] md:text-[16px] leading-[20px] capitalize">
            {data.date}
          </p>
        </div>

        <div className="absolute right-5 top-0 -rotate-45 group-hover:rotate-0  transition-all ease-in-out">
          <ArrowRightOutlined style={{ fontSize: 20, color: "white" }} />
        </div>
      </motion.div>
    </a>
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
            companyName: "HUMBERONE TECHNOLOGY — Software Developer(Frontend)",
            date: "JULY  2024- PRESENT",
            summary:
              "Humberone technology is a company that building software solutions for clients and working currently on https://www.grantsconsult.com/, a software solution  which connects grantors, consultants and users",
            link: "grantsconsult.com",
          },
          {
            companyName: "CLANE COMPANY NIGERIA LTD",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "Clane Company Nigeria Ltd. is a Lagos-based company leveraging the power of technology to provide people with easy-to-use financial products and services. We bring together developers, investors and experts in finance and digital technology to deliver innovative solutions that transform today’s financial landscape. ",
            link: "https://www.clane.com/",
          },
          {
            companyName:
              "TRACKA MOBILE 2.0(BudgIT), Nigeria — Front-End Developer",
            date: "APRIL 2022- AUGUST 2022",
            summary:
              "The Tracka Mobile 2.0 Application is an initiative of BudgIT with support from the Strengthening Civic Advocacy and Local Engagement (SCLAE) Project, funded by USAID Nigeria to provide everyday citizens with access to public finance management data for engagement with public institutions and public office holders on prudent management of national resources for improved service delivery.  ",
            link: "https://budgit.org/",
          },
          {
            companyName:
              "RETAILXPRESS, Nigeria — Front-End (React Native)  Developer",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "I developed cross-platform mobile applications using React Native, building key features like cart listing and integrating facial recognition for authentication to enhance security. I worked closely with teams to optimize app performance, ensuring smooth user experiences and seamless deployment of updates.",
            link: "https://www.retailxpress.net/",
          },
          {
            companyName:
              "RABBIT AFRICA, Nigeria — Front-End (Ionic Framework)  Developer",
            date: "AUGUST 2022- JULY 2024",
            summary:
              "I developed cross-platform mobile and web applications using the Ionic Framework, enhancing user engagement and functionality. I maintained and updated the Beta version of Rabbit Africa while building the v1 version, ensuring a smooth transition. I designed and implemented new features, including payment integrations, to deliver a seamless experience across web and mobile platforms. Additionally, I collaborated with teams to optimize performance and deploy updates efficiently. ",
            link: "https://www.linkedin.com/company/rabbit-mobility/",
          },
          {
            companyName: "BIZFORCE, Australia—Front-End",
            date: "OCT 2020 - JUNE 2021",
            summary:
              "I improved the website’s UX by streamlining navigation, merging four pages into one to enhance usability. I implemented new designs with pixel-perfect precision, ensuring a high-quality user interface. Additionally, I developed new features based on user needs, resulting in positive feedback and an improved overall experience. ",
            link: "https://bizforcenow.com/",
          },
        ].map((data, key) => (
          <ExperienceCard key={key} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
