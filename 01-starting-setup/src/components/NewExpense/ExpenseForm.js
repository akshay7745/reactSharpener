import { useState } from "react";

const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState(new Date(1, 1, 2020));
  const [enteredInput, setEnteredInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  console.log(enteredInput);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredInput);
  };
  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title">Enter Title :</label>
        <input
          name="title"
          id="title"
          type="text"
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">Enter Amount :</label>
        <input
          name="amount"
          id="amount"
          type="number"
          onChange={amountChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Enter Date :</label>
        <input name="date" id="date" type="date" onChange={dateChangeHandler} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default ExpenseForm;
