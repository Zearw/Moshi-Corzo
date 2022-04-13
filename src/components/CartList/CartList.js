import CartItem from "../CartItem/CartItem";
import "./CartList.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartList = () => {
  const { cartList } = useContext(CartContext);

  return (
    <div className="container_cart_items">
      {cartList.length ? (
        cartList.map((cartIt) => {
          const { id } = cartIt;
          return <CartItem cartIt={cartIt} key={id} />;
        })
      ) : (
        <h3 className="cart_empty">No hay artículos en el carrito</h3>
      )}
    </div>
  );
};

export default CartList;
