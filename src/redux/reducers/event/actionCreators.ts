import { EventsTypes } from "../../../components/EventsComponent/types";
import {
  EventActionsEnum,
  SetEventDateAction,
  SetEventListAction,
} from "./types";
import { Moment } from "moment";

export const EventActionCreators = {
  setEvents: (events: EventsTypes[]): SetEventListAction => ({
    type: EventActionsEnum.SET_LIST,
    payload: events,
  }),
  setDate: (date: Moment): SetEventDateAction => ({
    type: EventActionsEnum.SET_DATE,
    payload: date,
  }),
};
