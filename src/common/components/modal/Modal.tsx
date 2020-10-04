import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

interface ModalProps {
  children: ReactNode;
}
const modalRoot = document.getElementById("modal-root");

function Modal({ children }: ModalProps) {
  const el = document.createElement("div");
  useEffect(() => {
    // append to root when the children of Modal are mounted
    modalRoot?.appendChild(el);

    // do a cleanup
    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);
  // console.log("props children", props);
  return createPortal(children, el);
}

export default Modal;
