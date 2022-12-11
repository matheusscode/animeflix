import * as C from "./styles"
import { genrer } from "./data"

export default function GenrerBar() {
  return(
    <C.Container>
      
      <h1>Gêneros</h1>

      <C.Genrers>
        {genrer.map(item => (
          <C.Genrer key={item.id}>
            {item.name}
          </C.Genrer>
        ))}
      </C.Genrers>
    </C.Container>
  )
}