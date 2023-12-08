import Button from "@/components/ui/button/ButtonOutline";
import Image from "next/image";
import React from "react";

const Vendor = () => {
  return (
    <main>
      <div className="bg-neutral px-4 py-5">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`border border-solid border-primary rounded-full p-1 bg-white`}
            >
              <Image
                width={48}
                height={48}
                src={
                  "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
                }
                alt="image"
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white font-[600]">Floyd Miles</h3>
              <p className="text-grey">info@example.com</p>
            </div>
          </div>
          <div>
            <Button styles="bg-primary text-white">Add new listing</Button>
          </div>
        </header>
      </div>
    </main>
  );
};

export default Vendor;
