import React from "react";
import UserImage from "./UserImage";
import UserDetails from "./UserDetails";
import UserNav from "./UserNav";

type Props={
  active:number;
  setActive:React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar:React.FC<Props> = ({active,setActive}) => {
  return (
    <aside className="bg-white rounded-2xl shadow-md px-3 py-2 md:py-4 h-max flex items-center justify-center md:block gap-2">
      <UserImage classes="w-32 h-32 hidden md:flex items-center justify-center"/>
      <UserDetails />
      <UserNav active={active} setActive={setActive}/>
    </aside>
  );
};

export default Sidebar;
