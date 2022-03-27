import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";

export default function CartWidget() {
  return (
    <Button color="primary" variant="contained">
      <ShoppingCartIcon />
      <span>0</span>
    </Button>
  );
}
