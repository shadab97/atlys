import React, { useRef, ReactElement } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  handleClose: () => void;
  open: boolean;
  children: ReactElement;
}
function Modal({ children, handleClose, open }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleClose();
  };
  return createPortal(
    <div
      className="absolute  top-0 w-screen h-screen z-50 flex justify-center items-center backdrop-blur"
      ref={modalRef}
    >
      <div className="relative">
        <div
          onClick={(e) => closeModal(e)}
          className="flex cursor-pointer  right-4 text-xl top-2 text-white absolute justify-end"
        >
          ⤬
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
