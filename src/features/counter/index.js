import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncrement = () => {
    const action = increment();
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = decrement();
    dispatch(action);
  };
  return (
    <div>
      <p>Counter {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
