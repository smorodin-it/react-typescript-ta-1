import { FC, useEffect } from "react";
import moment from "moment";
import { useActions } from "../../utils/hooks/useActions";
import { loadFromLocalStorage } from "../../utils/functions/localstorage";
import { LocalstorageKeys } from "./types";
import { EventsTypes } from "../EventsComponent/types";

export const OnFirstLoadActions: FC = () => {
  const { setDate, setEvents } = useActions();

  useEffect(() => {
    // Установить сегодняшнюю дату при загрузки страницы
    setDate(moment());

    // Попробовать загрузить список ивентов из localstorage
    try {
      const data: EventsTypes[] = loadFromLocalStorage(
        LocalstorageKeys.EVENTS_LIST
      );
      setEvents(data);
    } catch (e) {
      console.log(e);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
