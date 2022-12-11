import * as C from "./styles";
import {
  AiFillHome,
  MdMovieCreation,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram
} from "react-icons/all";
import logoImg from "../../../public/assets/images/animexp.png";

export default function Footer() {
  return (
    <C.Footer>
        <C.LogoContainer>
          <img src={logoImg} alt="logo-img" />
        </C.LogoContainer>

        <C.NavContainer>
        <ul>
          <li><a href="/"><AiFillHome className="icon"/>Início</a></li>
          <li><a href="/"><MdMovieCreation className="icon"/>Animes</a></li>
          <li><a href="/"><MdMovieCreation className="icon"/>Filmes</a></li>
        </ul>
        <h4>Todos os direitos reservados.</h4>
        </C.NavContainer>

        <C.SocialsContainer>
          <ul>
          <li><a href="/"><AiFillGithub className="icon"/></a></li>
          <li><a href="/"><AiFillLinkedin className="icon"/></a></li>
          <li><a href="/"><AiOutlineInstagram className="icon"/></a></li>
        </ul>
        </C.SocialsContainer>

    </C.Footer>
  );
}
