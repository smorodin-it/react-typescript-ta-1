import React, { FC } from "react";
import { Col } from "antd";
import { CalendarComponent } from "../../components/CalendarComponent";
import EventsComponent from "../../components/EventsComponent/EventsComponent";

const CalendarPage: FC = () => {
  return (
    <>
      <Col span={12}>
        <CalendarComponent events={[]} />
      </Col>
      <Col span={12}>
        <EventsComponent data={[]} />
      </Col>
    </>
  );
};

export default CalendarPage;
