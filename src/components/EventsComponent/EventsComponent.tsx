import React, { FC } from "react";
import { EventsComponentProps } from "./types";
import EventItemCard from "./EventItemCard";
import { EventsComponentStyled } from "./styled/EventsComponentStyled";

const EventsComponent: FC<EventsComponentProps> = ({
  data,
  onClickEdit,
  onClickDelete,
}) => {
  return (
    <EventsComponentStyled>
      {data.map((item, index) => (
        <EventItemCard
          key={index}
          itemData={item}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
      ))}
    </EventsComponentStyled>
  );
};

export default EventsComponent;
