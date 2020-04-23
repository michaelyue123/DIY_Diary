import React from 'react';
import ReactDOM from 'react-dom';
import App from './_components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './_helpers'

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);