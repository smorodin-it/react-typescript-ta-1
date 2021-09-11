import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";
import { settingsProp } from "../../types";

type PageFlows = AddEditEventPageFlow | undefined;

export interface AddEditEventFormProps<T> {
  settings: settingsProp<T>;
  pageFlow: PageFlows;
}
