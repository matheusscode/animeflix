import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;

  &:hover input,
  input:focus,
  input:not(:placeholder-shown) {
    width: 300px;
    padding: 1rem;
    padding-left: 1.5rem;
  }

  &:hover .x-mark,
  input:focus ~ .icons .x-mark,
  input:not(:placeholder-shown) ~ .icons .x-mark {
    opacity: 1;
    color: #000;
  }

  &:hover .search,
  input:focus ~ .icons .search,
  input:not(:placeholder-shown) ~ .icons .search {
    opacity: 0;
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
    width: 0;
    transition: all 0.4s;
    outline: none;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 7px;
    border-radius: 50%;
    background: #ffffff;
  }

  .icons span {
    display: flex;
    position: absolute;
    color: #000;
    font-size: 1.3rem;
  }

  .icons .x-mark {
    opacity: 0;
  }
`;
