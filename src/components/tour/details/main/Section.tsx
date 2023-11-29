import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Section: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="px-4 py-5 border-[1px] border-solid border-border rounded-2xl bg-grey mb-6" id="sec">
      <h2 className="text-2xl font-[600] pb-2 border-b-[1px] border-dashed border-border">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
