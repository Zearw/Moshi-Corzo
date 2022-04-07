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
    {
      title: "Cápsulas",
      url: "/capsulas",
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
