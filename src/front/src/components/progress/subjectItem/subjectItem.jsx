import './subjectItem.scss';

function SubjectItem(props) {
    return (
        <div className="subject-item">
            {props.individual ? <div className="individual"></div> : <div className="group"></div>}
            <div className="language">{props.language}</div>
            <div className="mark">{props.mark}</div>
        </div>
    );
}

export default SubjectItem;
