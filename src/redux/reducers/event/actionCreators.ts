import { EventsTypes } from "../../../components/EventsComponent/types";
import {
  EventActionsEnum,
  SetEventAction,
  SetEventDateAction,
  SetEventListAction,
} from "./types";
import { Moment } from "moment";
import { saveToLocalStorage } from "../../../utils/functions/localstorage";
import { LocalstorageKeys } from "../../../components/OnFirstLoadActions/types";

export const EventActionCreators = {
  setEvents: (events: EventsTypes[]): SetEventListAction => {
    saveToLocalStorage(LocalstorageKeys.EVENTS_LIST, events);
    return {
      type: EventActionsEnum.SET_LIST,
      payload: events,
    };
  },
  setDate: (date: Moment): SetEventDateAction => ({
    type: EventActionsEnum.SET_DATE,
    payload: date,
  }),
  setSelectedEvent: (event: EventsTypes): SetEventAction => ({
    type: EventActionsEnum.SET_EVENT,
    payload: event,
  }),
};
