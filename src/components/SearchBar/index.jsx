import * as C from "./styles";
import { BiSearchAlt2, HiOutlineXMark } from "react-icons/all";

export default function SearchBar() {
  return (
    <C.Container>
      <C.Row>
        <input type="text" placeholder="Search" />
        <div className="icons">
          <span className="search">
            <BiSearchAlt2 />
          </span>
          <span className="x-mark">
            <HiOutlineXMark />
          </span>
        </div>
      </C.Row>
    </C.Container>
  );
}
