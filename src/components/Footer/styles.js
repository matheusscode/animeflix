import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  justify-content: space-around;
  text-align: center;

  @media (max-width: 930px) {
    flex-direction: column;
  }

  @media (max-width: 750px) {
    margin-top: 70px;
    gap: 20px;
  }
`;

export const LogoContainer = styled.div``;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-flow: column;
  width: 309px;

  ul {
    display: flex;
    list-style-type: none;
    gap: 20px;
  }

  ul li a {
    display: flex;
    gap: 8px;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
  }

  ul li a .icon {
    color: #ff0000;
    font-size: 1.5rem;
  }
`;

export const SocialsContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style-type: none;
    gap: 15px;
  }

  ul li a {
    display: flex;
    gap: 8px;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    color: #202024;
  }

  ul li a .icon {
    font-size: 2.1rem;
    padding: 2px;
    color: #ff0000;
    transition: 0.2s;
  }

  ul li a .icon:hover {
    background-color: #ff0000;
    border-radius: 8px;
    color: #fff;
    transform: scale(1.05);
  }
`;
