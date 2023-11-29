import Img from "@/components/util/Img";
import React from "react";

const Messages = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-4">
          <Img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
            classes="w-12 h-12"
            rounded
          />
          <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:-top-[12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
            {/* <p>Lorem Ipsum is simply dummy text of the printing</p> */}
            
              <Img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
                classes="w-52 h-52 rounded-2xl overflow-hidden"
              />
            
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:-bottom-[12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <Img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
            classes="w-12 h-12"
            rounded
          />
        </div>
      </div>
    </>
  );
};

export default Messages;
