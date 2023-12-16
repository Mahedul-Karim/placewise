'use client'
import Button from "@/components/ui/button/ButtonOutline";
import Image from "next/image";
import React from "react";
import VendorImage from "./VendorImage";
import Modal from "@/components/ui/Modal";

const Vendor = () => {
  return (
    <main>
      <div className="bg-neutral px-4 py-5">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <VendorImage />
            
          </div>
          <div>
            <Button styles="bg-primary text-white">Add new listing</Button>
          </div>
        </header>
      </div>
      <Modal>Hello</Modal>
    </main>
  );
};

export default Vendor;
