import React from "react";
import * as styled from "./styles";

export default function EventDialog({ showDialog, xPos, yPos }) {
  return (
    <styled.Dialog showDialog={showDialog} xPos={xPos} yPos={yPos}>
      Hello World
    </styled.Dialog>
  );
}
