import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { getMonths, getResult, getSum, resetTable, subscribe} from "./redux/state";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () => {
    root.render(
            <React.StrictMode>
                <App resetTable={resetTable} getMonths={getMonths} getSum={getSum} getResult={getResult} state={state}/>
            </React.StrictMode>
    );
}

rerenderTree(state);

subscribe(rerenderTree);

reportWebVitals();
