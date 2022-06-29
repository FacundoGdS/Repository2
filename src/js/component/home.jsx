import React, { useState } from "react";
//   Importing the useState() hook.

const Home = () => {
  //I set a state: a variable which is a state and can change.
  let [counter, setCounter] = useState(10); //By default is 10, when the browser loads.
  const [amount, setAmount] = useState(1);

  const increaseHandler = () => {
    setCounter((prevState) => prevState + amount);
  };
  const decreaseHandler = () => {
    setCounter((prevState) => prevState - amount);
  };
//React automatically assigns an event to the listener.
  const amountHandler = (event) => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <div className="mg">
      <h1>So this is my counter...</h1>
      <h2>The current value is {counter}.</h2>
      <label htmlFor="amount">Modify by&nbsp;</label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={amountHandler} //Listener.
      />
      &nbsp;
      <button onClick={decreaseHandler}>Decrease</button>&nbsp;
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
};

export default Home;
