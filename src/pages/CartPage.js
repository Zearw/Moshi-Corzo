//components
import { Container } from "@mui/material";
import CartContainer from "../components/CartContainer/CartContainer";

const CartPage = () => {
  const titleStyle = {
    textAlign: "center",
    padding: "20px",
  };
  return (
    <Container>
      <h2 style={titleStyle}>Carrito de compras</h2>
      <CartContainer />
    </Container>
  );
};

export default CartPage;
