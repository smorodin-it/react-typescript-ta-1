import { Moment } from "moment";
import { EditDeleteCardBlockProps } from "../EditDeleteCardBlock/types";

export enum EventTypes {
  EVENT = "EVENT",
  EVENT_HOLIDAY = "EVENT_HOLIDAY",
  EVENT_OTHER = "EVENT_OTHER",
}

interface BaseEvent {
  date: Moment;
  type: EventTypes;
  label: string;
}

export interface EventHoliday extends BaseEvent {
  type: EventTypes.EVENT_HOLIDAY;
  budget: number;
}

export interface Event extends BaseEvent {
  type: EventTypes.EVENT;
  address: string;
  time: string;
}

export interface EventOther extends BaseEvent {
  type: EventTypes.EVENT_OTHER;
  description: string;
}

export type EventsTypes = EventHoliday | Event | EventOther;

export interface EventsComponentProps extends EditDeleteCardBlockProps {
  data: EventsTypes[];
}

export interface EventItemComponentProps extends EditDeleteCardBlockProps {
  itemData: EventsTypes;
}
