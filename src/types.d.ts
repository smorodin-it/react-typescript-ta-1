import { Dispatch, SetStateAction } from "react";

interface settingsProp<T> {
  dataObject: T;
  setDataObject: Dispatch<SetStateAction<T>>;
}
