export enum EventTypes {
  EVENT = "EVENT",
  EVENT_HOLIDAY = "EVENT_HOLIDAY",
  EVENT_OTHER = "EVENT_OTHER",
}

interface BaseEvent {
  type: EventTypes;
  label: string;
}

export interface EventHoliday extends BaseEvent {
  type: EventTypes.EVENT_HOLIDAY;
  budget: Number;
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

export type Events = EventHoliday | Event | EventOther;

export interface EventsComponentProps {
  data: Events[];
}

export interface EventItemComponentProps {
  itemData: Events;
}
