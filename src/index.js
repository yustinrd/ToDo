import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import App from './components/app';
import { getCategories, getTodos} from './actions';

import './index.css';

store.dispatch(getCategories());
store.dispatch(getTodos());

const application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById('root'));
