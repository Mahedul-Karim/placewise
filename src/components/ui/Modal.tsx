'use client'
import React from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children }) => {
  return createPortal(
    <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-neutral/[0.1] backdrop-blur-[10px] z-[99999]">
      <div className="bg-white w-[80%] px-4 py-6 rounded-md"></div>
    </div>,
    document.body
  );
};

export default Modal;
