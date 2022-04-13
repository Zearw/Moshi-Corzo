import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useEffect, useState, useContext } from "react";
import CartContext from "../../context/CartContext";

export default function ItemDetail({ item }) {
  const { addItemToCart, cartList, isInCart } = useContext(CartContext);
  const { id, imageUrl, title, description, price, stock } = item;
  const [line, setline] = useState([]);
  const [hideCounter, sethideCounter] = useState(false);
  const [initial, setInitial] = useState(1);

  function onAdd({ countCart }) {
    addItemToCart({ ...item, quantity: countCart }, true);
    sethideCounter(true);
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

    if (isInCart(id)) {
      const cartItem = cartList.find((it) => it.id === id);
      const { quantity } = cartItem;
      setInitial(quantity);
    }
  }, [description, initial]);

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
          <ItemCount
            initial={initial}
            stock={stock}
            hide={hideCounter}
            action={onAdd}
            id={id}
          />
          <div className="description_info">
            <div>{line}</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
