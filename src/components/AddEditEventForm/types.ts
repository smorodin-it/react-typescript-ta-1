import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";
import { settingsProp } from "../../types";
import { FormProps } from "antd";

type PageFlows = AddEditEventPageFlow | undefined;

export interface AddEditEventFormProps<T> extends FormProps {
  settings: settingsProp<T>;
  pageFlow: PageFlows;
}
