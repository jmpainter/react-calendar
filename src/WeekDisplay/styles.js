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
  text-align: center;
`;

export const Day = styled.span`
  ${({ active }) =>
    active &&
    `
    color: black;
    cursor: pointer;
  `}
`;
