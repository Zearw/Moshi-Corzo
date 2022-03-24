import React, { useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

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
        <button onClick={restProd}>
          <IndeterminateCheckBoxOutlinedIcon />
        </button>
        <p>{countCart}</p>
        <button onClick={sumProd}>
          <AddBoxOutlinedIcon />
        </button>
      </div>
      <button id={id} onClick={() => onAdd({ countCart })}>
        Agregar al carrito
      </button>
    </>
  );
}
