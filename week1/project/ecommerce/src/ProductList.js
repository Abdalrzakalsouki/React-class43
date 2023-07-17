import products from "./fake-data/all-products";
import ProductCard from "./ProductCard";
const ProductList = ({ category }) => {
  const selectedItems = products.filter(
    (prodcut) => prodcut.category === category
  );
  const items = selectedItems.length !== 0 ? selectedItems : products;

  return (
    <ul className="products">
      {items.map((product) => (
        <li key={product.id} className="products-item">
          <ProductCard image={product.image} title={product.title} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
