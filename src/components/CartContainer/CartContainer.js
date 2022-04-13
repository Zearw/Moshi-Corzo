import CartList from "../CartList/CartList";
import { Container } from "@mui/material";
import CartFooter from "../CartFooter/CartFooter";
const CartContainer = () => {
  return (
    <Container>
      <CartList />
      <CartFooter />
    </Container>
  );
};

export default CartContainer;
