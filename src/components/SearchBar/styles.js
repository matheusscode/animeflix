import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  &:hover .list {
    display: block;
  }

  .list {
    display: flex;
    flex-direction: column;
    width: 368px;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    padding: 0 20px;
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#ff0006" : "#f3f3f3"};
    display: none;
    box-shadow: 0 0 3px #f00006;
    z-index: 2;
    position: absolute;
    top: 334px;
    max-height: 350px;
    overflow-y: scroll;

    @media (max-width: 1000px) {
      top: 316px;
    }
  }

  .list ul {
    list-style-type: none;
  }

  .list ul li {
    padding: 20px 0;
    font-weight: 700;
    width: 100%;
  }

  &:hover .row {
    border-radius: 0;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  &:hover .icon,
  span {
    background: transparent;
  }

  @media (max-width: 770px){
    .list{
      top: 274px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 100px;
  box-shadow: 0 0 10px #3b3b3b;

  input {
    background: transparent;
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
    border: none;
    padding: 0;
    width: 300px;
    transition: all 0.4s;
    outline: none;
    padding: 1.5rem 1.5rem;
  }

  .icon {
    position: relative;
    background-color: transparent;
    border-radius: 100px;
    padding: 18px 18px 0px;

    span {
      font-size: 2rem;
      color: #f3f3f3;
    }
  }
`;
