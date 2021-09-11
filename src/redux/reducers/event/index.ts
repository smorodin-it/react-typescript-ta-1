import { EventActionsEnum, EventsAction, EventsState } from "./types";

const initialState: EventsState = {
  events: [],
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
    default:
      return state;
  }
};

export default eventReducer;
