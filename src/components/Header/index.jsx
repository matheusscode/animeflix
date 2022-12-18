import * as C from "./styles";
import {
  AiFillHome,
  MdMovieCreation,
  FaUserAlt,
  FaBars,
  HiXMark,
} from "react-icons/all";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [activeNav, setActiveNav] = useState("");

  const handleToggleMenu = () => {
    document.body.classList.toggle("open-menu");
  };

  return (
    <C.Header>
      <C.MenuButton onClick={handleToggleMenu}>
        <FaBars className="burger-icon" />
      </C.MenuButton>
      <C.Nav>
        <C.MenuCloseButton onClick={handleToggleMenu}>
          <HiXMark className="xmark-icon" />
        </C.MenuCloseButton>
        <ul>
          <li>
            <NavLink className={activeNav === "/" ? "active" : " "} to="/">
              <AiFillHome className="icon" />
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              className={activeNav === "/animes" ? "active" : " "}
              to="/animes"
            >
              <MdMovieCreation className="icon" />
              Animes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={activeNav === "/movies" ? "active" : " "}
              to="/movies"
            >
              <MdMovieCreation className="icon" />
              Filmes
            </NavLink>
          </li>
        </ul>
      </C.Nav>
      <C.AccessArea>
        <C.Button href="/sing-in">
          <FaUserAlt />
          Entrar
        </C.Button>
        <C.Button href="/register">Registre-se</C.Button>
      </C.AccessArea>
    </C.Header>
  );
}
