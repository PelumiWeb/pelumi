import React, { Ref } from "react";
import { constantsData } from "../utils/constants";
import LabelInput from "./LabelInput";

type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
  id: string;
};

const Contact = (props: Props) => {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div className="h-screen w-full" ref={props.elementRef} id={props.id}>
      <h1 className="text-white font-poppins text-[50px] md:text-[80px] font-semibold leading-[70px] md:leading-[90px] uppercase w-full md:w-[500px]">
        let's work
      </h1>
      <h1 className="text-secondary font-poppins text-[60px] md:text-[80px] font-semibold leading-[70px] md:leading-[90px] uppercase w-full md:w-[500px]">
        together
      </h1>{" "}
      <div className="bg-background rounded-xl p-4 flex flex-col space-y-4">
        <LabelInput
          placeholder="Your Email"
          label="Email"
          value=""
          className="w-full text-[]"
        />
        <LabelInput
          placeholder="Subject"
          label="subject"
          value=""
          className="w-full text-[]"
          onChange={(e: any) => setSubject(e.target.value)}
        />

        <LabelInput
          placeholder="Your Message"
          label="message"
          value=""
          className="w-full text-[] h-[100px]"
          textarea
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <button className="bg-secondary hover:bg-buttonBackground p-1 w-full rounded-lg h-[40px]">
          <a
            href={`mailto:pelumiogundipe905@gmail.com&subject=${subject}&body=${message}`}
            target="_blank">
            <p className="text-white font-poppins text-sm ">Submit</p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
