import React from "react";

type Props = {
  children: React.ReactNode;
  styles?: string;
};

const Container: React.FC<Props> = ({ children, styles }) => {
  return (
    <div className={`max-w-[1300px] px-4 mx-auto ${styles}`}>{children}</div>
  );
};

export default Container;
