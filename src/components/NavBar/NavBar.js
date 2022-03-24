import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    //JSX
    <header>
      <div className="navbar">
        <div className="logo-header">
          <img src="./assets/icons/ala.ico" alt="iconomarca" />
          <h1>Moshi</h1>
        </div>
        <ul>
          <li>
            <Button color="primary" className="custom-btn" variant="contained">
              Home
            </Button>
          </li>
          <li>
            <Button color="primary" variant="contained">
              Café
            </Button>
          </li>
          <li>
            <Button color="primary" variant="contained">
              Nosotros
            </Button>
          </li>
          <li>
            <Button color="primary" variant="contained">
              Contacto
            </Button>
          </li>

          <CartWidget />
        </ul>
      </div>
    </header>
  );
}
