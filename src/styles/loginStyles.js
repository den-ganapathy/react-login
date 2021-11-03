import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  justify-content: center;
  align-items: center;
  .login-container {
    border-radius: 0.5rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 0 5px grey;
    background-color: white;
    & .signin {
      margin: 2rem auto;
      margin-bottom: 0;
      width: 90%;
      border: none;
      cursor: pointer;
      border-radius: 0.5rem;
      background-color: #123456;
      padding: 0.8rem 0;
      color: white;
      font-weight: bold;
      :hover {
        opacity: 0.9;
      }
    }
    .textstyle {
      text-align: center;
      margin: 2rem;
    }
    .icons {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export const InputWrapper = styled.div`
  .label {
    padding: 1rem 0;
  }
  .inputbox {
    display: flex;
    justify-content: center;
    input {
      width: 100%;
      padding: 0.8rem;
    }
  }
`;