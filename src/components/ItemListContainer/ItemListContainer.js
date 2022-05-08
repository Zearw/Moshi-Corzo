import "./ItemListContainer.css";
import { useEffect, useState } from "react";
//firebase
import dataBase from "../../helpers/firebase";
import { collection, getDocs } from "firebase/firestore";
//navigation
import { useParams } from "react-router-dom";
import BasicPagination from "../Pagination/Pagination";
//components
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer(props) {
  const { category } = useParams({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  //Estados Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentsItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Obtener datos de los productos
  const getItems = async () => {
    setLoading(true);
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
      setLoading(false);
    });
  }, [category]);

  //Filtrar Categorias
  const filterCategory = (array, categ) => {
    return array.map((it) => {
      if (it.category === categ) {
        return setItems((items) => [...items, it]);
      }
      return 0;
    });
  };

  if (loading) {
    return (
      <div className="container_loader">
        <span className="loader"></span>
      </div>
    );
  } else if (category) {
    return (
      <div>
        <h2 className="item_title">{props.title}</h2>
        <div>
          <ItemList items={items} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="item_title">{props.title}</h2>
        <div className="list_items">
          <ItemList items={currentsItems} />
        </div>
        <div>
          <BasicPagination
            itemsPerPage={itemsPerPage}
            totalItems={items.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
}
