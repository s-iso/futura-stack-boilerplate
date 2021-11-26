import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/index";

export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
