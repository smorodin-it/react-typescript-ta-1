import React, { FC } from "react";
import { Button, Calendar, Row } from "antd";
import { CalendarWrapperStyled } from "../../pages/CalendarPage/styled/CalendarWrapperStyled";
import { CalendarComponentProps } from "./types";
import { useHistory } from "react-router-dom";
import { routes } from "../../navigation/routes";

export const CalendarComponent: FC<CalendarComponentProps> = ({ ...props }) => {
  const history = useHistory();

  const onClickAddButtonHandler = () => {
    history.push(routes.addEditEvent());
  };

  return (
    <CalendarWrapperStyled>
      <Calendar {...props} fullscreen={false} className="mb-3" />
      <Row justify={"center"}>
        <Button onClick={onClickAddButtonHandler}>Добавить событие</Button>
      </Row>
    </CalendarWrapperStyled>
  );
};
