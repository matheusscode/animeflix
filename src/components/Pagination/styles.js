import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const PageNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`

export const Button = styled.button`
  border: none;
  outline: none;
  box-shadow: 0 0 1px black;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: 800;
  transition: 0.3s;
  background-color: #ff0006;
  color: #fff;
  transition: .2s;

  &:hover{
    background-color: #ff0020;
  }
`
