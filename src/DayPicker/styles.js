import styled from "styled-components";

export const CalendarMonth = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  thead {
    background-color: lightgray;
  }
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 1em;
  }
  th {
    padding: 1em;
  }
`;
