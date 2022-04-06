import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="container_Search">
      <div className="logo_header">
        <Link to={"/"}>
          <img src="../assets/icons/ala.png" alt="iconomarca" />
        </Link>
      </div>
      <div className="search_box">
        <div>
          <SearchIcon />
        </div>
      </div>
      <CartWidget />
    </div>
  );
};

export default SearchBox;
