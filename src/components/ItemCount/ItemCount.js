import React, { useEffect, useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import IconButton from "@mui/material/IconButton";
import "./ItemCount.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, initial, hide, action, id }) {
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

  useEffect(() => {
    setcountCart(initial);
  }, [initial]);

  return (
    <>
      {hide ? (
        <Button variant="outlined">
          <Link to={"/cart"}>Finalizar compra</Link>
        </Button>
      ) : (
        <>
          <div className="item-button">
            <IconButton
              onClick={restProd}
              disabled={countCart === 1 ? true : false}
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
          <Button
            variant="outlined"
            id={id}
            onClick={() => {
              action({ countCart });
            }}
          >
            Agregar al carrito
          </Button>
        </>
      )}
    </>
  );
}
