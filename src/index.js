import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./services/router/router";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <div>
        <div className="container">
            <Router />
        </div>
    </div>
    , document.getElementById('root'));

