import React from 'react';
import '../css/navbar.css';

export default function Navbar({isAuth, setIsAuth}) {

    function logout() {
        setIsAuth(false);
    }

    return (
        <nav>
            <h1>Medical Simulations</h1>
            {(isAuth) && <button onClick={logout}>Logout</button>}
        </nav>
    )
}
