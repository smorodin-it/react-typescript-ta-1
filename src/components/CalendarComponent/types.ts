import { CalendarProps } from "antd";
import { EventsTypes } from "../EventsComponent/types";

export interface CalendarComponentProps extends CalendarProps<any> {
  events: EventsTypes[];
}
