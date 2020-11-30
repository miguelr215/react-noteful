import React from 'react';

const NotefulContext = React.createContext({
    database: {},
    folderList: [],
    noteList: [],
    folderId: '',
    noteId: '',
    updateFolder: () => {},
    updateNote: () => {}
})

export default NotefulContext