import React, { useState } from "react";
//   Importing the useState() hook.

const Home = () => {
  //I set a state: a variable which is a state and can change.
  let [counter, setCounter] = useState(10); //By default is 10, when the browser loads.
  const increaseHandler = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decreaseHandler = () => {
    setCounter((prevState) => prevState - 1);
  };
  return (
    <div className="mg">
      <h1>So this is my counter...</h1>
	  <h2>The current value is {counter}.</h2>
	  <button onClick={decreaseHandler}>Decrease</button>&nbsp;
	  <button onClick={increaseHandler}>Increase</button>
    </div>
  );
};

export default Home;
