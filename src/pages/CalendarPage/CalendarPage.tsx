import React, { FC, useEffect } from "react";
import { Col } from "antd";
import { CalendarComponent } from "../../components/CalendarComponent";
import EventsComponent from "../../components/EventsComponent/EventsComponent";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import moment, { Moment } from "moment";
import { useActions } from "../../utils/hooks/useActions";

const CalendarPage: FC = () => {
  const { events, date } = useTypedSelector((state) => state.eventReducer);
  const { setDate } = useActions();

  // Установить сегодняшнюю дату при загрузки страницы
  useEffect(() => {
    setDate(moment());
  }, []);

  const onChangeDateHandler = (date: Moment) => {
    setDate(date);
  };

  const onClickEditCardHandler = () => {};
  const onClickDeleteCardHandler = () => {};

  return (
    <>
      <Col span={12} className="center">
        <CalendarComponent events={events} onChange={onChangeDateHandler} />
      </Col>
      <Col span={12} className="center">
        <EventsComponent
          data={events}
          onClickEdit={onClickEditCardHandler}
          onClickDelete={onClickDeleteCardHandler}
        />
      </Col>
    </>
  );
};

export default CalendarPage;
