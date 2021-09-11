import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import AddEditEventForm from "../../components/AddEditEventForm/AddEditEventForm";
import { AddEditEventPageFlow, AddEditEventPageProps } from "./types";
import { EventsTypes } from "../../components/EventsComponent/types";
import { useActions } from "../../utils/hooks/useActions";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";

const AddEditEventPage: FC<AddEditEventPageProps> = ({ flow }) => {
  const [event, setEvent] = useState<EventsTypes>({} as EventsTypes);
  const { events } = useTypedSelector((state) => state.eventReducer);
  const { setEvents } = useActions();

  const history = useHistory();

  const onSubmitFinishHandler = (event: EventsTypes) => {
    const eventsListCopy = [...events];
    eventsListCopy.push(event);
    setEvents(eventsListCopy);
    history.push("/");
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
