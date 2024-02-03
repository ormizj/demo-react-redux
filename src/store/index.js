import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// configureStore will ALWAYS be called only once
const store = configureStore({
    reducer: {
        // both reducers will be merged together into this single "store"
        counter: counterReducer,
        auth: authReducer,
    }
});

export default store;