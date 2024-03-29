import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  // this gives us the dispatch functions in the store
  const dispatch = useDispatch();

  // the "useSelector" helps to determine which data we want to extract
  // now every time "state.counter" gets an update, this component will be re-rendered 
  // it manages the "redux.subscription" behind the scenes
  const counter = useSelector(state => state.counter.counter);  // state => state.<sliceName>.<sliceStateAttribute>
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseBy5Handler = () => {
    // note that the "5" will be accessed by "actions.payload" (actions.payload === 5)
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>{counter}</div>
      )}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



/** class example

import { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() { };


  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// the keys will be available as props for the class component (for mapStateToProps & mapDispatchToProps)
const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
})

// since you can't use hooks in React components, this is how you would use redux with classes
// (connect can also be used by functional components, but hooks are best practice)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

*/