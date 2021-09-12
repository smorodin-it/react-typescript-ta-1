import React, { FC } from "react";
import { Col } from "antd";
import { CalendarComponent } from "../../components/CalendarComponent";
import EventsComponent from "../../components/EventsComponent/EventsComponent";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import { Moment } from "moment";
import { useActions } from "../../utils/hooks/useActions";
import { filterByDate } from "../../utils/functions/filters";
import { DateCellStyled } from "./styled/DateCellStyled";
import { DateType } from "../../redux/reducers/event/types";
import { momentDateFormat } from "../../utils/const";

const CalendarPage: FC = () => {
  const { events, date } = useTypedSelector((state) => state.eventReducer);
  const { setDate } = useActions();

  const onChangeDateHandler = (date: Moment) => {
    setDate(date);
  };

  const dateCellRenderer = (date_: DateType) => {
    const day = date_?.date();
    const filteredEvents = events.filter((event) => filterByDate(event, date_));
    let highlight = false;
    if (
      filteredEvents.length &&
      date_?.format(momentDateFormat) !== date?.format(momentDateFormat)
    ) {
      highlight = true;
    }
    return (
      <div className="ant-picker-cell-inner ant-picker-calendar-date">
        <DateCellStyled
          highlight={highlight}
          className="ant-picker-calendar-date-value"
        >
          {day}
        </DateCellStyled>
      </div>
    );
  };

  return (
    <>
      <Col span={12} className="center">
        <CalendarComponent
          events={events}
          onChange={onChangeDateHandler}
          value={date}
          dateFullCellRender={dateCellRenderer}
        />
      </Col>
      <Col span={12} className="center">
        <EventsComponent
          data={events.filter((event) => filterByDate(event, date))}
        />
      </Col>
    </>
  );
};

export default CalendarPage;
