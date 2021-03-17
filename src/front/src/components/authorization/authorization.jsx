import { NavLink } from 'react-router-dom';
import './authorization.scss';

function Authorization() {
  return (
    <div className="authorization">
      <div className="auth-form">
        <input className="text-input" placeholder="E-mail" type="text" name="email" />
        <input className="text-input" placeholder="Пароль" type="text" name="password" />
        <input className="submit-button" type="submit" className="submit-button" value="Вход" />
        <input className="forgot-password-button" type="submit" value="Забыли пароль?" />
        <NavLink to="/registration" className="create-account-button">Создать аккаунт</NavLink>
      </div>
    </div>
  );
}

export default Authorization;
