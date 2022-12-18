//Styled-Components
import * as C from "./styles";
import FooterImg from "/public/assets/images/image-footer.png"

export default function ImageFooter(props) {
  return <C.Container image={FooterImg}>{props.children}</C.Container>;
}
