import { useContext, useRef } from "react";
import { PanierContext } from "../store/panier-context";
import CartModal from "./CartModal";

const Header = () => {
  const { items } = useContext(PanierContext);
  const modalRef = useRef();

  const handleOpenCart = () => {
    modalRef.current.open();
  };

  return (
    <>
      <CartModal ref={modalRef} />
      <header>
        <ul>
          <li className="appName">My-Shop</li>
          <li>
            <button onClick={handleOpenCart}>Panier ({items.length})</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
