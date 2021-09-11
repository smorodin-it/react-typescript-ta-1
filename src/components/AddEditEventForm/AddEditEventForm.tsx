import React, { ChangeEvent, FC } from "react";
import {
  AddEditEventFormProps,
  EventFormFieldsNames,
  EventTypesMap,
} from "./types";
import { Button, Card, Form, Input, Select } from "antd";
import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";
import { requiredField } from "../../utils/functions/antdHelperFunctions";
import { EventsTypes, EventTypes } from "../EventsComponent/types";
import {
  setDataFromInput,
  setDataFromSelect,
  setDataFromTextArea,
} from "../../utils/functions/setDataFrom";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";

const eventTypesMap: EventTypesMap = {
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
  const { date } = useTypedSelector((state) => state.eventReducer);

  const onChangeEventTypeHandler = (value: EventTypes) => {
    const label = dataObject.label;
    setDataFromSelect<EventsTypes>({ type: value, date, label }, setDataObject);
  };

  const onChangeEventInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDataFromInput(event, setDataObject);
  };

  const onChangeEventTextAreaHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDataFromTextArea(event, setDataObject);
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
          name={EventFormFieldsNames.LABEL}
          rules={[requiredField()]}
        >
          <Input
            value={dataObject.label}
            onChange={onChangeEventInputHandler}
            name={EventFormFieldsNames.LABEL}
          />
        </Form.Item>

        <Form.Item
          label="Тип события"
          name={EventFormFieldsNames.TYPE}
          rules={[requiredField()]}
        >
          <Select
            placeholder="Выберите тип события"
            onChange={onChangeEventTypeHandler}
            value={dataObject.type}
            allowClear
          >
            {Object.keys(eventTypesMap).map((eventType) => (
              <Option value={eventType}>{eventTypesMap[eventType]}</Option>
            ))}
          </Select>
        </Form.Item>

        {/* Событие */}
        {dataObject.type === EventTypes.EVENT && (
          <>
            <Form.Item label="Куда идти?" name={EventFormFieldsNames.ADDRESS}>
              <Input
                name={EventFormFieldsNames.ADDRESS}
                value={dataObject.address}
                onChange={onChangeEventInputHandler}
              />
            </Form.Item>
            <Form.Item label="Во сколько?" name={EventFormFieldsNames.TIME}>
              <Input
                name={EventFormFieldsNames.TIME}
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
            <Form.Item label="Бюджет" name={EventFormFieldsNames.BUDGET}>
              <Input
                name={EventFormFieldsNames.BUDGET}
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
            <Form.Item label="Описание" name={EventFormFieldsNames.DESCRIPTION}>
              <TextArea
                name={EventFormFieldsNames.DESCRIPTION}
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
