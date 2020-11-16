import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

class Note extends Component {
    render(){
        return(
            <div className='note'>
                <h3>
                    <Link to={`/note/:${this.props.id}`}>
                        {this.props.name}
                    </Link>
                </h3>
                <div className='noteInfo'>
                    <p>Last Update: {this.props.modified}</p>
                    <button className='deleteNotebtn'>
                        Delete Note
                    </button>
                </div>
            </div>
        )
    }
}

export default Note;