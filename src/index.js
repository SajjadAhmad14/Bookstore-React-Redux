import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/configureStore';
import './fonts/Montserrat/Montserrat-Bold.ttf';
import './fonts/Montserrat/Montserrat-Regular.ttf';
import './fonts/RobotoSlab/RobotoSlab-Bold.ttf';
import './fonts/RobotoSlab/RobotoSlab-Regular.ttf';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
