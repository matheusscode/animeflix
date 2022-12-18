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

//React-Icons
import { IoEyeSharp, HiEyeSlash } from "react-icons/all";

export default function Register() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("PREENCHA OS CAMPOS!");
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
          <div className="form-control password">
            <C.Label>Senha</C.Label>
            <C.Input
              placeholder="Insira sua senha"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="icon">
              {show ? <IoEyeSharp /> : <HiEyeSlash />}
            </button>
          </div>
          <div className="form-control password">
            <C.Label>Confirmar senha</C.Label>
            <C.Input
              placeholder="Confirme sua senha"
              type={show ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="icon">
              {show ? <IoEyeSharp /> : <HiEyeSlash />}
            </button>
          </div>
          <div className="form-button">
            <C.FormInput type="submit" value="Cadastrar" />
          </div>
          <h4>
            Já possui uma conta? <a href="/sing-in">Faça Login!</a>{" "}
          </h4>
        </C.Form>
      </Layout>
    </C.Container>
  );
}
