import * as C from "./styles.js";
import { useContextAPI } from "../../context/ContextAPI.jsx";
import RelatedAnimeCard from "../RelatedAnimeCard/index.jsx";

export default function RelatedAnimes() {
  const { animes } = useContextAPI();

  return (
    <C.Container>
        {animes &&
          animes
            .slice(12, 28)
            .map((anime, index) => (
              <RelatedAnimeCard item={anime} key={index} />
            ))}
    </C.Container>
  );
}
