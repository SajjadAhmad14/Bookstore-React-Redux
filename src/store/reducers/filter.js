const initialState = {
  category: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state, category: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
