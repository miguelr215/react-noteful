import React from 'react';

const NotefulContext = React.createContext({
    // database: {},
    // folderList: [],
    // noteList: [],
    // folderId: '',
    // noteId: '',
    // updateFolder: () => {},
    // updateNote: () => {}
    notes: [],
    folders: [],
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {}
})

export default NotefulContext