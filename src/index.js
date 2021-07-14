import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import booksReducer from './reducers/books';
import App from './components/App';

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
    }
  ]
}
const store = createStore(booksReducer,initialState);
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
