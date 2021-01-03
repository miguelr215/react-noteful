import React from 'react';
import { Link } from 'react-router-dom';
import PillButton from '../PillButton/PillButton';
import NotefulContext from '../../NotefulContext';
import config from '../../config';
import { generateRandomCharacters } from '../notes-helpers';
import './AddNote.css';

export default class AddNote extends React.Component {
    static contextType = NotefulContext;

    state = {
        error: null
    }

    handleSubmit = e => {
        e.preventDefault();
        const { noteName, noteContent, noteFolder } = e.target;
        console.log(noteName.value);
        console.log(noteContent.value);
        console.log(noteFolder.value);

        this.setState({error: null});

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlencoded = new URLSearchParams();
        urlencoded.append('id', generateRandomCharacters(18));
        urlencoded.append('name', noteName.value);
        urlencoded.append('modified', new Date());
        urlencoded.append('folderId', noteFolder.value);
        urlencoded.append('content', noteContent.value);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(config.POST_NOTES, requestOptions)
            .then(res => {
                if(!res){
                    return res.json().then(error => {throw error})
                }
                return res.json()
            })
            .then(data => {
                noteName.value = ''
                noteFolder.value = ''
                noteContent.value = ''
                this.context.addNote(data)
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({error})
            })
    }

    render(){
        const { error } = this.state;
        const { folders=[] } = this.context;
        const folderList = folders.map(folder => (
            <option 
                value={folder.id}
                key={folder.id}
            >
                {folder.name}
            </option>
        ));
        console.log(folderList);
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Add Note</h2>
                <div className='AddNote__error' role='alert'>
                    {error && <p>{error.message}</p>}
                </div>
                <label htmlFor='noteName'>
                    Name: 
                </label>
                <input 
                    type='text'
                    placeholder='Name of Note'
                    name='noteName'
                    id='noteName'
                    required
                />
                <label htmlFor='noteContent'>
                    Note content: 
                </label>
                <textarea 
                    placeholder='what should this note say?'
                    id='noteContent'
                    name='noteContent'
                    wrap='hard'
                    cols='70'
                    rows='6'
                />
                <label htmlFor='noteFolder'>
                    Save Note to which Folder?
                </label>
                <select id='noteFolder' name='noteFolder'>
                    {folderList}
                </select>
                <PillButton
                    tag='button'
                    type='submit'>
                    Save
                </PillButton>
                <PillButton
                    tag={Link}
                    type='button'
                    to='/'>
                    Cancel
                </PillButton>
            </form>
        )
    }
}

