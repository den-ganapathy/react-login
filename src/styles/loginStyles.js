import styled from "styled-components";
import backImg from "./../assets/images/back2.jpg";

const media = {
  mobile: "@media(max-width:600px)",
};

export const LoginWrapper = styled.div`
  background: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  ${media.mobile} {
    width: 90vw;
    margin: 0 auto;
  }

  .login-container {
    border-radius: 0.5rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 0 5px grey;
    background-color: white;
    ${media.mobile} {
      padding: 1rem;
    }

    .textbox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    & .signin {
      margin: 2rem auto 1rem auto;
      width: 80%;
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
      ${media.mobile} {
        margin: 1rem auto;
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
      margin: 0rem;
      ${media.mobile} {
        margin: 0rem;
      }
    }
    .icons {
      display: flex;
      justify-content: space-evenly;
      .googleicon {
        display: flex;
        justify-content: space-evenly;
        border-radius: 0.5rem;
        width: 80%;
        padding: 0.5rem 0rem;
        background-color: white;
        box-shadow: 0 0 5px grey;
        margin: 1rem auto;
        cursor: pointer;
        img {
          width: 1rem;
          height: 1rem;
        }
        div {
        }
      }
      ${media.mobile} {
        display: flex;
        justify-content: space-evenly;
        .googleicon {
          display: flex;
          justify-content: space-evenly;
          border-radius: 0.5rem;
          width: 80%;
          padding: 0.5rem 0rem;
          background-color: white;
          box-shadow: 0 0 5px grey;
          img {
            width: 1rem;
            height: 1rem;
          }
          div {
          }
        }
      }
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
  width: 100%;
  flex-direction: column;
  flex: ${(props) => (props.size === "full" ? "0 0 100%" : "0 0 47%")};
  .label {
    padding: 1rem 0 0.5rem 0;
    ${media.mobile} {
      font-size: 0.8rem;
      padding: 0.8rem 0 0.3rem 0;
    }
  }
  .inputbox1 {
    display: flex;
    justify-content: center;
    input {
      width: 100%;
      padding: 0.7rem;
    }
    ${media.mobile} {
      input {
        padding: 0.5rem;
      }
    }
  }
`;
