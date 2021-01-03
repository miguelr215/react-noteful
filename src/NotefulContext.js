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
    folderId: '',
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {},
    selectFolderId: () => {}
})

export default NotefulContext