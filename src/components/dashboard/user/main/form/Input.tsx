import React from "react";
type Props={
    label:string;
    type:string;
    classes?:string;
}
const Input:React.FC<Props> = ({label,type,classes}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${classes}`}>
      <label className="font-[500]">{label} :</label>
      <input
        type={type}
        className="border border-solid border-border py-2 rounded-2xl px-6 focus:outline-none w-full"
      />
    </div>
  );
};

export default Input;
