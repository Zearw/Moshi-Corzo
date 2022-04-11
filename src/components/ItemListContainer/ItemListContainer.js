import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import mockItems from "../../helpers/mockItems";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const { category } = useParams({});
  const [items, setItems] = useState([]);

  const getItemsDelayed = new Promise((resolve, reject) => {
    setTimeout(() => resolve(mockItems), 2000);
  });

  const getItems = async () => {
    try {
      const result = await getItemsDelayed;
      category ? filterCategory(result, category) : setItems(result);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    setItems([]);
    getItems();
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
