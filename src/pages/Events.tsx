import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EventCalendar from '../components/EventCalendar';
import { Button, List, Modal, Row, Spin, Typography } from 'antd';
import { DeleteTwoTone, DeleteOutlined } from '@ant-design/icons';
import { IEvent } from '../models/IEvent';
import EventForm from '../components/EventForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoteNames } from '../router';

const Events = () => {
    const router = useNavigate()
    const location = useLocation();

    const [modalVisible, setModalVisible] = useState(false)

    const [modalEventsVisible, setModalEventsVisible] = useState(false)
    const [deyEvents, setDeyEvents] = useState<IEvent[]>([])

    const {fetchEvents, createEvent, deleteEvent} = useActions();
    const {events, isLoading, error} = useTypedSelector(state => state.event)

    useEffect(() => {
        // fetchEvents('http://localhost:5000/arbor1/')
        fetchEvents('https://arbor-project-server.vercel.app/arbor1/')
    }, [location])

    const openModal = (events: IEvent[]) => {
        setDeyEvents(events)
    }

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        // createEvent('http://localhost:5000/arbor1/', event)
        createEvent('https://arbor-project-server.vercel.app/arbor1/', event)
    }

    const handleDeleteEvent = (eventId: string) => {
        setModalEventsVisible(false)
        // deleteEvent('http://localhost:5000/arbor1/', eventId)
        deleteEvent('https://arbor-project-server.vercel.app/arbor1/', eventId)
    }

    if (isLoading) return <Spin fullscreen size='large'/>

    return (
        <div>
            {
                isLoading 
                ?
                <Spin fullscreen size='large'/>
                :
                <EventCalendar 
                    events={events} 
                    setModalEventsVisible={setModalEventsVisible}
                    openModal={openModal}
                    deyEvents={deyEvents}
                />
            }
            <Row justify='center'>
                <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
                title='Добавить событие'
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    submit={addNewEvent}
                />
            </Modal>
            <Modal
                title=''
                visible={modalEventsVisible}
                footer={null}
                onCancel={() => setModalEventsVisible(false)}
            >
                <List
                    header={<div>Список событий {deyEvents[0]?.data}</div>}
                    bordered
                    dataSource={deyEvents}
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[
                                <Button type="primary" onClick={() => handleDeleteEvent(item._id)}><DeleteOutlined /></Button>
                            ]}
                        >
                            <Typography.Text>{index + 1}</Typography.Text> - {item.description}
                        </List.Item>
                    )}
                />
            </Modal>
        </div>
    );
};

export default Events;