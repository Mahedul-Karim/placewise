"use client";
import Button from "@/components/ui/button/ButtonOutline";
import Image from "next/image";
import React, { useState } from "react";
import VendorImage from "./VendorImage";
import Modal from "@/components/ui/Modal";
import Input from "@/components/dashboard/user/main/form/Input";
import { IoIosImages } from "react-icons/io";
import { useCtx } from "@/context/ContextProvider";
import TourModal from "./TourModal";
const Vendor = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <main>
      <div className="bg-neutral px-4 py-5">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <VendorImage />
          </div>
          <div>
            <Button
              styles="bg-primary text-white"
              onClick={() => setOpenModal(true)}
            >
              Add new listing
            </Button>
          </div>
        </header>
      </div>
      <TourModal openModal={openModal} setOpenModal={setOpenModal} />
    </main>
  );
};

export default Vendor;
