import React from 'react';

const NotefulContext = React.createContext({
    database: {},
    folderList: [],
    noteList: [],
    updateFolder: () => {},
    updateNote: () => {}
})

export default NotefulContext