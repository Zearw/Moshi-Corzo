import "./Item.css";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import IconButton from "@mui/material/IconButton";

export default function Item({ item }) {
  const { id, imageUrl, title, price } = item;
  return (
    <Link to={`/productos/${id}`}>
      <div className="product-item">
        <div className="product-item_img">
          <img src={imageUrl} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>$ {price}</p>
          <IconButton>
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </Link>
  );
}
