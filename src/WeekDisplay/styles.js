import styled from "styled-components";

export const TableData = styled.td`
  color: white;
  padding: 1em;
  ${({ today }) =>
    today &&
    `
    background-color: royalblue;
    border-radius: 1em;
    border: none;
  `}
  ${({ active }) =>
    active &&
    `
    color: black;
  `}
`;
