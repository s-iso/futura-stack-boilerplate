import React from 'react';
import App from './js/App';
import { Provider } from 'react-redux';
import store from './js/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {getTestData} from "./js/actions/async/api/routes/testData";

store.dispatch(getTestData());

const Root = () => {
    return (
        <Provider store={store}>
	    <App/>
        </Provider>
    );
}

export default Root;
