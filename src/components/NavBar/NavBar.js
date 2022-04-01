import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom";

export default function NavBar() {
  const pages = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Café y Té",
      url: "/cafe_te",
    },
    {
      title: "Accesorios",
      url: "/accesorios",
    },
    {
      title: "Cafeteras",
      url: "/cafeteras",
    },
  ];

  return (
    <header>
      <div className="navbar">
        <div className="logo-header">
          <img src="../assets/icons/ala.ico" alt="iconomarca" />
          <h1>Moshi</h1>
        </div>
        <ul>
          {pages.map((page) => {
            return (
              <li>
                <Button color="primary" size="large" className="custom-btn">
                  <Link to={page.url}>{page.title}</Link>
                </Button>
              </li>
            );
          })}

          <CartWidget />
        </ul>
      </div>
    </header>
  );
}
