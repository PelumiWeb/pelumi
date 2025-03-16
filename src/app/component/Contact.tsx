import React, { Ref } from "react";
import { constantsData } from "../utils/constants";
import LabelInput from "./LabelInput";

type Props = {
  elementRef: Ref<HTMLDivElement> | undefined;
  id: string;
};

const Contact = (props: Props) => {
  return (
    <div className="h-screen w-full" ref={props.elementRef} id={props.id}>
      <h1 className="text-white font-poppins text-[60px] md:text-[80px] font-semibold leading-[70px] md:leading-[90px] uppercase w-full md:w-[500px]">
        let's work
      </h1>
      <h1 className="text-secondary font-poppins text-[60px] md:text-[80px] font-semibold leading-[70px] md:leading-[90px] uppercase w-full md:w-[500px]">
        together
      </h1>{" "}
      <div className="bg-background rounded-xl p-4 flex flex-col space-y-4">
        <LabelInput
          placeholder="Your Name"
          label="Name"
          value=""
          className="w-full text-[]"
        />

        <LabelInput
          placeholder="Your Email"
          label="Email"
          value=""
          className="w-full text-[]"
        />
        <LabelInput
          placeholder="Your Name"
          label="Name"
          value=""
          className="w-full text-[] h-[100px]"
          textarea
        />
        <button className="bg-secondary p-1 w-full rounded-lg h-[40px]">
          <p className="text-white font-poppins text-sm ">Submit</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
