import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
function App() {
  const canDisplayCart = useSelector((state) => state.cartReducer.viewCart);

  return (
    <>
      <Navigation />
      <main>
        {canDisplayCart && <Cart />}
        <Products />
      </main>
    </>
  );
}

export default App;
