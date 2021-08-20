import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const [disabled, setDisabled] = useState(false);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBageclasses = () => {
    let classes = "bage m-2 p-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handelIncrement = () => {
    setCount(count + 1);
  };

  const handelDecrement = () => {
    setCount(count - 1);
    // isDisabled();
  };

  // const isDisabled = () => {
  //   if (count < 1) {
  //     setDisabled(true);
  //   }
  // };

  return (
    <div>
      <span className={getBageclasses()}>{formCount()}</span>
      <button onClick={handelIncrement} className="btn btn-secondary btn-sm">
        increment
      </button>
      <button
        onClick={handelDecrement}
        disabled={count === 0}
        className="btn btn-secondary btn-sm"
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
