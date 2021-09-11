import { Card, Row } from "antd";
import React, { FC } from "react";
import { EventItemComponentProps } from "./types";
import { EditDeleteCardBlock } from "../EditDeleteCardBlock";
import { EventItemCardWrapper } from "./styled/EventItemCardWrapper";

const EventItemCard: FC<EventItemComponentProps> = ({
  itemData,
  onClickEdit,
  onClickDelete,
}) => {
  return (
    <EventItemCardWrapper>
      <Card style={{ width: "300px" }}>
        <EditDeleteCardBlock
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
        <Row>{itemData.label}</Row>
      </Card>
    </EventItemCardWrapper>
  );
};

export default EventItemCard;
