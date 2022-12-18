//Styled-Components
import * as C from "./styles";

//React-Router
import { useParams } from "react-router-dom";

//React-Icons
import { AiFillStar } from "react-icons/all";

//Context
import { useContextAPI } from "../../context/ContextAPI";

//Components
import Loading from "../../components/Loading";
import RelatedAnimes from "../../components/RelatedAnimes";

export default function Anime() {
  const { findAnimes, isLoading } = useContextAPI();
  const { name } = useParams();

  const animeDetails = findAnimes(name);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <C.Container background={animeDetails?.background}>
          <C.AnimeContainer>
            <C.Header>
              <C.Thumb>
                <img src={animeDetails?.imgurl} alt="" />
              </C.Thumb>
              <C.Status>
                <h3>{animeDetails?.name}</h3>
                <br />
                <h4>{animeDetails?.gender}</h4>
                <h4>
                  {animeDetails?.season} | {animeDetails?.episodes}
                </h4>
                <C.ButtonsContainer>
                  <C.Link
                    target="_blank"
                    href={`https://www.youtube.com/results?search_query=trailer+${animeDetails?.name}`}
                  >
                    Trailer
                  </C.Link>
                  <C.Button>Salvar</C.Button>
                </C.ButtonsContainer>
              </C.Status>
            </C.Header>
            <C.Bar>
              <AiFillStar className="icon-star" /> <h2>TMDB 8.0</h2>
            </C.Bar>
            <C.Content>
              <C.Description>
                <h5>{animeDetails?.description}</h5>
              </C.Description>
            </C.Content>
          </C.AnimeContainer>
          <C.RelatedAnimesContainer>
            <h2>Animes Relacionados</h2>
            <RelatedAnimes />
          </C.RelatedAnimesContainer>
        </C.Container>
      )}
    </>
  );
}
