import React, { FC, useEffect } from "react";
import {
  AddEditEventFormProps,
  EventFormFieldsNames,
  EventTypesMap,
} from "./types";
import { Button, Card, Form, Input, Select } from "antd";
import { AddEditEventPageFlow } from "../../pages/AddEditEventPage/types";
import { requiredField } from "../../utils/functions/antdHelperFunctions";
import { EventsTypes, EventTypes } from "../EventsComponent/types";
import { setDataFromSelect } from "../../utils/functions/setDataFrom";
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
  const { date, events } = useTypedSelector((state) => state.eventReducer);
  const eventId =
    pageFlow === AddEditEventPageFlow.ADD ? events.length + 1 : dataObject.id;
  const [form] = Form.useForm();

  useEffect(() => {
    if (pageFlow === AddEditEventPageFlow.EDIT && dataObject?.id) {
      form.setFieldsValue(dataObject);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, pageFlow, dataObject.id]);

  const onChangeEventTypeHandler = (value: EventTypes) => {
    const label = dataObject.label;
    setDataFromSelect<EventsTypes>(
      { type: value, date, label, id: eventId },
      setDataObject
    );
  };

  return (
    <Card
      title={
        pageFlow === AddEditEventPageFlow.ADD
          ? "Добавить событие"
          : "Редактировать событие"
      }
    >
      <Form {...props} form={form} name="event-form" autoComplete="off">
        <Form.Item
          name={EventFormFieldsNames.ID}
          initialValue={eventId}
          noStyle
        />
        <Form.Item
          name={EventFormFieldsNames.DATE}
          initialValue={date}
          noStyle
        />
        <Form.Item
          label="Название события"
          name={EventFormFieldsNames.LABEL}
          rules={[requiredField()]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Тип события"
          name={EventFormFieldsNames.TYPE}
          rules={[requiredField()]}
        >
          <Select
            placeholder="Выберите тип события"
            onChange={onChangeEventTypeHandler}
            allowClear
          >
            {Object.keys(eventTypesMap).map((eventType) => (
              <Option key={eventType} value={eventType}>
                {eventTypesMap[eventType]}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Событие */}
        {dataObject.type === EventTypes.EVENT && (
          <>
            <Form.Item
              label="Куда идти?"
              name={EventFormFieldsNames.ADDRESS}
              rules={[requiredField()]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Во сколько?"
              name={EventFormFieldsNames.TIME}
              rules={[requiredField()]}
            >
              <Input type={"time"} />
            </Form.Item>
          </>
        )}

        {/* Праздник */}
        {dataObject.type === EventTypes.EVENT_HOLIDAY && (
          <>
            <Form.Item
              label="Бюджет"
              name={EventFormFieldsNames.BUDGET}
              rules={[requiredField()]}
            >
              <Input type={"number"} />
            </Form.Item>
          </>
        )}

        {/* Пометки / Другое */}
        {dataObject.type === EventTypes.EVENT_OTHER && (
          <>
            <Form.Item
              label="Описание"
              name={EventFormFieldsNames.DESCRIPTION}
              rules={[requiredField()]}
            >
              <TextArea />
            </Form.Item>
          </>
        )}

        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
          rules={[requiredField()]}
        >
          <Button type="primary" htmlType="submit">
            {pageFlow === AddEditEventPageFlow.ADD ? "Добавить" : "Сохранить"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddEditEventForm;
