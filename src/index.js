import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import booksReducer from './reducers/books';
import App from './components/App';

const state = [
  {
    id: Math.random(),
    title: 'book1',
    category: 'Actions',
  },
];
const store = createStore(state, booksReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
