import Card from "../Card/Card.js";
import products from "../helpers/productos";
import "./ItemListContainer.css";

export default function ItemListContainer(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div>
        {products.map((product) => {
          const { id } = product;
          return <Card product={product} key={id} />;
        })}
      </div>
    </>
  );
}
