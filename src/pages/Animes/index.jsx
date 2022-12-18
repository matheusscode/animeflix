//Styled-Components
import * as C from "./styles";

//Components
import AnimeCard from "../../components/AnimeCard";
import GenrerBar from "../../components/GenrerBar";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

//Context
import { useContextAPI } from "../../context/ContextAPI";

export default function Animes() {
  const { animes, isLoading } = useContextAPI();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <C.Container>
          <C.Main>
            <C.CardsContainer>
              {animes &&
                animes
                  .slice(12, 36)
                  .map((anime, index) => (
                    <AnimeCard item={anime} key={index} />
                  ))}
            </C.CardsContainer>
            <Pagination />
          </C.Main>
          <GenrerBar />
        </C.Container>
      )}
    </>
  );
}
