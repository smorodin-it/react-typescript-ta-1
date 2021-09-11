import React, { FC } from "react";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { EditDeleteCardBlockWrapper } from "./styled/EditDeleteCardBlockWrapper";
import { EditDeleteCardBlockProps } from "./types";

export const EditDeleteCardBlock: FC<EditDeleteCardBlockProps> = ({
  onClickEdit,
  onClickDelete,
  ...props
}) => {
  return (
    <EditDeleteCardBlockWrapper {...props}>
      <Button icon={<EditOutlined />} style={{ marginRight: "24px" }} />
      <Button icon={<DeleteOutlined />} />
    </EditDeleteCardBlockWrapper>
  );
};
