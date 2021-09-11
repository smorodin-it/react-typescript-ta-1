import { EventsTypes } from "../../../components/EventsComponent/types";

export interface EventsState {
  events: EventsTypes[];
}

export enum EventActionsEnum {
  SET_LIST = "EVENT_ACTION/SET_LIST",
}

export interface SetEventListAction {
  type: EventActionsEnum.SET_LIST;
  payload: EventsTypes[];
}

export type EventsAction = SetEventListAction;
