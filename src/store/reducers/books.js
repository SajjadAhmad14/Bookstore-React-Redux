const initialState = [
  {
    id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
    title: 'The Hunger Games',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
    title: 'Dune',
    category: 'History',
  },
  {
    id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
    title: 'Capital in the Twenty-First Century',
    category: 'Education',
  },
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
