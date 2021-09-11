import React from "react";
import BaseRouter from "../navigation/BaseRouter/BaseRouter";
import "antd/dist/antd.css";
import "./App.css";
import { CentredLayout } from "../components/layouts/CentredLayout";
import { OnFirstLoadActions } from "../components/OnFirstLoadActions";

function App() {
  return (
    <CentredLayout>
      <OnFirstLoadActions />
      <BaseRouter />
    </CentredLayout>
  );
}

export default App;
