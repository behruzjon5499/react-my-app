import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./services/router/router";

ReactDOM.render(
    <div>
        <div className="container">
            <Router />
        </div>
    </div>
    , document.getElementById('root'));

