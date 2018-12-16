import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import postReducer from './reducer/postReducer';

const store = createStore(postReducer);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));


// Explore here : https://codeburst.io/redux-a-crud-example-abb834d763c9
