import { EventsTypes } from "../../../components/EventsComponent/types";
import { Moment } from "moment";

export type DateType = Moment | null;

export interface EventsState {
  events: EventsTypes[];
  selectedEvent: EventsTypes;
  date: DateType;
}

export enum EventActionsEnum {
  SET_LIST = "EVENT_ACTION/SET_LIST",
  SET_DATE = "EVENT_ACTION/SET_DATE",
  SET_EVENT = "EVENT_ACTION/SET_EVENT",
}

export interface SetEventListAction {
  type: EventActionsEnum.SET_LIST;
  payload: EventsTypes[];
}

export interface SetEventDateAction {
  type: EventActionsEnum.SET_DATE;
  payload: DateType;
}

export interface SetEventAction {
  type: EventActionsEnum.SET_EVENT;
  payload: EventsTypes;
}

export type EventsAction =
  | SetEventListAction
  | SetEventDateAction
  | SetEventAction;
