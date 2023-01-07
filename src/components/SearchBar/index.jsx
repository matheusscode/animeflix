import * as C from "./styles";
import { BiSearchAlt2 } from "react-icons/all";
import { useState } from "react";
import { useContextAPI } from "../../context/ContextAPI";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const { animes } = useContextAPI();
  const [search, setSearch] = useState("");

  const filteredAnimes =
    search.length > 0
      ? animes.filter((anime) =>
          anime.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return (
    <C.Container>
      <C.Row className="row">
        <input
          name="search"
          type="text"
          placeholder="Buscar"
          value={search}
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="icon">
          <span>
            <BiSearchAlt2 />
          </span>
        </div>
      </C.Row>
      <div className="list">
        {search.length > 0 ? (
          <ul>
            {filteredAnimes.map((anime) => {
              return (
                <Link to={`/anime/${anime.name}`}>
                  <li key={anime.name}>{anime.name} </li>
                </Link>
              );
            })}
          </ul>
        ) : (
          <ul>
            <li>Oque vamos assistir hoje?</li>
          </ul>
        )}
      </div>
    </C.Container>
  );
}
