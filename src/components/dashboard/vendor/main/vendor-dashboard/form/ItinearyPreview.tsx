import Input from "@/components/dashboard/user/main/form/Input";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";

type Props = {
  src: string | ArrayBuffer | null;
  title: string;
  description: string;
};

const ItinearyPreview: React.FC<Props> = ({ src, title, description }) => {
  return (
    <div className="flex gap-2">
      <div className="w-[300px] h-[250px] rounded-md border border-solid border-border relative overflow-hidden">
        <Image
          fill
          src={src as string}
          alt="tour"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-around flex-col w-[calc(100%_-_300px)]">
        <Input type="text" disabled classes="itineray__preview" value={title} />
        <div>
          <textarea
            className="border border-solid border-border py-2 rounded-2xl px-6 focus:outline-none w-full"
            rows={3}
            name="itineryDescription"
            disabled
            value={description}
          />
        </div>
      </div>
    </div>
  );
};

export default ItinearyPreview;
