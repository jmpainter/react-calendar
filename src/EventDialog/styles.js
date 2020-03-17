import styled from "styled-components";

export const Dialog = styled.div`
  padding: 4em;
  position: absolute;
  border: 1px solid red;
  display: none;
  ${({ showDialog }) =>
    showDialog &&
    `
    display: block;
  `}
  ${({ xPos }) =>
    `
    left: ${xPos}px;
  `}
  ${({ yPos }) =>
    `
    top: ${yPos}px;
  `}
`;
