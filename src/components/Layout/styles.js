import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: #202024;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  height: 550px;
  border-radius: 24px;

  position: absolute;
  top: 20%;
  left: 0%;
  right: 0%;

  @media (max-width: 700px) {
    max-width: 350px;
    top: 10%;
  }
`;
