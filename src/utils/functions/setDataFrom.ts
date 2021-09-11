import { ChangeEvent, Dispatch, SetStateAction } from "react";

/**
 * Сохраняет/обновляет стейт с объектом дынных формы из инпута
 * @param event
 * @param setObject
 */
export const setDataFromInput = <T>(
  event: ChangeEvent<HTMLInputElement>,
  setObject: Dispatch<SetStateAction<T>>
) => {
  setObject((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.value,
  }));
};

/**
 * Сохраняет/обновляет стейт с объектом дынных формы из textarea
 * @param event
 * @param setObject
 */
export const setDataFromTextArea = <T>(
  event: ChangeEvent<HTMLTextAreaElement>,
  setObject: Dispatch<SetStateAction<T>>
) => {
  setObject((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.value,
  }));
};

/**
 * Сохраняет/обновляет стейт с объектом дынных формы из селекта
 * @param object
 * @param setObject
 */
export const setDataFromSelect = <T>(
  object: T,
  setObject: Dispatch<SetStateAction<T>>
) => {
  setObject((prevState: T) => ({
    ...prevState,
    ...object,
  }));
};
