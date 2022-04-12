import "./Item.css";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import IconButton from "@mui/material/IconButton";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

export default function Item({ item }) {
  const { id, imageUrl, title, price, category } = item;
  const { addItemToCart } = useContext(CartContext);

  const addItCart = (e) => {
    e.preventDefault();
    addItemToCart({ ...item, quantity: 1 }, false);
  };

  return (
    <Link to={`/${category}/${id}`}>
      <div className="product-item">
        <div className="product-item_img">
          <img src={imageUrl} alt={imageUrl} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>
            <strong>$ {price}</strong>
          </p>
          <IconButton onClick={addItCart}>
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </Link>
  );
}
