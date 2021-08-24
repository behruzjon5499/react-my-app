import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./services/router/router";
import {createStore} from "redux";
import contactReducer from "./modules/contact/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
const store = createStore(contactReducer,composeWithDevTools())
ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <Router />
        </div>
    </Provider>
    , document.getElementById('root'));

