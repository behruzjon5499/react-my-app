import React, {Component} from 'react';
import {decrement, increment, initApplication} from "./actions";
import {createStore,applyMiddleware,compose} from "redux";
import {rootReducer} from "./index";
import {logger} from "redux-logger/src";
import thunk from 'redux-thunk';

class ReduxExample extends Component {

    render() {
        const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

        const store = createStore(
            rootReducer,
            composeEnhancers(
                applyMiddleware(thunk, logger)
            )
        )
        store.subscribe(() => {
            const state = store.getState();
           document.getElementById('number').textContent = state.counter;

        })
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-primary"  onClick={() => store.dispatch(increment())}>
                            INCREMENT
                        </button>
                    </div>
                    <div className="col-md-2" >
                        <h1 className="number"> Counter:
                            <span id="number"></span>
                        </h1>
                    </div>
                    <div className="col-md-2" onClick={() => store.dispatch(decrement())}>
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