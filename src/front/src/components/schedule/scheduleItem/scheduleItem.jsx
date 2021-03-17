import './scheduleItem.scss';

function ScheduleItem(props) {
    return (
        <div className="schedule-item">
            <div className="time">
                <div className="from">{props.timeFrom}</div>
                <div className="to">{props.timeTo}</div>
            </div>
            <div className="main-info">
                <div className="subject">{props.subject}</div>
                <div className="teacher">{props.teacher}</div>
                <div className="palce">{props.place}</div>
                <a href={props.additional.src} target="popup" className="additional">{props.additional.text}</a>
            </div>
        </div>
    );
}

export default ScheduleItem;
