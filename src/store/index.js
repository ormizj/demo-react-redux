import { createStore } from 'redux';

const counterState = { counter: 0 };

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                counter: state.counter + 1
            }
        }

        case 'DECREMENT': {
            return {
                counter: state.counter - 1
            }
        }

        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;