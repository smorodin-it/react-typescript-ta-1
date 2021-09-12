import { EventsTypes } from "../../components/EventsComponent/types";
import { DateType } from "../../redux/reducers/event/types";
import { momentDateFormat } from "../const";

export const filterByDate = (element: EventsTypes, selectedDate: DateType) =>
  element.date?.format(momentDateFormat) ===
  selectedDate?.format(momentDateFormat);
