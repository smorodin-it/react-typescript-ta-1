import { Card } from "antd";
import React, { FC, useState } from "react";
import { EventItemComponentProps, EventTypes } from "./types";
import { EditDeleteCardBlock } from "../EditDeleteCardBlock";
import { EventItemCardWrapper } from "./styled/EventItemCardWrapper";
import { LabelFont } from "../fonts";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import { useActions } from "../../utils/hooks/useActions";

const EventItemCard: FC<EventItemComponentProps> = ({ itemData }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { events } = useTypedSelector((state) => state.eventReducer);
  const { setEvents } = useActions();

  const onClickEditHandler = () => {};
  const onClickDeleteHandler = () => {
    const eventsFiltered = events.filter((event) => event.id !== itemData.id);
    setEvents(eventsFiltered);
  };

  return (
    <EventItemCardWrapper>
      <Card
        style={{ width: "500px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <EditDeleteCardBlock
            onClickEdit={onClickEditHandler}
            onClickDelete={onClickDeleteHandler}
          />
        )}
        <LabelFont>{itemData.label}</LabelFont>
        {itemData.type === EventTypes.EVENT && (
          <>
            <div>
              <span>Адрес: </span>
              {itemData.address}
            </div>
            <div>
              <span>Время: </span>
              {itemData.time}
            </div>
          </>
        )}
        {itemData.type === EventTypes.EVENT_HOLIDAY && (
          <>
            <div>
              <span>Бюджет: </span>
              {itemData.budget}
            </div>
          </>
        )}
        {itemData.type === EventTypes.EVENT_OTHER && (
          <>
            <div>{itemData.description}</div>
          </>
        )}
      </Card>
    </EventItemCardWrapper>
  );
};

export default EventItemCard;
