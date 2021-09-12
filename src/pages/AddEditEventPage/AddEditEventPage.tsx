import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddEditEventForm from "../../components/AddEditEventForm/AddEditEventForm";
import { AddEditEventPageFlow, AddEditEventPageProps } from "./types";
import { EventsTypes } from "../../components/EventsComponent/types";
import { useActions } from "../../utils/hooks/useActions";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import { routes } from "../../navigation/routes";

const AddEditEventPage: FC<AddEditEventPageProps> = ({ flow }) => {
  const { events, date, selectedEvent } = useTypedSelector(
    (state) => state.eventReducer
  );
  const [event, setEvent] = useState<EventsTypes>({} as EventsTypes);
  const { setEvents } = useActions();

  const history = useHistory();

  useEffect(() => {
    if (date) {
      setEvent((prevState) => ({
        ...prevState,
        date,
      }));
    }
  }, [date]);

  useEffect(() => {
    if (flow === AddEditEventPageFlow.EDIT) {
      setEvent(selectedEvent);
    }
  }, [flow]);

  const onSubmitFinishHandler = (event: EventsTypes) => {
    const eventsListCopy = [...events];
    const eventId: number = events.length
      ? // @ts-ignore
        events[events.length - 1].id + 1
      : 1;
    eventsListCopy.push({ ...event, id: eventId });
    setEvents(eventsListCopy);
    history.push(routes.index());
  };

  return (
    <AddEditEventForm
      settings={{ dataObject: event, setDataObject: setEvent }}
      pageFlow={flow}
      onFinish={onSubmitFinishHandler}
    />
  );
};

AddEditEventPage.defaultProps = {
  flow: AddEditEventPageFlow.ADD,
};

export default AddEditEventPage;
