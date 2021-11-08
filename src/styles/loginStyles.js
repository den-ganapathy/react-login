import styled from "styled-components";
import backImg from "./../assets/images/back2.jpg";

export const LoginWrapper = styled.div`
  background: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100vw;
  height: 100vh;
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
    .forgotpassword {
      text-align: right;
      color: #123456;
      padding-top: 1rem;
      cursor: pointer;
    }
    .textstyle {
      text-align: center;
      margin: 2rem;
    }
    .icons {
      display: flex;
      justify-content: space-evenly;
    }
    .formfooter {
      text-align: right;
      color: #123456;
      padding-top: 1rem;
      cursor: pointer;
    }
  }
`;

export const InputWrapper = styled.div`
  .label {
    padding: 1rem 0;
  }
  .inputbox1 {
    display: flex;
    justify-content: center;
    input {
      width: 100%;
      padding: 0.8rem;
    }
  }
  .inputbox2 {
    display: flex;
    justify-content: center;
    flex: 0 0 10%;
    input {
      width: 50%;
      padding: 0.8rem;
    }
  }
`;
