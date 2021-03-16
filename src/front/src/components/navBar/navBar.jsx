import './navBar.scss';
import Menu from './menu/menu';
import { useState } from 'react';

function NavBar() {
    let [flagOpen, setFlagOpen] = useState(false);
    const navBarClassName = flagOpen ? "nav-bar active" : "nav-bar";

    return (
        <div className={navBarClassName} onClick={() => { flagOpen && setFlagOpen(false) }}>
            <div className="buttons">
                <div className="ex-button" onClick={() => { setFlagOpen(!flagOpen) }}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="settings-button"></div>
                <div className="profile-button"></div>
            </div>
            <Menu />
        </div>
    );
}

export default NavBar;
