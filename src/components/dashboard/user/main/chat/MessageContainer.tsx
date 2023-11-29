import Img from "@/components/util/Img";
import React from "react";
import Messages from "./Messages";
import { CiCamera } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
const MessageContainer = () => {
  return (
    <>
      <div className="px-2 py-4">
        <div className="relative">
          <Img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
            classes="w-14 h-14"
            rounded
          />
        </div>
      </div>
      <div className="bg-border h-[375px] overflow-y-scroll p-4 inbox">
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
      </div>
      <div className="p-4 grid grid-cols-[40px_1fr]">
        <div className="self-center">
          <button>
            <CiCamera size={25} color="black" style={{strokeWidth:0.4}}/>
          </button>
        </div>
        <div className="bg-grey px-3 py-1 rounded-full border-[1px] border-solid border-border flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full"
            placeholder="Enter place name"
          />
          <button className="flex items-center justify-center bg-primary rounded-full w-7 h-7">
            <IoMdSend size={20} color="white"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageContainer;
