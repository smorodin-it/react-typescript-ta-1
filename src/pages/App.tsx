import React from "react";
import BaseRouter from "../navigation/BaseRouter/BaseRouter";
import "antd/dist/antd.css";
import "./App.css";
import { CentredLayout } from "../components/layouts/CentredLayout";

function App() {
  return (
    <CentredLayout>
      <BaseRouter />
    </CentredLayout>
  );
}

export default App;
