import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 200px;

  @media (max-width: 1480px) {
    display: none;
  }
`;

export const Genrers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Genrer = styled.button`
  padding: 8px;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#ff0000" : " #202024"};

  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? " #fff" : "#ff0000"};
    color: ${(props) => (props.theme.mode === "dark" ? "#ff0000" : "#fff")};
  }
`;
