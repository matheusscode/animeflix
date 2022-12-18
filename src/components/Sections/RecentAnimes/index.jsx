import * as C from "./styles";
import AnimeCard from "../../AnimeCard";
import { useContextAPI } from "../../../context/ContextAPI";

export default function RecentAnimes() {
  const { animes } = useContextAPI();

  return (
    <C.Container>
      <C.Description>
        <h4>Confiram esse site incrível de notícias de animes:</h4>
        <h3>ANIMEBOX</h3>
        <br />
        <h2>Animes Recentes</h2>
      </C.Description>
      <C.CardContainer>
        {animes && animes.slice(0, 12).map((anime, index) => (
          <AnimeCard item={anime} key={index} />
        ))}
      </C.CardContainer>
    </C.Container>
  );
}
