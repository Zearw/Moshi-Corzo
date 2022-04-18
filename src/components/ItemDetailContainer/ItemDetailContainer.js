import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import dataBase from "../../helpers/firebase";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = async () => {
    const itRef = doc(dataBase, "mockItems", id);
    const itSnap = await getDoc(itRef);

    if (itSnap.exists()) {
      let item = itSnap.data();
      item.id = itSnap.id;
      setItem(item);
    } else {
      console.log("No existe el producto");
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return <ItemDetail item={item} />;
}
