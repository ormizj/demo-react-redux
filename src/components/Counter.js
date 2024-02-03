import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // this gives us the dispatch functions in the store
  const dispatch = useDispatch();

  // the "useSelector" helps to determine which data we want to extract
  // now every time "state.counter" gets an update, this component will be re-rendered 
  // it manages the "redux.subscription" behind the scenes
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    return dispatch({ type: 'INCREMENT' });
  }

  const decrementHandler = () => {
    return dispatch({ type: 'DECREMENT' });
  }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
