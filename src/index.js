import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
// const books = store.getState();
// console.log(books);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
