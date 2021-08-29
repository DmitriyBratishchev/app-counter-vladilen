import React from "react";

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
  // console.log(", ;
  // const [value, setValue] = useState(value);

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBadgeClasses = () => {
    let classes = "bage m-2 p-1 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <div className="m-4">
      <h4>{name}</h4>

      <span
        style={{
          display: "inline-block",
          width: "3.5rem",
          textAlign: "center",
        }}
        className={getBadgeClasses()}
      >
        {formValue()}
      </span>
      <button
        onClick={() => onIncrement(id)}
        className="btn btn-secondary btn-sm"
      >
        increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        disabled={value === 0}
        className="btn btn-secondary btn-sm"
      >
        decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
