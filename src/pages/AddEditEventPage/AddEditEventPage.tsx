import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddEditEventForm from "../../components/AddEditEventForm/AddEditEventForm";
import { AddEditEventPageFlow, AddEditEventPageProps } from "./types";
import { EventsTypes } from "../../components/EventsComponent/types";
import { useActions } from "../../utils/hooks/useActions";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import { routes } from "../../navigation/routes";

const AddEditEventPage: FC<AddEditEventPageProps> = ({ flow }) => {
  const { events, date } = useTypedSelector((state) => state.eventReducer);
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

  const onSubmitFinishHandler = (event: EventsTypes) => {
    const eventsListCopy = [...events];
    eventsListCopy.push(event);
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
