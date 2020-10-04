import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header className="phonebook__header">
            <Link to="/">
                <div className="phonebook_logo">PhoneBook</div>
            </Link>
            <Link to="/login">
                <div className="phonebook__login">LogIn</div>
            </Link>
            <Link to="/register">
                <div className="phonebook__register">Register</div>
            </Link>
            <Link to="/user">
                <div className="userMenu__profile">User Menu</div>
            </Link>
        </header>
    )
};

export default Header;