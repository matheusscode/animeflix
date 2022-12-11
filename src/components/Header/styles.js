import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 80px;
  margin: 0 auto;
  max-width: 1500px;

  @media (max-width: 1000px) {
    height: 60px;
  }
`;

export const MenuButton = styled.button`
  .burger-icon {
    color: ${(props) => (props.theme.mode === "dark" ? "#f3f3f3" : "#202024")};
  }

  display: none;
  transition: 0.4s;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    position: absolute;
    left: 15px;
    background: none;
    border: none;
    font-size: 1.6rem;
    padding: 10px;
    cursor: pointer;
    border-radius: 7px;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#191919" : "#f3f3f3"};
  }
`;

export const MenuCloseButton = styled.button`
  .xmark-icon {
    color: ${(props) => (props.theme.mode === "dark" ? "#f3f3f3" : "#202024")};
  }

  display: none;
  position: absolute;
  left: 15px;
  top: 10px;
  padding: 5px 7px 0;
  border: none;
  outline: none;
  font-size: 2rem;
  z-index: 2;
  font-weight: 800;
  cursor: pointer;
  transition: 0.4s;
  background: none;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#191919" : "#f3f3f3"};
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    gap: 25px;
  }

  ul li a {
    display: flex;
    align-items: center;
    gap: 7px;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
  }

  ul li a .icon {
    color: #ff0006;
  }

  a.active {
    padding-left: 5px;
    border-left: 3px solid #ff0006;
  }

  @media (max-width: 1000px) {
    display: none;

    body.open-menu & {
      display: flex;
      position: fixed;
      height: 100%;
    }

    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "rgba(0, 0,0, 0.95)" : "#f3f3f3"};
    position: absolute;
    top: 0%;
    right: 0%;
    height: 100%;
    z-index: 2;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      list-style-type: none;
      gap: 30px;
    }

    ul li a {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      font-size: 1.7rem;
    }

    ul li a .icon {
      color: #ff0006;
      font-size: 1.9rem;
    }
  }
`;

export const AccessArea = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  padding: 15px 30px;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;

  &:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    background: none;
    background-color: #ff0000;
    padding: 0 36px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1.2rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  &:nth-child(2) {
    border-radius: 4px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
