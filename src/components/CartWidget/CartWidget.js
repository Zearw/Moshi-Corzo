import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

export default function CartWidget() {
  return (
    <IconButton>
      <ShoppingCartOutlinedIcon />
      <span>0</span>
    </IconButton>
  );
}
