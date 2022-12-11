import styled, { createGlobalStyle } from "styled-components";

export const AppStyled = createGlobalStyle`
 
 html{
    scroll-behavior: smooth;
  }

  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#202024" : "#fff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#202024")};
   height: 100vh; 
  }

  body.open-menu{
    overflow: hidden;
  }

  a, h1, h2, h3, h4, h5, p{
    text-decoration: none;
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#202024")};
  }`;

export const Button = styled.button`
  .button-icon {
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#202024")};
  }

  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#ff0006" : "#f3f3f3"};
  padding: 13px 15px 9px;
  border: none;
  box-shadow: 0 0 3px black;
  font-size: 1.5rem;
  border-radius: 100%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;


`;
