//Styled-Components
import * as C from "./styles";

//Components
import SearchBar from "../../components/SearchBar";
import LyricsBar from "../../components/LyricsBar";
import GenrerBar from "../../components/GenrerBar";
import RecentAnimes from "../../components/Sections/RecentAnimes";
import IndicatedAnimes from "../../components/Sections/IndicatedAnimes";
import Loading from "../../components/Loading";
import ImageHeader from "../../components/ImageHeader";
import ImageFooter from "../../components/ImageFooter";

//Context
import { useContextAPI } from "../../context/ContextAPI";

//Images
import logoImg from "/public/assets/images/animexp.png";


export default function Home() {
  const { isLoading } = useContextAPI();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <C.Container>
          <ImageHeader>
            <img src={logoImg} alt="" />
            <SearchBar />
          </ImageHeader>
          <C.Flex>
            <C.Column>
              <LyricsBar />
              <C.AnimeBox>
                <RecentAnimes />
                <IndicatedAnimes />
              </C.AnimeBox>
            </C.Column>
            <GenrerBar />
          </C.Flex>
          <ImageFooter>
            <h2>
              <em>"O sucesso só existe para quem não nunca desiste."</em>
            </h2>
          </ImageFooter>
        </C.Container>
      )}
    </>
  );
}
