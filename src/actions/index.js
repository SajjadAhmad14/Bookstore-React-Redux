const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const REMOVE_BOOK =  {
  type: REMOVE_BOOK
};

const CREATE_BOOK = {
  type: CREATE_BOOK
};

const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    value: book
  }
}

const addBook = (book) => {
  return {
    type: ADD_BOOK,
    value: book
  }
}

export { addBook, removeBook }
