import { EventsTypes } from "../../components/EventsComponent/types";
import { DateType } from "../../redux/reducers/event/types";
import { momentDateFormat } from "../const";
import moment from "moment";

export const filterByDate = (element: EventsTypes, selectedDate: DateType) => {
  const elementDate = moment(element.date);
  return (
    elementDate.format(momentDateFormat) ===
    selectedDate?.format(momentDateFormat)
  );
};
