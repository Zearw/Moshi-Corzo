import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
//firebase
import { doc, getDoc } from "firebase/firestore";
import dataBase from "../../helpers/firebase";
//navigation
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//components
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  //Const Navigation
  const { id } = useParams();
  const navigate = useNavigate();

  const getItem = async () => {
    const itRef = doc(dataBase, "mockItems", id);
    const itSnap = await getDoc(itRef);

    if (itSnap.exists()) {
      let item = itSnap.data();
      item.id = itSnap.id;
      setItem(item);
      setLoading(false);
    } else {
      navigate("/error");
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return loading ? (
    <div className="container_loader">
      <span className="loader"></span>
    </div>
  ) : (
    <ItemDetail item={item} />
  );
}
