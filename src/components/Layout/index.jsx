import * as C from "./styles"

export default function Layout(props) {
  return(
    <C.Container>
      {props.children}
    </C.Container>
  )
}