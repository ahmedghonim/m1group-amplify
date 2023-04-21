import clsx from "clsx";
import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  label: string;
  style?: string;
}
const Modal = ({ children, label, style }: ModalProps) => {
  return (
    <>
      <label
        htmlFor="my-modal-4"
        className={clsx(
          "py-2 !px-4 rounded-lg w-fit whitespace-nowrap text-md flex gap-3 duration-300 items-center disabled:opacity-25 cursor-pointer text-white",
          style
        )}
      >
        {label}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer ">
        <label className="modal-box relative max-w-[800px]" htmlFor="">
          {children}
        </label>
      </label>
    </>
  );
};

export default Modal;
