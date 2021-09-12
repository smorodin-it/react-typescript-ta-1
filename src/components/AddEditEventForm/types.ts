import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";
import { settingsProp } from "../../types";
import { FormProps } from "antd";

type PageFlows = AddEditEventPageFlow | undefined;

export interface AddEditEventFormProps<T> extends FormProps {
  settings: settingsProp<T>;
  pageFlow: PageFlows;
}

export interface EventTypesMap {
  [key: string]: string;
}

export enum EventFormFieldsNames {
  ID = "id",
  LABEL = "label",
  TYPE = "type",
  DATE = "date",
  BUDGET = "budget",
  ADDRESS = "address",
  TIME = "time",
  DESCRIPTION = "description",
}
