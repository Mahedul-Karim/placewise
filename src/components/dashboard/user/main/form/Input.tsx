import React from "react";
type Props={
    label?:string;
    type:string;
    classes?:string;
    disabled?:boolean;
    value?:string;
    onChange?:(e:any)=>void
    name?:string;
}
const Input:React.FC<Props> = ({label,type,classes,disabled,value,onChange,name}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${classes}`}>
      <label className="font-[500]">{label} :</label>
      <input
        type={type}
        className="border border-solid border-border py-2 rounded-2xl px-6 focus:outline-none w-full"
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
