import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Cart } from "./Cart";

const CartModal = forwardRef(function Modal({}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>Panier</h2>

      <Cart />
      <form method="dialog">
        <button>Fermer</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default CartModal;
