import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import CalendarPage from "../../pages/CalendarPage";
import AddEditEventPage from "../../pages/AddEditEventPage";
import { routes } from "../routes";
import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";

const BaseRouter: FC = () => {
  return (
    <Switch>
      <Route exact path={routes.index()}>
        <CalendarPage />
      </Route>
      <Route exact path={routes.addEvent()}>
        <AddEditEventPage />
      </Route>
      <Route exact path={routes.editEvent()}>
        <AddEditEventPage flow={AddEditEventPageFlow.EDIT} />
      </Route>
    </Switch>
  );
};

export default BaseRouter;
