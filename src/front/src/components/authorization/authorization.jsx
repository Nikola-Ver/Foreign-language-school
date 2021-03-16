import './authorization.scss';

function Authorization() {
  return (
    <div className="authorization">
      <div className="auth-form">
        <input className="text-input" placeholder="E-mail" type="text" name="email" />
        <input className="text-input" placeholder="Пароль" type="text" name="password" />
        <input className="submit-button" type="submit" className="submit-button" value="Вход"/>
        <input className="forgot-password-button" type="submit" value="Забыли пароль?"/>
        <input className="create-account-button" type="submit" value="Создать аккаунт"/>
      </div>
    </div>
  );
}

export default Authorization;
