const initialState = {
  books: [
    {
      id: 1,
      title: 'book1',
      category: 'Actions',
    },
    {
      id: 2,
      title: 'book2',
      category: 'Actions',
    },
    {
      id: 3,
      title: 'book3',
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
