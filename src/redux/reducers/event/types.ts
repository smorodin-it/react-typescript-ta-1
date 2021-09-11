import { EventsTypes } from "../../../components/EventsComponent/types";
import { Moment } from "moment";

export type DateType = Moment | null;

export interface EventsState {
  events: EventsTypes[];
  date: DateType;
}

export enum EventActionsEnum {
  SET_LIST = "EVENT_ACTION/SET_LIST",
  SET_DATE = "EVENT_ACTION/SET_DATE",
}

export interface SetEventListAction {
  type: EventActionsEnum.SET_LIST;
  payload: EventsTypes[];
}

export interface SetEventDateAction {
  type: EventActionsEnum.SET_DATE;
  payload: DateType;
}

export type EventsAction = SetEventListAction | SetEventDateAction;
