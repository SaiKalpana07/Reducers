import React, { useReducer } from 'react';
import FormComponent from './Components/FormComponent';

// Define the initial state of the counter
const initialState = { count: 0 };

// Define the reducer function
const reducer = (state, action) => {console.log("state",state)
  console.log("action",action)
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
};

const Counter = () => {
  // Use the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <FormComponent />
    </div>
  );
};

export default Counter;
