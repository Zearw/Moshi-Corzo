import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataBase from "../../helpers/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ItemListContainer(props) {
  const { category } = useParams({});
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const itemCollection = collection(dataBase, "mockItems");
    const itemsSnapshot = await getDocs(itemCollection);
    const itemList = itemsSnapshot.docs.map((doc) => {
      let item = doc.data();
      item.id = doc.id;
      return item;
    });
    return itemList;
  };

  useEffect(() => {
    setItems([]);
    getItems().then((items) => {
      category ? filterCategory(items, category) : setItems(items);
    });
  }, [category]);

  const filterCategory = (array, categ) => {
    return array.map((it) => {
      if (it.category === category) {
        return setItems((items) => [...items, it]);
      }
      return 0;
    });
  };

  return items.length ? (
    <div>
      <h2 className="item_title">{props.title}</h2>
      <div>
        <ItemList items={items} />
      </div>
    </div>
  ) : (
    <div className="container_loader">
      <span className="loader"></span>
    </div>
  );
}
