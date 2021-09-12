import { EventActionsEnum, EventsAction, EventsState } from "./types";
import { EventsTypes } from "../../../components/EventsComponent/types";

const initialState: EventsState = {
  events: [],
  selectedEvent: {} as EventsTypes,
  date: null,
};

export const eventReducer = (
  state = initialState,
  action: EventsAction
): EventsState => {
  switch (action.type) {
    case EventActionsEnum.SET_LIST:
      return {
        ...state,
        events: action.payload,
      };

    case EventActionsEnum.SET_DATE:
      return {
        ...state,
        date: action.payload,
      };

    case EventActionsEnum.SET_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };

    default:
      return state;
  }
};

export default eventReducer;
