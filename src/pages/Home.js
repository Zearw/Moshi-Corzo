import { Container } from "@mui/material";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <Container>
      <ItemListContainer title="Productos destacados" />
    </Container>
  );
};

export default Home;
