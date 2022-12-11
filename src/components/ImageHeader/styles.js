import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-flow: nowrap column;
  gap: 30px;
  align-items: center;
  width: 100%;
  height: 35vh;
  background-blend-mode: darken;
  background: rgba(0, 0, 0, 0.5) url("/public/assets/images/image-header.jpg")
    no-repeat center center / cover;
`;
