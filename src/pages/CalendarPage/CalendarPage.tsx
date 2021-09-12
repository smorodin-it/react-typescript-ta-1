import React, { FC } from "react";
import { Col } from "antd";
import { CalendarComponent } from "../../components/CalendarComponent";
import EventsComponent from "../../components/EventsComponent/EventsComponent";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import { Moment } from "moment";
import { useActions } from "../../utils/hooks/useActions";

const CalendarPage: FC = () => {
  const { events } = useTypedSelector((state) => state.eventReducer);
  const { setDate } = useActions();

  const onChangeDateHandler = (date: Moment) => {
    setDate(date);
  };

  return (
    <>
      <Col span={12} className="center">
        <CalendarComponent events={events} onChange={onChangeDateHandler} />
      </Col>
      <Col span={12} className="center">
        <EventsComponent data={events} />
      </Col>
    </>
  );
};

export default CalendarPage;
