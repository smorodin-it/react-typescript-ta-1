import { FC, useEffect } from "react";
import moment from "moment";
import { useActions } from "../../utils/hooks/useActions";

export const OnFirstLoadActions: FC = () => {
  const { setDate } = useActions();

  // Установить сегодняшнюю дату при загрузки страницы
  useEffect(() => {
    setDate(moment());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
