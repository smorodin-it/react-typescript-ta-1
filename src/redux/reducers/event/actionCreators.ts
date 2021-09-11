import { EventsTypes } from "../../../components/EventsComponent/types";
import { EventActionsEnum, SetEventListAction } from "./types";

export const EventActionCreators = {
  setEvents: (events: EventsTypes[]): SetEventListAction => ({
    type: EventActionsEnum.SET_LIST,
    payload: events,
  }),
};
