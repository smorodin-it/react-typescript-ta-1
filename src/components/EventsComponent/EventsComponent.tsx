import React, { FC } from "react";
import { EventsComponentProps } from "./types";
import EventItemCard from "./EventItemCard";
import { Layout } from "antd";

const EventsComponent: FC<EventsComponentProps> = ({
  data,
  onClickEdit,
  onClickDelete,
}) => {
  return (
    <>
      {data.map((item, index) => (
        <EventItemCard
          key={index}
          itemData={item}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
      ))}
    </>
  );
};

export default EventsComponent;
