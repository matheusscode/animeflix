import * as C from "./styles"
import { data } from "./data"

export default function LyricsBar() {
  return(
    <C.Container>
      {data.map(item => (
        <C.LyricButton key={item.id}>
          {item.name}
        </C.LyricButton>
      ))}
    </C.Container>
  )
}