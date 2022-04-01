import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import mockItems from "../helpers/mockItems";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    filterItem(mockItems, id);
  }, [id]);

  const filterItem = (array, id) => {
    return array.map((item) => {
      if (item.id === id) {
        return setItem(item);
      }
    });
  };

  return <ItemDetail item={item} />;
}