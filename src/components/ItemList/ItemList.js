import Item from "../Item/Item.js";
//components
import Grid from "@mui/material/Grid";

export default function ItemList({ items }) {
  return (
    <Grid container direction="row" spacing={1} justifyContent="center">
      {items.map((item) => {
        const { id } = item;
        return (
          <Grid item md={6} xl={4} key={id}>
            <Item item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
