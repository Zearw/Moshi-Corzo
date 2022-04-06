function onAdd({ countCart }) {
  if (countCart > 0) {
    console.log("Agregado al carrito", countCart, "items.");
  }
}

export default onAdd;
