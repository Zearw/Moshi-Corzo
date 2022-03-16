import { Button } from "@mui/material";

export default function NavBar() {
  return (
    //JSX
    <header>
      <div className="navbar">
        <div className="logo-header">
          <img src="./ala.ico" alt="iconomarca" />
        </div>
        <ul>
          <li>
            <Button
              color="secondary"
              className="custom-btn"
              variant="contained"
            >
              Home
            </Button>
          </li>
          <li>
            <Button color="secondary" variant="contained">
              Café
            </Button>
          </li>
          <li>
            <Button color="secondary" variant="contained">
              Nosotros
            </Button>
          </li>
          <li>
            <Button color="secondary" variant="contained">
              Contacto
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
