import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setcartItem] = useState([]);

  const addItemToCart = (itemToCart) => {
    let exists;
    if (cartItems.length) {
      console.log("encontro algo en cartItem", cartItems);
      exists = cartItems.find((item) => item.id === itemToCart.id);
      !exists && setcartItem((cartItems) => [...cartItems, itemToCart]);
    } else {
      console.log("no encontro nada en cartItem", itemToCart);
      setcartItem(itemToCart);
    }
  };

  const removeItemToCart = (itemToCart) => {
    setcartItem(cartItems.filter((cartItem) => cartItem.id !== itemToCart.id));
  };

  const clearCart = () => {
    setcartItem([]);
  };

  const data = {
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
