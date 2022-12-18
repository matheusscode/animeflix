import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(122, 0, 0, 0.8);
  padding: 10px;

  a {
    transition: 0.5s;
  }

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
  }
`;

export const ThumbContainer = styled.div`
  width: 190px;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  .play-icon {
    display: none;
    position: relative;
    left: 40%;
    color: #fff;
    bottom: 55%;
    font-size: 2.5rem;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;

  .star-icon {
    color: yellow;
    font-size: 1.1rem;
  }

  p {
    font-weight: 600;
    padding: 0.7rem 0.3rem;
    color: #f0f0f0;
    font-size: 0.8rem;
    text-align: left;
  }
`;
