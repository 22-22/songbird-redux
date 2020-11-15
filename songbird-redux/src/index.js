import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './index.scss';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (<Provider store={store}> <App /> </Provider>);

ReactDOM.render(app, document.getElementById('root'));
