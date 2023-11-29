import React from "react";
type Props = {
  children: React.ReactNode;
};
const Title: React.FC<Props> = ({ children }) => {
  return <h2 className="text-3xl font-[600] mb-4">{children} :</h2>;
};

export default Title;
