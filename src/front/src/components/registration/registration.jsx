import './registration.scss';

function Registration() {
  return (
    <div className="registration">
      <div className="reg-form">
        <input className="text-input" placeholder="Имя" type="text" name="first-name" />
        <input className="text-input" placeholder="Фамилия" type="text" name="last-name" />
        <input className="text-input" placeholder="E-mail" type="text" name="email" />
        <input className="text-input" placeholder="Номер телефона" type="text" name="phone" />
        <input className="text-input" placeholder="Пароль" type="text" name="password" />
        <input className="text-input" placeholder="Подтвердите пароль" type="text" name="re-password" />
        <input className="submit-button" type="submit" value="Регистрация"/>
      </div>
    </div>
  );
}

export default Registration;
