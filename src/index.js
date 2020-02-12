import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CoffeeProvider } from "./context";

ReactDOM.render(
    <CoffeeProvider>
        <App />
    </CoffeeProvider>,
    document.getElementById('root'));
