import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            // when using the "createSlice", you can mutate the state directly
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        // other reducers do not need to use the action, so its omitted
        increase(state, action) {
            // the action will ALWAYS have a "payload"
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// configureStore will merge all the reducers into a single one (using a general one in this case)
const store = configureStore({
    reducer: counterSlice.reducer
});

// counterSlice.actions, will contain methods that are used to dispatch (they receive 1 parameter which is the "payload" E.G. { amount: 5 })
export const counterActions = counterSlice.actions;
export default store;