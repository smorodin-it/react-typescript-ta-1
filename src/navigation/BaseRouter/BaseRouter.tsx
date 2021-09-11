import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import CalendarPage from "../../pages/CalendarPage";
import AddEditEventPage from "../../pages/AddEditEventPage";
import { routes } from "../routes";

const BaseRouter: FC = () => {
  return (
    <Switch>
      <Route exact path={routes.index()}>
        <CalendarPage />
      </Route>
      <Route exact path={routes.addEditEvent()}>
        <AddEditEventPage />
      </Route>
    </Switch>
  );
};

export default BaseRouter;
