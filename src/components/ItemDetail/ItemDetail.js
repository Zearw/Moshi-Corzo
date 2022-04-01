import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemCount from "../ItemCount/ItemCount";
import onAdd from "../helpers/functions";
import "./ItemDetail.css";
export default function ItemDetail({ item }) {
  const { id, imageUrl, title, description, price, stock } = item;

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={2}
        className="container_detail"
      >
        <Grid item xs={8} md={3} className="container_detail_image">
          <img src={imageUrl} />
        </Grid>
        <Grid item xs={8} md={3} className="container_detail_description">
          <div className="description_title">
            <h1>{title}</h1>
          </div>
          <div className="description_price">
            <p>$ {price}</p>
          </div>
          <ItemCount stock={stock} id={id} initial={1} onAdd={onAdd} />
          <div className="description_info">
            <p>{description}</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
