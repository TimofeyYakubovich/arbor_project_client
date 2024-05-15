import React, { FC, useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { IEvent } from '../models/IEvent';
import { Dayjs } from 'dayjs';
import { formatData } from '../utils/data';
import { rules } from '../utils/rules';
import { useLocation } from 'react-router-dom';

interface EventFormProps {
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({submit}) => {
    const location = useLocation();

    const [event, setEvent] = useState<IEvent>({
        data: '',
        description: '',
        arbor: location.pathname.substring(1)
    } as IEvent)

    const selectData = (date: Dayjs) => {
        if (date) {
            setEvent({...event, data: formatData(date.toDate())})
        }
    }

    const submitForm = () => {
        submit({...event})
        // console.log({...event, author: user.username})
    }

    console.log(location.pathname.substring(1))

    return (
        <Form onFinish={submitForm}>
             <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input value={event.description} onChange={e => setEvent({...event, description: e.target.value})}/>
            </Form.Item>
            <Form.Item
                label="Время события"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(data) => selectData(data)}
                />
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;