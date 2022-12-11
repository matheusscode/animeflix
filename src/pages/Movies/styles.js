import styled from "styled-components";

export const Container = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1550px;
  margin: 30px auto;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  gap: 50px;
`;
