import styled from "styled-components";

export const EventList = styled.ul`
  list-style: none;
  padding-left: 0;
  & :nth-child(even) {
    background-color: lightgray;
  }
`;

export const EventListLine = styled.li`
  padding: 0.5em;
  font-weight: 700;
`;
