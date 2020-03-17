import styled from "styled-components";

export const Dialog = styled.div`
  position: absolute;
  padding: 1em;
  display: none;
  background-color: royalblue;
  border-radius: 1em;
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

const FormElement = `
  display: inline-block;
  color: black;
  margin: .4em;
  padding: .5em;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 2px;
  transition: background-color 0.5s ease;
  &:focus {
    background-color: rgba(0,0,0,0.45);
  }
  ::placeholder {
    font-size: 1.3em;
  }
  box-sizing: border-box;
`;

export const NarrowInput = styled.input`
  ${FormElement}
  width: 10em;
`;

export const WideInput = styled.input`
  ${FormElement}
  width: 21em;
`;

export const SaveButton = styled.button`
  ${FormElement}
  margin: .5em;
  padding: 0.5em;
  border-radius: 0.7em;
  width: 8em;
  color: royalblue;
  font-size: 0.9em;
`;
