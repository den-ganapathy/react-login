import styled from "styled-components";

export const IconButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.inputColor || "#000"};
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;
