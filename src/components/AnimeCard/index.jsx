import * as C from "./styles";
import { AiFillPlayCircle, AiFillStar } from "react-icons/all";
import { Link } from "react-router-dom";

export default function AnimeCard({ item }) {
  const { name, imgurl, rating } = item;

  return (
    <C.Container>
      <Link to={`/anime/${name}`}>
        <C.Card>
          <C.ThumbContainer>
            <img src={imgurl} alt={name} />
            <AiFillPlayCircle className="play-icon" />
          </C.ThumbContainer>

          <C.Description>
              <AiFillStar className="star-icon" />
            <h4>{rating}</h4>
          </C.Description>
        </C.Card>
      </Link>
    </C.Container>
  );
}
