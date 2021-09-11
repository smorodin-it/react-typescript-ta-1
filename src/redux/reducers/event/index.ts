import { EventActionsEnum, EventsAction, EventsState } from "./types";

const initialState: EventsState = {
  events: [],
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

    default:
      return state;
  }
};

export default eventReducer;
