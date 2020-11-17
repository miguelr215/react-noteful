import React from 'react';
import { Link } from 'react-router-dom';
import './NoPageFound.css';

export default function NoPageFound(){
    return(
        <div className='errorPage'>
            <h3>Whoops!</h3>
            <p>Sorry we cannot find that page right now</p>
            <p>Please navigate back or <Link to='/'>click here</Link> to go to the homepage</p>
        </div>
    )
};