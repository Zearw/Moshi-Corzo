import { createContext, useState, forwardRef } from "react";
//components
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  //Estados Alertas
  const [openAlertError, setOpenAlertError] = useState(false);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  //Carrito
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );

  //Estados del Form
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    email2: "",
  });

  //Funciones carrito
  const addItemToCart = (itemToCart, stomp) => {
    if (isInCart(itemToCart.id)) {
      const item = cartList.find((it) => it.id === itemToCart.id);
      const { quantity, stock } = item;
      let total = stomp ? itemToCart.quantity : quantity + itemToCart.quantity;

      if (total <= stock) {
        item.quantity = total;
        const newCart = [...cartList];
        setOpenAlertSuccess(true);
        setCartList(newCart);
        localStorage.setItem("cartItem", JSON.stringify(newCart));
      } else {
        setOpenAlertError(true);
      }
    } else {
      setOpenAlertSuccess(true);
      setCartList([...cartList, itemToCart]);
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...cartList, itemToCart])
      );
    }
  };

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const removeItemToCart = (itemToCart) => {
    let temp = cartList.filter((cartItem) => cartItem.id !== itemToCart.id);
    setCartList(temp);
    localStorage.setItem("cartItem", JSON.stringify([temp]));
  };

  const clearCart = () => {
    localStorage.clear();
    setCartList([]);
  };

  const sumTotal = () => {
    return cartList.reduce(
      (acc, it) => (acc = acc + it.quantity * it.price),
      0
    );
  };

  const cant = () => {
    return cartList.reduce((acum, it) => (acum += it.quantity), 0);
  };

  // Alertas
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const closeAlertError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlertError(false);
  };
  const closeAlertSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlertSuccess(false);
  };

  //Value del CartContext
  const data = {
    cartList,
    dataForm,
    addItemToCart,
    removeItemToCart,
    clearCart,
    isInCart,
    sumTotal,
    cant,
    setDataForm,
  };

  return (
    <CartContext.Provider value={data}>
      {children}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openAlertError}
          autoHideDuration={1500}
          onClose={closeAlertError}
        >
          <Alert
            onClose={closeAlertError}
            severity="error"
            sx={{ width: "100%" }}
          >
            Estas excediendo el stock disponible.
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openAlertSuccess}
          autoHideDuration={1000}
          onClose={closeAlertSuccess}
        >
          <Alert
            onClose={closeAlertSuccess}
            severity="success"
            sx={{ width: "100%" }}
          >
            Se agrego un articulo al carrito!
          </Alert>
        </Snackbar>
      </Stack>
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
