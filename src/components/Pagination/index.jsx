import * as C from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/all";
import { useContextAPI } from "../../context/ContextAPI";

export default function Pagination() {
  const { onLeftClickHandler, onRightClickHandler, page, totalPages } =
    useContextAPI();

  return (
    <C.Container>
      <C.Button onClick={onLeftClickHandler}>
        <IoIosArrowBack />
      </C.Button>
      <C.PageNumber>{page} de {totalPages}</C.PageNumber>
      <C.Button onClick={onRightClickHandler}>
        <IoIosArrowForward />
      </C.Button>
    </C.Container>
  );
}
