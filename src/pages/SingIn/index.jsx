//React
import { useState } from "react";

//Styled-Components
import * as C from "./styles";

//Components
import Layout from "../../components/Layout";

//LogoImage
import logoImg from "/public/assets/images/animexp.png";

//Toastify
import { toast } from "react-toastify";

export default function SingIn() {

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("PREENCHA OS CAMPOS");
      return;
    }
  }

  return (
    <C.Container>
      <Layout>
        <img src={logoImg} alt="anime-xp-logo" />

        <C.Form onSubmit={handleSubmit}>
          <div className="form-control">
            <C.Label>Email</C.Label>
            <C.Input
              placeholder="Insira seu email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <C.Label>Senha</C.Label>
            <C.Input
              placeholder="Insira sua senha"
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="saved-account">
            <input type="checkbox" />
            <C.Label>Deseja lembrar sua conta?</C.Label>
          </div>

          <div className="form-button">
            <C.FormInput type="submit" value="Entrar" />
          </div>

          <h4>
            Não possui uma conta? <a href="/register">Crie uma agora!</a>{" "}
          </h4>
        </C.Form>
      </Layout>
    </C.Container>
  );
}
