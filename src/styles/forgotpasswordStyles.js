import styled from "styled-components";
import backImg from "./../assets/images/back2.jpg";

const media = {
  mobile: "@media(max-width:600px)",
};

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
    ${media.mobile} {
      width: 70vw;
      max-width: 20rem;
    }
    .fp-title {
      color: #123456;
      padding: 1.5rem 0;
      ${media.mobile} {
        font-size: 0.8rem;
      }
    }
    .fp-textbox {
      padding: 0.5rem;
      ${media.mobile} {
        padding: 0.4rem;
      }
    }
    .congratulations-text {
      font-size: 1.3rem;
      color: #123456;
      font-weight: bold;
      ${media.mobile} {
        font-size: 1rem;
      }
    }
    .fp-button {
      display: flex;
      justify-content: space-between;
      margin: 3rem 0 1rem 0;
      ${media.mobile} {
        margin: 1.5rem 0 1rem 0;
      }

      .fb-button-back {
        flex: 0 0 40%;
        border: none;
        color: #123456;
        background-color: white;
        padding: 0.5rem 0;
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;
        ${media.mobile} {
          font-size: 0.8rem;
        }
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
        ${media.mobile} {
          flex: 0 0 50%;

          font-size: 0.8rem;
          padding: 0.5rem 0;
        }
      }
    }
  }
`;
