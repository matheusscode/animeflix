//Styled-Components
import * as C from "./styles";

//Components
import AnimeCard from "../../components/AnimeCard";
import Pagination from "../../components/Pagination";
import GenrerBar from "../../components/GenrerBar";
import Loading from "../../components/Loading";

//Context
import { useContextAPI } from "../../context/ContextAPI";

export default function Movies() {
  const { animes, isLoading } = useContextAPI();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <C.Container>
          <C.FlexContainer>
            <C.Main>
              <C.CardsContainer>
                {animes &&
                  animes
                    .slice(32, 56)
                    .map((anime, index) => (
                      <AnimeCard item={anime} key={index} />
                    ))}
              </C.CardsContainer>
              <Pagination />
            </C.Main>
            <GenrerBar />
          </C.FlexContainer>
        </C.Container>
      )}
    </>
  );
}
