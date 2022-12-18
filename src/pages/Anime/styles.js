import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #000;
  background: ${(props) =>
      props.theme.mode === "dark"
        ? "  linear-gradient( to top, #202024, #202024, #202024, #202024,  rgb(0 0 0 / 0), rgb(0 0 0 / 0) )"
        : "  linear-gradient( to top, #fff, #fff, #fff, #fff, rgb(0 0 0 / 0), rgb(0 0 0 / 0) )"},
    url(${(props) => props.background}) no-repeat center center / cover;

  h3,
  h4 {
    text-shadow: 0 0 4px black;
    color: #fff;
  }

  h5 {
    font-size: 1.2rem;
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
`;

export const AnimeContainer = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 8.5rem;
  }
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 220px;
    height: 300px;
    box-shadow: 0 0 3px black;
    border-radius: 4px;
  }

  @media (max-width: 750px) {
    width: 210px;
    height: 220px;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 200px;
  }
`;

export const Status = styled.div`
  text-align: center;
  color: #fff;
  gap: 20px;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
  background-color: transparent;

  .icon-star {
    font-size: 1.7rem;
    color: #d4ad00;
  }

  @media (max-width: 750px) {
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 750px) {
    margin: 5% auto;
  }
`;

export const Description = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;

  @media (max-width: 750px) {
    width: 500px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Link = styled.a`
  border: none;
  outline: none;
  margin-top: 20px;
  padding: 10px 24px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff0006;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 8px black;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #780000;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  margin-top: 20px;
  padding: 10px 24px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff0006;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 8px black;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #780000;
  }
`;

export const RelatedAnimesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 20px;
  margin: 0 auto;
  gap: 2rem;
  max-width: 1400px;
  text-align: center;

  h2 {
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 750px) {
    padding: 60px 30px;
  }
`;
