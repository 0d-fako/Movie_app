import { React } from "react";
import style  from "./header.module.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Movie App</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
