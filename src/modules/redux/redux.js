import React, {Component} from 'react';
import {createStore} from "redux";
import {rootReducer} from "./index";

const store = createStore(rootReducer,0);

window.store =store;

