import React, { FC } from "react";
import { Layout, Row } from "antd";

export const CentredLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        {children}
      </Row>
    </Layout>
  );
};
