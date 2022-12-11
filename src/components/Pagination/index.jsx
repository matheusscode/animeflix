import * as C from "./styles"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all"

export default function Pagination() {
  return(
    <C.Container>
      <C.Button>
      <IoIosArrowBack/>
      </C.Button>

      <C.PageNumber>
        1 de 10
      </C.PageNumber>

      <C.Button>
        <IoIosArrowForward/>
      </C.Button>
    </C.Container>
  )
}