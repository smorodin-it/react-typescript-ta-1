import React, { ChangeEvent, FC } from "react";
import { AddEditEventFormProps } from "./types";
import { Button, Card, Form, Input, Select } from "antd";
import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";
import { requiredField } from "../../utils/functions/antdHelperFunctions";
import { EventsTypes, EventTypes } from "../EventsComponent/types";
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
const { TextArea } = Input;

const AddEditEventForm: FC<AddEditEventFormProps<EventsTypes>> = ({
  settings: { dataObject, setDataObject },
  pageFlow,
  ...props
}) => {
  const onChangeEventTypeHandler = (value: string) => {
    setDataFromSelect("type", value, setDataObject);
  };

  const onChangeEventInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDataFromInput(event, setDataObject);
  };

  const onChangeEventTextAreaHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
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
      <Form {...props} name="event-form" autoComplete="off">
        <Form.Item
          label="Название события"
          name="label"
          rules={[requiredField()]}
        >
          <Input
            value={dataObject.label}
            onChange={onChangeEventInputHandler}
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

        {/* Событие */}
        {dataObject.type === EventTypes.EVENT && (
          <>
            <Form.Item label="Куда идти?" name="address">
              <Input
                value={dataObject.address}
                onChange={onChangeEventInputHandler}
              />
            </Form.Item>
            <Form.Item label="Во сколько?" name="time">
              <Input
                type={"time"}
                value={dataObject.time}
                onChange={onChangeEventInputHandler}
              />
            </Form.Item>
          </>
        )}

        {/* Праздник */}
        {dataObject.type === EventTypes.EVENT_HOLIDAY && (
          <>
            <Form.Item label="Бюджет" name="budget">
              <Input
                type={"number"}
                value={dataObject.budget}
                onChange={onChangeEventInputHandler}
              />
            </Form.Item>
          </>
        )}

        {/* Пометки / Другое */}
        {dataObject.type === EventTypes.EVENT_OTHER && (
          <>
            <Form.Item label="Описание" name="description">
              <TextArea
                value={dataObject.description}
                onChange={onChangeEventTextAreaHandler}
              />
            </Form.Item>
          </>
        )}

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
