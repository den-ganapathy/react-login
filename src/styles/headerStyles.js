import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

export const HeaderWrapper = styled.div`
  z-index: 99;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0rem;
  box-shadow: 0 0 5px grey;
  position: fixed;
  width: 100vw;
  background-color: #000;
  opacity: 0.9;
  min-height: 3rem;
  .signin {
    margin: 0 1rem;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: green;
    padding: 0.8rem 1.2rem;
    color: white;
    font-weight: bold;
    transition: transform 0.3s ease-in-out;
    :hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
    ${media.mobile} {
      font-size: 0.8rem;
      padding: 0rem 1rem;
    }
  }
  .logout {
    margin: 0 1rem;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: orangered;
    padding: 0.8rem 1.2rem;
    color: white;
    font-weight: bold;
    transition: transform 0.3s ease-in-out;
    :hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
    ${media.mobile} {
      font-size: 0.8rem;
      padding: 0.1rem 0.8rem;
    }
  }
`;
