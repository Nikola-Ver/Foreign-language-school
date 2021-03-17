import './navBar.scss';
import Menu from './menu/menu';
import { useState } from 'react';

function NavBar() {
    let [isOpen, setIsOpen] = useState(false);
    const navBarClassName = isOpen ? "nav-bar active" : "nav-bar";

    return (
        <div className={navBarClassName} onClick={() => { isOpen && setIsOpen(false) }}>
            <div className="buttons">
                <div className="ex-button" onClick={() => { setIsOpen(!isOpen) }}>
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
