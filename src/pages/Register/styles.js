import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-blend-mode: darken;
  background: rgba(0, 0, 0, 0.6) url("/public/assets/images/image-header.jpg")
    no-repeat center center / cover;

  img {
    padding: 10px 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 30px;
  width: 100%;

  h4 {
    font-size: 0.9rem;
    text-align: center;
  }

  h4 a {
    text-decoration: none;
  }

  .form-control {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 10px;

    .icon {
      position: relative;
      bottom: 36px;
      right: 0;
      left: 145px;
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
      background: transparent;
      color: black;

      cursor: pointer;
    }
  }

  .form-control:nth-child(2){
    margin-top: 20px;
  }

  .form-button {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

  }
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1.1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 3px black;
`;

export const FormInput = styled.input`
  padding: 15px;
  width: 200px;
  margin: 0 auto;
  border: none;
  outline: none;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ff0006;
    color: #fff;
  }
`;
