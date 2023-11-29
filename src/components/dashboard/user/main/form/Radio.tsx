import React from "react";
type Props = {
  name: string;
  classes?: string;
  id: string;
  label: string;
};
const Radio: React.FC<Props> = ({ name, classes, id, label }) => {
  return (
    <div className={`flex items-center gap-2 ${classes}`}>
      <input
        type="radio"
        name={name}
        className="accent-primary scale-125"
        id={id}
      />
      <label className="font-[500] cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
