import "./ItemCount.css";
import React, { useEffect, useState } from "react";
//navigation
import { Link } from "react-router-dom";
//icons
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
//components
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

export default function ItemCount({ stock, initial, hide, action, id }) {
  const [countCart, setCountCart] = useState(initial);

  const sumProd = () => {
    if (countCart < stock) {
      setCountCart(countCart + 1);
    }
  };
  const restProd = () => {
    if (countCart > 0) {
      setCountCart(countCart - 1);
    }
  };

  useEffect(() => {
    setCountCart(initial);
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
