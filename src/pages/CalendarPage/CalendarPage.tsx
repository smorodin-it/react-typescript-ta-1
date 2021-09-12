import React, { FC } from "react";
import { Col } from "antd";
import { CalendarComponent } from "../../components/CalendarComponent";
import EventsComponent from "../../components/EventsComponent/EventsComponent";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import { Moment } from "moment";
import { useActions } from "../../utils/hooks/useActions";
import { filterByDate } from "../../utils/functions/filters";

const CalendarPage: FC = () => {
  const { events, date } = useTypedSelector((state) => state.eventReducer);
  const { setDate } = useActions();

  const onChangeDateHandler = (date: Moment) => {
    setDate(date);
  };

  return (
    <>
      <Col span={12} className="center">
        <CalendarComponent
          events={events}
          onChange={onChangeDateHandler}
          defaultValue={date}
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
