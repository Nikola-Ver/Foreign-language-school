import { NavLink } from 'react-router-dom';
import './menuAdmin.scss';

function MenuAdmin() {
    return (
        <div className="menu-admin">
            <NavLink to="/news" className="pink-item">
                <div className="news-img"></div>
                <p>Новости</p>
            </NavLink>
            <div className="blue-item">
                <div className="schedule-img"></div>
                <p>Расписание</p>
            </div>
            <div className="pink-item">
                <div className="users-img"></div>
                <p>Пользователи</p>
            </div>
            <div className="blue-item">
                <div className="message-img"></div>
                <p>Сообщения</p>
            </div>
            <div className="pink-item">
                <div className="courses-img"></div>
                <p>Курсы</p>
            </div>
            <div className="blue-item">
                <div className="material-img"></div>
                <p>Материалы</p>
            </div>
            <div className="pink-item">
                <div className="exit-img"></div>
                <p>Выход</p>
            </div>
        </div>
    );
}

export default MenuAdmin;
