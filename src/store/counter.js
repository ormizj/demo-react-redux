import { createSlice } from "@reduxjs/toolkit";

const counterInitState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitState,
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
    },
});

// counterSlice.actions, will contain methods that are used to dispatch (they receive 1 parameter which is the "payload" E.G. { amount: 5 })
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;