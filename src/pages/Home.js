import React from 'react';
import Card from '../components/Card';
import '../css/home.css';

export default function Home() {
    return (
        <div className='dashboard'>
            <h3>Dashboard</h3>
            <Card title={'Introduction'}/>
        </div>
    )
}
