const initialState = [
];
const books = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        action.payload,
      ];
    case 'REMOVE_BOOK':
      return [
        ...state.filter((el) => el.id !== action.book.id),
      ];
    default:
      return state;
  }
};

export default books;
