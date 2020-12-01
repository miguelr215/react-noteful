import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import NotefulContext from '../../NotefulContext';
import config from '../../config';
import './FullNote.css';

export default class FullNote extends React.Component {
    static defaultProps = {
        onDeleteNote: () => {},
    }

    static contextType = NotefulContext;

    handleClickDelete = e => {
        e.preventDefault();
        const noteId = this.props.id;

        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if(!res.ok){
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json();
            })
            .then(() => {
                this.context.deleteNote(noteId);
                this.props.onDeleteNote(noteId);
            })
            .catch(error => {
                console.error({error})
            });
    }

    render(){
        const { name, id, modified } = this.props;
        return(
            <div className='Note'>
                <h2 className='Note_title'>
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                </h2>
                <button
                    type='button'
                    className='Note_delete'
                    onClick={this.handleClickDelete}
                >
                    Delete
                </button>
                <div className='Note_dates'>
                    <div className='Note_dates-modified'>
                        Modified:
                        {' '}
                        <span className='Date'>
                            {modified}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}