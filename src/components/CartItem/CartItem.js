import MenuItem from "@mui/material/MenuItem";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Button } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import IconButton from "@mui/material/IconButton";
import "./CartItem.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({ cartIt }) => {
  const { id, imageUrl, title, price, quantity, stock } = cartIt;
  const { removeItemToCart, addItemToCart } = useContext(CartContext);

  const auxSum = () => {
    addItemToCart({ ...cartIt, quantity: quantity + 1 }, true);
  };
  const auxRes = () => {
    addItemToCart({ ...cartIt, quantity: quantity - 1 }, true);
  };

  return (
    <>
      <div className="container_cart_item" id={id}>
        <MenuItem className="cart_item" divider={true}>
          <div className="cart_item_img">
            <img src={imageUrl} alt={imageUrl} />
          </div>
          <div className="cart_item_title">
            <p>
              <>{title}</>
            </p>
          </div>
          <div className="cart_item_quantity">
            <div className="item-button">
              <IconButton
                disabled={quantity === 1 ? true : false}
                onClick={auxRes}
              >
                <IndeterminateCheckBoxOutlinedIcon />
              </IconButton>
              <p>{quantity}</p>

              <IconButton
                onClick={auxSum}
                disabled={quantity === stock ? true : false}
              >
                <AddBoxOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <div className="cart_item_price">
            <span>$ {price * quantity}</span>
          </div>
          <Button
            className="cart_item_action"
            onClick={() => removeItemToCart(cartIt)}
          >
            <ClearOutlinedIcon />
          </Button>
        </MenuItem>
      </div>
    </>
  );
};

export default CartItem;
