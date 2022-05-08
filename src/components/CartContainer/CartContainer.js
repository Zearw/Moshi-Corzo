import "./CartContainer.css";
//components
import CartList from "../CartList/CartList";
import CartFooter from "../CartFooter/CartFooter";

const CartContainer = () => {
  return (
    <div className="container_cart">
      <CartList />
      <CartFooter />
    </div>
  );
};

export default CartContainer;
