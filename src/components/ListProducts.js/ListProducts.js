import Card from "../Card/Card.js";
import products from "../helpers/productos";

export default function ListProducts() {
  return (
    <div className="container-products">
      {products.map((product) => {
        const { id } = product;
        return <Card product={product} key={id} />;
      })}
    </div>
  );
}
