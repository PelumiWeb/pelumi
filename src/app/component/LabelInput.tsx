import React from "react";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  className: string;
  textarea?: boolean;
  onChange?: any;
};

const LabelInput = (props: Props) => {
  return (
    <div>
      {props.label && (
        <p className="text-[14px] leading-[20px] font-poppins mb-2 font-normal  text-white ">
          {props.label}
        </p>
      )}

      {props.textarea ? (
        <textarea
          id="w3review"
          name="w3review"
          className={`${props.className} bg-secondary text-white  font-poppins p-2 rounded-[10px] outline-none  cursor-pointer text-[14px] leading-[20px]`}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      ) : (
        <input
          type="text"
          className={`${props.className} bg-secondary text-white  font-poppins p-2 rounded-[10px] outline-none  cursor-pointer text-[14px] leading-[20px]`}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      )}
    </div>
  );
};

export default LabelInput;
