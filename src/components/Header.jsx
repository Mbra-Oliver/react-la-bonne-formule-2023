import { useContext, useRef } from "react";
import { ManagementCartContext } from "../store/management-cart-context";
import CartModal from "./CartModal";

const Header = () => {
  const { items } = useContext(ManagementCartContext);

  const modalRef = useRef();

  const handleOpenCart = () => {
    modalRef.current.open();
  };

  let availableActions = <button>Fermer</button>;

  if (items.length > 0) {
    availableActions = (
      <>
        <button>Fermer</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modalRef} actions={availableActions} />
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
