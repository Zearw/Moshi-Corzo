import "./CartWidget.css";
import { useContext, useState } from "react";
//context
import CartContext from "../../context/CartContext";
//navigation
import { Link } from "react-router-dom";
//icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
//components
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function CartWidget() {
  const { cartList, removeItemToCart, clearCart, cant } =
    useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (ev) => {
    ev.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <div
      onClick={handleClick}
      size="small"
      sx={{ ml: 2 }}
      aria-controls={open ? "account-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
    >
      <AccordionSummary>
        <ShoppingCartOutlinedIcon />
        <span>{cartList.length >= 1 && cant()}</span>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <h3 className="cart_title">Carrito de compras</h3>
          <Divider />
          <div>
            {cartList.length ? (
              cartList.map((cartItem, i) => {
                const { id, imageUrl, title, price } = cartItem;
                return (
                  <MenuItem
                    className="cart_item"
                    divider={true}
                    key={i}
                    id={id}
                  >
                    <div className="cart_item_img">
                      <img
                        src={`../assets/images/${imageUrl}`}
                        alt={`${imageUrl}`}
                      />
                    </div>
                    <div className="cart_item_title">
                      <p>{title}</p>
                    </div>
                    <div className="cart_item_price">
                      <span>$ {price}</span>
                    </div>
                    <Button
                      className="cart_item_action"
                      onClick={() => removeItemToCart(cartItem)}
                    >
                      <ClearOutlinedIcon />
                    </Button>
                  </MenuItem>
                );
              })
            ) : (
              <h3 className="cart_empty">No hay nada por aquí</h3>
            )}
          </div>

          {cartList.length ? (
            <div className="footer_modal_cart">
              <Button className="btn-custom">
                <Link to="/cart">Iniciar la compra</Link>
              </Button>
              <Button className="btn-custom" onClick={clearCart}>
                <span>Vaciar Carrito</span>
              </Button>
            </div>
          ) : (
            <div>
              <Button>
                <Link to={"/"}>Seguí Comprando</Link>
              </Button>
            </div>
          )}
        </Menu>
      </AccordionSummary>
    </div>
  );
}
