import Item from "../Item/Item.js";

export default function ItemList({ items }) {
  return (
    <>
      {items.map((item) => {
        const { id } = item;
        return <Item item={item} key={id} />;
      })}
    </>
  );
}
