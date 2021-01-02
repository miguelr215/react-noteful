export const findFolder = (folders=[], folderId) =>
    folders.find(folder => folder.id === folderId);

export const findNote = (notes=[], noteId) =>
    notes.find(note => note.id === noteId);

export const getNotesForFolder = (notes=[], folderId) => (
    (!folderId)
        ? notes
        : notes.filter(note => note.folderId === folderId)
);

export const countNotesForFolder = (notes=[], folderId) => 
    notes.filter(note => note.folderId === folderId).length;

export function generateRandomCharacters(keyLength){
    let result = '';
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for(let i = 0; i < keyLength; i++){
        result += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1)
    };
    return result;
};