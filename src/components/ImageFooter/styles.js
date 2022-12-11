import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-flow: nowrap column;
  gap: 30px;
  align-items: center;
  width: 100%;
  height: 35vh;
  background-blend-mode: darken;
  background: rgba(0, 0, 0, 0.5) url("/public/assets/images/image-footer.png")
    no-repeat center center / cover;

  h2 {
    text-align: center;
    color: #fff;
    text-shadow: 0 0 10px black;
  }
`;
