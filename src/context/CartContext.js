import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItemToCart = (itemToCart, stomp) => {
    if (isInCart(itemToCart.id)) {
      const item = cartList.find((it) => it.id === itemToCart.id);
      const { quantity } = item;
      let total = stomp ? itemToCart.quantity : quantity + itemToCart.quantity;

      if (total <= item.stock) {
        item.quantity = total;
        const newCart = [...cartList];
        setCartList(newCart);
      } else {
        console.log(
          "Estas excediendo el stock. Stock disponible: ",
          item.stock
        );
      }
    } else {
      setCartList([...cartList, itemToCart]);
    }
  };

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const removeItemToCart = (itemToCart) => {
    setCartList(cartList.filter((cartItem) => cartItem.id !== itemToCart.id));
  };

  const clearCart = () => {
    setCartList([]);
  };

  const data = {
    cartList,
    addItemToCart,
    removeItemToCart,
    clearCart,
    isInCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
