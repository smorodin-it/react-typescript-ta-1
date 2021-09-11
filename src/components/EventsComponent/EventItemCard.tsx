import { Card, Row } from "antd";
import React, { FC, useState } from "react";
import { EventItemComponentProps } from "./types";
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
      </Card>
    </EventItemCardWrapper>
  );
};

export default EventItemCard;
