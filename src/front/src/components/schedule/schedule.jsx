import './schedule.scss';
import ScheduleItem from './scheduleItem/scheduleItem';
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

function Schedule() {
    let [startDate, setStartDate] = useState(new Date());

    return (
        <div className="schedule">
            <div className="header">Расписание</div>
            <div className="data-box">
                <DatePicker id="data" locale="ru" selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            <div className="info">
                <ScheduleItem timeFrom={'17:00'} timeTo={'18:30'} subject={'Английский язык'} teacher={'Верещагин Н. В.'} additional={{src: '', text: '(доп инфа.)'}} place={'Discord'} />
                <ScheduleItem timeFrom={'17:00'} timeTo={'18:30'} subject={'Английский язык'} teacher={'Верещагин Н. В.'} additional={{src: '', text: '(доп инфа.)'}} place={'209-4'} />
            </div>
        </div>
    );
}

export default Schedule;
