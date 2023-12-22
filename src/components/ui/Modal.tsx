"use client";
import React from "react";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
type Props = {
  children: React.ReactNode;
  open?: boolean;
  onClick?: () => void;
};

const Modal: React.FC<Props> = ({ children, open, onClick }) => {
  return createPortal(
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-neutral/[0.1] backdrop-blur-[10px] z-[99999] flex items-center justify-center ${
        open ? "visible opacity-100" : "invisible opacity-0 delay-300"
      } transition-all duration-75`}
    >
      <div
        className={`bg-white w-[60%] px-4 py-6 rounded-md relative ${
          open
            ? "translate-y-0 visible opacity-100"
            : "translate-y-8 invisible opacity-0"
        } transition-all duration-300 max-h-[80%] overflow-y-scroll modal`}
      >
        <button className="absolute top-3 right-3" onClick={onClick}>
          <RxCross2 size={20} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
