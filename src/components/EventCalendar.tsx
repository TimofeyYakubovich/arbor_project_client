import React, { FC, useEffect } from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { formatData } from '../utils/data';
import { Dayjs } from 'dayjs';
import { useLocation } from 'react-router-dom';

interface EventCalendarProps {
    events: IEvent[];
    setModalEventsVisible: any;
    openModal: (event: IEvent[]) => void;
    deyEvents: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({events, setModalEventsVisible, openModal, deyEvents}) => {
    const location = useLocation();

    const dateCellRender = (value: Dayjs) => {
        const path = location.pathname.substring(1)
        const formatedData = formatData(value.toDate())
        const currentDeyEvents = events.filter(ev => ev.data === formatedData && ev.arbor === path)
        return (
            <div 
                
                onClick={() => [openModal(currentDeyEvents), setModalEventsVisible(true), console.log('onClick1'), console.log('deyEvents', deyEvents)]}
            >
                {currentDeyEvents.map((ev, index) => 
                    <div style={{borderBottom: '1px solid black', marginTop: '2px'}}  key={ev._id}>{ev.description}</div>
                )}
            </div>
        );
    };

    return (
        <Calendar
            dateCellRender={dateCellRender} // для ячеек конкретной даты будет отрабатывать эта функция
        />
    );
};

export default EventCalendar;