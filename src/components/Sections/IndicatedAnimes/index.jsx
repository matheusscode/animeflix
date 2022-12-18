//Styled-Components
import * as C from "./styles";

//Components
import AnimeCard from "../../AnimeCard";

//Context
import { useContextAPI } from "../../../context/ContextAPI";


export default function IndicatedAnimes() {

  const { animes } = useContextAPI();

  return (
    <C.Container>
      <C.Description>
        <h2>Animes Recomendados</h2>
      </C.Description>
      <C.CardContainer>
      {animes && animes.slice(12, 24).map((anime, index) => (
          <AnimeCard item={anime} key={index} />
        ))}
      </C.CardContainer>
    </C.Container>
  );
}
