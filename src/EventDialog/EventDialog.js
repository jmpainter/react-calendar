import React from "react";
import * as styled from "./styles";

export default function EventDialog({ showDialog, xPos, yPos }) {
  return (
    <styled.Dialog showDialog={showDialog} xPos={xPos} yPos={yPos}>
      <form>
        <div>
          <styled.NarrowInput type="text" placeholder="Hour" name="hour" />
          <styled.NarrowInput type="text" placeholder="Minute" name="minute" />
        </div>
        <styled.WideInput
          type="text"
          placeholder="Event name"
          name="eventName"
        />
        <div>
          <styled.SaveButton type="submit">Save</styled.SaveButton>
        </div>
      </form>
    </styled.Dialog>
  );
}
