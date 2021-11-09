import styled from "styled-components";
import backImg from "./../assets/images/back2.jpg";

export const ForgotpasswordWrapper = styled.div`
  background: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .fp-container {
    border-radius: 0.5rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 0 5px grey;
    background-color: white;
    .fp-title {
      color: #123456;
      padding: 1.5rem 0;
    }
    .fp-textbox {
      padding: 0.5rem;
    }
    .congratulations-text {
      font-size: 1.3rem;
      color: #123456;
      font-weight: bold;
    }
    .fp-button {
      display: flex;
      justify-content: space-between;
      margin: 3rem 0 1rem 0;

      .fb-button-back {
        flex: 0 0 40%;
        border: none;
        color: #123456;
        background-color: white;
        padding: 0.5rem 0;
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;
      }
      .fb-button-next {
        flex: 0 0 40%;
        border: none;
        border-radius: 5px;
        padding: 0.8rem 0;
        cursor: pointer;
        background-color: #123456;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        :hover {
          opacity: 0.9;
        }
      }
    }
  }
`;
