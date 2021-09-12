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
      <Button
        type={"text"}
        icon={<EditOutlined />}
        style={{ marginRight: "8px" }}
        onClick={onClickEdit}
      />
      <Button type={"text"} icon={<DeleteOutlined />} onClick={onClickDelete} />
    </EditDeleteCardBlockWrapper>
  );
};
