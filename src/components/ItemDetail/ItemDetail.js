import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useEffect, useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {
  const { addItemToCart, countCart } = useContext(CartContext);

  const { id, imageUrl, title, description, price, stock } = item;
  console.log("entre a ItemDetail", item);
  const [line, setline] = useState([]);
  const [hideCounter, sethideCounter] = useState(false);
  const [storedItem, setstoredItem] = useState({});

  function onAdd({ countCart, itemToCart }) {
    console.log("Desde OnAdd countCart", countCart);
    console.log("Desde OnAdd countCart", storedItem);
    if (countCart > 0) {
      console.log("desde onAdd", itemToCart);

      addItemToCart(itemToCart, countCart);
      sethideCounter(true);
    }
  }

  useEffect(() => {
    if (description) {
      setline((line) => {
        return [];
      });
      description.map((text, i) => {
        return setline((line) => {
          return [...line, <p key={i}>{text}</p>];
        });
      });
    }
  }, [description]);

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={2}
        className="container_detail"
      >
        <Grid item xs={12} md={6} className="container_detail_image">
          <img src={imageUrl} alt={imageUrl} />
        </Grid>
        <Grid item xs={12} md={6} className="container_detail_description">
          <div className="description_title">
            <h1>{title}</h1>
          </div>
          <div className="description_price">
            <p>$ {price}</p>
          </div>
          <ItemCount initial={1} stock={stock} />

          {hideCounter ? (
            <Button variant="outlined">
              <Link to={"/cart"}>Finalizar compra</Link>
            </Button>
          ) : (
            <Button
              variant="outlined"
              id={id}
              onClick={() => {
                console.log("onClick", item);
                setstoredItem(item);
                onAdd({ countCart }, item);
              }}
            >
              Agregar al carrito
            </Button>
          )}

          <div className="description_info">
            <div>{line}</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
