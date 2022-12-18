import * as C from "./styles";
import { Link } from "react-router-dom";
import { AiFillPlayCircle, AiFillStar } from "react-icons/all";

export default function RelatedAnimeCard({ item }) {
  const { name, imgurl, rating } = item;

  return (
    <>
      <C.Container>
        <Link to={`/anime/${name}`}>
          <C.ThumbContainer>
            <img src={item.imgurl} alt={item.name} />
            <AiFillPlayCircle className="play-icon" />
          </C.ThumbContainer>
          <C.Description>
            <AiFillStar className="star-icon" />
            <p>{item.rating}</p>
          </C.Description>
        </Link>
      </C.Container>
    </>
  );
}
