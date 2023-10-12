import { ReactNode } from "react";

import { createPortal } from "react-dom";

interface PropsType {
  children: ReactNode;
  onClose: () => void;
}
function Modal({ children, onClose }: PropsType) {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed left-0 top-0 z-20 h-screen w-full scroll-smooth backdrop-blur-sm"
      />
      <div className="fixed right-[calc(50%-10rem)] top-60  z-30 w-80 bg-slate-100 sm:right-[calc(50%-12rem)]  sm:w-[24rem] lg:right-[calc(50%-20rem)] lg:w-[40rem]">
        {children}
      </div>
    </>,
    document.getElementById("modal-overlay")!,
  );
}

export default Modal;
