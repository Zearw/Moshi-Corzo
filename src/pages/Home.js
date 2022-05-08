//components
import { Container } from "@mui/material";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <Container className="container_main">
      <ItemListContainer title="Todos los productos" />
    </Container>
  );
};

export default Home;
