import React from 'react';
import nurse from '../images/nurse.png';
import '../css/card.css';

export default function Card({ title }) {
    return (
        <div className='card'>
            <img src={nurse} alt='nurse' />
            <h2>{title}</h2>
            <p>0%</p>
        </div>
    )
}
