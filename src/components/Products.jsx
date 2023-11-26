import { DUMMY_PRODUCTS } from "../MOCK_DATA";
import ProductItem from "./ProductItem";

const Product = () => {
  return (
    <div className="products-container">
      {DUMMY_PRODUCTS.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
};

export default Product;
