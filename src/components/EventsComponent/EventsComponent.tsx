import React, { FC } from "react";
import { EventsComponentProps } from "./types";
import EventItemComponent from "./EventItemComponent";

const EventsComponent: FC<EventsComponentProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <EventItemComponent itemData={item} />
      ))}
    </ul>
  );
};

export default EventsComponent;
