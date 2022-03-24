import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";
import onAdd from "../helpers/functions";

export default function Card({ product }) {
  const { id, title, description, price, stock } = product;
  return (
    <div className="product-item">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>$ {price}</p>
        <ItemCount stock={stock} id={id} initial={0} onAdd={onAdd} />
      </div>
    </div>
  );
}