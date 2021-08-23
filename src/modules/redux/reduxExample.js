import React, {Component} from 'react';
import {decrement, increment, initApplication} from "./actions";
import {createStore,applyMiddleware,compose} from "redux";
import {rootReducer} from "./index";
import {logger} from "redux-logger/src";
import thunk from 'redux-thunk';
import composeEnhancers from 'redux-devtools-extension'
class ReduxExample extends Component {


    render() {

        const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

        const inc = document.getElementById('inc');
        const dec = document.getElementById('dec');
        const counter = document.getElementById('counter');
        const store = createStore(
            rootReducer,
            composeEnhancers(
                applyMiddleware(thunk, logger)
            )
        )
        window.store = store;
        inc.addEventListener('click', () => {
            store.dispatch(increment())
        })
        dec.addEventListener('click', () => {
            store.dispatch(decrement())
        })
        store.subscribe(() => {
            const state = store.getState();
            counter.textContent = state.counter;

        })
        store.dispatch(initApplication())
        return (
            <div>

                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-primary" id="inc">
                            INCREMENT
                        </button>
                    </div>
                    <div className="col-md-2" >
                        <h1 className="number"> Counter:
                            <span id="counter"></span>
                        </h1>
                    </div>
                    <div className="col-md-2" id="dec">
                        <button className="btn btn-warning">
                            DECREMENT
                        </button>
                    </div>
                    <div className="col-md-6"/>
                </div>
            </div>
        );
    }
}

export default ReduxExample;