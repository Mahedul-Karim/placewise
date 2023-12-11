import React from "react";

type Props = {
  children: React.ReactNode;
  outline?: boolean;
  styles?: string;
  onClick?:()=>void;
};

const Button: React.FC<Props> = ({ children, outline, styles,onClick }) => {
  return (
    <button
      className={`flex items-center justify-center ${
        outline
          ? `text-primary border-[1px] border-solid border-primary hover:bg-primary hover:text-white font-[600]`
          : ""
      } px-4 py-2 rounded-[30px] transition-all duration-300 ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
