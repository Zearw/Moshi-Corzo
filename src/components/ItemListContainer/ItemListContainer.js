import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <ItemList />
    </>
  );
}
