import styled from "styled-components";

export const Dialog = styled.div`
  position: absolute;
  padding: 10px;
  width: 220px;
  display: none;
  background-color: royalblue;
  border-radius: 10px;
  margin-top: 10px;
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
  &:after {
    content: " ";
    position: absolute;
    right: 110px;
    top: -10px;
    border-top: none;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid royalblue;
  }
}
`;

const FormElement = `
  display: inline-block;
  color: black;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 2px;
  transition: background-color 0.5s ease;
  &:focus {
    background-color: rgba(0,0,0,0.45);
  }
  ::placeholder {
    font-size: 16px;
  }
  box-sizing: border-box;
`;

export const NarrowInput = styled.input`
  ${FormElement}
  width: 100px;
`;

export const WideInput = styled.input`
  ${FormElement}
  width: 210px;
`;

export const SaveButton = styled.button`
  ${FormElement}
  border-radius: 5px;
  width: 80px;
  color: royalblue;
  font-size: 16px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
`;
