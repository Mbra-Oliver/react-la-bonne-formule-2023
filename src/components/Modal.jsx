import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, onClose, children }, ref) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);

  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
