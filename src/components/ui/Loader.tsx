import React from "react";
type Props = {
  button?: boolean;
};
const Loader: React.FC<Props> = ({ button }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`loader border-[5px] border-solid rounded-full !border-b-transparent ${
          button ? "button__loader" : "border-primary w-[60px] h-[60px]"
        }`}
      ></div>
    </div>
  );
};

export default Loader;
