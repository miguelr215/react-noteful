import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import './SideBar.css';

class SideBar extends Component {
    render(){
        return (
            <div className='sidebar'>
                <Folder />
            </div>
        )
    }
}

export default SideBar;