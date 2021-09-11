import React, { FC } from "react";
import { Calendar } from "antd";
import { CalendarWrapperStyled } from "../../pages/CalendarPage/styled/CalendarWrapperStyled";
import { CalendarComponentProps } from "./types";

export const CalendarComponent: FC<CalendarComponentProps> = ({ ...props }) => {
  return (
    <CalendarWrapperStyled>
      <Calendar fullscreen={false} {...props} />
    </CalendarWrapperStyled>
  );
};
