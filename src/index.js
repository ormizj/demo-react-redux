import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

// similar to react context, you need the provider in order to access the store
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
