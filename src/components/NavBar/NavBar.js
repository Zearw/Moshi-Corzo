import "./NavBar.css";
import { useState } from "react";
//navigation
import { Link } from "react-router-dom";
//components
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const pages = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Productos",
    },
    {
      title: "Nosotros",
      url: "/nosotros",
    },
    {
      title: "Preguntas Frecuentes",
      url: "/preguntas-frecuentes",
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo_header">
          <Link to={"/"}>
            <img src="../assets/icons/ala.png" alt="iconomarca" />
          </Link>
        </div>
        <ul>
          {pages.map((page, i) => {
            return page.title === "Productos" ? (
              <li key={i}>
                <Button
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="navbar_button"
                >
                  {page.title}
                </Button>
                <Menu
                  className="navbar_menu"
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/category/cafe_te">CAFE Y TE</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/category/accesorios">ACCESORIOS</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/category/cafeteras">CAFETERAS</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/category/capsulas">CAPSULAS</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/category/vajilla">VAJILLA</Link>
                  </MenuItem>
                </Menu>
              </li>
            ) : (
              <li key={i}>
                <Button size="large" className="custom-btn">
                  <Link to={page.url}>{page.title}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
        <CartWidget />
      </div>
    </header>
  );
}
