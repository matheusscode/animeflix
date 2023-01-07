import styled from "styled-components";

export const Container = styled.div`
  max-width: 190px;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 7px, rgba(0, 0, 0, 0.6) 0px 1px 6px;

  a {
    color: #202024;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transition: 0.4s ease-in-out;
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#202024" : "#fff"};

  &:hover {
    background-color: #ff0006;
    color: #fff;
    box-shadow: rgba(222, 0, 0, 0.25) 0px 0px 5px,
      rgba(222, 0, 0, 0.3) 0px 0px 10px;

    img {
      filter: blur(2px);
    }

    .play-icon {
      display: block;
    }

    h4 {
      color: #fff;
    }
  }
  @media (max-width: 450px) {
    width: 110px;
  }
`;

export const ThumbContainer = styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }

  .play-icon {
    display: none;
    position: relative;
    left: 40%;
    color: #fff;
    bottom: 55%;
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
    height: 200px;

    img {
      width: 100%;
      height: 200px;
    }
  }

  @media (max-width: 450px) {
    height: 175px;

    img {
      height: 180px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 10px;
  gap: 10px;

  .star-icon {
    color: yellow;
    font-size: 1.2rem;
  }

  h4 {
    font-size: 0.9rem;
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#202024")};
  }

  @media (max-width: 500px) {
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 5px;
    margin-top: 5px;
  }
`;
