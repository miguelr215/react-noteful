import React from 'react';
import { Link } from 'react-router-dom';
import PillButton from '../PillButton/PillButton';
import config from '../../config';
import NotefulContext from '../../NotefulContext';
import { generateRandomCharacters } from '../notes-helpers';
import './AddFolder.css';

export default class AddFolder extends React.Component {
    static contextType = NotefulContext;

    state = {
        error: null
    };

    handleSubmit = e => {
        e.preventDefault();
        const { newFolderName } = e.target;
        // const newFolder = {
        //     'id': generateRandomCharacters(12),
        //     'name': newFolderName.value
        // }
        // console.log(newFolder);

        this.setState({error: null});

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlencoded = new URLSearchParams();
        urlencoded.append('id', generateRandomCharacters(12));
        urlencoded.append('name', newFolderName.value);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(config.POST_FOLDER, requestOptions)
            .then(res => {
                if(!res){
                    return res.json().then(error => {throw error})
                }
                return res.json()
            })
            .then(data => {
                newFolderName.value = ''
                this.context.addFolder(data)
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({error})
            });
    };

    render(){
        const { error } = this.state;
        return(
            <div className='addFolderForm'>
                <h2>Add Folder</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='AddFolder__error' role='alert'>
                        {error && <p>{error.message}</p>}
                    </div>
                    <label htmlFor='folderName'>New Folder Name: </label>
                    <input 
                        type='text'
                        placeholder='enter new folder name here'
                        name='newFolderName'
                        id='newFolderName'
                        required
                    />
                    <PillButton
                        tag='button'
                        type='submit'>
                        Submit
                    </PillButton>
                    <PillButton
                        tag={Link}
                        type='button'
                        to='/'>
                        Cancel
                    </PillButton>
                </form>
            </div>
        )
    }
}