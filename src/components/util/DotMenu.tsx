import React from "react";
import UserNav from "../header/nav/UserNav";
type Props = {
  children: React.ReactNode;
  active:boolean;
};
const DotMenu: React.FC<Props> = ({ children ,active}) => {
  return (
    <div className={`bg-white absolute px-3 py-2 top-[36px] right-1 rounded-[10px] shadow-lg z-50 flex flex-col gap-2 origin-top-right ${active ? 'scale-100' : 'scale-0'} transition-all duration-300`}>
      {children}
    </div>
  );
};

export default DotMenu;
