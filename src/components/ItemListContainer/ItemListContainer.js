import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import mockItems from "../helpers/mockItems";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";

export default function ItemListContainer(props) {
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

  return items.length ? (
    <>
      <h2>{props.title}</h2>
      <ItemList items={items} />
    </>
  ) : (
    <h2>Cargando items</h2>
  );
}
