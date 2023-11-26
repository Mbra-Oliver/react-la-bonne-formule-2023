import { useContext } from "react";
import { ManagementCartContext } from "../store/management-cart-context";

const Header = () => {
  const { items } = useContext(ManagementCartContext);

  return (
    <header>
      <ul>
        <li className="appName">My-Shop</li>

        <li>
          <button>Panier ({items.length})</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
