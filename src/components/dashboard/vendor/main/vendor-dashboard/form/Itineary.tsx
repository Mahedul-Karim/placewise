"use client";
import Input from "@/components/dashboard/user/main/form/Input";
import Button from "@/components/ui/button/ButtonOutline";
import { useCtx } from "@/context/ContextProvider";
import Image from "next/image";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import ItinearyPreview from './ItinearyPreview'
type Props = {
  itenearys: {
    image: ArrayBuffer | string | null;
    title: string;
    description: string;
  }[];
  setItenearys: any;
};

const Itineary: React.FC<Props> = ({ itenearys, setItenearys }) => {
  const { user } = useCtx();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [avatar, setAvatar] = useState<ArrayBuffer | string | null>();

  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setAvatar(fileReader.result);
    };

    fileReader.readAsDataURL(e?.target?.files?.[0]!);
  };

  const saveItineary = () => {
    const newItenery = {
      title,
      description,
      image: avatar,
    };

    setItenearys((prev: any) => [...prev, newItenery]);
    setAvatar(null)
  };

  return (
    <>
      <label className="font-[500]">Itineary :</label>
      <div className="flex gap-2">
        <div className="relative">
          {!avatar ? (
            <>
              <label
                htmlFor="itineryImages"
                className="flex items-center justify-center w-[300px] h-[250px] rounded-md border border-solid border-border cursor-pointer"
              >
                <IoIosImages size={25} />
              </label>
              <input
                type="file"
                id="itineryImages"
                className="hidden absolute"
                onChange={setImage}
              />
            </>
          ) : (
            <div className="w-[300px] h-[250px] rounded-md border border-solid border-border relative overflow-hidden">
              <Image
                fill
                src={avatar as string}
                alt="tour"
                className="object-cover w-full h-full"
              />
              <button
                className="absolute bg-grey w-6 h-6 flex items-center justify-center top-1 right-1 rounded-md"
                onClick={() => setAvatar(null)}
              >
                <FaTrash size={15} />
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center flex-col">
          <Input
            label="Itinery title"
            type="text"
            name="itineryTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label className="font-[500]">Itinery Description :</label>
            <textarea
              className="border border-solid border-border py-2 rounded-2xl px-6 focus:outline-none w-full"
              rows={3}
              name="itineryDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button outline type="button" onClick={saveItineary}>
            Save
          </Button>
        </div>
      </div>
      {itenearys.length > 0 &&
        itenearys.map((it, i) => (
          <ItinearyPreview
            src={it.image}
            title={it.title}
            description={it.description}
            key={i}
          />
        ))}
    </>
  );
};

export default Itineary;
