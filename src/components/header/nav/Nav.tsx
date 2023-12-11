import Link from "next/link";
import React from "react";
import { navData } from "@/components/util/data";
type Props={
  classes?:string;
  col?:boolean;
}
const Nav:React.FC<Props> = ({classes,col}) => {
  return (
    <nav className={`${classes} self-stretch justify-center items-center`}>
      <ul className={`flex items-center gap-5 text-[17px] ${col ? 'flex-col' : 'flex-row'}`}>
        {navData.map((nd) => (
          <li key={nd.label}>
            <Link href={nd.to} className="text-neutral font-[500]">
              {nd.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
