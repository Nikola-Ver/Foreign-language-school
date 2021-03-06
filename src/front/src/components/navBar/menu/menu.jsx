import { NavLink } from 'react-router-dom';
import './menu.scss';

function Menu() {
    return (
        <div className="menu">
            <NavLink to="/news" className="pink-item">
                <div className="home-img"></div>
                <p>Главная</p>
            </NavLink>
            <NavLink to="/schedule" className="blue-item">
                <div className="schedule-img"></div>
                <p>Расписание</p>
            </NavLink>
            <NavLink to="/progress" className="pink-item">
                <div className="progress-img"></div>
                <p>Успеваемость</p>
            </NavLink>
            <div className="blue-item">
                <div className="home-work-img"></div>
                <p>Домашние задание</p>
            </div>
            <div className="pink-item">
                <div className="courses-img"></div>
                <p>Курсы</p>
            </div>
            <div className="blue-item">
                <div className="message-img"></div>
                <p>Сообщения</p>
            </div>
            <div className="pink-item">
                <div className="material-img"></div>
                <p>Материалы</p>
            </div>
            <div className="blue-item">
                <div className="exit-img"></div>
                <p>Выход</p>
            </div>
        </div>
    );
}

export default Menu;
