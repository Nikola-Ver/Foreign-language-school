import './navBar.scss';
import Menu from './menu/menu';
import MenuAdmin from './menuAdmin/menuAdmin';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
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
                <NavLink to="/settings" className="settings-button"></NavLink>
                <NavLink to="/profile" className="profile-button"></NavLink>
            </div>
            { props?.admin ? <MenuAdmin /> : <Menu /> }
        </div>
    );
}

export default NavBar;
