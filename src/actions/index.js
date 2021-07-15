const removeBook = (book) => ({ type: 'REMOVE_BOOK', value: book });
const addBook = (book) => ({ type: 'ADD_BOOK', value: book });
export { addBook, removeBook };
