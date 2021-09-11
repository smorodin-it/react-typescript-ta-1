import { Card } from "antd";
import React, { FC, useState } from "react";
import { EventItemComponentProps, EventTypes } from "./types";
import { EditDeleteCardBlock } from "../EditDeleteCardBlock";
import { EventItemCardWrapper } from "./styled/EventItemCardWrapper";
import { LabelFont } from "../fonts";

const EventItemCard: FC<EventItemComponentProps> = ({
  itemData,
  onClickEdit,
  onClickDelete,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <EventItemCardWrapper>
      <Card
        style={{ width: "500px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <EditDeleteCardBlock
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
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
