import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 5px solid orange;
  }
  .body {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #123456;
    text-align: center;
    ${media.mobile} {
      font-size: 1rem;
    }
  }
`;
