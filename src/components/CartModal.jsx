import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(function Modal({ actions }, ref) {
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
      <form method="dialog">{actions}</form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default CartModal;
