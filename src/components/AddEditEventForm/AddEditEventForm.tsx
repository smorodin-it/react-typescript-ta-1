import React, {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  FC,
} from "react";
import { AddEditEventFormProps } from "./types";
import { Button, Card, Form, Input, Select } from "antd";
import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";
import { requiredField } from "../../utils/functions/antdHelperFunctions";
import { Events, EventTypes } from "../EventsComponent/types";
import {
  setDataFromInput,
  setDataFromSelect,
} from "../../utils/functions/setDataFrom";

const eventTypesMap = {
  [EventTypes.EVENT]: "Мероприятие",
  [EventTypes.EVENT_HOLIDAY]: "Праздник",
  [EventTypes.EVENT_OTHER]: "Пометки / Другое",
};

const { Option } = Select;

const AddEditEventForm: FC<AddEditEventFormProps<Events>> = ({
  settings: { dataObject, setDataObject },
  pageFlow,
}) => {
  const onChangeEventTypeHandler = (value: string) => {
    setDataFromSelect("eventType", value, setDataObject);
  };

  const onChangeEventLabelHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDataFromInput(event, setDataObject);
  };

  return (
    <Card
      title={
        pageFlow === AddEditEventPageFlow.ADD
          ? "Добавить событие"
          : "Редактировать событие"
      }
    >
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Название события"
          name="label"
          rules={[requiredField()]}
        >
          <Input
            value={dataObject.label}
            onChange={onChangeEventLabelHandler}
          />
        </Form.Item>

        <Form.Item label="Тип события" name="type" rules={[requiredField()]}>
          <Select
            placeholder="Выберите тип события"
            onChange={onChangeEventTypeHandler}
            allowClear
          >
            <Option value={EventTypes.EVENT}>
              {eventTypesMap[EventTypes.EVENT]}
            </Option>
            <Option value={EventTypes.EVENT_HOLIDAY}>
              {eventTypesMap[EventTypes.EVENT_HOLIDAY]}
            </Option>
            <Option value={EventTypes.EVENT_OTHER}>
              {eventTypesMap[EventTypes.EVENT_OTHER]}
            </Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {pageFlow === AddEditEventPageFlow.ADD ? "Добавить" : "Сохранить"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddEditEventForm;
