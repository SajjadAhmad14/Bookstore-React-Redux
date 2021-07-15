const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
      title: 'book1',
      category: 'Actions',
    },
  ],
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      break;
    case 'REMOVE_BOOK':
      break;
    default:
  }
  return state;
};

export default booksReducer;
