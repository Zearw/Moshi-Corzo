//context
import { useContext } from "react";
import CartContext from "../../context/CartContext";
//navigation
import { Link } from "react-router-dom";
//components
import ResponsiveDialog from "../Modal/Modal";
import { Button } from "@mui/material";

const CartFooter = () => {
  const { sumTotal, cartList } = useContext(CartContext);

  return (
    <>
      <div className="footer_cart">
        <div className="cart_title_resumen">
          <h2>Resumen de compra</h2>
        </div>
        <div className="cart_subtotal">
          <div>Subtotal:</div>
          <div className="cart_subtotal_price">
            <strong>$ {sumTotal()}</strong>
          </div>
        </div>
        {cartList.length ? (
          <div>
            <ResponsiveDialog />
            <Button>
              <Link to={"/"}>Seguí Comprando</Link>
            </Button>
          </div>
        ) : (
          <div>
            <Button>
              <Link to={"/"}>Seguí Comprando</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartFooter;
