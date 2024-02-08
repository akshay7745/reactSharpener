import { useState } from "react";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState(new Date(1, 1, 2020));
  const [enteredInput, setEnteredInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredInput);
    props.onSaveExpenseData(enteredInput);
    setEnteredInput({
      title: "",
      amount: "",
      date: "",
    });
    setIsFormVisible(false);
  };
  const titleChangeHandler = (e) => {
    setEnteredInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setEnteredInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setEnteredInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };
  return isFormVisible ? (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title">Enter Title :</label>
        <input
          name="title"
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={enteredInput.title}
        />
      </div>
      <div>
        <label htmlFor="amount">Enter Amount :</label>
        <input
          name="amount"
          id="amount"
          type="number"
          onChange={amountChangeHandler}
          value={enteredInput.amount}
        />
      </div>
      <div>
        <label htmlFor="date">Enter Date :</label>
        <input
          name="date"
          id="date"
          type="date"
          onChange={dateChangeHandler}
          value={enteredInput.date}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setIsFormVisible(false);
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  ) : (
    <div>
      <button
        onClick={() => {
          setIsFormVisible(true);
        }}
      >
        Add new Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
