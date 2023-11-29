import Img from "@/components/util/Img";
import React from "react";

const Inbox = () => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-2">
        <Img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
          classes="w-[40px] h-[40px]"
          rounded
        />
        <div>
          <h4 className="font-[600]">Theresa Webb</h4>
          <p className="text-xs">just ideas for next time</p>
        </div>
      </div>
      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary">
        <span className="text-sm text-white">1</span>
      </div>
    </div>
  );
};

export default Inbox;
