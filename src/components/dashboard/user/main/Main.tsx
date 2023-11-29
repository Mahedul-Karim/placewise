import React from "react";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Security from "./security/Security";
import Chat from "./chat/Chat";
import MyBooking from "./booking/MyBooking";
type Props = {
  active: number;
};
const Main: React.FC<Props> = ({ active }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
     <PersonalInfo classes={active === 0 ? 'fade_in' : 'hidden'}/>
     <Security classes={active === 1 ? 'fade_in' : 'hidden'}/>
     <Chat classes={active === 2 ? 'fade_in !grid' : 'hidden'}/>
     <MyBooking classes={active === 3 ? 'fade_in' : 'hidden'}/>
    </div>
  );
};

export default Main;
