import Item from "../Item/Item.js";
import mockItems from "../helpers/mockItems";
import { useEffect, useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  const getItemsDelayed = new Promise((resolve, reject) => {
    setTimeout(() => resolve(mockItems), 2000);
  });

  const getItems = async () => {
    try {
      const result = await getItemsDelayed;
      setItems(result);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {items.map((item) => {
        const { id } = item;
        return <Item item={item} key={id} />;
      })}
    </div>
  );
}
