import Search from "@/components/filter/Search";
import Img from "@/components/util/Img";
import React from "react";
import Inbox from "./Inbox";
import MessageContainer from "./MessageContainer";
type Props = {
  classes?: string;
};
const Chat: React.FC<Props> = ({ classes }) => {
  return (
    <section className={`${classes} grid-cols-1 lg:grid-cols-[0.4fr_1fr]`}>
      <div className="bg-white px-2 py-4">
        <Search />
        <div className="mt-4 flex flex-col gap-5 overflow-y-scroll max-h-[180px] lg:max-h-[434px] inbox">
          {Array.from({ length: 100 }).map((_, i) => (
            <Inbox key={i} />
          ))}
        </div>
      </div>
      <div>
        <MessageContainer />
      </div>
    </section>
  );
};

export default Chat;
