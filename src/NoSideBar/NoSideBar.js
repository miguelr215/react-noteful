import React from 'react';
import whoops from '../whoops.png';
import './NoSideBar.css';

export default function NoSideBar(){
    return(
        <div className='noSideBar'>
            <img src={whoops} alt='emoji thinking hard'/>
        </div>
    )
}