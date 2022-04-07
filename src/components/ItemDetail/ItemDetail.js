import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useEffect, useState } from "react";
export default function ItemDetail({ item }) {
  const { id, imageUrl, title, description, price, stock } = item;
  const [line, setline] = useState([]);
  const [countItem, setcountItem] = useState(0);
  const [hideCounter, sethideCounter] = useState(false);

  function onAdd({ countCart }) {
    if (countCart > 0) {
      setcountItem(countCart);
      sethideCounter(true);
    }
  }

  useEffect(() => {
    console.log("Item seleccionados", countItem);
  }, [countItem]);

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
          <ItemCount
            id={id}
            stock={stock}
            initial={1}
            action={onAdd}
            hide={hideCounter}
          />
          <div className="description_info">
            <div>{line}</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
