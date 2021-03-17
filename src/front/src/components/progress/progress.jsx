import './progress.scss';
import SubjectItem from './subjectItem/subjectItem';

function Progress() {
    return (
        <div className="progress">
            <div className="header">Успеваемость</div>
            <div className="info">
                <SubjectItem language={'Английский язык'} mark={100} individual={true} />
                <SubjectItem language={'Английский язык'} mark={100} individual={false} />
            </div>
        </div>
    );
}

export default Progress;
