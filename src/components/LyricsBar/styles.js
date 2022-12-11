import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 10px;
  align-items: center;
  gap: 0.590rem;
  max-width: 1550px;
  
  @media (max-width: 1480px){
    justify-content: center;
    padding: 0;
  }
`;

export const LyricButton = styled.button`
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0 3px black;
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  border: 1px solid #ff0000;
  transition: 0.4s;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: #ff0000;
  color: #fff;

  &:hover {
    background-color: transparent;
    border: 1px solid #ff0000;
    color: #ff0000;
  }
`;
