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
  const { value, type } = action;
  switch (type) {
    case 'ADD_BOOK':
      return [...state.books, value];
    default:
      return state;
  }
};

export default booksReducer;
