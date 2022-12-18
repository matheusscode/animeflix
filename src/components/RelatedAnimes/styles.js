import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  overflow-x: scroll;
  background: ${(props) =>
    props.theme.mode === "dark" ? "#111111" : "#f9f9f9"};
  padding: 30px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;

  &::-webkit-scrollbar {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    height: 8px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    width: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 14px;
  }

  @media (max-width: 750px) {
    gap: 2.5rem;
  }
`;
