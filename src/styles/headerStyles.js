import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0rem;
  box-shadow: 0 0 5px grey;
  position: fixed;
  width: 100vw;
  background-color: #000;
  opacity: 0.5;
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
  }
  .signup {
    margin: 0 1rem;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: orange;
    padding: 0.8rem 1.2rem;
    color: white;
    font-weight: bold;
    transition: transform 0.3s ease-in-out;
    :hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }
`;
