"use client";
import Modal from "@/components/ui/Modal";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useCtx } from "@/context/ContextProvider";
import Info from "./form/Info";
import Details from "./form/Details";
import Images from "./form/Images";
import Itineary from "./form/Itineary";
import Button from "@/components/ui/button/ButtonOutline";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { ApiParams } from "@/types";
import Loader from '@/components/ui/Loader';
type Props = {
  openModal: boolean;
  setOpenModal: any;
};

type Itinearys = {
  image: ArrayBuffer | string | null;
  title: string;
  description: string;
};

const TourModal: React.FC<Props> = ({ openModal, setOpenModal }) => {
  const [images, setImages] = useState<any[]>([]);
  const [itenearys, setItenearys] = useState<Itinearys[]>([]);
  const { user } = useCtx();
  const setTourImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length === 6) {
      toast.error("Only 6 images can be added");
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImages((prev) => [...prev, fileReader.result]);
    };

    fileReader.readAsDataURL(e?.target?.files?.[0]!);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: ({ endpoint, options }: ApiParams) =>
      api({ endpoint, options }),
    onSuccess: (data) => {
      setOpenModal(false);
      toast.success("Tour created successfully!");
    },
    onError: (err) => {
      toast.error('Something went wrong!Try again later!')
    },
  });

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as any);

    const name = formData.get("name");
    const placesCovered = formData.get("placesCovered");
    const startPoint = formData.get("startPoint");
    const endPoint = formData.get("endPoint");
    const duration = formData.get("duration");
    const price = formData.get("price");
    const totalCapacity = formData.get("totalCapacity");
    const category = formData.get("category");
    const description = formData.get("description");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        placesCovered,
        startPoint,
        endPoint,
        duration,
        price,
        totalCapacity,
        category,
        description,
        images,
        itineary: itenearys,
        creatorId: user?.id,
      }),
    };
    
    mutate({ endpoint: "tour", options });
    
  };

  return (
    <Modal open={openModal} onClick={() => setOpenModal(false)}>
      <form className="flex flex-col gap-2" onSubmit={formSubmit}>
        <Info />
        <Details />
        <Images
          images={images}
          setTourImages={setTourImages}
          removeImage={removeImage}
        />

        <Itineary itenearys={itenearys} setItenearys={setItenearys} />
        <Button type="submit" styles="bg-primary text-white">
          {isPending ? <Loader button/> :'Create Tour'}
        </Button>
      </form>
    </Modal>
  );
};

export default TourModal;
