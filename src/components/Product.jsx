import { DUMMY_PRODUCTS } from "../MOCK_DATA";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="products-container">
      {DUMMY_PRODUCTS.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
};

export default Products;
