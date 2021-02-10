import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from 'redux';
import { Provider  } from 'react-redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));