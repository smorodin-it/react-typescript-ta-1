import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import CalendarPage from "../../pages/CalendarPage";
import AddEditEventPage from "../../pages/AddEditEventPage";

const BaseRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CalendarPage />
      </Route>
      <Route exact path={"/add-edit-event"}>
        <AddEditEventPage />
      </Route>
    </Switch>
  );
};

export default BaseRouter;
