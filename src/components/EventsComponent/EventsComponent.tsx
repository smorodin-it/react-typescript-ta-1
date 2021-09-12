import React, { FC } from "react";
import { EventsComponentProps } from "./types";
import EventItemCard from "./EventItemCard";
import { EventsComponentStyled } from "./styled/EventsComponentStyled";

const EventsComponent: FC<EventsComponentProps> = ({ data }) => {
  return (
    <EventsComponentStyled>
      {data.map((item) => (
        <EventItemCard key={item.id} itemData={item} />
      ))}
    </EventsComponentStyled>
  );
};

export default EventsComponent;
