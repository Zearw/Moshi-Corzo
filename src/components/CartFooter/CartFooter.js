import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ResponsiveDialog from "../Modal/Modal";

const CartFooter = () => {
  const { sumTotal, cartList } = useContext(CartContext);

  return (
    <>
      <div className="footer_cart">
        <div className="cart_title_resumen">
          <h2>Resumen de compra</h2>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <div>
            <p>Tienes algun cupón?</p>
          </div>
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Cupón de descuento"
          />
        </Box>

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
