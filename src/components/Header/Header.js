import "./Header.css";
//components
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="container_header">
      <div className="top_nav">
        <p>
          <strong>Envíos gratis</strong> a partir desde $5000
        </p>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
