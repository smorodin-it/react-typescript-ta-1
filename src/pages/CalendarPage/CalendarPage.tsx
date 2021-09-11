import React, { FC } from "react";
import { Col } from "antd";
import { CalendarComponent } from "../../components/CalendarComponent";
import EventsComponent from "../../components/EventsComponent/EventsComponent";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";

const CalendarPage: FC = () => {
  const { events } = useTypedSelector((state) => state.eventReducer);
  return (
    <>
      <Col span={12}>
        <CalendarComponent events={events} />
      </Col>
      <Col span={12}>
        <EventsComponent data={events} />
      </Col>
    </>
  );
};

export default CalendarPage;
