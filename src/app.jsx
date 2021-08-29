// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Counters from "./component/counters";
import NavBar from "./component/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Что-то нужное" },
    { value: 0, id: 5, name: "Что-то лишнее" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handelDelete = (counterId) => {
    console.log("delete", counterId);
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handelReset = () => {
    setCounters(initialState);
  };

  const handelIncrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value++;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handelDecrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value--;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar
          totalItems={counters.reduce((a, c) => {
            return a + c.value;
          }, 0)}
        />
        <Counters
          onIncrement={handelIncrement}
          onDecrement={handelDecrement}
          onReset={handelReset}
          onDelete={handelDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
