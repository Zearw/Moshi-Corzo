import React, { useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import "./ItemCount.css";

export default function ItemCount({ id, stock, initial, onAdd }) {
  const [countCart, setcountCart] = useState(initial);
  const sumProd = () => {
    if (countCart < stock) {
      setcountCart(countCart + 1);
    }
  };
  const restProd = () => {
    if (countCart > 0) {
      setcountCart(countCart - 1);
    }
  };

  return (
    <>
      <div className="item-button">
        <IconButton
          onClick={restProd}
          disabled={countCart === initial ? true : false}
        >
          <IndeterminateCheckBoxOutlinedIcon />
        </IconButton>
        <p>{countCart}</p>

        <IconButton
          onClick={sumProd}
          disabled={countCart === stock ? true : false}
        >
          <AddBoxOutlinedIcon />
        </IconButton>
      </div>
      <Button variant="outlined" id={id} onClick={() => onAdd({ countCart })}>
        Agregar al carrito
      </Button>
    </>
  );
}
