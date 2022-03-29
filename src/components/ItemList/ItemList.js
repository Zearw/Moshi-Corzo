import Item from "../Item/Item.js";

export default function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => {
        const { id } = item;
        return <Item item={item} key={id} />;
      })}
    </div>
  );
}
