import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1550px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
  gap: 5px;
  margin-top: 30px;

  h2 {
    padding-bottom: 15px;
    border-bottom: 1px solid #202024;
  }

  @media (max-width: 1480px) {
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  padding: 10px;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-top: 10px;

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
