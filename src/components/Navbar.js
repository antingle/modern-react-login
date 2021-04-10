import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar({isAuth, setIsAuth}) {

    function logout() {
        setIsAuth(false);
    }

    return (
        <nav>
            <h1>Medical Simulations</h1>
            <Link to='/'>Home</Link>
            {(!isAuth) && <Link to='/signin'>Sign In</Link>}
            {(!isAuth) && <Link to='/register'>Register</Link>}
            {(isAuth) && <button onClick={logout}>Logout</button>}
        </nav>
    )
}
