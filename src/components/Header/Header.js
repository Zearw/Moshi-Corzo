import NavBar from "../NavBar/NavBar";
import SearchBox from "../SearchBox/SearchBox";
import "./Header.css";

const Header = () => {
  return (
    <div className="container_header">
      <div className="top_nav">
        <p>
          <strong>Envíos gratis</strong> a partir desde $5000
        </p>
      </div>
      <SearchBox />
      <NavBar />
    </div>
  );
};

export default Header;
