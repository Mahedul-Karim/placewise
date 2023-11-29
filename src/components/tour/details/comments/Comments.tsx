import Button from "@/components/ui/button/ButtonOutline";
import Img from "@/components/util/Img";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-10">
        <FaStar color="#363aed" size={20} />
        <h3 className="!text-xl 400px:!text-3xl font-[600]">4.7 (21 reviews)</h3>
      </div>
      <figure>
        <figcaption className="flex flex-col 400px:flex-row 400px:items-center justify-between pb-2 gap-2 400px:gap-0">
          <div className="flex items-center gap-3">
            <Img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
              classes="w-[50px] h-[50px]"
              rounded
            />
            <div>
              <h4 className="font-[600] text-[16px]">Kiss Laura</h4>
              <p className="text-[14px]">Product Designer</p>
            </div>
          </div>
          <div>
            <h4>09:01 am</h4>
            <p>Mar 03, 2023</p>
          </div>
        </figcaption>
        <div className="py-4 border-t border-b border-dashed border-border">
          <div className="flex items-center mb-3">
            <FaStar color="#363aed" size={20} />
            <FaStar color="#363aed" size={20} />
            <FaStar color="#363aed" size={20} />
            <FaStar color="#363aed" size={20} />
            <FaStar color="#363aed" size={20} />
          </div>
          <p>
            I highly recommend [real estate agent&apos;s name] as a professional
            and knowledgeable real estate agent. They provided valuable guidance
            throughout the selling process
          </p>
        </div>
      </figure>
      
    </div>
  );
};

export default Comments;
