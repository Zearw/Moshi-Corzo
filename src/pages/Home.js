import { Container } from "@mui/material";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <Container className="container_main">
      <ItemListContainer title="Productos destacados" />
    </Container>
  );
};

export default Home;
