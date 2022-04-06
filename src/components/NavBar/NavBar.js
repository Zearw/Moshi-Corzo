import { Button } from "@mui/material";
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
      url: "/category/cafe_te",
    },
    {
      title: "Accesorios",
      url: "/category/accesorios",
    },
    {
      title: "Cafeteras",
      url: "/category/cafeteras",
    },
    {
      title: "Cápsulas",
      url: "/category/capsulas",
    },
  ];

  return (
    <header>
      <div className="navbar">
        <ul>
          {pages.map((page, i) => {
            return (
              <li key={i}>
                <Button size="large" className="custom-btn">
                  <Link to={page.url}>{page.title}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
