import React, { FC, useState } from "react";
import AddEditEventForm from "../../components/AddEditEventForm/AddEditEventForm";
import { AddEditEventPageFlow, AddEditEventPageProps } from "./types";
import { Events } from "../../components/EventsComponent/types";

const AddEditEventPage: FC<AddEditEventPageProps> = ({ flow }) => {
  const [state, setState] = useState<Events>({} as Events);

  return (
    <AddEditEventForm
      settings={{ dataObject: state, setDataObject: setState }}
      pageFlow={flow}
    />
  );
};

AddEditEventPage.defaultProps = {
  flow: AddEditEventPageFlow.ADD,
};

export default AddEditEventPage;
