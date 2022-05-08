import "./Item.css";
//context
import CartContext from "../../context/CartContext";
import { useContext } from "react";
//navigation
import { Link } from "react-router-dom";
//icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
//components
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function Item({ item }) {
  const { id, imageUrl, title, price } = item;
  const { addItemToCart } = useContext(CartContext);

  const addItCart = (e) => {
    e.preventDefault();
    addItemToCart({ ...item, quantity: 1 }, false);
  };

  return (
    <Link to={`/item/${id}`}>
      <Card sx={{ maxWidth: 345, maxHeight: 400 }} id={id}>
        <CardHeader title={title} sx={{ height: 96 }} />
        <div className="card_img">
          <CardMedia
            component="img"
            image={`../assets/images/${imageUrl}`}
            alt={title}
          />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={addItCart}>
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
}
