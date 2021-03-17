import './profile.scss';

function Profile() {
    return (
        <div className="profile">
            <div className="header">Профиль</div>
            <div className="profile-form">
                <input className="text-input" placeholder="Имя" type="text" name="first-name" />
                <input className="text-input" placeholder="Отчество" type="text" name="middle-name" />
                <input className="text-input" placeholder="Фамилия" type="text" name="last-name" />
                <input className="text-input" placeholder="E-mail" type="email" name="email" />
                <input className="text-input" placeholder="Номер телефона" type="phone+" name="phone" />
                <input className="text-input" placeholder="Пароль" type="password" name="password" />
                <input className="submit-button" type="submit" value="Применить"/>
            </div>
        </div>
    );
}

export default Profile;
